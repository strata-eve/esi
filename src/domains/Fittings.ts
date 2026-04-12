import { GeneratedApi } from "../api/GeneratedApi";

export class Fittings {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public async fetch() {
        return this.api.getCharactersCharacterIdFittings(this.characterId);
    }

    public async create(
        description: string,
        items: Array<{
            flag:
                | "Cargo"
                | "DroneBay"
                | "FighterBay"
                | "HiSlot0"
                | "HiSlot1"
                | "HiSlot2"
                | "HiSlot3"
                | "HiSlot4"
                | "HiSlot5"
                | "HiSlot6"
                | "HiSlot7"
                | "Invalid"
                | "LoSlot0"
                | "LoSlot1"
                | "LoSlot2"
                | "LoSlot3"
                | "LoSlot4"
                | "LoSlot5"
                | "LoSlot6"
                | "LoSlot7"
                | "MedSlot0"
                | "MedSlot1"
                | "MedSlot2"
                | "MedSlot3"
                | "MedSlot4"
                | "MedSlot5"
                | "MedSlot6"
                | "MedSlot7"
                | "RigSlot0"
                | "RigSlot1"
                | "RigSlot2"
                | "ServiceSlot0"
                | "ServiceSlot1"
                | "ServiceSlot2"
                | "ServiceSlot3"
                | "ServiceSlot4"
                | "ServiceSlot5"
                | "ServiceSlot6"
                | "ServiceSlot7"
                | "SubSystemSlot0"
                | "SubSystemSlot1"
                | "SubSystemSlot2"
                | "SubSystemSlot3";
            quantity: number;
            typeId: number;
        }>,
        name: string,
        shipTypeId: number,
    ) {
        return this.api.postCharactersCharacterIdFittings(this.characterId, {
            description,
            items,
            name,
            shipTypeId,
        });
    }

    public async delete(fittingId: number) {
        return this.api.deleteCharactersCharacterIdFittingsFittingId(
            this.characterId,
            fittingId,
        );
    }
}
