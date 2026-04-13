import { GeneratedApi } from "../../api/GeneratedApi";

/**
 * Provides access to contact-related operations scoped to a specific alliance.
 */
export class AllianceContacts {
    constructor(
        readonly api: GeneratedApi,
        readonly allianceId: number,
    ) {}

    /**
     * Provides access to contact label operations for this alliance.
     */
    public get labels() {
        return {
            /**
             * Retrieves all contact labels defined by this alliance.
             *
             * @returns A promise resolving to an array of label records,
             * each containing a label ID and its name.
             */
            list: () =>
                this.api.getAlliancesAllianceIdContactsLabels(this.allianceId),
        };
    }

    /**
     * Retrieves a paginated list of contacts for this alliance.
     *
     * @param page - The page of results to retrieve. Defaults to the first page if omitted.
     * @returns A promise resolving to an array of contact records.
     */
    async list(page?: number) {
        return this.api.getAlliancesAllianceIdContacts(this.allianceId, page);
    }
}
