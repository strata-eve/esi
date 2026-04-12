import { GeneratedApi } from "../api/GeneratedApi";

export class CalendarEvent {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
        readonly eventId: number,
    ) {}

    public async fetch() {
        return this.api.getCharactersCharacterIdCalendarEventId(
            this.characterId,
            this.eventId,
        );
    }

    public async respond(response: "accepted" | "declined" | "tentative") {
        return this.api.putCharactersCharacterIdCalendarEventId(
            this.characterId,
            this.eventId,
            {
                response,
            },
        );
    }

    public async attendees() {
        return this.api.getCharactersCharacterIdCalendarEventIdAttendees(
            this.characterId,
            this.eventId,
        );
    }
}

export class Calendar {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    public async list(fromEvent?: number) {
        return this.api.getCharactersCharacterIdCalendar(
            this.characterId,
            fromEvent,
        );
    }

    public event(eventId: number) {
        return new CalendarEvent(this.api, this.characterId, eventId);
    }
}
