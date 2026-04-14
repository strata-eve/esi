import * as crypto from "crypto";
import { EsiScope } from "../api/GeneratedApi";
import { createRemoteJWKSet, jwtVerify } from "jose";
import { EsiApiError, EsiAuthError, EsiValidationError } from "../core/errors";

export interface ValidatedEveToken {
    characterId: string;
    characterName: string;
    scopes: string[];
    expiresAt: number;
}

export interface SsoConfiguration {
    clientId: string;
    redirectUri: string;
}

export interface AuthorizationRequest {
    url: string;
    state: string;
    codeVerifier?: string;
}

export interface EsiTokenResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
    refresh_token: string;
}

export interface TokenExchangeOptions {
    clientSecret?: string;
    codeVerifier?: string;
}

export class SsoManager {
    private readonly authorizationEndpoint =
        "https://login.eveonline.com/v2/oauth/authorize";
    private readonly tokenEndpoint =
        "https://login.eveonline.com/v2/oauth/token";
    private readonly jwksEndpoint = "https://login.eveonline.com/oauth/jwks";

    private readonly jwks = createRemoteJWKSet(new URL(this.jwksEndpoint));

    constructor(private readonly config: SsoConfiguration) {
        if (!config.clientId || !config.redirectUri) {
            throw new EsiValidationError(
                "SsoManager requires both clientId and redirectUri.",
            );
        }
    }

    public generatePkcePair(): { verifier: string; challenge: string } {
        const verifier = crypto.randomBytes(32).toString("base64url");

        const challenge = crypto
            .createHash("sha256")
            .update(verifier)
            .digest("base64url");

        return { verifier, challenge };
    }

    public async verifyToken(token: string): Promise<ValidatedEveToken> {
        try {
            const { payload } = await jwtVerify(token, this.jwks, {
                issuer: ["login.eveonline.com", "https://login.eveonline.com"],
            });

            const audience = payload.aud;
            const hasValidAudience = Array.isArray(audience)
                ? audience.includes(this.config.clientId)
                : audience === this.config.clientId;

            if (!hasValidAudience) {
                throw new EsiAuthError(
                    "Invalid token audience. It does not match the client ID.",
                );
            }

            const subParts = payload.sub?.split(":") || [];
            const characterId = subParts[2];

            if (!characterId) {
                throw new EsiAuthError(
                    "Malformed 'sub' claim in token payload.",
                );
            }

            return {
                characterId,
                characterName: payload.name as string,
                scopes: Array.isArray(payload.scp)
                    ? payload.scp
                    : payload.scp
                      ? [payload.scp]
                      : [],
                expiresAt: (payload.exp as number) * 1000,
            };
        } catch (error) {
            throw new EsiAuthError(
                `JWT Validation Failed: ${(error as Error).message}`,
            );
        }
    }

    public async refreshToken(
        refreshToken: string,
        clientSecret?: string,
    ): Promise<EsiTokenResponse> {
        const body = new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refreshToken,
            client_id: this.config.clientId,
        });

        const headers = new Headers({
            "Content-Type": "application/x-www-form-urlencoded",
            Host: "login.eveonline.com",
            "User-Agent": "@strata/esi 0.1",
        });

        if (clientSecret) {
            const authHeader = Buffer.from(
                `${this.config.clientId}:${clientSecret}`,
            ).toString("base64");
            headers.set("Authorization", `Basic ${authHeader}`);
        }

        const response = await fetch(this.tokenEndpoint, {
            method: "POST",
            headers,
            body: body.toString(),
        });

        if (!response.ok) {
            const errorText = await response.text();
            let errorData: unknown;

            try {
                errorData = JSON.parse(errorText);
            } catch {
                errorData = errorText;
            }

            throw new EsiApiError(
                response.status,
                errorData,
                `Token refresh failed with status ${response.status}`,
            );
        }

        return (await response.json()) as EsiTokenResponse;
    }

    public getAuthorizationUrl(
        scopes: EsiScope[] = [],
        customState?: string,
        usePkce: boolean = true,
    ): AuthorizationRequest {
        const state = customState || crypto.randomBytes(16).toString("hex");

        const params = new URLSearchParams({
            response_type: "code",
            redirect_uri: this.config.redirectUri,
            client_id: this.config.clientId,
            state: state,
        });

        if (scopes.length > 0) {
            params.append("scope", scopes.join(" "));
        }

        let codeVerifier: string | undefined;

        if (usePkce) {
            const pkce = this.generatePkcePair();
            codeVerifier = pkce.verifier;
            params.append("code_challenge", pkce.challenge);
            params.append("code_challenge_method", "S256");
        }

        return {
            url: `${this.authorizationEndpoint}?${params.toString()}`,
            state,
            codeVerifier,
        };
    }

    public async exchangeCodeForToken(
        code: string,
        options: TokenExchangeOptions,
    ): Promise<EsiTokenResponse> {
        const payload = new URLSearchParams({
            grant_type: "authorization_code",
            code,
            client_id: this.config.clientId,
        });

        const headers = new Headers({
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "@strata/esi v0.1",
        });

        if (options.clientSecret) {
            const authHeader = Buffer.from(
                `${this.config.clientId}:${options.clientSecret}`,
            ).toString("base64");

            headers.set("Authorization", `Basic ${authHeader}`);
        }

        if (options.codeVerifier) {
            payload.append("code_verifier", options.codeVerifier);
        }

        const response = await fetch(this.tokenEndpoint, {
            method: "POST",
            headers,
            body: payload.toString(),
        });

        if (!response.ok) {
            const errorText = await response.text();

            let errorData: unknown;
            try {
                errorData = JSON.parse(errorText);
            } catch {
                errorData = errorText;
            }
            throw new EsiApiError(
                response.status,
                errorData,
                `Token exchange failed with status ${response.status}`,
            );
        }

        return (await response.json()) as EsiTokenResponse;
    }
}
