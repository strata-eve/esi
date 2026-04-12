import fs from "fs";
import path from "path";
import * as prettier from "prettier";

const EVE_SPEC_URL = "https://esi.evetech.net/meta/openapi.json";

interface SchemaProperty {
    type?: string;
    format?: string;
    enum?: string[];
    items?: SchemaProperty;
    properties?: Record<string, SchemaProperty>;
    required?: string[];
    description?: string;
    $ref?: string;
    additionalProperties?: boolean | SchemaProperty;
}

interface ParameterSchema {
    name?: string;
    in?: "path" | "query" | "header" | "cookie";
    required?: boolean;
    schema?: {
        $ref?: string;
        type?: string;
        format?: string;
    };
    $ref?: string;
    description?: string;
}

interface ResponseSchema {
    description?: string;
    content?: {
        "application/json"?: {
            schema?: SchemaProperty;
        };
    };
}

interface OperationSchema {
    operationId: string;
    summary?: string;
    responses: Record<string, ResponseSchema>;
    parameters: ParameterSchema[];
    requestBody?: {
        required?: boolean;
        content?: {
            "application/json"?: {
                schema?: SchemaProperty;
            };
        };
        description?: string;
    };
    "x-rate-limit"?: {
        group?: string;
    };
    security?: Array<Record<string, string[]>>;
    description?: string;
}

type PathsDefinition = Record<string, Record<string, OperationSchema>>;
type SchemaDefinitions = Record<string, SchemaProperty>;

interface OpenApiSpec {
    info: { version: string };
    components: {
        schemas: SchemaDefinitions;
        securitySchemes?: {
            OAuth2?: {
                flows?: {
                    authorizationCode?: {
                        scopes?: Record<string, string>;
                    };
                };
            };
        };
    };
    paths: PathsDefinition;
}

function toCamelCase(str: string) {
    return str.replace(/_([a-z])/g, (match: string, letter) =>
        letter.toUpperCase(),
    );
}

function toCamelCaseMethod(operationId: string): string {
    if (!operationId) return "unknownMethod";
    return operationId.charAt(0).toLowerCase() + operationId.slice(1);
}

function generateJSDoc(
    description?: string,
    tags?: { tag: string; text: string }[],
): string {
    if (!description && (!tags || tags.length === 0)) return "";

    let doc = `/**\n`;

    if (description) {
        const lines = description.replace(/\r\n/g, "\n").split("\n");
        for (const line of lines) {
            doc += ` * ${line.trim()}\n`;
        }
    }

    if (tags && tags.length > 0) {
        if (description) doc += ` *\n`;
        for (const { tag, text } of tags) {
            doc += ` * ${tag} ${text}\n`;
        }
    }

    doc += ` */`;
    return doc;
}

function resolveParamType(schema?: SchemaProperty): string {
    if (!schema) return "unknown";

    if (schema.enum && Array.isArray(schema.enum)) {
        return schema.enum.map((e: string) => `"${e}"`).join(" | ");
    }

    if (schema.$ref) return extractTypeNameFromRef(schema.$ref);

    if (
        schema.type === "object" ||
        schema.properties ||
        schema.additionalProperties !== undefined
    ) {
        if (schema.properties) {
            const props: string[] = [];
            const requiredFields = schema.required || [];

            for (const [key, val] of Object.entries(schema.properties)) {
                const isRequired = requiredFields.includes(key);
                const camelKey = toCamelCase(key);

                props.push(
                    `${camelKey}${isRequired ? "" : "?"}: ${resolveParamType(val)};`,
                );
            }
            return `{\n${props.join("\n")}\n}`;
        }

        if (schema.additionalProperties !== undefined) {
            if (schema.additionalProperties === false) {
                return "Record<string, never>";
            }
            if (typeof schema.additionalProperties === "object") {
                const valueType = resolveType(schema.additionalProperties);
                return `Record<string, ${valueType}>`;
            }
        }

        return "Record<string, unknown>";
    }

    if (schema.type === "integer" || schema.type === "number") return "number";
    if (schema.type === "string") return "string";
    if (schema.type === "boolean") return "boolean";

    if (schema.type === "array") {
        const itemType = resolveParamType(schema.items);
        if (itemType.includes("|") || itemType.includes("{"))
            return `Array<${itemType}>`;
        return `${itemType}[]`;
    }

    return "unknown";
}

function extractTypeNameFromRef(refPath?: string): string {
    if (!refPath) return "any";
    return refPath.split("/").pop() ?? "any";
}

