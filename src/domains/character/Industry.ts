import { GeneratedApi } from "../../api/GeneratedApi";

/**
 * Provides access to industry-related operations scoped to a specific character,
 * including job tracking and mining ledger access.
 */
export class CharacterIndustry {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public get blueprints() {
        return new CharacterBlueprints(this.api, this.characterId);
    }

    /**
     * Retrieves the industry jobs associated with this character.
     *
     * @param includeCompleted - When `true`, completed jobs are included in the results
     * in addition to active ones. Defaults to `false` if omitted.
     * @returns A promise resolving to an array of industry job records.
     */
    public async jobs(includeCompleted?: boolean) {
        return this.api.getCharactersCharacterIdIndustryJobs(
            this.characterId,
            includeCompleted,
        );
    }

    /**
     * Retrieves a paginated mining ledger for this character,
     * detailing all ore mined within the past 30 days.
     *
     * @param page - The page of results to retrieve. Defaults to the first page if omitted.
     * @returns A promise resolving to an array of mining records.
     */
    public async mining(page?: number) {
        return this.api.getCharactersCharacterIdMining(this.characterId, page);
    }
}

export class CharacterBlueprints {
    constructor(
        readonly api: GeneratedApi,
        readonly charId: number,
    ) {}

    public async list(page?: number) {
        return this.api.getCharactersCharacterIdBlueprints(this.charId, page);
    }
}
