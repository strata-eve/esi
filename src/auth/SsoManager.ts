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
}

export interface EsiTokenResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
    refresh_token: string;
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
        clientSecret: string,
    ): Promise<EsiTokenResponse> {
        const authHeader = Buffer.from(
            `${this.config.clientId}:${clientSecret}`,
        ).toString("base64");

        const body = new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refreshToken,
        });

        const response = await fetch(this.tokenEndpoint, {
            method: "POST",
            headers: {
                Authorization: `Basic ${authHeader}`,
                "Content-Type": "application/x-www-form-urlencoded",
                Host: "login.eveonline.com",
                "User-Agent": "@strata/esi 0.1 (yetistirenarda@gmail.com)",
            },
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

        return {
            url: `${this.authorizationEndpoint}?${params.toString()}`,
            state,
        };
    }

    public async exchangeCodeForToken(
        code: string,
        clientSecret: string,
    ): Promise<EsiTokenResponse> {
        const authHeader = Buffer.from(
            `${this.config.clientId}:${clientSecret}`,
        ).toString("base64");

        const payload = new URLSearchParams({
            grant_type: "authorization_code",
            code: code,
        });

        const response = await fetch(this.tokenEndpoint, {
            method: "POST",
            headers: {
                Authorization: `Basic ${authHeader}`,
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "@strata/esi v0.1",
            },
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
