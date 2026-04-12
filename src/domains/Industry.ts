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

export class CorporationIndustry {
    constructor(
        readonly api: GeneratedApi,
        readonly corporationId: number,
    ) {}

    public async extractions(page?: number) {
        return this.api.getCorporationCorporationIdMiningExtractions(
            this.corporationId,
            page,
        );
    }

    public get observers() {
        return {
            list: (page?: number) =>
                this.api.getCorporationCorporationIdMiningObservers(
                    this.corporationId,
                    page,
                ),
            observer: (observerId: number) => {
                return {
                    fetch: () =>
                        this.api.getCorporationCorporationIdMiningObserversObserverId(
                            this.corporationId,
                            observerId,
                        ),
                };
            },
        };
    }
}
