import { GeneratedApi } from "../../api/GeneratedApi";

export class CorporationWalletDivisions {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async list() {
        return this.api.getCorporationsCorporationIdDivisions(this.id);
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

    public get divisions() {
        return new CorporationWalletDivisions(this.api, this.corpId);
    }

    public division(divisionId: number) {
        return new CorporationWalletDivision(this.api, this.corpId, divisionId);
    }
}
