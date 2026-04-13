import { GeneratedApi } from "../../api/GeneratedApi";
import { AuthAlliance, PublicAlliance } from "../alliance/Alliance";
import { CharacterAssets } from "./Assets";
import { Calendar } from "./Calendar";
import { CharacterColonies } from "./Colony";
import { CharacterContract, CharacterContracts } from "./Contract";
import { AuthCorporation, PublicCorporation } from "../corporation/Corporation";
import { Fittings } from "./Fittings";
import { Fleet } from "./Fleet";
import { CharacterIndustry } from "./Industry";
import { Mail } from "./Mail";
import { CharacterMarket } from "./Market";
import { Skills } from "./Skills";
import { CharacterWallet } from "./Wallet";
import { CharacterUi } from "./Ui";

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

    public get corporationHistory() {
        return new CharacterCorporationHistory(this.api, this.id);
    }

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

    public get agentsResearch() {
        return new CharacterAgentsResearch(this.api, this.id);
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
     * Provides access to calendar-related operations for this character.
     *
     * @returns A {@link Calendar} instance scoped to this character.
     */
    public get calendar() {
        return new Calendar(this.api, this.id);
    }

    public get clones() {
        return new CharacterClones(this.api, this.id);
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
     * Retrieves the recent contact notifications received by this character.
     *
     * @returns A promise resolving to an array of contact notification records.
     */
    public async contactNotifications() {
        return this.api.getCharactersCharacterIdNotificationsContacts(this.id);
    }

    public get contracts() {
        return new CharacterContracts(this.api, this.id);
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

        return new AuthCorporation(this.api, info.corporationId);
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

    public get fw() {
        return new CharacterFw(this.api, this.id);
    }

    public get implants() {
        return new CharacterImplants(this.api, this.id);
    }

    /**
     * Provides access to industry-related operations for this character.
     */
    public get industry() {
        return new CharacterIndustry(this.api, this.id);
    }

    public get killmails() {
        return new CharacterKillmails(this.api, this.id);
    }

    public get location() {
        return new CharacterLocation(this.api, this.id);
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
     * Provides access to market-related operations for this character.
     *
     * @returns A {@link CharacterMarket} instance scoped to this character.
     */
    public get market() {
        return new CharacterMarket(this.api, this.id);
    }

    public get medals() {
        return new CharacterMedals(this.api, this.id);
    }

    public get notifications() {
        return new CharacterNotifications(this.api, this.id);
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

    public get roles() {
        return new CharacterRoles(this.api, this.id);
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

    public get ship() {
        return new CharacterShip(this.api, this.id);
    }

    /**
     * Provides access to skill-related operations for this character.
     *
     * @returns A {@link Skills} instance scoped to this character.
     */
    public get skills() {
        return new Skills(this.api, this.id);
    }

    public get standings() {
        return new CharacterStandings(this.api, this.id);
    }

    public get titles() {
        return new CharacterTitles(this.api, this.id);
    }

    public get ui() {
        return new CharacterUi(this.api, this.id);
    }

    /**
     * Provides access to wallet-related operations for this character.
     *
     * @returns A {@link CharacterWallet} instance scoped to this character.
     */
    public get wallet() {
        return new CharacterWallet(this.api, this.id);
    }
}

export class CharacterCorporationHistory {
    constructor(
        readonly api: GeneratedApi,
        readonly charId: number,
    ) {}

    public async list() {
        return this.api.getCharactersCharacterIdCorporationhistory(this.charId);
    }
}

export class CharacterAgentsResearch {
    constructor(
        readonly api: GeneratedApi,
        readonly charId: number,
    ) {}

    public async list() {
        return this.api.getCharactersCharacterIdAgentsResearch(this.charId);
    }
}

export class CharacterClones {
    constructor(
        readonly api: GeneratedApi,
        readonly charId: number,
    ) {}

    public async list() {
        return this.api.getCharactersCharacterIdClones(this.charId);
    }
}

export class CharacterFw {
    constructor(
        readonly api: GeneratedApi,
        readonly charId: number,
    ) {}

    public async stats() {
        return this.api.getCharactersCharacterIdFwStats(this.charId);
    }
}

export class CharacterLocation {
    constructor(
        readonly api: GeneratedApi,
        readonly charId: number,
    ) {}

    public async fetch() {
        return this.api.getCharactersCharacterIdLocation(this.charId);
    }
}

export class CharacterImplants {
    constructor(
        readonly api: GeneratedApi,
        readonly charId: number,
    ) {}

    public async list() {
        return this.api.getCharactersCharacterIdImplants(this.charId);
    }
}

export class CharacterKillmails {
    constructor(
        readonly api: GeneratedApi,
        readonly charId: number,
    ) {}

    public async recent(page?: number) {
        return this.api.getCharactersCharacterIdKillmailsRecent(
            this.charId,
            page,
        );
    }
}

export class CharacterMedals {
    constructor(
        readonly api: GeneratedApi,
        readonly charId: number,
    ) {}

    public async list() {
        return this.api.getCharactersCharacterIdMedals(this.charId);
    }
}

export class CharacterContactNotifications {
    constructor(
        private readonly api: GeneratedApi,
        private readonly charId: number,
    ) {}

    public async list() {
        return this.api.getCharactersCharacterIdNotificationsContacts(
            this.charId,
        );
    }
}

export class CharacterNotifications {
    constructor(
        readonly api: GeneratedApi,
        readonly charId: number,
    ) {}

    public async list() {
        return this.api.getCharactersCharacterIdNotifications(this.charId);
    }

    public get contacts() {
        return new CharacterContactNotifications(this.api, this.charId);
    }
}

export class CharacterRoles {
    constructor(
        private readonly api: GeneratedApi,
        private readonly charId: number,
    ) {}

    public async list() {
        return this.api.getCharactersCharacterIdRoles(this.charId);
    }
}

export class CharacterShip {
    constructor(
        private readonly api: GeneratedApi,
        private readonly charId: number,
    ) {}

    public async fetch() {
        return this.api.getCharactersCharacterIdShip(this.charId);
    }
}

export class CharacterStandings {
    constructor(
        private readonly api: GeneratedApi,
        private readonly charId: number,
    ) {}

    public async list() {
        return this.api.getCharactersCharacterIdStandings(this.charId);
    }
}

export class CharacterTitles {
    constructor(
        private readonly api: GeneratedApi,
        private readonly charId: number,
    ) {}

    public async list() {
        return this.api.getCharactersCharacterIdTitles(this.charId);
    }
}
