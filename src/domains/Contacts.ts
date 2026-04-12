import { GeneratedApi } from "../api/GeneratedApi";

export class AllianceContacts {
    constructor(
        readonly api: GeneratedApi,
        readonly allianceId: number,
    ) {}

    async fetch() {
        return this.api.getAlliancesAllianceIdContacts(this.allianceId);
    }

    async labels() {
        return this.api.getAlliancesAllianceIdContactsLabels(this.allianceId);
    }
}

export class CharacterContacts {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    async fetch() {
        return this.api.getCharactersCharacterIdContacts(this.characterId);
    }

    async labels() {
        return this.api.getCharactersCharacterIdContactsLabels(
            this.characterId,
        );
    }

    async add(
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

    async edit(
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

    async delete(contact: number | number[]) {
        return this.api.deleteCharactersCharacterIdContacts(
            this.characterId,
            Array.isArray(contact) ? contact : [contact],
        );
    }
}
