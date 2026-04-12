// AUTO-GENERATED CODE - DO NOT MODIFY BY HAND
// Generated from Eve Online ESI OpenAPI spec

import { EsiRequester } from "../client/EsiRequester";

export type AccessListID = number;

export interface AllianceDetail {
    creatorCorporationId: CorporationID;
    creatorId: CharacterID;
    dateFounded: string;
    executorCorporationId?: CorporationID;
    factionId?: FactionID;
    name: string;
    ticker: string;
}

export type AllianceID = number;

export type AlliancesAllianceIdContactsGet = Array<{
    contactId: number;
    contactType: "character" | "corporation" | "alliance" | "faction";
    labelIds?: number[];
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
    allianceId?: number;
    characterId: number;
    corporationId: number;
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
    accruedRemapCooldownDate?: string;
    bonusRemaps?: number;
    charisma: number;
    intelligence: number;
    lastRemapDate?: string;
    memory: number;
    perception: number;
    willpower: number;
}

export type CharactersCharacterIdBlueprintsGet = Array<{
    itemId: number;
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
    locationId: number;
    materialEfficiency: number;
    quantity: number;
    runs: number;
    timeEfficiency: number;
    typeId: number;
}>;

export type CharactersCharacterIdCalendarEventIdAttendeesGet = Array<{
    characterId?: number;
    eventResponse?: "declined" | "not_responded" | "accepted" | "tentative";
}>;

export interface CharactersCharacterIdCalendarEventIdGet {
    date: string;
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
    isBlocked?: boolean;
    isWatched?: boolean;
    labelIds?: number[];
    standing: number;
}>;

export type CharactersCharacterIdContactsLabelsGet = Array<{
    labelId: number;
    labelName: string;
}>;

export type CharactersCharacterIdContactsPost = number[];

export type CharactersCharacterIdContractsContractIdBidsGet = Array<{
    amount: number;
    bidId: number;
    bidderId: number;
    dateBid: string;
}>;

export type CharactersCharacterIdContractsContractIdItemsGet = Array<{
    isIncluded: boolean;
    isSingleton: boolean;
    quantity: number;
    rawQuantity?: number;
    recordId: number;
    typeId: number;
}>;

export type CharactersCharacterIdContractsGet = Array<{
    acceptorId: number;
    assigneeId: number;
    availability: "public" | "personal" | "corporation" | "alliance";
    buyout?: number;
    collateral?: number;
    contractId: number;
    dateAccepted?: string;
    dateCompleted?: string;
    dateExpired: string;
    dateIssued: string;
    daysToComplete?: number;
    endLocationId?: number;
    forCorporation: boolean;
    issuerCorporationId: number;
    issuerId: number;
    price?: number;
    reward?: number;
    startLocationId?: number;
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
    title?: string;
    type: "unknown" | "item_exchange" | "auction" | "courier" | "loan";
    volume?: number;
}>;

export type CharactersCharacterIdCorporationhistoryGet = Array<{
    corporationId: number;
    isDeleted?: boolean;
    recordId: number;
    startDate: string;
}>;

export type CharactersCharacterIdCspaPost = number;

