import { GeneratedApi } from "../api/GeneratedApi";

export class Wallet {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public async balance() {
        return this.api.getCharactersCharacterIdWallet(this.characterId);
    }

    public async journal(page?: number) {
        return this.api.getCharactersCharacterIdWalletJournal(
            this.characterId,
            page,
        );
    }

    public async transactions(fromId?: number) {
        return this.api.getCharactersCharacterIdWalletTransactions(
            this.characterId,
            fromId,
        );
    }
}
