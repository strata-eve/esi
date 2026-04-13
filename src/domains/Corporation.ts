import { GeneratedApi } from "../api/GeneratedApi";
import { CorporationAssets } from "./Assets";
import { CorporationContacts } from "./Contacts";
import { CorporationContract } from "./Contract";
import { CorporationIndustry } from "./Industry";
import { CorporationMarket } from "./Market";
import { CorporationMedals } from "./Medals";
import { CorporationMembers } from "./Members";
import { CorporationWallet } from "./Wallet";

export class PublicCorporation {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getCorporationsCorporationId(this.id);
    }

    public async allianceHistory() {
        return this.api.getCorporationsCorporationIdAlliancehistory(this.id);
    }

    public async loyaltyOffers() {
        return this.api.getLoyaltyStoresCorporationIdOffers(this.id);
    }
}

export class AuthCorporation {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public get industry() {
        return new CorporationIndustry(this.api, this.id);
    }

    public get assets() {
        return new CorporationAssets(this.api, this.id);
    }

    public async blueprints(page?: number) {
        return this.api.getCorporationsCorporationIdBlueprints(this.id, page);
    }

    public get contacts() {
        return new CorporationContacts(this.api, this.id);
    }

    public async auditLog(page?: number) {
        return this.api.getCorporationsCorporationIdContainersLogs(
            this.id,
            page,
        );
    }

    public async contracts(page?: number) {
        return this.api.getCorporationsCorporationIdContracts(this.id, page);
    }

    public contract(contractId: number) {
        return new CorporationContract(this.api, this.id, contractId);
    }

    public async customsOffices(page?: number) {
        return this.api.getCorporationsCorporationIdCustomsOffices(
            this.id,
            page,
        );
    }

    public async divisions() {
        return this.api.getCorporationsCorporationIdDivisions(this.id);
    }

    public async facilities() {
        return this.api.getCorporationsCorporationIdFacilities(this.id);
    }

    public get fw() {
        return {
            stats: () => this.api.getCorporationsCorporationIdFwStats(this.id),
        };
    }

    public async icons() {
        return this.api.getCorporationsCorporationIdIcons(this.id);
    }

    public async killmails(page?: number) {
        return this.api.getCorporationsCorporationIdKillmailsRecent(
            this.id,
            page,
        );
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
        return {
            list: () => this.api.getCorporationsCorporationIdRoles(this.id),
            history: (page?: number) =>
                this.api.getCorporationsCorporationIdRolesHistory(
                    this.id,
                    page,
                ),
        };
    }

    public async shareholders(page?: number) {
        return this.api.getCorporationsCorporationIdShareholders(this.id, page);
    }

    public async standings(page?: number) {
        return this.api.getCorporationsCorporationIdStandings(this.id, page);
    }

    public starbase(systemId: number, starbaseId: number) {
        return {
            fetch: () =>
                this.api.getCorporationsCorporationIdStarbasesStarbaseId(
                    this.id,
                    starbaseId,
                    systemId,
                ),
        };
    }

    public async starbases() {
        return {
            list: (page?: number) =>
                this.api.getCorporationsCorporationIdStarbases(this.id, page),
        };
    }

    public async structures(page?: number) {
        return this.api.getCorporationsCorporationIdStructures(this.id, page);
    }

    public async titles() {
        return this.api.getCorporationsCorporationIdTitles(this.id);
    }

    public get wallet() {
        return new CorporationWallet(this.api, this.id);
    }
}
