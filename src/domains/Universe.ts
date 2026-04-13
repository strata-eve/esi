import { GeneratedApi } from "../api/GeneratedApi";
import { Region } from "./Region";

export class PublicUniverse {
    constructor(readonly api: GeneratedApi) {}

    public async ancestries() {
        return this.api.getUniverseAncestries();
    }

    public async asteroidBelt(id: number) {
        return this.api.getUniverseAsteroidBeltsAsteroidBeltId(id);
    }

    public async bloodlines() {
        return this.api.getUniverseBloodlines();
    }

    public async categories() {
        return this.api.getUniverseCategories();
    }

    public category(id: number) {
        return {
            fetch: () => this.api.getUniverseCategoriesCategoryId(id),
        };
    }

    public async constellations() {
        return this.api.getUniverseConstellations();
    }

    public async constellation(id: number) {
        return {
            fetch: () => this.api.getUniverseConstellationsConstellationId(id),
        };
    }

    public async factions() {
        return this.api.getUniverseFactions();
    }

    public async graphics() {
        return this.api.getUniverseGraphics();
    }

    public async graphic(id: number) {
        return {
            fetch: () => this.api.getUniverseGraphicsGraphicId(id),
        };
    }

    public async groups() {
        return this.api.getUniverseGroups();
    }

    public group(id: number) {
        return {
            fetch: () => this.api.getUniverseGroupsGroupId(id),
        };
    }

    public ids(ids: string[]) {
        return {
            resolve: () => this.api.postUniverseIds(ids),
        };
    }

    public moon(id: number) {
        return {
            fetch: () => this.api.getUniverseMoonsMoonId(id),
        };
    }

    public names(names: number[]) {
        return {
            resolve: () => this.api.postUniverseNames(names),
        };
    }

    public planet(id: number) {
        return {
            fetch: () => this.api.getUniversePlanetsPlanetId(id),
        };
    }

    public races() {
        return this.api.getUniverseRaces();
    }

    public regions() {
        return this.api.getUniverseRegions();
    }

    public region(id: number) {
        return new Region(this.api, id);
    }

    public schematic(id: number) {
        return {
            fetch: () => this.api.getUniverseSchematicsSchematicId(id),
        };
    }

    public stargate(id: number) {
        return {
            fetch: () => this.api.getUniverseStargatesStargateId(id),
        };
    }

    public star(id: number) {
        return {
            fetch: () => this.api.getUniverseStarsStarId(id),
        };
    }

    public station(id: number) {
        return {
            fetch: () => this.api.getUniverseStationsStationId(id),
        };
    }

    public structures(filter?: "market" | "manufacturing_basic") {
        return this.api.getUniverseStructures(filter);
    }

    public structure(id: number) {
        return {
            fetch: (page?: number) =>
                this.api.getMarketsStructuresStructureId(id, page),
        };
    }

    public async jumps() {
        return this.api.getUniverseSystemJumps();
    }

    public async kills() {
        return this.api.getUniverseSystemKills();
    }

    public async systems() {
        return this.api.getUniverseSystems();
    }

    public system(id: number) {
        return {
            fetch: () => this.api.getUniverseSystemsSystemId(id),
        };
    }

    public async types(page?: number) {
        return this.api.getUniverseTypes(page);
    }

    public type(id: number) {
        return {
            fetch: () => this.api.getUniverseTypesTypeId(id),
        };
    }
}
