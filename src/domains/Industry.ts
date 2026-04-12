import { GeneratedApi } from "../api/GeneratedApi";

export class CharacterIndustry {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public async jobs(includeCompleted?: boolean) {
        return this.api.getCharactersCharacterIdIndustryJobs(
            this.characterId,
            includeCompleted,
        );
    }

    public async mining(page?: number) {
        return this.api.getCharactersCharacterIdMining(this.characterId, page);
    }
}
