import { GeneratedApi } from "../../api/GeneratedApi";

/**
 * Provides access to contact-related operations scoped to a specific character.
 */
export class CharacterContacts {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    /**
     * Adds one or more contacts to this character's contact list.
     *
     * @param contact - A single character ID or an array of character IDs to add as contacts.
     * @param standing - The standing value to assign.
     * @param labelIds - An optional array of label IDs to assign to the contacts.
     * @param watched - Whether to place the contacts on the character's watch list.
     * @returns A promise resolving to an array of the newly created contact IDs.
     */
    public async add(
        contact: number | number[],
        standing: number,
        labelIds?: number[],
        watched?: boolean,
    ) {
        return this.api.postCharactersCharacterIdContacts(
            this.characterId,
            standing,
            Array.isArray(contact) ? contact : [contact],
            labelIds,
            watched,
        );
    }

    /**
     * Removes one or more contacts from this character's contact list.
     *
     * @param contact - A single character ID or an array of character IDs to remove.
     */
    public async delete(contact: number | number[]) {
        return this.api.deleteCharactersCharacterIdContacts(
            this.characterId,
            Array.isArray(contact) ? contact : [contact],
        );
    }

    /**
     * Updates the standing and labels of one or more existing contacts.
     *
     * @param contact - A single character ID or an array of character IDs to update.
     * @param standing - The new standing value to assign.
     * @param labelIds - An optional array of label IDs to assign to the contacts.
     * @param watched - Whether to place the contacts on the character's watch list.
     * @returns A promise that resolves when the contacts have been successfully updated.
     */
    public async edit(
        contact: number | number[],
        standing: number,
        labelIds?: number[],
        watched?: boolean,
    ) {
        return this.api.putCharactersCharacterIdContacts(
            this.characterId,
            standing,
            Array.isArray(contact) ? contact : [contact],
            labelIds,
            watched,
        );
    }

    /**
     * Provides access to contact label operations for this character.
     */
    public get labels() {
        return {
            /**
             * Retrieves all contact labels defined by this character.
             *
             * @returns A promise resolving to an array of label records.
             */
            list: () =>
                this.api.getCharactersCharacterIdContactsLabels(
                    this.characterId,
                ),
        };
    }

    /**
     * Retrieves a paginated list of contacts for this character.
     *
     * @param page - The page of results to retrieve. Defaults to the first page if omitted.
     * @returns A promise resolving to an array of contact records.
     */
    public async list(page?: number) {
        return this.api.getCharactersCharacterIdContacts(
            this.characterId,
            page,
        );
    }
}
