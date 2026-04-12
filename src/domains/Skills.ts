import { GeneratedApi } from "../api/GeneratedApi";

export class Skills {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public async list() {
        return this.api.getCharactersCharacterIdSkills(this.characterId);
    }

    public async attributes() {
        return this.api.getCharactersCharacterIdAttributes(this.characterId);
    }

    public async queue() {
        return this.api.getCharactersCharacterIdSkillqueue(this.characterId);
    }
}
