import { GeneratedApi } from "../../api/GeneratedApi";

/**
 * Provides access to asset-related ESI endpoints scoped to a specific corporation.
 *
 * @remarks
 * All endpoints require the authenticated character to have the
 * `Director` or `Accountant` corporation role.
 */
export class CorporationAssets {
    constructor(
        readonly api: GeneratedApi,
        readonly corporationId: number,
    ) {}

    /**
     * Retrieves a paginated list of all assets owned by this corporation.
     *
     * @param page - The page of results to retrieve. Defaults to the first page if omitted.
     * @returns A promise resolving to an array of asset objects, each describing
     * an item's type, quantity, location, and location flag.
     */
    public async list(page?: number) {
        return this.api.getCorporationsCorporationIdAssets(
            this.corporationId,
            page,
        );
    }

    /**
     * Resolves the precise positions of a set of corporation assets within a structure or space.
     *
     * @param items - An array of item IDs to resolve locations for.
     * @returns A promise resolving to an array of objects each containing an item ID
     * and its corresponding positional coordinates.
     */
    public async resolveLocations(items: number[]) {
        return this.api.postCorporationsCorporationIdAssetsLocations(
            this.corporationId,
            items,
        );
    }

    /**
     * Resolves the in-game names of a set of corporation assets by their item IDs.
     *
     * @param items - An array of item IDs to resolve names for.
     * @returns A promise resolving to an array of objects each containing
     * an item ID and its corresponding in-game name.
     */
    public async resolveNames(items: number[]) {
        return this.api.postCorporationsCorporationIdAssetsNames(
            this.corporationId,
            items,
        );
    }
}
