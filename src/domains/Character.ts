import { GeneratedApi } from "../api/GeneratedApi";
import { AuthAlliance, PublicAlliance } from "./Alliance";
import { CharacterAssets } from "./Assets";
import { Calendar } from "./Calendar";
import { CharacterColonies } from "./Colony";
import { CharacterContract } from "./Contract";
import { PublicCorporation } from "./Corporation";
import { Fittings } from "./Fittings";
import { Fleet } from "./Fleet";
import { Mail } from "./Mail";
import { CharacterMarket } from "./Market";
import { Skills } from "./Skills";
import { Wallet } from "./Wallet";

export class PublicCharacter {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getCharactersCharacterId(this.id);
    }

    public async portrait() {
        return this.api.getCharactersCharacterIdPortrait(this.id);
    }

    public async alliance() {
        const info = await this.fetch();

        if (!info.allianceId) return null;

        return new PublicAlliance(this.api, info.allianceId);
    }

    public async corporation() {
        const info = await this.fetch();

        if (!info.corporationId) return null;

        return new PublicCorporation(this.api, info.corporationId);
    }

    public async corporationHistory() {
        return this.api.getCharactersCharacterIdCorporationhistory(this.id);
    }
}

export class AuthCharacter extends PublicCharacter {
    constructor(api: GeneratedApi, id: number) {
        super(api, id);
    }

    public async alliance() {
        const info = await this.fetch();

        if (!info.allianceId) return null;

        return new AuthAlliance(this.api, info.allianceId);
    }

    public async agentsResearch() {
        return this.api.getCharactersCharacterIdAgentsResearch(this.id);
    }

    public get assets() {
        return new CharacterAssets(this.api, this.id);
    }

    public async blueprints() {
        return this.api.getCharactersCharacterIdBlueprints(this.id);
    }

    public get calendar() {
        return new Calendar(this.api, this.id);
    }

    public async clones() {
        return this.api.getCharactersCharacterIdClones(this.id);
    }

    public contract(contractId: number) {
        return new CharacterContract(this.api, this.id, contractId);
    }

    public get contracts() {
        return {
            list: (page?: number) =>
                this.api.getCharactersCharacterIdContracts(this.id, page),
        };
    }

    public async corporation() {
        const info = await this.fetch();

        if (!info.corporationId) return null;

        return new PublicCorporation(this.api, info.corporationId);
    }

    public async cspaCost(characterIds: number[]) {
        return this.api.postCharactersCharacterIdCspa(this.id, characterIds);
    }

    public async fatigue() {
        return this.api.getCharactersCharacterIdFatigue(this.id);
    }

    public get fittings() {
        return new Fittings(this.api, this.id);
    }

    public async fleet() {
        const info = await this.fleetInfo();

        return new Fleet(this.api, info.fleetId);
    }

    public async fleetInfo() {
        return this.api.getCharactersCharacterIdFleet(this.id);
    }

    public async implants() {
        return this.api.getCharactersCharacterIdImplants(this.id);
    }

    public async killmails(page?: number) {
        return this.api.getCharactersCharacterIdKillmailsRecent(this.id, page);
    }

    public async location() {
        return this.api.getCharactersCharacterIdLocation(this.id);
    }

    public async loyalty() {
        return this.api.getCharactersCharacterIdLoyaltyPoints(this.id);
    }

    public get mail() {
        return new Mail(this.api, this.id);
    }

    public async medals() {
        return this.api.getCharactersCharacterIdMedals(this.id);
    }

    public async notifications() {
        return this.api.getCharactersCharacterIdNotifications(this.id);
    }

    public async contactNotifications() {
        return this.api.getCharactersCharacterIdNotificationsContacts(this.id);
    }

    public async online() {
        return this.api.getCharactersCharacterIdOnline(this.id);
    }

    public get market() {
        return new CharacterMarket(this.api, this.id);
    }

    public get colonies() {
        return new CharacterColonies(this.api, this.id);
    }

    public get roles() {
        return this.api.getCharactersCharacterIdRoles(this.id);
    }

    public async search(
        categories: Array<
            | "agent"
            | "alliance"
            | "character"
            | "constellation"
            | "corporation"
            | "faction"
            | "inventory_type"
            | "region"
            | "solar_system"
            | "station"
            | "structure"
        >,
        search: string,
        strict?: boolean,
    ) {
        return this.api.getCharactersCharacterIdSearch(
            categories,
            this.id,
            search,
            strict,
        );
    }

    public async ship() {
        return this.api.getCharactersCharacterIdShip(this.id);
    }

    public get skills() {
        return new Skills(this.api, this.id);
    }

    public async standings() {
        return this.api.getCharactersCharacterIdStandings(this.id);
    }

    public async titles() {
        return this.api.getCharactersCharacterIdTitles(this.id);
    }

    public get wallet() {
        return new Wallet(this.api, this.id);
    }
}
