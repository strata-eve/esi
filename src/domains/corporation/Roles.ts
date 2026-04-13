import { GeneratedApi } from "../../api/GeneratedApi";

export class CorporationRoles {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async history(page?: number) {
        return this.api.getCorporationsCorporationIdRolesHistory(this.id, page);
    }

    public async list() {
        return this.api.getCorporationsCorporationIdRoles(this.id);
    }
}
