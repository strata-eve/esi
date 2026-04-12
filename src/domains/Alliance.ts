import { GeneratedApi } from "../api/GeneratedApi";
import { AllianceContacts } from "./Contacts";

export class PublicAlliance {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getAlliancesAllianceId(this.id);
    }

    public get corporations() {
        return {
            list: () => this.api.getAlliancesAllianceIdCorporations(this.id),
        };
    }

    public async icons() {
        return this.api.getAlliancesAllianceIdIcons(this.id);
    }
}

export class AuthAlliance extends PublicAlliance {
    constructor(api: GeneratedApi, id: number) {
        super(api, id);
    }

    public get contacts() {
        return new AllianceContacts(this.api, this.id);
    }
}
