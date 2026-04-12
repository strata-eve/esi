import { Middleware, NextFunction, EsiContext } from "../core/Pipeline";
import { QueueManager } from "../core/QueueManager";

export const createRateLimitMiddleware = (
    queueManager: QueueManager,
): Middleware => {
    return async (ctx: EsiContext, next: NextFunction): Promise<void> => {
        const group = ctx.state.rateLimitGroup || "default";

        const userId = ctx.state.userId || "anonymous";

        const bucketId = `${group}:${userId}`;

        await queueManager.enqueue(bucketId, ctx, async (currentCtx) => {
            await next();

            return currentCtx;
        });
    };
};
