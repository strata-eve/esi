// AUTO-GENERATED CODE - DO NOT MODIFY BY HAND
// Generated from Eve Online ESI OpenAPI spec

import { EsiRequester } from "../client/EsiRequester";

export type AccessListID = number;

export interface AllianceDetail {
    /**
     * Alliance's creator corporation ID
     */
    creatorCorporationId: CorporationID;
    /**
     * Alliance's creator ID
     */
    creatorId: CharacterID;
    /**
     * Alliance's founding date
     */
    dateFounded: string;
    /**
     * Alliance's executor corporation ID
     */
    executorCorporationId?: CorporationID;
    /**
     * Alliance's faction ID
     */
    factionId?: FactionID;
    /**
     * Alliance's name
     */
    name: string;
    /**
     * Alliance's ticker
     */
    ticker: string;
}

export type AllianceID = number;

export type AlliancesAllianceIdContactsGet = Array<{
    contactId: number;
    contactType: "character" | "corporation" | "alliance" | "faction";
    labelIds?: number[];
    /**
     * Standing of the contact
     */
    standing: number;
}>;

export type AlliancesAllianceIdContactsLabelsGet = Array<{
    labelId: number;
    labelName: string;
}>;

export type AlliancesAllianceIdCorporationsGet = number[];

export interface AlliancesAllianceIdIconsGet {
    px128x128?: string;
    px64x64?: string;
}

export type AlliancesGet = number[];

export type ArchetypeID = number;

export type AttributeID = number;

export type BloodlineID = number;

export type CharacterID = number;

export type CharactersAffiliationPost = Array<{
    /**
     * The character's alliance ID, if their corporation is in an alliance
     */
    allianceId?: number;
    /**
     * The character's ID
     */
    characterId: number;
    /**
     * The character's corporation ID
     */
    corporationId: number;
    /**
     * The character's faction ID, if their corporation is in a faction
     */
    factionId?: number;
}>;

export type CharactersCharacterIdAgentsResearchGet = Array<{
    agentId: number;
    pointsPerDay: number;
    remainderPoints: number;
    skillTypeId: number;
    startedAt: string;
}>;

export type CharactersCharacterIdAssetsGet = Array<{
    isBlueprintCopy?: boolean;
    isSingleton: boolean;
    itemId: number;
    locationFlag:
        | "AssetSafety"
        | "AutoFit"
        | "BoosterBay"
        | "CapsuleerDeliveries"
        | "Cargo"
        | "CorporationGoalDeliveries"
        | "CorpseBay"
        | "Deliveries"
        | "DroneBay"
        | "ExpeditionHold"
        | "FighterBay"
        | "FighterTube0"
        | "FighterTube1"
        | "FighterTube2"
        | "FighterTube3"
        | "FighterTube4"
        | "FleetHangar"
        | "FrigateEscapeBay"
        | "Hangar"
        | "HangarAll"
        | "HiSlot0"
        | "HiSlot1"
        | "HiSlot2"
        | "HiSlot3"
        | "HiSlot4"
        | "HiSlot5"
        | "HiSlot6"
        | "HiSlot7"
        | "HiddenModifiers"
        | "Implant"
        | "InfrastructureHangar"
        | "LoSlot0"
        | "LoSlot1"
        | "LoSlot2"
        | "LoSlot3"
        | "LoSlot4"
        | "LoSlot5"
        | "LoSlot6"
        | "LoSlot7"
        | "Locked"
        | "MedSlot0"
        | "MedSlot1"
        | "MedSlot2"
        | "MedSlot3"
        | "MedSlot4"
        | "MedSlot5"
        | "MedSlot6"
        | "MedSlot7"
        | "MobileDepotHold"
        | "MoonMaterialBay"
        | "QuafeBay"
        | "RigSlot0"
        | "RigSlot1"
        | "RigSlot2"
        | "RigSlot3"
        | "RigSlot4"
        | "RigSlot5"
        | "RigSlot6"
        | "RigSlot7"
        | "ShipHangar"
        | "Skill"
        | "SpecializedAmmoHold"
        | "SpecializedAsteroidHold"
        | "SpecializedCommandCenterHold"
        | "SpecializedFuelBay"
        | "SpecializedGasHold"
        | "SpecializedIceHold"
        | "SpecializedIndustrialShipHold"
        | "SpecializedLargeShipHold"
        | "SpecializedMaterialBay"
        | "SpecializedMediumShipHold"
        | "SpecializedMineralHold"
        | "SpecializedOreHold"
        | "SpecializedPlanetaryCommoditiesHold"
        | "SpecializedSalvageHold"
        | "SpecializedShipHold"
        | "SpecializedSmallShipHold"
        | "StructureDeedBay"
        | "SubSystemBay"
        | "SubSystemSlot0"
        | "SubSystemSlot1"
        | "SubSystemSlot2"
        | "SubSystemSlot3"
        | "SubSystemSlot4"
        | "SubSystemSlot5"
        | "SubSystemSlot6"
        | "SubSystemSlot7"
        | "Unlocked"
        | "Wardrobe";
    locationId: number;
    locationType: "station" | "solar_system" | "item" | "other";
    quantity: number;
    typeId: number;
}>;

export type CharactersCharacterIdAssetsLocationsPost = Array<{
    itemId: number;
    position: {
        x: number;
        y: number;
        z: number;
    };
}>;

export type CharactersCharacterIdAssetsNamesPost = Array<{
    itemId: number;
    name: string;
}>;

export interface CharactersCharacterIdAttributesGet {
    /**
     * Neural remapping cooldown after a character uses remap accrued over time
     */
    accruedRemapCooldownDate?: string;
    /**
     * Number of available bonus character neural remaps
     */
    bonusRemaps?: number;
    charisma: number;
    intelligence: number;
    /**
     * Datetime of last neural remap, including usage of bonus remaps
     */
    lastRemapDate?: string;
    memory: number;
    perception: number;
    willpower: number;
}

export type CharactersCharacterIdBlueprintsGet = Array<{
    /**
     * Unique ID for this item.
     */
    itemId: number;
    /**
     * Type of the location_id
     */
    locationFlag:
        | "AutoFit"
        | "Cargo"
        | "CorpseBay"
        | "DroneBay"
        | "FleetHangar"
        | "Deliveries"
        | "HiddenModifiers"
        | "Hangar"
        | "HangarAll"
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
        | "HiSlot0"
        | "HiSlot1"
        | "HiSlot2"
        | "HiSlot3"
        | "HiSlot4"
        | "HiSlot5"
        | "HiSlot6"
        | "HiSlot7"
        | "AssetSafety"
        | "Locked"
        | "Unlocked"
        | "Implant"
        | "QuafeBay"
        | "RigSlot0"
        | "RigSlot1"
        | "RigSlot2"
        | "RigSlot3"
        | "RigSlot4"
        | "RigSlot5"
        | "RigSlot6"
        | "RigSlot7"
        | "ShipHangar"
        | "SpecializedFuelBay"
        | "SpecializedOreHold"
        | "SpecializedGasHold"
        | "SpecializedMineralHold"
        | "SpecializedSalvageHold"
        | "SpecializedShipHold"
        | "SpecializedSmallShipHold"
        | "SpecializedMediumShipHold"
        | "SpecializedLargeShipHold"
        | "SpecializedIndustrialShipHold"
        | "SpecializedAmmoHold"
        | "SpecializedCommandCenterHold"
        | "SpecializedPlanetaryCommoditiesHold"
        | "SpecializedMaterialBay"
        | "SubSystemSlot0"
        | "SubSystemSlot1"
        | "SubSystemSlot2"
        | "SubSystemSlot3"
        | "SubSystemSlot4"
        | "SubSystemSlot5"
        | "SubSystemSlot6"
        | "SubSystemSlot7"
        | "FighterBay"
        | "FighterTube0"
        | "FighterTube1"
        | "FighterTube2"
        | "FighterTube3"
        | "FighterTube4"
        | "Module";
    /**
     * References a station, a ship or an item_id if this blueprint is located within a container. If the return value is an item_id, then the Character AssetList API must be queried to find the container using the given item_id to determine the correct location of the Blueprint.
     */
    locationId: number;
    /**
     * Material Efficiency Level of the blueprint.
     */
    materialEfficiency: number;
    /**
     * A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
     */
    quantity: number;
    /**
     * Number of runs remaining if the blueprint is a copy, -1 if it is an original.
     */
    runs: number;
    /**
     * Time Efficiency Level of the blueprint.
     */
    timeEfficiency: number;
    typeId: number;
}>;

/**
 * List of attendees for a given event
 */
export type CharactersCharacterIdCalendarEventIdAttendeesGet = Array<{
    characterId?: number;
    eventResponse?: "declined" | "not_responded" | "accepted" | "tentative";
}>;

/**
 * Full details of a specific event
 */
export interface CharactersCharacterIdCalendarEventIdGet {
    date: string;
    /**
     * Length in minutes
     */
    duration: number;
    eventId: number;
    importance: number;
    ownerId: number;
    ownerName: string;
    ownerType:
        | "eve_server"
        | "corporation"
        | "faction"
        | "character"
        | "alliance";
    response: string;
    text: string;
    title: string;
}

/**
 * Up to 50 events from now or the event you requested
 */
export type CharactersCharacterIdCalendarGet = Array<{
    eventDate?: string;
    eventId?: number;
    eventResponse?: "declined" | "not_responded" | "accepted" | "tentative";
    importance?: number;
    title?: string;
}>;

export interface CharactersCharacterIdClonesGet {
    homeLocation?: {
        locationId?: number;
        locationType?: "station" | "structure";
    };
    jumpClones: Array<{
        implants: number[];
        jumpCloneId: number;
        locationId: number;
        locationType: "station" | "structure";
        name?: string;
    }>;
    lastCloneJumpDate?: string;
    lastStationChangeDate?: string;
}

export type CharactersCharacterIdContactsGet = Array<{
    contactId: number;
    contactType: "character" | "corporation" | "alliance" | "faction";
    /**
     * Whether this contact is in the blocked list. Note a missing value denotes unknown, not true or false
     */
    isBlocked?: boolean;
    /**
     * Whether this contact is being watched
     */
    isWatched?: boolean;
    labelIds?: number[];
    /**
     * Standing of the contact
     */
    standing: number;
}>;

export type CharactersCharacterIdContactsLabelsGet = Array<{
    labelId: number;
    labelName: string;
}>;

/**
 * 201 created array
 */
export type CharactersCharacterIdContactsPost = number[];

export type CharactersCharacterIdContractsContractIdBidsGet = Array<{
    /**
     * The amount bid, in ISK
     */
    amount: number;
    /**
     * Unique ID for the bid
     */
    bidId: number;
    /**
     * Character ID of the bidder
     */
    bidderId: number;
    /**
     * Datetime when the bid was placed
     */
    dateBid: string;
}>;

export type CharactersCharacterIdContractsContractIdItemsGet = Array<{
    /**
     * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
     */
    isIncluded: boolean;
    isSingleton: boolean;
    /**
     * Number of items in the stack
     */
    quantity: number;
    /**
     * -1 indicates that the item is a singleton (non-stackable). If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy
     */
    rawQuantity?: number;
    /**
     * Unique ID for the item
     */
    recordId: number;
    /**
     * Type ID for item
     */
    typeId: number;
}>;

export type CharactersCharacterIdContractsGet = Array<{
    /**
     * Who will accept the contract
     */
    acceptorId: number;
    /**
     * ID to whom the contract is assigned, can be alliance, corporation or character ID
     */
    assigneeId: number;
    /**
     * To whom the contract is available
     */
    availability: "public" | "personal" | "corporation" | "alliance";
    /**
     * Buyout price (for Auctions only)
     */
    buyout?: number;
    /**
     * Collateral price (for Couriers only)
     */
    collateral?: number;
    contractId: number;
    /**
     * Date of confirmation of contract
     */
    dateAccepted?: string;
    /**
     * Date of completed of contract
     */
    dateCompleted?: string;
    /**
     * Expiration date of the contract
     */
    dateExpired: string;
    /**
     * Сreation date of the contract
     */
    dateIssued: string;
    /**
     * Number of days to perform the contract
     */
    daysToComplete?: number;
    /**
     * End location ID (for Couriers contract)
     */
    endLocationId?: number;
    /**
     * true if the contract was issued on behalf of the issuer's corporation
     */
    forCorporation: boolean;
    /**
     * Character's corporation ID for the issuer
     */
    issuerCorporationId: number;
    /**
     * Character ID for the issuer
     */
    issuerId: number;
    /**
     * Price of contract (for ItemsExchange and Auctions)
     */
    price?: number;
    /**
     * Remuneration for contract (for Couriers only)
     */
    reward?: number;
    /**
     * Start location ID (for Couriers contract)
     */
    startLocationId?: number;
    /**
     * Status of the the contract
     */
    status:
        | "outstanding"
        | "in_progress"
        | "finished_issuer"
        | "finished_contractor"
        | "finished"
        | "cancelled"
        | "rejected"
        | "failed"
        | "deleted"
        | "reversed";
    /**
     * Title of the contract
     */
    title?: string;
    /**
     * Type of the contract
     */
    type: "unknown" | "item_exchange" | "auction" | "courier" | "loan";
    /**
     * Volume of items in the contract
     */
    volume?: number;
}>;

export type CharactersCharacterIdCorporationhistoryGet = Array<{
    corporationId: number;
    /**
     * True if the corporation has been deleted
     */
    isDeleted?: boolean;
    /**
     * An incrementing ID that can be used to canonically establish order of records in cases where dates may be ambiguous
     */
    recordId: number;
    startDate: string;
}>;

/**
 * 201 created number
 */
export type CharactersCharacterIdCspaPost = number;

export interface CharactersCharacterIdFatigueGet {
    /**
     * Character's jump fatigue expiry
     */
    jumpFatigueExpireDate?: string;
    /**
     * Character's last jump activation
     */
    lastJumpDate?: string;
    /**
     * Character's last jump update
     */
    lastUpdateDate?: string;
}

export type CharactersCharacterIdFittingsGet = Array<{
    description: string;
    fittingId: number;
    items: Array<{
        flag:
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
        quantity: number;
        typeId: number;
    }>;
    name: string;
    shipTypeId: number;
}>;

/**
 * 201 created object
 */
export interface CharactersCharacterIdFittingsPost {
    fittingId: number;
}

export interface CharactersCharacterIdFleetGet {
    /**
     * Character ID of the current fleet boss
     */
    fleetBossId: number;
    /**
     * The character's current fleet ID
     */
    fleetId: number;
    /**
     * Member’s role in fleet
     */
    role:
        | "fleet_commander"
        | "squad_commander"
        | "squad_member"
        | "wing_commander";
    /**
     * ID of the squad the member is in. If not applicable, will be set to -1
     */
    squadId: number;
    /**
     * ID of the wing the member is in. If not applicable, will be set to -1
     */
    wingId: number;
}

export interface CharactersCharacterIdFwStatsGet {
    /**
     * The given character's current faction rank
     */
    currentRank?: number;
    /**
     * The enlistment date of the given character into faction warfare. Will not be included if character is not enlisted in faction warfare
     */
    enlistedOn?: string;
    /**
     * The faction the given character is enlisted to fight for. Will not be included if character is not enlisted in faction warfare
     */
    factionId?: number;
    /**
     * The given character's highest faction rank achieved
     */
    highestRank?: number;
    /**
     * Summary of kills done by the given character against enemy factions
     */
    kills: {
        /**
         * Last week's total number of kills by a given character against enemy factions
         */
        lastWeek: number;
        /**
         * Total number of kills by a given character against enemy factions since the character enlisted
         */
        total: number;
        /**
         * Yesterday's total number of kills by a given character against enemy factions
         */
        yesterday: number;
    };
    /**
     * Summary of victory points gained by the given character for the enlisted faction
     */
    victoryPoints: {
        /**
         * Last week's victory points gained by the given character
         */
        lastWeek: number;
        /**
         * Total victory points gained since the given character enlisted
         */
        total: number;
        /**
         * Yesterday's victory points gained by the given character
         */
        yesterday: number;
    };
}

export type CharactersCharacterIdImplantsGet = number[];

export type CharactersCharacterIdIndustryJobsGet = Array<{
    /**
     * Job activity ID
     */
    activityId: number;
    blueprintId: number;
    /**
     * Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
     */
    blueprintLocationId: number;
    blueprintTypeId: number;
    /**
     * ID of the character which completed this job
     */
    completedCharacterId?: number;
    /**
     * Date and time when this job was completed
     */
    completedDate?: string;
    /**
     * The sume of job installation fee and industry facility tax
     */
    cost?: number;
    /**
     * Job duration in seconds
     */
    duration: number;
    /**
     * Date and time when this job finished
     */
    endDate: string;
    /**
     * ID of the facility where this job is running
     */
    facilityId: number;
    /**
     * ID of the character which installed this job
     */
    installerId: number;
    /**
     * Unique job ID
     */
    jobId: number;
    /**
     * Number of runs blueprint is licensed for
     */
    licensedRuns?: number;
    /**
     * Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
     */
    outputLocationId: number;
    /**
     * Date and time when this job was paused (i.e. time when the facility where this job was installed went offline)
     */
    pauseDate?: string;
    /**
     * Chance of success for invention
     */
    probability?: number;
    /**
     * Type ID of product (manufactured, copied or invented)
     */
    productTypeId?: number;
    /**
     * Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
     */
    runs: number;
    /**
     * Date and time when this job started
     */
    startDate: string;
    /**
     * ID of the station where industry facility is located
     */
    stationId: number;
    status:
        | "active"
        | "cancelled"
        | "delivered"
        | "paused"
        | "ready"
        | "reverted";
    /**
     * Number of successful runs for this job. Equal to runs unless this is an invention job
     */
    successfulRuns?: number;
}>;

export type CharactersCharacterIdKillmailsRecentGet = Array<{
    /**
     * A hash of this killmail
     */
    killmailHash: string;
    /**
     * ID of this killmail
     */
    killmailId: number;
}>;

export interface CharactersCharacterIdLocationGet {
    solarSystemId: number;
    stationId?: number;
    structureId?: number;
}

export type CharactersCharacterIdLoyaltyPointsGet = Array<{
    corporationId: number;
    loyaltyPoints: number;
}>;

export type CharactersCharacterIdMailGet = Array<{
    /**
     * From whom the mail was sent
     */
    from?: number;
    isRead?: boolean;
    labels?: number[];
    mailId?: number;
    /**
     * Recipients of the mail
     */
    recipients?: Array<{
        recipientId: number;
        recipientType:
            | "alliance"
            | "character"
            | "corporation"
            | "mailing_list";
    }>;
    /**
     * Mail subject
     */
    subject?: string;
    /**
     * When the mail was sent
     */
    timestamp?: string;
}>;

export interface CharactersCharacterIdMailLabelsGet {
    labels?: Array<{
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
        labelId?: number;
        name?: string;
        unreadCount?: number;
    }>;
    totalUnreadCount?: number;
}

/**
 * Label ID
 */
export type CharactersCharacterIdMailLabelsPost = number;

export type CharactersCharacterIdMailListsGet = Array<{
    /**
     * Mailing list ID
     */
    mailingListId: number;
    name: string;
}>;

export interface CharactersCharacterIdMailMailIdGet {
    /**
     * Mail's body
     */
    body?: string;
    /**
     * From whom the mail was sent
     */
    from?: number;
    /**
     * Labels attached to the mail
     */
    labels?: number[];
    /**
     * Whether the mail is flagged as read
     */
    read?: boolean;
    /**
     * Recipients of the mail
     */
    recipients?: Array<{
        recipientId: number;
        recipientType:
            | "alliance"
            | "character"
            | "corporation"
            | "mailing_list";
    }>;
    /**
     * Mail subject
     */
    subject?: string;
    /**
     * When the mail was sent
     */
    timestamp?: string;
}

/**
 * Mail ID
 */
export type CharactersCharacterIdMailPost = number;

export type CharactersCharacterIdMedalsGet = Array<{
    corporationId: number;
    date: string;
    description: string;
    graphics: Array<{
        color?: number;
        graphic: string;
        layer: number;
        part: number;
    }>;
    issuerId: number;
    medalId: number;
    reason: string;
    status: "public" | "private";
    title: string;
}>;

export type CharactersCharacterIdMiningGet = Array<{
    date: string;
    quantity: number;
    solarSystemId: number;
    typeId: number;
}>;

export type CharactersCharacterIdNotificationsContactsGet = Array<{
    message: string;
    notificationId: number;
    sendDate: string;
    senderCharacterId: number;
    /**
     * A number representing the standing level the receiver has been added at by the sender. The standing levels are as follows: -10 -> Terrible | -5 -> Bad |  0 -> Neutral |  5 -> Good |  10 -> Excellent
     */
    standingLevel: number;
}>;

export type CharactersCharacterIdNotificationsGet = Array<{
    isRead?: boolean;
    notificationId: number;
    senderId: number;
    senderType: "character" | "corporation" | "alliance" | "faction" | "other";
    text?: string;
    timestamp: string;
    type:
        | "AcceptedAlly"
        | "AcceptedSurrender"
        | "AgentRetiredTrigravian"
        | "AllAnchoringMsg"
        | "AllMaintenanceBillMsg"
        | "AllStrucInvulnerableMsg"
        | "AllStructVulnerableMsg"
        | "AllWarCorpJoinedAllianceMsg"
        | "AllWarDeclaredMsg"
        | "AllWarInvalidatedMsg"
        | "AllWarRetractedMsg"
        | "AllWarSurrenderMsg"
        | "AllianceCapitalChanged"
        | "AllianceWarDeclaredV2"
        | "AllyContractCancelled"
        | "AllyJoinedWarAggressorMsg"
        | "AllyJoinedWarAllyMsg"
        | "AllyJoinedWarDefenderMsg"
        | "BattlePunishFriendlyFire"
        | "BillOutOfMoneyMsg"
        | "BillPaidCorpAllMsg"
        | "BountyClaimMsg"
        | "BountyESSShared"
        | "BountyESSTaken"
        | "BountyPlacedAlliance"
        | "BountyPlacedChar"
        | "BountyPlacedCorp"
        | "BountyYourBountyClaimed"
        | "BuddyConnectContactAdd"
        | "CharAppAcceptMsg"
        | "CharAppRejectMsg"
        | "CharAppWithdrawMsg"
        | "CharLeftCorpMsg"
        | "CharMedalMsg"
        | "CharTerminationMsg"
        | "CloneActivationMsg"
        | "CloneActivationMsg2"
        | "CloneMovedMsg"
        | "CloneRevokedMsg1"
        | "CloneRevokedMsg2"
        | "CombatOperationFinished"
        | "ContactAdd"
        | "ContactEdit"
        | "ContainerPasswordMsg"
        | "ContractRegionChangedToPochven"
        | "CorpAllBillMsg"
        | "CorpAppAcceptMsg"
        | "CorpAppInvitedMsg"
        | "CorpAppNewMsg"
        | "CorpAppRejectCustomMsg"
        | "CorpAppRejectMsg"
        | "CorpBecameWarEligible"
        | "CorpDividendMsg"
        | "CorpFriendlyFireDisableTimerCompleted"
        | "CorpFriendlyFireDisableTimerStarted"
        | "CorpFriendlyFireEnableTimerCompleted"
        | "CorpFriendlyFireEnableTimerStarted"
        | "CorpKicked"
        | "CorpLiquidationMsg"
        | "CorpNewCEOMsg"
        | "CorpNewsMsg"
        | "CorpNoLongerWarEligible"
        | "CorpOfficeExpirationMsg"
        | "CorpStructLostMsg"
        | "CorpTaxChangeMsg"
        | "CorpVoteCEORevokedMsg"
        | "CorpVoteMsg"
        | "CorpWarDeclaredMsg"
        | "CorpWarDeclaredV2"
        | "CorpWarFightingLegalMsg"
        | "CorpWarInvalidatedMsg"
        | "CorpWarRetractedMsg"
        | "CorpWarSurrenderMsg"
        | "CorporationGoalClosed"
        | "CorporationGoalCompleted"
        | "CorporationGoalCreated"
        | "CorporationGoalExpired"
        | "CorporationGoalLimitReached"
        | "CorporationGoalNameChange"
        | "CorporationLeft"
        | "CustomsMsg"
        | "DailyItemRewardAutoClaimed"
        | "DeclareWar"
        | "DistrictAttacked"
        | "DustAppAcceptedMsg"
        | "ESSMainBankLink"
        | "EntosisCaptureStarted"
        | "ExpertSystemExpired"
        | "ExpertSystemExpiryImminent"
        | "FWAllianceKickMsg"
        | "FWAllianceWarningMsg"
        | "FWCharKickMsg"
        | "FWCharRankGainMsg"
        | "FWCharRankLossMsg"
        | "FWCharWarningMsg"
        | "FWCorpJoinMsg"
        | "FWCorpKickMsg"
        | "FWCorpLeaveMsg"
        | "FWCorpWarningMsg"
        | "FacWarCorpJoinRequestMsg"
        | "FacWarCorpJoinWithdrawMsg"
        | "FacWarCorpLeaveRequestMsg"
        | "FacWarCorpLeaveWithdrawMsg"
        | "FacWarDirectEnlistmentRevoked"
        | "FacWarLPDisqualifiedEvent"
        | "FacWarLPDisqualifiedKill"
        | "FacWarLPPayoutEvent"
        | "FacWarLPPayoutKill"
        | "FreelanceProjectClosed"
        | "FreelanceProjectCompleted"
        | "FreelanceProjectCreated"
        | "FreelanceProjectExpired"
        | "FreelanceProjectLimitReached"
        | "FreelanceProjectParticipantKicked"
        | "GameTimeAdded"
        | "GameTimeReceived"
        | "GameTimeSent"
        | "GiftReceived"
        | "IHubDestroyedByBillFailure"
        | "IncursionCompletedMsg"
        | "IndustryOperationFinished"
        | "IndustryTeamAuctionLost"
        | "IndustryTeamAuctionWon"
        | "InfrastructureHubBillAboutToExpire"
        | "InsuranceExpirationMsg"
        | "InsuranceFirstShipMsg"
        | "InsuranceInvalidatedMsg"
        | "InsuranceIssuedMsg"
        | "InsurancePayoutMsg"
        | "InvasionCompletedMsg"
        | "InvasionSystemLogin"
        | "InvasionSystemStart"
        | "JumpCloneDeletedMsg1"
        | "JumpCloneDeletedMsg2"
        | "KillReportFinalBlow"
        | "KillReportVictim"
        | "KillRightAvailable"
        | "KillRightAvailableOpen"
        | "KillRightEarned"
        | "KillRightUnavailable"
        | "KillRightUnavailableOpen"
        | "KillRightUsed"
        | "LPAutoRedeemed"
        | "LocateCharMsg"
        | "MadeWarMutual"
        | "MercOfferRetractedMsg"
        | "MercOfferedNegotiationMsg"
        | "MercenaryDenAttacked"
        | "MercenaryDenNewMTO"
        | "MercenaryDenReinforced"
        | "MissionCanceledTriglavian"
        | "MissionOfferExpirationMsg"
        | "MissionTimeoutMsg"
        | "MoonminingAutomaticFracture"
        | "MoonminingExtractionCancelled"
        | "MoonminingExtractionFinished"
        | "MoonminingExtractionStarted"
        | "MoonminingLaserFired"
        | "MutualWarExpired"
        | "MutualWarInviteAccepted"
        | "MutualWarInviteRejected"
        | "MutualWarInviteSent"
        | "NPCStandingsGained"
        | "NPCStandingsLost"
        | "OfferToAllyRetracted"
        | "OfferedSurrender"
        | "OfferedToAlly"
        | "OfficeLeaseCanceledInsufficientStandings"
        | "OldLscMessages"
        | "OperationFinished"
        | "OrbitalAttacked"
        | "OrbitalReinforced"
        | "OwnershipTransferred"
        | "RaffleCreated"
        | "RaffleExpired"
        | "RaffleFinished"
        | "ReimbursementMsg"
        | "ResearchMissionAvailableMsg"
        | "RetractsWar"
        | "SPAutoRedeemed"
        | "SeasonalChallengeCompleted"
        | "SkinSequencingCompleted"
        | "SkyhookDeployed"
        | "SkyhookDestroyed"
        | "SkyhookLostShields"
        | "SkyhookOnline"
        | "SkyhookUnderAttack"
        | "SovAllClaimAquiredMsg"
        | "SovAllClaimLostMsg"
        | "SovCommandNodeEventStarted"
        | "SovCorpBillLateMsg"
        | "SovCorpClaimFailMsg"
        | "SovDisruptorMsg"
        | "SovStationEnteredFreeport"
        | "SovStructureDestroyed"
        | "SovStructureReinforced"
        | "SovStructureSelfDestructCancel"
        | "SovStructureSelfDestructFinished"
        | "SovStructureSelfDestructRequested"
        | "SovereigntyIHDamageMsg"
        | "SovereigntySBUDamageMsg"
        | "SovereigntyTCUDamageMsg"
        | "StationAggressionMsg1"
        | "StationAggressionMsg2"
        | "StationConquerMsg"
        | "StationServiceDisabled"
        | "StationServiceEnabled"
        | "StationStateChangeMsg"
        | "StoryLineMissionAvailableMsg"
        | "StructureAnchoring"
        | "StructureCourierContractChanged"
        | "StructureDestroyed"
        | "StructureFuelAlert"
        | "StructureImpendingAbandonmentAssetsAtRisk"
        | "StructureItemsDelivered"
        | "StructureItemsMovedToSafety"
        | "StructureLostArmor"
        | "StructureLostShields"
        | "StructureLowReagentsAlert"
        | "StructureNoReagentsAlert"
        | "StructureOnline"
        | "StructurePaintPurchased"
        | "StructureServicesOffline"
        | "StructureUnanchoring"
        | "StructureUnderAttack"
        | "StructureWentHighPower"
        | "StructureWentLowPower"
        | "StructuresJobsCancelled"
        | "StructuresJobsPaused"
        | "StructuresReinforcementChanged"
        | "TowerAlertMsg"
        | "TowerResourceAlertMsg"
        | "TransactionReversalMsg"
        | "TutorialMsg"
        | "WarAdopted "
        | "WarAllyInherited"
        | "WarAllyOfferDeclinedMsg"
        | "WarConcordInvalidates"
        | "WarDeclared"
        | "WarEndedHqSecurityDrop"
        | "WarHQRemovedFromSpace"
        | "WarInherited"
        | "WarInvalid"
        | "WarRetracted"
        | "WarRetractedByConcord"
        | "WarSurrenderDeclinedMsg"
        | "WarSurrenderOfferMsg";
}>;

