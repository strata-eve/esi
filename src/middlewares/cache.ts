import { EsiContext, NextFunction } from "../core/Pipeline";

export interface CacheEntry {
    data: unknown;
    headers: Record<string, string>;
    expiresAt: number;
    etag?: string;
}

export interface CacheStore {
    get(key: string): Promise<CacheEntry | undefined> | CacheEntry | undefined;
    set(key: string, value: CacheEntry): Promise<void> | void;
    delete(key: string): Promise<void> | void;
    clear(): Promise<void> | void;
}

export class MemoryCacheStore implements CacheStore {
    private cache = new Map<string, CacheEntry>();

    public get(key: string) {
        return this.cache.get(key);
    }

    public set(key: string, value: CacheEntry) {
        this.cache.set(key, value);
    }

    public delete(key: string) {
        this.cache.delete(key);
    }

    public clear() {
        this.cache.clear();
    }
}

export function createCacheMiddleware(
    store: CacheStore = new MemoryCacheStore(),
) {
    return async (ctx: EsiContext, next: NextFunction): Promise<void> => {
        if (ctx.request.method !== "GET") {
            return next();
        }

        const token = ctx.request.headers.get("Authorization") || "public";
        const queryParams = ctx.request.query
            ? JSON.stringify(
                  Object.keys(ctx.request.query)
                      .sort()
                      .reduce(
                          (result, key) => {
                              result[key] = ctx.request.query![key];
                              return result;
                          },
                          {} as Record<string, unknown>,
                      ),
              )
            : "";
        const cacheKey = `${ctx.request.method}:${ctx.request.path}:${queryParams}:${token}`;

        const cached = await store.get(cacheKey);
        const now = Date.now();

        if (cached) {
            if (cached.expiresAt > now) {
                ctx.response = {
                    status: 200,
                    data: cached.data,
                    headers: new Headers(cached.headers),
                };
                return;
            }

            if (cached.etag) {
                ctx.request.headers = ctx.request.headers || new Headers();
                ctx.request.headers.set("If-None-Match", cached.etag);
            }
        }

        await next();

        if (!ctx.response) return;

        if (ctx.response.status === 304 && cached) {
            const expiresHeader = ctx.response.headers.get("expires");
            const newExpiresAt = expiresHeader
                ? new Date(expiresHeader).getTime()
                : now + 60_000;

            cached.expiresAt = newExpiresAt;

            ctx.response.status = 200;
            ctx.response.data = cached.data;

            await store.set(cacheKey, cached);
        } else if (ctx.response.status === 200) {
            const expiresHeader = ctx.response.headers.get("expires");
            const etagHeader = ctx.response.headers.get("etag");

            const expiresAt = expiresHeader
                ? new Date(expiresHeader).getTime()
                : now + 60000;

            const headersRecord: Record<string, string> = {};
            ctx.response.headers.forEach((value, key) => {
                headersRecord[key] = value;
            });

            await store.set(cacheKey, {
                data: ctx.response.data,
                headers: headersRecord,
                expiresAt,
                etag: etagHeader || undefined,
            });
        }
    };
}
