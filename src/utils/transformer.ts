export function snakeToCamelObj(obj: unknown): unknown {
    if (!obj || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map((v) => snakeToCamelObj(v));
    }

    if (obj instanceof Date) {
        return obj;
    }

    if (obj.constructor === Object) {
        return Object.keys(obj).reduce(
            (result, key) => {
                const camelKey = key.replace(
                    /_([a-z])/g,
                    (g) => g[1]?.toUpperCase() ?? g,
                );
                result[camelKey] = snakeToCamelObj(
                    (obj as Record<string, unknown>)[key],
                );
                return result;
            },
            {} as Record<string, unknown>,
        );
    }
    return obj;
}

export function camelToSnakeObj(obj: unknown): unknown {
    if (!obj || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map((v) => camelToSnakeObj(v));
    }

    if (obj instanceof Date) {
        return obj;
    }

    if (obj.constructor === Object) {
        return Object.keys(obj).reduce(
            (result, key) => {
                const snakeKey = key.replace(
                    /[A-Z]/g,
                    (letter) => `_${letter.toLowerCase()}`,
                );
                result[snakeKey] = camelToSnakeObj(
                    (obj as Record<string, unknown>)[key],
                );
                return result;
            },
            {} as Record<string, unknown>,
        );
    }
    return obj;
}
