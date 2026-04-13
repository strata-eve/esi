import { GeneratedApi } from "../api/GeneratedApi";
import { AllianceContacts } from "./Contacts";

/**
 * Represents a publicly accessible EVE Online alliance entity.
 *
 * Provides access to public ESI endpoints scoped to a specific alliance,
 * identified by its unique ID.
 */
export class PublicAlliance {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    /**
     * Retrieves public information about alliance.
     */
    public async fetch() {
        return this.api.getAlliancesAllianceId(this.id);
    }

    /**
     * Provides access to corporation-related operations within this alliance.
     */
    public get corporations() {
        return {
            /**
             * Retrieves all corporations currently members of this alliance.
             */
            list: () => this.api.getAlliancesAllianceIdCorporations(this.id),
        };
    }

    /**
     * Retrieves the icon image URLs for this alliance.
     */
    public async icons() {
        return this.api.getAlliancesAllianceIdIcons(this.id);
    }
}

/**
 * Extends {@link PublicAlliance} with access to authenticated ESI endpoints
 * requiring a valid OAuth2 tokan with appropriate scopes.
 */
export class AuthAlliance extends PublicAlliance {
    constructor(api: GeneratedApi, id: number) {
        super(api, id);
    }

    /**
     * Provides access to contact-related operations for this alliance.
     */
    public get contacts() {
        return new AllianceContacts(this.api, this.id);
    }
}