export interface CharactersCharacterIdOnlineGet {
    /**
     * Timestamp of the last login
     */
    lastLogin?: string;
    /**
     * Timestamp of the last logout
     */
    lastLogout?: string;
    /**
     * Total number of times the character has logged in
     */
    logins?: number;
    /**
     * If the character is online
     */
    online: boolean;
}

export type CharactersCharacterIdOrdersGet = Array<{
    /**
     * Number of days for which order is valid (starting from the issued date). An order expires at time issued + duration
     */
    duration: number;
    /**
     * For buy orders, the amount of ISK in escrow
     */
    escrow?: number;
    /**
     * True if the order is a bid (buy) order
     */
    isBuyOrder?: boolean;
    /**
     * Signifies whether the buy/sell order was placed on behalf of a corporation.
     */
    isCorporation: boolean;
    /**
     * Date and time when this order was issued
     */
    issued: string;
    /**
     * ID of the location where order was placed
     */
    locationId: number;
    /**
     * For buy orders, the minimum quantity that will be accepted in a matching sell order
     */
    minVolume?: number;
    /**
     * Unique order ID
     */
    orderId: number;
    /**
     * Cost per unit for this order
     */
    price: number;
    /**
     * Valid order range, numbers are ranges in jumps
     */
    range:
        | "1"
        | "10"
        | "2"
        | "20"
        | "3"
        | "30"
        | "4"
        | "40"
        | "5"
        | "region"
        | "solarsystem"
        | "station";
    /**
     * ID of the region where order was placed
     */
    regionId: number;
    /**
     * The type ID of the item transacted in this order
     */
    typeId: number;
    /**
     * Quantity of items still required or offered
     */
    volumeRemain: number;
    /**
     * Quantity of items required or offered at time order was placed
     */
    volumeTotal: number;
}>;

export type CharactersCharacterIdOrdersHistoryGet = Array<{
    /**
     * Number of days the order was valid for (starting from the issued date). An order expires at time issued + duration
     */
    duration: number;
    /**
     * For buy orders, the amount of ISK in escrow
     */
    escrow?: number;
    /**
     * True if the order is a bid (buy) order
     */
    isBuyOrder?: boolean;
    /**
     * Signifies whether the buy/sell order was placed on behalf of a corporation.
     */
    isCorporation: boolean;
    /**
     * Date and time when this order was issued
     */
    issued: string;
    /**
     * ID of the location where order was placed
     */
    locationId: number;
    /**
     * For buy orders, the minimum quantity that will be accepted in a matching sell order
     */
    minVolume?: number;
    /**
     * Unique order ID
     */
    orderId: number;
    /**
     * Cost per unit for this order
     */
    price: number;
    /**
     * Valid order range, numbers are ranges in jumps
     */
    range:
        | "1"
        | "10"
        | "2"
        | "20"
        | "3"
        | "30"
        | "4"
        | "40"
        | "5"
        | "region"
        | "solarsystem"
        | "station";
    /**
     * ID of the region where order was placed
     */
    regionId: number;
    /**
     * Current order state
     */
    state: "cancelled" | "expired";
    /**
     * The type ID of the item transacted in this order
     */
    typeId: number;
    /**
     * Quantity of items still required or offered
     */
    volumeRemain: number;
    /**
     * Quantity of items required or offered at time order was placed
     */
    volumeTotal: number;
}>;

export type CharactersCharacterIdPlanetsGet = Array<{
    lastUpdate: string;
    numPins: number;
    ownerId: number;
    planetId: number;
    planetType:
        | "temperate"
        | "barren"
        | "oceanic"
        | "ice"
        | "gas"
        | "lava"
        | "storm"
        | "plasma";
    solarSystemId: number;
    upgradeLevel: number;
}>;

export interface CharactersCharacterIdPlanetsPlanetIdGet {
    links: Array<{
        destinationPinId: number;
        linkLevel: number;
        sourcePinId: number;
    }>;
    pins: Array<{
        contents?: Array<{
            amount: number;
            typeId: number;
        }>;
        expiryTime?: string;
        extractorDetails?: {
            /**
             * in seconds
             */
            cycleTime?: number;
            headRadius?: number;
            heads: Array<{
                headId: number;
                latitude: number;
                longitude: number;
            }>;
            productTypeId?: number;
            qtyPerCycle?: number;
        };
        factoryDetails?: {
            schematicId: number;
        };
        installTime?: string;
        lastCycleStart?: string;
        latitude: number;
        longitude: number;
        pinId: number;
        schematicId?: number;
        typeId: number;
    }>;
    routes: Array<{
        contentTypeId: number;
        destinationPinId: number;
        quantity: number;
        routeId: number;
        sourcePinId: number;
        /**
         * list of pin ID waypoints
         */
        waypoints?: number[];
    }>;
}

export interface CharactersCharacterIdPortraitGet {
    px128x128?: string;
    px256x256?: string;
    px512x512?: string;
    px64x64?: string;
}

export interface CharactersCharacterIdRolesGet {
    roles?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    rolesAtBase?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    rolesAtHq?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    rolesAtOther?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
}

export interface CharactersCharacterIdSearchGet {
    agent?: number[];
    alliance?: number[];
    character?: number[];
    constellation?: number[];
    corporation?: number[];
    faction?: number[];
    inventoryType?: number[];
    region?: number[];
    solarSystem?: number[];
    station?: number[];
    structure?: number[];
}

export interface CharactersCharacterIdShipGet {
    /**
     * Item id's are unique to a ship and persist until it is repackaged. This value can be used to track repeated uses of a ship, or detect when a pilot changes into a different instance of the same ship type.
     */
    shipItemId: number;
    shipName: string;
    shipTypeId: number;
}

export type CharactersCharacterIdStandingsGet = Array<{
    fromId: number;
    fromType: "agent" | "npc_corp" | "faction";
    standing: number;
}>;

export type CharactersCharacterIdTitlesGet = Array<{
    name?: string;
    titleId?: number;
}>;

/**
 * Wallet balance
 */
export type CharactersCharacterIdWalletGet = number;

/**
 * Wallet journal entries
 */
export type CharactersCharacterIdWalletJournalGet = Array<{
    /**
     * The amount of ISK given or taken from the wallet as a result of the given transaction. Positive when ISK is deposited into the wallet and negative when ISK is withdrawn
     */
    amount?: number;
    /**
     * Wallet balance after transaction occurred
     */
    balance?: number;
    /**
     * An ID that gives extra context to the particular transaction. Because of legacy reasons the context is completely different per ref_type and means different things. It is also possible to not have a context_id
     */
    contextId?: number;
    /**
     * The type of the given context_id if present
     */
    contextIdType?:
        | "structure_id"
        | "station_id"
        | "market_transaction_id"
        | "character_id"
        | "corporation_id"
        | "alliance_id"
        | "eve_system"
        | "industry_job_id"
        | "contract_id"
        | "planet_id"
        | "system_id"
        | "type_id";
    /**
     * Date and time of transaction
     */
    date: string;
    /**
     * The reason for the transaction, mirrors what is seen in the client
     */
    description: string;
    /**
     * The id of the first party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
     */
    firstPartyId?: number;
    /**
     * Unique journal reference ID
     */
    id: number;
    /**
     * The user stated reason for the transaction. Only applies to some ref_types
     */
    reason?: string;
    /**
     * "The transaction type for the given. transaction. Different transaction types will populate different attributes."
     */
    refType:
        | "acceleration_gate_fee"
        | "advertisement_listing_fee"
        | "agent_donation"
        | "agent_location_services"
        | "agent_miscellaneous"
        | "agent_mission_collateral_paid"
        | "agent_mission_collateral_refunded"
        | "agent_mission_reward"
        | "agent_mission_reward_corporation_tax"
        | "agent_mission_time_bonus_reward"
        | "agent_mission_time_bonus_reward_corporation_tax"
        | "agent_security_services"
        | "agent_services_rendered"
        | "agents_preward"
        | "air_career_program_reward"
        | "alliance_maintainance_fee"
        | "alliance_registration_fee"
        | "allignment_based_gate_toll"
        | "asset_safety_recovery_tax"
        | "bounty"
        | "bounty_prize"
        | "bounty_prize_corporation_tax"
        | "bounty_prizes"
        | "bounty_reimbursement"
        | "bounty_surcharge"
        | "brokers_fee"
        | "clone_activation"
        | "clone_transfer"
        | "contraband_fine"
        | "contract_auction_bid"
        | "contract_auction_bid_corp"
        | "contract_auction_bid_refund"
        | "contract_auction_sold"
        | "contract_brokers_fee"
        | "contract_brokers_fee_corp"
        | "contract_collateral"
        | "contract_collateral_deposited_corp"
        | "contract_collateral_payout"
        | "contract_collateral_refund"
        | "contract_deposit"
        | "contract_deposit_corp"
        | "contract_deposit_refund"
        | "contract_deposit_sales_tax"
        | "contract_price"
        | "contract_price_payment_corp"
        | "contract_reversal"
        | "contract_reward"
        | "contract_reward_deposited"
        | "contract_reward_deposited_corp"
        | "contract_reward_refund"
        | "contract_sales_tax"
        | "copying"
        | "corporate_reward_payout"
        | "corporate_reward_tax"
        | "corporation_account_withdrawal"
        | "corporation_bulk_payment"
        | "corporation_dividend_payment"
        | "corporation_liquidation"
        | "corporation_logo_change_cost"
        | "corporation_payment"
        | "corporation_registration_fee"
        | "cosmetic_market_component_item_purchase"
        | "cosmetic_market_skin_purchase"
        | "cosmetic_market_skin_sale"
        | "cosmetic_market_skin_sale_broker_fee"
        | "cosmetic_market_skin_sale_tax"
        | "cosmetic_market_skin_transaction"
        | "courier_mission_escrow"
        | "cspa"
        | "cspaofflinerefund"
        | "daily_challenge_reward"
        | "daily_goal_payouts"
        | "daily_goal_payouts_tax"
        | "datacore_fee"
        | "dna_modification_fee"
        | "docking_fee"
        | "duel_wager_escrow"
        | "duel_wager_payment"
        | "duel_wager_refund"
        | "ess_escrow_transfer"
        | "external_trade_delivery"
        | "external_trade_freeze"
        | "external_trade_thaw"
        | "factory_slot_rental_fee"
        | "flux_payout"
        | "flux_tax"
        | "flux_ticket_repayment"
        | "flux_ticket_sale"
        | "freelance_jobs_broadcasting_fee"
        | "freelance_jobs_duration_fee"
        | "freelance_jobs_escrow_refund"
        | "freelance_jobs_reward"
        | "freelance_jobs_reward_corporation_tax"
        | "freelance_jobs_reward_escrow"
        | "gm_cash_transfer"
        | "gm_plex_fee_refund"
        | "industry_job_tax"
        | "infrastructure_hub_maintenance"
        | "inheritance"
        | "insurance"
        | "insurgency_corruption_contribution_reward"
        | "insurgency_suppression_contribution_reward"
        | "item_trader_payment"
        | "jump_clone_activation_fee"
        | "jump_clone_installation_fee"
        | "kill_right_fee"
        | "lp_store"
        | "manufacturing"
        | "market_escrow"
        | "market_fine_paid"
        | "market_provider_tax"
        | "market_transaction"
        | "medal_creation"
        | "medal_issued"
        | "milestone_reward_payment"
        | "mission_completion"
        | "mission_cost"
        | "mission_expiration"
        | "mission_reward"
        | "office_rental_fee"
        | "operation_bonus"
        | "opportunity_reward"
        | "planetary_construction"
        | "planetary_export_tax"
        | "planetary_import_tax"
        | "player_donation"
        | "player_trading"
        | "project_discovery_reward"
        | "project_discovery_tax"
        | "project_payouts"
        | "reaction"
        | "redeemed_isk_token"
        | "release_of_impounded_property"
        | "repair_bill"
        | "reprocessing_tax"
        | "researching_material_productivity"
        | "researching_technology"
        | "researching_time_productivity"
        | "resource_wars_reward"
        | "reverse_engineering"
        | "season_challenge_reward"
        | "security_processing_fee"
        | "shares"
        | "skill_purchase"
        | "skyhook_claim_fee"
        | "sovereignity_bill"
        | "store_purchase"
        | "store_purchase_refund"
        | "structure_gate_jump"
        | "transaction_tax"
        | "under_construction"
        | "upkeep_adjustment_fee"
        | "war_ally_contract"
        | "war_fee"
        | "war_fee_surrender";
    /**
     * The id of the second party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
     */
    secondPartyId?: number;
    /**
     * Tax amount received. Only applies to tax related transactions
     */
    tax?: number;
    /**
     * The corporation ID receiving any tax paid. Only applies to tax related transactions
     */
    taxReceiverId?: number;
}>;

/**
 * Wallet transactions
 */
export type CharactersCharacterIdWalletTransactionsGet = Array<{
    clientId: number;
    /**
     * Date and time of transaction
     */
    date: string;
    isBuy: boolean;
    isPersonal: boolean;
    journalRefId: number;
    locationId: number;
    quantity: number;
    /**
     * Unique transaction ID
     */
    transactionId: number;
    typeId: number;
    /**
     * Amount paid per unit
     */
    unitPrice: number;
}>;

export interface CharactersDetail {
    /**
     * Character's alliance ID
     */
    allianceId?: AllianceID;
    /**
     * Character's creation date
     */
    birthday: string;
    /**
     * Character's bloodline ID
     */
    bloodlineId: BloodlineID;
    /**
     * Character's corporation ID
     */
    corporationId: CorporationID;
    /**
     * Character's description (biography)
     */
    description?: string;
    /**
     * Character's faction ID
     */
    factionId?: FactionID;
    /**
     * Character's gender
     */
    gender: "male" | "female";
    /**
     * Character's name
     */
    name: string;
    /**
     * Character's race ID
     */
    raceId: RaceID;
    /**
     * Character's security status
     */
    securityStatus?: number;
    /**
     * Character's corporation title
     */
    title?: string;
}

export interface CharactersSkillqueueSkill {
    /**
     * The date the skill training will finish
     */
    finishDate?: string;
    /**
     * The level the skill is training for
     */
    finishedLevel: number;
    /**
     * The Skill Points at the end of the level
     */
    levelEndSp?: number;
    /**
     * The Skill Points at the start of the level
     */
    levelStartSp?: number;
    /**
     * The position of the skill in the queue
     */
    queuePosition: number;
    /**
     * The TypeID of the skill
     */
    skillId: TypeID;
    /**
     * The date the skill training will start/continue
     */
    startDate?: string;
    /**
     * The Skill Points at the start of training
     */
    trainingStartSp?: number;
}

export interface CharactersSkills {
    /**
     * The trained skills
     */
    skills: CharactersSkillsSkill[];
    /**
     * The total Skill Points spent on skills
     */
    totalSp: number;
    /**
     * The amount of unallocated Skill Points
     */
    unallocatedSp?: number;
}

export interface CharactersSkillsSkill {
    /**
     * The active skill level (can differ from trained due to alpha status and/or active expert systems)
     */
    activeSkillLevel: number;
    /**
     * The Type ID of the skill
     */
    skillId: number;
    /**
     * The amount of Skill Points in the skill
     */
    skillpointsInSkill: number;
    /**
     * The trained skill level
     */
    trainedSkillLevel: number;
}

export type CompatibilityDate = string;

export type ConstellationID = number;

export type ContractsPublicBidsContractIdGet = Array<{
    /**
     * The amount bid, in ISK
     */
    amount: number;
    /**
     * Unique ID for the bid
     */
    bidId: number;
    /**
     * Datetime when the bid was placed
     */
    dateBid: string;
}>;

export type ContractsPublicItemsContractIdGet = Array<{
    isBlueprintCopy?: boolean;
    /**
     * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
     */
    isIncluded: boolean;
    /**
     * Unique ID for the item being sold. Not present if item is being requested by contract rather than sold with contract
     */
    itemId?: number;
    /**
     * Material Efficiency Level of the blueprint
     */
    materialEfficiency?: number;
    /**
     * Number of items in the stack
     */
    quantity: number;
    /**
     * Unique ID for the item, used by the contract system
     */
    recordId: number;
    /**
     * Number of runs remaining if the blueprint is a copy, -1 if it is an original
     */
    runs?: number;
    /**
     * Time Efficiency Level of the blueprint
     */
    timeEfficiency?: number;
    /**
     * Type ID for item
     */
    typeId: number;
}>;

export type ContractsPublicRegionIdGet = Array<{
    /**
     * Buyout price (for Auctions only)
     */
    buyout?: number;
    /**
     * Collateral price (for Couriers only)
     */
    collateral?: number;
    contractId: number;
    /**
     * Expiration date of the contract
     */
    dateExpired: string;
    /**
     * Сreation date of the contract
     */
    dateIssued: string;
    /**
     * Number of days to perform the contract
     */
    daysToComplete?: number;
    /**
     * End location ID (for Couriers contract)
     */
    endLocationId?: number;
    /**
     * true if the contract was issued on behalf of the issuer's corporation
     */
    forCorporation?: boolean;
    /**
     * Character's corporation ID for the issuer
     */
    issuerCorporationId: number;
    /**
     * Character ID for the issuer
     */
    issuerId: number;
    /**
     * Price of contract (for ItemsExchange and Auctions)
     */
    price?: number;
    /**
     * Remuneration for contract (for Couriers only)
     */
    reward?: number;
    /**
     * Start location ID (for Couriers contract)
     */
    startLocationId?: number;
    /**
     * Title of the contract
     */
    title?: string;
    /**
     * Type of the contract
     */
    type: "unknown" | "item_exchange" | "auction" | "courier" | "loan";
    /**
     * Volume of items in the contract
     */
    volume?: number;
}>;

export type CorporationCorporationIdMiningExtractionsGet = Array<{
    /**
     * The time at which the chunk being extracted will arrive and can be fractured by the moon mining drill.
     *
     */
    chunkArrivalTime: string;
    /**
     * The time at which the current extraction was initiated.
     *
     */
    extractionStartTime: string;
    moonId: number;
    /**
     * The time at which the chunk being extracted will naturally fracture if it is not first fractured by the moon mining drill.
     *
     */
    naturalDecayTime: string;
    structureId: number;
}>;

export type CorporationCorporationIdMiningObserversGet = Array<{
    lastUpdated: string;
    /**
     * The entity that was observing the asteroid field when it was mined.
     *
     */
    observerId: number;
    /**
     * The category of the observing entity
     */
    observerType: "structure";
}>;

export type CorporationCorporationIdMiningObserversObserverIdGet = Array<{
    /**
     * The character that did the mining
     *
     */
    characterId: number;
    lastUpdated: string;
    quantity: number;
    /**
     * The corporation id of the character at the time data was recorded.
     *
     */
    recordedCorporationId: number;
    typeId: number;
}>;

export type CorporationID = number;

export type CorporationsCorporationIdAlliancehistoryGet = Array<{
    allianceId?: number;
    /**
     * True if the alliance has been closed
     */
    isDeleted?: boolean;
    /**
     * An incrementing ID that can be used to canonically establish order of records in cases where dates may be ambiguous
     */
    recordId: number;
    startDate: string;
}>;

export type CorporationsCorporationIdAssetsGet = Array<{
    isBlueprintCopy?: boolean;
    isSingleton: boolean;
    itemId: number;
    locationFlag:
        | "AssetSafety"
        | "AutoFit"
        | "Bonus"
        | "Booster"
        | "BoosterBay"
        | "Capsule"
        | "CapsuleerDeliveries"
        | "Cargo"
        | "CorpDeliveries"
        | "CorpSAG1"
        | "CorpSAG2"
        | "CorpSAG3"
        | "CorpSAG4"
        | "CorpSAG5"
        | "CorpSAG6"
        | "CorpSAG7"
        | "CorporationGoalDeliveries"
        | "CrateLoot"
        | "Deliveries"
        | "DroneBay"
        | "DustBattle"
        | "DustDatabank"
        | "ExpeditionHold"
        | "FighterBay"
        | "FighterTube0"
        | "FighterTube1"
        | "FighterTube2"
        | "FighterTube3"
        | "FighterTube4"
        | "FleetHangar"
        | "FrigateEscapeBay"
        | "Hangar"
        | "HangarAll"
        | "HiSlot0"
        | "HiSlot1"
        | "HiSlot2"
        | "HiSlot3"
        | "HiSlot4"
        | "HiSlot5"
        | "HiSlot6"
        | "HiSlot7"
        | "HiddenModifiers"
        | "Implant"
        | "Impounded"
        | "InfrastructureHangar"
        | "JunkyardReprocessed"
        | "JunkyardTrashed"
        | "LoSlot0"
        | "LoSlot1"
        | "LoSlot2"
        | "LoSlot3"
        | "LoSlot4"
        | "LoSlot5"
        | "LoSlot6"
        | "LoSlot7"
        | "Locked"
        | "MedSlot0"
        | "MedSlot1"
        | "MedSlot2"
        | "MedSlot3"
        | "MedSlot4"
        | "MedSlot5"
        | "MedSlot6"
        | "MedSlot7"
        | "MobileDepotHold"
        | "MoonMaterialBay"
        | "OfficeFolder"
        | "Pilot"
        | "PlanetSurface"
        | "QuafeBay"
        | "QuantumCoreRoom"
        | "Reward"
        | "RigSlot0"
        | "RigSlot1"
        | "RigSlot2"
        | "RigSlot3"
        | "RigSlot4"
        | "RigSlot5"
        | "RigSlot6"
        | "RigSlot7"
        | "SecondaryStorage"
        | "ServiceSlot0"
        | "ServiceSlot1"
        | "ServiceSlot2"
        | "ServiceSlot3"
        | "ServiceSlot4"
        | "ServiceSlot5"
        | "ServiceSlot6"
        | "ServiceSlot7"
        | "ShipHangar"
        | "ShipOffline"
        | "Skill"
        | "SkillInTraining"
        | "SpecializedAmmoHold"
        | "SpecializedAsteroidHold"
        | "SpecializedCommandCenterHold"
        | "SpecializedFuelBay"
        | "SpecializedGasHold"
        | "SpecializedIceHold"
        | "SpecializedIndustrialShipHold"
        | "SpecializedLargeShipHold"
        | "SpecializedMaterialBay"
        | "SpecializedMediumShipHold"
        | "SpecializedMineralHold"
        | "SpecializedOreHold"
        | "SpecializedPlanetaryCommoditiesHold"
        | "SpecializedSalvageHold"
        | "SpecializedShipHold"
        | "SpecializedSmallShipHold"
        | "StructureActive"
        | "StructureFuel"
        | "StructureInactive"
        | "StructureOffline"
        | "SubSystemBay"
        | "SubSystemSlot0"
        | "SubSystemSlot1"
        | "SubSystemSlot2"
        | "SubSystemSlot3"
        | "SubSystemSlot4"
        | "SubSystemSlot5"
        | "SubSystemSlot6"
        | "SubSystemSlot7"
        | "Unlocked"
        | "Wallet"
        | "Wardrobe";
    locationId: number;
    locationType: "station" | "solar_system" | "item" | "other";
    quantity: number;
    typeId: number;
}>;

export type CorporationsCorporationIdAssetsLocationsPost = Array<{
    itemId: number;
    position: {
        x: number;
        y: number;
        z: number;
    };
}>;

export type CorporationsCorporationIdAssetsNamesPost = Array<{
    itemId: number;
    name: string;
}>;

export type CorporationsCorporationIdBlueprintsGet = Array<{
    /**
     * Unique ID for this item.
     */
    itemId: number;
    /**
     * Type of the location_id
     */
    locationFlag:
        | "AssetSafety"
        | "AutoFit"
        | "Bonus"
        | "Booster"
        | "BoosterBay"
        | "Capsule"
        | "CapsuleerDeliveries"
        | "Cargo"
        | "CorpDeliveries"
        | "CorpSAG1"
        | "CorpSAG2"
        | "CorpSAG3"
        | "CorpSAG4"
        | "CorpSAG5"
        | "CorpSAG6"
        | "CorpSAG7"
        | "CorporationGoalDeliveries"
        | "CrateLoot"
        | "Deliveries"
        | "DroneBay"
        | "DustBattle"
        | "DustDatabank"
        | "ExpeditionHold"
        | "FighterBay"
        | "FighterTube0"
        | "FighterTube1"
        | "FighterTube2"
        | "FighterTube3"
        | "FighterTube4"
        | "FleetHangar"
        | "FrigateEscapeBay"
        | "Hangar"
        | "HangarAll"
        | "HiSlot0"
        | "HiSlot1"
        | "HiSlot2"
        | "HiSlot3"
        | "HiSlot4"
        | "HiSlot5"
        | "HiSlot6"
        | "HiSlot7"
        | "HiddenModifiers"
        | "Implant"
        | "Impounded"
        | "InfrastructureHangar"
        | "JunkyardReprocessed"
        | "JunkyardTrashed"
        | "LoSlot0"
        | "LoSlot1"
        | "LoSlot2"
        | "LoSlot3"
        | "LoSlot4"
        | "LoSlot5"
        | "LoSlot6"
        | "LoSlot7"
        | "Locked"
        | "MedSlot0"
        | "MedSlot1"
        | "MedSlot2"
        | "MedSlot3"
        | "MedSlot4"
        | "MedSlot5"
        | "MedSlot6"
        | "MedSlot7"
        | "MobileDepotHold"
        | "MoonMaterialBay"
        | "OfficeFolder"
        | "Pilot"
        | "PlanetSurface"
        | "QuafeBay"
        | "QuantumCoreRoom"
        | "Reward"
        | "RigSlot0"
        | "RigSlot1"
        | "RigSlot2"
        | "RigSlot3"
        | "RigSlot4"
        | "RigSlot5"
        | "RigSlot6"
        | "RigSlot7"
        | "SecondaryStorage"
        | "ServiceSlot0"
        | "ServiceSlot1"
        | "ServiceSlot2"
        | "ServiceSlot3"
        | "ServiceSlot4"
        | "ServiceSlot5"
        | "ServiceSlot6"
        | "ServiceSlot7"
        | "ShipHangar"
        | "ShipOffline"
        | "Skill"
        | "SkillInTraining"
        | "SpecializedAmmoHold"
        | "SpecializedAsteroidHold"
        | "SpecializedCommandCenterHold"
        | "SpecializedFuelBay"
        | "SpecializedGasHold"
        | "SpecializedIceHold"
        | "SpecializedIndustrialShipHold"
        | "SpecializedLargeShipHold"
        | "SpecializedMaterialBay"
        | "SpecializedMediumShipHold"
        | "SpecializedMineralHold"
        | "SpecializedOreHold"
        | "SpecializedPlanetaryCommoditiesHold"
        | "SpecializedSalvageHold"
        | "SpecializedShipHold"
        | "SpecializedSmallShipHold"
        | "StructureActive"
        | "StructureFuel"
        | "StructureInactive"
        | "StructureOffline"
        | "SubSystemBay"
        | "SubSystemSlot0"
        | "SubSystemSlot1"
        | "SubSystemSlot2"
        | "SubSystemSlot3"
        | "SubSystemSlot4"
        | "SubSystemSlot5"
        | "SubSystemSlot6"
        | "SubSystemSlot7"
        | "Unlocked"
        | "Wallet"
        | "Wardrobe";
    /**
     * References a station, a ship or an item_id if this blueprint is located within a container.
     */
    locationId: number;
    /**
     * Material Efficiency Level of the blueprint.
     */
    materialEfficiency: number;
    /**
     * A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
     */
    quantity: number;
    /**
     * Number of runs remaining if the blueprint is a copy, -1 if it is an original.
     */
    runs: number;
    /**
     * Time Efficiency Level of the blueprint.
     */
    timeEfficiency: number;
    typeId: number;
}>;

export type CorporationsCorporationIdContactsGet = Array<{
    contactId: number;
    contactType: "character" | "corporation" | "alliance" | "faction";
    /**
     * Whether this contact is being watched
     */
    isWatched?: boolean;
    labelIds?: number[];
    /**
     * Standing of the contact
     */
    standing: number;
}>;

export type CorporationsCorporationIdContactsLabelsGet = Array<{
    labelId: number;
    labelName: string;
}>;

