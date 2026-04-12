import { GeneratedApi } from "../api/GeneratedApi";
import { AllianceContacts } from "./Contacts";
import { PublicCorporation } from "./Corporation";

export class PublicAlliance {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getAlliancesAllianceId(this.id);
    }

    public async corporations() {
        const corps = await this.api.getAlliancesAllianceIdCorporations(
            this.id,
        );

        return corps.map((id) => new PublicCorporation(this.api, id));
    }

    public async icons() {
        return this.api.getAlliancesAllianceIdIcons(this.id);
    }
}

export class AuthAlliance extends PublicAlliance {
    constructor(api: GeneratedApi, id: number) {
        super(api, id);
    }

    public async contacts() {
        return new AllianceContacts(this.api, this.id);
    }

    public async contactLabels() {
        return this.api.getAlliancesAllianceIdContactsLabels(this.id);
    }
}
