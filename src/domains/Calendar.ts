import { GeneratedApi } from "../api/GeneratedApi";

export class Calendar {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public async fetch(fromEvent?: number) {
        return this.api.getCharactersCharacterIdCalendar(
            this.characterId,
            fromEvent,
        );
    }

    public async get(eventId: number) {
        return this.api.getCharactersCharacterIdCalendarEventId(
            this.characterId,
            eventId,
        );
    }

    public async respond(
        eventId: number,
        response: "accepted" | "declined" | "tentative",
    ) {
        return this.api.putCharactersCharacterIdCalendarEventId(
            this.characterId,
            eventId,
            {
                response,
            },
        );
    }

    public async attendees(eventId: number) {
        return this.api.getCharactersCharacterIdCalendarEventIdAttendees(
            this.characterId,
            eventId,
        );
    }
}
