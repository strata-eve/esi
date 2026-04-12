import { GeneratedApi } from "../api/GeneratedApi";

export class Mail {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public async fetch(labels?: number[], lastMailId?: number) {
        return this.api.getCharactersCharacterIdMail(
            this.characterId,
            labels,
            lastMailId,
        );
    }

    public async send(body: {
        approvedCost?: number;
        body: string;
        recipients: Array<{
            recipientId: number;
            recipientType:
                | "alliance"
                | "character"
                | "corporation"
                | "mailing_list";
        }>;
        subject: string;
    }) {
        return this.api.postCharactersCharacterIdMail(this.characterId, body);
    }

    public async labels() {
        return this.api.getCharactersCharacterIdMailLabels(this.characterId);
    }

    public async createLabel(body: {
        color?:
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
            | "#ffffff";
        name: string;
    }) {
        return this.api.postCharactersCharacterIdMailLabels(
            this.characterId,
            body,
        );
    }

    public async deleteLabel(labelId: number) {
        return this.api.deleteCharactersCharacterIdMailLabelsLabelId(
            this.characterId,
            labelId,
        );
    }

    public async subscriptions() {
        return this.api.getCharactersCharacterIdMailLists(this.characterId);
    }

    public async delete(mailId: number) {
        return this.api.deleteCharactersCharacterIdMailMailId(
            this.characterId,
            mailId,
        );
    }

    public async get(mailId: number) {
        return this.api.getCharactersCharacterIdMailMailId(
            this.characterId,
            mailId,
        );
    }

    public async update(
        mailId: number,
        body: {
            labels?: number[];
            read?: boolean;
        },
    ) {
        this.api.putCharactersCharacterIdMailMailId(
            this.characterId,
            mailId,
            body,
        );
    }
}
