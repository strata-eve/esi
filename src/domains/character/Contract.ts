import { GeneratedApi } from "../../api/GeneratedApi";

/**
 * Represents a contract associated with a specific authenticated character,
 * providing access to its bids and items.
 */
export class CharacterContract {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
        readonly id: number,
    ) {}

    /**
     * Retrieves all bids placed on this contract.
     *
     * @returns A promise resolving to an array of bid records.
     */
    public async bids() {
        return this.api.getCharactersCharacterIdContractsContractIdBids(
            this.characterId,
            this.id,
        );
    }

    /**
     * Retrieves all items included in this contract.
     *
     * @returns A promise resolving to an array of item records.
     */
    public async items() {
        return this.api.getCharactersCharacterIdContractsContractIdItems(
            this.characterId,
            this.id,
        );
    }
}

export class CharacterContracts {
    constructor(
        readonly api: GeneratedApi,
        readonly charId: number,
    ) {}

    public async list() {
        return this.api.getCharactersCharacterIdContracts(this.charId);
    }
}
