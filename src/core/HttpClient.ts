import { EsiError, EsiTimeoutError } from "./errors";
import { EsiContext } from "./Pipeline";

export interface HttpClientOptions {
    baseUrl?: string;
    timeoutMs?: number;
}

export class HttpClient {
    private readonly baseUrl: string;
    private readonly timeoutMs: number;

    constructor(options: HttpClientOptions = {}) {
        this.baseUrl = options.baseUrl || "https://esi.evetech.net";
        this.timeoutMs = options.timeoutMs || 10_000;
    }

    public async request(ctx: EsiContext): Promise<EsiContext> {
        const { route, method, headers, body } = ctx.request;

        const targetUrl = `${this.baseUrl}${route}`;

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);

        try {
            if (!headers.has("Accept")) {
                headers.set("Accept", "application/json");
            }

            if (!headers.has("Content-Type")) {
                headers.set("Content-Type", "application/json");
            }

            const requestOptions: RequestInit = {
                method,
                headers,
                signal: controller.signal,
            };

            if (body !== undefined && body !== null) {
                requestOptions.body = JSON.stringify(body);
            }

            const fetchResponse = await fetch(targetUrl, requestOptions);

            const responseHeaders = new Headers();
            fetchResponse.headers.forEach((value, key) => {
                responseHeaders.set(key.toLowerCase(), value);
            });

            let responseData: unknown = null;
            if (fetchResponse.status !== 204 && fetchResponse.status !== 304) {
                const text = await fetchResponse.text();
                if (text) {
                    try {
                        responseData = JSON.parse(text);
                    } catch {
                        responseData = text;
                    }
                }
            }

            ctx.response = {
                status: fetchResponse.status,
                headers: responseHeaders,
                data: responseData,
            };

            return ctx;
        } catch (error: unknown) {
            if (error instanceof Error && error.name === "AbortError") {
                throw new EsiTimeoutError(this.timeoutMs);
            }

            if (error instanceof Error) {
                throw new EsiError(`Network request failed: ${error.message}`);
            }

            throw error;
        } finally {
            clearTimeout(timeoutId);
        }
    }
}
