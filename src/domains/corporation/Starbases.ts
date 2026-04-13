import { GeneratedApi } from "../../api/GeneratedApi";

export class CorporationStarbase {
    constructor(
        readonly api: GeneratedApi,
        readonly corpId: number,
        readonly systemId: number,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getCorporationsCorporationIdStarbasesStarbaseId(
            this.corpId,
            this.id,
            this.systemId,
        );
    }
}

export class CorporationStarbases {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async list(page?: number) {
        return this.api.getCorporationsCorporationIdStarbases(this.id, page);
    }
}