export interface CharactersCharacterIdFatigueGet {
    jumpFatigueExpireDate?: string;
    lastJumpDate?: string;
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

export interface CharactersCharacterIdFittingsPost {
    fittingId: number;
}

export interface CharactersCharacterIdFleetGet {
    fleetBossId: number;
    fleetId: number;
    role:
        | "fleet_commander"
        | "squad_commander"
        | "squad_member"
        | "wing_commander";
    squadId: number;
    wingId: number;
}

export interface CharactersCharacterIdFwStatsGet {
    currentRank?: number;
    enlistedOn?: string;
    factionId?: number;
    highestRank?: number;
    kills: {
        lastWeek: number;
        total: number;
        yesterday: number;
    };
    victoryPoints: {
        lastWeek: number;
        total: number;
        yesterday: number;
    };
}

export type CharactersCharacterIdImplantsGet = number[];

export type CharactersCharacterIdIndustryJobsGet = Array<{
    activityId: number;
    blueprintId: number;
    blueprintLocationId: number;
    blueprintTypeId: number;
    completedCharacterId?: number;
    completedDate?: string;
    cost?: number;
    duration: number;
    endDate: string;
    facilityId: number;
    installerId: number;
    jobId: number;
    licensedRuns?: number;
    outputLocationId: number;
    pauseDate?: string;
    probability?: number;
    productTypeId?: number;
    runs: number;
    startDate: string;
    stationId: number;
    status:
        | "active"
        | "cancelled"
        | "delivered"
        | "paused"
        | "ready"
        | "reverted";
    successfulRuns?: number;
}>;

export type CharactersCharacterIdKillmailsRecentGet = Array<{
    killmailHash: string;
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
    from?: number;
    isRead?: boolean;
    labels?: number[];
    mailId?: number;
    recipients?: Array<{
        recipientId: number;
        recipientType:
            | "alliance"
            | "character"
            | "corporation"
            | "mailing_list";
    }>;
    subject?: string;
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

export type CharactersCharacterIdMailLabelsPost = number;

export type CharactersCharacterIdMailListsGet = Array<{
    mailingListId: number;
    name: string;
}>;

export interface CharactersCharacterIdMailMailIdGet {
    body?: string;
    from?: number;
    labels?: number[];
    read?: boolean;
    recipients?: Array<{
        recipientId: number;
        recipientType:
            | "alliance"
            | "character"
            | "corporation"
            | "mailing_list";
    }>;
    subject?: string;
    timestamp?: string;
}

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
    lastLogin?: string;
    lastLogout?: string;
    logins?: number;
    online: boolean;
}

export type CharactersCharacterIdOrdersGet = Array<{
    duration: number;
    escrow?: number;
    isBuyOrder?: boolean;
    isCorporation: boolean;
    issued: string;
    locationId: number;
    minVolume?: number;
    orderId: number;
    price: number;
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
    regionId: number;
    typeId: number;
    volumeRemain: number;
    volumeTotal: number;
}>;

export type CharactersCharacterIdOrdersHistoryGet = Array<{
    duration: number;
    escrow?: number;
    isBuyOrder?: boolean;
    isCorporation: boolean;
    issued: string;
    locationId: number;
    minVolume?: number;
    orderId: number;
    price: number;
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
    regionId: number;
    state: "cancelled" | "expired";
    typeId: number;
    volumeRemain: number;
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

export type CharactersCharacterIdWalletGet = number;

export type CharactersCharacterIdWalletJournalGet = Array<{
    amount?: number;
    balance?: number;
    contextId?: number;
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
    date: string;
    description: string;
    firstPartyId?: number;
    id: number;
    reason?: string;
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
    secondPartyId?: number;
    tax?: number;
    taxReceiverId?: number;
}>;

export type CharactersCharacterIdWalletTransactionsGet = Array<{
    clientId: number;
    date: string;
    isBuy: boolean;
    isPersonal: boolean;
    journalRefId: number;
    locationId: number;
    quantity: number;
    transactionId: number;
    typeId: number;
    unitPrice: number;
}>;

export interface CharactersDetail {
    allianceId?: AllianceID;
    birthday: string;
    bloodlineId: BloodlineID;
    corporationId: CorporationID;
    description?: string;
    factionId?: FactionID;
    gender: "male" | "female";
    name: string;
    raceId: RaceID;
    securityStatus?: number;
    title?: string;
}

export interface CharactersSkillqueueSkill {
    finishDate?: string;
    finishedLevel: number;
    levelEndSp?: number;
    levelStartSp?: number;
    queuePosition: number;
    skillId: TypeID;
    startDate?: string;
    trainingStartSp?: number;
}

export interface CharactersSkills {
    skills: CharactersSkillsSkill[];
    totalSp: number;
    unallocatedSp?: number;
}

export interface CharactersSkillsSkill {
    activeSkillLevel: number;
    skillId: number;
    skillpointsInSkill: number;
    trainedSkillLevel: number;
}

export type CompatibilityDate = string;

export type ConstellationID = number;

export type ContractsPublicBidsContractIdGet = Array<{
    amount: number;
    bidId: number;
    dateBid: string;
}>;

export type ContractsPublicItemsContractIdGet = Array<{
    isBlueprintCopy?: boolean;
    isIncluded: boolean;
    itemId?: number;
    materialEfficiency?: number;
    quantity: number;
    recordId: number;
    runs?: number;
    timeEfficiency?: number;
    typeId: number;
}>;

export type ContractsPublicRegionIdGet = Array<{
    buyout?: number;
    collateral?: number;
    contractId: number;
    dateExpired: string;
    dateIssued: string;
    daysToComplete?: number;
    endLocationId?: number;
    forCorporation?: boolean;
    issuerCorporationId: number;
    issuerId: number;
    price?: number;
    reward?: number;
    startLocationId?: number;
    title?: string;
    type: "unknown" | "item_exchange" | "auction" | "courier" | "loan";
    volume?: number;
}>;

export type CorporationCorporationIdMiningExtractionsGet = Array<{
    chunkArrivalTime: string;
    extractionStartTime: string;
    moonId: number;
    naturalDecayTime: string;
    structureId: number;
}>;

export type CorporationCorporationIdMiningObserversGet = Array<{
    lastUpdated: string;
    observerId: number;
    observerType: "structure";
}>;

export type CorporationCorporationIdMiningObserversObserverIdGet = Array<{
    characterId: number;
    lastUpdated: string;
    quantity: number;
    recordedCorporationId: number;
    typeId: number;
}>;

export type CorporationID = number;

export type CorporationsCorporationIdAlliancehistoryGet = Array<{
    allianceId?: number;
    isDeleted?: boolean;
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
    materialEfficiency: number;
    quantity: number;
    runs: number;
    timeEfficiency: number;
    typeId: number;
}>;

export type CorporationsCorporationIdContactsGet = Array<{
    contactId: number;
    contactType: "character" | "corporation" | "alliance" | "faction";
    isWatched?: boolean;
    labelIds?: number[];
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
    characterId: number;
    containerId: number;
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
    loggedAt: string;
    newConfigBitmask?: number;
    oldConfigBitmask?: number;
    passwordType?: "config" | "general";
    quantity?: number;
    typeId?: number;
}>;

export type CorporationsCorporationIdContractsContractIdBidsGet = Array<{
    amount: number;
    bidId: number;
    bidderId: number;
    dateBid: string;
}>;

export type CorporationsCorporationIdContractsContractIdItemsGet = Array<{
    isIncluded: boolean;
    isSingleton: boolean;
    quantity: number;
    rawQuantity?: number;
    recordId: number;
    typeId: number;
}>;

export type CorporationsCorporationIdContractsGet = Array<{
    acceptorId: number;
    assigneeId: number;
    availability: "public" | "personal" | "corporation" | "alliance";
    buyout?: number;
    collateral?: number;
    contractId: number;
    dateAccepted?: string;
    dateCompleted?: string;
    dateExpired: string;
    dateIssued: string;
    daysToComplete?: number;
    endLocationId?: number;
    forCorporation: boolean;
    issuerCorporationId: number;
    issuerId: number;
    price?: number;
    reward?: number;
    startLocationId?: number;
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
    title?: string;
    type: "unknown" | "item_exchange" | "auction" | "courier" | "loan";
    volume?: number;
}>;

export type CorporationsCorporationIdCustomsOfficesGet = Array<{
    allianceTaxRate?: number;
    allowAccessWithStandings: boolean;
    allowAllianceAccess: boolean;
    badStandingTaxRate?: number;
    corporationTaxRate?: number;
    excellentStandingTaxRate?: number;
    goodStandingTaxRate?: number;
    neutralStandingTaxRate?: number;
    officeId: number;
    reinforceExitEnd: number;
    reinforceExitStart: number;
    standingLevel?: "bad" | "excellent" | "good" | "neutral" | "terrible";
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
    enlistedOn?: string;
    factionId?: number;
    kills: {
        lastWeek: number;
        total: number;
        yesterday: number;
    };
    pilots?: number;
    victoryPoints: {
        lastWeek: number;
        total: number;
        yesterday: number;
    };
}

export interface CorporationsCorporationIdIconsGet {
    px128x128?: string;
    px256x256?: string;
    px64x64?: string;
}

export type CorporationsCorporationIdIndustryJobsGet = Array<{
    activityId: number;
    blueprintId: number;
    blueprintLocationId: number;
    blueprintTypeId: number;
    completedCharacterId?: number;
    completedDate?: string;
    cost?: number;
    duration: number;
    endDate: string;
    facilityId: number;
    installerId: number;
    jobId: number;
    licensedRuns?: number;
    locationId: number;
    outputLocationId: number;
    pauseDate?: string;
    probability?: number;
    productTypeId?: number;
    runs: number;
    startDate: string;
    status:
        | "active"
        | "cancelled"
        | "delivered"
        | "paused"
        | "ready"
        | "reverted";
    successfulRuns?: number;
}>;

export type CorporationsCorporationIdKillmailsRecentGet = Array<{
    killmailHash: string;
    killmailId: number;
}>;

export type CorporationsCorporationIdMedalsGet = Array<{
    createdAt: string;
    creatorId: number;
    description: string;
    medalId: number;
    title: string;
}>;

export type CorporationsCorporationIdMedalsIssuedGet = Array<{
    characterId: number;
    issuedAt: string;
    issuerId: number;
    medalId: number;
    reason: string;
    status: "private" | "public";
}>;

export type CorporationsCorporationIdMembersGet = number[];

export type CorporationsCorporationIdMembersLimitGet = number;

export type CorporationsCorporationIdMembersTitlesGet = Array<{
    characterId: number;
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
    duration: number;
    escrow?: number;
    isBuyOrder?: boolean;
    issued: string;
    issuedBy: number;
    locationId: number;
    minVolume?: number;
    orderId: number;
    price: number;
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
    regionId: number;
    typeId: number;
    volumeRemain: number;
    volumeTotal: number;
    walletDivision: number;
}>;

export type CorporationsCorporationIdOrdersHistoryGet = Array<{
    duration: number;
    escrow?: number;
    isBuyOrder?: boolean;
    issued: string;
    issuedBy?: number;
    locationId: number;
    minVolume?: number;
    orderId: number;
    price: number;
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
    regionId: number;
    state: "cancelled" | "expired";
    typeId: number;
    volumeRemain: number;
    volumeTotal: number;
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
    characterId: number;
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
    moonId?: number;
    onlinedSince?: string;
    reinforcedUntil?: string;
    starbaseId: number;
    state?: "offline" | "online" | "onlining" | "reinforced" | "unanchoring";
    systemId: number;
    typeId: number;
    unanchorAt?: string;
}>;

export interface CorporationsCorporationIdStarbasesStarbaseIdGet {
    allowAllianceMembers: boolean;
    allowCorporationMembers: boolean;
    anchor:
        | "alliance_member"
        | "config_starbase_equipment_role"
        | "corporation_member"
        | "starbase_fuel_technician_role";
    attackIfAtWar: boolean;
    attackIfOtherSecurityStatusDropping: boolean;
    attackSecurityStatusThreshold?: number;
    attackStandingThreshold?: number;
    fuelBayTake:
        | "alliance_member"
        | "config_starbase_equipment_role"
        | "corporation_member"
        | "starbase_fuel_technician_role";
    fuelBayView:
        | "alliance_member"
        | "config_starbase_equipment_role"
        | "corporation_member"
        | "starbase_fuel_technician_role";
    fuels?: Array<{
        quantity: number;
        typeId: number;
    }>;
    offline:
        | "alliance_member"
        | "config_starbase_equipment_role"
        | "corporation_member"
        | "starbase_fuel_technician_role";
    online:
        | "alliance_member"
        | "config_starbase_equipment_role"
        | "corporation_member"
        | "starbase_fuel_technician_role";
    unanchor:
        | "alliance_member"
        | "config_starbase_equipment_role"
        | "corporation_member"
        | "starbase_fuel_technician_role";
    useAllianceStandings: boolean;
}

export type CorporationsCorporationIdStructuresGet = Array<{
    corporationId: number;
    fuelExpires?: string;
    name?: string;
    nextReinforceApply?: string;
    nextReinforceHour?: number;
    profileId: number;
    reinforceHour?: number;
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
    stateTimerEnd?: string;
    stateTimerStart?: string;
    structureId: number;
    systemId: number;
    typeId: number;
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

export type CorporationsCorporationIdWalletsDivisionJournalGet = Array<{
    amount?: number;
    balance?: number;
    contextId?: number;
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
    date: string;
    description: string;
    firstPartyId?: number;
    id: number;
    reason?: string;
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
    secondPartyId?: number;
    tax?: number;
    taxReceiverId?: number;
}>;

export type CorporationsCorporationIdWalletsDivisionTransactionsGet = Array<{
    clientId: number;
    date: string;
    isBuy: boolean;
    journalRefId: number;
    locationId: number;
    quantity: number;
    transactionId: number;
    typeId: number;
    unitPrice: number;
}>;

export type CorporationsCorporationIdWalletsGet = Array<{
    balance: number;
    division: number;
}>;

export interface CorporationsDetail {
    allianceId?: AllianceID;
    ceoId: CharacterID;
    creatorId: CharacterID;
    dateFounded?: string;
    description?: string;
    factionId?: FactionID;
    homeStationId?: StationID;
    memberCount: number;
    name: string;
    shares?: number;
    taxRate: number;
    ticker: string;
    url?: string;
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
    createdBy: number;
    dogmaAttributes: Array<{
        attributeId: number;
        value: number;
    }>;
    dogmaEffects: Array<{
        effectId: number;
        isDefault: boolean;
    }>;
    mutatorTypeId: number;
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
    details?: ErrorDetail[];
    error: string;
}

export interface ErrorDetail {
    location?: string;
    message?: string;
    value?: unknown;
}

export type FactionID = number;

export interface FleetsFleetIdGet {
    isFreeMove: boolean;
    isRegistered: boolean;
    isVoiceEnabled: boolean;
    motd: string;
}

export type FleetsFleetIdMembersGet = Array<{
    characterId: number;
    joinTime: string;
    role:
        | "fleet_commander"
        | "wing_commander"
        | "squad_commander"
        | "squad_member";
    roleName: string;
    shipTypeId: number;
    solarSystemId: number;
    squadId: number;
    stationId?: number;
    takesFleetWarp: boolean;
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

export interface FleetsFleetIdWingsPost {
    wingId: number;
}

export interface FleetsFleetIdWingsWingIdSquadsPost {
    squadId: number;
}

export interface FwLeaderboardsCharactersGet {
    kills: {
        activeTotal: Array<{
            amount?: number;
            characterId?: number;
        }>;
        lastWeek: Array<{
            amount?: number;
            characterId?: number;
        }>;
        yesterday: Array<{
            amount?: number;
            characterId?: number;
        }>;
    };
    victoryPoints: {
        activeTotal: Array<{
            amount?: number;
            characterId?: number;
        }>;
        lastWeek: Array<{
            amount?: number;
            characterId?: number;
        }>;
        yesterday: Array<{
            amount?: number;
            characterId?: number;
        }>;
    };
}

export interface FwLeaderboardsCorporationsGet {
    kills: {
        activeTotal: Array<{
            amount?: number;
            corporationId?: number;
        }>;
        lastWeek: Array<{
            amount?: number;
            corporationId?: number;
        }>;
        yesterday: Array<{
            amount?: number;
            corporationId?: number;
        }>;
    };
    victoryPoints: {
        activeTotal: Array<{
            amount?: number;
            corporationId?: number;
        }>;
        lastWeek: Array<{
            amount?: number;
            corporationId?: number;
        }>;
        yesterday: Array<{
            amount?: number;
            corporationId?: number;
        }>;
    };
}

export interface FwLeaderboardsGet {
    kills: {
        activeTotal: Array<{
            amount?: number;
            factionId?: number;
        }>;
        lastWeek: Array<{
            amount?: number;
            factionId?: number;
        }>;
        yesterday: Array<{
            amount?: number;
            factionId?: number;
        }>;
    };
    victoryPoints: {
        activeTotal: Array<{
            amount?: number;
            factionId?: number;
        }>;
        lastWeek: Array<{
            amount?: number;
            factionId?: number;
        }>;
        yesterday: Array<{
            amount?: number;
            factionId?: number;
        }>;
    };
}

export type FwStatsGet = Array<{
    factionId: number;
    kills: {
        lastWeek: number;
        total: number;
        yesterday: number;
    };
    pilots: number;
    systemsControlled: number;
    victoryPoints: {
        lastWeek: number;
        total: number;
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

export type FwWarsGet = Array<{
    againstId: number;
    factionId: number;
}>;

export type GroupID = number;

export type IncursionsGet = Array<{
    constellationId: number;
    factionId: number;
    hasBoss: boolean;
    infestedSolarSystems: number[];
    influence: number;
    stagingSolarSystemId: number;
    state: "withdrawing" | "mobilizing" | "established";
    type: string;
}>;

export type IndustryFacilitiesGet = Array<{
    facilityId: number;
    ownerId: number;
    regionId: number;
    solarSystemId: number;
    tax?: number;
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
    levels: Array<{
        cost: number;
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
        finalBlow: boolean;
        securityStatus: number;
        shipTypeId?: number;
        weaponTypeId?: number;
    }>;
    killmailId: number;
    killmailTime: string;
    moonId?: number;
    solarSystemId: number;
    victim: {
        allianceId?: number;
        characterId?: number;
        corporationId?: number;
        damageTaken: number;
        factionId?: number;
        items?: Array<{
            flag: number;
            itemTypeId: number;
            items?: Array<{
                flag: number;
                itemTypeId: number;
                quantityDestroyed?: number;
                quantityDropped?: number;
                singleton: number;
            }>;
            quantityDestroyed?: number;
            quantityDropped?: number;
            singleton: number;
        }>;
        position?: {
            x: number;
            y: number;
            z: number;
        };
        shipTypeId: number;
    };
    warId?: number;
}

export type LoyaltyStoresCorporationIdOffersGet = Array<{
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
    date: string;
    highest: number;
    lowest: number;
    orderCount: number;
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
    changelog: Record<string, MetaChangelogEntry[]>;
}

export interface MetaChangelogEntry {
    compatibilityDate: CompatibilityDate;
    description: string;
    isBreaking: boolean;
    method: "GET" | "POST" | "PUT" | "DELETE";
    path: string;
}

export interface MetaCompatibilityDates {
    compatibilityDates: CompatibilityDate[];
}

export type PlanetID = number;

export type RaceID = number;

export type RegionID = number;

export type RouteOriginDestinationGet = number[];

export type ShipTreeGroupID = number;

export type SolarSystemID = number;

export type SovereigntyCampaignsGet = Array<{
    attackersScore?: number;
    campaignId: number;
    constellationId: number;
    defenderId?: number;
    defenderScore?: number;
    eventType:
        | "tcu_defense"
        | "ihub_defense"
        | "station_defense"
        | "station_freeport";
    participants?: Array<{
        allianceId: number;
        score: number;
    }>;
    solarSystemId: number;
    startTime: string;
    structureId: number;
}>;

export type SovereigntyMapGet = Array<{
    allianceId?: number;
    corporationId?: number;
    factionId?: number;
    systemId: number;
}>;

export type SovereigntyStructuresGet = Array<{
    allianceId: number;
    solarSystemId: number;
    structureId: number;
    structureTypeId: number;
    vulnerabilityOccupancyLevel?: number;
    vulnerableEndTime?: string;
    vulnerableStartTime?: string;
}>;

export type StationID = number;

export interface StatusGet {
    players: number;
    serverVersion: string;
    startTime: string;
    vip?: boolean;
}

export type TypeID = number;

export type UUID = string;

export type UniverseAncestriesGet = Array<{
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
    systemId: number;
    typeId: number;
}

export type UniverseRacesGet = Array<{
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
    cycleTime: number;
    schematicName: string;
}

export interface UniverseStargatesStargateIdGet {
    destination: {
        stargateId: number;
        systemId: number;
    };
    name: string;
    position: {
        x: number;
        y: number;
        z: number;
    };
    stargateId: number;
    systemId: number;
    typeId: number;
}

export interface UniverseStarsStarIdGet {
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
    systemId: number;
    typeId: number;
}

export type UniverseStructuresGet = number[];

export interface UniverseStructuresStructureIdGet {
    name: string;
    ownerId: number;
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
    npcKills: number;
    podKills: number;
    shipKills: number;
    systemId: number;
}>;

export type UniverseSystemsGet = number[];

export interface UniverseSystemsSystemIdGet {
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
    aggressor: {
        allianceId?: number;
        corporationId?: number;
        iskDestroyed: number;
        shipsKilled: number;
    };
    allies?: Array<{
        allianceId?: number;
        corporationId?: number;
    }>;
    declared: string;
    defender: {
        allianceId?: number;
        corporationId?: number;
        iskDestroyed: number;
        shipsKilled: number;
    };
    finished?: string;
    id: number;
    mutual: boolean;
    openForAllies: boolean;
    retracted?: string;
    started?: string;
}

export type WarsWarIdKillmailsGet = Array<{
    killmailHash: string;
    killmailId: number;
}>;

export class GeneratedApi {
    private readonly client: EsiRequester;

    public constructor(client: EsiRequester) {
        this.client = client;
    }

    /**
     * List all alliances
     * @method GET /alliances
     */
    public async getAlliances(): Promise<AlliancesGet> {
        return this.client.request<AlliancesGet>({
            method: "GET",
            path: `/alliances`,
            requiresAuth: false,
        });
    }

    /**
     * Get alliance's public information
     * @method GET /alliances/{alliance_id}
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
     * Get alliance contacts
     * @method GET /alliances/{alliance_id}/contacts
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
     * Get alliance contact labels
     * @method GET /alliances/{alliance_id}/contacts/labels
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
     * List alliance's corporations
     * @method GET /alliances/{alliance_id}/corporations
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
     * Get alliance icon
     * @method GET /alliances/{alliance_id}/icons
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
     * Character affiliation
     * @method POST /characters/affiliation
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
     * Get character's public information
     * @method GET /characters/{character_id}
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
     * Get agents research
     * @method GET /characters/{character_id}/agents_research
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
     * Get character assets
     * @method GET /characters/{character_id}/assets
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
     * Get character asset locations
     * @method POST /characters/{character_id}/assets/locations
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
     * Get character asset names
     * @method POST /characters/{character_id}/assets/names
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
     * Get character attributes
     * @method GET /characters/{character_id}/attributes
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
     * Get blueprints
     * @method GET /characters/{character_id}/blueprints
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
     * List calendar event summaries
     * @method GET /characters/{character_id}/calendar
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
     * Get an event
     * @method GET /characters/{character_id}/calendar/{event_id}
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
     * Respond to an event
     * @method PUT /characters/{character_id}/calendar/{event_id}
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
     * Get attendees
     * @method GET /characters/{character_id}/calendar/{event_id}/attendees
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
     * Get clones
     * @method GET /characters/{character_id}/clones
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
     * Delete contacts
     * @method DELETE /characters/{character_id}/contacts
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
     * Get contacts
     * @method GET /characters/{character_id}/contacts
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
     * Add contacts
     * @method POST /characters/{character_id}/contacts
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
     * Edit contacts
     * @method PUT /characters/{character_id}/contacts
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
     * Get contact labels
     * @method GET /characters/{character_id}/contacts/labels
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
     * Get contracts
     * @method GET /characters/{character_id}/contracts
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
     * Get contract bids
     * @method GET /characters/{character_id}/contracts/{contract_id}/bids
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
     * Get contract items
     * @method GET /characters/{character_id}/contracts/{contract_id}/items
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
     * Get corporation history
     * @method GET /characters/{character_id}/corporationhistory
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
     * Calculate a CSPA charge cost
     * @method POST /characters/{character_id}/cspa
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
     * Get jump fatigue
     * @method GET /characters/{character_id}/fatigue
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
     * Get fittings
     * @method GET /characters/{character_id}/fittings
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
     * Create fitting
     * @method POST /characters/{character_id}/fittings
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
     * Delete fitting
     * @method DELETE /characters/{character_id}/fittings/{fitting_id}
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
     * Get character fleet info
     * @method GET /characters/{character_id}/fleet
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
     * Overview of a character involved in faction warfare
     * @method GET /characters/{character_id}/fw/stats
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
     * Get active implants
     * @method GET /characters/{character_id}/implants
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
     * List character industry jobs
     * @method GET /characters/{character_id}/industry/jobs
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
     * Get a character's recent kills and losses
     * @method GET /characters/{character_id}/killmails/recent
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
     * Get character location
     * @method GET /characters/{character_id}/location
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
     * Get loyalty points
     * @method GET /characters/{character_id}/loyalty/points
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
     * Return mail headers
     * @method GET /characters/{character_id}/mail
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
     * Send a new mail
     * @method POST /characters/{character_id}/mail
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
     * Get mail labels and unread counts
     * @method GET /characters/{character_id}/mail/labels
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
     * @method POST /characters/{character_id}/mail/labels
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
     * @method DELETE /characters/{character_id}/mail/labels/{label_id}
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
     * Return mailing list subscriptions
     * @method GET /characters/{character_id}/mail/lists
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
     * @method DELETE /characters/{character_id}/mail/{mail_id}
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
     * Return a mail
     * @method GET /characters/{character_id}/mail/{mail_id}
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
     * @method PUT /characters/{character_id}/mail/{mail_id}
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
     * Get medals
     * @method GET /characters/{character_id}/medals
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
     * Character mining ledger
     * @method GET /characters/{character_id}/mining
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
     * Get character notifications
     * @method GET /characters/{character_id}/notifications
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
     * Get new contact notifications
     * @method GET /characters/{character_id}/notifications/contacts
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
     * Get character online
     * @method GET /characters/{character_id}/online
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
     * List open orders from a character
     * @method GET /characters/{character_id}/orders
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
     * List historical orders by a character
     * @method GET /characters/{character_id}/orders/history
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
     * Get colonies
     * @method GET /characters/{character_id}/planets
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
     * Get colony layout
     * @method GET /characters/{character_id}/planets/{planet_id}
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
     * Get character portraits
     * @method GET /characters/{character_id}/portrait
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
     * Get character corporation roles
     * @method GET /characters/{character_id}/roles
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
     * Search on a string
     * @method GET /characters/{character_id}/search
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
     * Get current ship
     * @method GET /characters/{character_id}/ship
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
     * Get character's skill queue
     * @method GET /characters/{character_id}/skillqueue
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
     * Get character skills
     * @method GET /characters/{character_id}/skills
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
     * Get standings
     * @method GET /characters/{character_id}/standings
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
     * Get character corporation titles
     * @method GET /characters/{character_id}/titles
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
     * Get a character's wallet balance
     * @method GET /characters/{character_id}/wallet
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
     * Get character wallet journal
     * @method GET /characters/{character_id}/wallet/journal
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
     * Get wallet transactions
     * @method GET /characters/{character_id}/wallet/transactions
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
     * Get public contract bids
     * @method GET /contracts/public/bids/{contract_id}
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
     * Get public contract items
     * @method GET /contracts/public/items/{contract_id}
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
     * Get public contracts
     * @method GET /contracts/public/{region_id}
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
     * Moon extraction timers
     * @method GET /corporation/{corporation_id}/mining/extractions
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
     * Corporation mining observers
     * @method GET /corporation/{corporation_id}/mining/observers
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
     * Observed corporation mining
     * @method GET /corporation/{corporation_id}/mining/observers/{observer_id}
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
     * Get npc corporations
     * @method GET /corporations/npccorps
     */
    public async getCorporationsNpccorps(): Promise<CorporationsNpccorpsGet> {
        return this.client.request<CorporationsNpccorpsGet>({
            method: "GET",
            path: `/corporations/npccorps`,
            requiresAuth: false,
        });
    }

    /**
     * Get corporation's public information
     * @method GET /corporations/{corporation_id}
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
     * Get alliance history
     * @method GET /corporations/{corporation_id}/alliancehistory
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
     * Get corporation assets
     * @method GET /corporations/{corporation_id}/assets
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
     * Get corporation asset locations
     * @method POST /corporations/{corporation_id}/assets/locations
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
     * Get corporation asset names
     * @method POST /corporations/{corporation_id}/assets/names
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
     * Get corporation blueprints
     * @method GET /corporations/{corporation_id}/blueprints
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
     * Get corporation contacts
     * @method GET /corporations/{corporation_id}/contacts
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
     * Get corporation contact labels
     * @method GET /corporations/{corporation_id}/contacts/labels
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
     * Get all corporation ALSC logs
     * @method GET /corporations/{corporation_id}/containers/logs
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
     * Get corporation contracts
     * @method GET /corporations/{corporation_id}/contracts
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
     * Get corporation contract bids
     * @method GET /corporations/{corporation_id}/contracts/{contract_id}/bids
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
     * Get corporation contract items
     * @method GET /corporations/{corporation_id}/contracts/{contract_id}/items
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
     * List corporation customs offices
     * @method GET /corporations/{corporation_id}/customs_offices
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
     * Get corporation divisions
     * @method GET /corporations/{corporation_id}/divisions
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
     * Get corporation facilities
     * @method GET /corporations/{corporation_id}/facilities
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
     * Overview of a corporation involved in faction warfare
     * @method GET /corporations/{corporation_id}/fw/stats
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
     * Get corporation icon
     * @method GET /corporations/{corporation_id}/icons
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
     * List corporation industry jobs
     * @method GET /corporations/{corporation_id}/industry/jobs
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
     * Get a corporation's recent kills and losses
     * @method GET /corporations/{corporation_id}/killmails/recent
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
     * Get corporation medals
     * @method GET /corporations/{corporation_id}/medals
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
     * Get corporation issued medals
     * @method GET /corporations/{corporation_id}/medals/issued
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
     * Get corporation members
     * @method GET /corporations/{corporation_id}/members
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
     * Get corporation member limit
     * @method GET /corporations/{corporation_id}/members/limit
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
     * Get corporation's members' titles
     * @method GET /corporations/{corporation_id}/members/titles
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
     * Track corporation members
     * @method GET /corporations/{corporation_id}/membertracking
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
     * List open orders from a corporation
     * @method GET /corporations/{corporation_id}/orders
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
     * List historical orders from a corporation
     * @method GET /corporations/{corporation_id}/orders/history
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
     * Get corporation member roles
     * @method GET /corporations/{corporation_id}/roles
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
     * Get corporation member roles history
     * @method GET /corporations/{corporation_id}/roles/history
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
     * Get corporation shareholders
     * @method GET /corporations/{corporation_id}/shareholders
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
     * Get corporation standings
     * @method GET /corporations/{corporation_id}/standings
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
     * Get corporation starbases (POSes)
     * @method GET /corporations/{corporation_id}/starbases
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
     * Get starbase (POS) detail
     * @method GET /corporations/{corporation_id}/starbases/{starbase_id}
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
     * Get corporation structures
     * @method GET /corporations/{corporation_id}/structures
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
     * Get corporation titles
     * @method GET /corporations/{corporation_id}/titles
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
     * Returns a corporation's wallet balance
     * @method GET /corporations/{corporation_id}/wallets
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
     * Get corporation wallet journal
     * @method GET /corporations/{corporation_id}/wallets/{division}/journal
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
     * Get corporation wallet transactions
     * @method GET /corporations/{corporation_id}/wallets/{division}/transactions
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
     * Get attributes
     * @method GET /dogma/attributes
     */
    public async getDogmaAttributes(): Promise<DogmaAttributesGet> {
        return this.client.request<DogmaAttributesGet>({
            method: "GET",
            path: `/dogma/attributes`,
            requiresAuth: false,
        });
    }

    /**
     * Get attribute information
     * @method GET /dogma/attributes/{attribute_id}
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
     * Get dynamic item information
     * @method GET /dogma/dynamic/items/{type_id}/{item_id}
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
     * Get effects
     * @method GET /dogma/effects
     */
    public async getDogmaEffects(): Promise<DogmaEffectsGet> {
        return this.client.request<DogmaEffectsGet>({
            method: "GET",
            path: `/dogma/effects`,
            requiresAuth: false,
        });
    }

    /**
     * Get effect information
     * @method GET /dogma/effects/{effect_id}
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
     * Get fleet information
     * @method GET /fleets/{fleet_id}
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
     * Update fleet
     * @method PUT /fleets/{fleet_id}
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
     * Get fleet members
     * @method GET /fleets/{fleet_id}/members
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
     * Create fleet invitation
     * @method POST /fleets/{fleet_id}/members
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
     * Kick fleet member
     * @method DELETE /fleets/{fleet_id}/members/{member_id}
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
     * Move fleet member
     * @method PUT /fleets/{fleet_id}/members/{member_id}
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
     * Delete fleet squad
     * @method DELETE /fleets/{fleet_id}/squads/{squad_id}
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
     * Rename fleet squad
     * @method PUT /fleets/{fleet_id}/squads/{squad_id}
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
     * Get fleet wings
     * @method GET /fleets/{fleet_id}/wings
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
     * Create fleet wing
     * @method POST /fleets/{fleet_id}/wings
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
     * Delete fleet wing
     * @method DELETE /fleets/{fleet_id}/wings/{wing_id}
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
     * Rename fleet wing
     * @method PUT /fleets/{fleet_id}/wings/{wing_id}
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
     * Create fleet squad
     * @method POST /fleets/{fleet_id}/wings/{wing_id}/squads
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
     * List of the top factions in faction warfare
     * @method GET /fw/leaderboards
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
     * List of the top pilots in faction warfare
     * @method GET /fw/leaderboards/characters
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
     * List of the top corporations in faction warfare
     * @method GET /fw/leaderboards/corporations
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
     * An overview of statistics about factions involved in faction warfare
     * @method GET /fw/stats
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
     * Ownership of faction warfare systems
     * @method GET /fw/systems
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
     * @method GET /fw/wars
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
     * List incursions
     * @method GET /incursions
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
     * List industry facilities
     * @method GET /industry/facilities
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
     * List solar system cost indices
     * @method GET /industry/systems
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
     * List insurance levels
     * @method GET /insurance/prices
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
     * Get a single killmail
     * @method GET /killmails/{killmail_id}/{killmail_hash}
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
     * List loyalty store offers
     * @method GET /loyalty/stores/{corporation_id}/offers
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
     * Get item groups
     * @method GET /markets/groups
     */
    public async getMarketsGroups(): Promise<MarketsGroupsGet> {
        return this.client.request<MarketsGroupsGet>({
            method: "GET",
            path: `/markets/groups`,
            requiresAuth: false,
        });
    }

    /**
     * Get item group information
     * @method GET /markets/groups/{market_group_id}
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
     * List market prices
     * @method GET /markets/prices
     */
    public async getMarketsPrices(): Promise<MarketsPricesGet> {
        return this.client.request<MarketsPricesGet>({
            method: "GET",
            path: `/markets/prices`,
            requiresAuth: false,
        });
    }

    /**
     * List orders in a structure
     * @method GET /markets/structures/{structure_id}
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
     * List historical market statistics in a region
     * @method GET /markets/{region_id}/history
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
     * List orders in a region
     * @method GET /markets/{region_id}/orders
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
     * List type IDs relevant to a market
     * @method GET /markets/{region_id}/types
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
     * Get changelog
     * @method GET /meta/changelog
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
     * Get compatibility dates
     * @method GET /meta/compatibility-dates
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
     * Get route
     * @method GET /route/{origin}/{destination}
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
     * List sovereignty campaigns
     * @method GET /sovereignty/campaigns
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
     * List sovereignty of systems
     * @method GET /sovereignty/map
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
     * List sovereignty structures
     * @method GET /sovereignty/structures
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
     * Retrieve the uptime and player counts
     * @method GET /status
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
     * Set Autopilot Waypoint
     * @method POST /ui/autopilot/waypoint
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
     * Open Contract Window
     * @method POST /ui/openwindow/contract
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
     * Open Information Window
     * @method POST /ui/openwindow/information
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
     * Open Market Details
     * @method POST /ui/openwindow/marketdetails
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
     * Open New Mail Window
     * @method POST /ui/openwindow/newmail
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
     * Get ancestries
     * @method GET /universe/ancestries
     */
    public async getUniverseAncestries(): Promise<UniverseAncestriesGet> {
        return this.client.request<UniverseAncestriesGet>({
            method: "GET",
            path: `/universe/ancestries`,
            requiresAuth: false,
        });
    }

    /**
     * Get asteroid belt information
     * @method GET /universe/asteroid_belts/{asteroid_belt_id}
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
     * Get bloodlines
     * @method GET /universe/bloodlines
     */
    public async getUniverseBloodlines(): Promise<UniverseBloodlinesGet> {
        return this.client.request<UniverseBloodlinesGet>({
            method: "GET",
            path: `/universe/bloodlines`,
            requiresAuth: false,
        });
    }

    /**
     * Get item categories
     * @method GET /universe/categories
     */
    public async getUniverseCategories(): Promise<UniverseCategoriesGet> {
        return this.client.request<UniverseCategoriesGet>({
            method: "GET",
            path: `/universe/categories`,
            requiresAuth: false,
        });
    }

    /**
     * Get item category information
     * @method GET /universe/categories/{category_id}
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
     * Get constellations
     * @method GET /universe/constellations
     */
    public async getUniverseConstellations(): Promise<UniverseConstellationsGet> {
        return this.client.request<UniverseConstellationsGet>({
            method: "GET",
            path: `/universe/constellations`,
            requiresAuth: false,
        });
    }

    /**
     * Get constellation information
     * @method GET /universe/constellations/{constellation_id}
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
     * Get factions
     * @method GET /universe/factions
     */
    public async getUniverseFactions(): Promise<UniverseFactionsGet> {
        return this.client.request<UniverseFactionsGet>({
            method: "GET",
            path: `/universe/factions`,
            requiresAuth: false,
        });
    }

    /**
     * Get graphics
     * @method GET /universe/graphics
     */
    public async getUniverseGraphics(): Promise<UniverseGraphicsGet> {
        return this.client.request<UniverseGraphicsGet>({
            method: "GET",
            path: `/universe/graphics`,
            requiresAuth: false,
        });
    }

    /**
     * Get graphic information
     * @method GET /universe/graphics/{graphic_id}
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
     * Get item groups
     * @method GET /universe/groups
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
     * Get item group information
     * @method GET /universe/groups/{group_id}
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
     * Bulk names to IDs
     * @method POST /universe/ids
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
     * Get moon information
     * @method GET /universe/moons/{moon_id}
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
     * Get names and categories for a set of IDs
     * @method POST /universe/names
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
     * Get planet information
     * @method GET /universe/planets/{planet_id}
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
     * Get character races
     * @method GET /universe/races
     */
    public async getUniverseRaces(): Promise<UniverseRacesGet> {
        return this.client.request<UniverseRacesGet>({
            method: "GET",
            path: `/universe/races`,
            requiresAuth: false,
        });
    }

    /**
     * Get regions
     * @method GET /universe/regions
     */
    public async getUniverseRegions(): Promise<UniverseRegionsGet> {
        return this.client.request<UniverseRegionsGet>({
            method: "GET",
            path: `/universe/regions`,
            requiresAuth: false,
        });
    }

    /**
     * Get region information
     * @method GET /universe/regions/{region_id}
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
     * Get schematic information
     * @method GET /universe/schematics/{schematic_id}
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
     * Get stargate information
     * @method GET /universe/stargates/{stargate_id}
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
     * Get star information
     * @method GET /universe/stars/{star_id}
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
     * Get station information
     * @method GET /universe/stations/{station_id}
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
     * @method GET /universe/structures
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
     * Get structure information
     * @method GET /universe/structures/{structure_id}
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
     * Get system jumps
     * @method GET /universe/system_jumps
     */
    public async getUniverseSystemJumps(): Promise<UniverseSystemJumpsGet> {
        return this.client.request<UniverseSystemJumpsGet>({
            method: "GET",
            path: `/universe/system_jumps`,
            requiresAuth: false,
        });
    }

    /**
     * Get system kills
     * @method GET /universe/system_kills
     */
    public async getUniverseSystemKills(): Promise<UniverseSystemKillsGet> {
        return this.client.request<UniverseSystemKillsGet>({
            method: "GET",
            path: `/universe/system_kills`,
            requiresAuth: false,
        });
    }

    /**
     * Get solar systems
     * @method GET /universe/systems
     */
    public async getUniverseSystems(): Promise<UniverseSystemsGet> {
        return this.client.request<UniverseSystemsGet>({
            method: "GET",
            path: `/universe/systems`,
            requiresAuth: false,
        });
    }

    /**
     * Get solar system information
     * @method GET /universe/systems/{system_id}
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
     * Get types
     * @method GET /universe/types
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
     * Get type information
     * @method GET /universe/types/{type_id}
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
     * List wars
     * @method GET /wars
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
     * Get war information
     * @method GET /wars/{war_id}
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
     * List kills for a war
     * @method GET /wars/{war_id}/killmails
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
