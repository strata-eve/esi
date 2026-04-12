import { GeneratedApi } from "../api/GeneratedApi";

export class Fleet {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
        readonly fleetId: number,
    ) {}

    public static async characterInfo(api: GeneratedApi, characterId: number) {
        return api.getCharactersCharacterIdFleet(characterId);
    }

    public async fetch() {
        return this.api.getFleetsFleetId(this.fleetId);
    }

    public async update(data: { isFreeMove?: boolean; motd?: string }) {
        return this.api.putFleetsFleetId(this.fleetId, data);
    }
}
