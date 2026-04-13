import { GeneratedApi } from "../api/GeneratedApi";

export class CorporationMembers {
    constructor(
        readonly api: GeneratedApi,
        readonly corpId: number,
    ) {}

    public async list() {
        return this.api.getCorporationsCorporationIdMembers(this.corpId);
    }

    public async limit() {
        return this.api.getCorporationsCorporationIdMembersLimit(this.corpId);
    }

    public async titles() {
        return this.api.getCorporationsCorporationIdMembersTitles(this.corpId);
    }

    public async tracking() {
        return this.api.getCorporationsCorporationIdMembertracking(this.corpId);
    }
}
