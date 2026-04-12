import { GeneratedApi } from "../api/GeneratedApi";

export class CharacterMarket {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public get orders() {
        return {
            list: () =>
                this.api.getCharactersCharacterIdOrders(this.characterId),
            historical: (page?: number) =>
                this.api.getCharactersCharacterIdOrdersHistory(
                    this.characterId,
                    page,
                ),
        };
    }
}
