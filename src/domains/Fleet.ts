import { GeneratedApi } from "../api/GeneratedApi";

export class Fleet {
    constructor(
        readonly api: GeneratedApi,
        readonly fleetId: number,
    ) {}

    public async fetch() {
        return this.api.getFleetsFleetId(this.fleetId);
    }

    public async update(data: { isFreeMove?: boolean; motd?: string }) {
        return this.api.putFleetsFleetId(this.fleetId, data);
    }
}
