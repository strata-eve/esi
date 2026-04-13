import { GeneratedApi } from "../../api/GeneratedApi";

/** Represents a valid module slot flag for a ship fitting. */
export type FittingFlag =
    | "Cargo"
    | "DroneBay"
    | "FighterBay"
    | "HiSlot0"
    | "HiSlot1"
    | "HiSlot2"
    | "HiSlot3"
    | "HiSlot4"
    | "HiSlot5"
    | "HiSlot6"
    | "HiSlot7"
    | "Invalid"
    | "LoSlot0"
    | "LoSlot1"
    | "LoSlot2"
    | "LoSlot3"
    | "LoSlot4"
    | "LoSlot5"
    | "LoSlot6"
    | "LoSlot7"
    | "MedSlot0"
    | "MedSlot1"
    | "MedSlot2"
    | "MedSlot3"
    | "MedSlot4"
    | "MedSlot5"
    | "MedSlot6"
    | "MedSlot7"
    | "RigSlot0"
    | "RigSlot1"
    | "RigSlot2"
    | "ServiceSlot0"
    | "ServiceSlot1"
    | "ServiceSlot2"
    | "ServiceSlot3"
    | "ServiceSlot4"
    | "ServiceSlot5"
    | "ServiceSlot6"
    | "ServiceSlot7"
    | "SubSystemSlot0"
    | "SubSystemSlot1"
    | "SubSystemSlot2"
    | "SubSystemSlot3";

/** Represents a single module entry within a ship fitting. */
export interface FittingItem {
    /** The slot this module is fitted into. */
    flag: FittingFlag;
    /** The number of units of this module included in the fitting. */
    quantity: number;
    /** The type ID of the module. */
    typeId: number;
}

/** The data required to create a new ship fitting. */
export interface CreateFittingData {
    /** A brief description of the fitting and its intended use. */
    description: string;
    /** The list of modules and their slot assignments that make up the fitting. */
    items: FittingItem[];
    /** The in-game name to assign to this fitting. */
    name: string;
    /** The type ID of the ship this fitting is designed for. */
    shipTypeId: number;
}

/**
 * Provides access to ship fitting operations scoped to a specific character,
 * including listing, creating, and deleting fittings.
 */
export class Fittings {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    /**
     * Saves a new ship fitting for this character.
     *
     * @param data - The fitting details including name, description, ship type and modules.
     * @returns A promise resolving to an object containing the newly created fitting ID.
     */
    public async create(data: CreateFittingData) {
        return this.api.postCharactersCharacterIdFittings(
            this.characterId,
            data,
        );
    }

    /**
     * Retrieves all ship fittings saved by this character.
     *
     * @returns A promise resolving to an array of fitting records, each containing
     * a fitting ID, name, description, ship type ID, and the list of fitted modules.
     */
    public async list() {
        return this.api.getCharactersCharacterIdFittings(this.characterId);
    }

    /**
     * Permanently deletes a saved ship fitting belonging to this character.
     *
     * @param fittingId - The unique identifier of the fitting to delete.
     * @returns A promise that resolves when the fitting has been successfully deleted.
     */
    public async delete(fittingId: number) {
        return this.api.deleteCharactersCharacterIdFittingsFittingId(
            this.characterId,
            fittingId,
        );
    }
}
