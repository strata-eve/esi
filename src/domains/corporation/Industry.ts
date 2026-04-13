import { GeneratedApi } from "../../api/GeneratedApi";

export class CorporationBlueprints {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async list(page?: number) {
        return this.api.getCorporationsCorporationIdBlueprints(this.id, page);
    }
}

/**
 * Provides access to industry-related operations scoped to a specific corporation.
 *
 * @remarks
 * All endpoints require the authenticated character to have the
 * `Station_Manager` corporation role.
 */
export class CorporationIndustry {
    constructor(
        readonly api: GeneratedApi,
        readonly corporationId: number,
    ) {}

    public get blueprints() {
        return new CorporationBlueprints(this.api, this.corporationId);
    }

    /**
     * Retrieves a paginated list of active moon chunk extraction timers for this corporation.
     *
     * @param page - The page of results to retrieve. Defaults to the first page if omitted.
     * @returns A promise resolving to an array of extraction records.
     */
    public async extractions(page?: number) {
        return this.api.getCorporationCorporationIdMiningExtractions(
            this.corporationId,
            page,
        );
    }

    /**
     * Provides access to mining observer operations for this corporation.
     */
    public get observers() {
        return {
            /**
             * Retrieves a paginated list of all mining observers belonging to this corporation.
             *
             * @param page - The page of results to retrieve. Defaults to the first page if omitted.
             * @returns A promise resolving to an array of observer records.
             */
            list: (page?: number) =>
                this.api.getCorporationCorporationIdMiningObservers(
                    this.corporationId,
                    page,
                ),

            /**
             * Returns a scoped accessor for a specific mining observer.
             *
             * @param observerId - The unique identifier of the mining observer.
             */
            observer: (observerId: number) => {
                return {
                    /**
                     * Retrieves the mining ledger recorded by this observer.
                     *
                     * @returns A promise resolving to an array of ledger records.
                     */
                    fetch: () =>
                        this.api.getCorporationCorporationIdMiningObserversObserverId(
                            this.corporationId,
                            observerId,
                        ),
                };
            },
        };
    }

    /**
     * Retrieves the industry jobs associated with this corporation.
     *
     * @param includeCompleted - When `true`, completed jobs are included in the results
     * in addition to active ones. Defaults to `false` if omitted.
     * @returns A promise resolving to an array of industry job records.
     */
    public async jobs(includeCompleted?: boolean) {
        return this.api.getCorporationsCorporationIdIndustryJobs(
            this.corporationId,
            includeCompleted,
        );
    }
}
