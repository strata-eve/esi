import { GeneratedApi } from "../../api/GeneratedApi";

/**
 * Provides access to asset-related ESI endpoints scoped to a specific character.
 */
export class CharacterAssets {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    /**
     * Retrieves a paginated list of all assets owned by this character.
     */
    public async list(page?: number) {
        return this.api.getCharactersCharacterIdAssets(this.characterId, page);
    }

    /**
     * Resolves the precise positions of a set of assets within a structure or space.
     *
     * @param items - An array of item IDs to resolve locations for.
     * @returns A promise resolving to an array of objects each containing an item ID
     * and its corresponding positional coordinates.
     */
    public async locations(items: number[]) {
        return this.api.postCharactersCharacterIdAssetsLocations(
            this.characterId,
            items,
        );
    }

    /**
     * Resolves the in-game names of a set of assets by their item IDs.
     *
     * @param items - An array of item IDs to resolve names for.
     * @returns A promise resolving to an array of objects each containing
     * an item ID and its corresponding in-game name.
     */
    public async names(items: number[]) {
        return this.api.postCharactersCharacterIdAssetsNames(
            this.characterId,
            items,
        );
    }
}
