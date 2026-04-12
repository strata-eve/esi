import { GeneratedApi } from "../api/GeneratedApi";
import { AuthCharacter } from "../domains/Character";

export class AuthClient {
    constructor(
        public readonly api: GeneratedApi,
        public readonly actorId: number,
    ) {}

    public get character() {
        return new AuthCharacter(this.api, this.actorId);
    }
}
