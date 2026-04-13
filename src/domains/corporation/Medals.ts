import { GeneratedApi } from "../../api/GeneratedApi";

/**
 * Represents an EVE Online medals by corporation.
 */
export class CorporationMedals {
    constructor(
        readonly api: GeneratedApi,
        readonly corpId: number,
    ) {}

    public async list(page?: number) {
        return this.api.getCorporationsCorporationIdMedals(this.corpId, page);
    }

    public async issued(page?: number) {
        return this.api.getCorporationsCorporationIdMedalsIssued(
            this.corpId,
            page,
        );
    }
}
