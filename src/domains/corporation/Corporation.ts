import { GeneratedApi } from "../../api/GeneratedApi";
import { CorporationAssets } from "./Assets";
import { CorporationContacts } from "./Contacts";
import { CorporationContract, CorporationContracts } from "./Contract";
import { CorporationIndustry } from "./Industry";
import { CorporationMarket } from "./Market";
import { CorporationMedals } from "./Medals";
import { CorporationMembers } from "./Members";
import { CorporationWallet } from "./Wallet";
import { CorporationStarbase, CorporationStarbases } from "./Starbases";
import { CorporationRoles } from "./Roles";

export class PublicCorporation {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public get allianceHistory() {
        return new CorporationAllianceHistory(this.api, this.id);
    }

    public async fetch() {
        return this.api.getCorporationsCorporationId(this.id);
    }

    public get loyaltyOffers() {
        return new CorporationLoyaltyOffers(this.api, this.id);
    }
}

export class AuthCorporation extends PublicCorporation {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {
        super(api, id);
    }

    public get assets() {
        return new CorporationAssets(this.api, this.id);
    }

    public get auditLog() {
        return new CorporationAuditLog(this.api, this.id);
    }

    public get contacts() {
        return new CorporationContacts(this.api, this.id);
    }

    public get contracts() {
        return new CorporationContracts(this.api, this.id);
    }

    public contract(contractId: number) {
        return new CorporationContract(this.api, this.id, contractId);
    }

    public get customsOffices() {
        return new CorporationCustomsOffices(this.api, this.id);
    }

    public get facilities() {
        return new CorporationFacilities(this.api, this.id);
    }

    public get fw() {
        return new CorporationFw(this.api, this.id);
    }

    public get icons() {
        return new CorporationIcons(this.api, this.id);
    }

    public get industry() {
        return new CorporationIndustry(this.api, this.id);
    }

    public get killmails() {
        return new CorporationKillmails(this.api, this.id);
    }

    public get medals() {
        return new CorporationMedals(this.api, this.id);
    }

    public get members() {
        return new CorporationMembers(this.api, this.id);
    }

    public get market() {
        return new CorporationMarket(this.api, this.id);
    }

    public get roles() {
        return new CorporationRoles(this.api, this.id);
    }

    public get shareholders() {
        return new CorporationShareholders(this.api, this.id);
    }

    public get standings() {
        return new CorporationStandings(this.api, this.id);
    }

    public starbase(systemId: number, starbaseId: number) {
        return new CorporationStarbase(this.api, this.id, systemId, starbaseId);
    }

    public get starbases() {
        return new CorporationStarbases(this.api, this.id);
    }

    public get structures() {
        return new CorporationStructures(this.api, this.id);
    }

    public get titles() {
        return new CorporationTitles(this.api, this.id);
    }

    public get wallet() {
        return new CorporationWallet(this.api, this.id);
    }
}

export class CorporationAuditLog {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async list(page?: number) {
        return this.api.getCorporationsCorporationIdContainersLogs(
            this.id,
            page,
        );
    }
}

export class CorporationAllianceHistory {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async list() {
        return this.api.getCorporationsCorporationIdAlliancehistory(this.id);
    }
}

export class CorporationCustomsOffices {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public list(page?: number) {
        return this.api.getCorporationsCorporationIdCustomsOffices(
            this.id,
            page,
        );
    }
}

export class CorporationFacilities {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async list() {
        return this.api.getCorporationsCorporationIdFacilities(this.id);
    }
}

export class CorporationFw {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async list() {
        return this.api.getCorporationsCorporationIdFwStats(this.id);
    }
}

export class CorporationIcons {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async list() {
        return this.api.getCorporationsCorporationIdIcons(this.id);
    }
}

export class CorporationKillmails {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async list(page?: number) {
        return this.api.getCorporationsCorporationIdKillmailsRecent(
            this.id,
            page,
        );
    }
}

export class CorporationLoyaltyOffers {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async list() {
        return this.api.getLoyaltyStoresCorporationIdOffers(this.id);
    }
}

export class CorporationShareholders {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async list(page?: number) {
        return this.api.getCorporationsCorporationIdShareholders(this.id, page);
    }
}

export class CorporationStandings {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async list(page?: number) {
        return this.api.getCorporationsCorporationIdStandings(this.id, page);
    }
}

export class CorporationStructures {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async list(page?: number) {
        return this.api.getCorporationsCorporationIdStructures(this.id, page);
    }
}

export class CorporationTitles {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async list() {
        return this.api.getCorporationsCorporationIdTitles(this.id);
    }
}
