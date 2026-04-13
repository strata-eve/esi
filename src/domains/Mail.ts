import { GeneratedApi } from "../api/GeneratedApi";

/** A valid label color value supported by the EVE Online mail system. */
export type MailLabelColor =
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

/** Represents a single recipient of an EVE Online mail message. */
export interface MailRecipient {
    /** The unique EVE Online ID of the recipient entity. */
    recipientId: number;
    /** The type of entity this recipient represents. */
    recipientType: "alliance" | "character" | "corporation" | "mailing_list";
}

export class MailMessage {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
        readonly id: number,
    ) {}

    /**
     * Retrieves the full contents of this mail message.
     *
     * @returns A promise resolving to the message.
     */
    public async fetch() {
        return this.api.getCharactersCharacterIdMailMailId(
            this.characterId,
            this.id,
        );
    }

    /**
     * Updates the metadata of this mail message.
     *
     * @param labels - An array of label IDs to assign to the message.
     * @param read - Whether to mark the message as read.
     * @returns A promise that resolves when the message has been successfully updated.
     */
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

    /**
     * Permanently deletes this mail message from the character's inbox.
     *
     * @returns A promise that resolves when the message has been successfully deleted.
     */
    public async delete() {
        return this.api.deleteCharactersCharacterIdMailMailId(
            this.characterId,
            this.id,
        );
    }
}

/**
 * Provides access to mail label operations scoped to a specific character,
 * including listing, creating, and deleting labels.
 */
export class MailLabels {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    /**
     * Retrieves all mail labels and their unread counts for this character.
     *
     * @returns A promise resolving to an object containing the total unread
     * message count and an array of label records.
     */
    public async list() {
        return this.api.getCharactersCharacterIdMailLabels(this.characterId);
    }

    /**
     * Creates a new mail label for this character.
     *
     * @param name - The display name for the new label.
     * @param color - The color to assign to the label.
     * @returns A promise resolving to the newly created label's ID.
     */
    public async create(name: string, color: MailLabelColor) {
        return this.api.postCharactersCharacterIdMailLabels(this.characterId, {
            name,
            color,
        });
    }

    /**
     * Permanently deletes a mail label from this character.
     *
     * @param labelId - The unique identifier of the label to delete.
     * @returns A promise that resolves when the label has been successfully deleted.
     */
    public async delete(labelId: number) {
        return this.api.deleteCharactersCharacterIdMailLabelsLabelId(
            this.characterId,
            labelId,
        );
    }
}

/**
 * Provides access to mail-related operations scoped to a specific character.
 */
export class Mail {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    /**
     * Retrieves a list of mail headers for this character's inbox.
     *
     * @param labels - An optional array of label IDs to filter messages by.
     * @param lastMailId - An optional mail ID used for pagination. When provided,
     * only messages with an ID lower than this value are returned.
     * @returns A promise resolving to an array of mail header records.
     */
    public async list(labels?: number[], lastMailId?: number) {
        return this.api.getCharactersCharacterIdMail(
            this.characterId,
            labels,
            lastMailId,
        );
    }

    /**
     * Sends a new mail message from this character.
     *
     * @param subject - The subject line of the message.
     * @param body - The body text of the message.
     * @param recipients - An array of recipients, each identified by their ID and entity type.
     * @param approvedCost - The maximum ISK cost the character approves for sending
     * to a mailing list with a subscription fee. Defaults to `0` if omitted.
     * @returns A promise resolving to the newly created message's ID.
     */
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

    /**
     * Retrieves all mailing list subscriptions for this character.
     *
     * @returns A promise resolving to an array of mailing list records.
     */
    public async subscriptions() {
        return this.api.getCharactersCharacterIdMailLists(this.characterId);
    }

    /**
     * Returns a {@link MailMessage} instance scoped to the specified message,
     * enabling access to its contents and management operations.
     *
     * @param messageId - The unique identifier of the mail message.
     * @returns A {@link MailMessage} instance scoped to the given message ID.
     */
    public message(messageId: number) {
        return new MailMessage(this.api, this.characterId, messageId);
    }

    /**
     * Provides access to mail label operations for this character.
     *
     * @returns A {@link MailLabels} instance scoped to this character.
     */
    public get labels() {
        return new MailLabels(this.api, this.characterId);
    }
}
