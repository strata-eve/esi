import { GeneratedApi } from "../api/GeneratedApi";
import { AuthAlliance } from "../domains/Alliance";
import { AuthCharacter } from "../domains/Character";

export class AuthClient {
    constructor(
        public readonly api: GeneratedApi,
        public readonly actorId: number,
    ) {}

    public get character() {
        return new AuthCharacter(this.api, this.actorId);
    }

    public alliance(id: number) {
        return new AuthAlliance(this.api, id);
    }

    public async alliances() {
        const info = await this.api.getAlliances();

        return info.map((id) => new AuthAlliance(this.api, id));
    }
}
