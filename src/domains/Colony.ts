import { GeneratedApi } from "../api/GeneratedApi";

/**
 * Provides access to planetary colony operations scoped to a specific character.
 */
export class CharacterColonies {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    /**
     * Retrieves all planetary colonies owned by this character.
     *
     * @returns A promise resolving to an array of colony records.
     */
    public async list() {
        return this.api.getCharactersCharacterIdPlanets(this.characterId);
    }

    /**
     * Returns a scoped accessor for a specific planetary colony,
     * enabling retrieval of its layout and pin details.
     *
     * @param colonyId - The unique planet ID of the colony.
     */
    public colony(colonyId: number) {
        return {
            /**
             * Retrieves the full layout of this planetary colony.
             *
             * @returns A promise resolving to the colony's layout data.
             */
            fetch: () =>
                this.api.getCharactersCharacterIdPlanetsPlanetId(
                    this.characterId,
                    colonyId,
                ),
        };
    }
}
