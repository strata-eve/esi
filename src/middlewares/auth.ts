import { TokenProvider } from "../auth/TokenProvider";
import { EsiAuthError } from "../core/errors";
import { EsiContext, Middleware, NextFunction } from "../core/Pipeline";

export const createAuthMiddleware = (
    tokenProvider?: TokenProvider,
): Middleware => {
    return async (ctx: EsiContext, next: NextFunction): Promise<void> => {
        if (!ctx.state.isAuthRequired) {
            return next();
        }

        const characterId = ctx.state.userId;
        if (!characterId) {
            throw new EsiAuthError(
                `This endpoint requires authentication. Use the '.as(characterId)' method.`,
            );
        }

        if (!tokenProvider) {
            throw new EsiAuthError(
                "A 'TokenProvider' was not supplied when initializing the EsiClient. " +
                    "Cannot fetch an access token for authenticated routes.",
            );
        }

        const token = await tokenProvider.getAccessToken(
            characterId.toString(),
        );

        if (!token) {
            throw new EsiAuthError(
                `The TokenProvider failed to return a valid token for character ID: ${characterId}`,
            );
        }

        ctx.request.headers.set("Authorization", `Bearer ${token}`);

        await next();
    };
};
