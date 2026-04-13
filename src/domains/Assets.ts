import { GeneratedApi } from "../api/GeneratedApi";

export class CharacterAssets {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public async list(page?: number) {
        return this.api.getCharactersCharacterIdAssets(this.characterId, page);
    }

    public async locations(items: number[]) {
        return this.api.postCharactersCharacterIdAssetsLocations(
            this.characterId,
            items,
        );
    }

    public async names(items: number[]) {
        return this.api.postCharactersCharacterIdAssetsNames(
            this.characterId,
            items,
        );
    }
}

export class CorporationAssets {
    constructor(
        readonly api: GeneratedApi,
        readonly corporationId: number,
    ) {}

    public async list(page?: number) {
        return this.api.getCorporationsCorporationIdAssets(
            this.corporationId,
            page,
        );
    }

    public async locations(items: number[]) {
        return this.api.postCorporationsCorporationIdAssetsLocations(
            this.corporationId,
            items,
        );
    }

    public async names(items: number[]) {
        return this.api.postCorporationsCorporationIdAssetsNames(
            this.corporationId,
            items,
        );
    }
}
