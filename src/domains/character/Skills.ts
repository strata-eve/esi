import { GeneratedApi } from "../../api/GeneratedApi";

/**
 * Provides access to skill-related operations scoped to a specific character.
 */
export class Skills {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    /**
     * Retrieves all skills trained by this character.
     *
     * @returns A promise resolving to an object.
     */
    public async list() {
        return this.api.getCharactersCharacterIdSkills(this.characterId);
    }

    /**
     * Retrieves the base attributes of this character.
     *
     * @returns A promise resolving to an object.
     */
    public async attributes() {
        return this.api.getCharactersCharacterIdAttributes(this.characterId);
    }

    /**
     * Retrieves the current skill training queue for this character.
     *
     * @returns A promise resolving to an array of skill queue entries.
     */
    public async queue() {
        return this.api.getCharactersCharacterIdSkillqueue(this.characterId);
    }
}
