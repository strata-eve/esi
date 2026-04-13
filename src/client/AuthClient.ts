import { GeneratedApi } from "../api/GeneratedApi";
import { AuthCharacter } from "../domains/character/Character";

export class AuthClient {
    constructor(
        public readonly api: GeneratedApi,
        public readonly actorId: number,
    ) {}

    public get character() {
        return new AuthCharacter(this.api, this.actorId);
    }

    public structure(structureId: number) {
        return {
            market: {
                orders: (page?: number) =>
                    this.api.getMarketsStructuresStructureId(structureId, page),
            },
        };
    }
}
