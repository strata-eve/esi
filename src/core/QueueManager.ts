import { EsiContext } from "./Pipeline";

interface BucketState {
    remaining: number;
    resetTime: number;
    lastRequestTime: number;
    isProcessing: boolean;
    isUnmetered: boolean;
}

interface RequestTask {
    ctx: EsiContext;
    resolve: (value: EsiContext) => void;
    reject: (reason: unknown) => void;
    executor: (ctx: EsiContext) => Promise<EsiContext>;
}

export class QueueManager {
    private buckets = new Map<string, BucketState>();
    private tasks = new Map<string, RequestTask[]>();

    private readonly PACING_DELAY = 50;

    public async enqueue(
        bucketId: string,
        ctx: EsiContext,
        executor: (ctx: EsiContext) => Promise<EsiContext>,
    ): Promise<EsiContext> {
        if (!this.tasks.has(bucketId)) {
            this.tasks.set(bucketId, []);
            this.buckets.set(bucketId, {
                remaining: 1,
                resetTime: 0,
                lastRequestTime: 0,
                isProcessing: false,
                isUnmetered: false,
            });
        }

        return new Promise((resolve, reject) => {
            this.tasks.get(bucketId)!.push({ ctx, resolve, reject, executor });
            this.process(bucketId);
        });
    }

    private async process(bucketId: string): Promise<void> {
        const bucket = this.buckets.get(bucketId)!;
        const queue = this.tasks.get(bucketId)!;

        if (bucket.isProcessing || queue.length === 0) return;

        bucket.isProcessing = true;

        while (queue.length > 0) {
            const task = queue[0]!;

            const now = Date.now();
            if (bucket.remaining <= 0 && now < bucket.resetTime) {
                const sleepTime = bucket.resetTime - now;
                await new Promise((r) => setTimeout(r, sleepTime));
                continue;
            }

            const timeSinceLastRequest = now - bucket.lastRequestTime;
            if (timeSinceLastRequest < this.PACING_DELAY) {
                await new Promise((r) =>
                    setTimeout(r, this.PACING_DELAY - timeSinceLastRequest),
                );
                continue;
            }

            queue.shift();
            bucket.lastRequestTime = Date.now();

            try {
                const result = await task.executor(task.ctx);

                this.updateBucket(bucketId, result.response?.headers);

                task.resolve(result);
            } catch (error: unknown) {
                const err = error as {
                    status?: number;
                    response?: {
                        headers?: Headers;
                    };
                };

                if (err?.status === 429 && err?.response?.headers) {
                    this.updateBucket(bucketId, err.response.headers!);
                    queue.unshift(task);
                } else {
                    task.reject(error);
                }
            }
        }

        bucket.isProcessing = false;
    }

    private updateBucket(bucketId: string, headers?: Headers): void {
        const bucket = this.buckets.get(bucketId)!;

        if (!headers) headers = new Headers();

        const remainingKey = Object.keys(headers).find(
            (k) => k.toLowerCase() === "x-ratelimit-remaining",
        );
        const retryAfterKey = Object.keys(headers).find(
            (k) => k.toLowerCase() === "retry-after",
        );

        if (remainingKey && headers.get(remainingKey)) {
            bucket.remaining = parseInt(headers.get(remainingKey)!, 10);
            bucket.isUnmetered = false;
        } else {
            bucket.remaining = 9999;
            bucket.isUnmetered = false;
        }

        const remaining = headers.get("x-ratelimit-remaining");
        if (remaining) bucket.remaining = parseInt(remaining, 10);

        if (retryAfterKey && headers.get(retryAfterKey)) {
            bucket.resetTime =
                Date.now() + parseInt(headers.get(retryAfterKey)!, 10) * 1000;
            bucket.remaining = 0;
        }
    }
}
