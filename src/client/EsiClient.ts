import { Pipeline, EsiContext } from "../core/Pipeline";
import { QueueManager } from "../core/QueueManager";
import { HttpClient } from "../core/HttpClient";
import { createRateLimitMiddleware } from "../middlewares/rate-limit";
import { EsiScope, GeneratedApi } from "../api/GeneratedApi";
import { EsiRequester } from "./EsiRequester";
import { TokenProvider } from "../auth/TokenProvider";
import { createAuthMiddleware } from "../middlewares/auth";
import { PublicCharacter } from "../domains/Character";
import { EsiApiError } from "../core/errors";
import { AuthClient } from "./AuthClient";
import { PublicAlliance } from "../domains/Alliance";
import { PublicCorporation } from "../domains/Corporation";
import { camelToSnakeObj, snakeToCamelObj } from "../utils/transformer";

export interface UserAgentConfig {
    appName: string;
    contact: string;
    repository?: string;
}

export interface EsiClientOptions {
    agent: UserAgentConfig | string;
    clientId?: string;
    timeoutMs?: number;
    tokenProvider?: TokenProvider;
}

type QueryParamValue =
    | string
    | number
    | boolean
    | string[]
    | number[]
    | string[][]
    | number[][]
    | undefined
    | null;

export interface RequestOptions {
    method: "GET" | "POST" | "PUT" | "DELETE";
    path: string;
    query?: Record<string, QueryParamValue>;
    headers?: Record<string, string>;
    body?: unknown;
    rateLimitGroup?: string;
    requiresAuth: boolean;
    scopes?: EsiScope[];
}

export class EsiClient implements EsiRequester {
    private readonly pipeline: Pipeline;
    private readonly queueManager: QueueManager;
    private readonly httpClient: HttpClient;
    public readonly api: GeneratedApi;
    private readonly LIBRARY_AGENT = "@strata/esi/0.1.0";

    private readonly formattedUserAgent: string;

    constructor(private readonly options: EsiClientOptions) {
        this.formattedUserAgent = this.buildUserAgent(options.agent);

        this.pipeline = new Pipeline();
        this.queueManager = new QueueManager();
        this.httpClient = new HttpClient({
            timeoutMs: options.timeoutMs || 10_000,
        });

        this.pipeline.use(createAuthMiddleware(options.tokenProvider));
        this.pipeline.use(createRateLimitMiddleware(this.queueManager));

        this.pipeline.use(async (ctx, next) => {
            ctx.request.headers.set("User-Agent", this.formattedUserAgent);
            await this.httpClient.request(ctx);
            await next();
        });

        this.api = new GeneratedApi(this);
    }

    private buildUserAgent(agent: UserAgentConfig | string): string {
        if (typeof agent === "string") {
            return `${agent.trim()} ${this.LIBRARY_AGENT}`;
        }

        const { appName, contact, repository } = agent;
        const repoString = repository ? `; +${repository}` : "";

        return `${appName} (${contact}${repoString}) ${this.LIBRARY_AGENT}`;
    }

    public async request<T>(
        options: RequestOptions,
        userId?: number,
    ): Promise<T> {
        let route = options.path;

        const safeQuery = options.query
            ? camelToSnakeObj(options.query)
            : undefined;

        if (safeQuery) {
            const searchParams = new URLSearchParams();
            for (const [key, value] of Object.entries(safeQuery)) {
                if (value !== undefined && value !== null) {
                    searchParams.append(key, String(value));
                }
            }
            const qs = searchParams.toString();
            if (qs) route += `?${qs}`;
        }

        const headers = new Headers();
        headers.set("Content-Type", "application/json");
        if (options.headers) {
            for (const [key, value] of Object.entries(options.headers)) {
                headers.set(key, String(value));
            }
        }

        const safeBody = options.body
            ? camelToSnakeObj(options.body)
            : undefined;

        const ctx: EsiContext = {
            request: {
                method: options.method,
                route,
                headers,
                body: safeBody,
            },
            state: {
                rateLimitGroup: options.rateLimitGroup || "default",
                userId,
                isAuthRequired: options.requiresAuth,
            },
        };

        const result = await this.pipeline.execute(ctx);

        if (result.response && result.response.status >= 400) {
            throw new EsiApiError(
                result.response.status,
                result.response.data,
                `ESI request failed on ${options.method} ${options.path}`,
            );
        }

        return snakeToCamelObj(result.response?.data) as T;
    }

    public as(userId: number): AuthClient {
        const scopedRequester: EsiRequester = {
            request: <T>(options: RequestOptions) => {
                return this.request<T>(options, userId);
            },
        };

        const scopedApi = new GeneratedApi(scopedRequester);

        return new AuthClient(scopedApi, userId);
    }

    public character(id: number) {
        return new PublicCharacter(this.api, id);
    }

    public alliance(id: number) {
        return new PublicAlliance(this.api, id);
    }

    public async alliances() {
        const info = await this.api.getAlliances();

        return info.map((id) => new PublicAlliance(this.api, id));
    }

    public corporation(id: number) {
        return new PublicCorporation(this.api, id);
    }
}
