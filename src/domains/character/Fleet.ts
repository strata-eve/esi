import { GeneratedApi } from "../../api/GeneratedApi";

/** The data that can be updated on an existing fleet. */
export interface UpdateFleetData {
    /** Whether free-move is enabled, allowing members to move freely between wings and squads. */
    isFreeMove?: boolean;
    /** The fleet's message of the day, displayed to all members upon joining. */
    motd?: string;
}

export type FleetRole =
    | "fleet_commander"
    | "wing_commander"
    | "squad_commander"
    | "squad_member";

export interface InviteMemberData {
    characterId: number;
    role: FleetRole;
    squadId?: number;
    wingId?: number;
}

export interface MoveMemberData {
    role: FleetRole;
    squadId?: number;
    wingId?: number;
}

/**
 * Represents an EVE Online fleet entity, providing access to fleet
 * management operations scoped to a specific fleet ID.
 */
export class Fleet {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    /**
     * Retrieves current information about this fleet.
     *
     * @returns A promise resolving to an object containing the fleet's
     * free-move status, message of the day, and whether it is registered.
     */
    public async fetch() {
        return this.api.getFleetsFleetId(this.id);
    }

    /**
     * Updates the settings of this fleet.
     *
     * @param data - The fleet settings to update.
     * @returns A promise that resolves when the fleet has been successfully updated.
     */
    public async update(data: { isFreeMove?: boolean; motd?: string }) {
        return this.api.putFleetsFleetId(this.id, data);
    }

    public get members() {
        return {
            list: () => this.api.getFleetsFleetIdMembers(this.id),
            invite: (data: InviteMemberData) =>
                this.api.postFleetsFleetIdMembers(this.id, data),
        };
    }

    public member(memberId: number) {
        return {
            kick: () =>
                this.api.deleteFleetsFleetIdMembersMemberId(this.id, memberId),
            move: (data: MoveMemberData) =>
                this.api.putFleetsFleetIdMembersMemberId(
                    this.id,
                    memberId,
                    data,
                ),
        };
    }

    public get wings() {
        return {
            list: () => this.api.getFleetsFleetIdWings(this.id),
            create: () => this.api.postFleetsFleetIdWings(this.id),
        };
    }

    public wing(wingId: number) {
        return {
            delete: () =>
                this.api.deleteFleetsFleetIdWingsWingId(this.id, wingId),
            rename: (name: string) =>
                this.api.putFleetsFleetIdWingsWingId(this.id, wingId, { name }),
            squads: {
                create: () =>
                    this.api.postFleetsFleetIdWingsWingIdSquads(
                        this.id,
                        wingId,
                    ),
            },
        };
    }

    public squad(squadId: number) {
        return {
            delete: () =>
                this.api.deleteFleetsFleetIdSquadsSquadId(this.id, squadId),
            rename: (name: string) =>
                this.api.putFleetsFleetIdSquadsSquadId(this.id, squadId, {
                    name,
                }),
        };
    }
}
