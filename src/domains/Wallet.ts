import { GeneratedApi } from "../api/GeneratedApi";

/**
 * Provides access to wallet-related operations scoped to a specific character,
 * including balance retrieval, journal entries, and transaction history.
 */
export class CharacterWallet {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    /**
     * Retrieves the current ISK balance of this character's wallet.
     *
     * @returns A promise resolving to the wallet balance as a number, in ISK.
     */
    public async balance() {
        return this.api.getCharactersCharacterIdWallet(this.characterId);
    }

    /**
     * Retrieves a paginated list of journal entries for this character's wallet.
     *
     * @param page - The page of results to retrieve. Defaults to the first page if omitted.
     * @returns A promise resolving to an array of journal entry records.
     */
    public async journal(page?: number) {
        return this.api.getCharactersCharacterIdWalletJournal(
            this.characterId,
            page,
        );
    }

    /**
     * Retrieves a list of market transactions recorded in this character's wallet.
     *
     * @param fromId - An optional transaction ID used for pagination. When provided,
     * only transactions with an ID lower than this value are returned.
     * @returns A promise resolving to an array of transaction records.
     */
    public async transactions(fromId?: number) {
        return this.api.getCharactersCharacterIdWalletTransactions(
            this.characterId,
            fromId,
        );
    }
}

export class CorporationWalletDivision {
    constructor(
        readonly api: GeneratedApi,
        readonly corpId: number,
        readonly id: number,
    ) {}

    public async journal(page?: number) {
        return this.api.getCorporationsCorporationIdWalletsDivisionJournal(
            this.corpId,
            this.id,
            page,
        );
    }

    public async transactions(fromId?: number) {
        return this.api.getCharactersCharacterIdWalletTransactions(
            this.corpId,
            fromId,
        );
    }
}

/**
 * Provides access to wallet-related operations scoped to a specific corporation.
 */
export class CorporationWallet {
    constructor(
        readonly api: GeneratedApi,
        readonly corpId: number,
    ) {}

    public async balances() {
        return this.api.getCorporationsCorporationIdWallets(this.corpId);
    }

    public division(divisionId: number) {
        return new CorporationWalletDivision(this.api, this.corpId, divisionId);
    }
}
