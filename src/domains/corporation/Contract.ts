import { GeneratedApi } from "../../api/GeneratedApi";

export class CorporationContractBids {
    constructor(
        readonly api: GeneratedApi,
        readonly corpId: number,
        readonly id: number,
    ) {}

    public async list() {
        return this.api.getCorporationsCorporationIdContractsContractIdBids(
            this.corpId,
            this.id,
        );
    }
}

export class CorporationContractItems {
    constructor(
        readonly api: GeneratedApi,
        readonly corpId: number,
        readonly id: number,
    ) {}

    public async list() {
        return this.api.getCorporationsCorporationIdContractsContractIdItems(
            this.corpId,
            this.id,
        );
    }
}

/**
 * Represents a contract associated with a specific corporation,
 * providing access to its bids and items.
 */
export class CorporationContract {
    constructor(
        readonly api: GeneratedApi,
        readonly corpId: number,
        readonly id: number,
    ) {}

    public get bids() {
        return new CorporationContractBids(this.api, this.corpId, this.id);
    }

    public get items() {
        return new CorporationContractItems(this.api, this.corpId, this.id);
    }
}

export class CorporationContracts {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async list(page?: number) {
        return this.api.getCorporationsCorporationIdContracts(this.id, page);
    }
}
