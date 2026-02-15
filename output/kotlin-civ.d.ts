type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare namespace kotlin.collections {
    interface KtList<E> /* extends kotlin.collections.Collection<E> */ {
        asJsReadonlyArrayView(): ReadonlyArray<E>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtList": unique symbol;
        };
    }
    abstract class KtList<E> extends KtSingleton<KtList.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace KtList.$metadata$ {
        abstract class constructor {
            fromJsArray<E>(array: ReadonlyArray<E>): kotlin.collections.KtList<E>;
            private constructor();
        }
    }
    interface KtSet<E> /* extends kotlin.collections.Collection<E> */ {
        asJsReadonlySetView(): ReadonlySet<E>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtSet": unique symbol;
        };
    }
    abstract class KtSet<E> extends KtSingleton<KtSet.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace KtSet.$metadata$ {
        abstract class constructor {
            fromJsSet<E>(set: ReadonlySet<E>): kotlin.collections.KtSet<E>;
            private constructor();
        }
    }
    interface KtMap<K, V> {
        asJsReadonlyMapView(): ReadonlyMap<K, V>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtMap": unique symbol;
        };
    }
    abstract class KtMap<K, V> extends KtSingleton<KtMap.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace KtMap.$metadata$ {
        abstract class constructor {
            fromJsMap<K, V>(map: ReadonlyMap<K, V>): kotlin.collections.KtMap<K, V>;
            private constructor();
        }
    }
}
export declare namespace civ {
    class LongWrapper {
        private constructor();
        toString(): string;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace LongWrapper.$metadata$ {
        const constructor: abstract new () => LongWrapper;
    }
    namespace LongWrapper {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                fromString(value: string): civ.LongWrapper;
                private constructor();
            }
        }
    }
}
export declare namespace civ {
    abstract class TestData extends KtSingleton<TestData.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace TestData.$metadata$ {
        abstract class constructor {
            private constructor();
        }
    }
}
export declare namespace civ.action {
    interface Action {
        readonly __doNotUseOrImplementIt: {
            readonly "civ.action.Action": unique symbol;
        };
    }
    class Move implements civ.action.Action {
        constructor(unitId: string, destination: civ.hex.Coordinates);
        get unitId(): string;
        get destination(): civ.hex.Coordinates;
        copy(unitId?: string, destination?: civ.hex.Coordinates): civ.action.Move;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.action.Action["__doNotUseOrImplementIt"];
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Move.$metadata$ {
        const constructor: abstract new () => Move;
    }
    class Attack implements civ.action.Action {
        constructor(unitId: string, targetCoordinates: civ.hex.Coordinates, moveAttackDelay?: number);
        get unitId(): string;
        get targetCoordinates(): civ.hex.Coordinates;
        get moveAttackDelay(): number;
        copy(unitId?: string, targetCoordinates?: civ.hex.Coordinates, moveAttackDelay?: number): civ.action.Attack;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.action.Action["__doNotUseOrImplementIt"];
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Attack.$metadata$ {
        const constructor: abstract new () => Attack;
    }
    class Settle implements civ.action.Action {
        constructor(settlersId: string);
        get settlersId(): string;
        copy(settlersId?: string): civ.action.Settle;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.action.Action["__doNotUseOrImplementIt"];
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Settle.$metadata$ {
        const constructor: abstract new () => Settle;
    }
    class Build implements civ.action.Action {
        constructor(coordinates: civ.hex.Coordinates, building: civ.model.Building);
        get coordinates(): civ.hex.Coordinates;
        get building(): civ.model.Building;
        copy(coordinates?: civ.hex.Coordinates, building?: civ.model.Building): civ.action.Build;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.action.Action["__doNotUseOrImplementIt"];
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Build.$metadata$ {
        const constructor: abstract new () => Build;
    }
    class Recruit implements civ.action.Action {
        constructor(coordinates: civ.hex.Coordinates, unitType: civ.model.UnitType);
        get coordinates(): civ.hex.Coordinates;
        get unitType(): civ.model.UnitType;
        copy(coordinates?: civ.hex.Coordinates, unitType?: civ.model.UnitType): civ.action.Recruit;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.action.Action["__doNotUseOrImplementIt"];
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Recruit.$metadata$ {
        const constructor: abstract new () => Recruit;
    }
    class Conquer implements civ.action.Action {
        constructor(coordinates: civ.hex.Coordinates);
        get coordinates(): civ.hex.Coordinates;
        copy(coordinates?: civ.hex.Coordinates): civ.action.Conquer;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.action.Action["__doNotUseOrImplementIt"];
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Conquer.$metadata$ {
        const constructor: abstract new () => Conquer;
    }
    class Disband implements civ.action.Action {
        constructor(unitId: string);
        get unitId(): string;
        copy(unitId?: string): civ.action.Disband;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.action.Action["__doNotUseOrImplementIt"];
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Disband.$metadata$ {
        const constructor: abstract new () => Disband;
    }
}
export declare namespace civ.action {
    class ActionResult {
        constructor(isSuccess: boolean, errorAlert: Nullable<string>, exception: Nullable<Error>);
        get isSuccess(): boolean;
        get errorAlert(): Nullable<string>;
        get exception(): Nullable<Error>;
        copy(isSuccess?: boolean, errorAlert?: Nullable<string>, exception?: Nullable<Error>): civ.action.ActionResult;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ActionResult.$metadata$ {
        const constructor: abstract new () => ActionResult;
    }
    namespace ActionResult {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                success(): civ.action.ActionResult;
                fail(errorAlert?: Nullable<string>, exception?: Nullable<string>): civ.action.ActionResult;
                exception(exception: string): civ.action.ActionResult;
                private constructor();
            }
        }
    }
}
export declare namespace civ.ai {
    abstract class AiType {
        private constructor();
        static get IDLE(): civ.ai.AiType & {
            get name(): "IDLE";
            get ordinal(): 0;
        };
        static get OTP_WARRIOR(): civ.ai.AiType & {
            get name(): "OTP_WARRIOR";
            get ordinal(): 1;
        };
        static get OTP_ARCHER(): civ.ai.AiType & {
            get name(): "OTP_ARCHER";
            get ordinal(): 2;
        };
        static get OTP_SCOUT(): civ.ai.AiType & {
            get name(): "OTP_SCOUT";
            get ordinal(): 3;
        };
        get name(): "IDLE" | "OTP_WARRIOR" | "OTP_ARCHER" | "OTP_SCOUT";
        get ordinal(): 0 | 1 | 2 | 3;
        get value(): string;
        static values(): Array<civ.ai.AiType>;
        static valueOf(value: string): civ.ai.AiType;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace AiType.$metadata$ {
        const constructor: abstract new () => AiType;
    }
}
export declare namespace civ.core {
    class CityRange {
        constructor(playerId: string, borders: kotlin.collections.KtList<civ.hex.HexEdge>);
        get playerId(): string;
        get borders(): kotlin.collections.KtList<civ.hex.HexEdge>;
        copy(playerId?: string, borders?: kotlin.collections.KtList<civ.hex.HexEdge>): civ.core.CityRange;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace CityRange.$metadata$ {
        const constructor: abstract new () => CityRange;
    }
}
export declare namespace civ.core {
    class GameApi {
        private constructor();
        allPlayers(): kotlin.collections.KtList<civ.model.Player>;
        citiesFor(playerId: string): kotlin.collections.KtList<civ.model.City>;
        unitsFor(playerId: string): kotlin.collections.KtList<civ.model.CivUnit>;
        stocksFor(playerId: string): civ.model.Stockpiles;
        incomeFor(playerId: string): civ.model.Stockpiles;
        static recalculateVision$default($this: civ.core.GameApi, sendEvents?: boolean): void;
        get currentPlayer(): civ.model.Player;
        registerEventListener(playerId: string, listener: (p0: civ.events.GameEvent) => void): void;
        unregisterEventListeners(playerId: string): boolean;
        tilesForPlayer(playerId: string): kotlin.collections.KtList<civ.model.PlayerTileData>;
        canBuild(coordinates: civ.hex.Coordinates, playerId: string): boolean;
        getTileIncome(coordinates: civ.hex.Coordinates, playerId: string): Nullable<civ.model.Stockpiles>;
        actionsForUnit(playerId: string, unitId: string): civ.hex.Paths;
        execute(playerId: string, action: civ.action.Action): civ.action.ActionResult;
        endTurn(playerId: string): void;
        generateGameState(): civ.core.GameState;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace GameApi.$metadata$ {
        const constructor: abstract new () => GameApi;
    }
    namespace GameApi {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                fromGameState(state: civ.core.GameState): civ.core.GameApi;
                private constructor();
            }
        }
    }
}
export declare namespace civ.core {
    class GameState {
        constructor(players: kotlin.collections.KtList<civ.model.Player>, tileList: kotlin.collections.KtSet<civ.tile.Tile>, cities: kotlin.collections.KtSet<civ.model.City>, units: kotlin.collections.KtSet<civ.model.CivUnit>, stock: kotlin.collections.KtMap<string, civ.model.Stockpiles>, mapSeed: civ.LongWrapper, focusedTile?: Nullable<civ.hex.Coordinates>, visionData?: Nullable<kotlin.collections.KtMap<string, civ.core.GameStateVisionData>>, statistics?: Nullable<kotlin.collections.KtMap<string, civ.core.GameStatistics>>, gameVersion?: string, timestamp?: civ.LongWrapper);
        get players(): kotlin.collections.KtList<civ.model.Player>;
        get tileList(): kotlin.collections.KtSet<civ.tile.Tile>;
        get cities(): kotlin.collections.KtSet<civ.model.City>;
        get units(): kotlin.collections.KtSet<civ.model.CivUnit>;
        get stock(): kotlin.collections.KtMap<string, civ.model.Stockpiles>;
        get mapSeed(): civ.LongWrapper;
        get focusedTile(): Nullable<civ.hex.Coordinates>;
        get visionData(): Nullable<kotlin.collections.KtMap<string, civ.core.GameStateVisionData>>;
        get statistics(): Nullable<kotlin.collections.KtMap<string, civ.core.GameStatistics>>;
        get gameVersion(): string;
        get timestamp(): civ.LongWrapper;
        toJson(): string;
        copy(players?: kotlin.collections.KtList<civ.model.Player>, tileList?: kotlin.collections.KtSet<civ.tile.Tile>, cities?: kotlin.collections.KtSet<civ.model.City>, units?: kotlin.collections.KtSet<civ.model.CivUnit>, stock?: kotlin.collections.KtMap<string, civ.model.Stockpiles>, mapSeed?: civ.LongWrapper, focusedTile?: Nullable<civ.hex.Coordinates>, visionData?: Nullable<kotlin.collections.KtMap<string, civ.core.GameStateVisionData>>, statistics?: Nullable<kotlin.collections.KtMap<string, civ.core.GameStatistics>>, gameVersion?: string, timestamp?: civ.LongWrapper): civ.core.GameState;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace GameState.$metadata$ {
        const constructor: abstract new () => GameState;
    }
    namespace GameState {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                fromJson(json: string): Nullable<civ.core.GameState>;
                private constructor();
            }
        }
    }
    class GameStateVisionData {
        constructor(visible: kotlin.collections.KtSet<civ.hex.Coordinates>, discovered: kotlin.collections.KtSet<civ.hex.Coordinates>);
        get visible(): kotlin.collections.KtSet<civ.hex.Coordinates>;
        get discovered(): kotlin.collections.KtSet<civ.hex.Coordinates>;
        copy(visible?: kotlin.collections.KtSet<civ.hex.Coordinates>, discovered?: kotlin.collections.KtSet<civ.hex.Coordinates>): civ.core.GameStateVisionData;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace GameStateVisionData.$metadata$ {
        const constructor: abstract new () => GameStateVisionData;
    }
    namespace GameStateVisionData {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace civ.core {
    class SimpleStats {
        constructor(points: number, isDefeated: boolean);
        get points(): number;
        get isDefeated(): boolean;
        copy(points?: number, isDefeated?: boolean): civ.core.SimpleStats;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace SimpleStats.$metadata$ {
        const constructor: abstract new () => SimpleStats;
    }
    class GameStatistics {
        constructor(turnNumber?: number, tilesDiscovered?: number, unitsTrained?: number, unitsKilled?: number, unitsLost?: number, buildingsBuilt?: number, roadsBuilt?: number, stockCollected?: civ.model.Stockpiles, citiesFound?: number, citiesConquered?: number, isDefeated?: boolean);
        get turnNumber(): number;
        get tilesDiscovered(): number;
        get unitsTrained(): number;
        get unitsKilled(): number;
        get unitsLost(): number;
        get buildingsBuilt(): number;
        get roadsBuilt(): number;
        get stockCollected(): civ.model.Stockpiles;
        get citiesFound(): number;
        get citiesConquered(): number;
        get isDefeated(): boolean;
        copy(turnNumber?: number, tilesDiscovered?: number, unitsTrained?: number, unitsKilled?: number, unitsLost?: number, buildingsBuilt?: number, roadsBuilt?: number, stockCollected?: civ.model.Stockpiles, citiesFound?: number, citiesConquered?: number, isDefeated?: boolean): civ.core.GameStatistics;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace GameStatistics.$metadata$ {
        const constructor: abstract new () => GameStatistics;
    }
    namespace GameStatistics {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace civ.creator {
    abstract class CreatorMapSize {
        private constructor();
        static get SMALL(): civ.creator.CreatorMapSize & {
            get name(): "SMALL";
            get ordinal(): 0;
        };
        static get MEDIUM(): civ.creator.CreatorMapSize & {
            get name(): "MEDIUM";
            get ordinal(): 1;
        };
        static get LARGE(): civ.creator.CreatorMapSize & {
            get name(): "LARGE";
            get ordinal(): 2;
        };
        get name(): "SMALL" | "MEDIUM" | "LARGE";
        get ordinal(): 0 | 1 | 2;
        get width(): number;
        get height(): number;
        static values(): Array<civ.creator.CreatorMapSize>;
        static valueOf(value: string): civ.creator.CreatorMapSize;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace CreatorMapSize.$metadata$ {
        const constructor: abstract new () => CreatorMapSize;
    }
}
export declare namespace civ.creator {
    abstract class GameCreator extends KtSingleton<GameCreator.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace GameCreator.$metadata$ {
        abstract class constructor {
            createNewGame(players: kotlin.collections.KtList<civ.model.Player>, mapSize: civ.creator.CreatorMapSize, startingUnits: kotlin.collections.KtList<civ.model.UnitType>, startingStock: civ.model.Stockpiles, seed?: civ.LongWrapper): civ.core.GameState;
            private constructor();
        }
    }
}
export declare namespace civ.events {
    interface GameEvent {
        readonly __doNotUseOrImplementIt: {
            readonly "civ.events.GameEvent": unique symbol;
        };
    }
    class StockUpdated implements civ.events.GameEvent {
        constructor(stock: civ.model.Stockpiles, income: Nullable<civ.model.Stockpiles>);
        get stock(): civ.model.Stockpiles;
        get income(): Nullable<civ.model.Stockpiles>;
        copy(stock?: civ.model.Stockpiles, income?: Nullable<civ.model.Stockpiles>): civ.events.StockUpdated;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.events.GameEvent["__doNotUseOrImplementIt"];
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace StockUpdated.$metadata$ {
        const constructor: abstract new () => StockUpdated;
    }
    class VisionChanged implements civ.events.GameEvent {
        constructor(tiles: kotlin.collections.KtList<civ.model.PlayerTileData>);
        get tiles(): kotlin.collections.KtList<civ.model.PlayerTileData>;
        copy(tiles?: kotlin.collections.KtList<civ.model.PlayerTileData>): civ.events.VisionChanged;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.events.GameEvent["__doNotUseOrImplementIt"];
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace VisionChanged.$metadata$ {
        const constructor: abstract new () => VisionChanged;
    }
    class AttackEvent implements civ.events.GameEvent {
        constructor(from: civ.hex.Coordinates, to: civ.hex.Coordinates, isRanged: boolean, updatedAttacker: Nullable<civ.model.CivUnit>, updatedDefender: Nullable<civ.model.CivUnit>);
        get from(): civ.hex.Coordinates;
        get to(): civ.hex.Coordinates;
        get isRanged(): boolean;
        get updatedAttacker(): Nullable<civ.model.CivUnit>;
        get updatedDefender(): Nullable<civ.model.CivUnit>;
        copy(from?: civ.hex.Coordinates, to?: civ.hex.Coordinates, isRanged?: boolean, updatedAttacker?: Nullable<civ.model.CivUnit>, updatedDefender?: Nullable<civ.model.CivUnit>): civ.events.AttackEvent;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.events.GameEvent["__doNotUseOrImplementIt"];
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace AttackEvent.$metadata$ {
        const constructor: abstract new () => AttackEvent;
    }
    class TileUpdated implements civ.events.GameEvent {
        constructor(tileData: civ.model.PlayerTileData);
        get tileData(): civ.model.PlayerTileData;
        copy(tileData?: civ.model.PlayerTileData): civ.events.TileUpdated;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.events.GameEvent["__doNotUseOrImplementIt"];
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace TileUpdated.$metadata$ {
        const constructor: abstract new () => TileUpdated;
    }
    class ScoreChanged implements civ.events.GameEvent {
        constructor(score: kotlin.collections.KtMap<string, civ.core.SimpleStats>);
        get score(): kotlin.collections.KtMap<string, civ.core.SimpleStats>;
        copy(score?: kotlin.collections.KtMap<string, civ.core.SimpleStats>): civ.events.ScoreChanged;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.events.GameEvent["__doNotUseOrImplementIt"];
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ScoreChanged.$metadata$ {
        const constructor: abstract new () => ScoreChanged;
    }
    abstract class UnitEvent implements civ.events.GameEvent {
        protected constructor(unitId: string);
        get unitId(): string;
        toString(): string;
        readonly __doNotUseOrImplementIt: civ.events.GameEvent["__doNotUseOrImplementIt"];
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UnitEvent.$metadata$ {
        const constructor: abstract new () => UnitEvent;
    }
    namespace UnitEvent {
        class Created extends civ.events.UnitEvent.$metadata$.constructor {
            constructor(unit: civ.model.CivUnit);
            get unit(): civ.model.CivUnit;
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Created.$metadata$ {
            const constructor: abstract new () => Created;
        }
        class Moved extends civ.events.UnitEvent.$metadata$.constructor {
            constructor(unit: civ.model.CivUnit);
            get newCoordinates(): civ.hex.Coordinates;
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Moved.$metadata$ {
            const constructor: abstract new () => Moved;
        }
        class CombinedMove extends civ.events.UnitEvent.$metadata$.constructor {
            constructor(unit: civ.model.CivUnit, visionEvents: kotlin.collections.KtList<civ.events.VisionChanged>, movedEvents: kotlin.collections.KtList<civ.events.UnitEvent.Moved>);
            get visionEvents(): kotlin.collections.KtList<civ.events.VisionChanged>;
            get movedEvents(): kotlin.collections.KtList<civ.events.UnitEvent.Moved>;
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace CombinedMove.$metadata$ {
            const constructor: abstract new () => CombinedMove;
        }
        class Vanish extends civ.events.UnitEvent.$metadata$.constructor {
            constructor(unit: civ.model.CivUnit);
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Vanish.$metadata$ {
            const constructor: abstract new () => Vanish;
        }
    }
    class TurnEndedEvent implements civ.events.GameEvent {
        constructor(newCurrentPlayerId: string, turnNumber: number);
        get newCurrentPlayerId(): string;
        get turnNumber(): number;
        copy(newCurrentPlayerId?: string, turnNumber?: number): civ.events.TurnEndedEvent;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.events.GameEvent["__doNotUseOrImplementIt"];
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace TurnEndedEvent.$metadata$ {
        const constructor: abstract new () => TurnEndedEvent;
    }
    class GameOverEvent implements civ.events.GameEvent {
        constructor(finalStats: kotlin.collections.KtMap<string, civ.core.GameStatistics>);
        get finalStats(): kotlin.collections.KtMap<string, civ.core.GameStatistics>;
        copy(finalStats?: kotlin.collections.KtMap<string, civ.core.GameStatistics>): civ.events.GameOverEvent;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: civ.events.GameEvent["__doNotUseOrImplementIt"];
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace GameOverEvent.$metadata$ {
        const constructor: abstract new () => GameOverEvent;
    }
}
export declare namespace civ.hex {
    class Coordinates {
        constructor(q: number, r: number);
        get q(): number;
        get r(): number;
        get s(): number;
        toString(): string;
        copy(q?: number, r?: number): civ.hex.Coordinates;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Coordinates.$metadata$ {
        const constructor: abstract new () => Coordinates;
    }
    namespace Coordinates {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                fromDoubles(q: number, r: number, s: number): civ.hex.Coordinates;
                private constructor();
            }
        }
    }
}
export declare namespace civ.hex {
    abstract class HexEdge {
        private constructor();
        static get TOP_RIGHT(): civ.hex.HexEdge & {
            get name(): "TOP_RIGHT";
            get ordinal(): 0;
        };
        static get RIGHT(): civ.hex.HexEdge & {
            get name(): "RIGHT";
            get ordinal(): 1;
        };
        static get BOTTOM_RIGHT(): civ.hex.HexEdge & {
            get name(): "BOTTOM_RIGHT";
            get ordinal(): 2;
        };
        static get BOTTOM_LEFT(): civ.hex.HexEdge & {
            get name(): "BOTTOM_LEFT";
            get ordinal(): 3;
        };
        static get LEFT(): civ.hex.HexEdge & {
            get name(): "LEFT";
            get ordinal(): 4;
        };
        static get TOP_LEFT(): civ.hex.HexEdge & {
            get name(): "TOP_LEFT";
            get ordinal(): 5;
        };
        get name(): "TOP_RIGHT" | "RIGHT" | "BOTTOM_RIGHT" | "BOTTOM_LEFT" | "LEFT" | "TOP_LEFT";
        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5;
        get q(): number;
        get r(): number;
        static values(): Array<civ.hex.HexEdge>;
        static valueOf(value: string): civ.hex.HexEdge;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace HexEdge.$metadata$ {
        const constructor: abstract new () => HexEdge;
    }
}
export declare namespace civ.hex {
    class Paths {
        constructor(start: civ.hex.Coordinates, cameFrom: kotlin.collections.KtMap<civ.hex.Coordinates, civ.hex.Coordinates>, costs: kotlin.collections.KtMap<civ.hex.Coordinates, number>, attackTargets?: kotlin.collections.KtMap<civ.hex.Coordinates, civ.hex.Coordinates>);
        get start(): civ.hex.Coordinates;
        get attackTargets(): kotlin.collections.KtMap<civ.hex.Coordinates, civ.hex.Coordinates>;
        get moveTargets(): kotlin.collections.KtSet<civ.hex.Coordinates>;
        get possibleTargets(): kotlin.collections.KtSet<civ.hex.Coordinates>;
        getPath(target: civ.hex.Coordinates): Nullable<kotlin.collections.KtList<civ.hex.PathSegment>>;
        copy(start?: civ.hex.Coordinates, cameFrom?: kotlin.collections.KtMap<civ.hex.Coordinates, civ.hex.Coordinates>, costs?: kotlin.collections.KtMap<civ.hex.Coordinates, number>, attackTargets?: kotlin.collections.KtMap<civ.hex.Coordinates, civ.hex.Coordinates>): civ.hex.Paths;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Paths.$metadata$ {
        const constructor: abstract new () => Paths;
    }
    class PathSegment {
        constructor(coordinates: civ.hex.Coordinates, cost: number);
        get coordinates(): civ.hex.Coordinates;
        get cost(): number;
        copy(coordinates?: civ.hex.Coordinates, cost?: number): civ.hex.PathSegment;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace PathSegment.$metadata$ {
        const constructor: abstract new () => PathSegment;
    }
}
export declare namespace civ.model {
    abstract class Building {
        private constructor();
        static get VILLAGE_HALL(): civ.model.Building & {
            get name(): "VILLAGE_HALL";
            get ordinal(): 0;
        };
        static get TOWN_HALL(): civ.model.Building & {
            get name(): "TOWN_HALL";
            get ordinal(): 1;
        };
        static get CASTLE(): civ.model.Building & {
            get name(): "CASTLE";
            get ordinal(): 2;
        };
        static get ROAD(): civ.model.Building & {
            get name(): "ROAD";
            get ordinal(): 3;
        };
        static get WATCH_TOWER(): civ.model.Building & {
            get name(): "WATCH_TOWER";
            get ordinal(): 4;
        };
        static get FISH_TRAP(): civ.model.Building & {
            get name(): "FISH_TRAP";
            get ordinal(): 5;
        };
        static get FISHING_SHIP(): civ.model.Building & {
            get name(): "FISHING_SHIP";
            get ordinal(): 6;
        };
        static get FISHING_HUT(): civ.model.Building & {
            get name(): "FISHING_HUT";
            get ordinal(): 7;
        };
        static get PORT(): civ.model.Building & {
            get name(): "PORT";
            get ordinal(): 8;
        };
        static get LUMBERCAMP(): civ.model.Building & {
            get name(): "LUMBERCAMP";
            get ordinal(): 9;
        };
        static get SAWMILL(): civ.model.Building & {
            get name(): "SAWMILL";
            get ordinal(): 10;
        };
        static get FARM(): civ.model.Building & {
            get name(): "FARM";
            get ordinal(): 11;
        };
        static get WINDMILL(): civ.model.Building & {
            get name(): "WINDMILL";
            get ordinal(): 12;
        };
        static get RIVERLAND_FARM(): civ.model.Building & {
            get name(): "RIVERLAND_FARM";
            get ordinal(): 13;
        };
        static get WATERMILL(): civ.model.Building & {
            get name(): "WATERMILL";
            get ordinal(): 14;
        };
        static get HUNTERS_CAMP(): civ.model.Building & {
            get name(): "HUNTERS_CAMP";
            get ordinal(): 15;
        };
        static get BUTCHERY(): civ.model.Building & {
            get name(): "BUTCHERY";
            get ordinal(): 16;
        };
        static get MINE(): civ.model.Building & {
            get name(): "MINE";
            get ordinal(): 17;
        };
        static get MARKET(): civ.model.Building & {
            get name(): "MARKET";
            get ordinal(): 18;
        };
        static get GUARD_TOWERS(): civ.model.Building & {
            get name(): "GUARD_TOWERS";
            get ordinal(): 19;
        };
        static get WALLS(): civ.model.Building & {
            get name(): "WALLS";
            get ordinal(): 20;
        };
        static get BARRACKS(): civ.model.Building & {
            get name(): "BARRACKS";
            get ordinal(): 21;
        };
        static get BLACKSMITH(): civ.model.Building & {
            get name(): "BLACKSMITH";
            get ordinal(): 22;
        };
        static get ARMORERS_WORKSHOP(): civ.model.Building & {
            get name(): "ARMORERS_WORKSHOP";
            get ordinal(): 23;
        };
        static get STABLE(): civ.model.Building & {
            get name(): "STABLE";
            get ordinal(): 24;
        };
        static get WARHORSE_STABLES(): civ.model.Building & {
            get name(): "WARHORSE_STABLES";
            get ordinal(): 25;
        };
        static get KNIGHTS_HALL(): civ.model.Building & {
            get name(): "KNIGHTS_HALL";
            get ordinal(): 26;
        };
        static get ARCHERY_RANGE(): civ.model.Building & {
            get name(): "ARCHERY_RANGE";
            get ordinal(): 27;
        };
        static get ARBALEST_GUILD(): civ.model.Building & {
            get name(): "ARBALEST_GUILD";
            get ordinal(): 28;
        };
        static get SIEGE_WORKSHOP(): civ.model.Building & {
            get name(): "SIEGE_WORKSHOP";
            get ordinal(): 29;
        };
        get name(): "VILLAGE_HALL" | "TOWN_HALL" | "CASTLE" | "ROAD" | "WATCH_TOWER" | "FISH_TRAP" | "FISHING_SHIP" | "FISHING_HUT" | "PORT" | "LUMBERCAMP" | "SAWMILL" | "FARM" | "WINDMILL" | "RIVERLAND_FARM" | "WATERMILL" | "HUNTERS_CAMP" | "BUTCHERY" | "MINE" | "MARKET" | "GUARD_TOWERS" | "WALLS" | "BARRACKS" | "BLACKSMITH" | "ARMORERS_WORKSHOP" | "STABLE" | "WARHORSE_STABLES" | "KNIGHTS_HALL" | "ARCHERY_RANGE" | "ARBALEST_GUILD" | "SIEGE_WORKSHOP";
        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29;
        get tileRequirement(): (p0: civ.tile.Tile) => boolean;
        get buildingRequirements(): kotlin.collections.KtSet<civ.model.Building>;
        get cost(): civ.model.Stockpiles;
        get bonuses(): kotlin.collections.KtList<any/* civ.model.TileBonus */>;
        get replaces(): Nullable<civ.model.Building>;
        unlockRequirement(tile: civ.tile.Tile): boolean;
        production(): civ.model.Stockpiles;
        defenseBonus(): number;
        static values(): Array<civ.model.Building>;
        static valueOf(value: string): civ.model.Building;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Building.$metadata$ {
        const constructor: abstract new () => Building;
    }
    namespace Building {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                get cityMainBuildings(): Array<civ.model.Building>;
                private constructor();
            }
        }
    }
}
export declare namespace civ.model {
    abstract class CityLevel {
        private constructor();
        static get VILLAGE(): civ.model.CityLevel & {
            get name(): "VILLAGE";
            get ordinal(): 0;
        };
        static get TOWN(): civ.model.CityLevel & {
            get name(): "TOWN";
            get ordinal(): 1;
        };
        static get CITY(): civ.model.CityLevel & {
            get name(): "CITY";
            get ordinal(): 2;
        };
        get name(): "VILLAGE" | "TOWN" | "CITY";
        get ordinal(): 0 | 1 | 2;
        get borderRange(): number;
        get visionRange(): number;
        get attack(): number;
        get attackRange(): number;
        get occupationTime(): number;
        static values(): Array<civ.model.CityLevel>;
        static valueOf(value: string): civ.model.CityLevel;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace CityLevel.$metadata$ {
        const constructor: abstract new () => CityLevel;
    }
    class City {
        constructor(cityId: string | undefined, playerId: string, coordinates: civ.hex.Coordinates, level?: civ.model.CityLevel);
        get cityId(): string;
        get playerId(): string;
        get coordinates(): civ.hex.Coordinates;
        get level(): civ.model.CityLevel;
        get borderRange(): number;
        get visionRange(): number;
        copy(cityId?: string, playerId?: string, coordinates?: civ.hex.Coordinates, level?: civ.model.CityLevel): civ.model.City;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace City.$metadata$ {
        const constructor: abstract new () => City;
    }
    namespace City {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace civ.model {
    abstract class UnitType {
        private constructor();
        static get SETTLERS(): civ.model.UnitType & {
            get name(): "SETTLERS";
            get ordinal(): 0;
        };
        static get WARRIOR(): civ.model.UnitType & {
            get name(): "WARRIOR";
            get ordinal(): 1;
        };
        static get SCOUT(): civ.model.UnitType & {
            get name(): "SCOUT";
            get ordinal(): 2;
        };
        static get ARCHER(): civ.model.UnitType & {
            get name(): "ARCHER";
            get ordinal(): 3;
        };
        static get SWORDSMAN(): civ.model.UnitType & {
            get name(): "SWORDSMAN";
            get ordinal(): 4;
        };
        static get RIDER(): civ.model.UnitType & {
            get name(): "RIDER";
            get ordinal(): 5;
        };
        static get CROSSBOWMAN(): civ.model.UnitType & {
            get name(): "CROSSBOWMAN";
            get ordinal(): 6;
        };
        static get HEAVY_SWORDSMAN(): civ.model.UnitType & {
            get name(): "HEAVY_SWORDSMAN";
            get ordinal(): 7;
        };
        static get KNIGHT(): civ.model.UnitType & {
            get name(): "KNIGHT";
            get ordinal(): 8;
        };
        static get TREBUCHET(): civ.model.UnitType & {
            get name(): "TREBUCHET";
            get ordinal(): 9;
        };
        get name(): "SETTLERS" | "WARRIOR" | "SCOUT" | "ARCHER" | "SWORDSMAN" | "RIDER" | "CROSSBOWMAN" | "HEAVY_SWORDSMAN" | "KNIGHT" | "TREBUCHET";
        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
        get value(): string;
        get attack(): number;
        get range(): number;
        get defense(): number;
        get maxHp(): number;
        get speed(): number;
        get visionRange(): number;
        get cost(): civ.model.Stockpiles;
        get requiredBuildings(): kotlin.collections.KtSet<civ.model.Building>;
        buildingRequirement(buildings: kotlin.collections.KtSet<civ.model.Building>): boolean;
        static values(): Array<civ.model.UnitType>;
        static valueOf(value: string): civ.model.UnitType;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UnitType.$metadata$ {
        const constructor: abstract new () => UnitType;
    }
    namespace UnitType {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                byValue(value: string): civ.model.UnitType;
                private constructor();
            }
        }
    }
    class CivUnit {
        constructor(unitId: string | undefined, unitType: civ.model.UnitType, playerId: string, coordinates: civ.hex.Coordinates, hp?: number, movementLeft?: number, actionPoint?: boolean, conquerState?: civ.model.ConquerState);
        get unitId(): string;
        get unitType(): civ.model.UnitType;
        get playerId(): string;
        get coordinates(): civ.hex.Coordinates;
        get hp(): number;
        get movementLeft(): number;
        get actionPoint(): boolean;
        get conquerState(): civ.model.ConquerState;
        get attack(): number;
        get defense(): number;
        get attackRange(): number;
        get maxHp(): number;
        get speed(): number;
        get visionRange(): number;
        copy(unitId?: string, unitType?: civ.model.UnitType, playerId?: string, coordinates?: civ.hex.Coordinates, hp?: number, movementLeft?: number, actionPoint?: boolean, conquerState?: civ.model.ConquerState): civ.model.CivUnit;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace CivUnit.$metadata$ {
        const constructor: abstract new () => CivUnit;
    }
    namespace CivUnit {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                speedToMovement(speed: number): number;
                private constructor();
            }
        }
    }
    abstract class ConquerState {
        protected constructor();
        abstract get canConquer(): boolean;
        onTurnPassed(): civ.model.ConquerState;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ConquerState.$metadata$ {
        const constructor: abstract new () => ConquerState;
    }
    namespace ConquerState {
        abstract class None extends KtSingleton<None.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace None.$metadata$ {
            abstract class constructor extends civ.model.ConquerState.$metadata$.constructor /* implements kotlinx.serialization.internal.SerializerFactory */ {
                get canConquer(): boolean;
                toString(): string;
                hashCode(): number;
                equals(other: Nullable<any>): boolean;
                private constructor();
            }
        }
        class Occupying extends civ.model.ConquerState.$metadata$.constructor {
            constructor(turnsLeft: number);
            get turnsLeft(): number;
            get canConquer(): boolean;
            onTurnPassed(): civ.model.ConquerState;
            toString(): string;
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Occupying.$metadata$ {
            const constructor: abstract new () => Occupying;
        }
        namespace Occupying {
            abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
                private constructor();
            }
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace Companion.$metadata$ {
                abstract class constructor {
                    private constructor();
                }
            }
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor /* implements kotlinx.serialization.internal.SerializerFactory */ {
                private constructor();
            }
        }
    }
}
export declare namespace civ.model {
    class Player {
        constructor(name: string, color: civ.model.PlayerColor, aiType?: Nullable<civ.ai.AiType>, playerId?: string);
        get name(): string;
        get color(): civ.model.PlayerColor;
        get aiType(): Nullable<civ.ai.AiType>;
        get playerId(): string;
        copy(name?: string, color?: civ.model.PlayerColor, aiType?: Nullable<civ.ai.AiType>, playerId?: string): civ.model.Player;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Player.$metadata$ {
        const constructor: abstract new () => Player;
    }
    namespace Player {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
    abstract class PlayerColor {
        private constructor();
        static get BLUE(): civ.model.PlayerColor & {
            get name(): "BLUE";
            get ordinal(): 0;
        };
        static get RED(): civ.model.PlayerColor & {
            get name(): "RED";
            get ordinal(): 1;
        };
        static get GREEN(): civ.model.PlayerColor & {
            get name(): "GREEN";
            get ordinal(): 2;
        };
        static get YELLOW(): civ.model.PlayerColor & {
            get name(): "YELLOW";
            get ordinal(): 3;
        };
        get name(): "BLUE" | "RED" | "GREEN" | "YELLOW";
        get ordinal(): 0 | 1 | 2 | 3;
        static values(): Array<civ.model.PlayerColor>;
        static valueOf(value: string): civ.model.PlayerColor;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace PlayerColor.$metadata$ {
        const constructor: abstract new () => PlayerColor;
    }
}
export declare namespace civ.model {
    class PlayerTileData {
        constructor(coordinates: civ.hex.Coordinates, isVisible: boolean, tile: Nullable<civ.tile.Tile>, unit: Nullable<civ.model.CivUnit>, city: Nullable<civ.model.City>, cityRange: Nullable<civ.core.CityRange>);
        get coordinates(): civ.hex.Coordinates;
        get isVisible(): boolean;
        get tile(): Nullable<civ.tile.Tile>;
        get unit(): Nullable<civ.model.CivUnit>;
        get city(): Nullable<civ.model.City>;
        get cityRange(): Nullable<civ.core.CityRange>;
        copy(coordinates?: civ.hex.Coordinates, isVisible?: boolean, tile?: Nullable<civ.tile.Tile>, unit?: Nullable<civ.model.CivUnit>, city?: Nullable<civ.model.City>, cityRange?: Nullable<civ.core.CityRange>): civ.model.PlayerTileData;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace PlayerTileData.$metadata$ {
        const constructor: abstract new () => PlayerTileData;
    }
}
export declare namespace civ.model {
    class Stockpiles {
        constructor(food?: number, wood?: number, gold?: number);
        get food(): number;
        get wood(): number;
        get gold(): number;
        get total(): number;
        plus(other: civ.model.Stockpiles): civ.model.Stockpiles;
        minus(other: civ.model.Stockpiles): civ.model.Stockpiles;
        canSubstract(other: civ.model.Stockpiles): boolean;
        copy(food?: number, wood?: number, gold?: number): civ.model.Stockpiles;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Stockpiles.$metadata$ {
        const constructor: abstract new () => Stockpiles;
    }
    namespace Stockpiles {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace civ.tile {
    abstract class Tile {
        protected constructor();
        abstract get coords(): civ.hex.Coordinates;
        abstract get buildings(): kotlin.collections.KtSet<civ.model.Building>;
        get isBusy(): boolean;
        protected get baseMovementCost(): number;
        protected get baseDefenseBonus(): number;
        movementCost(): number;
        tileVision(): Nullable<number>;
        defenseBonus(): number;
        updated(isBusy?: boolean, buildings?: kotlin.collections.KtSet<civ.model.Building>): civ.tile.Tile;
        getAllPossibleBuildings(): kotlin.collections.KtList<civ.model.Building>;
        getMainCityBuilding(): Nullable<civ.model.Building>;
        abstract getVisibleName(): string;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Tile.$metadata$ {
        const constructor: abstract new () => Tile;
    }
    namespace Tile {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor /* implements kotlinx.serialization.internal.SerializerFactory */ {
                private constructor();
            }
        }
    }
    class Water extends civ.tile.Tile.$metadata$.constructor {
        constructor(coords: civ.hex.Coordinates, buildings?: kotlin.collections.KtSet<civ.model.Building>);
        get coords(): civ.hex.Coordinates;
        get buildings(): kotlin.collections.KtSet<civ.model.Building>;
        protected get baseMovementCost(): number;
        getVisibleName(): string;
        copy(coords?: civ.hex.Coordinates, buildings?: kotlin.collections.KtSet<civ.model.Building>): civ.tile.Water;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Water.$metadata$ {
        const constructor: abstract new () => Water;
    }
    namespace Water {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
    class Grass extends civ.tile.Tile.$metadata$.constructor {
        constructor(coords: civ.hex.Coordinates, isBusy?: boolean, coast?: boolean, forest?: boolean, animals?: boolean, riverEdges?: kotlin.collections.KtList<civ.hex.HexEdge>, buildings?: kotlin.collections.KtSet<civ.model.Building>);
        get coords(): civ.hex.Coordinates;
        get isBusy(): boolean;
        get coast(): boolean;
        get forest(): boolean;
        get animals(): boolean;
        get riverEdges(): kotlin.collections.KtList<civ.hex.HexEdge>;
        get buildings(): kotlin.collections.KtSet<civ.model.Building>;
        get river(): boolean;
        protected get baseMovementCost(): number;
        getVisibleName(): string;
        copy(coords?: civ.hex.Coordinates, isBusy?: boolean, coast?: boolean, forest?: boolean, animals?: boolean, riverEdges?: kotlin.collections.KtList<civ.hex.HexEdge>, buildings?: kotlin.collections.KtSet<civ.model.Building>): civ.tile.Grass;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Grass.$metadata$ {
        const constructor: abstract new () => Grass;
    }
    namespace Grass {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
    class Mountains extends civ.tile.Tile.$metadata$.constructor {
        constructor(coords: civ.hex.Coordinates, isBusy?: boolean, buildings?: kotlin.collections.KtSet<civ.model.Building>, gold?: boolean);
        get coords(): civ.hex.Coordinates;
        get isBusy(): boolean;
        get buildings(): kotlin.collections.KtSet<civ.model.Building>;
        get gold(): boolean;
        protected get baseMovementCost(): number;
        protected get baseDefenseBonus(): number;
        getVisibleName(): string;
        copy(coords?: civ.hex.Coordinates, isBusy?: boolean, buildings?: kotlin.collections.KtSet<civ.model.Building>, gold?: boolean): civ.tile.Mountains;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Mountains.$metadata$ {
        const constructor: abstract new () => Mountains;
    }
    namespace Mountains {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export as namespace me_kosert_civ_kotlin_civ;