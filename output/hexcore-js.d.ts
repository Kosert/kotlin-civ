type Nullable<T> = T | null | undefined
export declare namespace kotlin.collections {
    interface KtSet<E> /* extends kotlin.collections.Collection<E> */ {
        asJsReadonlySetView(): ReadonlySet<E>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtSet": unique symbol;
        };
    }
    const KtSet: {
        fromJsSet<E>(set: ReadonlySet<E>): kotlin.collections.KtSet<E>;
    };
    interface KtMap<K, V> {
        asJsReadonlyMapView(): ReadonlyMap<K, V>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtMap": unique symbol;
        };
    }
    const KtMap: {
        fromJsMap<K, V>(map: ReadonlyMap<K, V>): kotlin.collections.KtMap<K, V>;
    };
    interface KtList<E> /* extends kotlin.collections.Collection<E> */ {
        asJsReadonlyArrayView(): ReadonlyArray<E>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtList": unique symbol;
        };
    }
    const KtList: {
        fromJsArray<E>(array: ReadonlyArray<E>): kotlin.collections.KtList<E>;
    };
}
export declare const TestData: {
    get map1(): kotlin.collections.KtSet<hexcore.Grass>;
    get gameState1(): civ.GameState;
};
export declare namespace civ {
    interface Action {
        readonly __doNotUseOrImplementIt: {
            readonly "civ.Action": unique symbol;
        };
    }
    class Move implements civ.Action {
        constructor(unitId: string, destination: hexcore.Coordinates);
        get unitId(): string;
        get destination(): hexcore.Coordinates;
        copy(unitId?: string, destination?: hexcore.Coordinates): civ.Move;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.Action["__doNotUseOrImplementIt"];
    }
    class Attack implements civ.Action {
        constructor(unitId: string, targetUnitId: string);
        get unitId(): string;
        get targetUnitId(): string;
        copy(unitId?: string, targetUnitId?: string): civ.Attack;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.Action["__doNotUseOrImplementIt"];
    }
    class Settle implements civ.Action {
        constructor(settlersId: string);
        get settlersId(): string;
        copy(settlersId?: string): civ.Settle;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.Action["__doNotUseOrImplementIt"];
    }
}
export declare namespace civ {
    abstract class Building {
        private constructor();
        static get VILLAGE_HALL(): civ.Building & {
            get name(): "VILLAGE_HALL";
            get ordinal(): 0;
        };
        static get TOWN_HALL(): civ.Building & {
            get name(): "TOWN_HALL";
            get ordinal(): 1;
        };
        static get CITY_HALL(): civ.Building & {
            get name(): "CITY_HALL";
            get ordinal(): 2;
        };
        static get ROAD(): civ.Building & {
            get name(): "ROAD";
            get ordinal(): 3;
        };
        static get LUMBERCAMP(): civ.Building & {
            get name(): "LUMBERCAMP";
            get ordinal(): 4;
        };
        get name(): "VILLAGE_HALL" | "TOWN_HALL" | "CITY_HALL" | "ROAD" | "LUMBERCAMP";
        get ordinal(): 0 | 1 | 2 | 3 | 4;
        get tileRequirement(): (p0: hexcore.Tile) => boolean;
        get cost(): civ.Stockpiles;
        get bonuses(): kotlin.collections.KtList<any/* civ.TileBonus */>;
        get replaces(): Nullable<civ.Building>;
        static values(): Array<civ.Building>;
        static valueOf(value: string): civ.Building;
        static get Companion(): {
            get cityMainBuildings(): Array<civ.Building>;
        };
    }
}
export declare namespace civ {
    abstract class CityLevel {
        private constructor();
        static get VILLAGE(): civ.CityLevel & {
            get name(): "VILLAGE";
            get ordinal(): 0;
        };
        static get TOWN(): civ.CityLevel & {
            get name(): "TOWN";
            get ordinal(): 1;
        };
        static get CITY(): civ.CityLevel & {
            get name(): "CITY";
            get ordinal(): 2;
        };
        get name(): "VILLAGE" | "TOWN" | "CITY";
        get ordinal(): 0 | 1 | 2;
        get borderRange(): number;
        get visionRange(): number;
        get attack(): number;
        get attackRange(): number;
        static values(): Array<civ.CityLevel>;
        static valueOf(value: string): civ.CityLevel;
    }
    class City {
        constructor(cityId: string | undefined, playerId: string, coordinates: hexcore.Coordinates, level?: civ.CityLevel);
        get cityId(): string;
        get playerId(): string;
        get coordinates(): hexcore.Coordinates;
        get level(): civ.CityLevel;
        get borderRange(): number;
        get visionRange(): number;
        copy(cityId?: string, playerId?: string, coordinates?: hexcore.Coordinates, level?: civ.CityLevel): civ.City;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export declare namespace civ {
    abstract class UnitType {
        private constructor();
        static get SETTLERS(): civ.UnitType & {
            get name(): "SETTLERS";
            get ordinal(): 0;
        };
        static get SCOUT(): civ.UnitType & {
            get name(): "SCOUT";
            get ordinal(): 1;
        };
        get name(): "SETTLERS" | "SCOUT";
        get ordinal(): 0 | 1;
        get value(): string;
        get attack(): number;
        get maxHp(): number;
        get speed(): number;
        get visionRange(): number;
        get cost(): civ.Stockpiles;
        static values(): Array<civ.UnitType>;
        static valueOf(value: string): civ.UnitType;
        static get Companion(): {
            byValue(value: string): civ.UnitType;
        };
    }
    class CivUnit {
        constructor(unitId: string | undefined, unitType: civ.UnitType, playerId: string, coordinates: hexcore.Coordinates, hp?: number, movementLeft?: number);
        get unitId(): string;
        get unitType(): civ.UnitType;
        get playerId(): string;
        get coordinates(): hexcore.Coordinates;
        get hp(): number;
        get movementLeft(): number;
        get attack(): number;
        get maxHp(): number;
        get speed(): number;
        get visionRange(): number;
        copy(unitId?: string, unitType?: civ.UnitType, playerId?: string, coordinates?: hexcore.Coordinates, hp?: number, movementLeft?: number): civ.CivUnit;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export declare namespace civ {
    class GameApi {
        private constructor();
        citiesFor(playerId: string): kotlin.collections.KtList<civ.City>;
        unitsFor(playerId: string): kotlin.collections.KtList<civ.CivUnit>;
        stocksFor(playerId: string): civ.Stockpiles;
        get currentPlayer(): civ.Player;
        tilesForPlayer(playerId: string): kotlin.collections.KtList<hexcore.PlayerTileData>;
        testCrash(): void;
        execute(action: civ.Action): void;
        endTurn(): void;
        generateGameState(): civ.GameState;
        static get Companion(): {
            fromGameState(state: civ.GameState): civ.GameApi;
        };
    }
}
export declare namespace civ {
    class GameState {
        constructor(players: kotlin.collections.KtList<civ.Player>, tileList: kotlin.collections.KtSet<hexcore.Tile>, cities: kotlin.collections.KtSet<civ.City>, units: kotlin.collections.KtSet<civ.CivUnit>, stock: kotlin.collections.KtMap<string, civ.Stockpiles>);
        get players(): kotlin.collections.KtList<civ.Player>;
        get tileList(): kotlin.collections.KtSet<hexcore.Tile>;
        get cities(): kotlin.collections.KtSet<civ.City>;
        get units(): kotlin.collections.KtSet<civ.CivUnit>;
        get stock(): kotlin.collections.KtMap<string, civ.Stockpiles>;
        copy(players?: kotlin.collections.KtList<civ.Player>, tileList?: kotlin.collections.KtSet<hexcore.Tile>, cities?: kotlin.collections.KtSet<civ.City>, units?: kotlin.collections.KtSet<civ.CivUnit>, stock?: kotlin.collections.KtMap<string, civ.Stockpiles>): civ.GameState;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export declare namespace civ {
    class Player {
        constructor(playerId: string | undefined, name: string, color: civ.PlayerColor);
        get playerId(): string;
        get name(): string;
        get color(): civ.PlayerColor;
        copy(playerId?: string, name?: string, color?: civ.PlayerColor): civ.Player;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    abstract class PlayerColor {
        private constructor();
        static get BLUE(): civ.PlayerColor & {
            get name(): "BLUE";
            get ordinal(): 0;
        };
        static get RED(): civ.PlayerColor & {
            get name(): "RED";
            get ordinal(): 1;
        };
        static get GREEN(): civ.PlayerColor & {
            get name(): "GREEN";
            get ordinal(): 2;
        };
        get name(): "BLUE" | "RED" | "GREEN";
        get ordinal(): 0 | 1 | 2;
        static values(): Array<civ.PlayerColor>;
        static valueOf(value: string): civ.PlayerColor;
    }
}
export declare namespace civ {
    class Stockpiles {
        constructor(food?: number, wood?: number, gold?: number);
        get food(): number;
        get wood(): number;
        get gold(): number;
        plus(other: civ.Stockpiles): civ.Stockpiles;
        minus(other: civ.Stockpiles): civ.Stockpiles;
        copy(food?: number, wood?: number, gold?: number): civ.Stockpiles;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export declare namespace hexcore {
    class Coordinates {
        constructor(q: number, r: number);
        get q(): number;
        get r(): number;
        get s(): number;
        toString(): string;
        copy(q?: number, r?: number): hexcore.Coordinates;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            fromDoubles(q: number, r: number, s: number): hexcore.Coordinates;
        };
    }
}
export declare namespace hexcore {
    abstract class Tile {
        protected constructor();
        abstract get coords(): hexcore.Coordinates;
        abstract get buildings(): kotlin.collections.KtSet<civ.Building>;
        get isBusy(): boolean;
        protected abstract get baseMovementCost(): number;
        movementCost(): number;
        updated(isBusy?: boolean, buildings?: kotlin.collections.KtSet<civ.Building>): hexcore.Tile;
        /** @deprecated use movementCost() */
        canGoThrough(): boolean;
    }
    class Water extends hexcore.Tile {
        constructor(coords: hexcore.Coordinates, buildings?: kotlin.collections.KtSet<civ.Building>);
        get coords(): hexcore.Coordinates;
        get buildings(): kotlin.collections.KtSet<civ.Building>;
        protected get baseMovementCost(): number;
        copy(coords?: hexcore.Coordinates, buildings?: kotlin.collections.KtSet<civ.Building>): hexcore.Water;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class Grass extends hexcore.Tile {
        constructor(coords: hexcore.Coordinates, isBusy?: boolean, coast?: boolean, forest?: boolean, animals?: boolean, river?: boolean, buildings?: kotlin.collections.KtSet<civ.Building>);
        get coords(): hexcore.Coordinates;
        get isBusy(): boolean;
        get coast(): boolean;
        get forest(): boolean;
        get animals(): boolean;
        get river(): boolean;
        get buildings(): kotlin.collections.KtSet<civ.Building>;
        protected get baseMovementCost(): number;
        copy(coords?: hexcore.Coordinates, isBusy?: boolean, coast?: boolean, forest?: boolean, animals?: boolean, river?: boolean, buildings?: kotlin.collections.KtSet<civ.Building>): hexcore.Grass;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class Mountains extends hexcore.Tile {
        constructor(coords: hexcore.Coordinates, isBusy?: boolean, buildings?: kotlin.collections.KtSet<civ.Building>, gold?: boolean);
        get coords(): hexcore.Coordinates;
        get isBusy(): boolean;
        get buildings(): kotlin.collections.KtSet<civ.Building>;
        get gold(): boolean;
        protected get baseMovementCost(): number;
        copy(coords?: hexcore.Coordinates, isBusy?: boolean, buildings?: kotlin.collections.KtSet<civ.Building>, gold?: boolean): hexcore.Mountains;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class PlayerTileData {
        constructor(coordinates: hexcore.Coordinates, isVisible: boolean, tile: Nullable<hexcore.Tile>, unit: Nullable<civ.CivUnit>, city: Nullable<civ.City>);
        get coordinates(): hexcore.Coordinates;
        get isVisible(): boolean;
        get tile(): Nullable<hexcore.Tile>;
        get unit(): Nullable<civ.CivUnit>;
        get city(): Nullable<civ.City>;
        copy(coordinates?: hexcore.Coordinates, isVisible?: boolean, tile?: Nullable<hexcore.Tile>, unit?: Nullable<civ.CivUnit>, city?: Nullable<civ.City>): hexcore.PlayerTileData;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export as namespace me_kosert_js_hexcore_js;