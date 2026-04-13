import { GeneratedApi } from "../../api/GeneratedApi";

/**
 * Represents a publicly accessible EVE Online contract entity.
 *
 * Provides access to public ESI endpoints scoped to a specific contract,
 * identified by its unique EVE Online contract ID.
 */
export class PublicContract {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    /**
     * Retrieves a paginated list of bids placed on this contract.
     *
     * @param page - The page of results to retrieve. Defaults to the first page if omitted.
     * @returns A promise resolving to an array of bid records.
     */
    public async bids(page?: number) {
        return this.api.getContractsPublicBidsContractId(this.id, page);
    }

    /**
     * Retrieves a paginated list of items included in this contract.
     *
     * @param page - The page of results to retrieve. Defaults to the first page if omitted.
     * @returns A promise resolving to an array of item records.
     */
    public async items(page?: number) {
        return this.api.getContractsPublicItemsContractId(this.id, page);
    }
}