export type CorporationsCorporationIdContainersLogsGet = Array<{
    action:
        | "add"
        | "assemble"
        | "configure"
        | "enter_password"
        | "lock"
        | "move"
        | "repackage"
        | "set_name"
        | "set_password"
        | "unlock";
    /**
     * ID of the character who performed the action.
     */
    characterId: number;
    /**
     * ID of the container
     */
    containerId: number;
    /**
     * Type ID of the container
     */
    containerTypeId: number;
    locationFlag:
        | "AssetSafety"
        | "AutoFit"
        | "Bonus"
        | "Booster"
        | "BoosterBay"
        | "Capsule"
        | "CapsuleerDeliveries"
        | "Cargo"
        | "CorpDeliveries"
        | "CorpSAG1"
        | "CorpSAG2"
        | "CorpSAG3"
        | "CorpSAG4"
        | "CorpSAG5"
        | "CorpSAG6"
        | "CorpSAG7"
        | "CorporationGoalDeliveries"
        | "CrateLoot"
        | "Deliveries"
        | "DroneBay"
        | "DustBattle"
        | "DustDatabank"
        | "ExpeditionHold"
        | "FighterBay"
        | "FighterTube0"
        | "FighterTube1"
        | "FighterTube2"
        | "FighterTube3"
        | "FighterTube4"
        | "FleetHangar"
        | "FrigateEscapeBay"
        | "Hangar"
        | "HangarAll"
        | "HiSlot0"
        | "HiSlot1"
        | "HiSlot2"
        | "HiSlot3"
        | "HiSlot4"
        | "HiSlot5"
        | "HiSlot6"
        | "HiSlot7"
        | "HiddenModifiers"
        | "Implant"
        | "Impounded"
        | "InfrastructureHangar"
        | "JunkyardReprocessed"
        | "JunkyardTrashed"
        | "LoSlot0"
        | "LoSlot1"
        | "LoSlot2"
        | "LoSlot3"
        | "LoSlot4"
        | "LoSlot5"
        | "LoSlot6"
        | "LoSlot7"
        | "Locked"
        | "MedSlot0"
        | "MedSlot1"
        | "MedSlot2"
        | "MedSlot3"
        | "MedSlot4"
        | "MedSlot5"
        | "MedSlot6"
        | "MedSlot7"
        | "MobileDepotHold"
        | "MoonMaterialBay"
        | "OfficeFolder"
        | "Pilot"
        | "PlanetSurface"
        | "QuafeBay"
        | "QuantumCoreRoom"
        | "Reward"
        | "RigSlot0"
        | "RigSlot1"
        | "RigSlot2"
        | "RigSlot3"
        | "RigSlot4"
        | "RigSlot5"
        | "RigSlot6"
        | "RigSlot7"
        | "SecondaryStorage"
        | "ServiceSlot0"
        | "ServiceSlot1"
        | "ServiceSlot2"
        | "ServiceSlot3"
        | "ServiceSlot4"
        | "ServiceSlot5"
        | "ServiceSlot6"
        | "ServiceSlot7"
        | "ShipHangar"
        | "ShipOffline"
        | "Skill"
        | "SkillInTraining"
        | "SpecializedAmmoHold"
        | "SpecializedAsteroidHold"
        | "SpecializedCommandCenterHold"
        | "SpecializedFuelBay"
        | "SpecializedGasHold"
        | "SpecializedIceHold"
        | "SpecializedIndustrialShipHold"
        | "SpecializedLargeShipHold"
        | "SpecializedMaterialBay"
        | "SpecializedMediumShipHold"
        | "SpecializedMineralHold"
        | "SpecializedOreHold"
        | "SpecializedPlanetaryCommoditiesHold"
        | "SpecializedSalvageHold"
        | "SpecializedShipHold"
        | "SpecializedSmallShipHold"
        | "StructureActive"
        | "StructureFuel"
        | "StructureInactive"
        | "StructureOffline"
        | "SubSystemBay"
        | "SubSystemSlot0"
        | "SubSystemSlot1"
        | "SubSystemSlot2"
        | "SubSystemSlot3"
        | "SubSystemSlot4"
        | "SubSystemSlot5"
        | "SubSystemSlot6"
        | "SubSystemSlot7"
        | "Unlocked"
        | "Wallet"
        | "Wardrobe";
    locationId: number;
    /**
     * Timestamp when this log was created
     */
    loggedAt: string;
    newConfigBitmask?: number;
    oldConfigBitmask?: number;
    /**
     * Type of password set if action is of type SetPassword or EnterPassword
     */
    passwordType?: "config" | "general";
    /**
     * Quantity of the item being acted upon
     */
    quantity?: number;
    /**
     * Type ID of the item being acted upon
     */
    typeId?: number;
}>;

export type CorporationsCorporationIdContractsContractIdBidsGet = Array<{
    /**
     * The amount bid, in ISK
     */
    amount: number;
    /**
     * Unique ID for the bid
     */
    bidId: number;
    /**
     * Character ID of the bidder
     */
    bidderId: number;
    /**
     * Datetime when the bid was placed
     */
    dateBid: string;
}>;

export type CorporationsCorporationIdContractsContractIdItemsGet = Array<{
    /**
     * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
     */
    isIncluded: boolean;
    isSingleton: boolean;
    /**
     * Number of items in the stack
     */
    quantity: number;
    /**
     * -1 indicates that the item is a singleton (non-stackable). If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy
     */
    rawQuantity?: number;
    /**
     * Unique ID for the item
     */
    recordId: number;
    /**
     * Type ID for item
     */
    typeId: number;
}>;

export type CorporationsCorporationIdContractsGet = Array<{
    /**
     * Who will accept the contract
     */
    acceptorId: number;
    /**
     * ID to whom the contract is assigned, can be corporation or character ID
     */
    assigneeId: number;
    /**
     * To whom the contract is available
     */
    availability: "public" | "personal" | "corporation" | "alliance";
    /**
     * Buyout price (for Auctions only)
     */
    buyout?: number;
    /**
     * Collateral price (for Couriers only)
     */
    collateral?: number;
    contractId: number;
    /**
     * Date of confirmation of contract
     */
    dateAccepted?: string;
    /**
     * Date of completed of contract
     */
    dateCompleted?: string;
    /**
     * Expiration date of the contract
     */
    dateExpired: string;
    /**
     * Сreation date of the contract
     */
    dateIssued: string;
    /**
     * Number of days to perform the contract
     */
    daysToComplete?: number;
    /**
     * End location ID (for Couriers contract)
     */
    endLocationId?: number;
    /**
     * true if the contract was issued on behalf of the issuer's corporation
     */
    forCorporation: boolean;
    /**
     * Character's corporation ID for the issuer
     */
    issuerCorporationId: number;
    /**
     * Character ID for the issuer
     */
    issuerId: number;
    /**
     * Price of contract (for ItemsExchange and Auctions)
     */
    price?: number;
    /**
     * Remuneration for contract (for Couriers only)
     */
    reward?: number;
    /**
     * Start location ID (for Couriers contract)
     */
    startLocationId?: number;
    /**
     * Status of the the contract
     */
    status:
        | "outstanding"
        | "in_progress"
        | "finished_issuer"
        | "finished_contractor"
        | "finished"
        | "cancelled"
        | "rejected"
        | "failed"
        | "deleted"
        | "reversed";
    /**
     * Title of the contract
     */
    title?: string;
    /**
     * Type of the contract
     */
    type: "unknown" | "item_exchange" | "auction" | "courier" | "loan";
    /**
     * Volume of items in the contract
     */
    volume?: number;
}>;

export type CorporationsCorporationIdCustomsOfficesGet = Array<{
    /**
     * Only present if alliance access is allowed
     */
    allianceTaxRate?: number;
    /**
     * standing_level and any standing related tax rate only present when this is true
     */
    allowAccessWithStandings: boolean;
    allowAllianceAccess: boolean;
    badStandingTaxRate?: number;
    corporationTaxRate?: number;
    /**
     * Tax rate for entities with excellent level of standing, only present if this level is allowed, same for all other standing related tax rates
     */
    excellentStandingTaxRate?: number;
    goodStandingTaxRate?: number;
    neutralStandingTaxRate?: number;
    /**
     * unique ID of this customs office
     */
    officeId: number;
    reinforceExitEnd: number;
    /**
     * Together with reinforce_exit_end, marks a 2-hour period where this customs office could exit reinforcement mode during the day after initial attack
     */
    reinforceExitStart: number;
    /**
     * Access is allowed only for entities with this level of standing or better
     */
    standingLevel?: "bad" | "excellent" | "good" | "neutral" | "terrible";
    /**
     * ID of the solar system this customs office is located in
     */
    systemId: number;
    terribleStandingTaxRate?: number;
}>;

export interface CorporationsCorporationIdDivisionsGet {
    hangar?: Array<{
        division?: number;
        name?: string;
    }>;
    wallet?: Array<{
        division?: number;
        name?: string;
    }>;
}

export type CorporationsCorporationIdFacilitiesGet = Array<{
    facilityId: number;
    systemId: number;
    typeId: number;
}>;

export interface CorporationsCorporationIdFwStatsGet {
    /**
     * The enlistment date of the given corporation into faction warfare. Will not be included if corporation is not enlisted in faction warfare
     */
    enlistedOn?: string;
    /**
     * The faction the given corporation is enlisted to fight for. Will not be included if corporation is not enlisted in faction warfare
     */
    factionId?: number;
    /**
     * Summary of kills done by the given corporation against enemy factions
     */
    kills: {
        /**
         * Last week's total number of kills by members of the given corporation against enemy factions
         */
        lastWeek: number;
        /**
         * Total number of kills by members of the given corporation against enemy factions since the corporation enlisted
         */
        total: number;
        /**
         * Yesterday's total number of kills by members of the given corporation against enemy factions
         */
        yesterday: number;
    };
    /**
     * How many pilots the enlisted corporation has. Will not be included if corporation is not enlisted in faction warfare
     */
    pilots?: number;
    /**
     * Summary of victory points gained by the given corporation for the enlisted faction
     */
    victoryPoints: {
        /**
         * Last week's victory points gained by members of the given corporation
         */
        lastWeek: number;
        /**
         * Total victory points gained since the given corporation enlisted
         */
        total: number;
        /**
         * Yesterday's victory points gained by members of the given corporation
         */
        yesterday: number;
    };
}

export interface CorporationsCorporationIdIconsGet {
    px128x128?: string;
    px256x256?: string;
    px64x64?: string;
}

export type CorporationsCorporationIdIndustryJobsGet = Array<{
    /**
     * Job activity ID
     */
    activityId: number;
    blueprintId: number;
    /**
     * Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
     */
    blueprintLocationId: number;
    blueprintTypeId: number;
    /**
     * ID of the character which completed this job
     */
    completedCharacterId?: number;
    /**
     * Date and time when this job was completed
     */
    completedDate?: string;
    /**
     * The sume of job installation fee and industry facility tax
     */
    cost?: number;
    /**
     * Job duration in seconds
     */
    duration: number;
    /**
     * Date and time when this job finished
     */
    endDate: string;
    /**
     * ID of the facility where this job is running
     */
    facilityId: number;
    /**
     * ID of the character which installed this job
     */
    installerId: number;
    /**
     * Unique job ID
     */
    jobId: number;
    /**
     * Number of runs blueprint is licensed for
     */
    licensedRuns?: number;
    /**
     * ID of the location for the industry facility
     */
    locationId: number;
    /**
     * Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
     */
    outputLocationId: number;
    /**
     * Date and time when this job was paused (i.e. time when the facility where this job was installed went offline)
     */
    pauseDate?: string;
    /**
     * Chance of success for invention
     */
    probability?: number;
    /**
     * Type ID of product (manufactured, copied or invented)
     */
    productTypeId?: number;
    /**
     * Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
     */
    runs: number;
    /**
     * Date and time when this job started
     */
    startDate: string;
    status:
        | "active"
        | "cancelled"
        | "delivered"
        | "paused"
        | "ready"
        | "reverted";
    /**
     * Number of successful runs for this job. Equal to runs unless this is an invention job
     */
    successfulRuns?: number;
}>;

export type CorporationsCorporationIdKillmailsRecentGet = Array<{
    /**
     * A hash of this killmail
     */
    killmailHash: string;
    /**
     * ID of this killmail
     */
    killmailId: number;
}>;

export type CorporationsCorporationIdMedalsGet = Array<{
    createdAt: string;
    /**
     * ID of the character who created this medal
     */
    creatorId: number;
    description: string;
    medalId: number;
    title: string;
}>;

export type CorporationsCorporationIdMedalsIssuedGet = Array<{
    /**
     * ID of the character who was rewarded this medal
     */
    characterId: number;
    issuedAt: string;
    /**
     * ID of the character who issued the medal
     */
    issuerId: number;
    medalId: number;
    reason: string;
    status: "private" | "public";
}>;

/**
 * A list of character IDs
 */
export type CorporationsCorporationIdMembersGet = number[];

export type CorporationsCorporationIdMembersLimitGet = number;

export type CorporationsCorporationIdMembersTitlesGet = Array<{
    characterId: number;
    /**
     * A list of title_id
     */
    titles: number[];
}>;

export type CorporationsCorporationIdMembertrackingGet = Array<{
    baseId?: number;
    characterId: number;
    locationId?: number;
    logoffDate?: string;
    logonDate?: string;
    shipTypeId?: number;
    startDate?: string;
}>;

export type CorporationsCorporationIdOrdersGet = Array<{
    /**
     * Number of days for which order is valid (starting from the issued date). An order expires at time issued + duration
     */
    duration: number;
    /**
     * For buy orders, the amount of ISK in escrow
     */
    escrow?: number;
    /**
     * True if the order is a bid (buy) order
     */
    isBuyOrder?: boolean;
    /**
     * Date and time when this order was issued
     */
    issued: string;
    /**
     * The character who issued this order
     */
    issuedBy: number;
    /**
     * ID of the location where order was placed
     */
    locationId: number;
    /**
     * For buy orders, the minimum quantity that will be accepted in a matching sell order
     */
    minVolume?: number;
    /**
     * Unique order ID
     */
    orderId: number;
    /**
     * Cost per unit for this order
     */
    price: number;
    /**
     * Valid order range, numbers are ranges in jumps
     */
    range:
        | "1"
        | "10"
        | "2"
        | "20"
        | "3"
        | "30"
        | "4"
        | "40"
        | "5"
        | "region"
        | "solarsystem"
        | "station";
    /**
     * ID of the region where order was placed
     */
    regionId: number;
    /**
     * The type ID of the item transacted in this order
     */
    typeId: number;
    /**
     * Quantity of items still required or offered
     */
    volumeRemain: number;
    /**
     * Quantity of items required or offered at time order was placed
     */
    volumeTotal: number;
    /**
     * The corporation wallet division used for this order.
     */
    walletDivision: number;
}>;

export type CorporationsCorporationIdOrdersHistoryGet = Array<{
    /**
     * Number of days the order was valid for (starting from the issued date). An order expires at time issued + duration
     */
    duration: number;
    /**
     * For buy orders, the amount of ISK in escrow
     */
    escrow?: number;
    /**
     * True if the order is a bid (buy) order
     */
    isBuyOrder?: boolean;
    /**
     * Date and time when this order was issued
     */
    issued: string;
    /**
     * The character who issued this order
     */
    issuedBy?: number;
    /**
     * ID of the location where order was placed
     */
    locationId: number;
    /**
     * For buy orders, the minimum quantity that will be accepted in a matching sell order
     */
    minVolume?: number;
    /**
     * Unique order ID
     */
    orderId: number;
    /**
     * Cost per unit for this order
     */
    price: number;
    /**
     * Valid order range, numbers are ranges in jumps
     */
    range:
        | "1"
        | "10"
        | "2"
        | "20"
        | "3"
        | "30"
        | "4"
        | "40"
        | "5"
        | "region"
        | "solarsystem"
        | "station";
    /**
     * ID of the region where order was placed
     */
    regionId: number;
    /**
     * Current order state
     */
    state: "cancelled" | "expired";
    /**
     * The type ID of the item transacted in this order
     */
    typeId: number;
    /**
     * Quantity of items still required or offered
     */
    volumeRemain: number;
    /**
     * Quantity of items required or offered at time order was placed
     */
    volumeTotal: number;
    /**
     * The corporation wallet division used for this order
     */
    walletDivision: number;
}>;

export type CorporationsCorporationIdRolesGet = Array<{
    characterId: number;
    grantableRoles?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    grantableRolesAtBase?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    grantableRolesAtHq?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    grantableRolesAtOther?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    roles?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    rolesAtBase?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    rolesAtHq?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    rolesAtOther?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
}>;

export type CorporationsCorporationIdRolesHistoryGet = Array<{
    changedAt: string;
    /**
     * The character whose roles are changed
     */
    characterId: number;
    /**
     * ID of the character who issued this change
     */
    issuerId: number;
    newRoles: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    oldRoles: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    roleType:
        | "grantable_roles"
        | "grantable_roles_at_base"
        | "grantable_roles_at_hq"
        | "grantable_roles_at_other"
        | "roles"
        | "roles_at_base"
        | "roles_at_hq"
        | "roles_at_other";
}>;

/**
 * List of shareholders
 */
export type CorporationsCorporationIdShareholdersGet = Array<{
    shareCount: number;
    shareholderId: number;
    shareholderType: "character" | "corporation";
}>;

export type CorporationsCorporationIdStandingsGet = Array<{
    fromId: number;
    fromType: "agent" | "npc_corp" | "faction";
    standing: number;
}>;

export type CorporationsCorporationIdStarbasesGet = Array<{
    /**
     * The moon this starbase (POS) is anchored on, unanchored POSes do not have this information
     */
    moonId?: number;
    /**
     * When the POS onlined, for starbases (POSes) in online state
     */
    onlinedSince?: string;
    /**
     * When the POS will be out of reinforcement, for starbases (POSes) in reinforced state
     */
    reinforcedUntil?: string;
    /**
     * Unique ID for this starbase (POS)
     */
    starbaseId: number;
    state?: "offline" | "online" | "onlining" | "reinforced" | "unanchoring";
    /**
     * The solar system this starbase (POS) is in, unanchored POSes have this information
     */
    systemId: number;
    /**
     * Starbase (POS) type
     */
    typeId: number;
    /**
     * When the POS started unanchoring, for starbases (POSes) in unanchoring state
     */
    unanchorAt?: string;
}>;

export interface CorporationsCorporationIdStarbasesStarbaseIdGet {
    allowAllianceMembers: boolean;
    allowCorporationMembers: boolean;
    /**
     * Who can anchor starbase (POS) and its structures
     */
    anchor:
        | "alliance_member"
        | "config_starbase_equipment_role"
        | "corporation_member"
        | "starbase_fuel_technician_role";
    attackIfAtWar: boolean;
    attackIfOtherSecurityStatusDropping: boolean;
    /**
     * Starbase (POS) will attack if target's security standing is lower than this value
     */
    attackSecurityStatusThreshold?: number;
    /**
     * Starbase (POS) will attack if target's standing is lower than this value
     */
    attackStandingThreshold?: number;
    /**
     * Who can take fuel blocks out of the starbase (POS)'s fuel bay
     */
    fuelBayTake:
        | "alliance_member"
        | "config_starbase_equipment_role"
        | "corporation_member"
        | "starbase_fuel_technician_role";
    /**
     * Who can view the starbase (POS)'s fule bay. Characters either need to have required role or belong to the starbase (POS) owner's corporation or alliance, as described by the enum, all other access settings follows the same scheme
     */
    fuelBayView:
        | "alliance_member"
        | "config_starbase_equipment_role"
        | "corporation_member"
        | "starbase_fuel_technician_role";
    /**
     * Fuel blocks and other things that will be consumed when operating a starbase (POS)
     */
    fuels?: Array<{
        quantity: number;
        typeId: number;
    }>;
    /**
     * Who can offline starbase (POS) and its structures
     */
    offline:
        | "alliance_member"
        | "config_starbase_equipment_role"
        | "corporation_member"
        | "starbase_fuel_technician_role";
    /**
     * Who can online starbase (POS) and its structures
     */
    online:
        | "alliance_member"
        | "config_starbase_equipment_role"
        | "corporation_member"
        | "starbase_fuel_technician_role";
    /**
     * Who can unanchor starbase (POS) and its structures
     */
    unanchor:
        | "alliance_member"
        | "config_starbase_equipment_role"
        | "corporation_member"
        | "starbase_fuel_technician_role";
    /**
     * True if the starbase (POS) is using alliance standings, otherwise using corporation's
     */
    useAllianceStandings: boolean;
}

export type CorporationsCorporationIdStructuresGet = Array<{
    /**
     * ID of the corporation that owns the structure
     */
    corporationId: number;
    /**
     * Date on which the structure will run out of fuel
     */
    fuelExpires?: string;
    /**
     * The structure name
     */
    name?: string;
    /**
     * The date and time when the structure's newly requested reinforcement times (e.g. next_reinforce_hour and next_reinforce_day) will take effect
     */
    nextReinforceApply?: string;
    /**
     * The requested change to reinforce_hour that will take effect at the time shown by next_reinforce_apply
     */
    nextReinforceHour?: number;
    /**
     * The id of the ACL profile for this citadel
     */
    profileId: number;
    /**
     * The hour of day that determines the four hour window when the structure will randomly exit its reinforcement periods and become vulnerable to attack against its armor and/or hull. The structure will become vulnerable at a random time that is +/- 2 hours centered on the value of this property
     */
    reinforceHour?: number;
    /**
     * Contains a list of service upgrades, and their state
     */
    services?: Array<{
        name: string;
        state: "online" | "offline" | "cleanup";
    }>;
    state:
        | "anchor_vulnerable"
        | "anchoring"
        | "armor_reinforce"
        | "armor_vulnerable"
        | "deploy_vulnerable"
        | "fitting_invulnerable"
        | "hull_reinforce"
        | "hull_vulnerable"
        | "online_deprecated"
        | "onlining_vulnerable"
        | "shield_vulnerable"
        | "unanchored"
        | "unknown";
    /**
     * Date at which the structure will move to it's next state
     */
    stateTimerEnd?: string;
    /**
     * Date at which the structure entered it's current state
     */
    stateTimerStart?: string;
    /**
     * The Item ID of the structure
     */
    structureId: number;
    /**
     * The solar system the structure is in
     */
    systemId: number;
    /**
     * The type id of the structure
     */
    typeId: number;
    /**
     * Date at which the structure will unanchor
     */
    unanchorsAt?: string;
}>;

export type CorporationsCorporationIdTitlesGet = Array<{
    grantableRoles?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    grantableRolesAtBase?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    grantableRolesAtHq?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    grantableRolesAtOther?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    name?: string;
    roles?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    rolesAtBase?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    rolesAtHq?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    rolesAtOther?: Array<
        | "Account_Take_1"
        | "Account_Take_2"
        | "Account_Take_3"
        | "Account_Take_4"
        | "Account_Take_5"
        | "Account_Take_6"
        | "Account_Take_7"
        | "Accountant"
        | "Auditor"
        | "Brand_Manager"
        | "Communications_Officer"
        | "Config_Equipment"
        | "Config_Starbase_Equipment"
        | "Container_Take_1"
        | "Container_Take_2"
        | "Container_Take_3"
        | "Container_Take_4"
        | "Container_Take_5"
        | "Container_Take_6"
        | "Container_Take_7"
        | "Contract_Manager"
        | "Deliveries_Container_Take"
        | "Deliveries_Query"
        | "Deliveries_Take"
        | "Diplomat"
        | "Director"
        | "Factory_Manager"
        | "Fitting_Manager"
        | "Hangar_Query_1"
        | "Hangar_Query_2"
        | "Hangar_Query_3"
        | "Hangar_Query_4"
        | "Hangar_Query_5"
        | "Hangar_Query_6"
        | "Hangar_Query_7"
        | "Hangar_Take_1"
        | "Hangar_Take_2"
        | "Hangar_Take_3"
        | "Hangar_Take_4"
        | "Hangar_Take_5"
        | "Hangar_Take_6"
        | "Hangar_Take_7"
        | "Junior_Accountant"
        | "Personnel_Manager"
        | "Project_Manager"
        | "Rent_Factory_Facility"
        | "Rent_Office"
        | "Rent_Research_Facility"
        | "Security_Officer"
        | "Skill_Plan_Manager"
        | "Starbase_Defense_Operator"
        | "Starbase_Fuel_Technician"
        | "Station_Manager"
        | "Trader"
    >;
    titleId?: number;
}>;

/**
 * Journal entries
 */
export type CorporationsCorporationIdWalletsDivisionJournalGet = Array<{
    /**
     * The amount of ISK given or taken from the wallet as a result of the given transaction. Positive when ISK is deposited into the wallet and negative when ISK is withdrawn
     */
    amount?: number;
    /**
     * Wallet balance after transaction occurred
     */
    balance?: number;
    /**
     * An ID that gives extra context to the particular transaction. Because of legacy reasons the context is completely different per ref_type and means different things. It is also possible to not have a context_id
     */
    contextId?: number;
    /**
     * The type of the given context_id if present
     */
    contextIdType?:
        | "structure_id"
        | "station_id"
        | "market_transaction_id"
        | "character_id"
        | "corporation_id"
        | "alliance_id"
        | "eve_system"
        | "industry_job_id"
        | "contract_id"
        | "planet_id"
        | "system_id"
        | "type_id";
    /**
     * Date and time of transaction
     */
    date: string;
    /**
     * The reason for the transaction, mirrors what is seen in the client
     */
    description: string;
    /**
     * The id of the first party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
     */
    firstPartyId?: number;
    /**
     * Unique journal reference ID
     */
    id: number;
    /**
     * The user stated reason for the transaction. Only applies to some ref_types
     */
    reason?: string;
    /**
     * "The transaction type for the given. transaction. Different transaction types will populate different attributes. Note: If you have an existing XML API application that is using ref_types, you will need to know which string ESI ref_type maps to which integer. You can look at the following file to see string->int mappings: https://github.com/ccpgames/eve-glue/blob/master/eve_glue/wallet_journal_ref.py"
     */
    refType:
        | "acceleration_gate_fee"
        | "advertisement_listing_fee"
        | "agent_donation"
        | "agent_location_services"
        | "agent_miscellaneous"
        | "agent_mission_collateral_paid"
        | "agent_mission_collateral_refunded"
        | "agent_mission_reward"
        | "agent_mission_reward_corporation_tax"
        | "agent_mission_time_bonus_reward"
        | "agent_mission_time_bonus_reward_corporation_tax"
        | "agent_security_services"
        | "agent_services_rendered"
        | "agents_preward"
        | "air_career_program_reward"
        | "alliance_maintainance_fee"
        | "alliance_registration_fee"
        | "allignment_based_gate_toll"
        | "asset_safety_recovery_tax"
        | "bounty"
        | "bounty_prize"
        | "bounty_prize_corporation_tax"
        | "bounty_prizes"
        | "bounty_reimbursement"
        | "bounty_surcharge"
        | "brokers_fee"
        | "clone_activation"
        | "clone_transfer"
        | "contraband_fine"
        | "contract_auction_bid"
        | "contract_auction_bid_corp"
        | "contract_auction_bid_refund"
        | "contract_auction_sold"
        | "contract_brokers_fee"
        | "contract_brokers_fee_corp"
        | "contract_collateral"
        | "contract_collateral_deposited_corp"
        | "contract_collateral_payout"
        | "contract_collateral_refund"
        | "contract_deposit"
        | "contract_deposit_corp"
        | "contract_deposit_refund"
        | "contract_deposit_sales_tax"
        | "contract_price"
        | "contract_price_payment_corp"
        | "contract_reversal"
        | "contract_reward"
        | "contract_reward_deposited"
        | "contract_reward_deposited_corp"
        | "contract_reward_refund"
        | "contract_sales_tax"
        | "copying"
        | "corporate_reward_payout"
        | "corporate_reward_tax"
        | "corporation_account_withdrawal"
        | "corporation_bulk_payment"
        | "corporation_dividend_payment"
        | "corporation_liquidation"
        | "corporation_logo_change_cost"
        | "corporation_payment"
        | "corporation_registration_fee"
        | "cosmetic_market_component_item_purchase"
        | "cosmetic_market_skin_purchase"
        | "cosmetic_market_skin_sale"
        | "cosmetic_market_skin_sale_broker_fee"
        | "cosmetic_market_skin_sale_tax"
        | "cosmetic_market_skin_transaction"
        | "courier_mission_escrow"
        | "cspa"
        | "cspaofflinerefund"
        | "daily_challenge_reward"
        | "daily_goal_payouts"
        | "daily_goal_payouts_tax"
        | "datacore_fee"
        | "dna_modification_fee"
        | "docking_fee"
        | "duel_wager_escrow"
        | "duel_wager_payment"
        | "duel_wager_refund"
        | "ess_escrow_transfer"
        | "external_trade_delivery"
        | "external_trade_freeze"
        | "external_trade_thaw"
        | "factory_slot_rental_fee"
        | "flux_payout"
        | "flux_tax"
        | "flux_ticket_repayment"
        | "flux_ticket_sale"
        | "freelance_jobs_broadcasting_fee"
        | "freelance_jobs_duration_fee"
        | "freelance_jobs_escrow_refund"
        | "freelance_jobs_reward"
        | "freelance_jobs_reward_corporation_tax"
        | "freelance_jobs_reward_escrow"
        | "gm_cash_transfer"
        | "gm_plex_fee_refund"
        | "industry_job_tax"
        | "infrastructure_hub_maintenance"
        | "inheritance"
        | "insurance"
        | "insurgency_corruption_contribution_reward"
        | "insurgency_suppression_contribution_reward"
        | "item_trader_payment"
        | "jump_clone_activation_fee"
        | "jump_clone_installation_fee"
        | "kill_right_fee"
        | "lp_store"
        | "manufacturing"
        | "market_escrow"
        | "market_fine_paid"
        | "market_provider_tax"
        | "market_transaction"
        | "medal_creation"
        | "medal_issued"
        | "milestone_reward_payment"
        | "mission_completion"
        | "mission_cost"
        | "mission_expiration"
        | "mission_reward"
        | "office_rental_fee"
        | "operation_bonus"
        | "opportunity_reward"
        | "planetary_construction"
        | "planetary_export_tax"
        | "planetary_import_tax"
        | "player_donation"
        | "player_trading"
        | "project_discovery_reward"
        | "project_discovery_tax"
        | "project_payouts"
        | "reaction"
        | "redeemed_isk_token"
        | "release_of_impounded_property"
        | "repair_bill"
        | "reprocessing_tax"
        | "researching_material_productivity"
        | "researching_technology"
        | "researching_time_productivity"
        | "resource_wars_reward"
        | "reverse_engineering"
        | "season_challenge_reward"
        | "security_processing_fee"
        | "shares"
        | "skill_purchase"
        | "skyhook_claim_fee"
        | "sovereignity_bill"
        | "store_purchase"
        | "store_purchase_refund"
        | "structure_gate_jump"
        | "transaction_tax"
        | "under_construction"
        | "upkeep_adjustment_fee"
        | "war_ally_contract"
        | "war_fee"
        | "war_fee_surrender";
    /**
     * The id of the second party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
     */
    secondPartyId?: number;
    /**
     * Tax amount received. Only applies to tax related transactions
     */
    tax?: number;
    /**
     * The corporation ID receiving any tax paid. Only applies to tax related transactions
     */
    taxReceiverId?: number;
}>;

/**
 * Wallet transactions
 */
export type CorporationsCorporationIdWalletsDivisionTransactionsGet = Array<{
    clientId: number;
    /**
     * Date and time of transaction
     */
    date: string;
    isBuy: boolean;
    /**
     * -1 if there is no corresponding wallet journal entry
     */
    journalRefId: number;
    locationId: number;
    quantity: number;
    /**
     * Unique transaction ID
     */
    transactionId: number;
    typeId: number;
    /**
     * Amount paid per unit
     */
    unitPrice: number;
}>;

