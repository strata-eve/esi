import { GeneratedApi } from "../api/GeneratedApi";

export class CharacterContracts {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public async list(page?: number) {
        return this.api.getCharactersCharacterIdContracts(
            this.characterId,
            page,
        );
    }

    public async bids(contractId: number) {
        return this.api.getCharactersCharacterIdContractsContractIdBids(
            this.characterId,
            contractId,
        );
    }

    public async items(contractId: number) {
        return this.api.getCharactersCharacterIdContractsContractIdItems(
            this.characterId,
            contractId,
        );
    }
}