function resolveType(schema?: SchemaProperty): string {
    if (!schema) return "any";

    if (schema.$ref) {
        return schema.$ref.split("/").pop() ?? "any";
    }

    if (schema.enum) {
        return schema.enum.map((e: string) => `"${e}"`).join(" | ");
    }

    if (schema.type === "array") {
        const itemType = resolveType(schema.items);
        return itemType.includes("|") || itemType.includes("{")
            ? `Array<${itemType}>`
            : `${itemType}[]`;
    } else if (schema.type === "object") {
        if (schema.properties) {
            const props: string[] = [];
            const requiredFields = schema.required || [];

            for (const [key, val] of Object.entries(schema.properties)) {
                const isRequired = requiredFields.includes(key);
                const camelKey = toCamelCase(key);

                const propDoc = generateJSDoc(val.description);
                if (propDoc) {
                    props.push(propDoc);
                }

                props.push(
                    `   ${camelKey}${isRequired ? "" : "?"}: ${resolveType(val)};`,
                );
            }
            return `{\n${props.join("\n")}\n}`;
        }

        if (schema.additionalProperties !== undefined) {
            if (schema.additionalProperties === false) {
                return "Record<string, never>";
            }
            if (typeof schema.additionalProperties === "object") {
                const valueType = resolveType(schema.additionalProperties);
                return `Record<string, ${valueType}>`;
            }
        }

        return "Record<string, unknown>";
    } else if (schema.type === "integer" || schema.type === "number") {
        return "number";
    } else if (schema.type === "string") {
        return "string";
    } else if (schema.type === "boolean") {
        return "boolean";
    } else {
        return "unknown";
    }
}