export type CorporationsCorporationIdWalletsGet = Array<{
    balance: number;
    division: number;
}>;

export interface CorporationsDetail {
    /**
     * Corporation's alliance ID
     */
    allianceId?: AllianceID;
    /**
     * Corporation's CEO ID
     */
    ceoId: CharacterID;
    /**
     * Corporation's creator ID
     */
    creatorId: CharacterID;
    /**
     * Corporation's founding date
     */
    dateFounded?: string;
    /**
     * Corporation's description
     */
    description?: string;
    /**
     * Corporation's faction ID
     */
    factionId?: FactionID;
    /**
     * Corporation's home station ID
     */
    homeStationId?: StationID;
    /**
     * Corporation's member count
     */
    memberCount: number;
    /**
     * Corporation's name
     */
    name: string;
    /**
     * Corporation's shares
     */
    shares?: number;
    /**
     * Corporation's tax rate
     */
    taxRate: number;
    /**
     * Corporation's short name
     */
    ticker: string;
    /**
     * Corporation's URL
     */
    url?: string;
    /**
     * Corporation's war eligible
     */
    warEligible?: boolean;
}

export type CorporationsNpccorpsGet = number[];

export interface DogmaAttributesAttributeIdGet {
    attributeId: number;
    defaultValue?: number;
    description?: string;
    displayName?: string;
    highIsGood?: boolean;
    iconId?: number;
    name?: string;
    published?: boolean;
    stackable?: boolean;
    unitId?: number;
}

export type DogmaAttributesGet = number[];

export interface DogmaDynamicItemsTypeIdItemIdGet {
    /**
     * The ID of the character who created the item
     */
    createdBy: number;
    dogmaAttributes: Array<{
        attributeId: number;
        value: number;
    }>;
    dogmaEffects: Array<{
        effectId: number;
        isDefault: boolean;
    }>;
    /**
     * The type ID of the mutator used to generate the dynamic item.
     */
    mutatorTypeId: number;
    /**
     * The type ID of the source item the mutator was applied to create the dynamic item.
     */
    sourceTypeId: number;
}

export interface DogmaEffectsEffectIdGet {
    description?: string;
    disallowAutoRepeat?: boolean;
    dischargeAttributeId?: number;
    displayName?: string;
    durationAttributeId?: number;
    effectCategory?: number;
    effectId: number;
    electronicChance?: boolean;
    falloffAttributeId?: number;
    iconId?: number;
    isAssistance?: boolean;
    isOffensive?: boolean;
    isWarpSafe?: boolean;
    modifiers?: Array<{
        domain?: string;
        effectId?: number;
        func: string;
        modifiedAttributeId?: number;
        modifyingAttributeId?: number;
        operator?: number;
    }>;
    name?: string;
    postExpression?: number;
    preExpression?: number;
    published?: boolean;
    rangeAttributeId?: number;
    rangeChance?: boolean;
    trackingSpeedAttributeId?: number;
}

export type DogmaEffectsGet = number[];

export type DungeonID = number;

export interface Error {
    /**
     * List of individual error details.
     */
    details?: ErrorDetail[];
    /**
     * Error message.
     */
    error: string;
}

export interface ErrorDetail {
    /**
     * Where the error occurred, e.g. 'body.items[3].tags' or 'path.thing-id'
     */
    location?: string;
    /**
     * Error message text
     */
    message?: string;
    /**
     * The value at the given location
     */
    value?: unknown;
}

export type FactionID = number;

export interface FleetsFleetIdGet {
    /**
     * Is free-move enabled
     */
    isFreeMove: boolean;
    /**
     * Does the fleet have an active fleet advertisement
     */
    isRegistered: boolean;
    /**
     * Is EVE Voice enabled
     */
    isVoiceEnabled: boolean;
    /**
     * Fleet MOTD in CCP flavoured HTML
     */
    motd: string;
}

export type FleetsFleetIdMembersGet = Array<{
    characterId: number;
    joinTime: string;
    /**
     * Member’s role in fleet
     */
    role:
        | "fleet_commander"
        | "wing_commander"
        | "squad_commander"
        | "squad_member";
    /**
     * Localized role names
     */
    roleName: string;
    shipTypeId: number;
    /**
     * Solar system the member is located in
     */
    solarSystemId: number;
    /**
     * ID of the squad the member is in. If not applicable, will be set to -1
     */
    squadId: number;
    /**
     * Station in which the member is docked in, if applicable
     */
    stationId?: number;
    /**
     * Whether the member take fleet warps
     */
    takesFleetWarp: boolean;
    /**
     * ID of the wing the member is in. If not applicable, will be set to -1
     */
    wingId: number;
}>;

export type FleetsFleetIdWingsGet = Array<{
    id: number;
    name: string;
    squads: Array<{
        id: number;
        name: string;
    }>;
}>;

/**
 * 201 created object
 */
export interface FleetsFleetIdWingsPost {
    /**
     * The wing_id of the newly created wing
     */
    wingId: number;
}

/**
 * 201 created object
 */
export interface FleetsFleetIdWingsWingIdSquadsPost {
    /**
     * The squad_id of the newly created squad
     */
    squadId: number;
}

export interface FwLeaderboardsCharactersGet {
    /**
     * Top 100 rankings of pilots by number of kills from yesterday, last week and in total
     */
    kills: {
        /**
         * Top 100 ranking of pilots active in faction warfare by total kills. A pilot is considered "active" if they have participated in faction warfare in the past 14 days
         */
        activeTotal: Array<{
            /**
             * Amount of kills
             */
            amount?: number;
            characterId?: number;
        }>;
        /**
         * Top 100 ranking of pilots by kills in the past week
         */
        lastWeek: Array<{
            /**
             * Amount of kills
             */
            amount?: number;
            characterId?: number;
        }>;
        /**
         * Top 100 ranking of pilots by kills in the past day
         */
        yesterday: Array<{
            /**
             * Amount of kills
             */
            amount?: number;
            characterId?: number;
        }>;
    };
    /**
     * Top 100 rankings of pilots by victory points from yesterday, last week and in total
     */
    victoryPoints: {
        /**
         * Top 100 ranking of pilots active in faction warfare by total victory points. A pilot is considered "active" if they have participated in faction warfare in the past 14 days
         */
        activeTotal: Array<{
            /**
             * Amount of victory points
             */
            amount?: number;
            characterId?: number;
        }>;
        /**
         * Top 100 ranking of pilots by victory points in the past week
         */
        lastWeek: Array<{
            /**
             * Amount of victory points
             */
            amount?: number;
            characterId?: number;
        }>;
        /**
         * Top 100 ranking of pilots by victory points in the past day
         */
        yesterday: Array<{
            /**
             * Amount of victory points
             */
            amount?: number;
            characterId?: number;
        }>;
    };
}

export interface FwLeaderboardsCorporationsGet {
    /**
     * Top 10 rankings of corporations by number of kills from yesterday, last week and in total
     */
    kills: {
        /**
         * Top 10 ranking of corporations active in faction warfare by total kills. A corporation is considered "active" if they have participated in faction warfare in the past 14 days
         */
        activeTotal: Array<{
            /**
             * Amount of kills
             */
            amount?: number;
            corporationId?: number;
        }>;
        /**
         * Top 10 ranking of corporations by kills in the past week
         */
        lastWeek: Array<{
            /**
             * Amount of kills
             */
            amount?: number;
            corporationId?: number;
        }>;
        /**
         * Top 10 ranking of corporations by kills in the past day
         */
        yesterday: Array<{
            /**
             * Amount of kills
             */
            amount?: number;
            corporationId?: number;
        }>;
    };
    /**
     * Top 10 rankings of corporations by victory points from yesterday, last week and in total
     */
    victoryPoints: {
        /**
         * Top 10 ranking of corporations active in faction warfare by total victory points. A corporation is considered "active" if they have participated in faction warfare in the past 14 days
         */
        activeTotal: Array<{
            /**
             * Amount of victory points
             */
            amount?: number;
            corporationId?: number;
        }>;
        /**
         * Top 10 ranking of corporations by victory points in the past week
         */
        lastWeek: Array<{
            /**
             * Amount of victory points
             */
            amount?: number;
            corporationId?: number;
        }>;
        /**
         * Top 10 ranking of corporations by victory points in the past day
         */
        yesterday: Array<{
            /**
             * Amount of victory points
             */
            amount?: number;
            corporationId?: number;
        }>;
    };
}

export interface FwLeaderboardsGet {
    /**
     * Top 4 rankings of factions by number of kills from yesterday, last week and in total
     */
    kills: {
        /**
         * Top 4 ranking of factions active in faction warfare by total kills. A faction is considered "active" if they have participated in faction warfare in the past 14 days
         */
        activeTotal: Array<{
            /**
             * Amount of kills
             */
            amount?: number;
            factionId?: number;
        }>;
        /**
         * Top 4 ranking of factions by kills in the past week
         */
        lastWeek: Array<{
            /**
             * Amount of kills
             */
            amount?: number;
            factionId?: number;
        }>;
        /**
         * Top 4 ranking of factions by kills in the past day
         */
        yesterday: Array<{
            /**
             * Amount of kills
             */
            amount?: number;
            factionId?: number;
        }>;
    };
    /**
     * Top 4 rankings of factions by victory points from yesterday, last week and in total
     */
    victoryPoints: {
        /**
         * Top 4 ranking of factions active in faction warfare by total victory points. A faction is considered "active" if they have participated in faction warfare in the past 14 days
         */
        activeTotal: Array<{
            /**
             * Amount of victory points
             */
            amount?: number;
            factionId?: number;
        }>;
        /**
         * Top 4 ranking of factions by victory points in the past week
         */
        lastWeek: Array<{
            /**
             * Amount of victory points
             */
            amount?: number;
            factionId?: number;
        }>;
        /**
         * Top 4 ranking of factions by victory points in the past day
         */
        yesterday: Array<{
            /**
             * Amount of victory points
             */
            amount?: number;
            factionId?: number;
        }>;
    };
}

export type FwStatsGet = Array<{
    factionId: number;
    /**
     * Summary of kills against an enemy faction for the given faction
     */
    kills: {
        /**
         * Last week's total number of kills against enemy factions
         */
        lastWeek: number;
        /**
         * Total number of kills against enemy factions since faction warfare began
         */
        total: number;
        /**
         * Yesterday's total number of kills against enemy factions
         */
        yesterday: number;
    };
    /**
     * How many pilots fight for the given faction
     */
    pilots: number;
    /**
     * The number of solar systems controlled by the given faction
     */
    systemsControlled: number;
    /**
     * Summary of victory points gained for the given faction
     */
    victoryPoints: {
        /**
         * Last week's victory points gained
         */
        lastWeek: number;
        /**
         * Total victory points gained since faction warfare began
         */
        total: number;
        /**
         * Yesterday's victory points gained
         */
        yesterday: number;
    };
}>;

export type FwSystemsGet = Array<{
    contested: "captured" | "contested" | "uncontested" | "vulnerable";
    occupierFactionId: number;
    ownerFactionId: number;
    solarSystemId: number;
    victoryPoints: number;
    victoryPointsThreshold: number;
}>;

/**
 * List of factions at war
 */
export type FwWarsGet = Array<{
    /**
     * The faction ID of the enemy faction.
     */
    againstId: number;
    factionId: number;
}>;

export type GroupID = number;

export type IncursionsGet = Array<{
    /**
     * The constellation id in which this incursion takes place
     */
    constellationId: number;
    /**
     * The attacking faction's id
     */
    factionId: number;
    /**
     * Whether the final encounter has boss or not
     */
    hasBoss: boolean;
    /**
     * A list of infested solar system ids that are a part of this incursion
     */
    infestedSolarSystems: number[];
    /**
     * Influence of this incursion as a float from 0 to 1
     */
    influence: number;
    /**
     * Staging solar system for this incursion
     */
    stagingSolarSystemId: number;
    /**
     * The state of this incursion
     */
    state: "withdrawing" | "mobilizing" | "established";
    /**
     * The type of this incursion
     */
    type: string;
}>;

export type IndustryFacilitiesGet = Array<{
    /**
     * ID of the facility
     */
    facilityId: number;
    /**
     * Owner of the facility
     */
    ownerId: number;
    /**
     * Region ID where the facility is
     */
    regionId: number;
    /**
     * Solar system ID where the facility is
     */
    solarSystemId: number;
    /**
     * Tax imposed by the facility
     */
    tax?: number;
    /**
     * Type ID of the facility
     */
    typeId: number;
}>;

export type IndustrySystemsGet = Array<{
    costIndices: Array<{
        activity:
            | "copying"
            | "duplicating"
            | "invention"
            | "manufacturing"
            | "none"
            | "reaction"
            | "researching_material_efficiency"
            | "researching_technology"
            | "researching_time_efficiency"
            | "reverse_engineering";
        costIndex: number;
    }>;
    solarSystemId: number;
}>;

export type InsurancePricesGet = Array<{
    /**
     * A list of a available insurance levels for this ship type
     */
    levels: Array<{
        cost: number;
        /**
         * Localized insurance level
         */
        name: string;
        payout: number;
    }>;
    typeId: number;
}>;

export type ItemID = number;

export interface KillmailsKillmailIdKillmailHashGet {
    attackers: Array<{
        allianceId?: number;
        characterId?: number;
        corporationId?: number;
        damageDone: number;
        factionId?: number;
        /**
         * Was the attacker the one to achieve the final blow
         *
         */
        finalBlow: boolean;
        /**
         * Security status for the attacker
         *
         */
        securityStatus: number;
        /**
         * What ship was the attacker flying
         *
         */
        shipTypeId?: number;
        /**
         * What weapon was used by the attacker for the kill
         *
         */
        weaponTypeId?: number;
    }>;
    /**
     * ID of the killmail
     */
    killmailId: number;
    /**
     * Time that the victim was killed and the killmail generated
     *
     */
    killmailTime: string;
    /**
     * Moon if the kill took place at one
     */
    moonId?: number;
    /**
     * Solar system that the kill took place in
     *
     */
    solarSystemId: number;
    victim: {
        allianceId?: number;
        characterId?: number;
        corporationId?: number;
        /**
         * How much total damage was taken by the victim
         *
         */
        damageTaken: number;
        factionId?: number;
        items?: Array<{
            /**
             * Flag for the location of the item
             *
             */
            flag: number;
            itemTypeId: number;
            items?: Array<{
                flag: number;
                itemTypeId: number;
                quantityDestroyed?: number;
                quantityDropped?: number;
                singleton: number;
            }>;
            /**
             * How many of the item were destroyed if any
             *
             */
            quantityDestroyed?: number;
            /**
             * How many of the item were dropped if any
             *
             */
            quantityDropped?: number;
            singleton: number;
        }>;
        /**
         * Coordinates of the victim in Cartesian space relative to the Sun
         *
         */
        position?: {
            x: number;
            y: number;
            z: number;
        };
        /**
         * The ship that the victim was piloting and was destroyed
         *
         */
        shipTypeId: number;
    };
    /**
     * War if the killmail is generated in relation to an official war
     *
     */
    warId?: number;
}

export type LoyaltyStoresCorporationIdOffersGet = Array<{
    /**
     * Analysis kredit cost
     */
    akCost?: number;
    iskCost: number;
    lpCost: number;
    offerId: number;
    quantity: number;
    requiredItems: Array<{
        quantity: number;
        typeId: number;
    }>;
    typeId: number;
}>;

export type MarketsGroupsGet = number[];

export interface MarketsGroupsMarketGroupIdGet {
    description: string;
    marketGroupId: number;
    name: string;
    parentGroupId?: number;
    types: number[];
}

export type MarketsPricesGet = Array<{
    adjustedPrice?: number;
    averagePrice?: number;
    typeId: number;
}>;

export type MarketsRegionIdHistoryGet = Array<{
    average: number;
    /**
     * The date of this historical statistic entry
     */
    date: string;
    highest: number;
    lowest: number;
    /**
     * Total number of orders happened that day
     */
    orderCount: number;
    /**
     * Total
     */
    volume: number;
}>;

export type MarketsRegionIdOrdersGet = Array<{
    duration: number;
    isBuyOrder: boolean;
    issued: string;
    locationId: number;
    minVolume: number;
    orderId: number;
    price: number;
    range:
        | "station"
        | "region"
        | "solarsystem"
        | "1"
        | "2"
        | "3"
        | "4"
        | "5"
        | "10"
        | "20"
        | "30"
        | "40";
    /**
     * The solar system this order was placed
     */
    systemId: number;
    typeId: number;
    volumeRemain: number;
    volumeTotal: number;
}>;

export type MarketsRegionIdTypesGet = number[];

export type MarketsStructuresStructureIdGet = Array<{
    duration: number;
    isBuyOrder: boolean;
    issued: string;
    locationId: number;
    minVolume: number;
    orderId: number;
    price: number;
    range:
        | "station"
        | "region"
        | "solarsystem"
        | "1"
        | "2"
        | "3"
        | "4"
        | "5"
        | "10"
        | "20"
        | "30"
        | "40";
    typeId: number;
    volumeRemain: number;
    volumeTotal: number;
}>;

export interface MetaChangelog {
    /**
     * Per date, list changes for that date
     */
    changelog: Record<string, MetaChangelogEntry[]>;
}

export interface MetaChangelogEntry {
    /**
     * Compatibility date of the route
     */
    compatibilityDate: CompatibilityDate;
    /**
     * Description
     */
    description: string;
    /**
     * Whether this is a breaking change
     */
    isBreaking: boolean;
    /**
     * HTTP method of the route
     */
    method: "GET" | "POST" | "PUT" | "DELETE";
    /**
     * Path of the route
     */
    path: string;
}

export interface MetaCompatibilityDates {
    /**
     * List of compatibility dates.
     */
    compatibilityDates: CompatibilityDate[];
}

export type PlanetID = number;

export type RaceID = number;

export type RegionID = number;

/**
 * Solar systems in route
 */
export type RouteOriginDestinationGet = number[];

/**
 * Ship tree group identifier.
 */
export type ShipTreeGroupID = number;

export type SolarSystemID = number;

export type SovereigntyCampaignsGet = Array<{
    /**
     * Score for all attacking parties, only present in Defense Events.
     *
     */
    attackersScore?: number;
    /**
     * Unique ID for this campaign.
     */
    campaignId: number;
    /**
     * The constellation in which the campaign will take place.
     *
     */
    constellationId: number;
    /**
     * Defending alliance, only present in Defense Events
     *
     */
    defenderId?: number;
    /**
     * Score for the defending alliance, only present in Defense Events.
     *
     */
    defenderScore?: number;
    /**
     * Type of event this campaign is for. tcu_defense, ihub_defense and station_defense are referred to as "Defense Events", station_freeport as "Freeport Events".
     *
     */
    eventType:
        | "tcu_defense"
        | "ihub_defense"
        | "station_defense"
        | "station_freeport";
    /**
     * Alliance participating and their respective scores, only present in Freeport Events.
     *
     */
    participants?: Array<{
        allianceId: number;
        score: number;
    }>;
    /**
     * The solar system the structure is located in.
     *
     */
    solarSystemId: number;
    /**
     * Time the event is scheduled to start.
     *
     */
    startTime: string;
    /**
     * The structure item ID that is related to this campaign.
     *
     */
    structureId: number;
}>;

export type SovereigntyMapGet = Array<{
    allianceId?: number;
    corporationId?: number;
    factionId?: number;
    systemId: number;
}>;

export type SovereigntyStructuresGet = Array<{
    /**
     * The alliance that owns the structure.
     *
     */
    allianceId: number;
    /**
     * Solar system in which the structure is located.
     *
     */
    solarSystemId: number;
    /**
     * Unique item ID for this structure.
     */
    structureId: number;
    /**
     * A reference to the type of structure this is.
     *
     */
    structureTypeId: number;
    /**
     * The occupancy level for the next or current vulnerability window. This takes into account all development indexes and capital system bonuses. Also known as Activity Defense Multiplier from in the client. It increases the time that attackers must spend using their entosis links on the structure.
     *
     */
    vulnerabilityOccupancyLevel?: number;
    /**
     * The time at which the next or current vulnerability window ends. At the end of a vulnerability window the next window is recalculated and locked in along with the vulnerabilityOccupancyLevel. If the structure is not in 100% entosis control of the defender, it will go in to 'overtime' and stay vulnerable for as long as that situation persists. Only once the defenders have 100% entosis control and has the vulnerableEndTime passed does the vulnerability interval expire and a new one is calculated.
     *
     */
    vulnerableEndTime?: string;
    /**
     * The next time at which the structure will become vulnerable. Or the start time of the current window if current time is between this and vulnerableEndTime.
     *
     */
    vulnerableStartTime?: string;
}>;

export type StationID = number;

export interface StatusGet {
    /**
     * Current online player count
     */
    players: number;
    /**
     * Running version as string
     */
    serverVersion: string;
    /**
     * Server start timestamp
     */
    startTime: string;
    /**
     * If the server is in VIP mode
     */
    vip?: boolean;
}

export type TypeID = number;

export type UUID = string;

export type UniverseAncestriesGet = Array<{
    /**
     * The bloodline associated with this ancestry
     */
    bloodlineId: number;
    description: string;
    iconId?: number;
    id: number;
    name: string;
    shortDescription?: string;
}>;

export interface UniverseAsteroidBeltsAsteroidBeltIdGet {
    name: string;
    position: {
        x: number;
        y: number;
        z: number;
    };
    /**
     * The solar system this asteroid belt is in
     */
    systemId: number;
}

export type UniverseBloodlinesGet = Array<{
    bloodlineId: number;
    charisma: number;
    corporationId: number;
    description: string;
    intelligence: number;
    memory: number;
    name: string;
    perception: number;
    raceId: number;
    shipTypeId: number;
    willpower: number;
}>;

export interface UniverseCategoriesCategoryIdGet {
    categoryId: number;
    groups: number[];
    name: string;
    published: boolean;
}

export type UniverseCategoriesGet = number[];

export interface UniverseConstellationsConstellationIdGet {
    constellationId: number;
    name: string;
    position: {
        x: number;
        y: number;
        z: number;
    };
    /**
     * The region this constellation is in
     */
    regionId: number;
    systems: number[];
}

export type UniverseConstellationsGet = number[];

export type UniverseFactionsGet = Array<{
    corporationId?: number;
    description: string;
    factionId: number;
    isUnique: boolean;
    militiaCorporationId?: number;
    name: string;
    sizeFactor: number;
    solarSystemId?: number;
    stationCount: number;
    stationSystemCount: number;
}>;

export type UniverseGraphicsGet = number[];

export interface UniverseGraphicsGraphicIdGet {
    collisionFile?: string;
    graphicFile?: string;
    graphicId: number;
    iconFolder?: string;
    sofDna?: string;
    sofFationName?: string;
    sofHullName?: string;
    sofRaceName?: string;
}

export type UniverseGroupsGet = number[];

export interface UniverseGroupsGroupIdGet {
    categoryId: number;
    groupId: number;
    name: string;
    published: boolean;
    types: number[];
}

export interface UniverseIdsPost {
    agents?: Array<{
        id?: number;
        name?: string;
    }>;
    alliances?: Array<{
        id?: number;
        name?: string;
    }>;
    characters?: Array<{
        id?: number;
        name?: string;
    }>;
    constellations?: Array<{
        id?: number;
        name?: string;
    }>;
    corporations?: Array<{
        id?: number;
        name?: string;
    }>;
    factions?: Array<{
        id?: number;
        name?: string;
    }>;
    inventoryTypes?: Array<{
        id?: number;
        name?: string;
    }>;
    regions?: Array<{
        id?: number;
        name?: string;
    }>;
    stations?: Array<{
        id?: number;
        name?: string;
    }>;
    systems?: Array<{
        id?: number;
        name?: string;
    }>;
}

export interface UniverseMoonsMoonIdGet {
    moonId: number;
    name: string;
    position: {
        x: number;
        y: number;
        z: number;
    };
    /**
     * The solar system this moon is in
     */
    systemId: number;
}

export type UniverseNamesPost = Array<{
    category:
        | "alliance"
        | "character"
        | "constellation"
        | "corporation"
        | "inventory_type"
        | "region"
        | "solar_system"
        | "station"
        | "faction";
    id: number;
    name: string;
}>;

export interface UniversePlanetsPlanetIdGet {
    name: string;
    planetId: number;
    position: {
        x: number;
        y: number;
        z: number;
    };
    /**
     * The solar system this planet is in
     */
    systemId: number;
    typeId: number;
}

export type UniverseRacesGet = Array<{
    /**
     * The alliance generally associated with this race
     */
    allianceId: number;
    description: string;
    name: string;
    raceId: number;
}>;

export type UniverseRegionsGet = number[];

export interface UniverseRegionsRegionIdGet {
    constellations: number[];
    description?: string;
    name: string;
    regionId: number;
}

export interface UniverseSchematicsSchematicIdGet {
    /**
     * Time in seconds to process a run
     */
    cycleTime: number;
    schematicName: string;
}

export interface UniverseStargatesStargateIdGet {
    destination: {
        /**
         * The stargate this stargate connects to
         */
        stargateId: number;
        /**
         * The solar system this stargate connects to
         */
        systemId: number;
    };
    name: string;
    position: {
        x: number;
        y: number;
        z: number;
    };
    stargateId: number;
    /**
     * The solar system this stargate is in
     */
    systemId: number;
    typeId: number;
}

export interface UniverseStarsStarIdGet {
    /**
     * Age of star in years
     */
    age: number;
    luminosity: number;
    name: string;
    radius: number;
    solarSystemId: number;
    spectralClass:
        | "K2 V"
        | "K4 V"
        | "G2 V"
        | "G8 V"
        | "M7 V"
        | "K7 V"
        | "M2 V"
        | "K5 V"
        | "M3 V"
        | "G0 V"
        | "G7 V"
        | "G3 V"
        | "F9 V"
        | "G5 V"
        | "F6 V"
        | "K8 V"
        | "K9 V"
        | "K6 V"
        | "G9 V"
        | "G6 V"
        | "G4 VI"
        | "G4 V"
        | "F8 V"
        | "F2 V"
        | "F1 V"
        | "K3 V"
        | "F0 VI"
        | "G1 VI"
        | "G0 VI"
        | "K1 V"
        | "M4 V"
        | "M1 V"
        | "M6 V"
        | "M0 V"
        | "K2 IV"
        | "G2 VI"
        | "K0 V"
        | "K5 IV"
        | "F5 VI"
        | "G6 VI"
        | "F6 VI"
        | "F2 IV"
        | "G3 VI"
        | "M8 V"
        | "F1 VI"
        | "K1 IV"
        | "F7 V"
        | "G5 VI"
        | "M5 V"
        | "G7 VI"
        | "F5 V"
        | "F4 VI"
        | "F8 VI"
        | "K3 IV"
        | "F4 IV"
        | "F0 V"
        | "G7 IV"
        | "G8 VI"
        | "F2 VI"
        | "F4 V"
        | "F7 VI"
        | "F3 V"
        | "G1 V"
        | "G9 VI"
        | "F3 IV"
        | "F9 VI"
        | "M9 V"
        | "K0 IV"
        | "F1 IV"
        | "G4 IV"
        | "F3 VI"
        | "K4 IV"
        | "G5 IV"
        | "G3 IV"
        | "G1 IV"
        | "K7 IV"
        | "G0 IV"
        | "K6 IV"
        | "K9 IV"
        | "G2 IV"
        | "F9 IV"
        | "F0 IV"
        | "K8 IV"
        | "G8 IV"
        | "F6 IV"
        | "F5 IV"
        | "A0"
        | "A0IV"
        | "A0IV2";
    temperature: number;
    typeId: number;
}

export interface UniverseStationsStationIdGet {
    maxDockableShipVolume: number;
    name: string;
    officeRentalCost: number;
    /**
     * ID of the corporation that controls this station
     */
    owner?: number;
    position: {
        x: number;
        y: number;
        z: number;
    };
    raceId?: number;
    reprocessingEfficiency: number;
    reprocessingStationsTake: number;
    services: Array<
        | "bounty-missions"
        | "assasination-missions"
        | "courier-missions"
        | "interbus"
        | "reprocessing-plant"
        | "refinery"
        | "market"
        | "black-market"
        | "stock-exchange"
        | "cloning"
        | "surgery"
        | "dna-therapy"
        | "repair-facilities"
        | "factory"
        | "labratory"
        | "gambling"
        | "fitting"
        | "paintshop"
        | "news"
        | "storage"
        | "insurance"
        | "docking"
        | "office-rental"
        | "jump-clone-facility"
        | "loyalty-point-store"
        | "navy-offices"
        | "security-offices"
    >;
    stationId: number;
    /**
     * The solar system this station is in
     */
    systemId: number;
    typeId: number;
}

export type UniverseStructuresGet = number[];

export interface UniverseStructuresStructureIdGet {
    /**
     * The full name of the structure
     */
    name: string;
    /**
     * The ID of the corporation who owns this particular structure
     */
    ownerId: number;
    /**
     * Coordinates of the structure in Cartesian space relative to the Sun, in metres.
     *
     */
    position?: {
        x: number;
        y: number;
        z: number;
    };
    solarSystemId: number;
    typeId?: number;
}

export type UniverseSystemJumpsGet = Array<{
    shipJumps: number;
    systemId: number;
}>;

export type UniverseSystemKillsGet = Array<{
    /**
     * Number of NPC ships killed in this system
     */
    npcKills: number;
    /**
     * Number of pods killed in this system
     */
    podKills: number;
    /**
     * Number of player ships killed in this system
     */
    shipKills: number;
    systemId: number;
}>;

export type UniverseSystemsGet = number[];

export interface UniverseSystemsSystemIdGet {
    /**
     * The constellation this solar system is in
     */
    constellationId: number;
    name: string;
    planets?: Array<{
        asteroidBelts?: number[];
        moons?: number[];
        planetId: number;
    }>;
    position: {
        x: number;
        y: number;
        z: number;
    };
    securityClass?: string;
    securityStatus: number;
    starId?: number;
    stargates?: number[];
    stations?: number[];
    systemId: number;
}

