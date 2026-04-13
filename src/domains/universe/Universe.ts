import { GeneratedApi } from "../../api/GeneratedApi";
import { Region } from "./Region";

export class PublicUniverse {
    constructor(readonly api: GeneratedApi) {}

    public get ancestries() {
        return new UniverseAncestries(this.api);
    }

    public asteroidBelt(id: number) {
        return new UniverseAsteroidBelt(this.api, id);
    }

    public get bloodlines() {
        return new UniverseBloodlines(this.api);
    }

    public get categories() {
        return new UniverseCategories(this.api);
    }

    public category(id: number) {
        return new UniverseCategory(this.api, id);
    }

    public get constellations() {
        return new UniverseConstellations(this.api);
    }

    public constellation(id: number) {
        return new UniverseConstellation(this.api, id);
    }

    public get factions() {
        return new UniverseFactions(this.api);
    }

    public get graphics() {
        return new UniverseGraphics(this.api);
    }

    public graphic(id: number) {
        return new UniverseGraphic(this.api, id);
    }

    public get groups() {
        return new UniverseGroups(this.api);
    }

    public group(id: number) {
        return new UniverseGroup(this.api, id);
    }

    public ids(ids: number[]) {
        return new UniverseIds(this.api, ids);
    }

    public moon(id: number) {
        return new UniverseMoon(this.api, id);
    }

    public names(names: string[]) {
        return new UniverseNames(this.api, names);
    }

    public planet(id: number) {
        return new UniversePlanet(this.api, id);
    }

    public get races() {
        return new UniverseRaces(this.api);
    }

    public get regions() {
        return new UniverseRegions(this.api);
    }

    public region(id: number) {
        return new Region(this.api, id);
    }

    public schematic(id: number) {
        return new UniverseSchematic(this.api, id);
    }

    public stargate(id: number) {
        return new UniverseStargate(this.api, id);
    }

    public star(id: number) {
        return new UniverseStar(this.api, id);
    }

    public station(id: number) {
        return new UniverseStation(this.api, id);
    }

    public get structures() {
        return new UniverseStructures(this.api);
    }

    public structure(id: number) {
        return new UniverseStructure(this.api, id);
    }

    public get jumps() {
        return new UniverseJumps(this.api);
    }

    public get kills() {
        return new UniverseKills(this.api);
    }

    public get systems() {
        return new UniverseSystems(this.api);
    }

    public system(id: number) {
        return new UniverseSystem(this.api, id);
    }

    public async types() {
        return new UniverseTypes(this.api);
    }

    public type(id: number) {
        return new UniverseType(this.api, id);
    }
}

export class UniverseAncestries {
    constructor(readonly api: GeneratedApi) {}

    public async list() {
        return this.api.getUniverseAncestries();
    }
}

export class UniverseAsteroidBelt {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getUniverseAsteroidBeltsAsteroidBeltId(this.id);
    }
}

export class UniverseBloodlines {
    constructor(readonly api: GeneratedApi) {}

    public async list() {
        return this.api.getUniverseBloodlines();
    }
}

export class UniverseCategories {
    constructor(readonly api: GeneratedApi) {}

    public async list() {
        return this.api.getUniverseCategories();
    }
}

export class UniverseCategory {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getUniverseCategoriesCategoryId(this.id);
    }
}

export class UniverseConstellations {
    constructor(readonly api: GeneratedApi) {}

    public async list() {
        return this.api.getUniverseConstellations();
    }
}

export class UniverseConstellation {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getUniverseConstellationsConstellationId(this.id);
    }
}

export class UniverseFactions {
    constructor(readonly api: GeneratedApi) {}

    public async list() {
        return this.api.getUniverseFactions();
    }
}

export class UniverseGraphics {
    constructor(readonly api: GeneratedApi) {}

    public async list() {
        return this.api.getUniverseGraphics();
    }
}

export class UniverseGraphic {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getUniverseGraphicsGraphicId(this.id);
    }
}

export class UniverseGroups {
    constructor(readonly api: GeneratedApi) {}

    public async list() {
        return this.api.getUniverseGroups();
    }
}

export class UniverseGroup {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getUniverseGroupsGroupId(this.id);
    }
}

export class UniverseNames {
    constructor(
        readonly api: GeneratedApi,
        readonly names: string[],
    ) {}

    public async resolve() {
        return this.api.postUniverseIds(this.names);
    }
}

export class UniverseMoon {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getUniverseMoonsMoonId(this.id);
    }
}

export class UniverseIds {
    constructor(
        readonly api: GeneratedApi,
        readonly ids: number[],
    ) {}

    public async resolve() {
        return this.api.postUniverseNames(this.ids);
    }
}

export class UniversePlanet {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getUniversePlanetsPlanetId(this.id);
    }
}

export class UniverseRaces {
    constructor(readonly api: GeneratedApi) {}

    public async list() {
        return this.api.getUniverseRaces();
    }
}

export class UniverseRegions {
    constructor(readonly api: GeneratedApi) {}

    public async list() {
        return this.api.getUniverseRegions();
    }
}

export class UniverseSchematic {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getUniverseSchematicsSchematicId(this.id);
    }
}

export class UniverseStargate {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getUniverseStargatesStargateId(this.id);
    }
}

export class UniverseStar {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getUniverseStarsStarId(this.id);
    }
}

export class UniverseStation {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getUniverseStationsStationId(this.id);
    }
}

export class UniverseStructure {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getUniverseStructuresStructureId(this.id);
    }
}

export class UniverseStructures {
    constructor(readonly api: GeneratedApi) {}

    public async list(filter?: "market" | "manufacturing_basic") {
        return this.api.getUniverseStructures(filter);
    }
}

export class UniverseSystems {
    constructor(readonly api: GeneratedApi) {}

    public async list() {
        return this.api.getUniverseSystems();
    }
}

export class UniverseJumps {
    constructor(readonly api: GeneratedApi) {}

    public async list() {
        return this.api.getUniverseSystemJumps();
    }
}

export class UniverseKills {
    constructor(readonly api: GeneratedApi) {}

    public async list() {
        return this.api.getUniverseSystemKills();
    }
}

export class UniverseSystem {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getUniverseSystemsSystemId(this.id);
    }
}

export class UniverseTypes {
    constructor(readonly api: GeneratedApi) {}

    public async list(page?: number) {
        return this.api.getUniverseTypes(page);
    }
}

export class UniverseType {
    constructor(
        readonly api: GeneratedApi,
        readonly id: number,
    ) {}

    public async fetch() {
        return this.api.getUniverseTypesTypeId(this.id);
    }
}
