import { GeneratedApi } from "../../api/GeneratedApi";

export class CorporationContactLabels {
    constructor(
        readonly api: GeneratedApi,
        readonly corpId: number,
    ) {}

    public list() {
        return this.api.getCorporationsCorporationIdContactsLabels(this.corpId);
    }
}

/**
 * Provides access to contact-related operations scoped to a specific corporation.
 */
export class CorporationContacts {
    constructor(
        readonly api: GeneratedApi,
        readonly corpId: number,
    ) {}

    /**
     * Provides access to contact label operations for this corporation.
     */
    public get labels() {
        return new CorporationContactLabels(this.api, this.corpId);
    }

    /**
     * Retrieves a paginated list of contacts for this corporation.
     *
     * @param page - The page of results to retrieve. Defaults to the first page if omitted.
     * @returns A promise resolving to an array of contact records.
     */
    public async list(page?: number) {
        return this.api.getCorporationsCorporationIdContacts(this.corpId, page);
    }
}