async function generate() {
    console.log(`Pulling specifications from ${EVE_SPEC_URL}`);
    const apiInfo = await fetch(EVE_SPEC_URL);
    const api = (await apiInfo.json()) as unknown as OpenApiSpec;

    console.log(`API Version: ${api.info.version}`);

    let generatedCode = `// AUTO-GENERATED CODE - DO NOT MODIFY BY HAND
// Generated from Eve Online ESI OpenAPI spec

import { EsiRequester } from "../client/EsiRequester";

`;

    const schemas: SchemaDefinitions = api.components.schemas;

    for (const [name, schema] of Object.entries(schemas)) {
        const tsType = resolveType(schema);
        const schemaDoc = generateJSDoc(schema.description);

        if (schema.type === "object" && schema.properties) {
            generatedCode += `${schemaDoc}\nexport interface ${name} ${tsType}\n\n`;
        } else {
            generatedCode += `${schemaDoc}\nexport type ${name} = ${tsType};\n\n`;
        }
    }

    generatedCode += `export class GeneratedApi {
    private readonly client: EsiRequester;

    public constructor(client: EsiRequester) {
        this.client = client;
    }\n\n`;

    for (const [pathUrl, methods] of Object.entries(api.paths)) {
        for (const [httpMethod, details] of Object.entries(methods)) {
            const methodName = toCamelCaseMethod(details.operationId);

            let returnType = "any";

            const successResponse =
                details.responses?.["200"] || details.responses?.["201"];

            if (successResponse?.content?.["application/json"]?.schema) {
                returnType = resolveParamType(
                    successResponse.content["application/json"].schema,
                );
            } else if (details.responses?.["204"]) {
                returnType = "void";
            }

            const rateLimitGroup = details["x-rate-limit"]?.group;

            const securityData = details.security || [];
            const requiresAuth = securityData.length > 0;
            let requiredScopes: string[] = [];

            if (requiresAuth && securityData[0] && securityData[0].OAuth2) {
                requiredScopes = securityData[0].OAuth2;
            }

            const validParams = (details.parameters || []).filter(
                (p: ParameterSchema) => p.name,
            );

            const rawMethodArgs: {
                declaration: string;
                isRequired: boolean;
            }[] = [];
            const queryObjProps: string[] = [];
            const headerObjProps: string[] = [];
            let dynamicPathUrl = pathUrl;

            for (const param of validParams) {
                const camelName = toCamelCase(param.name!);
                const isRequired = param.required === true;
                const paramType = resolveParamType(param.schema);

                rawMethodArgs.push({
                    declaration: `${camelName}${isRequired ? "" : "?"}: ${paramType}`,
                    isRequired,
                });

                if (param.in === "path") {
                    dynamicPathUrl = dynamicPathUrl.replace(
                        `{${param.name}}`,
                        `\${${camelName}}`,
                    );
                } else if (param.in === "query") {
                    queryObjProps.push(`"${param.name}": ${camelName}`);
                } else if (param.in === "header") {
                    headerObjProps.push(`"${param.name}": ${camelName}`);
                }
            }

            let hasBody = false;
            if (details.requestBody) {
                const bodySchema =
                    details.requestBody.content?.["application/json"]?.schema;
                const bodyType = resolveParamType(bodySchema);

                const isBodyRequired = details.requestBody.required === true;
                rawMethodArgs.push({
                    declaration: `body${isBodyRequired ? "" : "?"}: ${bodyType}`,
                    isRequired: isBodyRequired,
                });
                hasBody = true;
            }

            rawMethodArgs.sort((a, b) => {
                if (a.isRequired && !b.isRequired) return -1;
                if (!a.isRequired && b.isRequired) return 1;
                return 0;
            });

            const argsString = rawMethodArgs
                .map((arg) => arg.declaration)
                .join(", ");

            const requestOptionsArr = [
                `method: '${httpMethod.toUpperCase()}'`,
                `path: \`${dynamicPathUrl}\``,
                `requiresAuth: ${requiresAuth}`,
            ];

            if (requiresAuth && requiredScopes.length > 0) {
                requestOptionsArr.push(
                    `scopes: [${requiredScopes.map((s) => `"${s}"`).join(", ")}]`,
                );
            }
            if (queryObjProps.length > 0)
                requestOptionsArr.push(
                    `query: { ${queryObjProps.join(", ")} }`,
                );

            if (headerObjProps.length > 0)
                requestOptionsArr.push(
                    `headers: { ${headerObjProps.join(", ")} }`,
                );
            if (hasBody) requestOptionsArr.push(`body`);
            if (rateLimitGroup)
                requestOptionsArr.push(`rateLimitGroup: '${rateLimitGroup}'`);

            const authDocText = requiresAuth
                ? `Yes (${requiredScopes.join(", ")})`
                : "No (Public)";

            const jsDocTags: { tag: string; text: string }[] = [];

            for (const param of validParams) {
                const camelName = toCamelCase(param.name!);
                const paramDesc = param.description
                    ? `- ${param.description.replace(/\n/g, " ")}`
                    : "";
                jsDocTags.push({ tag: `@param ${camelName}`, text: paramDesc });
            }

            if (hasBody && details.requestBody?.description) {
                jsDocTags.push({
                    tag: `@param body`,
                    text: `- ${details.requestBody.description.replace(/\n/g, " ")}`,
                });
            }

            jsDocTags.push({
                tag: "@method",
                text: `${httpMethod.toUpperCase()} ${pathUrl}`,
            });
            jsDocTags.push({
                tag: "@remarks",
                text: `Rate Limit: ${rateLimitGroup || "None"} | Auth Required: ${authDocText}`,
            });
            const methodDescription = details.description || details.summary;

            generatedCode += generateJSDoc(methodDescription, jsDocTags) + "\n";
            generatedCode += `public async ${methodName}(${argsString}): Promise<${returnType}> {\n`;
            generatedCode += `    return this.client.request<${returnType}>({\n`;
            generatedCode += requestOptionsArr.join(",\n") + `\n`;
            generatedCode += `});\n`;
            generatedCode += `}\n\n`;
        }
    }

    generatedCode += `}\n`;

    const scopesObj =
        api.components.securitySchemes?.OAuth2?.flows?.authorizationCode
            ?.scopes || {};
    const scopeKeys = Object.keys(scopesObj);

    generatedCode += `\n/**\n * All available ESI OAuth2 Scopes\n */\n`;
    generatedCode +=
        `export type EsiScope = \n| "` + scopeKeys.join(`"\n|"`) + `";\n\n`;

    generatedCode += `/**\n * Array of all scopes for runtime validation\n */\n`;
    generatedCode +=
        `export const ESI_SCOPES: EsiScope[] = [\n    "` +
        scopeKeys.join(`",\n"`) +
        `"\n];\n\n`;

    const outputDir = path.join(process.cwd(), "src", "api");
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, "GeneratedApi.ts");

    const formattedCode = await prettier.format(generatedCode, {
        parser: "typescript",
        tabWidth: 4,
    });

    fs.writeFileSync(outputPath, formattedCode, "utf-8");

    console.log(
        `Successfully generated ${Object.entries(api.components.schemas).length} types and ${Object.entries(api.paths).length} methods in ${outputPath}.`,
    );
}

generate().catch((error) => {
    console.error("Code generation failed:", error);
    process.exit(1);
});
