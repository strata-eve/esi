import { GeneratedApi } from "../api/GeneratedApi";

export class AllianceContacts {
    constructor(
        readonly api: GeneratedApi,
        readonly allianceId: number,
    ) {}

    async list(page?: number) {
        return this.api.getAlliancesAllianceIdContacts(this.allianceId, page);
    }

    public get labels() {
        return {
            list: () =>
                this.api.getAlliancesAllianceIdContactsLabels(this.allianceId),
        };
    }
}

export class CharacterContacts {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public async list(page?: number) {
        return this.api.getCharactersCharacterIdContacts(
            this.characterId,
            page,
        );
    }

    public get labels() {
        return {
            list: () =>
                this.api.getCharactersCharacterIdContactsLabels(
                    this.characterId,
                ),
        };
    }

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

    public async delete(contact: number | number[]) {
        return this.api.deleteCharactersCharacterIdContacts(
            this.characterId,
            Array.isArray(contact) ? contact : [contact],
        );
    }
}
