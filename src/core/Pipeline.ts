export interface EsiContext {
    request: {
        route: string;
        method: "GET" | "POST" | "PUT" | "DELETE";
        headers: Headers;
        body?: unknown;
    };
    response?: {
        status: number;
        headers: Headers;
        data: unknown;
    };
    state: {
        rateLimitGroup?: string | undefined;
        userId?: number | undefined;
        isAuthRequired: boolean;
    };
}

export type NextFunction = () => Promise<void>;

export type Middleware = (ctx: EsiContext, next: NextFunction) => Promise<void>;

export class Pipeline {
    private middlewares: Middleware[] = [];

    public use(middleware: Middleware): this {
        this.middlewares.push(middleware);
        return this;
    }

    public async execute(ctx: EsiContext): Promise<EsiContext> {
        let index = -1;

        const dispatch = async (i: number): Promise<void> => {
            if (i <= index) {
                throw new Error(
                    "next() function is used more than one within a middleware",
                );
            }

            index = i;

            if (i === this.middlewares.length) return;

            const currentMiddleware = this.middlewares[i]!;

            await currentMiddleware(ctx, dispatch.bind(null, i + 1));
        };

        await dispatch(0);

        return ctx;
    }
}
