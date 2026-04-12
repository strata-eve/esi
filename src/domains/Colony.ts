import { GeneratedApi } from "../api/GeneratedApi";

export class CharacterColonies {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public async fetch() {
        return this.api.getCharactersCharacterIdPlanets(this.characterId);
    }

    public async get(colonyId: number) {
        return this.api.getCharactersCharacterIdPlanetsPlanetId(
            this.characterId,
            colonyId,
        );
    }
}
