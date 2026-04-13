import { GeneratedApi } from "../api/GeneratedApi";

export class PublicContract {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async bids(page?: number) {
        return this.api.getContractsPublicBidsContractId(this.id, page);
    }

    public async items(page?: number) {
        return this.api.getContractsPublicItemsContractId(this.id, page);
    }
}

export class CharacterContract {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
        readonly id: number,
    ) {}

    public async bids() {
        return this.api.getCharactersCharacterIdContractsContractIdBids(
            this.characterId,
            this.id,
        );
    }

    public async items() {
        return this.api.getCharactersCharacterIdContractsContractIdItems(
            this.characterId,
            this.id,
        );
    }
}
