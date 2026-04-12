import { GeneratedApi } from "../api/GeneratedApi";

export class PublicCorporation {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getCorporationsCorporationId(this.id);
    }
}
