import { GeneratedApi } from "../api/GeneratedApi";

export class MailMessage {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getCharactersCharacterIdMailMailId(
            this.characterId,
            this.id,
        );
    }

    public async update(labels: number[], read: boolean) {
        return this.api.putCharactersCharacterIdMailMailId(
            this.characterId,
            this.id,
            {
                labels,
                read,
            },
        );
    }

    public async delete() {
        return this.api.deleteCharactersCharacterIdMailMailId(
            this.characterId,
            this.id,
        );
    }
}

export class MailLabels {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public async list() {
        return this.api.getCharactersCharacterIdMailLabels(this.characterId);
    }

    public async create(
        name: string,
        color:
            | "#0000fe"
            | "#006634"
            | "#0099ff"
            | "#00ff33"
            | "#01ffff"
            | "#349800"
            | "#660066"
            | "#666666"
            | "#999999"
            | "#99ffff"
            | "#9a0000"
            | "#ccff9a"
            | "#e6e6e6"
            | "#fe0000"
            | "#ff6600"
            | "#ffff01"
            | "#ffffcd"
            | "#ffffff",
    ) {
        return this.api.postCharactersCharacterIdMailLabels(this.characterId, {
            name,
            color,
        });
    }

    public async delete(labelId: number) {
        return this.api.deleteCharactersCharacterIdMailLabelsLabelId(
            this.characterId,
            labelId,
        );
    }
}

export class Mail {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public async list(labels?: number[], lastMailId?: number) {
        return this.api.getCharactersCharacterIdMail(
            this.characterId,
            labels,
            lastMailId,
        );
    }

    public async send(
        subject: string,
        body: string,
        recipients: Array<{
            recipientId: number;
            recipientType:
                | "alliance"
                | "character"
                | "corporation"
                | "mailing_list";
        }>,
        approvedCost?: number,
    ) {
        return this.api.postCharactersCharacterIdMail(this.characterId, {
            subject,
            body,
            recipients,
            approvedCost,
        });
    }

    public async subscriptions() {
        return this.api.getCharactersCharacterIdMailLists(this.characterId);
    }

    public message(messageId: number) {
        return new MailMessage(this.api, this.characterId, messageId);
    }
}