export type UniverseTypesGet = number[];

export interface UniverseTypesTypeIdGet {
    capacity?: number;
    description: string;
    dogmaAttributes?: Array<{
        attributeId: number;
        value: number;
    }>;
    dogmaEffects?: Array<{
        effectId: number;
        isDefault: boolean;
    }>;
    graphicId?: number;
    groupId: number;
    iconId?: number;
    /**
     * This only exists for types that can be put on the market
     */
    marketGroupId?: number;
    mass?: number;
    name: string;
    packagedVolume?: number;
    portionSize?: number;
    published: boolean;
    radius?: number;
    typeId: number;
    volume?: number;
}

export type WarsGet = number[];

export interface WarsWarIdGet {
    /**
     * The aggressor corporation or alliance that declared this war, only contains either corporation_id or alliance_id
     */
    aggressor: {
        /**
         * Alliance ID if and only if the aggressor is an alliance
         */
        allianceId?: number;
        /**
         * Corporation ID if and only if the aggressor is a corporation
         */
        corporationId?: number;
        /**
         * ISK value of ships the aggressor has destroyed
         */
        iskDestroyed: number;
        /**
         * The number of ships the aggressor has killed
         */
        shipsKilled: number;
    };
    /**
     * allied corporations or alliances, each object contains either corporation_id or alliance_id
     */
    allies?: Array<{
        /**
         * Alliance ID if and only if this ally is an alliance
         */
        allianceId?: number;
        /**
         * Corporation ID if and only if this ally is a corporation
         */
        corporationId?: number;
    }>;
    /**
     * Time that the war was declared
     */
    declared: string;
    /**
     * The defending corporation or alliance that declared this war, only contains either corporation_id or alliance_id
     */
    defender: {
        /**
         * Alliance ID if and only if the defender is an alliance
         */
        allianceId?: number;
        /**
         * Corporation ID if and only if the defender is a corporation
         */
        corporationId?: number;
        /**
         * ISK value of ships the defender has killed
         */
        iskDestroyed: number;
        /**
         * The number of ships the defender has killed
         */
        shipsKilled: number;
    };
    /**
     * Time the war ended and shooting was no longer allowed
     */
    finished?: string;
    /**
     * ID of the specified war
     */
    id: number;
    /**
     * Was the war declared mutual by both parties
     */
    mutual: boolean;
    /**
     * Is the war currently open for allies or not
     */
    openForAllies: boolean;
    /**
     * Time the war was retracted but both sides could still shoot each other
     */
    retracted?: string;
    /**
     * Time when the war started and both sides could shoot each other
     */
    started?: string;
}

export type WarsWarIdKillmailsGet = Array<{
    /**
     * A hash of this killmail
     */
    killmailHash: string;
    /**
     * ID of this killmail
     */
    killmailId: number;
}>;

export class GeneratedApi {
    private readonly client: EsiRequester;

    public constructor(client: EsiRequester) {
        this.client = client;
    }

    /**
     * List all active player alliances
     *
     * @method GET /alliances
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getAlliances(): Promise<AlliancesGet> {
        return this.client.request<AlliancesGet>({
            method: "GET",
            path: `/alliances`,
            requiresAuth: false,
        });
    }

    /**
     * Public information about an alliance
     *
     * @param allianceId - The ID of the alliance
     * @method GET /alliances/{alliance_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getAlliancesAllianceId(
        allianceId: AllianceID,
    ): Promise<AllianceDetail> {
        return this.client.request<AllianceDetail>({
            method: "GET",
            path: `/alliances/${allianceId}`,
            requiresAuth: false,
        });
    }

    /**
     * Return contacts of an alliance
     *
     * @param allianceId - The ID of the alliance
     * @param page
     * @method GET /alliances/{alliance_id}/contacts
     * @remarks Rate Limit: alliance-social | Auth Required: Yes (esi-alliances.read_contacts.v1)
     */
    public async getAlliancesAllianceIdContacts(
        allianceId: AllianceID,
        page?: number,
    ): Promise<AlliancesAllianceIdContactsGet> {
        return this.client.request<AlliancesAllianceIdContactsGet>({
            method: "GET",
            path: `/alliances/${allianceId}/contacts`,
            requiresAuth: true,
            scopes: ["esi-alliances.read_contacts.v1"],
            query: { page: page },
            rateLimitGroup: "alliance-social",
        });
    }

    /**
     * Return custom labels for an alliance's contacts
     *
     * @param allianceId - The ID of the alliance
     * @method GET /alliances/{alliance_id}/contacts/labels
     * @remarks Rate Limit: alliance-social | Auth Required: Yes (esi-alliances.read_contacts.v1)
     */
    public async getAlliancesAllianceIdContactsLabels(
        allianceId: AllianceID,
    ): Promise<AlliancesAllianceIdContactsLabelsGet> {
        return this.client.request<AlliancesAllianceIdContactsLabelsGet>({
            method: "GET",
            path: `/alliances/${allianceId}/contacts/labels`,
            requiresAuth: true,
            scopes: ["esi-alliances.read_contacts.v1"],
            rateLimitGroup: "alliance-social",
        });
    }

