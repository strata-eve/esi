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

/**
 * Represents a publicly accessible EVE Online character entity.
 *
 * Provides access to public ESI endpoints scoped to a specific character,
 * identified by its unique EVE Online character ID.
 */
export class PublicCharacter {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    /**
     * Retrieves public information about this character.
     *
     * @returns A promise resolving to the character's public profile data,
     * including their name, corporation, alliance, birthday, and security status.
     */
    public async fetch() {
        return this.api.getCharactersCharacterId(this.id);
    }

    /**
     * Retrieves the portrait image URLs for this character.
     *
     * @returns A promise resolving to an object containing URLs for the
     * character's portrait at various sizes.
     */
    public async portrait() {
        return this.api.getCharactersCharacterIdPortrait(this.id);
    }

    /**
     * Retrieves the alliance this character is currently a member of, if any.
     *
     * @returns A promise resolving to a {@link PublicAlliance} instance, or
     * `null` if the character does not belong to an alliance.
     */
    public async alliance() {
        const info = await this.fetch();

        if (!info.allianceId) return null;

        return new PublicAlliance(this.api, info.allianceId);
    }

    /**
     * Retrieves the corporation this character is currently a member of.
     *
     * @returns A promise resolving to a {@link PublicCorporation} instance, or
     * `null` if no corporation ID is present on the character's public profile.
     */
    public async corporation() {
        const info = await this.fetch();

        if (!info.corporationId) return null;

        return new PublicCorporation(this.api, info.corporationId);
    }

    /**
     * Retrieves the full corporation membership history of this character.
     *
     * @returns A promise resolving to an array of historical corporation membership
     * records, each containing a corporation ID, record ID, start date, and
     * an optional deletion flag.
     */
    public async corporationHistory() {
        return this.api.getCharactersCharacterIdCorporationhistory(this.id);
    }
}

/**
 * Extends {@link PublicCharacter} with access to authenticated ESI endpoints
 * requiring a valid OAuth2 token with appropriate scopes.
 */
export class AuthCharacter extends PublicCharacter {
    constructor(api: GeneratedApi, id: number) {
        super(api, id);
    }

    /**
     * Retrieves the alliance this character is currently a member of, if any.
     *
     * @returns A promise resolving to an {@link AuthAlliance} instance, or
     * `null` if the character does not belong to an alliance.
     */
    public async alliance() {
        const info = await this.fetch();

        if (!info.allianceId) return null;

        return new AuthAlliance(this.api, info.allianceId);
    }

    /**
     * Retrieves the list of NPC agents this character is currently researching with.
     *
     * @returns A promise resolving to an array of agent research records, each
     * containing the agent ID, skill type ID, and research progress points.
     */
    public async agentsResearch() {
        return this.api.getCharactersCharacterIdAgentsResearch(this.id);
    }

    /**
     * Provides access to asset-related operations for this character.
     *
     * @returns A {@link CharacterAssets} instance scoped to this character.
     */
    public get assets() {
        return new CharacterAssets(this.api, this.id);
    }

    /**
     * Retrieves the list of blueprints owned by this character.
     *
     * @returns A promise resolving to an array of blueprint records.
     */
    public async blueprints() {
        return this.api.getCharactersCharacterIdBlueprints(this.id);
    }

    /**
     * Provides access to calendar-related operations for this character.
     *
     * @returns A {@link Calendar} instance scoped to this character.
     */
    public get calendar() {
        return new Calendar(this.api, this.id);
    }

    /**
     * Retrieves the clone and jump clone information for this character.
     *
     * @returns A promise resolving to an object containing the character's
     * home location, jump clones, and last clone jump date, etc.
     */
    public async clones() {
        return this.api.getCharactersCharacterIdClones(this.id);
    }

    /**
     * Returns a {@link CharacterContract} instance scoped to the specified contract,
     * enabling access to its details, bids, and items.
     *
     * @param contractId - The unique identifier of the contract.
     * @returns A {@link CharacterContract} instance scoped to the given contract ID.
     */
    public contract(contractId: number) {
        return new CharacterContract(this.api, this.id, contractId);
    }

    /**
     * Provides access to contract collection operations for this character.
     */
    public get contracts() {
        return {
            /**
             * Retrieves a paginated list of contracts associated with this character.
             *
             * @param page - The page of results to retrieve. Defaults to the first page if omitted.
             * @returns A promise resolving to an array of contract records.
             */
            list: (page?: number) =>
                this.api.getCharactersCharacterIdContracts(this.id, page),
        };
    }

    /**
     * Retrieves the corporation this character is currently a member of.
     *
     * @returns A promise resolving to a {@link PublicCorporation} instance, or
     * `null` if no corporation ID is present on the character's public profile.
     */
    public async corporation() {
        const info = await this.fetch();

        if (!info.corporationId) return null;

        return new PublicCorporation(this.api, info.corporationId);
    }

    /**
     * Calculates the CSPA (Concord Spam Prevention Act) charge
     * required for this character to contact the specified characters.
     *
     * @param characterIds - An array of character IDs to calculate the CSPA cost for.
     * @returns A promise resolving to the total CSPA charge in ISK.
     */
    public async cspaCost(characterIds: number[]) {
        return this.api.postCharactersCharacterIdCspa(this.id, characterIds);
    }

    /**
     * Retrieves the jump fatigue information for this character.
     *
     * @returns A promise resolving to an object containing the character's
     * last jump date, last fatigue expiry date, and last jump type.
     */
    public async fatigue() {
        return this.api.getCharactersCharacterIdFatigue(this.id);
    }

