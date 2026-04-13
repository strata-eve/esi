import { GeneratedApi } from "../api/GeneratedApi";

/**
 * Represents an EVE Online region entity.
 */
export class Region {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    /**
     * Retrieves a paginated list of all public contracts available in this region.
     *
     * @param page - The page of results to retrieve. Defaults to the first page if omitted.
     * @returns A promise resolving to an array of public contract records.
     */
    public async contracts(page?: number) {
        return this.api.getContractsPublicRegionId(this.id, page);
    }
}
