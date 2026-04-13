import { GeneratedApi } from "../../api/GeneratedApi";

export interface NewMailData {
    body: string;
    recipients: number[];
    subject: string;
    toCorpOrAllianceId?: number;
    toMailingListId?: number;
}

export class CharacterUiAutopilotWaypoints {
    constructor(
        readonly api: GeneratedApi,
        readonly charId: number,
    ) {}

    public async add(
        destinationId: number,
        options?: {
            addToBeginning: boolean;
            clearOtherWaypoints?: boolean;
        },
    ) {
        return this.api.postUiAutopilotWaypoint(
            options?.addToBeginning ?? false,
            options?.clearOtherWaypoints ?? false,
            destinationId,
        );
    }
}

export class CharacterUiAutopilot {
    constructor(
        readonly api: GeneratedApi,
        readonly charId: number,
    ) {}

    public get waypoints() {
        return new CharacterUiAutopilotWaypoints(this.api, this.charId);
    }
}

export class CharacterUiOpen {
    constructor(
        readonly api: GeneratedApi,
        readonly charId: number,
    ) {}

    public async contract(contractId: number) {
        return this.api.postUiOpenwindowContract(contractId);
    }

    public async information(targetId: number) {
        return this.api.postUiOpenwindowInformation(targetId);
    }

    public async marketDetails(typeId: number) {
        return this.api.postUiOpenwindowMarketdetails(typeId);
    }

    public async newMail(data: NewMailData) {
        return this.api.postUiOpenwindowNewmail(data);
    }
}

export class CharacterUi {
    constructor(
        readonly api: GeneratedApi,
        readonly charId: number,
    ) {}

    public get() {
        return this.api.getCharactersCharacterIdFwStats(this.charId);
    }
}
