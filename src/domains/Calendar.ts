import { GeneratedApi } from "../api/GeneratedApi";

/**
 * Represents a single calendar event scoped to a specific character,
 * providing access to event details, attendance, and response management.
 */
export class CalendarEvent {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
        readonly eventId: number,
    ) {}

    /**
     * Retrieves the full details of this calendar event.
     *
     * @returns A promise resolving to the event's details, including its title,
     * date, duration, importance, and description.
     */
    public async fetch() {
        return this.api.getCharactersCharacterIdCalendarEventId(
            this.characterId,
            this.eventId,
        );
    }

    /**
     * Submits the character's response to this calendar event.
     *
     * @param response - The character's attendance response.
     * @returns A promise that resolves when the response has been successfully submitted.
     */
    public async respond(response: "accepted" | "declined" | "tentative") {
        return this.api.putCharactersCharacterIdCalendarEventId(
            this.characterId,
            this.eventId,
            {
                response,
            },
        );
    }

    /**
     * Retrieves the list of characters who have been invited to this event
     * along with their individual responses.
     *
     * @returns A promise resolving to an array of attendee objects, each containing
     * a character ID and their response status.
     */
    public async attendees() {
        return this.api.getCharactersCharacterIdCalendarEventIdAttendees(
            this.characterId,
            this.eventId,
        );
    }
}

/**
 * Provides access to calendar-related ESI endpoints scoped to a specific character,
 * including event listing and individual event management.
 */
export class Calendar {
    constructor(
        readonly api: GeneratedApi,
        readonly characterId: number,
    ) {}

    /**
     * Retrieves a list of the character's upcoming calendar events.
     *
     * @param fromEvent - An optional event ID to use as the starting point for
     * pagination. When provided, only events after this ID are returned.
     * @returns A promise resolving to an array of calendar event summaries.
     */
    public async list(fromEvent?: number) {
        return this.api.getCharactersCharacterIdCalendar(
            this.characterId,
            fromEvent,
        );
    }

    /**
     * Returns a {@link CalendarEvent} instance scoped to the specified event,
     * enabling access to its details, attendees, and response management.
     *
     * @param eventId - The unique identifier of the calendar event.
     * @returns A {@link CalendarEvent} instance scoped to the given event ID.
     */
    public event(eventId: number) {
        return new CalendarEvent(this.api, this.characterId, eventId);
    }
}
