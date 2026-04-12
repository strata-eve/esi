import { GeneratedApi } from "../api/GeneratedApi";

export class CharacterMarket {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public async orders() {
        return this.api.getCharactersCharacterIdOrders(this.characterId);
    }

    public async historicalOrders(page?: number) {
        return this.api.getCharactersCharacterIdOrdersHistory(
            this.characterId,
            page,
        );
    }
}
