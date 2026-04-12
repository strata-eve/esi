import { GeneratedApi } from "../api/GeneratedApi";

export class CharacterColonies {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public async list() {
        return this.api.getCharactersCharacterIdPlanets(this.characterId);
    }

    public colony(colonyId: number) {
        return {
            fetch: () =>
                this.api.getCharactersCharacterIdPlanetsPlanetId(
                    this.characterId,
                    colonyId,
                ),
        };
    }
}