    /**
     * List all current member corporations of an alliance
     *
     * @param allianceId - The ID of the alliance
     * @method GET /alliances/{alliance_id}/corporations
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getAlliancesAllianceIdCorporations(
        allianceId: AllianceID,
    ): Promise<AlliancesAllianceIdCorporationsGet> {
        return this.client.request<AlliancesAllianceIdCorporationsGet>({
            method: "GET",
            path: `/alliances/${allianceId}/corporations`,
            requiresAuth: false,
        });
    }

    /**
     * Get the icon urls for a alliance
     *
     * This route expires daily at 11:05
     *
     * @param allianceId - The ID of the alliance
     * @method GET /alliances/{alliance_id}/icons
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getAlliancesAllianceIdIcons(
        allianceId: AllianceID,
    ): Promise<AlliancesAllianceIdIconsGet> {
        return this.client.request<AlliancesAllianceIdIconsGet>({
            method: "GET",
            path: `/alliances/${allianceId}/icons`,
            requiresAuth: false,
        });
    }

    /**
     * Bulk lookup of character IDs to corporation, alliance and faction
     *
     * @method POST /characters/affiliation
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async postCharactersAffiliation(
        body: number[],
    ): Promise<CharactersAffiliationPost> {
        return this.client.request<CharactersAffiliationPost>({
            method: "POST",
            path: `/characters/affiliation`,
            requiresAuth: false,
            body,
        });
    }

    /**
     * Public information about a character
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getCharactersCharacterId(
        characterId: CharacterID,
    ): Promise<CharactersDetail> {
        return this.client.request<CharactersDetail>({
            method: "GET",
            path: `/characters/${characterId}`,
            requiresAuth: false,
        });
    }

    /**
     * Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate)
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/agents_research
     * @remarks Rate Limit: char-industry | Auth Required: Yes (esi-characters.read_agents_research.v1)
     */
    public async getCharactersCharacterIdAgentsResearch(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdAgentsResearchGet> {
        return this.client.request<CharactersCharacterIdAgentsResearchGet>({
            method: "GET",
            path: `/characters/${characterId}/agents_research`,
            requiresAuth: true,
            scopes: ["esi-characters.read_agents_research.v1"],
            rateLimitGroup: "char-industry",
        });
    }

    /**
     * Return a list of the characters assets
     *
     * @param characterId - The ID of the character
     * @param page
     * @method GET /characters/{character_id}/assets
     * @remarks Rate Limit: char-asset | Auth Required: Yes (esi-assets.read_assets.v1)
     */
    public async getCharactersCharacterIdAssets(
        characterId: CharacterID,
        page?: number,
    ): Promise<CharactersCharacterIdAssetsGet> {
        return this.client.request<CharactersCharacterIdAssetsGet>({
            method: "GET",
            path: `/characters/${characterId}/assets`,
            requiresAuth: true,
            scopes: ["esi-assets.read_assets.v1"],
            query: { page: page },
            rateLimitGroup: "char-asset",
        });
    }

    /**
     * Return locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
     *
     * @param characterId - The ID of the character
     * @method POST /characters/{character_id}/assets/locations
     * @remarks Rate Limit: char-asset | Auth Required: Yes (esi-assets.read_assets.v1)
     */
    public async postCharactersCharacterIdAssetsLocations(
        characterId: CharacterID,
        body: number[],
    ): Promise<CharactersCharacterIdAssetsLocationsPost> {
        return this.client.request<CharactersCharacterIdAssetsLocationsPost>({
            method: "POST",
            path: `/characters/${characterId}/assets/locations`,
            requiresAuth: true,
            scopes: ["esi-assets.read_assets.v1"],
            body,
            rateLimitGroup: "char-asset",
        });
    }

    /**
     * Return names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships.
     *
     * @param characterId - The ID of the character
     * @method POST /characters/{character_id}/assets/names
     * @remarks Rate Limit: char-asset | Auth Required: Yes (esi-assets.read_assets.v1)
     */
    public async postCharactersCharacterIdAssetsNames(
        characterId: CharacterID,
        body: number[],
    ): Promise<CharactersCharacterIdAssetsNamesPost> {
        return this.client.request<CharactersCharacterIdAssetsNamesPost>({
            method: "POST",
            path: `/characters/${characterId}/assets/names`,
            requiresAuth: true,
            scopes: ["esi-assets.read_assets.v1"],
            body,
            rateLimitGroup: "char-asset",
        });
    }

    /**
     * Return attributes of a character
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/attributes
     * @remarks Rate Limit: char-detail | Auth Required: Yes (esi-skills.read_skills.v1)
     */
    public async getCharactersCharacterIdAttributes(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdAttributesGet> {
        return this.client.request<CharactersCharacterIdAttributesGet>({
            method: "GET",
            path: `/characters/${characterId}/attributes`,
            requiresAuth: true,
            scopes: ["esi-skills.read_skills.v1"],
            rateLimitGroup: "char-detail",
        });
    }

    /**
     * Return a list of blueprints the character owns
     *
     * @param characterId - The ID of the character
     * @param page
     * @method GET /characters/{character_id}/blueprints
     * @remarks Rate Limit: char-industry | Auth Required: Yes (esi-characters.read_blueprints.v1)
     */
    public async getCharactersCharacterIdBlueprints(
        characterId: CharacterID,
        page?: number,
    ): Promise<CharactersCharacterIdBlueprintsGet> {
        return this.client.request<CharactersCharacterIdBlueprintsGet>({
            method: "GET",
            path: `/characters/${characterId}/blueprints`,
            requiresAuth: true,
            scopes: ["esi-characters.read_blueprints.v1"],
            query: { page: page },
            rateLimitGroup: "char-industry",
        });
    }

    /**
     * Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event
     *
     * @param characterId - The ID of the character
     * @param fromEvent
     * @method GET /characters/{character_id}/calendar
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-calendar.read_calendar_events.v1)
     */
    public async getCharactersCharacterIdCalendar(
        characterId: CharacterID,
        fromEvent?: number,
    ): Promise<CharactersCharacterIdCalendarGet> {
        return this.client.request<CharactersCharacterIdCalendarGet>({
            method: "GET",
            path: `/characters/${characterId}/calendar`,
            requiresAuth: true,
            scopes: ["esi-calendar.read_calendar_events.v1"],
            query: { from_event: fromEvent },
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Get all the information for a specific event
     *
     * @param characterId - The ID of the character
     * @param eventId
     * @method GET /characters/{character_id}/calendar/{event_id}
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-calendar.read_calendar_events.v1)
     */
    public async getCharactersCharacterIdCalendarEventId(
        characterId: CharacterID,
        eventId: number,
    ): Promise<CharactersCharacterIdCalendarEventIdGet> {
        return this.client.request<CharactersCharacterIdCalendarEventIdGet>({
            method: "GET",
            path: `/characters/${characterId}/calendar/${eventId}`,
            requiresAuth: true,
            scopes: ["esi-calendar.read_calendar_events.v1"],
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Set your response status to an event
     *
     * @param characterId - The ID of the character
     * @param eventId
     * @method PUT /characters/{character_id}/calendar/{event_id}
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-calendar.respond_calendar_events.v1)
     */
    public async putCharactersCharacterIdCalendarEventId(
        characterId: CharacterID,
        eventId: number,
        body: {
            response: "accepted" | "declined" | "tentative";
        },
    ): Promise<void> {
        return this.client.request<void>({
            method: "PUT",
            path: `/characters/${characterId}/calendar/${eventId}`,
            requiresAuth: true,
            scopes: ["esi-calendar.respond_calendar_events.v1"],
            body,
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Get all invited attendees for a given event
     *
     * @param characterId - The ID of the character
     * @param eventId
     * @method GET /characters/{character_id}/calendar/{event_id}/attendees
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-calendar.read_calendar_events.v1)
     */
    public async getCharactersCharacterIdCalendarEventIdAttendees(
        characterId: CharacterID,
        eventId: number,
    ): Promise<CharactersCharacterIdCalendarEventIdAttendeesGet> {
        return this.client.request<CharactersCharacterIdCalendarEventIdAttendeesGet>(
            {
                method: "GET",
                path: `/characters/${characterId}/calendar/${eventId}/attendees`,
                requiresAuth: true,
                scopes: ["esi-calendar.read_calendar_events.v1"],
                rateLimitGroup: "char-social",
            },
        );
    }

    /**
     * A list of the character's clones
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/clones
     * @remarks Rate Limit: char-location | Auth Required: Yes (esi-clones.read_clones.v1)
     */
    public async getCharactersCharacterIdClones(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdClonesGet> {
        return this.client.request<CharactersCharacterIdClonesGet>({
            method: "GET",
            path: `/characters/${characterId}/clones`,
            requiresAuth: true,
            scopes: ["esi-clones.read_clones.v1"],
            rateLimitGroup: "char-location",
        });
    }

    /**
     * Bulk delete contacts
     *
     * @param characterId - The ID of the character
     * @param contactIds
     * @method DELETE /characters/{character_id}/contacts
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-characters.write_contacts.v1)
     */
    public async deleteCharactersCharacterIdContacts(
        characterId: CharacterID,
        contactIds: number[],
    ): Promise<void> {
        return this.client.request<void>({
            method: "DELETE",
            path: `/characters/${characterId}/contacts`,
            requiresAuth: true,
            scopes: ["esi-characters.write_contacts.v1"],
            query: { contact_ids: contactIds },
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Return contacts of a character
     *
     * @param characterId - The ID of the character
     * @param page
     * @method GET /characters/{character_id}/contacts
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-characters.read_contacts.v1)
     */
    public async getCharactersCharacterIdContacts(
        characterId: CharacterID,
        page?: number,
    ): Promise<CharactersCharacterIdContactsGet> {
        return this.client.request<CharactersCharacterIdContactsGet>({
            method: "GET",
            path: `/characters/${characterId}/contacts`,
            requiresAuth: true,
            scopes: ["esi-characters.read_contacts.v1"],
            query: { page: page },
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Bulk add contacts with same settings
     *
     * @param characterId - The ID of the character
     * @param labelIds
     * @param standing
     * @param watched
     * @method POST /characters/{character_id}/contacts
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-characters.write_contacts.v1)
     */
    public async postCharactersCharacterIdContacts(
        characterId: CharacterID,
        standing: number,
        body: number[],
        labelIds?: number[],
        watched?: boolean,
    ): Promise<CharactersCharacterIdContactsPost> {
        return this.client.request<CharactersCharacterIdContactsPost>({
            method: "POST",
            path: `/characters/${characterId}/contacts`,
            requiresAuth: true,
            scopes: ["esi-characters.write_contacts.v1"],
            query: {
                label_ids: labelIds,
                standing: standing,
                watched: watched,
            },
            body,
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Bulk edit contacts with same settings
     *
     * @param characterId - The ID of the character
     * @param labelIds
     * @param standing
     * @param watched
     * @method PUT /characters/{character_id}/contacts
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-characters.write_contacts.v1)
     */
    public async putCharactersCharacterIdContacts(
        characterId: CharacterID,
        standing: number,
        body: number[],
        labelIds?: number[],
        watched?: boolean,
    ): Promise<void> {
        return this.client.request<void>({
            method: "PUT",
            path: `/characters/${characterId}/contacts`,
            requiresAuth: true,
            scopes: ["esi-characters.write_contacts.v1"],
            query: {
                label_ids: labelIds,
                standing: standing,
                watched: watched,
            },
            body,
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Return custom labels for a character's contacts
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/contacts/labels
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-characters.read_contacts.v1)
     */
    public async getCharactersCharacterIdContactsLabels(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdContactsLabelsGet> {
        return this.client.request<CharactersCharacterIdContactsLabelsGet>({
            method: "GET",
            path: `/characters/${characterId}/contacts/labels`,
            requiresAuth: true,
            scopes: ["esi-characters.read_contacts.v1"],
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
     *
     * @param characterId - The ID of the character
     * @param page
     * @method GET /characters/{character_id}/contracts
     * @remarks Rate Limit: char-contract | Auth Required: Yes (esi-contracts.read_character_contracts.v1)
     */
    public async getCharactersCharacterIdContracts(
        characterId: CharacterID,
        page?: number,
    ): Promise<CharactersCharacterIdContractsGet> {
        return this.client.request<CharactersCharacterIdContractsGet>({
            method: "GET",
            path: `/characters/${characterId}/contracts`,
            requiresAuth: true,
            scopes: ["esi-contracts.read_character_contracts.v1"],
            query: { page: page },
            rateLimitGroup: "char-contract",
        });
    }

    /**
     * Lists bids on a particular auction contract
     *
     * @param characterId - The ID of the character
     * @param contractId
     * @method GET /characters/{character_id}/contracts/{contract_id}/bids
     * @remarks Rate Limit: char-contract | Auth Required: Yes (esi-contracts.read_character_contracts.v1)
     */
    public async getCharactersCharacterIdContractsContractIdBids(
        characterId: CharacterID,
        contractId: number,
    ): Promise<CharactersCharacterIdContractsContractIdBidsGet> {
        return this.client.request<CharactersCharacterIdContractsContractIdBidsGet>(
            {
                method: "GET",
                path: `/characters/${characterId}/contracts/${contractId}/bids`,
                requiresAuth: true,
                scopes: ["esi-contracts.read_character_contracts.v1"],
                rateLimitGroup: "char-contract",
            },
        );
    }

    /**
     * Lists items of a particular contract
     *
     * @param characterId - The ID of the character
     * @param contractId
     * @method GET /characters/{character_id}/contracts/{contract_id}/items
     * @remarks Rate Limit: char-contract | Auth Required: Yes (esi-contracts.read_character_contracts.v1)
     */
    public async getCharactersCharacterIdContractsContractIdItems(
        characterId: CharacterID,
        contractId: number,
    ): Promise<CharactersCharacterIdContractsContractIdItemsGet> {
        return this.client.request<CharactersCharacterIdContractsContractIdItemsGet>(
            {
                method: "GET",
                path: `/characters/${characterId}/contracts/${contractId}/items`,
                requiresAuth: true,
                scopes: ["esi-contracts.read_character_contracts.v1"],
                rateLimitGroup: "char-contract",
            },
        );
    }

    /**
     * Get a list of all the corporations a character has been a member of
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/corporationhistory
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getCharactersCharacterIdCorporationhistory(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdCorporationhistoryGet> {
        return this.client.request<CharactersCharacterIdCorporationhistoryGet>({
            method: "GET",
            path: `/characters/${characterId}/corporationhistory`,
            requiresAuth: false,
        });
    }

    /**
     * Takes a source character ID in the url and a set of target character ID's in the body, returns a CSPA charge cost
     *
     * @param characterId - The ID of the character
     * @method POST /characters/{character_id}/cspa
     * @remarks Rate Limit: char-detail | Auth Required: Yes (esi-characters.read_contacts.v1)
     */
    public async postCharactersCharacterIdCspa(
        characterId: CharacterID,
        body: number[],
    ): Promise<CharactersCharacterIdCspaPost> {
        return this.client.request<CharactersCharacterIdCspaPost>({
            method: "POST",
            path: `/characters/${characterId}/cspa`,
            requiresAuth: true,
            scopes: ["esi-characters.read_contacts.v1"],
            body,
            rateLimitGroup: "char-detail",
        });
    }

    /**
     * Return a character's jump activation and fatigue information
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/fatigue
     * @remarks Rate Limit: char-location | Auth Required: Yes (esi-characters.read_fatigue.v1)
     */
    public async getCharactersCharacterIdFatigue(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdFatigueGet> {
        return this.client.request<CharactersCharacterIdFatigueGet>({
            method: "GET",
            path: `/characters/${characterId}/fatigue`,
            requiresAuth: true,
            scopes: ["esi-characters.read_fatigue.v1"],
            rateLimitGroup: "char-location",
        });
    }

    /**
     * Return fittings of a character
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/fittings
     * @remarks Rate Limit: fitting | Auth Required: Yes (esi-fittings.read_fittings.v1)
     */
    public async getCharactersCharacterIdFittings(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdFittingsGet> {
        return this.client.request<CharactersCharacterIdFittingsGet>({
            method: "GET",
            path: `/characters/${characterId}/fittings`,
            requiresAuth: true,
            scopes: ["esi-fittings.read_fittings.v1"],
            rateLimitGroup: "fitting",
        });
    }

    /**
     * Save a new fitting for a character
     *
     * @param characterId - The ID of the character
     * @method POST /characters/{character_id}/fittings
     * @remarks Rate Limit: fitting | Auth Required: Yes (esi-fittings.write_fittings.v1)
     */
    public async postCharactersCharacterIdFittings(
        characterId: CharacterID,
        body: {
            description: string;
            items: Array<{
                flag:
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
                quantity: number;
                typeId: number;
            }>;
            name: string;
            shipTypeId: number;
        },
    ): Promise<CharactersCharacterIdFittingsPost> {
        return this.client.request<CharactersCharacterIdFittingsPost>({
            method: "POST",
            path: `/characters/${characterId}/fittings`,
            requiresAuth: true,
            scopes: ["esi-fittings.write_fittings.v1"],
            body,
            rateLimitGroup: "fitting",
        });
    }

    /**
     * Delete a fitting from a character
     *
     * @param characterId - The ID of the character
     * @param fittingId
     * @method DELETE /characters/{character_id}/fittings/{fitting_id}
     * @remarks Rate Limit: fitting | Auth Required: Yes (esi-fittings.write_fittings.v1)
     */
    public async deleteCharactersCharacterIdFittingsFittingId(
        characterId: CharacterID,
        fittingId: number,
    ): Promise<void> {
        return this.client.request<void>({
            method: "DELETE",
            path: `/characters/${characterId}/fittings/${fittingId}`,
            requiresAuth: true,
            scopes: ["esi-fittings.write_fittings.v1"],
            rateLimitGroup: "fitting",
        });
    }

    /**
     * Return the fleet ID the character is in, if any.
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/fleet
     * @remarks Rate Limit: fleet | Auth Required: Yes (esi-fleets.read_fleet.v1)
     */
    public async getCharactersCharacterIdFleet(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdFleetGet> {
        return this.client.request<CharactersCharacterIdFleetGet>({
            method: "GET",
            path: `/characters/${characterId}/fleet`,
            requiresAuth: true,
            scopes: ["esi-fleets.read_fleet.v1"],
            rateLimitGroup: "fleet",
        });
    }

    /**
     * Statistical overview of a character involved in faction warfare
     *
     * This route expires daily at 11:05
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/fw/stats
     * @remarks Rate Limit: factional-warfare | Auth Required: Yes (esi-characters.read_fw_stats.v1)
     */
    public async getCharactersCharacterIdFwStats(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdFwStatsGet> {
        return this.client.request<CharactersCharacterIdFwStatsGet>({
            method: "GET",
            path: `/characters/${characterId}/fw/stats`,
            requiresAuth: true,
            scopes: ["esi-characters.read_fw_stats.v1"],
            rateLimitGroup: "factional-warfare",
        });
    }

    /**
     * Return implants on the active clone of a character
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/implants
     * @remarks Rate Limit: char-detail | Auth Required: Yes (esi-clones.read_implants.v1)
     */
    public async getCharactersCharacterIdImplants(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdImplantsGet> {
        return this.client.request<CharactersCharacterIdImplantsGet>({
            method: "GET",
            path: `/characters/${characterId}/implants`,
            requiresAuth: true,
            scopes: ["esi-clones.read_implants.v1"],
            rateLimitGroup: "char-detail",
        });
    }

    /**
     * List industry jobs placed by a character
     *
     * @param characterId - The ID of the character
     * @param includeCompleted
     * @method GET /characters/{character_id}/industry/jobs
     * @remarks Rate Limit: char-industry | Auth Required: Yes (esi-industry.read_character_jobs.v1)
     */
    public async getCharactersCharacterIdIndustryJobs(
        characterId: CharacterID,
        includeCompleted?: boolean,
    ): Promise<CharactersCharacterIdIndustryJobsGet> {
        return this.client.request<CharactersCharacterIdIndustryJobsGet>({
            method: "GET",
            path: `/characters/${characterId}/industry/jobs`,
            requiresAuth: true,
            scopes: ["esi-industry.read_character_jobs.v1"],
            query: { include_completed: includeCompleted },
            rateLimitGroup: "char-industry",
        });
    }

    /**
     * Return a list of a character's kills and losses going back 90 days
     *
     * @param characterId - The ID of the character
     * @param page
     * @method GET /characters/{character_id}/killmails/recent
     * @remarks Rate Limit: char-killmail | Auth Required: Yes (esi-killmails.read_killmails.v1)
     */
    public async getCharactersCharacterIdKillmailsRecent(
        characterId: CharacterID,
        page?: number,
    ): Promise<CharactersCharacterIdKillmailsRecentGet> {
        return this.client.request<CharactersCharacterIdKillmailsRecentGet>({
            method: "GET",
            path: `/characters/${characterId}/killmails/recent`,
            requiresAuth: true,
            scopes: ["esi-killmails.read_killmails.v1"],
            query: { page: page },
            rateLimitGroup: "char-killmail",
        });
    }

    /**
     * Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/location
     * @remarks Rate Limit: char-location | Auth Required: Yes (esi-location.read_location.v1)
     */
    public async getCharactersCharacterIdLocation(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdLocationGet> {
        return this.client.request<CharactersCharacterIdLocationGet>({
            method: "GET",
            path: `/characters/${characterId}/location`,
            requiresAuth: true,
            scopes: ["esi-location.read_location.v1"],
            rateLimitGroup: "char-location",
        });
    }

    /**
     * Return a list of loyalty points for all corporations the character has worked for
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/loyalty/points
     * @remarks Rate Limit: char-wallet | Auth Required: Yes (esi-characters.read_loyalty.v1)
     */
    public async getCharactersCharacterIdLoyaltyPoints(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdLoyaltyPointsGet> {
        return this.client.request<CharactersCharacterIdLoyaltyPointsGet>({
            method: "GET",
            path: `/characters/${characterId}/loyalty/points`,
            requiresAuth: true,
            scopes: ["esi-characters.read_loyalty.v1"],
            rateLimitGroup: "char-wallet",
        });
    }

    /**
     * Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards
     *
     * @param characterId - The ID of the character
     * @param labels
     * @param lastMailId
     * @method GET /characters/{character_id}/mail
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-mail.read_mail.v1)
     */
    public async getCharactersCharacterIdMail(
        characterId: CharacterID,
        labels?: number[],
        lastMailId?: number,
    ): Promise<CharactersCharacterIdMailGet> {
        return this.client.request<CharactersCharacterIdMailGet>({
            method: "GET",
            path: `/characters/${characterId}/mail`,
            requiresAuth: true,
            scopes: ["esi-mail.read_mail.v1"],
            query: { labels: labels, last_mail_id: lastMailId },
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Create and send a new mail
     *
     * @param characterId - The ID of the character
     * @method POST /characters/{character_id}/mail
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-mail.send_mail.v1)
     */
    public async postCharactersCharacterIdMail(
        characterId: CharacterID,
        body: {
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
        },
    ): Promise<CharactersCharacterIdMailPost> {
        return this.client.request<CharactersCharacterIdMailPost>({
            method: "POST",
            path: `/characters/${characterId}/mail`,
            requiresAuth: true,
            scopes: ["esi-mail.send_mail.v1"],
            body,
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Return a list of the users mail labels, unread counts for each label and a total unread count.
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/mail/labels
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-mail.read_mail.v1)
     */
    public async getCharactersCharacterIdMailLabels(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdMailLabelsGet> {
        return this.client.request<CharactersCharacterIdMailLabelsGet>({
            method: "GET",
            path: `/characters/${characterId}/mail/labels`,
            requiresAuth: true,
            scopes: ["esi-mail.read_mail.v1"],
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Create a mail label
     *
     * @param characterId - The ID of the character
     * @method POST /characters/{character_id}/mail/labels
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-mail.organize_mail.v1)
     */
    public async postCharactersCharacterIdMailLabels(
        characterId: CharacterID,
        body: {
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
        },
    ): Promise<CharactersCharacterIdMailLabelsPost> {
        return this.client.request<CharactersCharacterIdMailLabelsPost>({
            method: "POST",
            path: `/characters/${characterId}/mail/labels`,
            requiresAuth: true,
            scopes: ["esi-mail.organize_mail.v1"],
            body,
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Delete a mail label
     *
     * @param characterId - The ID of the character
     * @param labelId
     * @method DELETE /characters/{character_id}/mail/labels/{label_id}
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-mail.organize_mail.v1)
     */
    public async deleteCharactersCharacterIdMailLabelsLabelId(
        characterId: CharacterID,
        labelId: number,
    ): Promise<void> {
        return this.client.request<void>({
            method: "DELETE",
            path: `/characters/${characterId}/mail/labels/${labelId}`,
            requiresAuth: true,
            scopes: ["esi-mail.organize_mail.v1"],
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Return all mailing lists that the character is subscribed to
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/mail/lists
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-mail.read_mail.v1)
     */
    public async getCharactersCharacterIdMailLists(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdMailListsGet> {
        return this.client.request<CharactersCharacterIdMailListsGet>({
            method: "GET",
            path: `/characters/${characterId}/mail/lists`,
            requiresAuth: true,
            scopes: ["esi-mail.read_mail.v1"],
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Delete a mail
     *
     * @param characterId - The ID of the character
     * @param mailId
     * @method DELETE /characters/{character_id}/mail/{mail_id}
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-mail.organize_mail.v1)
     */
    public async deleteCharactersCharacterIdMailMailId(
        characterId: CharacterID,
        mailId: number,
    ): Promise<void> {
        return this.client.request<void>({
            method: "DELETE",
            path: `/characters/${characterId}/mail/${mailId}`,
            requiresAuth: true,
            scopes: ["esi-mail.organize_mail.v1"],
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Return the contents of an EVE mail
     *
     * @param characterId - The ID of the character
     * @param mailId
     * @method GET /characters/{character_id}/mail/{mail_id}
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-mail.read_mail.v1)
     */
    public async getCharactersCharacterIdMailMailId(
        characterId: CharacterID,
        mailId: number,
    ): Promise<CharactersCharacterIdMailMailIdGet> {
        return this.client.request<CharactersCharacterIdMailMailIdGet>({
            method: "GET",
            path: `/characters/${characterId}/mail/${mailId}`,
            requiresAuth: true,
            scopes: ["esi-mail.read_mail.v1"],
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Update metadata about a mail
     *
     * @param characterId - The ID of the character
     * @param mailId
     * @method PUT /characters/{character_id}/mail/{mail_id}
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-mail.organize_mail.v1)
     */
    public async putCharactersCharacterIdMailMailId(
        characterId: CharacterID,
        mailId: number,
        body: {
            labels?: number[];
            read?: boolean;
        },
    ): Promise<void> {
        return this.client.request<void>({
            method: "PUT",
            path: `/characters/${characterId}/mail/${mailId}`,
            requiresAuth: true,
            scopes: ["esi-mail.organize_mail.v1"],
            body,
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Return a list of medals the character has
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/medals
     * @remarks Rate Limit: char-detail | Auth Required: Yes (esi-characters.read_medals.v1)
     */
    public async getCharactersCharacterIdMedals(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdMedalsGet> {
        return this.client.request<CharactersCharacterIdMedalsGet>({
            method: "GET",
            path: `/characters/${characterId}/medals`,
            requiresAuth: true,
            scopes: ["esi-characters.read_medals.v1"],
            rateLimitGroup: "char-detail",
        });
    }

    /**
     * Paginated record of all mining done by a character for the past 30 days
     *
     * @param characterId - The ID of the character
     * @param page
     * @method GET /characters/{character_id}/mining
     * @remarks Rate Limit: char-industry | Auth Required: Yes (esi-industry.read_character_mining.v1)
     */
    public async getCharactersCharacterIdMining(
        characterId: CharacterID,
        page?: number,
    ): Promise<CharactersCharacterIdMiningGet> {
        return this.client.request<CharactersCharacterIdMiningGet>({
            method: "GET",
            path: `/characters/${characterId}/mining`,
            requiresAuth: true,
            scopes: ["esi-industry.read_character_mining.v1"],
            query: { page: page },
            rateLimitGroup: "char-industry",
        });
    }

    /**
     * Return character notifications
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/notifications
     * @remarks Rate Limit: char-notification | Auth Required: Yes (esi-characters.read_notifications.v1)
     */
    public async getCharactersCharacterIdNotifications(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdNotificationsGet> {
        return this.client.request<CharactersCharacterIdNotificationsGet>({
            method: "GET",
            path: `/characters/${characterId}/notifications`,
            requiresAuth: true,
            scopes: ["esi-characters.read_notifications.v1"],
            rateLimitGroup: "char-notification",
        });
    }

    /**
     * Return notifications about having been added to someone's contact list
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/notifications/contacts
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-characters.read_notifications.v1)
     */
    public async getCharactersCharacterIdNotificationsContacts(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdNotificationsContactsGet> {
        return this.client.request<CharactersCharacterIdNotificationsContactsGet>(
            {
                method: "GET",
                path: `/characters/${characterId}/notifications/contacts`,
                requiresAuth: true,
                scopes: ["esi-characters.read_notifications.v1"],
                rateLimitGroup: "char-social",
            },
        );
    }

    /**
     * Checks if the character is currently online
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/online
     * @remarks Rate Limit: char-location | Auth Required: Yes (esi-location.read_online.v1)
     */
    public async getCharactersCharacterIdOnline(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdOnlineGet> {
        return this.client.request<CharactersCharacterIdOnlineGet>({
            method: "GET",
            path: `/characters/${characterId}/online`,
            requiresAuth: true,
            scopes: ["esi-location.read_online.v1"],
            rateLimitGroup: "char-location",
        });
    }

    /**
     * List open market orders placed by a character
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/orders
     * @remarks Rate Limit: None | Auth Required: Yes (esi-markets.read_character_orders.v1)
     */
    public async getCharactersCharacterIdOrders(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdOrdersGet> {
        return this.client.request<CharactersCharacterIdOrdersGet>({
            method: "GET",
            path: `/characters/${characterId}/orders`,
            requiresAuth: true,
            scopes: ["esi-markets.read_character_orders.v1"],
        });
    }

    /**
     * List cancelled and expired market orders placed by a character up to 90 days in the past.
     *
     * @param characterId - The ID of the character
     * @param page
     * @method GET /characters/{character_id}/orders/history
     * @remarks Rate Limit: None | Auth Required: Yes (esi-markets.read_character_orders.v1)
     */
    public async getCharactersCharacterIdOrdersHistory(
        characterId: CharacterID,
        page?: number,
    ): Promise<CharactersCharacterIdOrdersHistoryGet> {
        return this.client.request<CharactersCharacterIdOrdersHistoryGet>({
            method: "GET",
            path: `/characters/${characterId}/orders/history`,
            requiresAuth: true,
            scopes: ["esi-markets.read_character_orders.v1"],
            query: { page: page },
        });
    }

    /**
     * Returns a list of all planetary colonies owned by a character.
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/planets
     * @remarks Rate Limit: char-industry | Auth Required: Yes (esi-planets.manage_planets.v1)
     */
    public async getCharactersCharacterIdPlanets(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdPlanetsGet> {
        return this.client.request<CharactersCharacterIdPlanetsGet>({
            method: "GET",
            path: `/characters/${characterId}/planets`,
            requiresAuth: true,
            scopes: ["esi-planets.manage_planets.v1"],
            rateLimitGroup: "char-industry",
        });
    }

    /**
     * Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.
     *
     * @param characterId - The ID of the character
     * @param planetId
     * @method GET /characters/{character_id}/planets/{planet_id}
     * @remarks Rate Limit: char-industry | Auth Required: Yes (esi-planets.manage_planets.v1)
     */
    public async getCharactersCharacterIdPlanetsPlanetId(
        characterId: CharacterID,
        planetId: number,
    ): Promise<CharactersCharacterIdPlanetsPlanetIdGet> {
        return this.client.request<CharactersCharacterIdPlanetsPlanetIdGet>({
            method: "GET",
            path: `/characters/${characterId}/planets/${planetId}`,
            requiresAuth: true,
            scopes: ["esi-planets.manage_planets.v1"],
            rateLimitGroup: "char-industry",
        });
    }

    /**
     * Get portrait urls for a character
     *
     * This route expires daily at 11:05
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/portrait
     * @remarks Rate Limit: char-detail | Auth Required: No (Public)
     */
    public async getCharactersCharacterIdPortrait(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdPortraitGet> {
        return this.client.request<CharactersCharacterIdPortraitGet>({
            method: "GET",
            path: `/characters/${characterId}/portrait`,
            requiresAuth: false,
            rateLimitGroup: "char-detail",
        });
    }

    /**
     * Returns a character's corporation roles
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/roles
     * @remarks Rate Limit: char-detail | Auth Required: Yes (esi-characters.read_corporation_roles.v1)
     */
    public async getCharactersCharacterIdRoles(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdRolesGet> {
        return this.client.request<CharactersCharacterIdRolesGet>({
            method: "GET",
            path: `/characters/${characterId}/roles`,
            requiresAuth: true,
            scopes: ["esi-characters.read_corporation_roles.v1"],
            rateLimitGroup: "char-detail",
        });
    }

    /**
     * Search for entities that match a given sub-string.
     *
     * @param categories
     * @param characterId - The ID of the character
     * @param search
     * @param strict
     * @method GET /characters/{character_id}/search
     * @remarks Rate Limit: None | Auth Required: Yes (esi-search.search_structures.v1)
     */
    public async getCharactersCharacterIdSearch(
        categories: Array<
            | "agent"
            | "alliance"
            | "character"
            | "constellation"
            | "corporation"
            | "faction"
            | "inventory_type"
            | "region"
            | "solar_system"
            | "station"
            | "structure"
        >,
        characterId: CharacterID,
        search: string,
        strict?: boolean,
    ): Promise<CharactersCharacterIdSearchGet> {
        return this.client.request<CharactersCharacterIdSearchGet>({
            method: "GET",
            path: `/characters/${characterId}/search`,
            requiresAuth: true,
            scopes: ["esi-search.search_structures.v1"],
            query: { categories: categories, search: search, strict: strict },
        });
    }

    /**
     * Get the current ship type, name and id
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/ship
     * @remarks Rate Limit: char-location | Auth Required: Yes (esi-location.read_ship_type.v1)
     */
    public async getCharactersCharacterIdShip(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdShipGet> {
        return this.client.request<CharactersCharacterIdShipGet>({
            method: "GET",
            path: `/characters/${characterId}/ship`,
            requiresAuth: true,
            scopes: ["esi-location.read_ship_type.v1"],
            rateLimitGroup: "char-location",
        });
    }

    /**
     * List the configured skill queue for the given character.
     *
     * Entries that have their finish time in the past are completed, but aren't updated in the "/skills" route
     * yet. This will happen the next time the character logs in.
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/skillqueue
     * @remarks Rate Limit: char-detail | Auth Required: Yes (esi-skills.read_skillqueue.v1)
     */
    public async getCharactersCharacterIdSkillqueue(
        characterId: CharacterID,
    ): Promise<CharactersSkillqueueSkill[]> {
        return this.client.request<CharactersSkillqueueSkill[]>({
            method: "GET",
            path: `/characters/${characterId}/skillqueue`,
            requiresAuth: true,
            scopes: ["esi-skills.read_skillqueue.v1"],
            rateLimitGroup: "char-detail",
        });
    }

    /**
     * List all trained skills for the given character.
     *
     * Skills returned by this route can be out-of-date if the character hasn't logged in since one or more skills
     * completed training. Use the /skillqueue route to check for skills that completed training. Entries that are
     * in the past need to be applied on top of this list to get an accurate view of the character's current skills.
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/skills
     * @remarks Rate Limit: char-detail | Auth Required: Yes (esi-skills.read_skills.v1)
     */
    public async getCharactersCharacterIdSkills(
        characterId: CharacterID,
    ): Promise<CharactersSkills> {
        return this.client.request<CharactersSkills>({
            method: "GET",
            path: `/characters/${characterId}/skills`,
            requiresAuth: true,
            scopes: ["esi-skills.read_skills.v1"],
            rateLimitGroup: "char-detail",
        });
    }

    /**
     * Return character standings from agents, NPC corporations, and factions
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/standings
     * @remarks Rate Limit: char-social | Auth Required: Yes (esi-characters.read_standings.v1)
     */
    public async getCharactersCharacterIdStandings(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdStandingsGet> {
        return this.client.request<CharactersCharacterIdStandingsGet>({
            method: "GET",
            path: `/characters/${characterId}/standings`,
            requiresAuth: true,
            scopes: ["esi-characters.read_standings.v1"],
            rateLimitGroup: "char-social",
        });
    }

    /**
     * Returns a character's titles
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/titles
     * @remarks Rate Limit: char-detail | Auth Required: Yes (esi-characters.read_titles.v1)
     */
    public async getCharactersCharacterIdTitles(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdTitlesGet> {
        return this.client.request<CharactersCharacterIdTitlesGet>({
            method: "GET",
            path: `/characters/${characterId}/titles`,
            requiresAuth: true,
            scopes: ["esi-characters.read_titles.v1"],
            rateLimitGroup: "char-detail",
        });
    }

    /**
     * Returns a character's wallet balance
     *
     * @param characterId - The ID of the character
     * @method GET /characters/{character_id}/wallet
     * @remarks Rate Limit: char-wallet | Auth Required: Yes (esi-wallet.read_character_wallet.v1)
     */
    public async getCharactersCharacterIdWallet(
        characterId: CharacterID,
    ): Promise<CharactersCharacterIdWalletGet> {
        return this.client.request<CharactersCharacterIdWalletGet>({
            method: "GET",
            path: `/characters/${characterId}/wallet`,
            requiresAuth: true,
            scopes: ["esi-wallet.read_character_wallet.v1"],
            rateLimitGroup: "char-wallet",
        });
    }

    /**
     * Retrieve the given character's wallet journal going 30 days back
     *
     * @param characterId - The ID of the character
     * @param page
     * @method GET /characters/{character_id}/wallet/journal
     * @remarks Rate Limit: char-wallet | Auth Required: Yes (esi-wallet.read_character_wallet.v1)
     */
    public async getCharactersCharacterIdWalletJournal(
        characterId: CharacterID,
        page?: number,
    ): Promise<CharactersCharacterIdWalletJournalGet> {
        return this.client.request<CharactersCharacterIdWalletJournalGet>({
            method: "GET",
            path: `/characters/${characterId}/wallet/journal`,
            requiresAuth: true,
            scopes: ["esi-wallet.read_character_wallet.v1"],
            query: { page: page },
            rateLimitGroup: "char-wallet",
        });
    }

    /**
     * Get wallet transactions of a character
     *
     * @param characterId - The ID of the character
     * @param fromId
     * @method GET /characters/{character_id}/wallet/transactions
     * @remarks Rate Limit: char-wallet | Auth Required: Yes (esi-wallet.read_character_wallet.v1)
     */
    public async getCharactersCharacterIdWalletTransactions(
        characterId: CharacterID,
        fromId?: number,
    ): Promise<CharactersCharacterIdWalletTransactionsGet> {
        return this.client.request<CharactersCharacterIdWalletTransactionsGet>({
            method: "GET",
            path: `/characters/${characterId}/wallet/transactions`,
            requiresAuth: true,
            scopes: ["esi-wallet.read_character_wallet.v1"],
            query: { from_id: fromId },
            rateLimitGroup: "char-wallet",
        });
    }

    /**
     * Lists bids on a public auction contract
     *
     * @param contractId
     * @param page
     * @method GET /contracts/public/bids/{contract_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getContractsPublicBidsContractId(
        contractId: number,
        page?: number,
    ): Promise<ContractsPublicBidsContractIdGet> {
        return this.client.request<ContractsPublicBidsContractIdGet>({
            method: "GET",
            path: `/contracts/public/bids/${contractId}`,
            requiresAuth: false,
            query: { page: page },
        });
    }

    /**
     * Lists items of a public contract
     *
     * @param contractId
     * @param page
     * @method GET /contracts/public/items/{contract_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getContractsPublicItemsContractId(
        contractId: number,
        page?: number,
    ): Promise<ContractsPublicItemsContractIdGet> {
        return this.client.request<ContractsPublicItemsContractIdGet>({
            method: "GET",
            path: `/contracts/public/items/${contractId}`,
            requiresAuth: false,
            query: { page: page },
        });
    }

    /**
     * Returns a paginated list of all public contracts in the given region
     *
     * @param page
     * @param regionId
     * @method GET /contracts/public/{region_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getContractsPublicRegionId(
        regionId: number,
        page?: number,
    ): Promise<ContractsPublicRegionIdGet> {
        return this.client.request<ContractsPublicRegionIdGet>({
            method: "GET",
            path: `/contracts/public/${regionId}`,
            requiresAuth: false,
            query: { page: page },
        });
    }

    /**
     * Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporation/{corporation_id}/mining/extractions
     * @remarks Rate Limit: corp-industry | Auth Required: Yes (esi-industry.read_corporation_mining.v1)
     */
    public async getCorporationCorporationIdMiningExtractions(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationCorporationIdMiningExtractionsGet> {
        return this.client.request<CorporationCorporationIdMiningExtractionsGet>(
            {
                method: "GET",
                path: `/corporation/${corporationId}/mining/extractions`,
                requiresAuth: true,
                scopes: ["esi-industry.read_corporation_mining.v1"],
                query: { page: page },
                rateLimitGroup: "corp-industry",
            },
        );
    }

    /**
     * Paginated list of all entities capable of observing and recording mining for a corporation
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporation/{corporation_id}/mining/observers
     * @remarks Rate Limit: corp-industry | Auth Required: Yes (esi-industry.read_corporation_mining.v1)
     */
    public async getCorporationCorporationIdMiningObservers(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationCorporationIdMiningObserversGet> {
        return this.client.request<CorporationCorporationIdMiningObserversGet>({
            method: "GET",
            path: `/corporation/${corporationId}/mining/observers`,
            requiresAuth: true,
            scopes: ["esi-industry.read_corporation_mining.v1"],
            query: { page: page },
            rateLimitGroup: "corp-industry",
        });
    }

    /**
     * Paginated record of all mining seen by an observer
     *
     * @param corporationId - The ID of the corporation
     * @param observerId
     * @param page
     * @method GET /corporation/{corporation_id}/mining/observers/{observer_id}
     * @remarks Rate Limit: corp-industry | Auth Required: Yes (esi-industry.read_corporation_mining.v1)
     */
    public async getCorporationCorporationIdMiningObserversObserverId(
        corporationId: CorporationID,
        observerId: number,
        page?: number,
    ): Promise<CorporationCorporationIdMiningObserversObserverIdGet> {
        return this.client.request<CorporationCorporationIdMiningObserversObserverIdGet>(
            {
                method: "GET",
                path: `/corporation/${corporationId}/mining/observers/${observerId}`,
                requiresAuth: true,
                scopes: ["esi-industry.read_corporation_mining.v1"],
                query: { page: page },
                rateLimitGroup: "corp-industry",
            },
        );
    }

    /**
     * Get a list of npc corporations
     *
     * This route expires daily at 11:05
     *
     * @method GET /corporations/npccorps
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getCorporationsNpccorps(): Promise<CorporationsNpccorpsGet> {
        return this.client.request<CorporationsNpccorpsGet>({
            method: "GET",
            path: `/corporations/npccorps`,
            requiresAuth: false,
        });
    }

    /**
     * Public information about a corporation
     *
     * @param corporationId - The ID of the corporation
     * @method GET /corporations/{corporation_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getCorporationsCorporationId(
        corporationId: CorporationID,
    ): Promise<CorporationsDetail> {
        return this.client.request<CorporationsDetail>({
            method: "GET",
            path: `/corporations/${corporationId}`,
            requiresAuth: false,
        });
    }

    /**
     * Get a list of all the alliances a corporation has been a member of
     *
     * @param corporationId - The ID of the corporation
     * @method GET /corporations/{corporation_id}/alliancehistory
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getCorporationsCorporationIdAlliancehistory(
        corporationId: CorporationID,
    ): Promise<CorporationsCorporationIdAlliancehistoryGet> {
        return this.client.request<CorporationsCorporationIdAlliancehistoryGet>(
            {
                method: "GET",
                path: `/corporations/${corporationId}/alliancehistory`,
                requiresAuth: false,
            },
        );
    }

    /**
     * Return a list of the corporation assets
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/assets
     * @remarks Rate Limit: corp-asset | Auth Required: Yes (esi-assets.read_corporation_assets.v1)
     */
    public async getCorporationsCorporationIdAssets(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdAssetsGet> {
        return this.client.request<CorporationsCorporationIdAssetsGet>({
            method: "GET",
            path: `/corporations/${corporationId}/assets`,
            requiresAuth: true,
            scopes: ["esi-assets.read_corporation_assets.v1"],
            query: { page: page },
            rateLimitGroup: "corp-asset",
        });
    }

    /**
     * Return locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
     *
     * @param corporationId - The ID of the corporation
     * @method POST /corporations/{corporation_id}/assets/locations
     * @remarks Rate Limit: corp-asset | Auth Required: Yes (esi-assets.read_corporation_assets.v1)
     */
    public async postCorporationsCorporationIdAssetsLocations(
        corporationId: CorporationID,
        body: number[],
    ): Promise<CorporationsCorporationIdAssetsLocationsPost> {
        return this.client.request<CorporationsCorporationIdAssetsLocationsPost>(
            {
                method: "POST",
                path: `/corporations/${corporationId}/assets/locations`,
                requiresAuth: true,
                scopes: ["esi-assets.read_corporation_assets.v1"],
                body,
                rateLimitGroup: "corp-asset",
            },
        );
    }

    /**
     * Return names for a set of item ids, which you can get from corporation assets endpoint. Only valid for items that can customize names, like containers or ships
     *
     * @param corporationId - The ID of the corporation
     * @method POST /corporations/{corporation_id}/assets/names
     * @remarks Rate Limit: corp-asset | Auth Required: Yes (esi-assets.read_corporation_assets.v1)
     */
    public async postCorporationsCorporationIdAssetsNames(
        corporationId: CorporationID,
        body: number[],
    ): Promise<CorporationsCorporationIdAssetsNamesPost> {
        return this.client.request<CorporationsCorporationIdAssetsNamesPost>({
            method: "POST",
            path: `/corporations/${corporationId}/assets/names`,
            requiresAuth: true,
            scopes: ["esi-assets.read_corporation_assets.v1"],
            body,
            rateLimitGroup: "corp-asset",
        });
    }

    /**
     * Returns a list of blueprints the corporation owns
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/blueprints
     * @remarks Rate Limit: corp-industry | Auth Required: Yes (esi-corporations.read_blueprints.v1)
     */
    public async getCorporationsCorporationIdBlueprints(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdBlueprintsGet> {
        return this.client.request<CorporationsCorporationIdBlueprintsGet>({
            method: "GET",
            path: `/corporations/${corporationId}/blueprints`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_blueprints.v1"],
            query: { page: page },
            rateLimitGroup: "corp-industry",
        });
    }

    /**
     * Return contacts of a corporation
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/contacts
     * @remarks Rate Limit: corp-social | Auth Required: Yes (esi-corporations.read_contacts.v1)
     */
    public async getCorporationsCorporationIdContacts(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdContactsGet> {
        return this.client.request<CorporationsCorporationIdContactsGet>({
            method: "GET",
            path: `/corporations/${corporationId}/contacts`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_contacts.v1"],
            query: { page: page },
            rateLimitGroup: "corp-social",
        });
    }

    /**
     * Return custom labels for a corporation's contacts
     *
     * @param corporationId - The ID of the corporation
     * @method GET /corporations/{corporation_id}/contacts/labels
     * @remarks Rate Limit: corp-social | Auth Required: Yes (esi-corporations.read_contacts.v1)
     */
    public async getCorporationsCorporationIdContactsLabels(
        corporationId: CorporationID,
    ): Promise<CorporationsCorporationIdContactsLabelsGet> {
        return this.client.request<CorporationsCorporationIdContactsLabelsGet>({
            method: "GET",
            path: `/corporations/${corporationId}/contacts/labels`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_contacts.v1"],
            rateLimitGroup: "corp-social",
        });
    }

    /**
     * Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/containers/logs
     * @remarks Rate Limit: None | Auth Required: Yes (esi-corporations.read_container_logs.v1)
     */
    public async getCorporationsCorporationIdContainersLogs(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdContainersLogsGet> {
        return this.client.request<CorporationsCorporationIdContainersLogsGet>({
            method: "GET",
            path: `/corporations/${corporationId}/containers/logs`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_container_logs.v1"],
            query: { page: page },
        });
    }

    /**
     * Returns contracts available to a corporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/contracts
     * @remarks Rate Limit: corp-contract | Auth Required: Yes (esi-contracts.read_corporation_contracts.v1)
     */
    public async getCorporationsCorporationIdContracts(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdContractsGet> {
        return this.client.request<CorporationsCorporationIdContractsGet>({
            method: "GET",
            path: `/corporations/${corporationId}/contracts`,
            requiresAuth: true,
            scopes: ["esi-contracts.read_corporation_contracts.v1"],
            query: { page: page },
            rateLimitGroup: "corp-contract",
        });
    }

    /**
     * Lists bids on a particular auction contract
     *
     * @param contractId
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/contracts/{contract_id}/bids
     * @remarks Rate Limit: corp-contract | Auth Required: Yes (esi-contracts.read_corporation_contracts.v1)
     */
    public async getCorporationsCorporationIdContractsContractIdBids(
        contractId: number,
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdContractsContractIdBidsGet> {
        return this.client.request<CorporationsCorporationIdContractsContractIdBidsGet>(
            {
                method: "GET",
                path: `/corporations/${corporationId}/contracts/${contractId}/bids`,
                requiresAuth: true,
                scopes: ["esi-contracts.read_corporation_contracts.v1"],
                query: { page: page },
                rateLimitGroup: "corp-contract",
            },
        );
    }

    /**
     * Lists items of a particular contract
     *
     * @param contractId
     * @param corporationId - The ID of the corporation
     * @method GET /corporations/{corporation_id}/contracts/{contract_id}/items
     * @remarks Rate Limit: corp-contract | Auth Required: Yes (esi-contracts.read_corporation_contracts.v1)
     */
    public async getCorporationsCorporationIdContractsContractIdItems(
        contractId: number,
        corporationId: CorporationID,
    ): Promise<CorporationsCorporationIdContractsContractIdItemsGet> {
        return this.client.request<CorporationsCorporationIdContractsContractIdItemsGet>(
            {
                method: "GET",
                path: `/corporations/${corporationId}/contracts/${contractId}/items`,
                requiresAuth: true,
                scopes: ["esi-contracts.read_corporation_contracts.v1"],
                rateLimitGroup: "corp-contract",
            },
        );
    }

    /**
     * List customs offices owned by a corporation
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/customs_offices
     * @remarks Rate Limit: corp-industry | Auth Required: Yes (esi-planets.read_customs_offices.v1)
     */
    public async getCorporationsCorporationIdCustomsOffices(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdCustomsOfficesGet> {
        return this.client.request<CorporationsCorporationIdCustomsOfficesGet>({
            method: "GET",
            path: `/corporations/${corporationId}/customs_offices`,
            requiresAuth: true,
            scopes: ["esi-planets.read_customs_offices.v1"],
            query: { page: page },
            rateLimitGroup: "corp-industry",
        });
    }

    /**
     * Return corporation hangar and wallet division names, only show if a division is not using the default name
     *
     * @param corporationId - The ID of the corporation
     * @method GET /corporations/{corporation_id}/divisions
     * @remarks Rate Limit: corp-wallet | Auth Required: Yes (esi-corporations.read_divisions.v1)
     */
    public async getCorporationsCorporationIdDivisions(
        corporationId: CorporationID,
    ): Promise<CorporationsCorporationIdDivisionsGet> {
        return this.client.request<CorporationsCorporationIdDivisionsGet>({
            method: "GET",
            path: `/corporations/${corporationId}/divisions`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_divisions.v1"],
            rateLimitGroup: "corp-wallet",
        });
    }

    /**
     * Return a corporation's facilities
     *
     * @param corporationId - The ID of the corporation
     * @method GET /corporations/{corporation_id}/facilities
     * @remarks Rate Limit: None | Auth Required: Yes (esi-corporations.read_facilities.v1)
     */
    public async getCorporationsCorporationIdFacilities(
        corporationId: CorporationID,
    ): Promise<CorporationsCorporationIdFacilitiesGet> {
        return this.client.request<CorporationsCorporationIdFacilitiesGet>({
            method: "GET",
            path: `/corporations/${corporationId}/facilities`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_facilities.v1"],
        });
    }

    /**
     * Statistics about a corporation involved in faction warfare
     *
     * This route expires daily at 11:05
     *
     * @param corporationId - The ID of the corporation
     * @method GET /corporations/{corporation_id}/fw/stats
     * @remarks Rate Limit: factional-warfare | Auth Required: Yes (esi-corporations.read_fw_stats.v1)
     */
    public async getCorporationsCorporationIdFwStats(
        corporationId: CorporationID,
    ): Promise<CorporationsCorporationIdFwStatsGet> {
        return this.client.request<CorporationsCorporationIdFwStatsGet>({
            method: "GET",
            path: `/corporations/${corporationId}/fw/stats`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_fw_stats.v1"],
            rateLimitGroup: "factional-warfare",
        });
    }

    /**
     * Get the icon urls for a corporation
     *
     * @param corporationId - The ID of the corporation
     * @method GET /corporations/{corporation_id}/icons
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getCorporationsCorporationIdIcons(
        corporationId: CorporationID,
    ): Promise<CorporationsCorporationIdIconsGet> {
        return this.client.request<CorporationsCorporationIdIconsGet>({
            method: "GET",
            path: `/corporations/${corporationId}/icons`,
            requiresAuth: false,
        });
    }

    /**
     * List industry jobs run by a corporation
     *
     * @param corporationId - The ID of the corporation
     * @param includeCompleted
     * @param page
     * @method GET /corporations/{corporation_id}/industry/jobs
     * @remarks Rate Limit: corp-industry | Auth Required: Yes (esi-industry.read_corporation_jobs.v1)
     */
    public async getCorporationsCorporationIdIndustryJobs(
        corporationId: CorporationID,
        includeCompleted?: boolean,
        page?: number,
    ): Promise<CorporationsCorporationIdIndustryJobsGet> {
        return this.client.request<CorporationsCorporationIdIndustryJobsGet>({
            method: "GET",
            path: `/corporations/${corporationId}/industry/jobs`,
            requiresAuth: true,
            scopes: ["esi-industry.read_corporation_jobs.v1"],
            query: { include_completed: includeCompleted, page: page },
            rateLimitGroup: "corp-industry",
        });
    }

    /**
     * Get a list of a corporation's kills and losses going back 90 days
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/killmails/recent
     * @remarks Rate Limit: corp-killmail | Auth Required: Yes (esi-killmails.read_corporation_killmails.v1)
     */
    public async getCorporationsCorporationIdKillmailsRecent(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdKillmailsRecentGet> {
        return this.client.request<CorporationsCorporationIdKillmailsRecentGet>(
            {
                method: "GET",
                path: `/corporations/${corporationId}/killmails/recent`,
                requiresAuth: true,
                scopes: ["esi-killmails.read_corporation_killmails.v1"],
                query: { page: page },
                rateLimitGroup: "corp-killmail",
            },
        );
    }

    /**
     * Returns a corporation's medals
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/medals
     * @remarks Rate Limit: corp-detail | Auth Required: Yes (esi-corporations.read_medals.v1)
     */
    public async getCorporationsCorporationIdMedals(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdMedalsGet> {
        return this.client.request<CorporationsCorporationIdMedalsGet>({
            method: "GET",
            path: `/corporations/${corporationId}/medals`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_medals.v1"],
            query: { page: page },
            rateLimitGroup: "corp-detail",
        });
    }

    /**
     * Returns medals issued by a corporation
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/medals/issued
     * @remarks Rate Limit: corp-detail | Auth Required: Yes (esi-corporations.read_medals.v1)
     */
    public async getCorporationsCorporationIdMedalsIssued(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdMedalsIssuedGet> {
        return this.client.request<CorporationsCorporationIdMedalsIssuedGet>({
            method: "GET",
            path: `/corporations/${corporationId}/medals/issued`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_medals.v1"],
            query: { page: page },
            rateLimitGroup: "corp-detail",
        });
    }

    /**
     * Return the current member list of a corporation, the token's character need to be a member of the corporation.
     *
     * @param corporationId - The ID of the corporation
     * @method GET /corporations/{corporation_id}/members
     * @remarks Rate Limit: corp-member | Auth Required: Yes (esi-corporations.read_corporation_membership.v1)
     */
    public async getCorporationsCorporationIdMembers(
        corporationId: CorporationID,
    ): Promise<CorporationsCorporationIdMembersGet> {
        return this.client.request<CorporationsCorporationIdMembersGet>({
            method: "GET",
            path: `/corporations/${corporationId}/members`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_corporation_membership.v1"],
            rateLimitGroup: "corp-member",
        });
    }

    /**
     * Return a corporation's member limit, not including CEO himself
     *
     * @param corporationId - The ID of the corporation
     * @method GET /corporations/{corporation_id}/members/limit
     * @remarks Rate Limit: corp-member | Auth Required: Yes (esi-corporations.track_members.v1)
     */
    public async getCorporationsCorporationIdMembersLimit(
        corporationId: CorporationID,
    ): Promise<CorporationsCorporationIdMembersLimitGet> {
        return this.client.request<CorporationsCorporationIdMembersLimitGet>({
            method: "GET",
            path: `/corporations/${corporationId}/members/limit`,
            requiresAuth: true,
            scopes: ["esi-corporations.track_members.v1"],
            rateLimitGroup: "corp-member",
        });
    }

    /**
     * Returns a corporation's members' titles
     *
     * @param corporationId - The ID of the corporation
     * @method GET /corporations/{corporation_id}/members/titles
     * @remarks Rate Limit: corp-member | Auth Required: Yes (esi-corporations.read_titles.v1)
     */
    public async getCorporationsCorporationIdMembersTitles(
        corporationId: CorporationID,
    ): Promise<CorporationsCorporationIdMembersTitlesGet> {
        return this.client.request<CorporationsCorporationIdMembersTitlesGet>({
            method: "GET",
            path: `/corporations/${corporationId}/members/titles`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_titles.v1"],
            rateLimitGroup: "corp-member",
        });
    }

    /**
     * Returns additional information about a corporation's members which helps tracking their activities
     *
     * @param corporationId - The ID of the corporation
     * @method GET /corporations/{corporation_id}/membertracking
     * @remarks Rate Limit: corp-member | Auth Required: Yes (esi-corporations.track_members.v1)
     */
    public async getCorporationsCorporationIdMembertracking(
        corporationId: CorporationID,
    ): Promise<CorporationsCorporationIdMembertrackingGet> {
        return this.client.request<CorporationsCorporationIdMembertrackingGet>({
            method: "GET",
            path: `/corporations/${corporationId}/membertracking`,
            requiresAuth: true,
            scopes: ["esi-corporations.track_members.v1"],
            rateLimitGroup: "corp-member",
        });
    }

    /**
     * List open market orders placed on behalf of a corporation
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/orders
     * @remarks Rate Limit: None | Auth Required: Yes (esi-markets.read_corporation_orders.v1)
     */
    public async getCorporationsCorporationIdOrders(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdOrdersGet> {
        return this.client.request<CorporationsCorporationIdOrdersGet>({
            method: "GET",
            path: `/corporations/${corporationId}/orders`,
            requiresAuth: true,
            scopes: ["esi-markets.read_corporation_orders.v1"],
            query: { page: page },
        });
    }

    /**
     * List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/orders/history
     * @remarks Rate Limit: None | Auth Required: Yes (esi-markets.read_corporation_orders.v1)
     */
    public async getCorporationsCorporationIdOrdersHistory(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdOrdersHistoryGet> {
        return this.client.request<CorporationsCorporationIdOrdersHistoryGet>({
            method: "GET",
            path: `/corporations/${corporationId}/orders/history`,
            requiresAuth: true,
            scopes: ["esi-markets.read_corporation_orders.v1"],
            query: { page: page },
        });
    }

    /**
     * Return the roles of all members if the character has the personnel manager role or any grantable role.
     *
     * @param corporationId - The ID of the corporation
     * @method GET /corporations/{corporation_id}/roles
     * @remarks Rate Limit: corp-member | Auth Required: Yes (esi-corporations.read_corporation_membership.v1)
     */
    public async getCorporationsCorporationIdRoles(
        corporationId: CorporationID,
    ): Promise<CorporationsCorporationIdRolesGet> {
        return this.client.request<CorporationsCorporationIdRolesGet>({
            method: "GET",
            path: `/corporations/${corporationId}/roles`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_corporation_membership.v1"],
            rateLimitGroup: "corp-member",
        });
    }

    /**
     * Return how roles have changed for a coporation's members, up to a month
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/roles/history
     * @remarks Rate Limit: corp-member | Auth Required: Yes (esi-corporations.read_corporation_membership.v1)
     */
    public async getCorporationsCorporationIdRolesHistory(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdRolesHistoryGet> {
        return this.client.request<CorporationsCorporationIdRolesHistoryGet>({
            method: "GET",
            path: `/corporations/${corporationId}/roles/history`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_corporation_membership.v1"],
            query: { page: page },
            rateLimitGroup: "corp-member",
        });
    }

    /**
     * Return the current shareholders of a corporation.
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/shareholders
     * @remarks Rate Limit: corp-detail | Auth Required: Yes (esi-wallet.read_corporation_wallets.v1)
     */
    public async getCorporationsCorporationIdShareholders(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdShareholdersGet> {
        return this.client.request<CorporationsCorporationIdShareholdersGet>({
            method: "GET",
            path: `/corporations/${corporationId}/shareholders`,
            requiresAuth: true,
            scopes: ["esi-wallet.read_corporation_wallets.v1"],
            query: { page: page },
            rateLimitGroup: "corp-detail",
        });
    }

    /**
     * Return corporation standings from agents, NPC corporations, and factions
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/standings
     * @remarks Rate Limit: corp-member | Auth Required: Yes (esi-corporations.read_standings.v1)
     */
    public async getCorporationsCorporationIdStandings(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdStandingsGet> {
        return this.client.request<CorporationsCorporationIdStandingsGet>({
            method: "GET",
            path: `/corporations/${corporationId}/standings`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_standings.v1"],
            query: { page: page },
            rateLimitGroup: "corp-member",
        });
    }

    /**
     * Returns list of corporation starbases (POSes)
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/starbases
     * @remarks Rate Limit: None | Auth Required: Yes (esi-corporations.read_starbases.v1)
     */
    public async getCorporationsCorporationIdStarbases(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdStarbasesGet> {
        return this.client.request<CorporationsCorporationIdStarbasesGet>({
            method: "GET",
            path: `/corporations/${corporationId}/starbases`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_starbases.v1"],
            query: { page: page },
        });
    }

    /**
     * Returns various settings and fuels of a starbase (POS)
     *
     * @param corporationId - The ID of the corporation
     * @param starbaseId
     * @param systemId
     * @method GET /corporations/{corporation_id}/starbases/{starbase_id}
     * @remarks Rate Limit: None | Auth Required: Yes (esi-corporations.read_starbases.v1)
     */
    public async getCorporationsCorporationIdStarbasesStarbaseId(
        corporationId: CorporationID,
        starbaseId: number,
        systemId: number,
    ): Promise<CorporationsCorporationIdStarbasesStarbaseIdGet> {
        return this.client.request<CorporationsCorporationIdStarbasesStarbaseIdGet>(
            {
                method: "GET",
                path: `/corporations/${corporationId}/starbases/${starbaseId}`,
                requiresAuth: true,
                scopes: ["esi-corporations.read_starbases.v1"],
                query: { system_id: systemId },
            },
        );
    }

    /**
     * Get a list of corporation structures. This route's version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell-2.0-structures-changes-coming-on-february-13th
     *
     * @param corporationId - The ID of the corporation
     * @param page
     * @method GET /corporations/{corporation_id}/structures
     * @remarks Rate Limit: None | Auth Required: Yes (esi-corporations.read_structures.v1)
     */
    public async getCorporationsCorporationIdStructures(
        corporationId: CorporationID,
        page?: number,
    ): Promise<CorporationsCorporationIdStructuresGet> {
        return this.client.request<CorporationsCorporationIdStructuresGet>({
            method: "GET",
            path: `/corporations/${corporationId}/structures`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_structures.v1"],
            query: { page: page },
        });
    }

    /**
     * Returns a corporation's titles
     *
     * @param corporationId - The ID of the corporation
     * @method GET /corporations/{corporation_id}/titles
     * @remarks Rate Limit: corp-detail | Auth Required: Yes (esi-corporations.read_titles.v1)
     */
    public async getCorporationsCorporationIdTitles(
        corporationId: CorporationID,
    ): Promise<CorporationsCorporationIdTitlesGet> {
        return this.client.request<CorporationsCorporationIdTitlesGet>({
            method: "GET",
            path: `/corporations/${corporationId}/titles`,
            requiresAuth: true,
            scopes: ["esi-corporations.read_titles.v1"],
            rateLimitGroup: "corp-detail",
        });
    }

    /**
     * Get a corporation's wallets
     *
     * @param corporationId - The ID of the corporation
     * @method GET /corporations/{corporation_id}/wallets
     * @remarks Rate Limit: corp-wallet | Auth Required: Yes (esi-wallet.read_corporation_wallets.v1)
     */
    public async getCorporationsCorporationIdWallets(
        corporationId: CorporationID,
    ): Promise<CorporationsCorporationIdWalletsGet> {
        return this.client.request<CorporationsCorporationIdWalletsGet>({
            method: "GET",
            path: `/corporations/${corporationId}/wallets`,
            requiresAuth: true,
            scopes: ["esi-wallet.read_corporation_wallets.v1"],
            rateLimitGroup: "corp-wallet",
        });
    }

    /**
     * Retrieve the given corporation's wallet journal for the given division going 30 days back
     *
     * @param corporationId - The ID of the corporation
     * @param division
     * @param page
     * @method GET /corporations/{corporation_id}/wallets/{division}/journal
     * @remarks Rate Limit: corp-wallet | Auth Required: Yes (esi-wallet.read_corporation_wallets.v1)
     */
    public async getCorporationsCorporationIdWalletsDivisionJournal(
        corporationId: CorporationID,
        division: number,
        page?: number,
    ): Promise<CorporationsCorporationIdWalletsDivisionJournalGet> {
        return this.client.request<CorporationsCorporationIdWalletsDivisionJournalGet>(
            {
                method: "GET",
                path: `/corporations/${corporationId}/wallets/${division}/journal`,
                requiresAuth: true,
                scopes: ["esi-wallet.read_corporation_wallets.v1"],
                query: { page: page },
                rateLimitGroup: "corp-wallet",
            },
        );
    }

    /**
     * Get wallet transactions of a corporation
     *
     * @param corporationId - The ID of the corporation
     * @param division
     * @param fromId
     * @method GET /corporations/{corporation_id}/wallets/{division}/transactions
     * @remarks Rate Limit: corp-wallet | Auth Required: Yes (esi-wallet.read_corporation_wallets.v1)
     */
    public async getCorporationsCorporationIdWalletsDivisionTransactions(
        corporationId: CorporationID,
        division: number,
        fromId?: number,
    ): Promise<CorporationsCorporationIdWalletsDivisionTransactionsGet> {
        return this.client.request<CorporationsCorporationIdWalletsDivisionTransactionsGet>(
            {
                method: "GET",
                path: `/corporations/${corporationId}/wallets/${division}/transactions`,
                requiresAuth: true,
                scopes: ["esi-wallet.read_corporation_wallets.v1"],
                query: { from_id: fromId },
                rateLimitGroup: "corp-wallet",
            },
        );
    }

    /**
     * Get a list of dogma attribute ids
     *
     * This route expires daily at 11:05
     *
     * @method GET /dogma/attributes
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getDogmaAttributes(): Promise<DogmaAttributesGet> {
        return this.client.request<DogmaAttributesGet>({
            method: "GET",
            path: `/dogma/attributes`,
            requiresAuth: false,
        });
    }

    /**
     * Get information on a dogma attribute
     *
     * This route expires daily at 11:05
     *
     * @param attributeId
     * @method GET /dogma/attributes/{attribute_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getDogmaAttributesAttributeId(
        attributeId: number,
    ): Promise<DogmaAttributesAttributeIdGet> {
        return this.client.request<DogmaAttributesAttributeIdGet>({
            method: "GET",
            path: `/dogma/attributes/${attributeId}`,
            requiresAuth: false,
        });
    }

    /**
     * Returns info about a dynamic item resulting from mutation with a mutaplasmid.
     *
     * This route expires daily at 11:05
     *
     * @param itemId
     * @param typeId
     * @method GET /dogma/dynamic/items/{type_id}/{item_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getDogmaDynamicItemsTypeIdItemId(
        itemId: number,
        typeId: number,
    ): Promise<DogmaDynamicItemsTypeIdItemIdGet> {
        return this.client.request<DogmaDynamicItemsTypeIdItemIdGet>({
            method: "GET",
            path: `/dogma/dynamic/items/${typeId}/${itemId}`,
            requiresAuth: false,
        });
    }

    /**
     * Get a list of dogma effect ids
     *
     * This route expires daily at 11:05
     *
     * @method GET /dogma/effects
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getDogmaEffects(): Promise<DogmaEffectsGet> {
        return this.client.request<DogmaEffectsGet>({
            method: "GET",
            path: `/dogma/effects`,
            requiresAuth: false,
        });
    }

    /**
     * Get information on a dogma effect
     *
     * This route expires daily at 11:05
     *
     * @param effectId
     * @method GET /dogma/effects/{effect_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getDogmaEffectsEffectId(
        effectId: number,
    ): Promise<DogmaEffectsEffectIdGet> {
        return this.client.request<DogmaEffectsEffectIdGet>({
            method: "GET",
            path: `/dogma/effects/${effectId}`,
            requiresAuth: false,
        });
    }

    /**
     * Return details about a fleet
     *
     * @param fleetId
     * @method GET /fleets/{fleet_id}
     * @remarks Rate Limit: fleet | Auth Required: Yes (esi-fleets.read_fleet.v1)
     */
    public async getFleetsFleetId(fleetId: number): Promise<FleetsFleetIdGet> {
        return this.client.request<FleetsFleetIdGet>({
            method: "GET",
            path: `/fleets/${fleetId}`,
            requiresAuth: true,
            scopes: ["esi-fleets.read_fleet.v1"],
            rateLimitGroup: "fleet",
        });
    }

    /**
     * Update settings about a fleet
     *
     * @param fleetId
     * @method PUT /fleets/{fleet_id}
     * @remarks Rate Limit: fleet | Auth Required: Yes (esi-fleets.write_fleet.v1)
     */
    public async putFleetsFleetId(
        fleetId: number,
        body: {
            isFreeMove?: boolean;
            motd?: string;
        },
    ): Promise<void> {
        return this.client.request<void>({
            method: "PUT",
            path: `/fleets/${fleetId}`,
            requiresAuth: true,
            scopes: ["esi-fleets.write_fleet.v1"],
            body,
            rateLimitGroup: "fleet",
        });
    }

    /**
     * Return information about fleet members
     *
     * @param fleetId
     * @method GET /fleets/{fleet_id}/members
     * @remarks Rate Limit: fleet | Auth Required: Yes (esi-fleets.read_fleet.v1)
     */
    public async getFleetsFleetIdMembers(
        fleetId: number,
    ): Promise<FleetsFleetIdMembersGet> {
        return this.client.request<FleetsFleetIdMembersGet>({
            method: "GET",
            path: `/fleets/${fleetId}/members`,
            requiresAuth: true,
            scopes: ["esi-fleets.read_fleet.v1"],
            rateLimitGroup: "fleet",
        });
    }

    /**
     * Invite a character into the fleet. If a character has a CSPA charge set it is not possible to invite them to the fleet using ESI
     *
     * @param fleetId
     * @method POST /fleets/{fleet_id}/members
     * @remarks Rate Limit: fleet | Auth Required: Yes (esi-fleets.write_fleet.v1)
     */
    public async postFleetsFleetIdMembers(
        fleetId: number,
        body: {
            characterId: number;
            role:
                | "fleet_commander"
                | "wing_commander"
                | "squad_commander"
                | "squad_member";
            squadId?: number;
            wingId?: number;
        },
    ): Promise<void> {
        return this.client.request<void>({
            method: "POST",
            path: `/fleets/${fleetId}/members`,
            requiresAuth: true,
            scopes: ["esi-fleets.write_fleet.v1"],
            body,
            rateLimitGroup: "fleet",
        });
    }

    /**
     * Kick a fleet member
     *
     * @param fleetId
     * @param memberId
     * @method DELETE /fleets/{fleet_id}/members/{member_id}
     * @remarks Rate Limit: fleet | Auth Required: Yes (esi-fleets.write_fleet.v1)
     */
    public async deleteFleetsFleetIdMembersMemberId(
        fleetId: number,
        memberId: number,
    ): Promise<void> {
        return this.client.request<void>({
            method: "DELETE",
            path: `/fleets/${fleetId}/members/${memberId}`,
            requiresAuth: true,
            scopes: ["esi-fleets.write_fleet.v1"],
            rateLimitGroup: "fleet",
        });
    }

    /**
     * Move a fleet member around
     *
     * @param fleetId
     * @param memberId
     * @method PUT /fleets/{fleet_id}/members/{member_id}
     * @remarks Rate Limit: fleet | Auth Required: Yes (esi-fleets.write_fleet.v1)
     */
    public async putFleetsFleetIdMembersMemberId(
        fleetId: number,
        memberId: number,
        body: {
            role:
                | "fleet_commander"
                | "wing_commander"
                | "squad_commander"
                | "squad_member";
            squadId?: number;
            wingId?: number;
        },
    ): Promise<void> {
        return this.client.request<void>({
            method: "PUT",
            path: `/fleets/${fleetId}/members/${memberId}`,
            requiresAuth: true,
            scopes: ["esi-fleets.write_fleet.v1"],
            body,
            rateLimitGroup: "fleet",
        });
    }

    /**
     * Delete a fleet squad, only empty squads can be deleted
     *
     * @param fleetId
     * @param squadId
     * @method DELETE /fleets/{fleet_id}/squads/{squad_id}
     * @remarks Rate Limit: fleet | Auth Required: Yes (esi-fleets.write_fleet.v1)
     */
    public async deleteFleetsFleetIdSquadsSquadId(
        fleetId: number,
        squadId: number,
    ): Promise<void> {
        return this.client.request<void>({
            method: "DELETE",
            path: `/fleets/${fleetId}/squads/${squadId}`,
            requiresAuth: true,
            scopes: ["esi-fleets.write_fleet.v1"],
            rateLimitGroup: "fleet",
        });
    }

    /**
     * Rename a fleet squad
     *
     * @param fleetId
     * @param squadId
     * @method PUT /fleets/{fleet_id}/squads/{squad_id}
     * @remarks Rate Limit: fleet | Auth Required: Yes (esi-fleets.write_fleet.v1)
     */
    public async putFleetsFleetIdSquadsSquadId(
        fleetId: number,
        squadId: number,
        body: {
            name: string;
        },
    ): Promise<void> {
        return this.client.request<void>({
            method: "PUT",
            path: `/fleets/${fleetId}/squads/${squadId}`,
            requiresAuth: true,
            scopes: ["esi-fleets.write_fleet.v1"],
            body,
            rateLimitGroup: "fleet",
        });
    }

    /**
     * Return information about wings in a fleet
     *
     * @param fleetId
     * @method GET /fleets/{fleet_id}/wings
     * @remarks Rate Limit: fleet | Auth Required: Yes (esi-fleets.read_fleet.v1)
     */
    public async getFleetsFleetIdWings(
        fleetId: number,
    ): Promise<FleetsFleetIdWingsGet> {
        return this.client.request<FleetsFleetIdWingsGet>({
            method: "GET",
            path: `/fleets/${fleetId}/wings`,
            requiresAuth: true,
            scopes: ["esi-fleets.read_fleet.v1"],
            rateLimitGroup: "fleet",
        });
    }

    /**
     * Create a new wing in a fleet
     *
     * @param fleetId
     * @method POST /fleets/{fleet_id}/wings
     * @remarks Rate Limit: fleet | Auth Required: Yes (esi-fleets.write_fleet.v1)
     */
    public async postFleetsFleetIdWings(
        fleetId: number,
    ): Promise<FleetsFleetIdWingsPost> {
        return this.client.request<FleetsFleetIdWingsPost>({
            method: "POST",
            path: `/fleets/${fleetId}/wings`,
            requiresAuth: true,
            scopes: ["esi-fleets.write_fleet.v1"],
            rateLimitGroup: "fleet",
        });
    }

    /**
     * Delete a fleet wing, only empty wings can be deleted. The wing may contain squads, but the squads must be empty
     *
     * @param fleetId
     * @param wingId
     * @method DELETE /fleets/{fleet_id}/wings/{wing_id}
     * @remarks Rate Limit: fleet | Auth Required: Yes (esi-fleets.write_fleet.v1)
     */
    public async deleteFleetsFleetIdWingsWingId(
        fleetId: number,
        wingId: number,
    ): Promise<void> {
        return this.client.request<void>({
            method: "DELETE",
            path: `/fleets/${fleetId}/wings/${wingId}`,
            requiresAuth: true,
            scopes: ["esi-fleets.write_fleet.v1"],
            rateLimitGroup: "fleet",
        });
    }

    /**
     * Rename a fleet wing
     *
     * @param fleetId
     * @param wingId
     * @method PUT /fleets/{fleet_id}/wings/{wing_id}
     * @remarks Rate Limit: fleet | Auth Required: Yes (esi-fleets.write_fleet.v1)
     */
    public async putFleetsFleetIdWingsWingId(
        fleetId: number,
        wingId: number,
        body: {
            name: string;
        },
    ): Promise<void> {
        return this.client.request<void>({
            method: "PUT",
            path: `/fleets/${fleetId}/wings/${wingId}`,
            requiresAuth: true,
            scopes: ["esi-fleets.write_fleet.v1"],
            body,
            rateLimitGroup: "fleet",
        });
    }

    /**
     * Create a new squad in a fleet
     *
     * @param fleetId
     * @param wingId
     * @method POST /fleets/{fleet_id}/wings/{wing_id}/squads
     * @remarks Rate Limit: fleet | Auth Required: Yes (esi-fleets.write_fleet.v1)
     */
    public async postFleetsFleetIdWingsWingIdSquads(
        fleetId: number,
        wingId: number,
    ): Promise<FleetsFleetIdWingsWingIdSquadsPost> {
        return this.client.request<FleetsFleetIdWingsWingIdSquadsPost>({
            method: "POST",
            path: `/fleets/${fleetId}/wings/${wingId}/squads`,
            requiresAuth: true,
            scopes: ["esi-fleets.write_fleet.v1"],
            rateLimitGroup: "fleet",
        });
    }

    /**
     * Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday
     *
     * This route expires daily at 11:05
     *
     * @method GET /fw/leaderboards
     * @remarks Rate Limit: factional-warfare | Auth Required: No (Public)
     */
    public async getFwLeaderboards(): Promise<FwLeaderboardsGet> {
        return this.client.request<FwLeaderboardsGet>({
            method: "GET",
            path: `/fw/leaderboards`,
            requiresAuth: false,
            rateLimitGroup: "factional-warfare",
        });
    }

    /**
     * Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday
     *
     * This route expires daily at 11:05
     *
     * @method GET /fw/leaderboards/characters
     * @remarks Rate Limit: factional-warfare | Auth Required: No (Public)
     */
    public async getFwLeaderboardsCharacters(): Promise<FwLeaderboardsCharactersGet> {
        return this.client.request<FwLeaderboardsCharactersGet>({
            method: "GET",
            path: `/fw/leaderboards/characters`,
            requiresAuth: false,
            rateLimitGroup: "factional-warfare",
        });
    }

    /**
     * Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday
     *
     * This route expires daily at 11:05
     *
     * @method GET /fw/leaderboards/corporations
     * @remarks Rate Limit: factional-warfare | Auth Required: No (Public)
     */
    public async getFwLeaderboardsCorporations(): Promise<FwLeaderboardsCorporationsGet> {
        return this.client.request<FwLeaderboardsCorporationsGet>({
            method: "GET",
            path: `/fw/leaderboards/corporations`,
            requiresAuth: false,
            rateLimitGroup: "factional-warfare",
        });
    }

    /**
     * Statistical overviews of factions involved in faction warfare
     *
     * This route expires daily at 11:05
     *
     * @method GET /fw/stats
     * @remarks Rate Limit: factional-warfare | Auth Required: No (Public)
     */
    public async getFwStats(): Promise<FwStatsGet> {
        return this.client.request<FwStatsGet>({
            method: "GET",
            path: `/fw/stats`,
            requiresAuth: false,
            rateLimitGroup: "factional-warfare",
        });
    }

    /**
     * An overview of the current ownership of faction warfare solar systems
     *
     * @method GET /fw/systems
     * @remarks Rate Limit: factional-warfare | Auth Required: No (Public)
     */
    public async getFwSystems(): Promise<FwSystemsGet> {
        return this.client.request<FwSystemsGet>({
            method: "GET",
            path: `/fw/systems`,
            requiresAuth: false,
            rateLimitGroup: "factional-warfare",
        });
    }

    /**
     * Data about which NPC factions are at war
     *
     * This route expires daily at 11:05
     *
     * @method GET /fw/wars
     * @remarks Rate Limit: factional-warfare | Auth Required: No (Public)
     */
    public async getFwWars(): Promise<FwWarsGet> {
        return this.client.request<FwWarsGet>({
            method: "GET",
            path: `/fw/wars`,
            requiresAuth: false,
            rateLimitGroup: "factional-warfare",
        });
    }

    /**
     * Return a list of current incursions
     *
     * @method GET /incursions
     * @remarks Rate Limit: incursion | Auth Required: No (Public)
     */
    public async getIncursions(): Promise<IncursionsGet> {
        return this.client.request<IncursionsGet>({
            method: "GET",
            path: `/incursions`,
            requiresAuth: false,
            rateLimitGroup: "incursion",
        });
    }

    /**
     * Return a list of industry facilities
     *
     * @method GET /industry/facilities
     * @remarks Rate Limit: industry | Auth Required: No (Public)
     */
    public async getIndustryFacilities(): Promise<IndustryFacilitiesGet> {
        return this.client.request<IndustryFacilitiesGet>({
            method: "GET",
            path: `/industry/facilities`,
            requiresAuth: false,
            rateLimitGroup: "industry",
        });
    }

    /**
     * Return cost indices for solar systems
     *
     * @method GET /industry/systems
     * @remarks Rate Limit: industry | Auth Required: No (Public)
     */
    public async getIndustrySystems(): Promise<IndustrySystemsGet> {
        return this.client.request<IndustrySystemsGet>({
            method: "GET",
            path: `/industry/systems`,
            requiresAuth: false,
            rateLimitGroup: "industry",
        });
    }

    /**
     * Return available insurance levels for all ship types
     *
     * @method GET /insurance/prices
     * @remarks Rate Limit: insurance | Auth Required: No (Public)
     */
    public async getInsurancePrices(): Promise<InsurancePricesGet> {
        return this.client.request<InsurancePricesGet>({
            method: "GET",
            path: `/insurance/prices`,
            requiresAuth: false,
            rateLimitGroup: "insurance",
        });
    }

    /**
     * Return a single killmail from its ID and hash
     *
     * @param killmailHash
     * @param killmailId
     * @method GET /killmails/{killmail_id}/{killmail_hash}
     * @remarks Rate Limit: killmail | Auth Required: No (Public)
     */
    public async getKillmailsKillmailIdKillmailHash(
        killmailHash: string,
        killmailId: number,
    ): Promise<KillmailsKillmailIdKillmailHashGet> {
        return this.client.request<KillmailsKillmailIdKillmailHashGet>({
            method: "GET",
            path: `/killmails/${killmailId}/${killmailHash}`,
            requiresAuth: false,
            rateLimitGroup: "killmail",
        });
    }

    /**
     * Return a list of offers from a specific corporation's loyalty store
     *
     * This route expires daily at 11:05
     *
     * @param corporationId - The ID of the corporation
     * @method GET /loyalty/stores/{corporation_id}/offers
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getLoyaltyStoresCorporationIdOffers(
        corporationId: CorporationID,
    ): Promise<LoyaltyStoresCorporationIdOffersGet> {
        return this.client.request<LoyaltyStoresCorporationIdOffersGet>({
            method: "GET",
            path: `/loyalty/stores/${corporationId}/offers`,
            requiresAuth: false,
        });
    }

    /**
     * Get a list of item groups
     *
     * This route expires daily at 11:05
     *
     * @method GET /markets/groups
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getMarketsGroups(): Promise<MarketsGroupsGet> {
        return this.client.request<MarketsGroupsGet>({
            method: "GET",
            path: `/markets/groups`,
            requiresAuth: false,
        });
    }

    /**
     * Get information on an item group
     *
     * This route expires daily at 11:05
     *
     * @param marketGroupId
     * @method GET /markets/groups/{market_group_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getMarketsGroupsMarketGroupId(
        marketGroupId: number,
    ): Promise<MarketsGroupsMarketGroupIdGet> {
        return this.client.request<MarketsGroupsMarketGroupIdGet>({
            method: "GET",
            path: `/markets/groups/${marketGroupId}`,
            requiresAuth: false,
        });
    }

    /**
     * Return a list of prices
     *
     * @method GET /markets/prices
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getMarketsPrices(): Promise<MarketsPricesGet> {
        return this.client.request<MarketsPricesGet>({
            method: "GET",
            path: `/markets/prices`,
            requiresAuth: false,
        });
    }

    /**
     * Return all orders in a structure
     *
     * @param page
     * @param structureId
     * @method GET /markets/structures/{structure_id}
     * @remarks Rate Limit: None | Auth Required: Yes (esi-markets.structure_markets.v1)
     */
    public async getMarketsStructuresStructureId(
        structureId: number,
        page?: number,
    ): Promise<MarketsStructuresStructureIdGet> {
        return this.client.request<MarketsStructuresStructureIdGet>({
            method: "GET",
            path: `/markets/structures/${structureId}`,
            requiresAuth: true,
            scopes: ["esi-markets.structure_markets.v1"],
            query: { page: page },
        });
    }

    /**
     * Return a list of historical market statistics for the specified type in a region
     *
     * This route expires daily at 11:05
     *
     * @param regionId
     * @param typeId
     * @method GET /markets/{region_id}/history
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getMarketsRegionIdHistory(
        regionId: number,
        typeId: number,
    ): Promise<MarketsRegionIdHistoryGet> {
        return this.client.request<MarketsRegionIdHistoryGet>({
            method: "GET",
            path: `/markets/${regionId}/history`,
            requiresAuth: false,
            query: { type_id: typeId },
        });
    }

    /**
     * Return a list of orders in a region
     *
     * @param orderType
     * @param page
     * @param regionId
     * @param typeId
     * @method GET /markets/{region_id}/orders
     * @remarks Rate Limit: market-order | Auth Required: No (Public)
     */
    public async getMarketsRegionIdOrders(
        orderType: "buy" | "sell" | "all",
        regionId: number,
        page?: number,
        typeId?: number,
    ): Promise<MarketsRegionIdOrdersGet> {
        return this.client.request<MarketsRegionIdOrdersGet>({
            method: "GET",
            path: `/markets/${regionId}/orders`,
            requiresAuth: false,
            query: { order_type: orderType, page: page, type_id: typeId },
            rateLimitGroup: "market-order",
        });
    }

    /**
     * Return a list of type IDs that have active orders in the region, for efficient market indexing.
     *
     * @param page
     * @param regionId
     * @method GET /markets/{region_id}/types
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getMarketsRegionIdTypes(
        regionId: number,
        page?: number,
    ): Promise<MarketsRegionIdTypesGet> {
        return this.client.request<MarketsRegionIdTypesGet>({
            method: "GET",
            path: `/markets/${regionId}/types`,
            requiresAuth: false,
            query: { page: page },
        });
    }

    /**
     * Get the changelog of this API.
     *
     * @method GET /meta/changelog
     * @remarks Rate Limit: meta | Auth Required: No (Public)
     */
    public async getMetaChangelog(): Promise<MetaChangelog> {
        return this.client.request<MetaChangelog>({
            method: "GET",
            path: `/meta/changelog`,
            requiresAuth: false,
            rateLimitGroup: "meta",
        });
    }

    /**
     * Get a list of compatibility dates.
     *
     * @method GET /meta/compatibility-dates
     * @remarks Rate Limit: meta | Auth Required: No (Public)
     */
    public async getMetaCompatibilityDates(): Promise<MetaCompatibilityDates> {
        return this.client.request<MetaCompatibilityDates>({
            method: "GET",
            path: `/meta/compatibility-dates`,
            requiresAuth: false,
            rateLimitGroup: "meta",
        });
    }

    /**
     * Get the systems between origin and destination
     *
     * @param avoid
     * @param connections
     * @param destination
     * @param flag
     * @param origin
     * @method GET /route/{origin}/{destination}
     * @remarks Rate Limit: routes | Auth Required: No (Public)
     */
    public async getRouteOriginDestination(
        destination: number,
        origin: number,
        avoid?: number[],
        connections?: number[][],
        flag?: "shortest" | "secure" | "insecure",
    ): Promise<RouteOriginDestinationGet> {
        return this.client.request<RouteOriginDestinationGet>({
            method: "GET",
            path: `/route/${origin}/${destination}`,
            requiresAuth: false,
            query: { avoid: avoid, connections: connections, flag: flag },
            rateLimitGroup: "routes",
        });
    }

    /**
     * Shows sovereignty data for campaigns.
     *
     * @method GET /sovereignty/campaigns
     * @remarks Rate Limit: sovereignty | Auth Required: No (Public)
     */
    public async getSovereigntyCampaigns(): Promise<SovereigntyCampaignsGet> {
        return this.client.request<SovereigntyCampaignsGet>({
            method: "GET",
            path: `/sovereignty/campaigns`,
            requiresAuth: false,
            rateLimitGroup: "sovereignty",
        });
    }

    /**
     * Shows sovereignty information for solar systems
     *
     * @method GET /sovereignty/map
     * @remarks Rate Limit: sovereignty | Auth Required: No (Public)
     */
    public async getSovereigntyMap(): Promise<SovereigntyMapGet> {
        return this.client.request<SovereigntyMapGet>({
            method: "GET",
            path: `/sovereignty/map`,
            requiresAuth: false,
            rateLimitGroup: "sovereignty",
        });
    }

    /**
     * Shows sovereignty data for structures.
     *
     * @method GET /sovereignty/structures
     * @remarks Rate Limit: sovereignty | Auth Required: No (Public)
     */
    public async getSovereigntyStructures(): Promise<SovereigntyStructuresGet> {
        return this.client.request<SovereigntyStructuresGet>({
            method: "GET",
            path: `/sovereignty/structures`,
            requiresAuth: false,
            rateLimitGroup: "sovereignty",
        });
    }

    /**
     * EVE Server status
     *
     * @method GET /status
     * @remarks Rate Limit: status | Auth Required: No (Public)
     */
    public async getStatus(): Promise<StatusGet> {
        return this.client.request<StatusGet>({
            method: "GET",
            path: `/status`,
            requiresAuth: false,
            rateLimitGroup: "status",
        });
    }

    /**
     * Set a solar system as autopilot waypoint
     *
     * @param addToBeginning
     * @param clearOtherWaypoints
     * @param destinationId
     * @method POST /ui/autopilot/waypoint
     * @remarks Rate Limit: ui | Auth Required: Yes (esi-ui.write_waypoint.v1)
     */
    public async postUiAutopilotWaypoint(
        addToBeginning: boolean,
        clearOtherWaypoints: boolean,
        destinationId: number,
    ): Promise<void> {
        return this.client.request<void>({
            method: "POST",
            path: `/ui/autopilot/waypoint`,
            requiresAuth: true,
            scopes: ["esi-ui.write_waypoint.v1"],
            query: {
                add_to_beginning: addToBeginning,
                clear_other_waypoints: clearOtherWaypoints,
                destination_id: destinationId,
            },
            rateLimitGroup: "ui",
        });
    }

    /**
     * Open the contract window inside the client
     *
     * @param contractId
     * @method POST /ui/openwindow/contract
     * @remarks Rate Limit: ui | Auth Required: Yes (esi-ui.open_window.v1)
     */
    public async postUiOpenwindowContract(contractId: number): Promise<void> {
        return this.client.request<void>({
            method: "POST",
            path: `/ui/openwindow/contract`,
            requiresAuth: true,
            scopes: ["esi-ui.open_window.v1"],
            query: { contract_id: contractId },
            rateLimitGroup: "ui",
        });
    }

    /**
     * Open the information window for a character, corporation or alliance inside the client
     *
     * @param targetId
     * @method POST /ui/openwindow/information
     * @remarks Rate Limit: ui | Auth Required: Yes (esi-ui.open_window.v1)
     */
    public async postUiOpenwindowInformation(targetId: number): Promise<void> {
        return this.client.request<void>({
            method: "POST",
            path: `/ui/openwindow/information`,
            requiresAuth: true,
            scopes: ["esi-ui.open_window.v1"],
            query: { target_id: targetId },
            rateLimitGroup: "ui",
        });
    }

    /**
     * Open the market details window for a specific typeID inside the client
     *
     * @param typeId
     * @method POST /ui/openwindow/marketdetails
     * @remarks Rate Limit: ui | Auth Required: Yes (esi-ui.open_window.v1)
     */
    public async postUiOpenwindowMarketdetails(typeId: number): Promise<void> {
        return this.client.request<void>({
            method: "POST",
            path: `/ui/openwindow/marketdetails`,
            requiresAuth: true,
            scopes: ["esi-ui.open_window.v1"],
            query: { type_id: typeId },
            rateLimitGroup: "ui",
        });
    }

    /**
     * Open the New Mail window, according to settings from the request if applicable
     *
     * @method POST /ui/openwindow/newmail
     * @remarks Rate Limit: ui | Auth Required: Yes (esi-ui.open_window.v1)
     */
    public async postUiOpenwindowNewmail(body: {
        body: string;
        recipients: number[];
        subject: string;
        toCorpOrAllianceId?: number;
        toMailingListId?: number;
    }): Promise<void> {
        return this.client.request<void>({
            method: "POST",
            path: `/ui/openwindow/newmail`,
            requiresAuth: true,
            scopes: ["esi-ui.open_window.v1"],
            body,
            rateLimitGroup: "ui",
        });
    }

    /**
     * Get all character ancestries
     *
     * This route expires daily at 11:05
     *
     * @method GET /universe/ancestries
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseAncestries(): Promise<UniverseAncestriesGet> {
        return this.client.request<UniverseAncestriesGet>({
            method: "GET",
            path: `/universe/ancestries`,
            requiresAuth: false,
        });
    }

    /**
     * Get information on an asteroid belt
     *
     * This route expires daily at 11:05
     *
     * @param asteroidBeltId
     * @method GET /universe/asteroid_belts/{asteroid_belt_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseAsteroidBeltsAsteroidBeltId(
        asteroidBeltId: number,
    ): Promise<UniverseAsteroidBeltsAsteroidBeltIdGet> {
        return this.client.request<UniverseAsteroidBeltsAsteroidBeltIdGet>({
            method: "GET",
            path: `/universe/asteroid_belts/${asteroidBeltId}`,
            requiresAuth: false,
        });
    }

    /**
     * Get a list of bloodlines
     *
     * This route expires daily at 11:05
     *
     * @method GET /universe/bloodlines
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseBloodlines(): Promise<UniverseBloodlinesGet> {
        return this.client.request<UniverseBloodlinesGet>({
            method: "GET",
            path: `/universe/bloodlines`,
            requiresAuth: false,
        });
    }

    /**
     * Get a list of item categories
     *
     * This route expires daily at 11:05
     *
     * @method GET /universe/categories
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseCategories(): Promise<UniverseCategoriesGet> {
        return this.client.request<UniverseCategoriesGet>({
            method: "GET",
            path: `/universe/categories`,
            requiresAuth: false,
        });
    }

    /**
     * Get information of an item category
     *
     * This route expires daily at 11:05
     *
     * @param categoryId
     * @method GET /universe/categories/{category_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseCategoriesCategoryId(
        categoryId: number,
    ): Promise<UniverseCategoriesCategoryIdGet> {
        return this.client.request<UniverseCategoriesCategoryIdGet>({
            method: "GET",
            path: `/universe/categories/${categoryId}`,
            requiresAuth: false,
        });
    }

    /**
     * Get a list of constellations
     *
     * This route expires daily at 11:05
     *
     * @method GET /universe/constellations
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseConstellations(): Promise<UniverseConstellationsGet> {
        return this.client.request<UniverseConstellationsGet>({
            method: "GET",
            path: `/universe/constellations`,
            requiresAuth: false,
        });
    }

    /**
     * Get information on a constellation
     *
     * This route expires daily at 11:05
     *
     * @param constellationId
     * @method GET /universe/constellations/{constellation_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseConstellationsConstellationId(
        constellationId: number,
    ): Promise<UniverseConstellationsConstellationIdGet> {
        return this.client.request<UniverseConstellationsConstellationIdGet>({
            method: "GET",
            path: `/universe/constellations/${constellationId}`,
            requiresAuth: false,
        });
    }

    /**
     * Get a list of factions
     *
     * This route expires daily at 11:05
     *
     * @method GET /universe/factions
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseFactions(): Promise<UniverseFactionsGet> {
        return this.client.request<UniverseFactionsGet>({
            method: "GET",
            path: `/universe/factions`,
            requiresAuth: false,
        });
    }

    /**
     * Get a list of graphics
     *
     * This route expires daily at 11:05
     *
     * @method GET /universe/graphics
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseGraphics(): Promise<UniverseGraphicsGet> {
        return this.client.request<UniverseGraphicsGet>({
            method: "GET",
            path: `/universe/graphics`,
            requiresAuth: false,
        });
    }

    /**
     * Get information on a graphic
     *
     * This route expires daily at 11:05
     *
     * @param graphicId
     * @method GET /universe/graphics/{graphic_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseGraphicsGraphicId(
        graphicId: number,
    ): Promise<UniverseGraphicsGraphicIdGet> {
        return this.client.request<UniverseGraphicsGraphicIdGet>({
            method: "GET",
            path: `/universe/graphics/${graphicId}`,
            requiresAuth: false,
        });
    }

    /**
     * Get a list of item groups
     *
     * This route expires daily at 11:05
     *
     * @param page
     * @method GET /universe/groups
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseGroups(page?: number): Promise<UniverseGroupsGet> {
        return this.client.request<UniverseGroupsGet>({
            method: "GET",
            path: `/universe/groups`,
            requiresAuth: false,
            query: { page: page },
        });
    }

    /**
     * Get information on an item group
     *
     * This route expires daily at 11:05
     *
     * @param groupId
     * @method GET /universe/groups/{group_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseGroupsGroupId(
        groupId: number,
    ): Promise<UniverseGroupsGroupIdGet> {
        return this.client.request<UniverseGroupsGroupIdGet>({
            method: "GET",
            path: `/universe/groups/${groupId}`,
            requiresAuth: false,
        });
    }

    /**
     * Resolve a set of names to IDs in the following categories: agents, alliances, characters, constellations, corporations factions, inventory_types, regions, stations, and systems. Only exact matches will be returned. All names searched for are cached for 12 hours
     *
     * @method POST /universe/ids
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async postUniverseIds(body: string[]): Promise<UniverseIdsPost> {
        return this.client.request<UniverseIdsPost>({
            method: "POST",
            path: `/universe/ids`,
            requiresAuth: false,
            body,
        });
    }

    /**
     * Get information on a moon
     *
     * This route expires daily at 11:05
     *
     * @param moonId
     * @method GET /universe/moons/{moon_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseMoonsMoonId(
        moonId: number,
    ): Promise<UniverseMoonsMoonIdGet> {
        return this.client.request<UniverseMoonsMoonIdGet>({
            method: "GET",
            path: `/universe/moons/${moonId}`,
            requiresAuth: false,
        });
    }

    /**
     * Resolve a set of IDs to names and categories. Supported ID's for resolving are: Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types, Factions
     *
     * @method POST /universe/names
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async postUniverseNames(body: number[]): Promise<UniverseNamesPost> {
        return this.client.request<UniverseNamesPost>({
            method: "POST",
            path: `/universe/names`,
            requiresAuth: false,
            body,
        });
    }

    /**
     * Get information on a planet
     *
     * This route expires daily at 11:05
     *
     * @param planetId
     * @method GET /universe/planets/{planet_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniversePlanetsPlanetId(
        planetId: number,
    ): Promise<UniversePlanetsPlanetIdGet> {
        return this.client.request<UniversePlanetsPlanetIdGet>({
            method: "GET",
            path: `/universe/planets/${planetId}`,
            requiresAuth: false,
        });
    }

    /**
     * Get a list of character races
     *
     * This route expires daily at 11:05
     *
     * @method GET /universe/races
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseRaces(): Promise<UniverseRacesGet> {
        return this.client.request<UniverseRacesGet>({
            method: "GET",
            path: `/universe/races`,
            requiresAuth: false,
        });
    }

    /**
     * Get a list of regions
     *
     * This route expires daily at 11:05
     *
     * @method GET /universe/regions
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseRegions(): Promise<UniverseRegionsGet> {
        return this.client.request<UniverseRegionsGet>({
            method: "GET",
            path: `/universe/regions`,
            requiresAuth: false,
        });
    }

    /**
     * Get information on a region
     *
     * This route expires daily at 11:05
     *
     * @param regionId
     * @method GET /universe/regions/{region_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseRegionsRegionId(
        regionId: number,
    ): Promise<UniverseRegionsRegionIdGet> {
        return this.client.request<UniverseRegionsRegionIdGet>({
            method: "GET",
            path: `/universe/regions/${regionId}`,
            requiresAuth: false,
        });
    }

    /**
     * Get information on a planetary factory schematic
     *
     * @param schematicId
     * @method GET /universe/schematics/{schematic_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseSchematicsSchematicId(
        schematicId: number,
    ): Promise<UniverseSchematicsSchematicIdGet> {
        return this.client.request<UniverseSchematicsSchematicIdGet>({
            method: "GET",
            path: `/universe/schematics/${schematicId}`,
            requiresAuth: false,
        });
    }

    /**
     * Get information on a stargate
     *
     * This route expires daily at 11:05
     *
     * @param stargateId
     * @method GET /universe/stargates/{stargate_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseStargatesStargateId(
        stargateId: number,
    ): Promise<UniverseStargatesStargateIdGet> {
        return this.client.request<UniverseStargatesStargateIdGet>({
            method: "GET",
            path: `/universe/stargates/${stargateId}`,
            requiresAuth: false,
        });
    }

    /**
     * Get information on a star
     *
     * This route expires daily at 11:05
     *
     * @param starId
     * @method GET /universe/stars/{star_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseStarsStarId(
        starId: number,
    ): Promise<UniverseStarsStarIdGet> {
        return this.client.request<UniverseStarsStarIdGet>({
            method: "GET",
            path: `/universe/stars/${starId}`,
            requiresAuth: false,
        });
    }

    /**
     * Get information on a station
     *
     * This route expires daily at 11:05
     *
     * @param stationId
     * @method GET /universe/stations/{station_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseStationsStationId(
        stationId: number,
    ): Promise<UniverseStationsStationIdGet> {
        return this.client.request<UniverseStationsStationIdGet>({
            method: "GET",
            path: `/universe/stations/${stationId}`,
            requiresAuth: false,
        });
    }

    /**
     * List all public structures
     *
     * @param filter
     * @method GET /universe/structures
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseStructures(
        filter?: "market" | "manufacturing_basic",
    ): Promise<UniverseStructuresGet> {
        return this.client.request<UniverseStructuresGet>({
            method: "GET",
            path: `/universe/structures`,
            requiresAuth: false,
            query: { filter: filter },
        });
    }

    /**
     * Returns information on requested structure if you are on the ACL. Otherwise, returns "Forbidden" for all inputs.
     *
     * @param structureId
     * @method GET /universe/structures/{structure_id}
     * @remarks Rate Limit: None | Auth Required: Yes (esi-universe.read_structures.v1)
     */
    public async getUniverseStructuresStructureId(
        structureId: number,
    ): Promise<UniverseStructuresStructureIdGet> {
        return this.client.request<UniverseStructuresStructureIdGet>({
            method: "GET",
            path: `/universe/structures/${structureId}`,
            requiresAuth: true,
            scopes: ["esi-universe.read_structures.v1"],
        });
    }

    /**
     * Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with jumps will be listed
     *
     * @method GET /universe/system_jumps
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseSystemJumps(): Promise<UniverseSystemJumpsGet> {
        return this.client.request<UniverseSystemJumpsGet>({
            method: "GET",
            path: `/universe/system_jumps`,
            requiresAuth: false,
        });
    }

    /**
     * Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with kills will be listed
     *
     * @method GET /universe/system_kills
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseSystemKills(): Promise<UniverseSystemKillsGet> {
        return this.client.request<UniverseSystemKillsGet>({
            method: "GET",
            path: `/universe/system_kills`,
            requiresAuth: false,
        });
    }

    /**
     * Get a list of solar systems
     *
     * This route expires daily at 11:05
     *
     * @method GET /universe/systems
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseSystems(): Promise<UniverseSystemsGet> {
        return this.client.request<UniverseSystemsGet>({
            method: "GET",
            path: `/universe/systems`,
            requiresAuth: false,
        });
    }

    /**
     * Get information on a solar system.
     *
     * This route expires daily at 11:05
     *
     * @param systemId
     * @method GET /universe/systems/{system_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseSystemsSystemId(
        systemId: number,
    ): Promise<UniverseSystemsSystemIdGet> {
        return this.client.request<UniverseSystemsSystemIdGet>({
            method: "GET",
            path: `/universe/systems/${systemId}`,
            requiresAuth: false,
        });
    }

    /**
     * Get a list of type ids
     *
     * This route expires daily at 11:05
     *
     * @param page
     * @method GET /universe/types
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseTypes(page?: number): Promise<UniverseTypesGet> {
        return this.client.request<UniverseTypesGet>({
            method: "GET",
            path: `/universe/types`,
            requiresAuth: false,
            query: { page: page },
        });
    }

    /**
     * Get information on a type
     *
     * This route expires daily at 11:05
     *
     * @param typeId
     * @method GET /universe/types/{type_id}
     * @remarks Rate Limit: None | Auth Required: No (Public)
     */
    public async getUniverseTypesTypeId(
        typeId: number,
    ): Promise<UniverseTypesTypeIdGet> {
        return this.client.request<UniverseTypesTypeIdGet>({
            method: "GET",
            path: `/universe/types/${typeId}`,
            requiresAuth: false,
        });
    }

    /**
     * Return a list of wars
     *
     * @param maxWarId
     * @method GET /wars
     * @remarks Rate Limit: killmail | Auth Required: No (Public)
     */
    public async getWars(maxWarId?: number): Promise<WarsGet> {
        return this.client.request<WarsGet>({
            method: "GET",
            path: `/wars`,
            requiresAuth: false,
            query: { max_war_id: maxWarId },
            rateLimitGroup: "killmail",
        });
    }

    /**
     * Return details about a war
     *
     * @param warId
     * @method GET /wars/{war_id}
     * @remarks Rate Limit: killmail | Auth Required: No (Public)
     */
    public async getWarsWarId(warId: number): Promise<WarsWarIdGet> {
        return this.client.request<WarsWarIdGet>({
            method: "GET",
            path: `/wars/${warId}`,
            requiresAuth: false,
            rateLimitGroup: "killmail",
        });
    }

    /**
     * Return a list of kills related to a war
     *
     * @param page
     * @param warId
     * @method GET /wars/{war_id}/killmails
     * @remarks Rate Limit: killmail | Auth Required: No (Public)
     */
    public async getWarsWarIdKillmails(
        warId: number,
        page?: number,
    ): Promise<WarsWarIdKillmailsGet> {
        return this.client.request<WarsWarIdKillmailsGet>({
            method: "GET",
            path: `/wars/${warId}/killmails`,
            requiresAuth: false,
            query: { page: page },
            rateLimitGroup: "killmail",
        });
    }
}

/**
 * All available ESI OAuth2 Scopes
 */
export type EsiScope =
    | "esi-access.read_lists.v1"
    | "esi-activities.read_character.v1"
    | "esi-alliances.read_contacts.v1"
    | "esi-assets.read_assets.v1"
    | "esi-assets.read_corporation_assets.v1"
    | "esi-calendar.read_calendar_events.v1"
    | "esi-calendar.respond_calendar_events.v1"
    | "esi-characters.read_agents_research.v1"
    | "esi-characters.read_blueprints.v1"
    | "esi-characters.read_contacts.v1"
    | "esi-characters.read_corporation_roles.v1"
    | "esi-characters.read_fatigue.v1"
    | "esi-characters.read_freelance_jobs.v1"
    | "esi-characters.read_fw_stats.v1"
    | "esi-characters.read_loyalty.v1"
    | "esi-characters.read_medals.v1"
    | "esi-characters.read_notifications.v1"
    | "esi-characters.read_standings.v1"
    | "esi-characters.read_titles.v1"
    | "esi-characters.write_contacts.v1"
    | "esi-clones.read_clones.v1"
    | "esi-clones.read_implants.v1"
    | "esi-contracts.read_character_contracts.v1"
    | "esi-contracts.read_corporation_contracts.v1"
    | "esi-corporations.read_blueprints.v1"
    | "esi-corporations.read_contacts.v1"
    | "esi-corporations.read_container_logs.v1"
    | "esi-corporations.read_corporation_membership.v1"
    | "esi-corporations.read_divisions.v1"
    | "esi-corporations.read_facilities.v1"
    | "esi-corporations.read_freelance_jobs.v1"
    | "esi-corporations.read_fw_stats.v1"
    | "esi-corporations.read_medals.v1"
    | "esi-corporations.read_projects.v1"
    | "esi-corporations.read_standings.v1"
    | "esi-corporations.read_starbases.v1"
    | "esi-corporations.read_structures.v1"
    | "esi-corporations.read_titles.v1"
    | "esi-corporations.track_members.v1"
    | "esi-fittings.read_fittings.v1"
    | "esi-fittings.write_fittings.v1"
    | "esi-fleets.read_fleet.v1"
    | "esi-fleets.write_fleet.v1"
    | "esi-industry.read_character_jobs.v1"
    | "esi-industry.read_character_mining.v1"
    | "esi-industry.read_corporation_jobs.v1"
    | "esi-industry.read_corporation_mining.v1"
    | "esi-killmails.read_corporation_killmails.v1"
    | "esi-killmails.read_killmails.v1"
    | "esi-location.read_location.v1"
    | "esi-location.read_online.v1"
    | "esi-location.read_ship_type.v1"
    | "esi-mail.organize_mail.v1"
    | "esi-mail.read_mail.v1"
    | "esi-mail.send_mail.v1"
    | "esi-markets.read_character_orders.v1"
    | "esi-markets.read_corporation_orders.v1"
    | "esi-markets.structure_markets.v1"
    | "esi-planets.manage_planets.v1"
    | "esi-planets.read_customs_offices.v1"
    | "esi-search.search_structures.v1"
    | "esi-skills.read_skillqueue.v1"
    | "esi-skills.read_skills.v1"
    | "esi-structures.read_character.v1"
    | "esi-structures.read_corporation.v1"
    | "esi-ui.open_window.v1"
    | "esi-ui.write_waypoint.v1"
    | "esi-universe.read_structures.v1"
    | "esi-wallet.read_character_wallet.v1"
    | "esi-wallet.read_corporation_wallets.v1";

/**
 * Array of all scopes for runtime validation
 */
export const ESI_SCOPES: EsiScope[] = [
    "esi-access.read_lists.v1",
    "esi-activities.read_character.v1",
    "esi-alliances.read_contacts.v1",
    "esi-assets.read_assets.v1",
    "esi-assets.read_corporation_assets.v1",
    "esi-calendar.read_calendar_events.v1",
    "esi-calendar.respond_calendar_events.v1",
    "esi-characters.read_agents_research.v1",
    "esi-characters.read_blueprints.v1",
    "esi-characters.read_contacts.v1",
    "esi-characters.read_corporation_roles.v1",
    "esi-characters.read_fatigue.v1",
    "esi-characters.read_freelance_jobs.v1",
    "esi-characters.read_fw_stats.v1",
    "esi-characters.read_loyalty.v1",
    "esi-characters.read_medals.v1",
    "esi-characters.read_notifications.v1",
    "esi-characters.read_standings.v1",
    "esi-characters.read_titles.v1",
    "esi-characters.write_contacts.v1",
    "esi-clones.read_clones.v1",
    "esi-clones.read_implants.v1",
    "esi-contracts.read_character_contracts.v1",
    "esi-contracts.read_corporation_contracts.v1",
    "esi-corporations.read_blueprints.v1",
    "esi-corporations.read_contacts.v1",
    "esi-corporations.read_container_logs.v1",
    "esi-corporations.read_corporation_membership.v1",
    "esi-corporations.read_divisions.v1",
    "esi-corporations.read_facilities.v1",
    "esi-corporations.read_freelance_jobs.v1",
    "esi-corporations.read_fw_stats.v1",
    "esi-corporations.read_medals.v1",
    "esi-corporations.read_projects.v1",
    "esi-corporations.read_standings.v1",
    "esi-corporations.read_starbases.v1",
    "esi-corporations.read_structures.v1",
    "esi-corporations.read_titles.v1",
    "esi-corporations.track_members.v1",
    "esi-fittings.read_fittings.v1",
    "esi-fittings.write_fittings.v1",
    "esi-fleets.read_fleet.v1",
    "esi-fleets.write_fleet.v1",
    "esi-industry.read_character_jobs.v1",
    "esi-industry.read_character_mining.v1",
    "esi-industry.read_corporation_jobs.v1",
    "esi-industry.read_corporation_mining.v1",
    "esi-killmails.read_corporation_killmails.v1",
    "esi-killmails.read_killmails.v1",
    "esi-location.read_location.v1",
    "esi-location.read_online.v1",
    "esi-location.read_ship_type.v1",
    "esi-mail.organize_mail.v1",
    "esi-mail.read_mail.v1",
    "esi-mail.send_mail.v1",
    "esi-markets.read_character_orders.v1",
    "esi-markets.read_corporation_orders.v1",
    "esi-markets.structure_markets.v1",
    "esi-planets.manage_planets.v1",
    "esi-planets.read_customs_offices.v1",
    "esi-search.search_structures.v1",
    "esi-skills.read_skillqueue.v1",
    "esi-skills.read_skills.v1",
    "esi-structures.read_character.v1",
    "esi-structures.read_corporation.v1",
    "esi-ui.open_window.v1",
    "esi-ui.write_waypoint.v1",
    "esi-universe.read_structures.v1",
    "esi-wallet.read_character_wallet.v1",
    "esi-wallet.read_corporation_wallets.v1",
];