    /**
     * Provides access to fitting-related operations for this character.
     *
     * @returns A {@link Fittings} instance scoped to this character.
     */
    public get fittings() {
        return new Fittings(this.api, this.id);
    }

    /**
     * Retrieves the fleet this character is currently a member of and returns
     * a domain object for managing it.
     *
     * @returns A promise resolving to a {@link Fleet} instance scoped to the
     * character's current fleet.
     * @throws If the character is not currently in a fleet.
     */
    public async fleet() {
        const info = await this.fleetInfo();

        return new Fleet(this.api, info.fleetId);
    }

    /**
     * Retrieves raw information about the fleet this character is currently a member of.
     *
     * @returns A promise resolving to an object containing the fleet ID,
     * the character's role within the fleet, squad ID, and wing ID.
     * @throws If the character is not currently in a fleet.
     */
    public async fleetInfo() {
        return this.api.getCharactersCharacterIdFleet(this.id);
    }

    /**
     * Retrieves the list of implants currently installed in this character's
     * active clone.
     *
     * @returns A promise resolving to an array of implant type IDs.
     */
    public async implants() {
        return this.api.getCharactersCharacterIdImplants(this.id);
    }

    /**
     * Retrieves the most recent killmails involving this character.
     *
     * @param page - The page of results to retrieve. Defaults to the first page if omitted.
     * @returns A promise resolving to an array of killmail references, each
     * containing a killmail ID and its corresponding hash.
     */
    public async killmails(page?: number) {
        return this.api.getCharactersCharacterIdKillmailsRecent(this.id, page);
    }

    /**
     * Retrieves the current location of this character within the EVE universe.
     *
     * @returns A promise resolving to an object containing the solar system ID,
     * and optionally the station ID or structure ID the character is currently docked at.
     */
    public async location() {
        return this.api.getCharactersCharacterIdLocation(this.id);
    }

    /**
     * Retrieves the loyalty points this character has accumulated with each NPC corporation.
     *
     * @returns A promise resolving to an array of loyalty point records, each
     * containing a corporation ID and the corresponding point balance.
     */
    public async loyalty() {
        return this.api.getCharactersCharacterIdLoyaltyPoints(this.id);
    }

    /**
     * Provides access to mail-related operations for this character.
     *
     * @returns A {@link Mail} instance scoped to this character.
     */
    public get mail() {
        return new Mail(this.api, this.id);
    }

    /**
     * Retrieves the medals awarded to this character.
     *
     * @returns A promise resolving to an array of medal records.
     */
    public async medals() {
        return this.api.getCharactersCharacterIdMedals(this.id);
    }

    /**
     * Retrieves the recent notifications received by this character.
     *
     * @returns A promise resolving to an array of notification records.
     */
    public async notifications() {
        return this.api.getCharactersCharacterIdNotifications(this.id);
    }

    /**
     * Retrieves the recent contact notifications received by this character.
     *
     * @returns A promise resolving to an array of contact notification records.
     */
    public async contactNotifications() {
        return this.api.getCharactersCharacterIdNotificationsContacts(this.id);
    }

    /**
     * Checks whether this character is currently online.
     *
     * @returns A promise resolving to an object containing the character's online
     * status, last login date, last logout date and total login count.
     */
    public async online() {
        return this.api.getCharactersCharacterIdOnline(this.id);
    }

    /**
     * Provides access to market-related operations for this character.
     *
     * @returns A {@link CharacterMarket} instance scoped to this character.
     */
    public get market() {
        return new CharacterMarket(this.api, this.id);
    }

    /**
     * Provides access to planetary colony operations for this character.
     *
     * @returns A {@link CharacterColonies} instance scoped to this character.
     */
    public get colonies() {
        return new CharacterColonies(this.api, this.id);
    }

    /**
     * Retrieves the corporation roles assigned to this character.
     *
     * @returns A promise resolving to an object containing the character's
     * roles.
     */
    public get roles() {
        return this.api.getCharactersCharacterIdRoles(this.id);
    }

    /**
     * Searches for entities within EVE Online matching the given query string,
     * filtered to the specified categories.
     *
     * @param categories - An array of entity categories to restrict the search to.
     * @param search - The search string to query against.
     * @param strict - When `true`, only exact matches are returned. Defaults to `false`.
     * @returns A promise resolving to an object whose keys are the requested categories,
     * each containing an array of matching entity IDs.
     */
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

    /**
     * Retrieves information about the ship this character is currently piloting.
     *
     * @returns A promise resolving to an object containing the ship's item ID,
     * type ID, and in-game name.
     */
    public async ship() {
        return this.api.getCharactersCharacterIdShip(this.id);
    }

    /**
     * Provides access to skill-related operations for this character.
     *
     * @returns A {@link Skills} instance scoped to this character.
     */
    public get skills() {
        return new Skills(this.api, this.id);
    }

    /**
     * Retrieves the standings this character has with other entities,
     * such as agents, NPC corporations, and factions.
     *
     * @returns A promise resolving to an array of standing records, each
     * containing the entity type, entity ID, and standing value.
     */
    public async standings() {
        return this.api.getCharactersCharacterIdStandings(this.id);
    }

    /**
     * Retrieves the corporation titles held by this character.
     *
     * @returns A promise resolving to an array of title records, each
     * containing a title ID and its in-game name.
     */
    public async titles() {
        return this.api.getCharactersCharacterIdTitles(this.id);
    }

    /**
     * Provides access to wallet-related operations for this character.
     *
     * @returns A {@link Wallet} instance scoped to this character.
     */
    public get wallet() {
        return new Wallet(this.api, this.id);
    }
}
