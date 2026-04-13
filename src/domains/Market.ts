import { GeneratedApi } from "../api/GeneratedApi";

/**
 * Provides access to market-related operations scoped to a specific character.
 */
export class CharacterMarket {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    /**
     * Provides access to market order operations for this character.
     */
    public get orders() {
        return {
            /**
             * Retrieves all active market orders placed by this character.
             *
             * @returns A promise resolving to an array of order records, each containing
             * the order ID, type ID, location ID, volume, price, side, and timestamps.
             */
            list: () =>
                this.api.getCharactersCharacterIdOrders(this.characterId),

            /**
             * Retrieves a paginated history of market orders previously placed by this character,
             *
             * @param page - The page of results to retrieve. Defaults to the first page if omitted.
             * @returns A promise resolving to an array of historical order records.
             */
            history: (page?: number) =>
                this.api.getCharactersCharacterIdOrdersHistory(
                    this.characterId,
                    page,
                ),
        };
    }
}
