import { GeneratedApi } from "../api/GeneratedApi";

/** The data that can be updated on an existing fleet. */
export interface UpdateFleetData {
    /** Whether free-move is enabled, allowing members to move freely between wings and squads. */
    isFreeMove?: boolean;
    /** The fleet's message of the day, displayed to all members upon joining. */
    motd?: string;
}

/**
 * Represents an EVE Online fleet entity, providing access to fleet
 * management operations scoped to a specific fleet ID.
 */
export class Fleet {
    constructor(
        readonly api: GeneratedApi,
        readonly fleetId: number,
    ) {}

    /**
     * Retrieves current information about this fleet.
     *
     * @returns A promise resolving to an object containing the fleet's
     * free-move status, message of the day, and whether it is registered.
     */
    public async fetch() {
        return this.api.getFleetsFleetId(this.fleetId);
    }

    /**
     * Updates the settings of this fleet.
     *
     * @param data - The fleet settings to update.
     * @returns A promise that resolves when the fleet has been successfully updated.
     */
    public async update(data: { isFreeMove?: boolean; motd?: string }) {
        return this.api.putFleetsFleetId(this.fleetId, data);
    }
}
