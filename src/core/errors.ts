export class EsiError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export class EsiApiError extends EsiError {
    constructor(
        public readonly status: number,
        public readonly data: unknown,
        message?: string,
    ) {
        super(message || `ESI API responded with status ${status}`);
    }
}

export class EsiAuthError extends EsiError {
    constructor(message: string) {
        super(message);
    }
}

export class EsiValidationError extends EsiError {
    constructor(message: string) {
        super(message);
    }
}

export class EsiTimeoutError extends EsiError {
    constructor(
        public readonly timeoutMs: number,
        message?: string,
    ) {
        super(message || `ESI API request timed out after ${timeoutMs}ms.`);
    }
}
