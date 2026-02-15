(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'me.kosert.civ:kotlin-civ'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'me.kosert.civ:kotlin-civ'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'me.kosert.civ:kotlin-civ'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'me.kosert.civ:kotlin-civ'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'me.kosert.civ:kotlin-civ'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'me.kosert.civ:kotlin-civ'.");
    }
    globalThis['me.kosert.civ:kotlin-civ'] = factory(typeof globalThis['me.kosert.civ:kotlin-civ'] === 'undefined' ? {} : globalThis['me.kosert.civ:kotlin-civ'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.f9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j8;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var THROW_CCE = kotlin_kotlin.$_$.lb;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var initMetadataForObject = kotlin_kotlin.$_$.n8;
  var VOID = kotlin_kotlin.$_$.e;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var Unit_instance = kotlin_kotlin.$_$.u3;
  var objectCreate = kotlin_kotlin.$_$.e9;
  var toLong = kotlin_kotlin.$_$.ra;
  var initMetadataForClass = kotlin_kotlin.$_$.i8;
  var defineProp = kotlin_kotlin.$_$.c8;
  var initMetadataForInterface = kotlin_kotlin.$_$.l8;
  var getStringHashCode = kotlin_kotlin.$_$.g8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var toString = kotlin_kotlin.$_$.jc;
  var getBooleanHashCode = kotlin_kotlin.$_$.e8;
  var hashCode = kotlin_kotlin.$_$.h8;
  var equals = kotlin_kotlin.$_$.d8;
  var Companion_getInstance = kotlin_kotlin.$_$.k3;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.f;
  var toDuration = kotlin_kotlin.$_$.ab;
  var THROW_IAE = kotlin_kotlin.$_$.mb;
  var Enum = kotlin_kotlin.$_$.gb;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gc;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var Collection = kotlin_kotlin.$_$.w3;
  var isInterface = kotlin_kotlin.$_$.v8;
  var checkCountOverflow = kotlin_kotlin.$_$.n4;
  var joinToString = kotlin_kotlin.$_$.r5;
  var println = kotlin_kotlin.$_$.r7;
  var addAll = kotlin_kotlin.$_$.i4;
  var distinct = kotlin_kotlin.$_$.e5;
  var listOf = kotlin_kotlin.$_$.x5;
  var asSequence = kotlin_kotlin.$_$.m4;
  var filter = kotlin_kotlin.$_$.w9;
  var map = kotlin_kotlin.$_$.x9;
  var sortedWith = kotlin_kotlin.$_$.y9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.p4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var sortedWith_0 = kotlin_kotlin.$_$.z6;
  var FunctionAdapter = kotlin_kotlin.$_$.s7;
  var Comparator = kotlin_kotlin.$_$.db;
  var compareTo = kotlin_kotlin.$_$.b8;
  var emptyList = kotlin_kotlin.$_$.h5;
  var mutableListOf = kotlin_kotlin.$_$.f6;
  var single = kotlin_kotlin.$_$.x6;
  var Default_getInstance = kotlin_kotlin.$_$.h3;
  var randomOrNull = kotlin_kotlin.$_$.m6;
  var compareValues = kotlin_kotlin.$_$.n7;
  var Pair = kotlin_kotlin.$_$.jb;
  var toList = kotlin_kotlin.$_$.ic;
  var plus = kotlin_kotlin.$_$.k6;
  var toSet = kotlin_kotlin.$_$.j7;
  var Companion_instance = kotlin_kotlin.$_$.p3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m1;
  var createFailure = kotlin_kotlin.$_$.zb;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.n1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.p1;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.o1;
  var withIndex = kotlin_kotlin.$_$.l7;
  var asSequence_0 = kotlin_kotlin.$_$.l4;
  var minus = kotlin_kotlin.$_$.c6;
  var toString_0 = kotlin_kotlin.$_$.i9;
  var toList_0 = kotlin_kotlin.$_$.d7;
  var enumEntries = kotlin_kotlin.$_$.q7;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var emptySet = kotlin_kotlin.$_$.j5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var coerceIn = kotlin_kotlin.$_$.p9;
  var roundToInt = kotlin_kotlin.$_$.k9;
  var coerceAtLeast = kotlin_kotlin.$_$.n9;
  var to = kotlin_kotlin.$_$.kc;
  var eachCount = kotlin_kotlin.$_$.g5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var mapCapacity = kotlin_kotlin.$_$.z5;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var plus_0 = kotlin_kotlin.$_$.l6;
  var getValue = kotlin_kotlin.$_$.n5;
  var toMutableList = kotlin_kotlin.$_$.g7;
  var toMutableMap = kotlin_kotlin.$_$.h7;
  var first = kotlin_kotlin.$_$.m5;
  var removeAll = kotlin_kotlin.$_$.p6;
  var dropLast = kotlin_kotlin.$_$.f5;
  var lastOrNull = kotlin_kotlin.$_$.u5;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.ec;
  var Default_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var getKClass = kotlin_kotlin.$_$.d;
  var arrayOf = kotlin_kotlin.$_$.xb;
  var createKType = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var System_instance = kotlin_kotlin.$_$.j3;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var numberToInt = kotlin_kotlin.$_$.c9;
  var firstOrNull = kotlin_kotlin.$_$.l5;
  var contains = kotlin_kotlin.$_$.q4;
  var plus_1 = kotlin_kotlin.$_$.i6;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var listOf_0 = kotlin_kotlin.$_$.y5;
  var abs = kotlin_kotlin.$_$.j9;
  var mutableMapOf = kotlin_kotlin.$_$.g6;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var sortWith = kotlin_kotlin.$_$.y6;
  var removeFirst = kotlin_kotlin.$_$.q6;
  var reversed = kotlin_kotlin.$_$.s6;
  var emptyMap = kotlin_kotlin.$_$.i5;
  var KtMap = kotlin_kotlin.$_$.d4;
  var minus_0 = kotlin_kotlin.$_$.e6;
  var plus_2 = kotlin_kotlin.$_$.j6;
  var setOf = kotlin_kotlin.$_$.t6;
  var coerceAtMost = kotlin_kotlin.$_$.o9;
  var random = kotlin_kotlin.$_$.n6;
  var mutableSetOf = kotlin_kotlin.$_$.h6;
  var shuffled = kotlin_kotlin.$_$.v6;
  var take = kotlin_kotlin.$_$.a7;
  var Random = kotlin_kotlin.$_$.l9;
  var toMutableSet = kotlin_kotlin.$_$.i7;
  var removeAll_0 = kotlin_kotlin.$_$.o6;
  var minus_1 = kotlin_kotlin.$_$.d6;
  var minus_2 = kotlin_kotlin.$_$.b6;
  var checkIndexOverflow = kotlin_kotlin.$_$.o4;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var setOf_0 = kotlin_kotlin.$_$.u6;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.m3;
  var ObjectSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var firstOrNull_0 = kotlin_kotlin.$_$.k5;
  var listOfNotNull = kotlin_kotlin.$_$.w5;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LongWrapper, 'LongWrapper', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForObject(TestData, 'TestData');
  initMetadataForInterface(Action, 'Action');
  initMetadataForClass(Move, 'Move', VOID, VOID, [Action]);
  initMetadataForClass(Attack, 'Attack', VOID, VOID, [Action]);
  initMetadataForClass(Settle, 'Settle', VOID, VOID, [Action]);
  initMetadataForClass(Build, 'Build', VOID, VOID, [Action]);
  initMetadataForClass(Recruit, 'Recruit', VOID, VOID, [Action]);
  initMetadataForClass(Conquer, 'Conquer', VOID, VOID, [Action]);
  initMetadataForClass(Disband, 'Disband', VOID, VOID, [Action]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ActionResult, 'ActionResult');
  initMetadataForClass(Ai, 'Ai');
  initMetadataForClass(AiType, 'AiType', VOID, Enum);
  initMetadataForClass(IdleAi, 'IdleAi', VOID, Ai);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(OneTrickPonyAi, 'OneTrickPonyAi', VOID, Ai);
  initMetadataForClass(WarriorAi, 'WarriorAi', VOID, OneTrickPonyAi);
  initMetadataForClass(ArcherAi, 'ArcherAi', VOID, OneTrickPonyAi);
  initMetadataForClass(ScoutAi, 'ScoutAi', VOID, OneTrickPonyAi);
  initMetadataForClass(PriorityQueueItem, 'PriorityQueueItem');
  initMetadataForClass(UnitItem, 'UnitItem', VOID, PriorityQueueItem);
  initMetadataForClass(BuildingItem, 'BuildingItem', VOID, PriorityQueueItem);
  initMetadataForClass(Condition, 'Condition');
  initMetadataForObject(None, 'None', VOID, Condition);
  initMetadataForClass(Predicate, 'Predicate', VOID, Condition);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(PriorityQueueBuilder, 'PriorityQueueBuilder', PriorityQueueBuilder);
  initMetadataForClass(Cheat, 'Cheat', VOID, Enum);
  initMetadataForClass(CheatEngine, 'CheatEngine');
  initMetadataForClass(CityRange, 'CityRange');
  initMetadataForClass(BorderCalculator, 'BorderCalculator');
  initMetadataForClass(CombatCalculator, 'CombatCalculator', CombatCalculator);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(GameApi$verifyIntegrity$$inlined$groupingBy$1);
  initMetadataForClass(GameApi$verifyIntegrity$$inlined$groupingBy$2);
  initMetadataForClass(GameApi, 'GameApi');
  initMetadataForClass(LogMessage, 'LogMessage');
  initMetadataForClass(GameLogImpl, 'GameLogImpl', GameLogImpl);
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(GameState, 'GameState', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(GameStateVisionData, 'GameStateVisionData', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForClass(SimpleStats, 'SimpleStats');
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(GameStatistics, 'GameStatistics', GameStatistics, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForClass(StatisticsCounter, 'StatisticsCounter');
  initMetadataForClass(StockpilesManager, 'StockpilesManager');
  initMetadataForClass(VisionData, 'VisionData');
  initMetadataForClass(VisionCalculator, 'VisionCalculator');
  initMetadataForClass(CreatorMapSize, 'CreatorMapSize', VOID, Enum);
  initMetadataForObject(GameCreator, 'GameCreator');
  initMetadataForClass(EventListener, 'EventListener');
  initMetadataForInterface(GameEvent, 'GameEvent');
  initMetadataForClass(StockUpdated, 'StockUpdated', VOID, VOID, [GameEvent]);
  initMetadataForClass(VisionChanged, 'VisionChanged', VOID, VOID, [GameEvent]);
  initMetadataForClass(AttackEvent, 'AttackEvent', VOID, VOID, [GameEvent]);
  initMetadataForClass(TileUpdated, 'TileUpdated', VOID, VOID, [GameEvent]);
  initMetadataForClass(ScoreChanged, 'ScoreChanged', VOID, VOID, [GameEvent]);
  initMetadataForClass(UnitEvent, 'UnitEvent', VOID, VOID, [GameEvent]);
  initMetadataForClass(Created, 'Created', VOID, UnitEvent);
  initMetadataForClass(Moved, 'Moved', VOID, UnitEvent);
  initMetadataForClass(CombinedMove, 'CombinedMove', VOID, UnitEvent);
  initMetadataForClass(Vanish, 'Vanish', VOID, UnitEvent);
  initMetadataForClass(TurnEndedEvent, 'TurnEndedEvent', VOID, VOID, [GameEvent]);
  initMetadataForClass(GameOverEvent, 'GameOverEvent', VOID, VOID, [GameEvent]);
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Coordinates, 'Coordinates', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForClass(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(sam$kotlin_Comparator$0_2, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(HexEdge, 'HexEdge', VOID, Enum);
  initMetadataForObject(HexLayouts, 'HexLayouts');
  initMetadataForClass(Paths, 'Paths');
  initMetadataForClass(PathSegment, 'PathSegment');
  initMetadataForClass(sam$kotlin_Comparator$0_3, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(HexMap, 'HexMap');
  initMetadataForClass(MapData, 'MapData');
  initMetadataForClass(sam$kotlin_Comparator$0_4, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(MapGenerator, 'MapGenerator');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(Building, 'Building', VOID, Enum);
  initMetadataForClass(OverrideMovementCost, 'OverrideMovementCost');
  initMetadataForClass(StockCollectBonus, 'StockCollectBonus');
  initMetadataForClass(DefenseBonus, 'DefenseBonus');
  initMetadataForClass(VisionUpgrade, 'VisionUpgrade');
  initMetadataForClass(CityLevel, 'CityLevel', VOID, Enum);
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(City, 'City', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(UnitType, 'UnitType', VOID, Enum);
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CivUnit, 'CivUnit', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_11);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ConquerState, 'ConquerState', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_14});
  initMetadataForObject(None_0, 'None', VOID, ConquerState, [ConquerState, SerializerFactory], VOID, VOID, {0: None_getInstance_0});
  initMetadataForClass(Occupying, 'Occupying', VOID, ConquerState, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_12, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_13);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Player, 'Player', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForClass(PlayerColor, 'PlayerColor', VOID, Enum);
  initMetadataForClass(PlayerTileData, 'PlayerTileData');
  initMetadataForCompanion(Companion_14);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Stockpiles, 'Stockpiles', Stockpiles, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForCompanion(Companion_15, VOID, [SerializerFactory]);
  initMetadataForClass(sam$kotlin_Comparator$0_5, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(Tile, 'Tile', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_17});
  initMetadataForCompanion(Companion_16);
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Water, 'Water', VOID, Tile, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForCompanion(Companion_17);
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Grass, 'Grass', VOID, Tile, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForCompanion(Companion_18);
  initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Mountains, 'Mountains', VOID, Tile, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  initMetadataForObject(WindowHelper, 'WindowHelper');
  initMetadataForClass(ConsoleLog, 'ConsoleLog', ConsoleLog);
  //endregion
  function Companion() {
  }
  protoOf(Companion).y1e = function (value) {
    return new LongWrapper(value.toString());
  };
  protoOf(Companion).fromString = function (value) {
    return new LongWrapper(value);
  };
  protoOf(Companion).a16 = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('civ.LongWrapper', this, 1);
    tmp0_serialDesc.cv('value', false);
    this.z1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer).a1f = function (encoder, value) {
    var tmp0_desc = this.z1e_1;
    var tmp1_output = encoder.mn(tmp0_desc);
    tmp1_output.bp(tmp0_desc, 0, value.b1f_1);
    tmp1_output.nn(tmp0_desc);
  };
  protoOf($serializer).gk = function (encoder, value) {
    return this.a1f(encoder, value instanceof LongWrapper ? value : THROW_CCE());
  };
  protoOf($serializer).hk = function (decoder) {
    var tmp0_desc = this.z1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.mn(tmp0_desc);
    if (tmp5_input.co()) {
      tmp4_local0 = tmp5_input.wn(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.do(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.wn(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.nn(tmp0_desc);
    return LongWrapper_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer).fk = function () {
    return this.z1e_1;
  };
  protoOf($serializer).rv = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function LongWrapper_init_$Init$(seen0, value, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance().z1e_1);
    }
    $this.b1f_1 = value;
    return $this;
  }
  function LongWrapper_init_$Create$(seen0, value, serializationConstructorMarker) {
    return LongWrapper_init_$Init$(seen0, value, serializationConstructorMarker, objectCreate(protoOf(LongWrapper)));
  }
  function LongWrapper(value) {
    this.b1f_1 = value;
  }
  protoOf(LongWrapper).c1f = function () {
    return toLong(this.b1f_1);
  };
  protoOf(LongWrapper).toString = function () {
    return this.b1f_1;
  };
  function TestData() {
  }
  var TestData_instance;
  function TestData_getInstance() {
    return TestData_instance;
  }
  function addIf(_this__u8e3s4, condition, value) {
    return condition ? _this__u8e3s4 + value | 0 : _this__u8e3s4;
  }
  function Action() {
  }
  function Move(unitId, destination) {
    this.unitId = unitId;
    this.destination = destination;
  }
  protoOf(Move).d1f = function () {
    return this.unitId;
  };
  protoOf(Move).e1f = function () {
    return this.destination;
  };
  protoOf(Move).sd = function () {
    return this.unitId;
  };
  protoOf(Move).td = function () {
    return this.destination;
  };
  protoOf(Move).f1f = function (unitId, destination) {
    return new Move(unitId, destination);
  };
  protoOf(Move).copy = function (unitId, destination, $super) {
    unitId = unitId === VOID ? this.unitId : unitId;
    destination = destination === VOID ? this.destination : destination;
    return $super === VOID ? this.f1f(unitId, destination) : $super.f1f.call(this, unitId, destination);
  };
  protoOf(Move).toString = function () {
    return 'Move(unitId=' + this.unitId + ', destination=' + this.destination.toString() + ')';
  };
  protoOf(Move).hashCode = function () {
    var result = getStringHashCode(this.unitId);
    result = imul(result, 31) + this.destination.hashCode() | 0;
    return result;
  };
  protoOf(Move).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Move))
      return false;
    var tmp0_other_with_cast = other instanceof Move ? other : THROW_CCE();
    if (!(this.unitId === tmp0_other_with_cast.unitId))
      return false;
    if (!this.destination.equals(tmp0_other_with_cast.destination))
      return false;
    return true;
  };
  function Attack(unitId, targetCoordinates, moveAttackDelay) {
    moveAttackDelay = moveAttackDelay === VOID ? 0 : moveAttackDelay;
    this.unitId = unitId;
    this.targetCoordinates = targetCoordinates;
    this.moveAttackDelay = moveAttackDelay;
  }
  protoOf(Attack).d1f = function () {
    return this.unitId;
  };
  protoOf(Attack).g1f = function () {
    return this.targetCoordinates;
  };
  protoOf(Attack).h1f = function () {
    return this.moveAttackDelay;
  };
  protoOf(Attack).sd = function () {
    return this.unitId;
  };
  protoOf(Attack).td = function () {
    return this.targetCoordinates;
  };
  protoOf(Attack).i1f = function () {
    return this.moveAttackDelay;
  };
  protoOf(Attack).j1f = function (unitId, targetCoordinates, moveAttackDelay) {
    return new Attack(unitId, targetCoordinates, moveAttackDelay);
  };
  protoOf(Attack).copy = function (unitId, targetCoordinates, moveAttackDelay, $super) {
    unitId = unitId === VOID ? this.unitId : unitId;
    targetCoordinates = targetCoordinates === VOID ? this.targetCoordinates : targetCoordinates;
    moveAttackDelay = moveAttackDelay === VOID ? this.moveAttackDelay : moveAttackDelay;
    return $super === VOID ? this.j1f(unitId, targetCoordinates, moveAttackDelay) : $super.j1f.call(this, unitId, targetCoordinates, moveAttackDelay);
  };
  protoOf(Attack).toString = function () {
    return 'Attack(unitId=' + this.unitId + ', targetCoordinates=' + this.targetCoordinates.toString() + ', moveAttackDelay=' + this.moveAttackDelay + ')';
  };
  protoOf(Attack).hashCode = function () {
    var result = getStringHashCode(this.unitId);
    result = imul(result, 31) + this.targetCoordinates.hashCode() | 0;
    result = imul(result, 31) + this.moveAttackDelay | 0;
    return result;
  };
  protoOf(Attack).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Attack))
      return false;
    var tmp0_other_with_cast = other instanceof Attack ? other : THROW_CCE();
    if (!(this.unitId === tmp0_other_with_cast.unitId))
      return false;
    if (!this.targetCoordinates.equals(tmp0_other_with_cast.targetCoordinates))
      return false;
    if (!(this.moveAttackDelay === tmp0_other_with_cast.moveAttackDelay))
      return false;
    return true;
  };
  function Settle(settlersId) {
    this.settlersId = settlersId;
  }
  protoOf(Settle).k1f = function () {
    return this.settlersId;
  };
  protoOf(Settle).sd = function () {
    return this.settlersId;
  };
  protoOf(Settle).l1f = function (settlersId) {
    return new Settle(settlersId);
  };
  protoOf(Settle).copy = function (settlersId, $super) {
    settlersId = settlersId === VOID ? this.settlersId : settlersId;
    return $super === VOID ? this.l1f(settlersId) : $super.l1f.call(this, settlersId);
  };
  protoOf(Settle).toString = function () {
    return 'Settle(settlersId=' + this.settlersId + ')';
  };
  protoOf(Settle).hashCode = function () {
    return getStringHashCode(this.settlersId);
  };
  protoOf(Settle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Settle))
      return false;
    var tmp0_other_with_cast = other instanceof Settle ? other : THROW_CCE();
    if (!(this.settlersId === tmp0_other_with_cast.settlersId))
      return false;
    return true;
  };
  function Build(coordinates, building) {
    this.coordinates = coordinates;
    this.building = building;
  }
  protoOf(Build).m1f = function () {
    return this.coordinates;
  };
  protoOf(Build).n1f = function () {
    return this.building;
  };
  protoOf(Build).sd = function () {
    return this.coordinates;
  };
  protoOf(Build).td = function () {
    return this.building;
  };
  protoOf(Build).o1f = function (coordinates, building) {
    return new Build(coordinates, building);
  };
  protoOf(Build).copy = function (coordinates, building, $super) {
    coordinates = coordinates === VOID ? this.coordinates : coordinates;
    building = building === VOID ? this.building : building;
    return $super === VOID ? this.o1f(coordinates, building) : $super.o1f.call(this, coordinates, building);
  };
  protoOf(Build).toString = function () {
    return 'Build(coordinates=' + this.coordinates.toString() + ', building=' + this.building.toString() + ')';
  };
  protoOf(Build).hashCode = function () {
    var result = this.coordinates.hashCode();
    result = imul(result, 31) + this.building.hashCode() | 0;
    return result;
  };
  protoOf(Build).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Build))
      return false;
    var tmp0_other_with_cast = other instanceof Build ? other : THROW_CCE();
    if (!this.coordinates.equals(tmp0_other_with_cast.coordinates))
      return false;
    if (!this.building.equals(tmp0_other_with_cast.building))
      return false;
    return true;
  };
  function Recruit(coordinates, unitType) {
    this.coordinates = coordinates;
    this.unitType = unitType;
  }
  protoOf(Recruit).m1f = function () {
    return this.coordinates;
  };
  protoOf(Recruit).p1f = function () {
    return this.unitType;
  };
  protoOf(Recruit).sd = function () {
    return this.coordinates;
  };
  protoOf(Recruit).td = function () {
    return this.unitType;
  };
  protoOf(Recruit).q1f = function (coordinates, unitType) {
    return new Recruit(coordinates, unitType);
  };
  protoOf(Recruit).copy = function (coordinates, unitType, $super) {
    coordinates = coordinates === VOID ? this.coordinates : coordinates;
    unitType = unitType === VOID ? this.unitType : unitType;
    return $super === VOID ? this.q1f(coordinates, unitType) : $super.q1f.call(this, coordinates, unitType);
  };
  protoOf(Recruit).toString = function () {
    return 'Recruit(coordinates=' + this.coordinates.toString() + ', unitType=' + this.unitType.toString() + ')';
  };
  protoOf(Recruit).hashCode = function () {
    var result = this.coordinates.hashCode();
    result = imul(result, 31) + this.unitType.hashCode() | 0;
    return result;
  };
  protoOf(Recruit).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Recruit))
      return false;
    var tmp0_other_with_cast = other instanceof Recruit ? other : THROW_CCE();
    if (!this.coordinates.equals(tmp0_other_with_cast.coordinates))
      return false;
    if (!this.unitType.equals(tmp0_other_with_cast.unitType))
      return false;
    return true;
  };
  function Conquer(coordinates) {
    this.coordinates = coordinates;
  }
  protoOf(Conquer).m1f = function () {
    return this.coordinates;
  };
  protoOf(Conquer).sd = function () {
    return this.coordinates;
  };
  protoOf(Conquer).r1f = function (coordinates) {
    return new Conquer(coordinates);
  };
  protoOf(Conquer).copy = function (coordinates, $super) {
    coordinates = coordinates === VOID ? this.coordinates : coordinates;
    return $super === VOID ? this.r1f(coordinates) : $super.r1f.call(this, coordinates);
  };
  protoOf(Conquer).toString = function () {
    return 'Conquer(coordinates=' + this.coordinates.toString() + ')';
  };
  protoOf(Conquer).hashCode = function () {
    return this.coordinates.hashCode();
  };
  protoOf(Conquer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Conquer))
      return false;
    var tmp0_other_with_cast = other instanceof Conquer ? other : THROW_CCE();
    if (!this.coordinates.equals(tmp0_other_with_cast.coordinates))
      return false;
    return true;
  };
  function Disband(unitId) {
    this.unitId = unitId;
  }
  protoOf(Disband).d1f = function () {
    return this.unitId;
  };
  protoOf(Disband).sd = function () {
    return this.unitId;
  };
  protoOf(Disband).l1f = function (unitId) {
    return new Disband(unitId);
  };
  protoOf(Disband).copy = function (unitId, $super) {
    unitId = unitId === VOID ? this.unitId : unitId;
    return $super === VOID ? this.l1f(unitId) : $super.l1f.call(this, unitId);
  };
  protoOf(Disband).toString = function () {
    return 'Disband(unitId=' + this.unitId + ')';
  };
  protoOf(Disband).hashCode = function () {
    return getStringHashCode(this.unitId);
  };
  protoOf(Disband).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Disband))
      return false;
    var tmp0_other_with_cast = other instanceof Disband ? other : THROW_CCE();
    if (!(this.unitId === tmp0_other_with_cast.unitId))
      return false;
    return true;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).success = function () {
    return new ActionResult(true, null, null);
  };
  protoOf(Companion_0).s1f = function (errorAlert, exception) {
    return new ActionResult(false, errorAlert, IllegalArgumentException_init_$Create$(exception));
  };
  protoOf(Companion_0).fail = function (errorAlert, exception, $super) {
    errorAlert = errorAlert === VOID ? null : errorAlert;
    exception = exception === VOID ? null : exception;
    return $super === VOID ? this.s1f(errorAlert, exception) : $super.s1f.call(this, errorAlert, exception);
  };
  protoOf(Companion_0).exception = function (exception) {
    return new ActionResult(false, null, IllegalArgumentException_init_$Create$(exception));
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function ActionResult(isSuccess, errorAlert, exception) {
    this.isSuccess = isSuccess;
    this.errorAlert = errorAlert;
    this.exception = exception;
  }
  protoOf(ActionResult).t1f = function () {
    return this.isSuccess;
  };
  protoOf(ActionResult).u1f = function () {
    return this.errorAlert;
  };
  protoOf(ActionResult).v1f = function () {
    return this.exception;
  };
  protoOf(ActionResult).sd = function () {
    return this.isSuccess;
  };
  protoOf(ActionResult).td = function () {
    return this.errorAlert;
  };
  protoOf(ActionResult).i1f = function () {
    return this.exception;
  };
  protoOf(ActionResult).w1f = function (isSuccess, errorAlert, exception) {
    return new ActionResult(isSuccess, errorAlert, exception);
  };
  protoOf(ActionResult).copy = function (isSuccess, errorAlert, exception, $super) {
    isSuccess = isSuccess === VOID ? this.isSuccess : isSuccess;
    errorAlert = errorAlert === VOID ? this.errorAlert : errorAlert;
    exception = exception === VOID ? this.exception : exception;
    return $super === VOID ? this.w1f(isSuccess, errorAlert, exception) : $super.w1f.call(this, isSuccess, errorAlert, exception);
  };
  protoOf(ActionResult).toString = function () {
    return 'ActionResult(isSuccess=' + this.isSuccess + ', errorAlert=' + this.errorAlert + ', exception=' + toString(this.exception) + ')';
  };
  protoOf(ActionResult).hashCode = function () {
    var result = getBooleanHashCode(this.isSuccess);
    result = imul(result, 31) + (this.errorAlert == null ? 0 : getStringHashCode(this.errorAlert)) | 0;
    result = imul(result, 31) + (this.exception == null ? 0 : hashCode(this.exception)) | 0;
    return result;
  };
  protoOf(ActionResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ActionResult))
      return false;
    var tmp0_other_with_cast = other instanceof ActionResult ? other : THROW_CCE();
    if (!(this.isSuccess === tmp0_other_with_cast.isSuccess))
      return false;
    if (!(this.errorAlert == tmp0_other_with_cast.errorAlert))
      return false;
    if (!equals(this.exception, tmp0_other_with_cast.exception))
      return false;
    return true;
  };
  function Ai(gameApi, playerId) {
    this.x1f_1 = gameApi;
    this.y1f_1 = playerId;
    var tmp = this;
    // Inline function 'kotlin.time.Companion.seconds' call
    Companion_getInstance();
    tmp.z1f_1 = toDuration(0, DurationUnit_SECONDS_getInstance());
  }
  protoOf(Ai).a1g = function (action) {
    var result = this.x1f_1.execute(this.y1f_1, action);
    result.isSuccess;
    return result;
  };
  protoOf(Ai).b1g = function (cost) {
    return this.x1f_1.stocksFor(this.y1f_1).canSubstract(cost);
  };
  protoOf(Ai).c1g = function (coordinates, building) {
    var tmp;
    if (this.b1g(building.cost)) {
      tmp = this.a1g(new Build(coordinates, building));
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(Ai).f1g = function (coordinates, unit) {
    var tmp;
    if (this.b1g(unit.cost)) {
      tmp = this.a1g(new Recruit(coordinates, unit));
    } else {
      tmp = null;
    }
    return tmp;
  };
  var AiType_IDLE_instance;
  var AiType_OTP_WARRIOR_instance;
  var AiType_OTP_ARCHER_instance;
  var AiType_OTP_SCOUT_instance;
  function values() {
    return [AiType_IDLE_getInstance(), AiType_OTP_WARRIOR_getInstance(), AiType_OTP_ARCHER_getInstance(), AiType_OTP_SCOUT_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'IDLE':
        return AiType_IDLE_getInstance();
      case 'OTP_WARRIOR':
        return AiType_OTP_WARRIOR_getInstance();
      case 'OTP_ARCHER':
        return AiType_OTP_ARCHER_getInstance();
      case 'OTP_SCOUT':
        return AiType_OTP_SCOUT_getInstance();
      default:
        AiType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var AiType_entriesInitialized;
  function AiType_initEntries() {
    if (AiType_entriesInitialized)
      return Unit_instance;
    AiType_entriesInitialized = true;
    AiType_IDLE_instance = new AiType('IDLE', 0, 'idle');
    AiType_OTP_WARRIOR_instance = new AiType('OTP_WARRIOR', 1, 'otp_warrior');
    AiType_OTP_ARCHER_instance = new AiType('OTP_ARCHER', 2, 'otp_archer');
    AiType_OTP_SCOUT_instance = new AiType('OTP_SCOUT', 3, 'otp_scout');
  }
  function AiType(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value = value;
  }
  protoOf(AiType).f2 = function () {
    return this.value;
  };
  function create(_this__u8e3s4, gameApi, playerId) {
    var tmp;
    switch (_this__u8e3s4.o2_1) {
      case 0:
        tmp = new IdleAi(gameApi, playerId);
        break;
      case 1:
        tmp = new WarriorAi(gameApi, playerId);
        break;
      case 2:
        tmp = new ArcherAi(gameApi, playerId);
        break;
      case 3:
        tmp = new ScoutAi(gameApi, playerId);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AiType_IDLE_getInstance() {
    AiType_initEntries();
    return AiType_IDLE_instance;
  }
  function AiType_OTP_WARRIOR_getInstance() {
    AiType_initEntries();
    return AiType_OTP_WARRIOR_instance;
  }
  function AiType_OTP_ARCHER_getInstance() {
    AiType_initEntries();
    return AiType_OTP_ARCHER_instance;
  }
  function AiType_OTP_SCOUT_getInstance() {
    AiType_initEntries();
    return AiType_OTP_SCOUT_instance;
  }
  function IdleAi(gameApi, playerId) {
    Ai.call(this, gameApi, playerId);
  }
  protoOf(IdleAi).i1g = function () {
    this.x1f_1.endTurn(this.y1f_1);
  };
  function shouldFocusOnArmy($this) {
    var ownUnits = 0;
    var enemyUnits = 0;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.x1f_1.tilesForPlayer($this.y1f_1).j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (element.unit != null)
        if (!element.unit.unitType.equals(UnitType_SETTLERS_getInstance()))
          if (element.unit.playerId === $this.y1f_1) {
            ownUnits = ownUnits + 1 | 0;
          } else {
            enemyUnits = enemyUnits + 1 | 0;
          }
    }
    return enemyUnits > ownUnits || ownUnits === 0;
  }
  function isUnitLimitReached($this) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this.w1g();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (element.unitType.equals($this.r1g_1)) {
        destination.e(element);
      }
    }
    return destination.m() >= $this.t1g_1;
  }
  function isCityLimitReached($this) {
    var myCities = $this.x1f_1.citiesFor($this.y1f_1);
    var myUnits = $this.x1f_1.unitsFor($this.y1f_1);
    var tmp = myCities.m();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var tmp_0;
      if (isInterface(myUnits, Collection)) {
        tmp_0 = myUnits.p();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var _iterator__ex2g4s = myUnits.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        if (element.unitType.equals(UnitType_SETTLERS_getInstance())) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    var currentCityCount = tmp + tmp$ret$0 | 0;
    return currentCityCount >= $this.s1g_1;
  }
  function _get_myCities__a8lhzq($this) {
    return $this.x1f_1.citiesFor($this.y1f_1);
  }
  function findPossibleTargets($this, tiles, targets) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = targets.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'kotlin.collections.find' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = tiles.j();
        while (_iterator__ex2g4s_0.k()) {
          var element_0 = _iterator__ex2g4s_0.l();
          if (element_0.coordinates.equals(element)) {
            tmp$ret$1 = element_0;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      var tmp0_safe_receiver = tmp$ret$1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tile;
      if (!((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.movementCost()) === 100000)) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.takeIf' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!destination.p()) {
      tmp = destination;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver_0 = tmp;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver_0;
    }
    println('Valid targets not found for ' + joinToString(targets));
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_1 = targets.j();
    while (_iterator__ex2g4s_1.k()) {
      var element_1 = _iterator__ex2g4s_1.l();
      var list = neighbors(element_1);
      addAll(destination_0, list);
    }
    return findPossibleTargets($this, tiles, distinct(destination_0));
  }
  function findPreferredPath($this, tiles, start, target) {
    var possibleTargets = findPossibleTargets($this, tiles, listOf(target));
    println('Dijkstring for ' + joinToString(possibleTargets));
    return dijkstra(start, possibleTargets, OneTrickPonyAi$findPreferredPath$lambda(tiles));
  }
  function processQueueItem($this, tiles, item) {
    var tmp = asSequence(tiles);
    var tmp_0 = filter(tmp, OneTrickPonyAi$processQueueItem$lambda);
    var tmp_1 = filter(tmp_0, OneTrickPonyAi$processQueueItem$lambda_0($this));
    var tmp_2 = filter(tmp_1, OneTrickPonyAi$processQueueItem$lambda_1($this));
    var tmp_3 = map(tmp_2, OneTrickPonyAi$processQueueItem$lambda_2);
    // Inline function 'kotlin.sequences.sortedByDescending' call
    var this_0 = filter(tmp_3, OneTrickPonyAi$processQueueItem$lambda_3(item));
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_4 = OneTrickPonyAi$processQueueItem$lambda_4(item);
    var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp_4);
    // Inline function 'kotlin.sequences.forEach' call
    var _iterator__ex2g4s = sortedWith(this_0, tmp$ret$0).j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      $l$block: {
        if (!item.y1g(element)) {
          break $l$block;
        }
        var tmp0_safe_receiver = $this.c1g(element.coords, item.a1h_1);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'civ.onSuccess' call
          if (tmp0_safe_receiver.isSuccess) {
            item.b1h();
          }
        }
      }
    }
  }
  function processQueueItem_0($this, tiles, cities, item) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(cities, 10));
    var _iterator__ex2g4s = cities.j();
    while (_iterator__ex2g4s.k()) {
      var item_0 = _iterator__ex2g4s.l();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.first' call
        var _iterator__ex2g4s_0 = tiles.j();
        while (_iterator__ex2g4s_0.k()) {
          var element = _iterator__ex2g4s_0.l();
          if (item_0.coordinates.equals(element.coordinates)) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var tmp$ret$2 = require_0(tmp$ret$1.tile);
      destination.e(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.sortedByDescending' call
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = OneTrickPonyAi$processQueueItem$lambda_5(item);
    var tmp$ret$5 = new sam$kotlin_Comparator$0_0(tmp);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = sortedWith_0(destination, tmp$ret$5).j();
    while (_iterator__ex2g4s_1.k()) {
      var element_0 = _iterator__ex2g4s_1.l();
      $l$block_0: {
        if (element_0.isBusy || !item.d1h_1.buildingRequirement(element_0.buildings) || !item.y1g(element_0)) {
          break $l$block_0;
        }
        var tmp0_safe_receiver = $this.f1g(element_0.coords, item.d1h_1);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'civ.onSuccess' call
          if (tmp0_safe_receiver.isSuccess) {
            item.b1h();
          }
        }
      }
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.e1h_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).bc = function (a, b) {
    return this.e1h_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.bc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).n3 = function () {
    return this.e1h_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.n3(), other.n3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.n3());
  };
  function sam$kotlin_Comparator$0_0(function_0) {
    this.f1h_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).bc = function (a, b) {
    return this.f1h_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.bc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).n3 = function () {
    return this.f1h_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.n3(), other.n3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
    return hashCode(this.n3());
  };
  function takeTurn$closestEnemyCity(this$0, tiles, coordinates) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tiles.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (!(element.city == null) && !(element.city.playerId === this$0.y1f_1) || (!(element.cityRange == null) && !(element.cityRange.playerId === this$0.y1f_1))) {
        destination.e(element);
      }
    }
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.minByOrNull' call
      var iterator = destination.j();
      if (!iterator.k()) {
        tmp$ret$3 = null;
        break $l$block_0;
      }
      var minElem = iterator.l();
      if (!iterator.k()) {
        tmp$ret$3 = minElem;
        break $l$block_0;
      }
      var it = minElem;
      var distance = distanceTo(it.coordinates, coordinates);
      var minValue = distance + (it.city == null ? 100000 : 0) | 0;
      do {
        var e = iterator.l();
        var distance_0 = distanceTo(e.coordinates, coordinates);
        var v = distance_0 + (e.city == null ? 100000 : 0) | 0;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.k());
      tmp$ret$3 = minElem;
    }
    return tmp$ret$3;
  }
  function takeTurn$closestEnemy(this$0, tiles, coordinates) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = tiles.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      var tmp0_safe_receiver = element.unit;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.takeUnless' call
        var tmp_0;
        if (!(tmp0_safe_receiver.playerId === this$0.y1f_1)) {
          tmp_0 = tmp0_safe_receiver;
        } else {
          tmp_0 = null;
        }
        tmp = tmp_0;
      }
      var tmp0_safe_receiver_0 = tmp;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.e(tmp0_safe_receiver_0);
      }
    }
    var tmp$ret$9;
    $l$block_0: {
      // Inline function 'kotlin.collections.minByOrNull' call
      var iterator = destination.j();
      if (!iterator.k()) {
        tmp$ret$9 = null;
        break $l$block_0;
      }
      var minElem = iterator.l();
      if (!iterator.k()) {
        tmp$ret$9 = minElem;
        break $l$block_0;
      }
      var it = minElem;
      var minValue = distanceTo(it.coordinates, coordinates);
      do {
        var e = iterator.l();
        var v = distanceTo(e.coordinates, coordinates);
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.k());
      tmp$ret$9 = minElem;
    }
    return tmp$ret$9;
  }
  function takeTurn$closestUndiscovered(tiles, coordinates) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tiles.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (element.tile == null) {
        destination.e(element);
      }
    }
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'civ.allMinBy' call
      var iterator = destination.j();
      if (!iterator.k()) {
        tmp$ret$3 = emptyList();
        break $l$block_0;
      }
      var minElements = mutableListOf([iterator.l()]);
      if (!iterator.k()) {
        tmp$ret$3 = minElements;
        break $l$block_0;
      }
      var it = single(minElements);
      var minValue = distanceTo(it.coordinates, coordinates);
      do {
        var item = iterator.l();
        var value = distanceTo(item.coordinates, coordinates);
        if (equals(minValue, value)) {
          minElements.e(item);
        } else if (compareTo(minValue, value) > 0) {
          minElements.c2();
          minElements.e(item);
          minValue = value;
        }
      }
       while (iterator.k());
      tmp$ret$3 = minElements;
    }
    // Inline function 'kotlin.collections.randomOrNull' call
    var this_0 = tmp$ret$3;
    return randomOrNull(this_0, Default_getInstance());
  }
  function OneTrickPonyAi$priorityQueue$lambda$lambda(this$0) {
    return function (it) {
      var tmp;
      if (isUnitLimitReached(this$0)) {
        return false;
      }
      var tmp_0;
      if (shouldFocusOnArmy(this$0)) {
        return true;
      }
      var tmp_1;
      if (!isCityLimitReached(this$0)) {
        return false;
      }
      return true;
    };
  }
  function OneTrickPonyAi$priorityQueue$lambda$lambda_0(this$0) {
    return function (it) {
      return !isCityLimitReached(this$0);
    };
  }
  function OneTrickPonyAi$priorityQueue$lambda(this$0) {
    return function ($this$build) {
      $this$build.h1h(Building_SAWMILL_getInstance());
      $this$build.h1h(Building_LUMBERCAMP_getInstance());
      $this$build.h1h(Building_FISHING_SHIP_getInstance());
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = this$0.r1g_1.requiredBuildings.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        $this$build.h1h(element);
      }
      $this$build.h1h(Building_WATERMILL_getInstance());
      $this$build.h1h(Building_RIVERLAND_FARM_getInstance());
      $this$build.h1h(Building_BUTCHERY_getInstance());
      $this$build.h1h(Building_HUNTERS_CAMP_getInstance());
      $this$build.h1h(Building_WINDMILL_getInstance());
      $this$build.h1h(Building_FARM_getInstance());
      $this$build.h1h(Building_FISHING_HUT_getInstance());
      $this$build.h1h(Building_PORT_getInstance());
      $this$build.i1h(this$0.r1g_1, new Predicate(OneTrickPonyAi$priorityQueue$lambda$lambda(this$0)));
      var tmp = UnitType_SETTLERS_getInstance();
      $this$build.i1h(tmp, new Predicate(OneTrickPonyAi$priorityQueue$lambda$lambda_0(this$0)));
      return Unit_instance;
    };
  }
  function OneTrickPonyAi$takeTurn$lambda($shouldNotMove, $unit) {
    return function (it) {
      return !($shouldNotMove && !it.f2().equals($unit.coordinates));
    };
  }
  function OneTrickPonyAi$takeTurn$lambda_0($tiles) {
    return function (target) {
      var tmp0 = $tiles;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.first' call
        var _iterator__ex2g4s = tmp0.j();
        while (_iterator__ex2g4s.k()) {
          var element = _iterator__ex2g4s.l();
          if (element.coordinates.equals(target.e2())) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      return tmp$ret$1.unit;
    };
  }
  function OneTrickPonyAi$findPreferredPath$lambda($tiles) {
    return function ($this$dijkstra) {
      // Inline function 'kotlin.collections.find' call
      var tmp0 = $tiles;
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.j();
        while (_iterator__ex2g4s.k()) {
          var element = _iterator__ex2g4s.l();
          if (element.coordinates.equals($this$dijkstra)) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      var tmp0_safe_receiver = tmp$ret$1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tile;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.movementCost();
      return tmp2_elvis_lhs == null ? 10 : tmp2_elvis_lhs;
    };
  }
  function OneTrickPonyAi$processQueueItem$lambda(it) {
    return !(it.tile == null);
  }
  function OneTrickPonyAi$processQueueItem$lambda_0(this$0) {
    return function (it) {
      var tmp0_safe_receiver = it.cityRange;
      return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.playerId) === this$0.y1f_1;
    };
  }
  function OneTrickPonyAi$processQueueItem$lambda_1(this$0) {
    return function (it) {
      return this$0.x1f_1.canBuild(it.coordinates, this$0.y1f_1);
    };
  }
  function OneTrickPonyAi$processQueueItem$lambda_2(it) {
    return require_0(it.tile);
  }
  function OneTrickPonyAi$processQueueItem$lambda_3($item) {
    return function (it) {
      return $item.a1h_1.tileRequirement(it);
    };
  }
  function OneTrickPonyAi$processQueueItem$lambda_4($item) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      var tmp = $item.j1h(b);
      var tmp$ret$1 = $item.j1h(a);
      return compareValues(tmp, tmp$ret$1);
    };
  }
  function OneTrickPonyAi$processQueueItem$lambda_5($item) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      var tmp = $item.j1h(b);
      var tmp$ret$1 = $item.j1h(a);
      return compareValues(tmp, tmp$ret$1);
    };
  }
  function OneTrickPonyAi(gameApi, playerId, otpUnitType) {
    Ai.call(this, gameApi, playerId);
    this.r1g_1 = otpUnitType;
    this.s1g_1 = 3;
    this.t1g_1 = 10;
    var tmp = this;
    var tmp_0 = Companion_instance_2;
    tmp.u1g_1 = tmp_0.k1h(OneTrickPonyAi$priorityQueue$lambda(this));
    this.v1g_1 = true;
  }
  protoOf(OneTrickPonyAi).w1g = function () {
    return this.x1f_1.unitsFor(this.y1f_1);
  };
  protoOf(OneTrickPonyAi).i1g = function () {
    if (!this.v1g_1)
      return Unit_instance;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.x1f_1.tilesForPlayer(this.y1f_1);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (!(element.city == null) || !(element.cityRange == null)) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.partition' call
    var first = ArrayList_init_$Create$();
    var second = ArrayList_init_$Create$();
    var _iterator__ex2g4s_0 = destination.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      if (!(element_0.city == null)) {
        first.e(element_0);
      } else {
        second.e(element_0);
      }
    }
    var tmp$ret$4 = new Pair(first, second);
    // Inline function 'kotlin.collections.map' call
    var this_0 = toList(tmp$ret$4);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_1 = this_0.j();
    while (_iterator__ex2g4s_1.k()) {
      var item = _iterator__ex2g4s_1.l();
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(item, 10));
      var _iterator__ex2g4s_2 = item.j();
      while (_iterator__ex2g4s_2.k()) {
        var item_0 = _iterator__ex2g4s_2.l();
        var tmp$ret$5 = item_0.coordinates;
        destination_1.e(tmp$ret$5);
      }
      destination_0.e(destination_1);
    }
    // Inline function 'kotlin.collections.component1' call
    var cityTiles = destination_0.o(0);
    // Inline function 'kotlin.collections.component2' call
    var cityRangeTiles = destination_0.o(1);
    var cityAndRangeTiles = toSet(plus(cityTiles, cityRangeTiles));
    // Inline function 'kotlin.collections.filter' call
    var tmp0_0 = this.w1g();
    // Inline function 'kotlin.collections.filterTo' call
    var destination_2 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_3 = tmp0_0.j();
    while (_iterator__ex2g4s_3.k()) {
      var element_1 = _iterator__ex2g4s_3.l();
      if (element_1.unitType.equals(UnitType_SETTLERS_getInstance())) {
        destination_2.e(element_1);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_4 = destination_2.j();
    while (_iterator__ex2g4s_4.k()) {
      var element_2 = _iterator__ex2g4s_4.l();
      $l$block_9: {
        // Inline function 'civ.onFailure' call
        if (!this.a1g(new Settle(element_2.unitId)).isSuccess) {
          $l$block_7: {
            var tiles = this.x1f_1.tilesForPlayer(this.y1f_1);
            var tmp$ret$16;
            $l$block_0: {
              // Inline function 'civ.allMaxBy' call
              var iterator = tiles.j();
              if (!iterator.k()) {
                tmp$ret$16 = emptyList();
                break $l$block_0;
              }
              var maxElements = mutableListOf([iterator.l()]);
              if (!iterator.k()) {
                tmp$ret$16 = maxElements;
                break $l$block_0;
              }
              var tile = single(maxElements);
              var tmp;
              var tmp_0;
              if (!(tile.tile == null)) {
                var tmp_1 = tile.tile;
                tmp_0 = !(tmp_1 instanceof Grass);
              } else {
                tmp_0 = false;
              }
              if (tmp_0) {
                tmp = -1;
              } else {
                var tmp0_1 = getAllInRange(tile.coordinates, 3);
                var tmp$ret$17;
                $l$block_2: {
                  // Inline function 'kotlin.collections.any' call
                  var tmp_2;
                  if (isInterface(tmp0_1, Collection)) {
                    tmp_2 = tmp0_1.p();
                  } else {
                    tmp_2 = false;
                  }
                  if (tmp_2) {
                    tmp$ret$17 = false;
                    break $l$block_2;
                  }
                  var _iterator__ex2g4s_5 = tmp0_1.j();
                  while (_iterator__ex2g4s_5.k()) {
                    var element_3 = _iterator__ex2g4s_5.l();
                    if (cityAndRangeTiles.r(element_3)) {
                      tmp$ret$17 = true;
                      break $l$block_2;
                    }
                  }
                  tmp$ret$17 = false;
                }
                if (tmp$ret$17) {
                  tmp = -1;
                } else {
                  // Inline function 'kotlin.collections.sumOf' call
                  var sum = 0;
                  var _iterator__ex2g4s_6 = cityTiles.j();
                  while (_iterator__ex2g4s_6.k()) {
                    var element_4 = _iterator__ex2g4s_6.l();
                    var tmp_3 = sum;
                    sum = tmp_3 + distanceTo(element_4, tile.coordinates) | 0;
                  }
                  tmp = sum;
                }
              }
              var maxValue = tmp;
              do {
                var item_1 = iterator.l();
                var tmp_4;
                var tmp_5;
                if (!(item_1.tile == null)) {
                  var tmp_6 = item_1.tile;
                  tmp_5 = !(tmp_6 instanceof Grass);
                } else {
                  tmp_5 = false;
                }
                if (tmp_5) {
                  tmp_4 = -1;
                } else {
                  var tmp0_2 = getAllInRange(item_1.coordinates, 3);
                  var tmp$ret$22;
                  $l$block_4: {
                    // Inline function 'kotlin.collections.any' call
                    var tmp_7;
                    if (isInterface(tmp0_2, Collection)) {
                      tmp_7 = tmp0_2.p();
                    } else {
                      tmp_7 = false;
                    }
                    if (tmp_7) {
                      tmp$ret$22 = false;
                      break $l$block_4;
                    }
                    var _iterator__ex2g4s_7 = tmp0_2.j();
                    while (_iterator__ex2g4s_7.k()) {
                      var element_5 = _iterator__ex2g4s_7.l();
                      if (cityAndRangeTiles.r(element_5)) {
                        tmp$ret$22 = true;
                        break $l$block_4;
                      }
                    }
                    tmp$ret$22 = false;
                  }
                  if (tmp$ret$22) {
                    tmp_4 = -1;
                  } else {
                    // Inline function 'kotlin.collections.sumOf' call
                    var sum_0 = 0;
                    var _iterator__ex2g4s_8 = cityTiles.j();
                    while (_iterator__ex2g4s_8.k()) {
                      var element_6 = _iterator__ex2g4s_8.l();
                      var tmp_8 = sum_0;
                      sum_0 = tmp_8 + distanceTo(element_6, item_1.coordinates) | 0;
                    }
                    tmp_4 = sum_0;
                  }
                }
                var value = tmp_4;
                if (equals(maxValue, value)) {
                  maxElements.e(item_1);
                } else if (compareTo(value, maxValue) > 0) {
                  maxElements.c2();
                  maxElements.e(item_1);
                  maxValue = value;
                }
              }
               while (iterator.k());
              tmp$ret$16 = maxElements;
            }
            var tmp0_3 = tmp$ret$16;
            var tmp$ret$27;
            $l$block_6: {
              // Inline function 'civ.allMinBy' call
              var iterator_0 = tmp0_3.j();
              if (!iterator_0.k()) {
                tmp$ret$27 = emptyList();
                break $l$block_6;
              }
              var minElements = mutableListOf([iterator_0.l()]);
              if (!iterator_0.k()) {
                tmp$ret$27 = minElements;
                break $l$block_6;
              }
              var it = single(minElements);
              var minValue = distanceTo(element_2.coordinates, it.coordinates);
              do {
                var item_2 = iterator_0.l();
                var value_0 = distanceTo(element_2.coordinates, item_2.coordinates);
                if (equals(minValue, value_0)) {
                  minElements.e(item_2);
                } else if (compareTo(minValue, value_0) > 0) {
                  minElements.c2();
                  minElements.e(item_2);
                  minValue = value_0;
                }
              }
               while (iterator_0.k());
              tmp$ret$27 = minElements;
            }
            // Inline function 'kotlin.collections.randomOrNull' call
            var this_1 = tmp$ret$27;
            var tmp0_elvis_lhs = randomOrNull(this_1, Default_getInstance());
            var tmp_9;
            if (tmp0_elvis_lhs == null) {
              break $l$block_7;
            } else {
              tmp_9 = tmp0_elvis_lhs;
            }
            var target = tmp_9;
            // Inline function 'kotlin.runCatching' call
            var tmp_10;
            try {
              // Inline function 'kotlin.Companion.success' call
              var value_1 = findPreferredPath(this, tiles, element_2.coordinates, target.coordinates);
              tmp_10 = _Result___init__impl__xyqfz8(value_1);
            } catch ($p) {
              var tmp_11;
              if ($p instanceof Error) {
                var e = $p;
                // Inline function 'kotlin.Companion.failure' call
                tmp_11 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_10 = tmp_11;
            }
            // Inline function 'kotlin.onFailure' call
            var this_2 = tmp_10;
            if (Result__exceptionOrNull_impl_p6xea9(this_2) == null)
              null;
            else {
              // Inline function 'kotlin.let' call
              println('Pathing timed out after 1s');
              println('from ' + element_2.coordinates.toString() + ' to: ' + target.toString());
              println('Unit: ' + element_2.toString());
              println('Target tile' + target.toString());
              break $l$block_9;
            }
            // Inline function 'kotlin.Result.getOrNull' call
            var tmp_12;
            if (_Result___get_isFailure__impl__jpiriv(this_2)) {
              tmp_12 = null;
            } else {
              var tmp_13 = _Result___get_value__impl__bjfvqg(this_2);
              tmp_12 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
            }
            var preferredPath = tmp_12;
            // Inline function 'kotlin.collections.isNullOrEmpty' call
            if (preferredPath == null || preferredPath.p()) {
              println('Preferred path is null or empty');
              this.v1g_1 = false;
              break $l$block_9;
            }
            var indexedPath = withIndex(preferredPath);
            var actions = this.x1f_1.actionsForUnit(this.y1f_1, element_2.unitId);
            var tmp0_4 = actions.moveTargets;
            var tmp$ret$42;
            $l$block_11: {
              // Inline function 'kotlin.collections.maxByOrNull' call
              var iterator_1 = tmp0_4.j();
              if (!iterator_1.k()) {
                tmp$ret$42 = null;
                break $l$block_11;
              }
              var maxElem = iterator_1.l();
              if (!iterator_1.k()) {
                tmp$ret$42 = maxElem;
                break $l$block_11;
              }
              var moveTarget = maxElem;
              // Inline function 'kotlin.collections.find' call
              var tmp$ret$44;
              $l$block_12: {
                // Inline function 'kotlin.collections.firstOrNull' call
                var _iterator__ex2g4s_9 = indexedPath.j();
                while (_iterator__ex2g4s_9.k()) {
                  var element_7 = _iterator__ex2g4s_9.l();
                  if (element_7.hd_1.equals(moveTarget)) {
                    tmp$ret$44 = element_7;
                    break $l$block_12;
                  }
                }
                tmp$ret$44 = null;
              }
              var tmp0_safe_receiver = tmp$ret$44;
              var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gd_1;
              var maxValue_0 = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
              do {
                var e_0 = iterator_1.l();
                // Inline function 'kotlin.collections.find' call
                var tmp$ret$48;
                $l$block_13: {
                  // Inline function 'kotlin.collections.firstOrNull' call
                  var _iterator__ex2g4s_10 = indexedPath.j();
                  while (_iterator__ex2g4s_10.k()) {
                    var element_8 = _iterator__ex2g4s_10.l();
                    if (element_8.hd_1.equals(e_0)) {
                      tmp$ret$48 = element_8;
                      break $l$block_13;
                    }
                  }
                  tmp$ret$48 = null;
                }
                var tmp0_safe_receiver_0 = tmp$ret$48;
                var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.gd_1;
                var v = tmp1_elvis_lhs_0 == null ? -1 : tmp1_elvis_lhs_0;
                if (compareTo(maxValue_0, v) < 0) {
                  maxElem = e_0;
                  maxValue_0 = v;
                }
              }
               while (iterator_1.k());
              tmp$ret$42 = maxElem;
            }
            var tmp1_safe_receiver = tmp$ret$42;
            if (tmp1_safe_receiver == null)
              null;
            else {
              // Inline function 'kotlin.let' call
              this.a1g(new Move(element_2.unitId, tmp1_safe_receiver));
              this.a1g(new Settle(element_2.unitId));
            }
          }
        }
      }
    }
    // Inline function 'kotlin.collections.filterNot' call
    var tmp0_5 = this.w1g();
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination_3 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_11 = tmp0_5.j();
    while (_iterator__ex2g4s_11.k()) {
      var element_9 = _iterator__ex2g4s_11.l();
      if (!element_9.unitType.equals(UnitType_SETTLERS_getInstance())) {
        destination_3.e(element_9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_12 = destination_3.j();
    while (_iterator__ex2g4s_12.k()) {
      var element_10 = _iterator__ex2g4s_12.l();
      $l$block_21: {
        var tmp_14 = element_10.conquerState;
        var tmp0_safe_receiver_1 = tmp_14 instanceof Occupying ? tmp_14 : null;
        if ((tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.canConquer) === true) {
          this.a1g(new Conquer(element_10.coordinates));
        }
        var tmp_15;
        var tmp_16 = element_10.conquerState;
        if (tmp_16 instanceof Occupying) {
          tmp_15 = element_10.conquerState.turnsLeft > 0;
        } else {
          tmp_15 = false;
        }
        var shouldNotMove = tmp_15;
        var actions_0 = this.x1f_1.actionsForUnit(this.y1f_1, element_10.unitId);
        var tiles_0 = this.x1f_1.tilesForPlayer(this.y1f_1);
        var tmp_17 = asSequence_0(actions_0.attackTargets);
        var tmp_18 = filter(tmp_17, OneTrickPonyAi$takeTurn$lambda(shouldNotMove, element_10));
        var tmp0_6 = map(tmp_18, OneTrickPonyAi$takeTurn$lambda_0(tiles_0));
        var tmp$ret$58;
        $l$block_15: {
          // Inline function 'kotlin.sequences.minByOrNull' call
          var iterator_2 = tmp0_6.j();
          if (!iterator_2.k()) {
            tmp$ret$58 = null;
            break $l$block_15;
          }
          var minElem = iterator_2.l();
          if (!iterator_2.k()) {
            tmp$ret$58 = minElem;
            break $l$block_15;
          }
          var it_0 = minElem;
          var tmp_19;
          var tmp_20 = it_0 == null ? null : it_0.conquerState;
          if (tmp_20 instanceof Occupying) {
            tmp_19 = -1;
          } else {
            var tmp2_elvis_lhs = it_0 == null ? null : it_0.hp;
            tmp_19 = tmp2_elvis_lhs == null ? 2147483647 : tmp2_elvis_lhs;
          }
          var minValue_0 = tmp_19;
          do {
            var e_1 = iterator_2.l();
            var tmp_21;
            var tmp_22 = e_1 == null ? null : e_1.conquerState;
            if (tmp_22 instanceof Occupying) {
              tmp_21 = -1;
            } else {
              var tmp2_elvis_lhs_0 = e_1 == null ? null : e_1.hp;
              tmp_21 = tmp2_elvis_lhs_0 == null ? 2147483647 : tmp2_elvis_lhs_0;
            }
            var v_0 = tmp_21;
            if (compareTo(minValue_0, v_0) > 0) {
              minElem = e_1;
              minValue_0 = v_0;
            }
          }
           while (iterator_2.k());
          tmp$ret$58 = minElem;
        }
        var attackTarget = tmp$ret$58;
        if (element_10.unitType.range > 1 && !(attackTarget == null)) {
          if (distanceTo(attackTarget.coordinates, element_10.coordinates) === 1) {
            var moveTargets = minus(actions_0.moveTargets, toSet(neighbors(attackTarget.coordinates)));
            // Inline function 'kotlin.collections.randomOrNull' call
            var tmp1_safe_receiver_0 = randomOrNull(moveTargets, Default_getInstance());
            if (tmp1_safe_receiver_0 == null)
              null;
            else {
              // Inline function 'kotlin.let' call
              this.a1g(new Move(element_10.unitId, tmp1_safe_receiver_0));
              this.a1g(new Attack(element_10.unitId, attackTarget.coordinates));
            }
          } else {
            this.a1g(new Attack(element_10.unitId, attackTarget.coordinates));
          }
          break $l$block_21;
        } else if (!(attackTarget == null)) {
          this.a1g(new Attack(element_10.unitId, attackTarget.coordinates));
          println('Attacking executed - returning (' + element_10.unitId);
          break $l$block_21;
        }
        if (shouldNotMove) {
          break $l$block_21;
        }
        println('Looking for move target for (' + element_10.unitId + ')');
        var tmp2_safe_receiver = takeTurn$closestEnemyCity(this, tiles_0, element_10.coordinates);
        var closestEnemyCity = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.coordinates;
        var tmp3_safe_receiver = takeTurn$closestEnemy(this, tiles_0, element_10.coordinates);
        var closestEnemy = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.coordinates;
        var tmp_23;
        if (!(closestEnemy == null) && !(closestEnemyCity == null)) {
          var distanceToEnemy = distanceTo(element_10.coordinates, closestEnemy);
          var distanceToCity = distanceTo(element_10.coordinates, closestEnemyCity);
          tmp_23 = distanceToEnemy <= distanceToCity ? closestEnemy : closestEnemyCity;
        } else {
          var tmp5_elvis_lhs = closestEnemy == null ? closestEnemyCity : closestEnemy;
          var tmp_24;
          if (tmp5_elvis_lhs == null) {
            var tmp6_safe_receiver = takeTurn$closestUndiscovered(tiles_0, element_10.coordinates);
            tmp_24 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.coordinates;
          } else {
            tmp_24 = tmp5_elvis_lhs;
          }
          var tmp7_elvis_lhs = tmp_24;
          tmp_23 = tmp7_elvis_lhs == null ? element_10.coordinates : tmp7_elvis_lhs;
        }
        var target_0 = tmp_23;
        if (element_10.coordinates.equals(target_0)) {
          break $l$block_21;
        }
        var possibleTargets = findPossibleTargets(this, tiles_0, listOf(target_0));
        // Inline function 'kotlin.runCatching' call
        var tmp_25;
        try {
          // Inline function 'kotlin.Companion.success' call
          var value_2 = findPreferredPath(this, tiles_0, element_10.coordinates, target_0);
          tmp_25 = _Result___init__impl__xyqfz8(value_2);
        } catch ($p) {
          var tmp_26;
          if ($p instanceof Error) {
            var e_2 = $p;
            // Inline function 'kotlin.Companion.failure' call
            tmp_26 = _Result___init__impl__xyqfz8(createFailure(e_2));
          } else {
            throw $p;
          }
          tmp_25 = tmp_26;
        }
        // Inline function 'kotlin.onFailure' call
        var this_3 = tmp_25;
        if (Result__exceptionOrNull_impl_p6xea9(this_3) == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          println('Pathing timed out after 1s');
          println('from ' + element_10.coordinates.toString() + ' to: ' + toString_0(possibleTargets));
          println('Unit: ' + element_10.toString());
          println('Target tile' + toString_0(possibleTargets));
          break $l$block_21;
        }
        // Inline function 'kotlin.Result.getOrNull' call
        var tmp_27;
        if (_Result___get_isFailure__impl__jpiriv(this_3)) {
          tmp_27 = null;
        } else {
          var tmp_28 = _Result___get_value__impl__bjfvqg(this_3);
          tmp_27 = (tmp_28 == null ? true : !(tmp_28 == null)) ? tmp_28 : THROW_CCE();
        }
        var preferredPath_0 = tmp_27;
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        if (preferredPath_0 == null || preferredPath_0.p()) {
          this.v1g_1 = false;
          println('Preferred path is null or empty');
          break $l$block_21;
        }
        var indexedPath_0 = withIndex(preferredPath_0);
        var tmp0_7 = actions_0.moveTargets;
        var tmp$ret$74;
        $l$block_23: {
          // Inline function 'kotlin.collections.maxByOrNull' call
          var iterator_3 = tmp0_7.j();
          if (!iterator_3.k()) {
            tmp$ret$74 = null;
            break $l$block_23;
          }
          var maxElem_0 = iterator_3.l();
          if (!iterator_3.k()) {
            tmp$ret$74 = maxElem_0;
            break $l$block_23;
          }
          var moveTarget_0 = maxElem_0;
          // Inline function 'kotlin.collections.find' call
          var tmp$ret$76;
          $l$block_24: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var _iterator__ex2g4s_13 = indexedPath_0.j();
            while (_iterator__ex2g4s_13.k()) {
              var element_11 = _iterator__ex2g4s_13.l();
              if (element_11.hd_1.equals(moveTarget_0)) {
                tmp$ret$76 = element_11;
                break $l$block_24;
              }
            }
            tmp$ret$76 = null;
          }
          var tmp0_safe_receiver_2 = tmp$ret$76;
          var tmp1_elvis_lhs_1 = tmp0_safe_receiver_2 == null ? null : tmp0_safe_receiver_2.gd_1;
          var maxValue_1 = tmp1_elvis_lhs_1 == null ? -1 : tmp1_elvis_lhs_1;
          do {
            var e_3 = iterator_3.l();
            // Inline function 'kotlin.collections.find' call
            var tmp$ret$80;
            $l$block_25: {
              // Inline function 'kotlin.collections.firstOrNull' call
              var _iterator__ex2g4s_14 = indexedPath_0.j();
              while (_iterator__ex2g4s_14.k()) {
                var element_12 = _iterator__ex2g4s_14.l();
                if (element_12.hd_1.equals(e_3)) {
                  tmp$ret$80 = element_12;
                  break $l$block_25;
                }
              }
              tmp$ret$80 = null;
            }
            var tmp0_safe_receiver_3 = tmp$ret$80;
            var tmp1_elvis_lhs_2 = tmp0_safe_receiver_3 == null ? null : tmp0_safe_receiver_3.gd_1;
            var v_1 = tmp1_elvis_lhs_2 == null ? -1 : tmp1_elvis_lhs_2;
            if (compareTo(maxValue_1, v_1) < 0) {
              maxElem_0 = e_3;
              maxValue_1 = v_1;
            }
          }
           while (iterator_3.k());
          tmp$ret$74 = maxElem_0;
        }
        var tmp8_safe_receiver = tmp$ret$74;
        if (tmp8_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          this.a1g(new Move(element_10.unitId, tmp8_safe_receiver));
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_15 = this.u1g_1.j();
    while (_iterator__ex2g4s_15.k()) {
      var element_13 = _iterator__ex2g4s_15.l();
      var tiles_1 = this.x1f_1.tilesForPlayer(this.y1f_1);
      if (element_13 instanceof BuildingItem) {
        processQueueItem(this, tiles_1, element_13);
      } else {
        if (element_13 instanceof UnitItem) {
          processQueueItem_0(this, tiles_1, _get_myCities__a8lhzq(this), element_13);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    println('AI done');
    this.x1f_1.endTurn(this.y1f_1);
  };
  function WarriorAi(gameApi, playerId) {
    OneTrickPonyAi.call(this, gameApi, playerId, UnitType_WARRIOR_getInstance());
  }
  function ArcherAi(gameApi, playerId) {
    OneTrickPonyAi.call(this, gameApi, playerId, UnitType_ARCHER_getInstance());
  }
  function ScoutAi(gameApi, playerId) {
    OneTrickPonyAi.call(this, gameApi, playerId, UnitType_SCOUT_getInstance());
  }
  function UnitItem(unitType, condition) {
    PriorityQueueItem.call(this, condition);
    this.d1h_1 = unitType;
  }
  function BuildingItem(building, condition) {
    PriorityQueueItem.call(this, condition);
    this.a1h_1 = building;
  }
  function PriorityQueueItem(condition) {
    this.x1g_1 = condition;
  }
  protoOf(PriorityQueueItem).y1g = function (tile) {
    return this.x1g_1.y1g(tile);
  };
  protoOf(PriorityQueueItem).j1h = function (tile) {
    return this.x1g_1.j1h(tile);
  };
  protoOf(PriorityQueueItem).b1h = function () {
    this.x1g_1.b1h();
  };
  function Condition$Predicate$_init_$lambda_zc68xp(it) {
    return 0;
  }
  function None() {
    None_instance = this;
    Condition.call(this);
  }
  protoOf(None).y1g = function (tile) {
    return true;
  };
  protoOf(None).toString = function () {
    return 'None';
  };
  protoOf(None).hashCode = function () {
    return -467699373;
  };
  protoOf(None).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof None))
      return false;
    other instanceof None || THROW_CCE();
    return true;
  };
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function Predicate(predicate, priority) {
    var tmp;
    if (priority === VOID) {
      tmp = Condition$Predicate$_init_$lambda_zc68xp;
    } else {
      tmp = priority;
    }
    priority = tmp;
    Condition.call(this);
    this.o1h_1 = predicate;
    this.p1h_1 = priority;
  }
  protoOf(Predicate).y1g = function (tile) {
    return this.o1h_1(tile);
  };
  protoOf(Predicate).j1h = function (tile) {
    return this.p1h_1(tile);
  };
  function Condition() {
  }
  protoOf(Condition).j1h = function (tile) {
    return 0;
  };
  protoOf(Condition).b1h = function () {
    return Unit_instance;
  };
  function Companion_1() {
  }
  protoOf(Companion_1).k1h = function (builder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new PriorityQueueBuilder();
    builder(this_0);
    return toList_0(this_0.g1h_1);
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function PriorityQueueBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g1h_1 = ArrayList_init_$Create$();
  }
  protoOf(PriorityQueueBuilder).i1h = function (unitType, condition) {
    return this.g1h_1.e(new UnitItem(unitType, condition));
  };
  protoOf(PriorityQueueBuilder).q1h = function (building, condition) {
    return this.g1h_1.e(new BuildingItem(building, condition));
  };
  protoOf(PriorityQueueBuilder).h1h = function (building, condition, $super) {
    condition = condition === VOID ? None_getInstance() : condition;
    return $super === VOID ? this.q1h(building, condition) : $super.q1h.call(this, building, condition);
  };
  var Cheat_MARCO_instance;
  var Cheat_POLO_instance;
  var Cheat_FULL_LOG_instance;
  function values_0() {
    return [Cheat_MARCO_getInstance(), Cheat_POLO_getInstance(), Cheat_FULL_LOG_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values_0());
    return $ENTRIES;
  }
  var Cheat_entriesInitialized;
  function Cheat_initEntries() {
    if (Cheat_entriesInitialized)
      return Unit_instance;
    Cheat_entriesInitialized = true;
    Cheat_MARCO_instance = new Cheat('MARCO', 0, 'marco');
    Cheat_POLO_instance = new Cheat('POLO', 1, 'polo');
    Cheat_FULL_LOG_instance = new Cheat('FULL_LOG', 2, 'full_log');
  }
  var $ENTRIES;
  function Cheat(name, ordinal, cheatName) {
    Enum.call(this, name, ordinal);
    this.t1h_1 = cheatName;
  }
  function Cheat_MARCO_getInstance() {
    Cheat_initEntries();
    return Cheat_MARCO_instance;
  }
  function Cheat_POLO_getInstance() {
    Cheat_initEntries();
    return Cheat_POLO_instance;
  }
  function Cheat_FULL_LOG_getInstance() {
    Cheat_initEntries();
    return Cheat_FULL_LOG_instance;
  }
  function CheatEngine$lambda(this$0, $it) {
    return function (enabled) {
      if (enabled) {
        this$0.w1h_1.e($it);
      } else {
        this$0.w1h_1.b2($it);
      }
      return Unit_instance;
    };
  }
  function CheatEngine(players) {
    this.u1h_1 = players;
    var tmp = this;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.u1h_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (element.aiType == null) {
        destination.e(element);
      }
    }
    tmp.v1h_1 = destination;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.w1h_1 = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = get_entries().j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      var tmp_1 = WindowHelper_instance;
      tmp_1.x1h(element_0.t1h_1, CheatEngine$lambda(this, element_0));
    }
  }
  protoOf(CheatEngine).y1h = function (playerId) {
    // Inline function 'kotlin.takeIf' call
    var this_0 = this.w1h_1;
    var tmp;
    var tmp0 = this.v1h_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.p();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        if (element.playerId === playerId) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    return tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
  };
  function CityRange(playerId, borders) {
    this.playerId = playerId;
    this.borders = borders;
  }
  protoOf(CityRange).z1h = function () {
    return this.playerId;
  };
  protoOf(CityRange).a1i = function () {
    return this.borders;
  };
  protoOf(CityRange).sd = function () {
    return this.playerId;
  };
  protoOf(CityRange).td = function () {
    return this.borders;
  };
  protoOf(CityRange).b1i = function (playerId, borders) {
    return new CityRange(playerId, borders);
  };
  protoOf(CityRange).copy = function (playerId, borders, $super) {
    playerId = playerId === VOID ? this.playerId : playerId;
    borders = borders === VOID ? this.borders : borders;
    return $super === VOID ? this.b1i(playerId, borders) : $super.b1i.call(this, playerId, borders);
  };
  protoOf(CityRange).toString = function () {
    return 'CityRange(playerId=' + this.playerId + ', borders=' + toString_0(this.borders) + ')';
  };
  protoOf(CityRange).hashCode = function () {
    var result = getStringHashCode(this.playerId);
    result = imul(result, 31) + hashCode(this.borders) | 0;
    return result;
  };
  protoOf(CityRange).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CityRange))
      return false;
    var tmp0_other_with_cast = other instanceof CityRange ? other : THROW_CCE();
    if (!(this.playerId === tmp0_other_with_cast.playerId))
      return false;
    if (!equals(this.borders, tmp0_other_with_cast.borders))
      return false;
    return true;
  };
  function BorderCalculator(hexMap) {
    this.c1i_1 = hexMap;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.d1i_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(BorderCalculator).e1i = function (coordinates) {
    return this.d1i_1.i2(coordinates);
  };
  protoOf(BorderCalculator).f1i = function (players, cities) {
    this.d1i_1.c2();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = players.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s_0 = cities.j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        if (element_0.playerId === element.playerId) {
          destination.e(element_0);
        }
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_1 = destination.j();
      while (_iterator__ex2g4s_1.k()) {
        var element_1 = _iterator__ex2g4s_1.l();
        // Inline function 'kotlin.collections.mapNotNull' call
        var tmp0 = this.c1i_1.h1i(element_1.coordinates, element_1.borderRange);
        // Inline function 'kotlin.collections.mapNotNullTo' call
        var destination_0 = ArrayList_init_$Create$();
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_2 = tmp0.j();
        while (_iterator__ex2g4s_2.k()) {
          var element_2 = _iterator__ex2g4s_2.l();
          var tmp0_safe_receiver = this.c1i_1.i1i(element_2);
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            destination_0.e(tmp0_safe_receiver);
          }
        }
        var cityTiles = destination_0;
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_3 = cityTiles.j();
        while (_iterator__ex2g4s_3.k()) {
          var element_3 = _iterator__ex2g4s_3.l();
          // Inline function 'kotlin.collections.filter' call
          var tmp0_0 = get_entries_0();
          // Inline function 'kotlin.collections.filterTo' call
          var destination_1 = ArrayList_init_$Create$();
          var _iterator__ex2g4s_4 = tmp0_0.j();
          while (_iterator__ex2g4s_4.k()) {
            var element_4 = _iterator__ex2g4s_4.l();
            var tmp$ret$10;
            $l$block_0: {
              // Inline function 'kotlin.collections.none' call
              var tmp;
              if (isInterface(cityTiles, Collection)) {
                tmp = cityTiles.p();
              } else {
                tmp = false;
              }
              if (tmp) {
                tmp$ret$10 = true;
                break $l$block_0;
              }
              var _iterator__ex2g4s_5 = cityTiles.j();
              while (_iterator__ex2g4s_5.k()) {
                var element_5 = _iterator__ex2g4s_5.l();
                if (element_5.coords.equals(movedBy_0(element_3.coords, element_4))) {
                  tmp$ret$10 = false;
                  break $l$block_0;
                }
              }
              tmp$ret$10 = true;
            }
            if (tmp$ret$10) {
              destination_1.e(element_4);
            }
          }
          var edges = destination_1;
          var tmp0_1 = this.d1i_1;
          var tmp2 = element_3.coords;
          // Inline function 'kotlin.collections.set' call
          var value = new CityRange(element.playerId, edges);
          tmp0_1.l2(tmp2, value);
        }
      }
    }
  };
  function CombatCalculator() {
  }
  protoOf(CombatCalculator).j1i = function (attacker, defender, defenseBonus) {
    var totalDefense = defender.defense + defenseBonus | 0;
    var attackForce = attacker.attack;
    var defenseForce = totalDefense;
    var totalNumbers = attacker.hp + defender.hp | 0;
    var attackerNumbersRatio = attacker.hp / totalNumbers * 2;
    var defenderNumbersRatio = defender.hp / totalNumbers * 2;
    var attackerDamage = attackForce * coerceIn(attackerNumbersRatio, 0.5, 2.0);
    var defenderDamage = defenseForce * coerceIn(defenderNumbersRatio, 0.5, 2.0);
    var updatedAttacker = attacker.copy(VOID, VOID, VOID, VOID, coerceAtLeast(attacker.hp - roundToInt(defenderDamage) | 0, 0));
    var updatedDefender = defender.copy(VOID, VOID, VOID, VOID, coerceAtLeast(defender.hp - roundToInt(attackerDamage) | 0, 0));
    return to(updatedAttacker, updatedDefender);
  };
  function triggerEvent($this, recipientIds, eventCreator) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this.m1i_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (recipientIds.r(element.y1i_1)) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = destination.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      element_0.z1i_1(eventCreator(element_0.y1i_1));
    }
  }
  function recalculateVision($this, sendEvents) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.l1i_1.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      $this.q1i_1.d1j(element.playerId, $this.unitsFor(element.playerId), $this.citiesFor(element.playerId));
    }
    $this.r1i_1.f1i($this.l1i_1, $this.v1i_1.k2());
    $this.u1i_1.h1j($this.q1i_1.e1j());
    recalculateScore($this);
    if (sendEvents) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = $this.m1i_1.j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        var tiles = $this.tilesForPlayer(element_0.y1i_1);
        element_0.z1i_1(new VisionChanged(tiles));
      }
    }
  }
  function recalculateVision$default($this, sendEvents, $super) {
    sendEvents = sendEvents === VOID ? true : sendEvents;
    return recalculateVision($this, sendEvents);
  }
  function recalculateScore($this) {
    var tmp = GameApi$unitsFor$ref($this);
    var stats = $this.u1i_1.i1j(tmp, GameApi$citiesFor$ref($this));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.m1i_1.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      element.z1i_1(new ScoreChanged(stats));
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      if (stats.p()) {
        tmp$ret$2 = 0;
        break $l$block;
      }
      var count = 0;
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_0 = stats.u().j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        if (!element_0.f2().isDefeated) {
          count = count + 1 | 0;
        }
      }
      tmp$ret$2 = count;
    }
    if (tmp$ret$2 < 2) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_1 = $this.m1i_1.j();
      while (_iterator__ex2g4s_1.k()) {
        var element_1 = _iterator__ex2g4s_1.l();
        element_1.z1i_1(new GameOverEvent($this.u1i_1.j1j()));
      }
    }
  }
  function isTileVisible($this, playerId, coordinates) {
    var vision = $this.q1i_1.k1j(playerId);
    return vision.l1j_1.r(coordinates) || $this.n1i_1.y1h(playerId).r(Cheat_POLO_getInstance());
  }
  function toPlayerTileData($this, _this__u8e3s4, playerId) {
    var vision = $this.q1i_1.k1j(playerId);
    var cheats = $this.n1i_1.y1h(playerId);
    var isDiscovered = vision.m1j_1.r(_this__u8e3s4.coords) || cheats.r(Cheat_MARCO_getInstance());
    var isVisible = vision.l1j_1.r(_this__u8e3s4.coords) || (cheats.r(Cheat_POLO_getInstance()) && isDiscovered);
    var tmp = _this__u8e3s4.coords;
    // Inline function 'kotlin.takeIf' call
    var tmp_0;
    if (isDiscovered) {
      tmp_0 = _this__u8e3s4;
    } else {
      tmp_0 = null;
    }
    var tmp_1 = tmp_0;
    // Inline function 'kotlin.takeIf' call
    var this_0 = $this.w1i_1.i2(_this__u8e3s4.coords);
    var tmp_2;
    if (isVisible) {
      tmp_2 = this_0;
    } else {
      tmp_2 = null;
    }
    var tmp_3 = tmp_2;
    // Inline function 'kotlin.takeIf' call
    var this_1 = $this.v1i_1.i2(_this__u8e3s4.coords);
    var tmp_4;
    if (isDiscovered) {
      tmp_4 = this_1;
    } else {
      tmp_4 = null;
    }
    var tmp_5 = tmp_4;
    // Inline function 'kotlin.takeIf' call
    var this_2 = $this.r1i_1.e1i(_this__u8e3s4.coords);
    var tmp_6;
    if (isVisible) {
      tmp_6 = this_2;
    } else {
      tmp_6 = null;
    }
    var tmp$ret$7 = tmp_6;
    return new PlayerTileData(tmp, isVisible, tmp_1, tmp_3, tmp_5, tmp$ret$7);
  }
  function executeAttack($this, attacker, defender) {
    var isRangedAttack = !neighbors(attacker.coordinates).r(defender.coordinates);
    // Inline function 'kotlin.takeIf' call
    var this_0 = require_0($this.p1i_1.i1i(defender.coordinates)).defenseBonus();
    var tmp;
    var tmp0_safe_receiver = $this.v1i_1.i2(defender.coordinates);
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = tmp0_safe_receiver.playerId === defender.playerId;
    }
    var tmp1_elvis_lhs = tmp_0;
    if (tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var defenseBonus = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var _destruct__k2r9zo = $this.s1i_1.j1i(attacker, defender, defenseBonus);
    var updatedAttacker = _destruct__k2r9zo.sd();
    var updatedDefender = _destruct__k2r9zo.td();
    if (isRangedAttack) {
      var updated = attacker.copy(VOID, VOID, VOID, VOID, VOID, VOID, false);
      var tmp0 = $this.w1i_1;
      // Inline function 'kotlin.collections.set' call
      var key = attacker.coordinates;
      tmp0.l2(key, updated);
    } else {
      if (updatedAttacker.hp <= 0) {
        $this.p1i_1.n1j(updatedAttacker.coordinates, false);
        $this.w1i_1.m2(updatedAttacker.coordinates);
        $this.u1i_1.o1j(defender.playerId, attacker.playerId);
      } else {
        var tmp0_0 = $this.w1i_1;
        var tmp2 = updatedAttacker.coordinates;
        // Inline function 'kotlin.collections.set' call
        var value = updatedAttacker.copy(VOID, VOID, VOID, VOID, VOID, VOID, false);
        tmp0_0.l2(tmp2, value);
      }
    }
    if (updatedDefender.hp <= 0) {
      $this.p1i_1.n1j(updatedDefender.coordinates, false);
      $this.w1i_1.m2(updatedDefender.coordinates);
      $this.u1i_1.o1j(attacker.playerId, defender.playerId);
    } else {
      var tmp0_1 = $this.w1i_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = updatedDefender.coordinates;
      tmp0_1.l2(key_0, updatedDefender);
    }
    var playersSeeingAttacker = $this.q1i_1.p1j([attacker.coordinates]);
    var playersSeeingDefender = $this.q1i_1.p1j([defender.coordinates]);
    // Inline function 'kotlin.collections.filter' call
    var tmp0_2 = $this.m1i_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0_2.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (playersSeeingAttacker.r(element.y1i_1) || playersSeeingDefender.r(element.y1i_1)) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = destination.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      // Inline function 'kotlin.takeIf' call
      var tmp_1;
      if (playersSeeingAttacker.r(element_0.y1i_1)) {
        tmp_1 = updatedAttacker;
      } else {
        tmp_1 = null;
      }
      var tmp_2 = tmp_1;
      // Inline function 'kotlin.takeIf' call
      var tmp_3;
      if (playersSeeingDefender.r(element_0.y1i_1)) {
        tmp_3 = updatedDefender;
      } else {
        tmp_3 = null;
      }
      var tmp$ret$13 = tmp_3;
      element_0.z1i_1(new AttackEvent(attacker.coordinates, defender.coordinates, isRangedAttack, tmp_2, tmp$ret$13));
    }
    recalculateVision$default($this);
    $this.t1i_1.u1j($this.citiesFor($this.currentPlayer.playerId), $this.w1i_1.k2());
    recalculateScore($this);
    $this.o1i_1.x1j([$this.currentPlayer, attacker, 'attacked', defender, 'units after battle:', updatedAttacker, updatedDefender]);
  }
  function verifyIntegrity($this) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var reports = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.groupingBy' call
    var this_0 = $this.w1i_1.k2();
    var tmp$ret$1 = new GameApi$verifyIntegrity$$inlined$groupingBy$1(this_0);
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = eachCount(tmp$ret$1);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.u().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (element.f2() > 1) {
        destination.l2(element.e2(), element.f2());
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = destination.u().j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      reports.e('Duplicated unit ' + element_0.e2());
    }
    // Inline function 'kotlin.collections.groupingBy' call
    var this_1 = $this.v1i_1.k2();
    var tmp$ret$9 = new GameApi$verifyIntegrity$$inlined$groupingBy$2(this_1);
    // Inline function 'kotlin.collections.filter' call
    var tmp0_0 = eachCount(tmp$ret$9);
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_1 = tmp0_0.u().j();
    while (_iterator__ex2g4s_1.k()) {
      var element_1 = _iterator__ex2g4s_1.l();
      if (element_1.f2() > 1) {
        destination_0.l2(element_1.e2(), element_1.f2());
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = destination_0.u().j();
    while (_iterator__ex2g4s_2.k()) {
      var element_2 = _iterator__ex2g4s_2.l();
      reports.e('Duplicated city ' + element_2.e2());
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!reports.p()) {
      var tmp = reports.m();
      throw IllegalStateException_init_$Create$('Integrity check failed, found ' + tmp + ' issues: ' + joinToString(reports, VOID, VOID, VOID, VOID, VOID, GameApi$verifyIntegrity$lambda));
    }
  }
  function Companion_2() {
  }
  protoOf(Companion_2).fromGameState = function (state) {
    var tmp = state.mapSeed.c1f();
    var tmp0_elvis_lhs = state.statistics;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.associate' call
      var this_0 = state.players;
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
      // Inline function 'kotlin.collections.associateTo' call
      var destination = LinkedHashMap_init_$Create$_0(capacity);
      var _iterator__ex2g4s = this_0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'kotlin.collections.plusAssign' call
        var pair = to(element.playerId, new GameStatistics());
        destination.l2(pair.qd_1, pair.rd_1);
      }
      tmp_0 = destination;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return new GameApi(tmp, state.players, state.tileList, state.cities, state.units, state.stock, tmp_0, state.visionData);
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function GameApi$unitsFor$ref(p0) {
    var l = function (_this__u8e3s4) {
      return p0.unitsFor(_this__u8e3s4);
    };
    l.callableName = 'unitsFor';
    return l;
  }
  function GameApi$citiesFor$ref(p0) {
    var l = function (_this__u8e3s4) {
      return p0.citiesFor(_this__u8e3s4);
    };
    l.callableName = 'citiesFor';
    return l;
  }
  function GameApi$unregisterEventListeners$lambda($playerId) {
    return function (it) {
      return it.y1i_1 === $playerId;
    };
  }
  function GameApi$execute$lambda($tiles, this$0, $it) {
    return function (events) {
      return plus_0(plus_0(events, new VisionChanged($tiles)), new Moved(getValue(this$0.w1i_1, $it.coordinates)));
    };
  }
  function GameApi$execute$lambda_0($unit) {
    return function (it) {
      return new Vanish($unit);
    };
  }
  function GameApi$execute$lambda_1($newUnit) {
    return function (it) {
      return new Created($newUnit);
    };
  }
  function GameApi$execute$lambda_2(this$0, $updatedAttacker) {
    return function (eventPlayerId) {
      return new TileUpdated(toPlayerTileData(this$0, getValue(this$0.p1i_1.g1i_1, $updatedAttacker.coordinates), eventPlayerId));
    };
  }
  function GameApi$execute$lambda_3(this$0, $unit) {
    return function (eventPlayerId) {
      return new TileUpdated(toPlayerTileData(this$0, getValue(this$0.p1i_1.g1i_1, $unit.coordinates), eventPlayerId));
    };
  }
  function GameApi$endTurn$lambda(this$0, $updatedUnit) {
    return function (eventPlayerId) {
      return new TileUpdated(toPlayerTileData(this$0, getValue(this$0.p1i_1.g1i_1, $updatedUnit.coordinates), eventPlayerId));
    };
  }
  function GameApi$verifyIntegrity$$inlined$groupingBy$1($this) {
    this.y1j_1 = $this;
  }
  protoOf(GameApi$verifyIntegrity$$inlined$groupingBy$1).j4 = function () {
    return this.y1j_1.j();
  };
  protoOf(GameApi$verifyIntegrity$$inlined$groupingBy$1).el = function (element) {
    return element.unitId;
  };
  protoOf(GameApi$verifyIntegrity$$inlined$groupingBy$1).k4 = function (element) {
    return this.el((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function GameApi$verifyIntegrity$$inlined$groupingBy$2($this) {
    this.z1j_1 = $this;
  }
  protoOf(GameApi$verifyIntegrity$$inlined$groupingBy$2).j4 = function () {
    return this.z1j_1.j();
  };
  protoOf(GameApi$verifyIntegrity$$inlined$groupingBy$2).el = function (element) {
    return element.cityId;
  };
  protoOf(GameApi$verifyIntegrity$$inlined$groupingBy$2).k4 = function (element) {
    return this.el((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function GameApi$verifyIntegrity$lambda(it) {
    return it;
  }
  function GameApi(mapSeed, players, tileList, cities, units, stocks, statistics, visionData) {
    visionData = visionData === VOID ? null : visionData;
    this.k1i_1 = mapSeed;
    this.l1i_1 = toMutableList(players);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m1i_1 = ArrayList_init_$Create$();
    this.n1i_1 = new CheatEngine(players);
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var this_0 = new GameLogImpl();
    this_0.a1k(new ConsoleLog());
    tmp_0.o1i_1 = this_0;
    this.p1i_1 = new HexMap(tileList);
    this.q1i_1 = new VisionCalculator(this.p1i_1, this.n1i_1);
    this.r1i_1 = new BorderCalculator(this.p1i_1);
    this.s1i_1 = new CombatCalculator();
    this.t1i_1 = new StockpilesManager(this.p1i_1, this.m1i_1, stocks);
    this.u1i_1 = new StatisticsCounter(statistics, this.p1i_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.associateBy' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(cities, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = cities.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      var tmp$ret$3 = element.coordinates;
      destination.l2(tmp$ret$3, element);
    }
    tmp_1.v1i_1 = toMutableMap(destination);
    var tmp_2 = this;
    // Inline function 'kotlin.collections.associateBy' call
    var capacity_0 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(units, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(capacity_0);
    var _iterator__ex2g4s_0 = units.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      var tmp$ret$6 = element_0.coordinates;
      destination_0.l2(tmp$ret$6, element_0);
    }
    tmp_2.w1i_1 = toMutableMap(destination_0);
    var tmp_3 = this;
    // Inline function 'kotlin.collections.associate' call
    var capacity_1 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(players, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination_1 = LinkedHashMap_init_$Create$_0(capacity_1);
    var _iterator__ex2g4s_1 = players.j();
    while (_iterator__ex2g4s_1.k()) {
      var element_1 = _iterator__ex2g4s_1.l();
      var tmp0_safe_receiver = element_1.aiType;
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element_1.playerId, tmp0_safe_receiver == null ? null : create(tmp0_safe_receiver, this, element_1.playerId));
      destination_1.l2(pair.qd_1, pair.rd_1);
    }
    tmp_3.x1i_1 = destination_1;
    verifyIntegrity(this);
    if (visionData == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.q1i_1.b1k(visionData);
    }
    this.o1i_1.x1j(['GameApi initialised - starting']);
    recalculateVision$default(this);
    var tmp1_safe_receiver = this.x1i_1.i2(this.currentPlayer.playerId);
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.i1g();
    }
  }
  protoOf(GameApi).allPlayers = function () {
    return toList_0(this.l1i_1);
  };
  protoOf(GameApi).citiesFor = function (playerId) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.v1i_1.k2();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (element.playerId === playerId) {
        destination.e(element);
      }
    }
    return destination;
  };
  protoOf(GameApi).unitsFor = function (playerId) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.w1i_1.k2();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (element.playerId === playerId) {
        destination.e(element);
      }
    }
    return destination;
  };
  protoOf(GameApi).stocksFor = function (playerId) {
    return this.t1i_1.y1h(playerId);
  };
  protoOf(GameApi).incomeFor = function (playerId) {
    this.t1i_1.u1j(this.citiesFor(this.currentPlayer.playerId), this.w1i_1.k2());
    return this.t1i_1.c1k(playerId);
  };
  protoOf(GameApi).d1k = function () {
    return first(this.l1i_1);
  };
  protoOf(GameApi).registerEventListener = function (playerId, listener) {
    this.m1i_1.e(new EventListener(playerId, listener));
    recalculateVision$default(this);
  };
  protoOf(GameApi).unregisterEventListeners = function (playerId) {
    return removeAll(this.m1i_1, GameApi$unregisterEventListeners$lambda(playerId));
  };
  protoOf(GameApi).tilesForPlayer = function (playerId) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.p1i_1.g1i_1.k2();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.j();
    while (_iterator__ex2g4s.k()) {
      var item = _iterator__ex2g4s.l();
      var tmp$ret$0 = toPlayerTileData(this, item, playerId);
      destination.e(tmp$ret$0);
    }
    return destination;
  };
  protoOf(GameApi).canBuild = function (coordinates, playerId) {
    var cityRange = this.r1i_1.e1i(coordinates);
    var occupyingUnit = this.w1i_1.i2(coordinates);
    var tmp1_safe_receiver = cityRange == null ? null : cityRange.playerId;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = !(tmp1_safe_receiver === playerId);
    }
    var tmp2_elvis_lhs = tmp;
    var isEnemyCity = tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
    var tmp4_safe_receiver = occupyingUnit == null ? null : occupyingUnit.playerId;
    var tmp_0;
    if (tmp4_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = !(tmp4_safe_receiver === playerId);
    }
    var tmp5_elvis_lhs = tmp_0;
    var isEnemyUnit = tmp5_elvis_lhs == null ? false : tmp5_elvis_lhs;
    if (isEnemyCity || isEnemyUnit) {
      return false;
    }
    var tmp_1;
    if (occupyingUnit == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = occupyingUnit.playerId === playerId;
    }
    var tmp7_elvis_lhs = tmp_1;
    var tmp_2;
    if (tmp7_elvis_lhs == null) {
      tmp_2 = (cityRange == null ? null : cityRange.playerId) === playerId;
    } else {
      tmp_2 = tmp7_elvis_lhs;
    }
    return tmp_2;
  };
  protoOf(GameApi).getTileIncome = function (coordinates, playerId) {
    var vision = this.q1i_1.k1j(playerId);
    var isVisible = vision.l1j_1.r(coordinates) || this.n1i_1.y1h(playerId).r(Cheat_POLO_getInstance());
    var tmp0_safe_receiver = this.p1i_1.i1i(coordinates);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (isVisible) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_safe_receiver = tmp;
    return tmp1_safe_receiver == null ? null : getIncome(tmp1_safe_receiver);
  };
  protoOf(GameApi).actionsForUnit = function (playerId, unitId) {
    var tmp0 = this.w1i_1.k2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        if (element.unitId === unitId) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver.playerId === playerId) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var message = 'Unit ' + unitId + ' not found for current player';
      throw IllegalStateException_init_$Create$(toString_0(message));
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var unit = tmp_1;
    // Inline function 'kotlin.run' call
    var $this$run = this.p1i_1.e1k(unit.coordinates, unit.movementLeft);
    var tmp_2;
    if (unit.actionPoint) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      var attackTargets = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.collections.mapNotNull' call
      var tmp0_0 = this.p1i_1.h1i(unit.coordinates, unit.attackRange);
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = tmp0_0.j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        var tmp0_safe_receiver_0 = this.w1i_1.i2(element_0);
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          destination.e(tmp0_safe_receiver_0);
        }
      }
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_1 = destination.j();
      while (_iterator__ex2g4s_1.k()) {
        var element_1 = _iterator__ex2g4s_1.l();
        if (!(element_1.playerId === playerId)) {
          destination_0.e(element_1);
        }
      }
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_0, 10));
      var _iterator__ex2g4s_2 = destination_0.j();
      while (_iterator__ex2g4s_2.k()) {
        var item = _iterator__ex2g4s_2.l();
        var tmp$ret$15 = item.coordinates;
        destination_1.e(tmp$ret$15);
      }
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_2 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_3 = destination_1.j();
      while (_iterator__ex2g4s_3.k()) {
        var element_2 = _iterator__ex2g4s_3.l();
        if (isTileVisible(this, playerId, element_2)) {
          destination_2.e(element_2);
        }
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_4 = destination_2.j();
      while (_iterator__ex2g4s_4.k()) {
        var element_3 = _iterator__ex2g4s_4.l();
        // Inline function 'kotlin.collections.set' call
        var value = to(unit.coordinates, 0);
        attackTargets.l2(element_3, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_5 = $this$run.moveTargets.j();
      while (_iterator__ex2g4s_5.k()) {
        var element_4 = _iterator__ex2g4s_5.l();
        $l$block_0: {
          var tmp0_elvis_lhs = $this$run.getPath(element_4);
          var tmp_3;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_3 = tmp0_elvis_lhs;
          }
          var path = tmp_3;
          // Inline function 'kotlin.collections.sumOf' call
          var sum = 0;
          var _iterator__ex2g4s_6 = path.j();
          while (_iterator__ex2g4s_6.k()) {
            var element_5 = _iterator__ex2g4s_6.l();
            var tmp_4 = sum;
            sum = tmp_4 + element_5.cost | 0;
          }
          var pathCost = sum;
          // Inline function 'kotlin.collections.mapNotNull' call
          var tmp0_1 = this.p1i_1.h1i(element_4, unit.attackRange);
          // Inline function 'kotlin.collections.mapNotNullTo' call
          var destination_3 = ArrayList_init_$Create$();
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_7 = tmp0_1.j();
          while (_iterator__ex2g4s_7.k()) {
            var element_6 = _iterator__ex2g4s_7.l();
            var tmp0_safe_receiver_1 = this.w1i_1.i2(element_6);
            if (tmp0_safe_receiver_1 == null)
              null;
            else {
              // Inline function 'kotlin.let' call
              destination_3.e(tmp0_safe_receiver_1);
            }
          }
          // Inline function 'kotlin.collections.filter' call
          // Inline function 'kotlin.collections.filterTo' call
          var destination_4 = ArrayList_init_$Create$();
          var _iterator__ex2g4s_8 = destination_3.j();
          while (_iterator__ex2g4s_8.k()) {
            var element_7 = _iterator__ex2g4s_8.l();
            if (!(element_7.playerId === playerId)) {
              destination_4.e(element_7);
            }
          }
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.mapTo' call
          var destination_5 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_4, 10));
          var _iterator__ex2g4s_9 = destination_4.j();
          while (_iterator__ex2g4s_9.k()) {
            var item_0 = _iterator__ex2g4s_9.l();
            var tmp$ret$37 = item_0.coordinates;
            destination_5.e(tmp$ret$37);
          }
          // Inline function 'kotlin.collections.filter' call
          // Inline function 'kotlin.collections.filterTo' call
          var destination_6 = ArrayList_init_$Create$();
          var _iterator__ex2g4s_10 = destination_5.j();
          while (_iterator__ex2g4s_10.k()) {
            var element_8 = _iterator__ex2g4s_10.l();
            if (isTileVisible(this, playerId, element_8)) {
              destination_6.e(element_8);
            }
          }
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_11 = destination_6.j();
          while (_iterator__ex2g4s_11.k()) {
            var element_9 = _iterator__ex2g4s_11.l();
            var tmp0_safe_receiver_2 = attackTargets.i2(element_9);
            var tmp_5;
            if (tmp0_safe_receiver_2 == null) {
              tmp_5 = null;
            } else {
              // Inline function 'kotlin.let' call
              var currentCost = tmp0_safe_receiver_2.td();
              if (currentCost > pathCost) {
                // Inline function 'kotlin.collections.set' call
                var value_0 = to(element_4, pathCost);
                attackTargets.l2(element_9, value_0);
              }
              tmp_5 = Unit_instance;
            }
            if (tmp_5 == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.collections.set' call
              var value_1 = to(element_4, pathCost);
              attackTargets.l2(element_9, value_1);
            }
          }
        }
      }
      // Inline function 'kotlin.collections.mapValues' call
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination_7 = LinkedHashMap_init_$Create$_0(mapCapacity(attackTargets.m()));
      // Inline function 'kotlin.collections.associateByTo' call
      var _iterator__ex2g4s_12 = attackTargets.u().j();
      while (_iterator__ex2g4s_12.k()) {
        var element_10 = _iterator__ex2g4s_12.l();
        var tmp_6 = element_10.e2();
        var tmp$ret$53 = element_10.f2().qd_1;
        destination_7.l2(tmp_6, tmp$ret$53);
      }
      tmp_2 = $this$run.copy(VOID, VOID, VOID, destination_7);
    } else {
      tmp_2 = $this$run;
    }
    return tmp_2;
  };
  protoOf(GameApi).execute = function (playerId, action) {
    if (!(playerId === this.currentPlayer.playerId)) {
      return Companion_instance_1.fail('Not your turn');
    }
    if (action instanceof Move) {
      var tmp0 = this.w1i_1.k2();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.j();
        while (_iterator__ex2g4s.k()) {
          var element = _iterator__ex2g4s.l();
          if (element.unitId === action.unitId) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      var tmp1_safe_receiver = tmp$ret$1;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_0;
        if (tmp1_safe_receiver.playerId === this.currentPlayer.playerId) {
          tmp_0 = tmp1_safe_receiver;
        } else {
          tmp_0 = null;
        }
        tmp = tmp_0;
      }
      var tmp2_elvis_lhs = tmp;
      var tmp_1;
      if (tmp2_elvis_lhs == null) {
        return Companion_instance_1.exception('Unit ' + action.unitId + ' not found for current player');
      } else {
        tmp_1 = tmp2_elvis_lhs;
      }
      var unit = tmp_1;
      var paths = this.p1i_1.e1k(unit.coordinates, unit.movementLeft);
      var tmp3_elvis_lhs = paths.getPath(action.destination);
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return Companion_instance_1.exception('Path to ' + action.destination.toString() + ' not found');
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      var path = tmp_2;
      // Inline function 'kotlin.collections.associate' call
      var this_0 = this.m1i_1;
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
      // Inline function 'kotlin.collections.associateTo' call
      var destination = LinkedHashMap_init_$Create$_0(capacity);
      var _iterator__ex2g4s_0 = this_0.j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        // Inline function 'kotlin.collections.listOf' call
        var tmp$ret$4 = emptyList();
        // Inline function 'kotlin.collections.plusAssign' call
        var pair = to(element_0.y1i_1, tmp$ret$4);
        destination.l2(pair.qd_1, pair.rd_1);
      }
      var combinedEvents = toMutableMap(destination);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_1 = path.j();
      while (_iterator__ex2g4s_1.k()) {
        var element_1 = _iterator__ex2g4s_1.l();
        var tmp0_0 = this.w1i_1.k2();
        var tmp$ret$10;
        $l$block_0: {
          // Inline function 'kotlin.collections.first' call
          var _iterator__ex2g4s_2 = tmp0_0.j();
          while (_iterator__ex2g4s_2.k()) {
            var element_2 = _iterator__ex2g4s_2.l();
            if (element_2.unitId === action.unitId) {
              tmp$ret$10 = element_2;
              break $l$block_0;
            }
          }
          throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
        }
        var updatedUnit = tmp$ret$10;
        var current = updatedUnit.coordinates;
        var tmp0_safe_receiver = this.v1i_1.i2(element_1.coordinates);
        var tmp_3;
        if (tmp0_safe_receiver == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          var tmp_4;
          if (updatedUnit.attack > 0) {
            tmp_4 = tmp0_safe_receiver;
          } else {
            tmp_4 = null;
          }
          tmp_3 = tmp_4;
        }
        var tmp1_safe_receiver_0 = tmp_3;
        var tmp_5;
        if (tmp1_safe_receiver_0 == null) {
          tmp_5 = null;
        } else {
          // Inline function 'kotlin.takeUnless' call
          var tmp_6;
          if (!(tmp1_safe_receiver_0.playerId === updatedUnit.playerId)) {
            tmp_6 = tmp1_safe_receiver_0;
          } else {
            tmp_6 = null;
          }
          tmp_5 = tmp_6;
        }
        var occupiedCity = tmp_5;
        this.p1i_1.n1j(current, false);
        this.p1i_1.n1j(element_1.coordinates, true);
        this.w1i_1.m2(current);
        var tmp0_1 = this.w1i_1;
        var tmp2 = element_1.coordinates;
        var tmp_7 = updatedUnit.movementLeft - element_1.cost | 0;
        var tmp_8;
        if (occupiedCity == null) {
          tmp_8 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_8 = new Occupying(occupiedCity.level.occupationTime);
        }
        var tmp3_elvis_lhs_0 = tmp_8;
        // Inline function 'kotlin.collections.set' call
        var value = updatedUnit.copy(VOID, VOID, VOID, element_1.coordinates, VOID, tmp_7, VOID, tmp3_elvis_lhs_0 == null ? None_getInstance_0() : tmp3_elvis_lhs_0);
        tmp0_1.l2(tmp2, value);
        recalculateVision(this, false);
        var playersThatCanSee = this.q1i_1.p1j([current, element_1.coordinates]);
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_3 = combinedEvents.j2().j();
        while (_iterator__ex2g4s_3.k()) {
          var element_3 = _iterator__ex2g4s_3.l();
          $l$block_1: {
            if (!playersThatCanSee.r(element_3)) {
              break $l$block_1;
            }
            var tiles = this.tilesForPlayer(element_3);
            edit(combinedEvents, element_3, GameApi$execute$lambda(tiles, this, element_1));
          }
        }
        this.o1i_1.x1j([this.currentPlayer, 'Moved', updatedUnit, 'from', current, 'to', element_1.coordinates]);
      }
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_4 = combinedEvents.u().j();
      while (_iterator__ex2g4s_4.k()) {
        var element_4 = _iterator__ex2g4s_4.l();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!element_4.f2().p()) {
          destination_0.l2(element_4.e2(), element_4.f2());
        }
      }
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_5 = destination_0.u().j();
      while (_iterator__ex2g4s_5.k()) {
        var element_5 = _iterator__ex2g4s_5.l();
        // Inline function 'kotlin.collections.component1' call
        var playerId_0 = element_5.e2();
        // Inline function 'kotlin.collections.component2' call
        var events = element_5.f2();
        var tmp_9 = getValue(this.w1i_1, action.destination);
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination_1 = ArrayList_init_$Create$();
        var _iterator__ex2g4s_6 = events.j();
        while (_iterator__ex2g4s_6.k()) {
          var element_6 = _iterator__ex2g4s_6.l();
          if (element_6 instanceof VisionChanged) {
            destination_1.e(element_6);
          }
        }
        var tmp_10 = destination_1;
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination_2 = ArrayList_init_$Create$();
        var _iterator__ex2g4s_7 = events.j();
        while (_iterator__ex2g4s_7.k()) {
          var element_7 = _iterator__ex2g4s_7.l();
          if (element_7 instanceof Moved) {
            destination_2.e(element_7);
          }
        }
        var combinedEvent = new CombinedMove(tmp_9, tmp_10, destination_2);
        var tmp0_2 = this.m1i_1;
        var tmp$ret$35;
        $l$block_2: {
          // Inline function 'kotlin.collections.first' call
          var _iterator__ex2g4s_8 = tmp0_2.j();
          while (_iterator__ex2g4s_8.k()) {
            var element_8 = _iterator__ex2g4s_8.l();
            if (element_8.y1i_1 === playerId_0) {
              tmp$ret$35 = element_8;
              break $l$block_2;
            }
          }
          throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
        }
        tmp$ret$35.z1i_1(combinedEvent);
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_9 = this.l1i_1.j();
      while (_iterator__ex2g4s_9.k()) {
        var element_9 = _iterator__ex2g4s_9.l();
        this.t1i_1.u1j(this.citiesFor(element_9.playerId), this.w1i_1.k2());
      }
    } else {
      if (action instanceof Settle) {
        var tmp0_3 = this.w1i_1.k2();
        var tmp$ret$41;
        $l$block_3: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s_10 = tmp0_3.j();
          while (_iterator__ex2g4s_10.k()) {
            var element_10 = _iterator__ex2g4s_10.l();
            if (element_10.unitId === action.settlersId) {
              tmp$ret$41 = element_10;
              break $l$block_3;
            }
          }
          tmp$ret$41 = null;
        }
        var tmp4_safe_receiver = tmp$ret$41;
        var tmp_11;
        if (tmp4_safe_receiver == null) {
          tmp_11 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          var tmp_12;
          if (tmp4_safe_receiver.playerId === this.currentPlayer.playerId) {
            tmp_12 = tmp4_safe_receiver;
          } else {
            tmp_12 = null;
          }
          tmp_11 = tmp_12;
        }
        var tmp5_safe_receiver = tmp_11;
        var tmp_13;
        if (tmp5_safe_receiver == null) {
          tmp_13 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          var tmp_14;
          if (tmp5_safe_receiver.unitType.equals(UnitType_SETTLERS_getInstance())) {
            tmp_14 = tmp5_safe_receiver;
          } else {
            tmp_14 = null;
          }
          tmp_13 = tmp_14;
        }
        var tmp6_elvis_lhs = tmp_13;
        var tmp_15;
        if (tmp6_elvis_lhs == null) {
          return Companion_instance_1.exception('Settlers ' + action.settlersId + ' not found for current player');
        } else {
          tmp_15 = tmp6_elvis_lhs;
        }
        var unit_0 = tmp_15;
        var tile = require_0(this.p1i_1.i1i(unit_0.coordinates));
        if (!(tile instanceof Grass)) {
          return Companion_instance_1.fail('Cannot create village on this tile type');
        }
        var tmp0_4 = this.v1i_1.j2();
        var tmp$ret$46;
        $l$block_5: {
          // Inline function 'kotlin.collections.any' call
          var tmp_16;
          if (isInterface(tmp0_4, Collection)) {
            tmp_16 = tmp0_4.p();
          } else {
            tmp_16 = false;
          }
          if (tmp_16) {
            tmp$ret$46 = false;
            break $l$block_5;
          }
          var _iterator__ex2g4s_11 = tmp0_4.j();
          while (_iterator__ex2g4s_11.k()) {
            var element_11 = _iterator__ex2g4s_11.l();
            if (distanceTo(element_11, unit_0.coordinates) < 4) {
              tmp$ret$46 = true;
              break $l$block_5;
            }
          }
          tmp$ret$46 = false;
        }
        if (tmp$ret$46) {
          return Companion_instance_1.fail('Cannot create village, too close to another settlement');
        }
        this.p1i_1.n1j(unit_0.coordinates, false);
        this.p1i_1.j1k(unit_0.coordinates, Building_VILLAGE_HALL_getInstance());
        this.w1i_1.m2(unit_0.coordinates);
        var tmp0_5 = this.v1i_1;
        var tmp2_0 = unit_0.coordinates;
        var tmp7_coordinates = unit_0.coordinates;
        var tmp8_playerId = unit_0.playerId;
        // Inline function 'kotlin.collections.set' call
        var value_0 = new City(VOID, tmp8_playerId, tmp7_coordinates);
        tmp0_5.l2(tmp2_0, value_0);
        var tmp_17 = this.q1i_1.p1j([unit_0.coordinates]);
        triggerEvent(this, tmp_17, GameApi$execute$lambda_0(unit_0));
        recalculateVision$default(this);
        this.u1i_1.l1k(unit_0.playerId);
        this.t1i_1.u1j(this.citiesFor(this.currentPlayer.playerId), this.w1i_1.k2());
        recalculateScore(this);
        this.o1i_1.x1j([this.currentPlayer, 'Settlement created', this.v1i_1.i2(unit_0.coordinates)]);
      } else {
        if (action instanceof Build) {
          if (!this.canBuild(action.coordinates, this.currentPlayer.playerId)) {
            return Companion_instance_1.fail('Cannot build on this tile');
          }
          var tile_0 = require_0(this.p1i_1.i1i(action.coordinates));
          if (tile_0.buildings.r(action.building)) {
            return Companion_instance_1.fail('This building is already built', 'This building is already built');
          }
          if (!action.building.tileRequirement(tile_0) || !action.building.unlockRequirement(tile_0)) {
            return Companion_instance_1.exception('Cannot build ' + action.building.toString() + ', requirements not met');
          }
          var stocks = this.t1i_1.y1h(this.currentPlayer.playerId);
          if (!stocks.canSubstract(action.building.cost)) {
            return Companion_instance_1.fail('Not enough resources', 'Cannot build ' + action.building.toString() + ', not enough resources');
          }
          this.t1i_1.i1k(this.currentPlayer.playerId, action.building.cost, false);
          this.p1i_1.j1k(action.coordinates, action.building);
          this.o1i_1.x1j([this.currentPlayer, 'Built', action.building, 'at', action.coordinates]);
          var tmp10_safe_receiver;
          switch (action.building.o2_1) {
            case 1:
              tmp10_safe_receiver = CityLevel_TOWN_getInstance();
              break;
            case 2:
              tmp10_safe_receiver = CityLevel_CITY_getInstance();
              break;
            default:
              tmp10_safe_receiver = null;
              break;
          }
          if (tmp10_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            var newCityLevel = tmp10_safe_receiver;
            var city = getValue(this.v1i_1, action.coordinates);
            var tmp0_6 = this.v1i_1;
            var tmp2_1 = action.coordinates;
            // Inline function 'kotlin.collections.set' call
            var value_1 = city.copy(VOID, VOID, VOID, newCityLevel);
            tmp0_6.l2(tmp2_1, value_1);
          }
          recalculateVision$default(this);
          this.u1i_1.k1k(this.currentPlayer.playerId, action.building);
          recalculateScore(this);
          this.t1i_1.u1j(this.citiesFor(this.currentPlayer.playerId), this.w1i_1.k2());
        } else {
          if (action instanceof Recruit) {
            var tile_1 = require_0(this.p1i_1.i1i(action.coordinates));
            if (!action.unitType.buildingRequirement(tile_1.buildings)) {
              return Companion_instance_1.exception('Cannot recruit ' + action.unitType.toString() + ', requirements not met');
            }
            if (tile_1.isBusy) {
              return Companion_instance_1.exception('Cannot recruit ' + action.unitType.toString() + ', tile is occupied');
            }
            var stocks_0 = this.t1i_1.y1h(this.currentPlayer.playerId);
            if (!stocks_0.canSubstract(action.unitType.cost)) {
              return Companion_instance_1.fail('Not enough resources', 'Cannot build ' + action.unitType.toString() + ', not enough resources');
            }
            this.t1i_1.g1k(this.currentPlayer.playerId, action.unitType.cost);
            var newUnit = new CivUnit(VOID, action.unitType, this.currentPlayer.playerId, action.coordinates, VOID, 0, false);
            var tmp0_7 = this.w1i_1;
            // Inline function 'kotlin.collections.set' call
            var key = action.coordinates;
            tmp0_7.l2(key, newUnit);
            this.p1i_1.n1j(action.coordinates, true);
            var tmp_18 = this.q1i_1.p1j([newUnit.coordinates]);
            triggerEvent(this, tmp_18, GameApi$execute$lambda_1(newUnit));
            recalculateVision$default(this);
            this.u1i_1.h1k(this.currentPlayer.playerId);
            recalculateScore(this);
            this.o1i_1.x1j([this.currentPlayer, 'Recruited', newUnit, 'at', newUnit.coordinates]);
          } else {
            if (action instanceof Attack) {
              var tmp0_8 = this.w1i_1.k2();
              var tmp$ret$54;
              $l$block_6: {
                // Inline function 'kotlin.collections.firstOrNull' call
                var _iterator__ex2g4s_12 = tmp0_8.j();
                while (_iterator__ex2g4s_12.k()) {
                  var element_12 = _iterator__ex2g4s_12.l();
                  if (element_12.unitId === action.unitId) {
                    tmp$ret$54 = element_12;
                    break $l$block_6;
                  }
                }
                tmp$ret$54 = null;
              }
              var tmp11_safe_receiver = tmp$ret$54;
              var tmp_19;
              if (tmp11_safe_receiver == null) {
                tmp_19 = null;
              } else {
                // Inline function 'kotlin.takeIf' call
                var tmp_20;
                if (tmp11_safe_receiver.playerId === this.currentPlayer.playerId) {
                  tmp_20 = tmp11_safe_receiver;
                } else {
                  tmp_20 = null;
                }
                tmp_19 = tmp_20;
              }
              var tmp12_elvis_lhs = tmp_19;
              var tmp_21;
              if (tmp12_elvis_lhs == null) {
                return Companion_instance_1.exception('Unit ' + action.unitId + ' not found for current player');
              } else {
                tmp_21 = tmp12_elvis_lhs;
              }
              var attacker = tmp_21;
              if (!attacker.actionPoint) {
                return Companion_instance_1.fail('Not enough action points');
              }
              if (attacker.attack === 0) {
                return Companion_instance_1.exception('This unit (' + attacker.unitType.toString() + ') cannot attack');
              }
              var tmp13_elvis_lhs = this.w1i_1.i2(action.targetCoordinates);
              var tmp_22;
              if (tmp13_elvis_lhs == null) {
                return Companion_instance_1.exception('Target unit not found at ' + action.targetCoordinates.toString());
              } else {
                tmp_22 = tmp13_elvis_lhs;
              }
              var defender = tmp_22;
              if (defender.playerId === attacker.playerId) {
                return Companion_instance_1.exception('Cannot attack own unit');
              }
              var paths_0 = this.actionsForUnit(playerId, attacker.unitId);
              var tmp14_elvis_lhs = paths_0.getPath(action.targetCoordinates);
              var tmp_23;
              if (tmp14_elvis_lhs == null) {
                return Companion_instance_1.exception('No valid attack path for ' + action.targetCoordinates.toString());
              } else {
                tmp_23 = tmp14_elvis_lhs;
              }
              var path_0 = tmp_23;
              var tmp15_safe_receiver = lastOrNull(dropLast(path_0, 1));
              var tmp_24;
              if (tmp15_safe_receiver == null) {
                tmp_24 = null;
              } else {
                // Inline function 'kotlin.let' call
                this.execute(playerId, new Move(attacker.unitId, tmp15_safe_receiver.coordinates));
                var tmp0_9 = this.w1i_1.k2();
                var tmp$ret$58;
                $l$block_7: {
                  // Inline function 'kotlin.collections.first' call
                  var _iterator__ex2g4s_13 = tmp0_9.j();
                  while (_iterator__ex2g4s_13.k()) {
                    var element_13 = _iterator__ex2g4s_13.l();
                    if (element_13.unitId === attacker.unitId) {
                      tmp$ret$58 = element_13;
                      break $l$block_7;
                    }
                  }
                  throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
                }
                var movedAttacker = tmp$ret$58;
                executeAttack(this, movedAttacker, defender);
                tmp_24 = Unit_instance;
              }
              if (tmp_24 == null) {
                // Inline function 'kotlin.run' call
                executeAttack(this, attacker, defender);
              }
            } else {
              if (action instanceof Conquer) {
                var tmp17_safe_receiver = this.w1i_1.i2(action.coordinates);
                var tmp_25;
                if (tmp17_safe_receiver == null) {
                  tmp_25 = null;
                } else {
                  // Inline function 'kotlin.takeIf' call
                  var tmp_26;
                  if (tmp17_safe_receiver.playerId === this.currentPlayer.playerId) {
                    tmp_26 = tmp17_safe_receiver;
                  } else {
                    tmp_26 = null;
                  }
                  tmp_25 = tmp_26;
                }
                var tmp18_elvis_lhs = tmp_25;
                var tmp_27;
                if (tmp18_elvis_lhs == null) {
                  return Companion_instance_1.exception('Unit not found for current player');
                } else {
                  tmp_27 = tmp18_elvis_lhs;
                }
                var attacker_0 = tmp_27;
                var tmp19_elvis_lhs = this.v1i_1.i2(action.coordinates);
                var tmp_28;
                if (tmp19_elvis_lhs == null) {
                  return Companion_instance_1.exception('City not found at ' + action.coordinates.toString());
                } else {
                  tmp_28 = tmp19_elvis_lhs;
                }
                var originalCity = tmp_28;
                var tmp0_10 = this.v1i_1;
                var tmp2_2 = action.coordinates;
                // Inline function 'kotlin.collections.set' call
                var value_2 = originalCity.copy(VOID, attacker_0.playerId);
                tmp0_10.l2(tmp2_2, value_2);
                var updatedAttacker = attacker_0.copy(VOID, VOID, VOID, VOID, VOID, VOID, false, None_getInstance_0());
                var tmp0_11 = this.w1i_1;
                // Inline function 'kotlin.collections.set' call
                var key_0 = action.coordinates;
                tmp0_11.l2(key_0, updatedAttacker);
                var tmp_29 = this.q1i_1.p1j([updatedAttacker.coordinates]);
                triggerEvent(this, tmp_29, GameApi$execute$lambda_2(this, updatedAttacker));
                recalculateVision$default(this);
                this.u1i_1.f1k(this.currentPlayer.playerId);
                this.t1i_1.u1j(this.citiesFor(originalCity.playerId), this.w1i_1.k2());
                this.t1i_1.u1j(this.citiesFor(this.currentPlayer.playerId), this.w1i_1.k2());
                recalculateScore(this);
                this.o1i_1.x1j([this.currentPlayer, updatedAttacker, 'conquered', this.v1i_1.i2(action.coordinates)]);
              } else {
                if (action instanceof Disband) {
                  var tmp0_12 = this.w1i_1.k2();
                  var tmp$ret$68;
                  $l$block_8: {
                    // Inline function 'kotlin.collections.firstOrNull' call
                    var _iterator__ex2g4s_14 = tmp0_12.j();
                    while (_iterator__ex2g4s_14.k()) {
                      var element_14 = _iterator__ex2g4s_14.l();
                      if (element_14.unitId === action.unitId) {
                        tmp$ret$68 = element_14;
                        break $l$block_8;
                      }
                    }
                    tmp$ret$68 = null;
                  }
                  var tmp20_safe_receiver = tmp$ret$68;
                  var tmp_30;
                  if (tmp20_safe_receiver == null) {
                    tmp_30 = null;
                  } else {
                    // Inline function 'kotlin.takeIf' call
                    var tmp_31;
                    if (tmp20_safe_receiver.playerId === this.currentPlayer.playerId) {
                      tmp_31 = tmp20_safe_receiver;
                    } else {
                      tmp_31 = null;
                    }
                    tmp_30 = tmp_31;
                  }
                  var tmp21_elvis_lhs = tmp_30;
                  var tmp_32;
                  if (tmp21_elvis_lhs == null) {
                    return Companion_instance_1.exception('Unit not found for current player');
                  } else {
                    tmp_32 = tmp21_elvis_lhs;
                  }
                  var unit_1 = tmp_32;
                  this.w1i_1.m2(unit_1.coordinates);
                  this.p1i_1.n1j(unit_1.coordinates, false);
                  recalculateVision$default(this);
                  this.t1i_1.u1j(this.citiesFor(this.currentPlayer.playerId), this.w1i_1.k2());
                  recalculateScore(this);
                  var tmp_33 = this.q1i_1.p1j([unit_1.coordinates]);
                  triggerEvent(this, tmp_33, GameApi$execute$lambda_3(this, unit_1));
                  this.o1i_1.x1j([this.currentPlayer, 'disbanded', unit_1]);
                } else {
                  noWhenBranchMatchedException();
                }
              }
            }
          }
        }
      }
    }
    return Companion_instance_1.success();
  };
  protoOf(GameApi).endTurn = function (playerId) {
    if (!(first(this.l1i_1).playerId === playerId)) {
      // Inline function 'kotlin.error' call
      var message = 'Not your turn';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    verifyIntegrity(this);
    var removed = this.l1i_1.d2(0);
    this.l1i_1.e(removed);
    this.o1i_1.x1j([removed, 'ended turn']);
    this.u1i_1.o1k(removed.playerId, this.t1i_1.c1k(playerId));
    var tmp0 = this.w1i_1.k2();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.p();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var count = 0;
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        if (element.playerId === this.currentPlayer.playerId) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$0 = count;
    }
    var tmp_0 = tmp$ret$0;
    var tmp0_0 = this.v1i_1.k2();
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.collections.count' call
      var tmp_1;
      if (isInterface(tmp0_0, Collection)) {
        tmp_1 = tmp0_0.p();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$2 = 0;
        break $l$block_0;
      }
      var count_0 = 0;
      var _iterator__ex2g4s_0 = tmp0_0.j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        if (element_0.playerId === this.currentPlayer.playerId) {
          count_0 = count_0 + 1 | 0;
          checkCountOverflow(count_0);
        }
      }
      tmp$ret$2 = count_0;
    }
    if ((tmp_0 + tmp$ret$2 | 0) === 0) {
      println('Player ' + this.currentPlayer.toString() + ' is defeated, skipping turn');
      this.endTurn(this.currentPlayer.playerId);
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = this.unitsFor(this.currentPlayer.playerId).j();
    while (_iterator__ex2g4s_1.k()) {
      var element_1 = _iterator__ex2g4s_1.l();
      var updatedUnit = element_1.copy(VOID, VOID, VOID, VOID, VOID, Companion_getInstance_12().speedToMovement(element_1.speed), true, element_1.conquerState.onTurnPassed());
      this.w1i_1.l2(element_1.coordinates, updatedUnit);
      var tmp_2 = this.q1i_1.p1j([updatedUnit.coordinates]);
      triggerEvent(this, tmp_2, GameApi$endTurn$lambda(this, updatedUnit));
    }
    this.t1i_1.p1k(this.citiesFor(this.currentPlayer.playerId), this.w1i_1.k2());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_2 = this.m1i_1.j();
    while (_iterator__ex2g4s_2.k()) {
      var element_2 = _iterator__ex2g4s_2.l();
      element_2.z1i_1(new TurnEndedEvent(this.currentPlayer.playerId, this.u1i_1.q1k(this.currentPlayer.playerId)));
    }
    var tmp0_safe_receiver = this.x1i_1.i2(this.currentPlayer.playerId);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.i1g();
    }
  };
  protoOf(GameApi).generateGameState = function () {
    var tmp = toSet(this.p1i_1.g1i_1.k2());
    var tmp_0 = toSet(this.v1i_1.k2());
    var tmp_1 = toSet(this.w1i_1.k2());
    // Inline function 'kotlin.collections.associate' call
    var this_0 = this.l1i_1;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = this_0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element.playerId, this.t1i_1.y1h(element.playerId));
      destination.l2(pair.qd_1, pair.rd_1);
    }
    return new GameState(this.l1i_1, tmp, tmp_0, tmp_1, destination, Companion_instance_0.y1e(this.k1i_1), VOID, this.q1i_1.j1j(), this.u1i_1.j1j());
  };
  function require_0(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 == null) {
      throw NullPointerException_init_$Create$();
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function LogMessage(tokens) {
    this.r1k_1 = tokens;
  }
  function GameLogImpl() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.v1j_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.w1j_1 = ArrayList_init_$Create$();
  }
  protoOf(GameLogImpl).x1j = function (tokens) {
    this.s1k(new LogMessage(tokens.slice()));
  };
  protoOf(GameLogImpl).s1k = function (message) {
    this.v1j_1.e(message);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.w1j_1.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      element.t1k(message);
    }
  };
  protoOf(GameLogImpl).a1k = function (listener) {
    this.w1j_1.e(listener);
  };
  function GameState$Companion$$childSerializers$_anonymous__fsf5pn() {
    return new ArrayListSerializer($serializer_getInstance_7());
  }
  function GameState$Companion$$childSerializers$_anonymous__fsf5pn_0() {
    return new LinkedHashSetSerializer(Companion_getInstance_17().a16());
  }
  function GameState$Companion$$childSerializers$_anonymous__fsf5pn_1() {
    return new LinkedHashSetSerializer($serializer_getInstance_4());
  }
  function GameState$Companion$$childSerializers$_anonymous__fsf5pn_2() {
    return new LinkedHashSetSerializer($serializer_getInstance_5());
  }
  function GameState$Companion$$childSerializers$_anonymous__fsf5pn_3() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_8());
  }
  function GameState$Companion$$childSerializers$_anonymous__fsf5pn_4() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_1());
  }
  function GameState$Companion$$childSerializers$_anonymous__fsf5pn_5() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_2());
  }
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, GameState$Companion$$childSerializers$_anonymous__fsf5pn);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, GameState$Companion$$childSerializers$_anonymous__fsf5pn_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, GameState$Companion$$childSerializers$_anonymous__fsf5pn_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, GameState$Companion$$childSerializers$_anonymous__fsf5pn_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_9 = lazy(tmp_8, GameState$Companion$$childSerializers$_anonymous__fsf5pn_3);
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_11 = lazy(tmp_10, GameState$Companion$$childSerializers$_anonymous__fsf5pn_4);
    var tmp_12 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v1k_1 = [tmp_1, tmp_3, tmp_5, tmp_7, tmp_9, null, null, tmp_11, lazy(tmp_12, GameState$Companion$$childSerializers$_anonymous__fsf5pn_5), null, null];
  }
  protoOf(Companion_3).fromJson = function (json) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = Default_getInstance_0();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.bo();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(GameState), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      // Inline function 'kotlin.Companion.success' call
      var value = this_0.l14(tmp$ret$1, json);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    // Inline function 'kotlin.onFailure' call
    var this_3 = tmp;
    var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      println('Failed to load game state: ' + tmp0_safe_receiver.toString());
    }
    // Inline function 'kotlin.Result.getOrNull' call
    var tmp_1;
    if (_Result___get_isFailure__impl__jpiriv(this_3)) {
      tmp_1 = null;
    } else {
      var tmp_2 = _Result___get_value__impl__bjfvqg(this_3);
      tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    }
    return tmp_1;
  };
  protoOf(Companion_3).a16 = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('civ.core.GameState', this, 11);
    tmp0_serialDesc.cv('players', false);
    tmp0_serialDesc.cv('tileList', false);
    tmp0_serialDesc.cv('cities', false);
    tmp0_serialDesc.cv('units', false);
    tmp0_serialDesc.cv('stock', false);
    tmp0_serialDesc.cv('mapSeed', false);
    tmp0_serialDesc.cv('focusedTile', true);
    tmp0_serialDesc.cv('visionData', true);
    tmp0_serialDesc.cv('statistics', true);
    tmp0_serialDesc.cv('gameVersion', true);
    tmp0_serialDesc.cv('timestamp', true);
    this.w1k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).x1k = function (encoder, value) {
    var tmp0_desc = this.w1k_1;
    var tmp1_output = encoder.mn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().v1k_1;
    tmp1_output.dp(tmp0_desc, 0, tmp2_cached[0].f2(), value.players);
    tmp1_output.dp(tmp0_desc, 1, tmp2_cached[1].f2(), value.tileList);
    tmp1_output.dp(tmp0_desc, 2, tmp2_cached[2].f2(), value.cities);
    tmp1_output.dp(tmp0_desc, 3, tmp2_cached[3].f2(), value.units);
    tmp1_output.dp(tmp0_desc, 4, tmp2_cached[4].f2(), value.stock);
    tmp1_output.dp(tmp0_desc, 5, $serializer_getInstance(), value.mapSeed);
    if (tmp1_output.jp(tmp0_desc, 6) ? true : !(value.focusedTile == null)) {
      tmp1_output.fp(tmp0_desc, 6, $serializer_getInstance_3(), value.focusedTile);
    }
    if (tmp1_output.jp(tmp0_desc, 7) ? true : !(value.visionData == null)) {
      tmp1_output.fp(tmp0_desc, 7, tmp2_cached[7].f2(), value.visionData);
    }
    if (tmp1_output.jp(tmp0_desc, 8) ? true : !(value.statistics == null)) {
      tmp1_output.fp(tmp0_desc, 8, tmp2_cached[8].f2(), value.statistics);
    }
    if (tmp1_output.jp(tmp0_desc, 9) ? true : !(value.gameVersion === '0.1')) {
      tmp1_output.bp(tmp0_desc, 9, value.gameVersion);
    }
    if (tmp1_output.jp(tmp0_desc, 10) ? true : !equals(value.timestamp, Companion_instance_0.y1e(System_instance.og().bh()))) {
      tmp1_output.dp(tmp0_desc, 10, $serializer_getInstance(), value.timestamp);
    }
    tmp1_output.nn(tmp0_desc);
  };
  protoOf($serializer_0).gk = function (encoder, value) {
    return this.x1k(encoder, value instanceof GameState ? value : THROW_CCE());
  };
  protoOf($serializer_0).hk = function (decoder) {
    var tmp0_desc = this.w1k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_input = decoder.mn(tmp0_desc);
    var tmp16_cached = Companion_getInstance_5().v1k_1;
    if (tmp15_input.co()) {
      tmp4_local0 = tmp15_input.yn(tmp0_desc, 0, tmp16_cached[0].f2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.yn(tmp0_desc, 1, tmp16_cached[1].f2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.yn(tmp0_desc, 2, tmp16_cached[2].f2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.yn(tmp0_desc, 3, tmp16_cached[3].f2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.yn(tmp0_desc, 4, tmp16_cached[4].f2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.yn(tmp0_desc, 5, $serializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.ao(tmp0_desc, 6, $serializer_getInstance_3(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.ao(tmp0_desc, 7, tmp16_cached[7].f2(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.ao(tmp0_desc, 8, tmp16_cached[8].f2(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.wn(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.yn(tmp0_desc, 10, $serializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.do(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.yn(tmp0_desc, 0, tmp16_cached[0].f2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.yn(tmp0_desc, 1, tmp16_cached[1].f2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.yn(tmp0_desc, 2, tmp16_cached[2].f2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.yn(tmp0_desc, 3, tmp16_cached[3].f2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.yn(tmp0_desc, 4, tmp16_cached[4].f2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.yn(tmp0_desc, 5, $serializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.ao(tmp0_desc, 6, $serializer_getInstance_3(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.ao(tmp0_desc, 7, tmp16_cached[7].f2(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.ao(tmp0_desc, 8, tmp16_cached[8].f2(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.wn(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.yn(tmp0_desc, 10, $serializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp15_input.nn(tmp0_desc);
    return GameState_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  };
  protoOf($serializer_0).fk = function () {
    return this.w1k_1;
  };
  protoOf($serializer_0).rv = function () {
    var tmp0_cached = Companion_getInstance_5().v1k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].f2(), tmp0_cached[1].f2(), tmp0_cached[2].f2(), tmp0_cached[3].f2(), tmp0_cached[4].f2(), $serializer_getInstance(), get_nullable($serializer_getInstance_3()), get_nullable(tmp0_cached[7].f2()), get_nullable(tmp0_cached[8].f2()), StringSerializer_getInstance(), $serializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function GameState_init_$Init$(seen0, players, tileList, cities, units, stock, mapSeed, focusedTile, visionData, statistics, gameVersion, timestamp, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance_0().w1k_1);
    }
    $this.players = players;
    $this.tileList = tileList;
    $this.cities = cities;
    $this.units = units;
    $this.stock = stock;
    $this.mapSeed = mapSeed;
    if (0 === (seen0 & 64))
      $this.focusedTile = null;
    else
      $this.focusedTile = focusedTile;
    if (0 === (seen0 & 128))
      $this.visionData = null;
    else
      $this.visionData = visionData;
    if (0 === (seen0 & 256))
      $this.statistics = null;
    else
      $this.statistics = statistics;
    if (0 === (seen0 & 512))
      $this.gameVersion = '0.1';
    else
      $this.gameVersion = gameVersion;
    if (0 === (seen0 & 1024))
      $this.timestamp = Companion_instance_0.y1e(System_instance.og().bh());
    else
      $this.timestamp = timestamp;
    return $this;
  }
  function GameState_init_$Create$(seen0, players, tileList, cities, units, stock, mapSeed, focusedTile, visionData, statistics, gameVersion, timestamp, serializationConstructorMarker) {
    return GameState_init_$Init$(seen0, players, tileList, cities, units, stock, mapSeed, focusedTile, visionData, statistics, gameVersion, timestamp, serializationConstructorMarker, objectCreate(protoOf(GameState)));
  }
  function GameState(players, tileList, cities, units, stock, mapSeed, focusedTile, visionData, statistics, gameVersion, timestamp) {
    Companion_getInstance_5();
    focusedTile = focusedTile === VOID ? null : focusedTile;
    visionData = visionData === VOID ? null : visionData;
    statistics = statistics === VOID ? null : statistics;
    gameVersion = gameVersion === VOID ? '0.1' : gameVersion;
    timestamp = timestamp === VOID ? Companion_instance_0.y1e(System_instance.og().bh()) : timestamp;
    this.players = players;
    this.tileList = tileList;
    this.cities = cities;
    this.units = units;
    this.stock = stock;
    this.mapSeed = mapSeed;
    this.focusedTile = focusedTile;
    this.visionData = visionData;
    this.statistics = statistics;
    this.gameVersion = gameVersion;
    this.timestamp = timestamp;
  }
  protoOf(GameState).y1k = function () {
    return this.players;
  };
  protoOf(GameState).z1k = function () {
    return this.tileList;
  };
  protoOf(GameState).a1l = function () {
    return this.cities;
  };
  protoOf(GameState).b1l = function () {
    return this.units;
  };
  protoOf(GameState).c1l = function () {
    return this.stock;
  };
  protoOf(GameState).d1l = function () {
    return this.mapSeed;
  };
  protoOf(GameState).e1l = function () {
    return this.focusedTile;
  };
  protoOf(GameState).f1l = function () {
    return this.visionData;
  };
  protoOf(GameState).g1l = function () {
    return this.statistics;
  };
  protoOf(GameState).h1l = function () {
    return this.gameVersion;
  };
  protoOf(GameState).i1l = function () {
    return this.timestamp;
  };
  protoOf(GameState).toJson = function () {
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = Default_getInstance_0();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.bo();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(GameState), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    return this_0.k14(tmp$ret$1, this);
  };
  protoOf(GameState).sd = function () {
    return this.players;
  };
  protoOf(GameState).td = function () {
    return this.tileList;
  };
  protoOf(GameState).i1f = function () {
    return this.cities;
  };
  protoOf(GameState).j1l = function () {
    return this.units;
  };
  protoOf(GameState).k1l = function () {
    return this.stock;
  };
  protoOf(GameState).l1l = function () {
    return this.mapSeed;
  };
  protoOf(GameState).m1l = function () {
    return this.focusedTile;
  };
  protoOf(GameState).n1l = function () {
    return this.visionData;
  };
  protoOf(GameState).o1l = function () {
    return this.statistics;
  };
  protoOf(GameState).p1l = function () {
    return this.gameVersion;
  };
  protoOf(GameState).q1l = function () {
    return this.timestamp;
  };
  protoOf(GameState).r1l = function (players, tileList, cities, units, stock, mapSeed, focusedTile, visionData, statistics, gameVersion, timestamp) {
    return new GameState(players, tileList, cities, units, stock, mapSeed, focusedTile, visionData, statistics, gameVersion, timestamp);
  };
  protoOf(GameState).copy = function (players, tileList, cities, units, stock, mapSeed, focusedTile, visionData, statistics, gameVersion, timestamp, $super) {
    players = players === VOID ? this.players : players;
    tileList = tileList === VOID ? this.tileList : tileList;
    cities = cities === VOID ? this.cities : cities;
    units = units === VOID ? this.units : units;
    stock = stock === VOID ? this.stock : stock;
    mapSeed = mapSeed === VOID ? this.mapSeed : mapSeed;
    focusedTile = focusedTile === VOID ? this.focusedTile : focusedTile;
    visionData = visionData === VOID ? this.visionData : visionData;
    statistics = statistics === VOID ? this.statistics : statistics;
    gameVersion = gameVersion === VOID ? this.gameVersion : gameVersion;
    timestamp = timestamp === VOID ? this.timestamp : timestamp;
    return $super === VOID ? this.r1l(players, tileList, cities, units, stock, mapSeed, focusedTile, visionData, statistics, gameVersion, timestamp) : $super.r1l.call(this, players, tileList, cities, units, stock, mapSeed, focusedTile, visionData, statistics, gameVersion, timestamp);
  };
  protoOf(GameState).toString = function () {
    return 'GameState(players=' + toString_0(this.players) + ', tileList=' + toString_0(this.tileList) + ', cities=' + toString_0(this.cities) + ', units=' + toString_0(this.units) + ', stock=' + toString_0(this.stock) + ', mapSeed=' + this.mapSeed.toString() + ', focusedTile=' + toString(this.focusedTile) + ', visionData=' + toString(this.visionData) + ', statistics=' + toString(this.statistics) + ', gameVersion=' + this.gameVersion + ', timestamp=' + this.timestamp.toString() + ')';
  };
  protoOf(GameState).hashCode = function () {
    var result = hashCode(this.players);
    result = imul(result, 31) + hashCode(this.tileList) | 0;
    result = imul(result, 31) + hashCode(this.cities) | 0;
    result = imul(result, 31) + hashCode(this.units) | 0;
    result = imul(result, 31) + hashCode(this.stock) | 0;
    result = imul(result, 31) + hashCode(this.mapSeed) | 0;
    result = imul(result, 31) + (this.focusedTile == null ? 0 : this.focusedTile.hashCode()) | 0;
    result = imul(result, 31) + (this.visionData == null ? 0 : hashCode(this.visionData)) | 0;
    result = imul(result, 31) + (this.statistics == null ? 0 : hashCode(this.statistics)) | 0;
    result = imul(result, 31) + getStringHashCode(this.gameVersion) | 0;
    result = imul(result, 31) + hashCode(this.timestamp) | 0;
    return result;
  };
  protoOf(GameState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GameState))
      return false;
    var tmp0_other_with_cast = other instanceof GameState ? other : THROW_CCE();
    if (!equals(this.players, tmp0_other_with_cast.players))
      return false;
    if (!equals(this.tileList, tmp0_other_with_cast.tileList))
      return false;
    if (!equals(this.cities, tmp0_other_with_cast.cities))
      return false;
    if (!equals(this.units, tmp0_other_with_cast.units))
      return false;
    if (!equals(this.stock, tmp0_other_with_cast.stock))
      return false;
    if (!equals(this.mapSeed, tmp0_other_with_cast.mapSeed))
      return false;
    if (!equals(this.focusedTile, tmp0_other_with_cast.focusedTile))
      return false;
    if (!equals(this.visionData, tmp0_other_with_cast.visionData))
      return false;
    if (!equals(this.statistics, tmp0_other_with_cast.statistics))
      return false;
    if (!(this.gameVersion === tmp0_other_with_cast.gameVersion))
      return false;
    if (!equals(this.timestamp, tmp0_other_with_cast.timestamp))
      return false;
    return true;
  };
  function GameStateVisionData$Companion$$childSerializers$_anonymous__rnzvyx() {
    return new LinkedHashSetSerializer($serializer_getInstance_3());
  }
  function GameStateVisionData$Companion$$childSerializers$_anonymous__rnzvyx_0() {
    return new LinkedHashSetSerializer($serializer_getInstance_3());
  }
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, GameStateVisionData$Companion$$childSerializers$_anonymous__rnzvyx);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s1l_1 = [tmp_1, lazy(tmp_2, GameStateVisionData$Companion$$childSerializers$_anonymous__rnzvyx_0)];
  }
  protoOf(Companion_4).a16 = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('civ.core.GameStateVisionData', this, 2);
    tmp0_serialDesc.cv('visible', false);
    tmp0_serialDesc.cv('discovered', false);
    this.t1l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).u1l = function (encoder, value) {
    var tmp0_desc = this.t1l_1;
    var tmp1_output = encoder.mn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().s1l_1;
    tmp1_output.dp(tmp0_desc, 0, tmp2_cached[0].f2(), value.visible);
    tmp1_output.dp(tmp0_desc, 1, tmp2_cached[1].f2(), value.discovered);
    tmp1_output.nn(tmp0_desc);
  };
  protoOf($serializer_1).gk = function (encoder, value) {
    return this.u1l(encoder, value instanceof GameStateVisionData ? value : THROW_CCE());
  };
  protoOf($serializer_1).hk = function (decoder) {
    var tmp0_desc = this.t1l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.mn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_6().s1l_1;
    if (tmp6_input.co()) {
      tmp4_local0 = tmp6_input.yn(tmp0_desc, 0, tmp7_cached[0].f2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.yn(tmp0_desc, 1, tmp7_cached[1].f2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.do(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.yn(tmp0_desc, 0, tmp7_cached[0].f2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.yn(tmp0_desc, 1, tmp7_cached[1].f2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.nn(tmp0_desc);
    return GameStateVisionData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_1).fk = function () {
    return this.t1l_1;
  };
  protoOf($serializer_1).rv = function () {
    var tmp0_cached = Companion_getInstance_6().s1l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].f2(), tmp0_cached[1].f2()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function GameStateVisionData_init_$Init$(seen0, visible, discovered, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_1().t1l_1);
    }
    $this.visible = visible;
    $this.discovered = discovered;
    return $this;
  }
  function GameStateVisionData_init_$Create$(seen0, visible, discovered, serializationConstructorMarker) {
    return GameStateVisionData_init_$Init$(seen0, visible, discovered, serializationConstructorMarker, objectCreate(protoOf(GameStateVisionData)));
  }
  function GameStateVisionData(visible, discovered) {
    Companion_getInstance_6();
    this.visible = visible;
    this.discovered = discovered;
  }
  protoOf(GameStateVisionData).v1l = function () {
    return this.visible;
  };
  protoOf(GameStateVisionData).w1l = function () {
    return this.discovered;
  };
  protoOf(GameStateVisionData).sd = function () {
    return this.visible;
  };
  protoOf(GameStateVisionData).td = function () {
    return this.discovered;
  };
  protoOf(GameStateVisionData).x1l = function (visible, discovered) {
    return new GameStateVisionData(visible, discovered);
  };
  protoOf(GameStateVisionData).copy = function (visible, discovered, $super) {
    visible = visible === VOID ? this.visible : visible;
    discovered = discovered === VOID ? this.discovered : discovered;
    return $super === VOID ? this.x1l(visible, discovered) : $super.x1l.call(this, visible, discovered);
  };
  protoOf(GameStateVisionData).toString = function () {
    return 'GameStateVisionData(visible=' + toString_0(this.visible) + ', discovered=' + toString_0(this.discovered) + ')';
  };
  protoOf(GameStateVisionData).hashCode = function () {
    var result = hashCode(this.visible);
    result = imul(result, 31) + hashCode(this.discovered) | 0;
    return result;
  };
  protoOf(GameStateVisionData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GameStateVisionData))
      return false;
    var tmp0_other_with_cast = other instanceof GameStateVisionData ? other : THROW_CCE();
    if (!equals(this.visible, tmp0_other_with_cast.visible))
      return false;
    if (!equals(this.discovered, tmp0_other_with_cast.discovered))
      return false;
    return true;
  };
  function SimpleStats(points, isDefeated) {
    this.points = points;
    this.isDefeated = isDefeated;
  }
  protoOf(SimpleStats).y1l = function () {
    return this.points;
  };
  protoOf(SimpleStats).z1l = function () {
    return this.isDefeated;
  };
  protoOf(SimpleStats).sd = function () {
    return this.points;
  };
  protoOf(SimpleStats).td = function () {
    return this.isDefeated;
  };
  protoOf(SimpleStats).a1m = function (points, isDefeated) {
    return new SimpleStats(points, isDefeated);
  };
  protoOf(SimpleStats).copy = function (points, isDefeated, $super) {
    points = points === VOID ? this.points : points;
    isDefeated = isDefeated === VOID ? this.isDefeated : isDefeated;
    return $super === VOID ? this.a1m(points, isDefeated) : $super.a1m.call(this, points, isDefeated);
  };
  protoOf(SimpleStats).toString = function () {
    return 'SimpleStats(points=' + this.points + ', isDefeated=' + this.isDefeated + ')';
  };
  protoOf(SimpleStats).hashCode = function () {
    var result = this.points;
    result = imul(result, 31) + getBooleanHashCode(this.isDefeated) | 0;
    return result;
  };
  protoOf(SimpleStats).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SimpleStats))
      return false;
    var tmp0_other_with_cast = other instanceof SimpleStats ? other : THROW_CCE();
    if (!(this.points === tmp0_other_with_cast.points))
      return false;
    if (!(this.isDefeated === tmp0_other_with_cast.isDefeated))
      return false;
    return true;
  };
  function Companion_5() {
  }
  protoOf(Companion_5).a16 = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('civ.core.GameStatistics', this, 11);
    tmp0_serialDesc.cv('turnNumber', true);
    tmp0_serialDesc.cv('tilesDiscovered', true);
    tmp0_serialDesc.cv('unitsTrained', true);
    tmp0_serialDesc.cv('unitsKilled', true);
    tmp0_serialDesc.cv('unitsLost', true);
    tmp0_serialDesc.cv('buildingsBuilt', true);
    tmp0_serialDesc.cv('roadsBuilt', true);
    tmp0_serialDesc.cv('stockCollected', true);
    tmp0_serialDesc.cv('citiesFound', true);
    tmp0_serialDesc.cv('citiesConquered', true);
    tmp0_serialDesc.cv('isDefeated', true);
    this.b1m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).c1m = function (encoder, value) {
    var tmp0_desc = this.b1m_1;
    var tmp1_output = encoder.mn(tmp0_desc);
    if (tmp1_output.jp(tmp0_desc, 0) ? true : !(value.turnNumber === 0)) {
      tmp1_output.wo(tmp0_desc, 0, value.turnNumber);
    }
    if (tmp1_output.jp(tmp0_desc, 1) ? true : !(value.tilesDiscovered === 0)) {
      tmp1_output.wo(tmp0_desc, 1, value.tilesDiscovered);
    }
    if (tmp1_output.jp(tmp0_desc, 2) ? true : !(value.unitsTrained === 0)) {
      tmp1_output.wo(tmp0_desc, 2, value.unitsTrained);
    }
    if (tmp1_output.jp(tmp0_desc, 3) ? true : !(value.unitsKilled === 0)) {
      tmp1_output.wo(tmp0_desc, 3, value.unitsKilled);
    }
    if (tmp1_output.jp(tmp0_desc, 4) ? true : !(value.unitsLost === 0)) {
      tmp1_output.wo(tmp0_desc, 4, value.unitsLost);
    }
    if (tmp1_output.jp(tmp0_desc, 5) ? true : !(value.buildingsBuilt === 0)) {
      tmp1_output.wo(tmp0_desc, 5, value.buildingsBuilt);
    }
    if (tmp1_output.jp(tmp0_desc, 6) ? true : !(value.roadsBuilt === 0)) {
      tmp1_output.wo(tmp0_desc, 6, value.roadsBuilt);
    }
    if (tmp1_output.jp(tmp0_desc, 7) ? true : !value.stockCollected.equals(new Stockpiles())) {
      tmp1_output.dp(tmp0_desc, 7, $serializer_getInstance_8(), value.stockCollected);
    }
    if (tmp1_output.jp(tmp0_desc, 8) ? true : !(value.citiesFound === 0)) {
      tmp1_output.wo(tmp0_desc, 8, value.citiesFound);
    }
    if (tmp1_output.jp(tmp0_desc, 9) ? true : !(value.citiesConquered === 0)) {
      tmp1_output.wo(tmp0_desc, 9, value.citiesConquered);
    }
    if (tmp1_output.jp(tmp0_desc, 10) ? true : !(value.isDefeated === false)) {
      tmp1_output.to(tmp0_desc, 10, value.isDefeated);
    }
    tmp1_output.nn(tmp0_desc);
  };
  protoOf($serializer_2).gk = function (encoder, value) {
    return this.c1m(encoder, value instanceof GameStatistics ? value : THROW_CCE());
  };
  protoOf($serializer_2).hk = function (decoder) {
    var tmp0_desc = this.b1m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = 0;
    var tmp8_local4 = 0;
    var tmp9_local5 = 0;
    var tmp10_local6 = 0;
    var tmp11_local7 = null;
    var tmp12_local8 = 0;
    var tmp13_local9 = 0;
    var tmp14_local10 = false;
    var tmp15_input = decoder.mn(tmp0_desc);
    if (tmp15_input.co()) {
      tmp4_local0 = tmp15_input.rn(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.rn(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.rn(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.rn(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.rn(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.rn(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.rn(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.yn(tmp0_desc, 7, $serializer_getInstance_8(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.rn(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.rn(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.on(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.do(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.rn(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.rn(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.rn(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.rn(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.rn(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.rn(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.rn(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.yn(tmp0_desc, 7, $serializer_getInstance_8(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.rn(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.rn(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.on(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp15_input.nn(tmp0_desc);
    return GameStatistics_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  };
  protoOf($serializer_2).fk = function () {
    return this.b1m_1;
  };
  protoOf($serializer_2).rv = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), $serializer_getInstance_8(), IntSerializer_getInstance(), IntSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function GameStatistics_init_$Init$(seen0, turnNumber, tilesDiscovered, unitsTrained, unitsKilled, unitsLost, buildingsBuilt, roadsBuilt, stockCollected, citiesFound, citiesConquered, isDefeated, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().b1m_1);
    }
    if (0 === (seen0 & 1))
      $this.turnNumber = 0;
    else
      $this.turnNumber = turnNumber;
    if (0 === (seen0 & 2))
      $this.tilesDiscovered = 0;
    else
      $this.tilesDiscovered = tilesDiscovered;
    if (0 === (seen0 & 4))
      $this.unitsTrained = 0;
    else
      $this.unitsTrained = unitsTrained;
    if (0 === (seen0 & 8))
      $this.unitsKilled = 0;
    else
      $this.unitsKilled = unitsKilled;
    if (0 === (seen0 & 16))
      $this.unitsLost = 0;
    else
      $this.unitsLost = unitsLost;
    if (0 === (seen0 & 32))
      $this.buildingsBuilt = 0;
    else
      $this.buildingsBuilt = buildingsBuilt;
    if (0 === (seen0 & 64))
      $this.roadsBuilt = 0;
    else
      $this.roadsBuilt = roadsBuilt;
    if (0 === (seen0 & 128))
      $this.stockCollected = new Stockpiles();
    else
      $this.stockCollected = stockCollected;
    if (0 === (seen0 & 256))
      $this.citiesFound = 0;
    else
      $this.citiesFound = citiesFound;
    if (0 === (seen0 & 512))
      $this.citiesConquered = 0;
    else
      $this.citiesConquered = citiesConquered;
    if (0 === (seen0 & 1024))
      $this.isDefeated = false;
    else
      $this.isDefeated = isDefeated;
    return $this;
  }
  function GameStatistics_init_$Create$(seen0, turnNumber, tilesDiscovered, unitsTrained, unitsKilled, unitsLost, buildingsBuilt, roadsBuilt, stockCollected, citiesFound, citiesConquered, isDefeated, serializationConstructorMarker) {
    return GameStatistics_init_$Init$(seen0, turnNumber, tilesDiscovered, unitsTrained, unitsKilled, unitsLost, buildingsBuilt, roadsBuilt, stockCollected, citiesFound, citiesConquered, isDefeated, serializationConstructorMarker, objectCreate(protoOf(GameStatistics)));
  }
  function GameStatistics(turnNumber, tilesDiscovered, unitsTrained, unitsKilled, unitsLost, buildingsBuilt, roadsBuilt, stockCollected, citiesFound, citiesConquered, isDefeated) {
    turnNumber = turnNumber === VOID ? 0 : turnNumber;
    tilesDiscovered = tilesDiscovered === VOID ? 0 : tilesDiscovered;
    unitsTrained = unitsTrained === VOID ? 0 : unitsTrained;
    unitsKilled = unitsKilled === VOID ? 0 : unitsKilled;
    unitsLost = unitsLost === VOID ? 0 : unitsLost;
    buildingsBuilt = buildingsBuilt === VOID ? 0 : buildingsBuilt;
    roadsBuilt = roadsBuilt === VOID ? 0 : roadsBuilt;
    stockCollected = stockCollected === VOID ? new Stockpiles() : stockCollected;
    citiesFound = citiesFound === VOID ? 0 : citiesFound;
    citiesConquered = citiesConquered === VOID ? 0 : citiesConquered;
    isDefeated = isDefeated === VOID ? false : isDefeated;
    this.turnNumber = turnNumber;
    this.tilesDiscovered = tilesDiscovered;
    this.unitsTrained = unitsTrained;
    this.unitsKilled = unitsKilled;
    this.unitsLost = unitsLost;
    this.buildingsBuilt = buildingsBuilt;
    this.roadsBuilt = roadsBuilt;
    this.stockCollected = stockCollected;
    this.citiesFound = citiesFound;
    this.citiesConquered = citiesConquered;
    this.isDefeated = isDefeated;
  }
  protoOf(GameStatistics).d1m = function () {
    return this.turnNumber;
  };
  protoOf(GameStatistics).e1m = function () {
    return this.tilesDiscovered;
  };
  protoOf(GameStatistics).f1m = function () {
    return this.unitsTrained;
  };
  protoOf(GameStatistics).g1m = function () {
    return this.unitsKilled;
  };
  protoOf(GameStatistics).h1m = function () {
    return this.unitsLost;
  };
  protoOf(GameStatistics).i1m = function () {
    return this.buildingsBuilt;
  };
  protoOf(GameStatistics).j1m = function () {
    return this.roadsBuilt;
  };
  protoOf(GameStatistics).k1m = function () {
    return this.stockCollected;
  };
  protoOf(GameStatistics).l1m = function () {
    return this.citiesFound;
  };
  protoOf(GameStatistics).m1m = function () {
    return this.citiesConquered;
  };
  protoOf(GameStatistics).z1l = function () {
    return this.isDefeated;
  };
  protoOf(GameStatistics).sd = function () {
    return this.turnNumber;
  };
  protoOf(GameStatistics).td = function () {
    return this.tilesDiscovered;
  };
  protoOf(GameStatistics).i1f = function () {
    return this.unitsTrained;
  };
  protoOf(GameStatistics).j1l = function () {
    return this.unitsKilled;
  };
  protoOf(GameStatistics).k1l = function () {
    return this.unitsLost;
  };
  protoOf(GameStatistics).l1l = function () {
    return this.buildingsBuilt;
  };
  protoOf(GameStatistics).m1l = function () {
    return this.roadsBuilt;
  };
  protoOf(GameStatistics).n1l = function () {
    return this.stockCollected;
  };
  protoOf(GameStatistics).o1l = function () {
    return this.citiesFound;
  };
  protoOf(GameStatistics).p1l = function () {
    return this.citiesConquered;
  };
  protoOf(GameStatistics).q1l = function () {
    return this.isDefeated;
  };
  protoOf(GameStatistics).n1m = function (turnNumber, tilesDiscovered, unitsTrained, unitsKilled, unitsLost, buildingsBuilt, roadsBuilt, stockCollected, citiesFound, citiesConquered, isDefeated) {
    return new GameStatistics(turnNumber, tilesDiscovered, unitsTrained, unitsKilled, unitsLost, buildingsBuilt, roadsBuilt, stockCollected, citiesFound, citiesConquered, isDefeated);
  };
  protoOf(GameStatistics).copy = function (turnNumber, tilesDiscovered, unitsTrained, unitsKilled, unitsLost, buildingsBuilt, roadsBuilt, stockCollected, citiesFound, citiesConquered, isDefeated, $super) {
    turnNumber = turnNumber === VOID ? this.turnNumber : turnNumber;
    tilesDiscovered = tilesDiscovered === VOID ? this.tilesDiscovered : tilesDiscovered;
    unitsTrained = unitsTrained === VOID ? this.unitsTrained : unitsTrained;
    unitsKilled = unitsKilled === VOID ? this.unitsKilled : unitsKilled;
    unitsLost = unitsLost === VOID ? this.unitsLost : unitsLost;
    buildingsBuilt = buildingsBuilt === VOID ? this.buildingsBuilt : buildingsBuilt;
    roadsBuilt = roadsBuilt === VOID ? this.roadsBuilt : roadsBuilt;
    stockCollected = stockCollected === VOID ? this.stockCollected : stockCollected;
    citiesFound = citiesFound === VOID ? this.citiesFound : citiesFound;
    citiesConquered = citiesConquered === VOID ? this.citiesConquered : citiesConquered;
    isDefeated = isDefeated === VOID ? this.isDefeated : isDefeated;
    return $super === VOID ? this.n1m(turnNumber, tilesDiscovered, unitsTrained, unitsKilled, unitsLost, buildingsBuilt, roadsBuilt, stockCollected, citiesFound, citiesConquered, isDefeated) : $super.n1m.call(this, turnNumber, tilesDiscovered, unitsTrained, unitsKilled, unitsLost, buildingsBuilt, roadsBuilt, stockCollected, citiesFound, citiesConquered, isDefeated);
  };
  protoOf(GameStatistics).toString = function () {
    return 'GameStatistics(turnNumber=' + this.turnNumber + ', tilesDiscovered=' + this.tilesDiscovered + ', unitsTrained=' + this.unitsTrained + ', unitsKilled=' + this.unitsKilled + ', unitsLost=' + this.unitsLost + ', buildingsBuilt=' + this.buildingsBuilt + ', roadsBuilt=' + this.roadsBuilt + ', stockCollected=' + this.stockCollected.toString() + ', citiesFound=' + this.citiesFound + ', citiesConquered=' + this.citiesConquered + ', isDefeated=' + this.isDefeated + ')';
  };
  protoOf(GameStatistics).hashCode = function () {
    var result = this.turnNumber;
    result = imul(result, 31) + this.tilesDiscovered | 0;
    result = imul(result, 31) + this.unitsTrained | 0;
    result = imul(result, 31) + this.unitsKilled | 0;
    result = imul(result, 31) + this.unitsLost | 0;
    result = imul(result, 31) + this.buildingsBuilt | 0;
    result = imul(result, 31) + this.roadsBuilt | 0;
    result = imul(result, 31) + this.stockCollected.hashCode() | 0;
    result = imul(result, 31) + this.citiesFound | 0;
    result = imul(result, 31) + this.citiesConquered | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isDefeated) | 0;
    return result;
  };
  protoOf(GameStatistics).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GameStatistics))
      return false;
    var tmp0_other_with_cast = other instanceof GameStatistics ? other : THROW_CCE();
    if (!(this.turnNumber === tmp0_other_with_cast.turnNumber))
      return false;
    if (!(this.tilesDiscovered === tmp0_other_with_cast.tilesDiscovered))
      return false;
    if (!(this.unitsTrained === tmp0_other_with_cast.unitsTrained))
      return false;
    if (!(this.unitsKilled === tmp0_other_with_cast.unitsKilled))
      return false;
    if (!(this.unitsLost === tmp0_other_with_cast.unitsLost))
      return false;
    if (!(this.buildingsBuilt === tmp0_other_with_cast.buildingsBuilt))
      return false;
    if (!(this.roadsBuilt === tmp0_other_with_cast.roadsBuilt))
      return false;
    if (!this.stockCollected.equals(tmp0_other_with_cast.stockCollected))
      return false;
    if (!(this.citiesFound === tmp0_other_with_cast.citiesFound))
      return false;
    if (!(this.citiesConquered === tmp0_other_with_cast.citiesConquered))
      return false;
    if (!(this.isDefeated === tmp0_other_with_cast.isDefeated))
      return false;
    return true;
  };
  function edit(_this__u8e3s4, key, block) {
    // Inline function 'kotlin.collections.set' call
    var value = block(getValue(_this__u8e3s4, key));
    _this__u8e3s4.l2(key, value);
  }
  function StatisticsCounter$onTurnEnded$lambda($stockCollected) {
    return function (it) {
      return it.copy(it.turnNumber + 1 | 0, VOID, VOID, VOID, VOID, VOID, VOID, it.stockCollected.plus($stockCollected));
    };
  }
  function StatisticsCounter$onVisionChanged$lambda($count) {
    return function (it) {
      return it.copy(VOID, $count);
    };
  }
  function StatisticsCounter$onUnitRecruited$lambda(it) {
    return it.copy(VOID, VOID, it.unitsTrained + 1 | 0);
  }
  function StatisticsCounter$onUnitKilled$lambda(it) {
    return it.copy(VOID, VOID, VOID, it.unitsKilled + 1 | 0);
  }
  function StatisticsCounter$onUnitKilled$lambda_0(it) {
    return it.copy(VOID, VOID, VOID, VOID, it.unitsLost + 1 | 0);
  }
  function StatisticsCounter$onBuildingBuilt$lambda($building) {
    return function (it) {
      return it.copy(VOID, VOID, VOID, VOID, VOID, it.buildingsBuilt + ($building.equals(Building_ROAD_getInstance()) ? 0 : 1) | 0, it.roadsBuilt + ($building.equals(Building_ROAD_getInstance()) ? 1 : 0) | 0);
    };
  }
  function StatisticsCounter$onCityFound$lambda(it) {
    return it.copy(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, it.citiesFound + 1 | 0);
  }
  function StatisticsCounter$onCityConquered$lambda(it) {
    return it.copy(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, it.citiesConquered + 1 | 0);
  }
  function StatisticsCounter$recalculatePoints$lambda($isDefeated) {
    return function (it) {
      return it.copy(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, $isDefeated);
    };
  }
  function StatisticsCounter(initial, hexMap) {
    this.f1j_1 = hexMap;
    this.g1j_1 = toMutableMap(initial);
  }
  protoOf(StatisticsCounter).q1k = function (playerId) {
    return getValue(this.g1j_1, playerId).turnNumber;
  };
  protoOf(StatisticsCounter).o1k = function (playerId, stockCollected) {
    edit(this.g1j_1, playerId, StatisticsCounter$onTurnEnded$lambda(stockCollected));
  };
  protoOf(StatisticsCounter).h1j = function (discoveredCounts) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = discoveredCounts.u().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'kotlin.collections.component1' call
      var playerId = element.e2();
      // Inline function 'kotlin.collections.component2' call
      var count = element.f2();
      edit(this.g1j_1, playerId, StatisticsCounter$onVisionChanged$lambda(count));
    }
  };
  protoOf(StatisticsCounter).h1k = function (playerId) {
    edit(this.g1j_1, playerId, StatisticsCounter$onUnitRecruited$lambda);
  };
  protoOf(StatisticsCounter).o1j = function (killerPlayerId, killedPlayerId) {
    edit(this.g1j_1, killerPlayerId, StatisticsCounter$onUnitKilled$lambda);
    edit(this.g1j_1, killedPlayerId, StatisticsCounter$onUnitKilled$lambda_0);
  };
  protoOf(StatisticsCounter).k1k = function (playerId, building) {
    edit(this.g1j_1, playerId, StatisticsCounter$onBuildingBuilt$lambda(building));
  };
  protoOf(StatisticsCounter).l1k = function (playerId) {
    edit(this.g1j_1, playerId, StatisticsCounter$onCityFound$lambda);
  };
  protoOf(StatisticsCounter).f1k = function (playerId) {
    edit(this.g1j_1, playerId, StatisticsCounter$onCityConquered$lambda);
  };
  protoOf(StatisticsCounter).i1j = function (unitsFor, citiesFor) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = this.g1j_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.m()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = this_0.u().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      var tmp = element.e2();
      // Inline function 'kotlin.collections.component1' call
      var playerId = element.e2();
      // Inline function 'kotlin.collections.component2' call
      var playerStats = element.f2();
      var units = unitsFor(playerId);
      // Inline function 'kotlin.collections.sumOf' call
      var sum = 0;
      var _iterator__ex2g4s_0 = units.j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        var tmp_0 = sum;
        sum = tmp_0 + element_0.unitType.cost.total | 0;
      }
      var unitScore = sum * 0.2;
      var cities = citiesFor(playerId);
      // Inline function 'kotlin.collections.sumOf' call
      var sum_0 = 0;
      var _iterator__ex2g4s_1 = cities.j();
      while (_iterator__ex2g4s_1.k()) {
        var element_1 = _iterator__ex2g4s_1.l();
        var tmp_1 = sum_0;
        // Inline function 'kotlin.collections.mapNotNull' call
        var tmp0 = this.f1j_1.h1i(element_1.coordinates, element_1.borderRange);
        // Inline function 'kotlin.collections.mapNotNullTo' call
        var destination_0 = ArrayList_init_$Create$();
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_2 = tmp0.j();
        while (_iterator__ex2g4s_2.k()) {
          var element_2 = _iterator__ex2g4s_2.l();
          var tmp0_safe_receiver = this.f1j_1.i1i(element_2);
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            destination_0.e(tmp0_safe_receiver);
          }
        }
        // Inline function 'kotlin.collections.flatMap' call
        // Inline function 'kotlin.collections.flatMapTo' call
        var destination_1 = ArrayList_init_$Create$();
        var _iterator__ex2g4s_3 = destination_0.j();
        while (_iterator__ex2g4s_3.k()) {
          var element_3 = _iterator__ex2g4s_3.l();
          var list = toList_0(element_3.buildings);
          addAll(destination_1, list);
        }
        // Inline function 'kotlin.collections.sumOf' call
        var sum_1 = 0;
        var _iterator__ex2g4s_4 = destination_1.j();
        while (_iterator__ex2g4s_4.k()) {
          var element_4 = _iterator__ex2g4s_4.l();
          var tmp_2 = sum_1;
          sum_1 = tmp_2 + (element_4.equals(Building_VILLAGE_HALL_getInstance()) ? UnitType_SETTLERS_getInstance().cost.total : element_4.cost.total) | 0;
        }
        sum_0 = tmp_1 + sum_1 | 0;
      }
      var buildingScore = sum_0 * 0.2;
      var isDefeated = units.p() && cities.p();
      edit(this.g1j_1, playerId, StatisticsCounter$recalculatePoints$lambda(isDefeated));
      var discoveredPercent = playerStats.tilesDiscovered / this.f1j_1.g1i_1.m();
      var visionScore = discoveredPercent * 100;
      var tmp$ret$19 = new SimpleStats(numberToInt(unitScore + buildingScore + visionScore), isDefeated);
      destination.l2(tmp, tmp$ret$19);
    }
    return destination;
  };
  protoOf(StatisticsCounter).j1j = function () {
    return this.g1j_1;
  };
  function calculateIncome($this, playerCities, allUnits) {
    var tmp0_safe_receiver = firstOrNull(playerCities);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.playerId;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return new Stockpiles();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var playerId = tmp;
    var stock = new Stockpiles();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = playerCities.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'kotlin.collections.mapNotNull' call
      var tmp0 = $this.q1j_1.h1i(element.coordinates, element.borderRange);
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = tmp0.j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        var tmp0_safe_receiver_0 = $this.q1j_1.i1i(element_0);
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          destination.e(tmp0_safe_receiver_0);
        }
      }
      var tiles = destination;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_1 = tiles.j();
      while (_iterator__ex2g4s_1.k()) {
        var element_1 = _iterator__ex2g4s_1.l();
        var tmp_0;
        if (element_1.isBusy) {
          var tmp$ret$8;
          $l$block: {
            // Inline function 'kotlin.collections.first' call
            var _iterator__ex2g4s_2 = allUnits.j();
            while (_iterator__ex2g4s_2.k()) {
              var element_2 = _iterator__ex2g4s_2.l();
              if (element_2.coordinates.equals(element_1.coords)) {
                tmp$ret$8 = element_2;
                break $l$block;
              }
            }
            throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
          }
          tmp_0 = !(tmp$ret$8.playerId === playerId);
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          stock = stock.plus(getIncome(element_1));
        }
      }
    }
    // Inline function 'kotlin.also' call
    var this_0 = stock;
    var tmp0_0 = $this.t1j_1;
    // Inline function 'kotlin.collections.set' call
    var value = stock;
    tmp0_0.l2(playerId, value);
    return this_0;
  }
  function StockpilesManager(hexMap, eventListeners, stocks) {
    this.q1j_1 = hexMap;
    this.r1j_1 = eventListeners;
    this.s1j_1 = toMutableMap(stocks);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.t1j_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(StockpilesManager).y1h = function (playerId) {
    var tmp0_elvis_lhs = this.s1j_1.i2(playerId);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Stocks not found for player: ' + playerId;
      throw IllegalStateException_init_$Create$(toString_0(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(StockpilesManager).c1k = function (playerId) {
    var tmp0_elvis_lhs = this.t1j_1.i2(playerId);
    return tmp0_elvis_lhs == null ? new Stockpiles() : tmp0_elvis_lhs;
  };
  protoOf(StockpilesManager).i1k = function (playerId, amount, sendEvent) {
    var updatedStocks = this.y1h(playerId).minus(amount);
    // Inline function 'kotlin.collections.set' call
    this.s1j_1.l2(playerId, updatedStocks);
    if (sendEvent) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = this.r1j_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        if (element.y1i_1 === playerId) {
          destination.e(element);
        }
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = destination.j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        element_0.z1i_1(new StockUpdated(updatedStocks, this.c1k(playerId)));
      }
    }
  };
  protoOf(StockpilesManager).g1k = function (playerId, amount, sendEvent, $super) {
    sendEvent = sendEvent === VOID ? true : sendEvent;
    var tmp;
    if ($super === VOID) {
      this.i1k(playerId, amount, sendEvent);
      tmp = Unit_instance;
    } else {
      tmp = $super.i1k.call(this, playerId, amount, sendEvent);
    }
    return tmp;
  };
  protoOf(StockpilesManager).u1j = function (playerCities, allUnits) {
    var tmp0_safe_receiver = firstOrNull(playerCities);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.playerId;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var playerId = tmp;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.r1j_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (element.y1i_1 === playerId) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = destination.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      element_0.z1i_1(new StockUpdated(this.y1h(playerId), calculateIncome(this, playerCities, allUnits)));
    }
  };
  protoOf(StockpilesManager).p1k = function (playerCities, allUnits) {
    var tmp0_safe_receiver = firstOrNull(playerCities);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.playerId;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var playerId = tmp;
    var income = calculateIncome(this, playerCities, allUnits);
    var updated = this.y1h(playerId).plus(income);
    // Inline function 'kotlin.collections.set' call
    this.s1j_1.l2(playerId, updated);
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.r1j_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (element.y1i_1 === playerId) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = destination.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      element_0.z1i_1(new StockUpdated(updated, income));
    }
  };
  function getIncome(_this__u8e3s4) {
    var tmp;
    var tmp0 = _this__u8e3s4.buildings;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.p();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        if (contains(Companion_instance_8.cityMainBuildings, element)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0) {
      tmp = new Stockpiles();
    } else {
      if (_this__u8e3s4 instanceof Grass) {
        tmp = new Stockpiles(addIf(addIf(1, _this__u8e3s4.animals, 1), _this__u8e3s4.forest, -1), addIf(0, _this__u8e3s4.forest, 1));
      } else {
        tmp = new Stockpiles();
      }
    }
    var base = tmp;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0_0 = _this__u8e3s4.buildings;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s_0 = tmp0_0.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      var list = element_0.bonuses;
      addAll(destination, list);
    }
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_1 = destination.j();
    while (_iterator__ex2g4s_1.k()) {
      var element_1 = _iterator__ex2g4s_1.l();
      if (element_1 instanceof StockCollectBonus) {
        destination_0.e(element_1);
      }
    }
    // Inline function 'kotlin.collections.fold' call
    var accumulator = base;
    var _iterator__ex2g4s_2 = destination_0.j();
    while (_iterator__ex2g4s_2.k()) {
      var element_2 = _iterator__ex2g4s_2.l();
      accumulator = accumulator.plus(element_2.r1m_1);
    }
    return accumulator;
  }
  function VisionData(visible, discovered) {
    this.l1j_1 = visible;
    this.m1j_1 = discovered;
  }
  function VisionCalculator(hexMap, cheatEngine) {
    this.a1j_1 = hexMap;
    this.b1j_1 = cheatEngine;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.c1j_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(VisionCalculator).k1j = function (playerId) {
    var tmp0_elvis_lhs = this.c1j_1.i2(playerId);
    return tmp0_elvis_lhs == null ? new VisionData(emptySet(), emptySet()) : tmp0_elvis_lhs;
  };
  protoOf(VisionCalculator).p1j = function (coordinates) {
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = this.c1j_1;
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.u().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'kotlin.collections.component1' call
      var playerId = element.e2();
      // Inline function 'kotlin.collections.component2' call
      var vision = element.f2();
      // Inline function 'kotlin.takeIf' call
      var tmp;
      var tmp_0;
      var tmp0_0 = vision.l1j_1;
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_1;
        if (isInterface(tmp0_0, Collection)) {
          tmp_1 = tmp0_0.p();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$3 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = tmp0_0.j();
        while (_iterator__ex2g4s_0.k()) {
          var element_0 = _iterator__ex2g4s_0.l();
          if (contains(coordinates, element_0)) {
            tmp$ret$3 = true;
            break $l$block_0;
          }
        }
        tmp$ret$3 = false;
      }
      if (tmp$ret$3) {
        tmp_0 = true;
      } else {
        tmp_0 = (this.s1m(coordinates.slice()).r(playerId) && this.b1j_1.y1h(playerId).r(Cheat_POLO_getInstance()));
      }
      if (tmp_0) {
        tmp = playerId;
      } else {
        tmp = null;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.e(tmp0_safe_receiver);
      }
    }
    return destination;
  };
  protoOf(VisionCalculator).s1m = function (coordinates) {
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = this.c1j_1;
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.u().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'kotlin.collections.component1' call
      var playerId = element.e2();
      // Inline function 'kotlin.collections.component2' call
      var vision = element.f2();
      // Inline function 'kotlin.takeIf' call
      var tmp;
      var tmp_0;
      var tmp0_0 = vision.m1j_1;
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_1;
        if (isInterface(tmp0_0, Collection)) {
          tmp_1 = tmp0_0.p();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$3 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = tmp0_0.j();
        while (_iterator__ex2g4s_0.k()) {
          var element_0 = _iterator__ex2g4s_0.l();
          if (contains(coordinates, element_0)) {
            tmp$ret$3 = true;
            break $l$block_0;
          }
        }
        tmp$ret$3 = false;
      }
      if (tmp$ret$3) {
        tmp_0 = true;
      } else {
        tmp_0 = this.b1j_1.y1h(playerId).r(Cheat_MARCO_getInstance());
      }
      if (tmp_0) {
        tmp = playerId;
      } else {
        tmp = null;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.e(tmp0_safe_receiver);
      }
    }
    return destination;
  };
  protoOf(VisionCalculator).d1j = function (playerId, units, cities) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(units, 10));
    var _iterator__ex2g4s = units.j();
    while (_iterator__ex2g4s.k()) {
      var item = _iterator__ex2g4s.l();
      var tmp$ret$0 = to(item.coordinates, item.visionRange);
      destination.e(tmp$ret$0);
    }
    var tmp = destination;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(cities, 10));
    var _iterator__ex2g4s_0 = cities.j();
    while (_iterator__ex2g4s_0.k()) {
      var item_0 = _iterator__ex2g4s_0.l();
      var tmp$ret$3 = to(item_0.coordinates, item_0.visionRange);
      destination_0.e(tmp$ret$3);
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = plus(tmp, destination_0);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s_1 = this_0.j();
    while (_iterator__ex2g4s_1.k()) {
      var item_1 = _iterator__ex2g4s_1.l();
      var coordinates = item_1.sd();
      var baseVisionRange = item_1.td();
      var tmp0_safe_receiver = this.a1j_1.g1i_1.i2(coordinates);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tileVision();
      var tileVision = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      // Inline function 'kotlin.math.max' call
      var tmp$ret$6 = Math.max(baseVisionRange, tileVision);
      var tmp$ret$7 = to(coordinates, tmp$ret$6);
      destination_1.e(tmp$ret$7);
    }
    var visionPoints = destination_1;
    // Inline function 'kotlin.collections.mutableSetOf' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_2 = LinkedHashSet_init_$Create$();
    var _iterator__ex2g4s_2 = visionPoints.j();
    while (_iterator__ex2g4s_2.k()) {
      var element = _iterator__ex2g4s_2.l();
      var coordinates_0 = element.sd();
      var range = element.td();
      var list = this.a1j_1.h1i(coordinates_0, range);
      addAll(destination_2, list);
    }
    var visible = destination_2;
    var updatedDiscovered = plus_1(this.k1j(playerId).m1j_1, visible);
    var tmp0 = this.c1j_1;
    // Inline function 'kotlin.collections.set' call
    var value = new VisionData(visible, updatedDiscovered);
    tmp0.l2(playerId, value);
  };
  protoOf(VisionCalculator).e1j = function () {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = this.c1j_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.m()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = this_0.u().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      var tmp = element.e2();
      var tmp$ret$1 = element.f2().m1j_1.m();
      destination.l2(tmp, tmp$ret$1);
    }
    return destination;
  };
  protoOf(VisionCalculator).b1k = function (visionData) {
    this.c1j_1.c2();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = visionData.u().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'kotlin.collections.component1' call
      var playerId = element.e2();
      // Inline function 'kotlin.collections.component2' call
      var data = element.f2();
      var tmp0 = this.c1j_1;
      // Inline function 'kotlin.collections.set' call
      var value = new VisionData(data.visible, data.discovered);
      tmp0.l2(playerId, value);
    }
  };
  protoOf(VisionCalculator).j1j = function () {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = this.c1j_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.m()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = this_0.u().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      var tmp = element.e2();
      // Inline function 'kotlin.collections.component2' call
      var data = element.f2();
      var tmp$ret$2 = new GameStateVisionData(data.l1j_1, data.m1j_1);
      destination.l2(tmp, tmp$ret$2);
    }
    return destination;
  };
  var CreatorMapSize_SMALL_instance;
  var CreatorMapSize_MEDIUM_instance;
  var CreatorMapSize_LARGE_instance;
  function values_1() {
    return [CreatorMapSize_SMALL_getInstance(), CreatorMapSize_MEDIUM_getInstance(), CreatorMapSize_LARGE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'SMALL':
        return CreatorMapSize_SMALL_getInstance();
      case 'MEDIUM':
        return CreatorMapSize_MEDIUM_getInstance();
      case 'LARGE':
        return CreatorMapSize_LARGE_getInstance();
      default:
        CreatorMapSize_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var CreatorMapSize_entriesInitialized;
  function CreatorMapSize_initEntries() {
    if (CreatorMapSize_entriesInitialized)
      return Unit_instance;
    CreatorMapSize_entriesInitialized = true;
    CreatorMapSize_SMALL_instance = new CreatorMapSize('SMALL', 0, 20, 20);
    CreatorMapSize_MEDIUM_instance = new CreatorMapSize('MEDIUM', 1, 30, 30);
    CreatorMapSize_LARGE_instance = new CreatorMapSize('LARGE', 2, 50, 50);
  }
  function CreatorMapSize(name, ordinal, width, height) {
    Enum.call(this, name, ordinal);
    this.width = width;
    this.height = height;
  }
  protoOf(CreatorMapSize).v1m = function () {
    return this.width;
  };
  protoOf(CreatorMapSize).w1m = function () {
    return this.height;
  };
  function CreatorMapSize_SMALL_getInstance() {
    CreatorMapSize_initEntries();
    return CreatorMapSize_SMALL_instance;
  }
  function CreatorMapSize_MEDIUM_getInstance() {
    CreatorMapSize_initEntries();
    return CreatorMapSize_MEDIUM_instance;
  }
  function CreatorMapSize_LARGE_getInstance() {
    CreatorMapSize_initEntries();
    return CreatorMapSize_LARGE_instance;
  }
  function GameCreator() {
  }
  protoOf(GameCreator).x1m = function (players, mapSize, startingUnits, startingStock, seed) {
    var mapGenerator = new MapGenerator(seed.c1f());
    var mapData = mapGenerator.h1n(mapSize.width, mapSize.height, players, startingUnits);
    // Inline function 'kotlin.collections.setOf' call
    var tmp = emptySet();
    var tmp0 = mapData.k1n_1;
    // Inline function 'kotlin.collections.mutableSetOf' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.u().j();
    while (_iterator__ex2g4s.k()) {
      var item = _iterator__ex2g4s.l();
      var tmp0_coordinates = item.e2();
      var tmp1_playerId = item.f2().qd_1;
      var tmp2_unitType = item.f2().rd_1;
      var tmp$ret$3 = new CivUnit(VOID, tmp2_unitType, tmp1_playerId, tmp0_coordinates);
      destination.e(tmp$ret$3);
    }
    var tmp_0 = destination;
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(players, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s_0 = players.j();
    while (_iterator__ex2g4s_0.k()) {
      var element = _iterator__ex2g4s_0.l();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element.playerId, startingStock);
      destination_0.l2(pair.qd_1, pair.rd_1);
    }
    var tmp_1 = destination_0;
    // Inline function 'kotlin.collections.associate' call
    var capacity_0 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(players, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination_1 = LinkedHashMap_init_$Create$_0(capacity_0);
    var _iterator__ex2g4s_1 = players.j();
    while (_iterator__ex2g4s_1.k()) {
      var element_0 = _iterator__ex2g4s_1.l();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair_0 = to(element_0.playerId, new GameStatistics());
      destination_1.l2(pair_0.qd_1, pair_0.rd_1);
    }
    return new GameState(players, mapData.j1n_1, tmp, tmp_0, tmp_1, seed, VOID, VOID, destination_1);
  };
  protoOf(GameCreator).createNewGame = function (players, mapSize, startingUnits, startingStock, seed, $super) {
    seed = seed === VOID ? Companion_instance_0.y1e(Default_getInstance().pe()) : seed;
    return $super === VOID ? this.x1m(players, mapSize, startingUnits, startingStock, seed) : $super.x1m.call(this, players, mapSize, startingUnits, startingStock, seed);
  };
  var GameCreator_instance;
  function GameCreator_getInstance() {
    return GameCreator_instance;
  }
  function EventListener(playerId, listener) {
    this.y1i_1 = playerId;
    this.z1i_1 = listener;
  }
  function GameEvent() {
  }
  function StockUpdated(stock, income) {
    this.stock = stock;
    this.income = income;
  }
  protoOf(StockUpdated).c1l = function () {
    return this.stock;
  };
  protoOf(StockUpdated).l1n = function () {
    return this.income;
  };
  protoOf(StockUpdated).sd = function () {
    return this.stock;
  };
  protoOf(StockUpdated).td = function () {
    return this.income;
  };
  protoOf(StockUpdated).m1n = function (stock, income) {
    return new StockUpdated(stock, income);
  };
  protoOf(StockUpdated).copy = function (stock, income, $super) {
    stock = stock === VOID ? this.stock : stock;
    income = income === VOID ? this.income : income;
    return $super === VOID ? this.m1n(stock, income) : $super.m1n.call(this, stock, income);
  };
  protoOf(StockUpdated).toString = function () {
    return 'StockUpdated(stock=' + this.stock.toString() + ', income=' + toString(this.income) + ')';
  };
  protoOf(StockUpdated).hashCode = function () {
    var result = this.stock.hashCode();
    result = imul(result, 31) + (this.income == null ? 0 : this.income.hashCode()) | 0;
    return result;
  };
  protoOf(StockUpdated).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StockUpdated))
      return false;
    var tmp0_other_with_cast = other instanceof StockUpdated ? other : THROW_CCE();
    if (!this.stock.equals(tmp0_other_with_cast.stock))
      return false;
    if (!equals(this.income, tmp0_other_with_cast.income))
      return false;
    return true;
  };
  function VisionChanged(tiles) {
    this.tiles = tiles;
  }
  protoOf(VisionChanged).n1n = function () {
    return this.tiles;
  };
  protoOf(VisionChanged).sd = function () {
    return this.tiles;
  };
  protoOf(VisionChanged).o1n = function (tiles) {
    return new VisionChanged(tiles);
  };
  protoOf(VisionChanged).copy = function (tiles, $super) {
    tiles = tiles === VOID ? this.tiles : tiles;
    return $super === VOID ? this.o1n(tiles) : $super.o1n.call(this, tiles);
  };
  protoOf(VisionChanged).toString = function () {
    return 'VisionChanged(tiles=' + toString_0(this.tiles) + ')';
  };
  protoOf(VisionChanged).hashCode = function () {
    return hashCode(this.tiles);
  };
  protoOf(VisionChanged).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VisionChanged))
      return false;
    var tmp0_other_with_cast = other instanceof VisionChanged ? other : THROW_CCE();
    if (!equals(this.tiles, tmp0_other_with_cast.tiles))
      return false;
    return true;
  };
  function AttackEvent(from, to, isRanged, updatedAttacker, updatedDefender) {
    this.from = from;
    this.to = to;
    this.isRanged = isRanged;
    this.updatedAttacker = updatedAttacker;
    this.updatedDefender = updatedDefender;
  }
  protoOf(AttackEvent).p1n = function () {
    return this.from;
  };
  protoOf(AttackEvent).q1n = function () {
    return this.to;
  };
  protoOf(AttackEvent).r1n = function () {
    return this.isRanged;
  };
  protoOf(AttackEvent).s1n = function () {
    return this.updatedAttacker;
  };
  protoOf(AttackEvent).t1n = function () {
    return this.updatedDefender;
  };
  protoOf(AttackEvent).sd = function () {
    return this.from;
  };
  protoOf(AttackEvent).td = function () {
    return this.to;
  };
  protoOf(AttackEvent).i1f = function () {
    return this.isRanged;
  };
  protoOf(AttackEvent).j1l = function () {
    return this.updatedAttacker;
  };
  protoOf(AttackEvent).k1l = function () {
    return this.updatedDefender;
  };
  protoOf(AttackEvent).u1n = function (from, to, isRanged, updatedAttacker, updatedDefender) {
    return new AttackEvent(from, to, isRanged, updatedAttacker, updatedDefender);
  };
  protoOf(AttackEvent).copy = function (from, to, isRanged, updatedAttacker, updatedDefender, $super) {
    from = from === VOID ? this.from : from;
    to = to === VOID ? this.to : to;
    isRanged = isRanged === VOID ? this.isRanged : isRanged;
    updatedAttacker = updatedAttacker === VOID ? this.updatedAttacker : updatedAttacker;
    updatedDefender = updatedDefender === VOID ? this.updatedDefender : updatedDefender;
    return $super === VOID ? this.u1n(from, to, isRanged, updatedAttacker, updatedDefender) : $super.u1n.call(this, from, to, isRanged, updatedAttacker, updatedDefender);
  };
  protoOf(AttackEvent).toString = function () {
    return 'AttackEvent(from=' + this.from.toString() + ', to=' + this.to.toString() + ', isRanged=' + this.isRanged + ', updatedAttacker=' + toString(this.updatedAttacker) + ', updatedDefender=' + toString(this.updatedDefender) + ')';
  };
  protoOf(AttackEvent).hashCode = function () {
    var result = this.from.hashCode();
    result = imul(result, 31) + this.to.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isRanged) | 0;
    result = imul(result, 31) + (this.updatedAttacker == null ? 0 : this.updatedAttacker.hashCode()) | 0;
    result = imul(result, 31) + (this.updatedDefender == null ? 0 : this.updatedDefender.hashCode()) | 0;
    return result;
  };
  protoOf(AttackEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttackEvent))
      return false;
    var tmp0_other_with_cast = other instanceof AttackEvent ? other : THROW_CCE();
    if (!this.from.equals(tmp0_other_with_cast.from))
      return false;
    if (!this.to.equals(tmp0_other_with_cast.to))
      return false;
    if (!(this.isRanged === tmp0_other_with_cast.isRanged))
      return false;
    if (!equals(this.updatedAttacker, tmp0_other_with_cast.updatedAttacker))
      return false;
    if (!equals(this.updatedDefender, tmp0_other_with_cast.updatedDefender))
      return false;
    return true;
  };
  function TileUpdated(tileData) {
    this.tileData = tileData;
  }
  protoOf(TileUpdated).v1n = function () {
    return this.tileData;
  };
  protoOf(TileUpdated).sd = function () {
    return this.tileData;
  };
  protoOf(TileUpdated).w1n = function (tileData) {
    return new TileUpdated(tileData);
  };
  protoOf(TileUpdated).copy = function (tileData, $super) {
    tileData = tileData === VOID ? this.tileData : tileData;
    return $super === VOID ? this.w1n(tileData) : $super.w1n.call(this, tileData);
  };
  protoOf(TileUpdated).toString = function () {
    return 'TileUpdated(tileData=' + this.tileData.toString() + ')';
  };
  protoOf(TileUpdated).hashCode = function () {
    return this.tileData.hashCode();
  };
  protoOf(TileUpdated).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TileUpdated))
      return false;
    var tmp0_other_with_cast = other instanceof TileUpdated ? other : THROW_CCE();
    if (!this.tileData.equals(tmp0_other_with_cast.tileData))
      return false;
    return true;
  };
  function ScoreChanged(score) {
    this.score = score;
  }
  protoOf(ScoreChanged).x1n = function () {
    return this.score;
  };
  protoOf(ScoreChanged).sd = function () {
    return this.score;
  };
  protoOf(ScoreChanged).y1n = function (score) {
    return new ScoreChanged(score);
  };
  protoOf(ScoreChanged).copy = function (score, $super) {
    score = score === VOID ? this.score : score;
    return $super === VOID ? this.y1n(score) : $super.y1n.call(this, score);
  };
  protoOf(ScoreChanged).toString = function () {
    return 'ScoreChanged(score=' + toString_0(this.score) + ')';
  };
  protoOf(ScoreChanged).hashCode = function () {
    return hashCode(this.score);
  };
  protoOf(ScoreChanged).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ScoreChanged))
      return false;
    var tmp0_other_with_cast = other instanceof ScoreChanged ? other : THROW_CCE();
    if (!equals(this.score, tmp0_other_with_cast.score))
      return false;
    return true;
  };
  function Created(unit) {
    UnitEvent.call(this, unit.unitId);
    this.unit = unit;
  }
  protoOf(Created).z1n = function () {
    return this.unit;
  };
  function Moved(unit) {
    UnitEvent.call(this, unit.unitId);
    this.newCoordinates = unit.coordinates;
  }
  protoOf(Moved).a1o = function () {
    return this.newCoordinates;
  };
  function CombinedMove(unit, visionEvents, movedEvents) {
    UnitEvent.call(this, unit.unitId);
    this.visionEvents = visionEvents;
    this.movedEvents = movedEvents;
  }
  protoOf(CombinedMove).b1o = function () {
    return this.visionEvents;
  };
  protoOf(CombinedMove).c1o = function () {
    return this.movedEvents;
  };
  function Vanish(unit) {
    UnitEvent.call(this, unit.unitId);
  }
  function UnitEvent(unitId) {
    this.unitId = unitId;
  }
  protoOf(UnitEvent).d1f = function () {
    return this.unitId;
  };
  protoOf(UnitEvent).toString = function () {
    return 'UnitEvent.' + getKClassFromExpression(this).ha() + "(unitId='" + this.unitId + "')";
  };
  function TurnEndedEvent(newCurrentPlayerId, turnNumber) {
    this.newCurrentPlayerId = newCurrentPlayerId;
    this.turnNumber = turnNumber;
  }
  protoOf(TurnEndedEvent).d1o = function () {
    return this.newCurrentPlayerId;
  };
  protoOf(TurnEndedEvent).d1m = function () {
    return this.turnNumber;
  };
  protoOf(TurnEndedEvent).sd = function () {
    return this.newCurrentPlayerId;
  };
  protoOf(TurnEndedEvent).td = function () {
    return this.turnNumber;
  };
  protoOf(TurnEndedEvent).e1o = function (newCurrentPlayerId, turnNumber) {
    return new TurnEndedEvent(newCurrentPlayerId, turnNumber);
  };
  protoOf(TurnEndedEvent).copy = function (newCurrentPlayerId, turnNumber, $super) {
    newCurrentPlayerId = newCurrentPlayerId === VOID ? this.newCurrentPlayerId : newCurrentPlayerId;
    turnNumber = turnNumber === VOID ? this.turnNumber : turnNumber;
    return $super === VOID ? this.e1o(newCurrentPlayerId, turnNumber) : $super.e1o.call(this, newCurrentPlayerId, turnNumber);
  };
  protoOf(TurnEndedEvent).toString = function () {
    return 'TurnEndedEvent(newCurrentPlayerId=' + this.newCurrentPlayerId + ', turnNumber=' + this.turnNumber + ')';
  };
  protoOf(TurnEndedEvent).hashCode = function () {
    var result = getStringHashCode(this.newCurrentPlayerId);
    result = imul(result, 31) + this.turnNumber | 0;
    return result;
  };
  protoOf(TurnEndedEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TurnEndedEvent))
      return false;
    var tmp0_other_with_cast = other instanceof TurnEndedEvent ? other : THROW_CCE();
    if (!(this.newCurrentPlayerId === tmp0_other_with_cast.newCurrentPlayerId))
      return false;
    if (!(this.turnNumber === tmp0_other_with_cast.turnNumber))
      return false;
    return true;
  };
  function GameOverEvent(finalStats) {
    this.finalStats = finalStats;
  }
  protoOf(GameOverEvent).f1o = function () {
    return this.finalStats;
  };
  protoOf(GameOverEvent).sd = function () {
    return this.finalStats;
  };
  protoOf(GameOverEvent).g1o = function (finalStats) {
    return new GameOverEvent(finalStats);
  };
  protoOf(GameOverEvent).copy = function (finalStats, $super) {
    finalStats = finalStats === VOID ? this.finalStats : finalStats;
    return $super === VOID ? this.g1o(finalStats) : $super.g1o.call(this, finalStats);
  };
  protoOf(GameOverEvent).toString = function () {
    return 'GameOverEvent(finalStats=' + toString_0(this.finalStats) + ')';
  };
  protoOf(GameOverEvent).hashCode = function () {
    return hashCode(this.finalStats);
  };
  protoOf(GameOverEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GameOverEvent))
      return false;
    var tmp0_other_with_cast = other instanceof GameOverEvent ? other : THROW_CCE();
    if (!equals(this.finalStats, tmp0_other_with_cast.finalStats))
      return false;
    return true;
  };
  function Companion_6() {
  }
  protoOf(Companion_6).fromDoubles = function (q, r, s) {
    var roundedQ = roundToInt(q);
    var roundedR = roundToInt(r);
    var roundedS = roundToInt(s);
    // Inline function 'kotlin.math.abs' call
    var x = roundedQ - q;
    var qDiff = Math.abs(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = roundedR - r;
    var rDiff = Math.abs(x_0);
    // Inline function 'kotlin.math.abs' call
    var x_1 = roundedS - s;
    var sDiff = Math.abs(x_1);
    if (qDiff > rDiff && qDiff > sDiff) {
      return new Coordinates((-roundedR | 0) - roundedS | 0, roundedR);
    }
    if (rDiff > sDiff) {
      return new Coordinates(roundedQ, (-roundedQ | 0) - roundedS | 0);
    }
    return new Coordinates(roundedQ, roundedR);
  };
  protoOf(Companion_6).a16 = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('civ.hex.Coordinates', this, 2);
    tmp0_serialDesc.cv('q', false);
    tmp0_serialDesc.cv('r', false);
    this.h1o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).i1o = function (encoder, value) {
    var tmp0_desc = this.h1o_1;
    var tmp1_output = encoder.mn(tmp0_desc);
    tmp1_output.wo(tmp0_desc, 0, value.q);
    tmp1_output.wo(tmp0_desc, 1, value.r);
    tmp1_output.nn(tmp0_desc);
  };
  protoOf($serializer_3).gk = function (encoder, value) {
    return this.i1o(encoder, value instanceof Coordinates ? value : THROW_CCE());
  };
  protoOf($serializer_3).hk = function (decoder) {
    var tmp0_desc = this.h1o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_input = decoder.mn(tmp0_desc);
    if (tmp6_input.co()) {
      tmp4_local0 = tmp6_input.rn(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.rn(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.do(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.rn(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.rn(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.nn(tmp0_desc);
    return Coordinates_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).fk = function () {
    return this.h1o_1;
  };
  protoOf($serializer_3).rv = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function Coordinates_init_$Init$(seen0, q, r, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().h1o_1);
    }
    $this.q = q;
    $this.r = r;
    return $this;
  }
  function Coordinates_init_$Create$(seen0, q, r, serializationConstructorMarker) {
    return Coordinates_init_$Init$(seen0, q, r, serializationConstructorMarker, objectCreate(protoOf(Coordinates)));
  }
  function Coordinates(q, r) {
    this.q = q;
    this.r = r;
  }
  protoOf(Coordinates).j1o = function () {
    return this.q;
  };
  protoOf(Coordinates).k1o = function () {
    return this.r;
  };
  protoOf(Coordinates).l1o = function () {
    return (-this.q | 0) - this.r | 0;
  };
  protoOf(Coordinates).toString = function () {
    return '(q=' + this.q + ', r=' + this.r + ')';
  };
  protoOf(Coordinates).sd = function () {
    return this.q;
  };
  protoOf(Coordinates).td = function () {
    return this.r;
  };
  protoOf(Coordinates).m1o = function (q, r) {
    return new Coordinates(q, r);
  };
  protoOf(Coordinates).copy = function (q, r, $super) {
    q = q === VOID ? this.q : q;
    r = r === VOID ? this.r : r;
    return $super === VOID ? this.m1o(q, r) : $super.m1o.call(this, q, r);
  };
  protoOf(Coordinates).hashCode = function () {
    var result = this.q;
    result = imul(result, 31) + this.r | 0;
    return result;
  };
  protoOf(Coordinates).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Coordinates))
      return false;
    var tmp0_other_with_cast = other instanceof Coordinates ? other : THROW_CCE();
    if (!(this.q === tmp0_other_with_cast.q))
      return false;
    if (!(this.r === tmp0_other_with_cast.r))
      return false;
    return true;
  };
  function movedBy(_this__u8e3s4, q, r) {
    q = q === VOID ? 0 : q;
    r = r === VOID ? 0 : r;
    return new Coordinates(_this__u8e3s4.q + q | 0, _this__u8e3s4.r + r | 0);
  }
  function movedBy_0(_this__u8e3s4, edge) {
    return new Coordinates(_this__u8e3s4.q + edge.q | 0, _this__u8e3s4.r + edge.r | 0);
  }
  function neighbors(_this__u8e3s4) {
    return listOf_0([movedBy(_this__u8e3s4, -1, 0), movedBy(_this__u8e3s4, -1, 1), movedBy(_this__u8e3s4, 0, 1), movedBy(_this__u8e3s4, 0, -1), movedBy(_this__u8e3s4, 1, 0), movedBy(_this__u8e3s4, 1, -1)]);
  }
  function distanceTo(_this__u8e3s4, other) {
    return ((abs(_this__u8e3s4.q - other.q | 0) + abs(_this__u8e3s4.r - other.r | 0) | 0) + abs(_this__u8e3s4.s - other.s | 0) | 0) / 2 | 0;
  }
  function getAllInRange(_this__u8e3s4, radius) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    var inductionVariable = -radius | 0;
    if (inductionVariable <= radius)
      do {
        var q = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0 = -radius | 0;
        // Inline function 'kotlin.math.max' call
        var b = (-q | 0) - radius | 0;
        var inductionVariable_0 = Math.max(tmp0, b);
        // Inline function 'kotlin.math.min' call
        var b_0 = (-q | 0) + radius | 0;
        var last = Math.min(radius, b_0);
        if (inductionVariable_0 <= last)
          do {
            var r = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            this_0.e(movedBy(_this__u8e3s4, q, r));
          }
           while (!(r === last));
      }
       while (!(q === radius));
    return this_0.q3();
  }
  function dijkstra(start, possibleEnds, cost) {
    var frontier = mutableListOf([to(start, 0)]);
    // Inline function 'kotlin.collections.mutableMapOf' call
    var cameFrom = LinkedHashMap_init_$Create$();
    var totalCosts = mutableMapOf([to(start, 0)]);
    var end = null;
    var iterationCount = 0;
    $l$loop_0: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!frontier.p()) {
        break $l$loop_0;
      }
      iterationCount = iterationCount + 1 | 0;
      if (iterationCount > 100000) {
        throw RuntimeException_init_$Create$('Iteration count over 100_000');
      }
      // Inline function 'kotlin.collections.sortBy' call
      if (frontier.m() > 1) {
        // Inline function 'kotlin.comparisons.compareBy' call
        var tmp = dijkstra$lambda;
        var tmp$ret$2 = new sam$kotlin_Comparator$0_1(tmp);
        sortWith(frontier, tmp$ret$2);
      }
      var current = removeFirst(frontier).qd_1;
      if (possibleEnds.r(current)) {
        end = current;
        break $l$loop_0;
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = neighbors(current).j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        var newCost = getValue(totalCosts, current) + cost(element) | 0;
        var tmp0_safe_receiver = totalCosts.i2(element);
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_0 = tmp0_safe_receiver > newCost;
        }
        if (!(tmp_0 === false)) {
          // Inline function 'kotlin.collections.set' call
          totalCosts.l2(element, newCost);
          // Inline function 'kotlin.collections.set' call
          cameFrom.l2(element, current);
          frontier.e(to(element, newCost));
        }
      }
    }
    println('dijkstra iteration count: ' + iterationCount);
    var pointer = require_0(end);
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    while (!pointer.equals(start)) {
      this_0.e(pointer);
      pointer = getValue(cameFrom, pointer);
    }
    var tmp$ret$13 = this_0.q3();
    return reversed(tmp$ret$13);
  }
  function dijkstra_0(start, end, cost) {
    var frontier = mutableListOf([to(start, 0)]);
    // Inline function 'kotlin.collections.mutableMapOf' call
    var cameFrom = LinkedHashMap_init_$Create$();
    var totalCosts = mutableMapOf([to(start, 0)]);
    $l$loop_0: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!frontier.p()) {
        break $l$loop_0;
      }
      // Inline function 'kotlin.collections.sortBy' call
      if (frontier.m() > 1) {
        // Inline function 'kotlin.comparisons.compareBy' call
        var tmp = dijkstra$lambda_0;
        var tmp$ret$2 = new sam$kotlin_Comparator$0_2(tmp);
        sortWith(frontier, tmp$ret$2);
      }
      var current = removeFirst(frontier).qd_1;
      if (current.equals(end))
        break $l$loop_0;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = neighbors(current).j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        var newCost = getValue(totalCosts, current) + cost(element) | 0;
        var tmp0_safe_receiver = totalCosts.i2(element);
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_0 = tmp0_safe_receiver > newCost;
        }
        if (!(tmp_0 === false)) {
          // Inline function 'kotlin.collections.set' call
          totalCosts.l2(element, newCost);
          // Inline function 'kotlin.collections.set' call
          cameFrom.l2(element, current);
          frontier.e(to(element, newCost));
        }
      }
    }
    var pointer = end;
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    while (!pointer.equals(start)) {
      this_0.e(pointer);
      pointer = getValue(cameFrom, pointer);
    }
    var tmp$ret$13 = this_0.q3();
    return reversed(tmp$ret$13);
  }
  function sam$kotlin_Comparator$0_1(function_0) {
    this.p1o_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).bc = function (a, b) {
    return this.p1o_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.bc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).n3 = function () {
    return this.p1o_1;
  };
  protoOf(sam$kotlin_Comparator$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.n3(), other.n3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_1).hashCode = function () {
    return hashCode(this.n3());
  };
  function sam$kotlin_Comparator$0_2(function_0) {
    this.q1o_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_2).bc = function (a, b) {
    return this.q1o_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).compare = function (a, b) {
    return this.bc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).n3 = function () {
    return this.q1o_1;
  };
  protoOf(sam$kotlin_Comparator$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.n3(), other.n3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_2).hashCode = function () {
    return hashCode(this.n3());
  };
  function dijkstra$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.rd_1;
    var tmp$ret$1 = b.rd_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function dijkstra$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.rd_1;
    var tmp$ret$1 = b.rd_1;
    return compareValues(tmp, tmp$ret$1);
  }
  var HexEdge_TOP_RIGHT_instance;
  var HexEdge_RIGHT_instance;
  var HexEdge_BOTTOM_RIGHT_instance;
  var HexEdge_BOTTOM_LEFT_instance;
  var HexEdge_LEFT_instance;
  var HexEdge_TOP_LEFT_instance;
  function values_2() {
    return [HexEdge_TOP_RIGHT_getInstance(), HexEdge_RIGHT_getInstance(), HexEdge_BOTTOM_RIGHT_getInstance(), HexEdge_BOTTOM_LEFT_getInstance(), HexEdge_LEFT_getInstance(), HexEdge_TOP_LEFT_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'TOP_RIGHT':
        return HexEdge_TOP_RIGHT_getInstance();
      case 'RIGHT':
        return HexEdge_RIGHT_getInstance();
      case 'BOTTOM_RIGHT':
        return HexEdge_BOTTOM_RIGHT_getInstance();
      case 'BOTTOM_LEFT':
        return HexEdge_BOTTOM_LEFT_getInstance();
      case 'LEFT':
        return HexEdge_LEFT_getInstance();
      case 'TOP_LEFT':
        return HexEdge_TOP_LEFT_getInstance();
      default:
        HexEdge_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_2());
    return $ENTRIES_0;
  }
  var HexEdge_entriesInitialized;
  function HexEdge_initEntries() {
    if (HexEdge_entriesInitialized)
      return Unit_instance;
    HexEdge_entriesInitialized = true;
    HexEdge_TOP_RIGHT_instance = new HexEdge('TOP_RIGHT', 0, 1, -1);
    HexEdge_RIGHT_instance = new HexEdge('RIGHT', 1, 1, 0);
    HexEdge_BOTTOM_RIGHT_instance = new HexEdge('BOTTOM_RIGHT', 2, 0, 1);
    HexEdge_BOTTOM_LEFT_instance = new HexEdge('BOTTOM_LEFT', 3, -1, 1);
    HexEdge_LEFT_instance = new HexEdge('LEFT', 4, -1, 0);
    HexEdge_TOP_LEFT_instance = new HexEdge('TOP_LEFT', 5, 0, -1);
  }
  var $ENTRIES_0;
  function HexEdge(name, ordinal, q, r) {
    Enum.call(this, name, ordinal);
    this.q = q;
    this.r = r;
  }
  protoOf(HexEdge).j1o = function () {
    return this.q;
  };
  protoOf(HexEdge).k1o = function () {
    return this.r;
  };
  function HexEdge_TOP_RIGHT_getInstance() {
    HexEdge_initEntries();
    return HexEdge_TOP_RIGHT_instance;
  }
  function HexEdge_RIGHT_getInstance() {
    HexEdge_initEntries();
    return HexEdge_RIGHT_instance;
  }
  function HexEdge_BOTTOM_RIGHT_getInstance() {
    HexEdge_initEntries();
    return HexEdge_BOTTOM_RIGHT_instance;
  }
  function HexEdge_BOTTOM_LEFT_getInstance() {
    HexEdge_initEntries();
    return HexEdge_BOTTOM_LEFT_instance;
  }
  function HexEdge_LEFT_getInstance() {
    HexEdge_initEntries();
    return HexEdge_LEFT_instance;
  }
  function HexEdge_TOP_LEFT_getInstance() {
    HexEdge_initEntries();
    return HexEdge_TOP_LEFT_instance;
  }
  function HexLayouts() {
  }
  protoOf(HexLayouts).r1o = function (width, height, offset) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < width)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.repeat' call
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < height)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            this_0.e(new Coordinates((index - (index_0 / 2 | 0) | 0) - offset | 0, index_0 - offset | 0));
          }
           while (inductionVariable_0 < height);
      }
       while (inductionVariable < width);
    return this_0.q3();
  };
  protoOf(HexLayouts).s1o = function (width, height, offset, $super) {
    offset = offset === VOID ? 0 : offset;
    return $super === VOID ? this.r1o(width, height, offset) : $super.r1o.call(this, width, height, offset);
  };
  var HexLayouts_instance;
  function HexLayouts_getInstance() {
    return HexLayouts_instance;
  }
  function Paths(start, cameFrom, costs, attackTargets) {
    var tmp;
    if (attackTargets === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp = emptyMap();
    } else {
      tmp = attackTargets;
    }
    attackTargets = tmp;
    this.start = start;
    this.m1h_1 = cameFrom;
    this.n1h_1 = costs;
    this.attackTargets = attackTargets;
  }
  protoOf(Paths).af = function () {
    return this.start;
  };
  protoOf(Paths).t1o = function () {
    return this.attackTargets;
  };
  protoOf(Paths).u1o = function () {
    return this.n1h_1.j2();
  };
  protoOf(Paths).v1o = function () {
    return plus_1(this.n1h_1.j2(), this.attackTargets.j2());
  };
  protoOf(Paths).getPath = function (target) {
    if (!this.possibleTargets.r(target)) {
      return null;
    }
    var tmp0_elvis_lhs = this.attackTargets.i2(target);
    var pointer = tmp0_elvis_lhs == null ? target : tmp0_elvis_lhs;
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_1 = this.attackTargets;
    if ((isInterface(this_1, KtMap) ? this_1 : THROW_CCE()).g2(target)) {
      this_0.e(new PathSegment(target, 0));
    }
    while (!pointer.equals(this.start)) {
      this_0.e(new PathSegment(pointer, getValue(this.n1h_1, pointer)));
      pointer = getValue(this.m1h_1, pointer);
    }
    var tmp$ret$5 = this_0.q3();
    return reversed(tmp$ret$5);
  };
  protoOf(Paths).sd = function () {
    return this.start;
  };
  protoOf(Paths).j1l = function () {
    return this.attackTargets;
  };
  protoOf(Paths).w1o = function (start, cameFrom, costs, attackTargets) {
    return new Paths(start, cameFrom, costs, attackTargets);
  };
  protoOf(Paths).copy = function (start, cameFrom, costs, attackTargets, $super) {
    start = start === VOID ? this.start : start;
    cameFrom = cameFrom === VOID ? this.m1h_1 : cameFrom;
    costs = costs === VOID ? this.n1h_1 : costs;
    attackTargets = attackTargets === VOID ? this.attackTargets : attackTargets;
    return $super === VOID ? this.w1o(start, cameFrom, costs, attackTargets) : $super.w1o.call(this, start, cameFrom, costs, attackTargets);
  };
  protoOf(Paths).toString = function () {
    return 'Paths(start=' + this.start.toString() + ', cameFrom=' + toString_0(this.m1h_1) + ', costs=' + toString_0(this.n1h_1) + ', attackTargets=' + toString_0(this.attackTargets) + ')';
  };
  protoOf(Paths).hashCode = function () {
    var result = this.start.hashCode();
    result = imul(result, 31) + hashCode(this.m1h_1) | 0;
    result = imul(result, 31) + hashCode(this.n1h_1) | 0;
    result = imul(result, 31) + hashCode(this.attackTargets) | 0;
    return result;
  };
  protoOf(Paths).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Paths))
      return false;
    var tmp0_other_with_cast = other instanceof Paths ? other : THROW_CCE();
    if (!this.start.equals(tmp0_other_with_cast.start))
      return false;
    if (!equals(this.m1h_1, tmp0_other_with_cast.m1h_1))
      return false;
    if (!equals(this.n1h_1, tmp0_other_with_cast.n1h_1))
      return false;
    if (!equals(this.attackTargets, tmp0_other_with_cast.attackTargets))
      return false;
    return true;
  };
  function PathSegment(coordinates, cost) {
    this.coordinates = coordinates;
    this.cost = cost;
  }
  protoOf(PathSegment).m1f = function () {
    return this.coordinates;
  };
  protoOf(PathSegment).x1o = function () {
    return this.cost;
  };
  protoOf(PathSegment).sd = function () {
    return this.coordinates;
  };
  protoOf(PathSegment).td = function () {
    return this.cost;
  };
  protoOf(PathSegment).y1o = function (coordinates, cost) {
    return new PathSegment(coordinates, cost);
  };
  protoOf(PathSegment).copy = function (coordinates, cost, $super) {
    coordinates = coordinates === VOID ? this.coordinates : coordinates;
    cost = cost === VOID ? this.cost : cost;
    return $super === VOID ? this.y1o(coordinates, cost) : $super.y1o.call(this, coordinates, cost);
  };
  protoOf(PathSegment).toString = function () {
    return 'PathSegment(coordinates=' + this.coordinates.toString() + ', cost=' + this.cost + ')';
  };
  protoOf(PathSegment).hashCode = function () {
    var result = this.coordinates.hashCode();
    result = imul(result, 31) + this.cost | 0;
    return result;
  };
  protoOf(PathSegment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PathSegment))
      return false;
    var tmp0_other_with_cast = other instanceof PathSegment ? other : THROW_CCE();
    if (!this.coordinates.equals(tmp0_other_with_cast.coordinates))
      return false;
    if (!(this.cost === tmp0_other_with_cast.cost))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0_3(function_0) {
    this.z1o_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_3).bc = function (a, b) {
    return this.z1o_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).compare = function (a, b) {
    return this.bc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).n3 = function () {
    return this.z1o_1;
  };
  protoOf(sam$kotlin_Comparator$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.n3(), other.n3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_3).hashCode = function () {
    return hashCode(this.n3());
  };
  function HexMap$movementRange$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.rd_1;
    var tmp$ret$1 = b.rd_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function HexMap(tileList) {
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tileList, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = tileList.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      var tmp$ret$0 = element.coords;
      destination.l2(tmp$ret$0, element);
    }
    tmp.g1i_1 = toMutableMap(destination);
  }
  protoOf(HexMap).i1i = function (coordinates) {
    return this.g1i_1.i2(coordinates);
  };
  protoOf(HexMap).h1i = function (center, radius) {
    return getAllInRange(center, radius);
  };
  protoOf(HexMap).n1j = function (coordinates, isBusy) {
    var tile = require_0(this.g1i_1.i2(coordinates));
    var tmp0 = this.g1i_1;
    // Inline function 'kotlin.collections.set' call
    var value = tile.updated(isBusy);
    tmp0.l2(coordinates, value);
  };
  protoOf(HexMap).j1k = function (coordinates, building) {
    var tile = require_0(this.g1i_1.i2(coordinates));
    var tmp0_safe_receiver = building.replaces;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = minus_0(tile.buildings, tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var updatedBuildings = plus_2(tmp1_elvis_lhs == null ? tile.buildings : tmp1_elvis_lhs, building);
    var tmp_0;
    var tmp_1;
    if (building.equals(Building_VILLAGE_HALL_getInstance())) {
      tmp_1 = tile instanceof Grass;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp3_buildings = setOf(Building_VILLAGE_HALL_getInstance());
      tmp_0 = tile.copy(VOID, VOID, VOID, false, false, VOID, tmp3_buildings);
    } else {
      tmp_0 = tile.updated(VOID, updatedBuildings);
    }
    var updated = tmp_0;
    // Inline function 'kotlin.collections.set' call
    this.g1i_1.l2(coordinates, updated);
  };
  protoOf(HexMap).e1k = function (start, movement) {
    var frontier = mutableListOf([to(start, 0)]);
    // Inline function 'kotlin.collections.mutableMapOf' call
    var cameFrom = LinkedHashMap_init_$Create$();
    var totalCosts = mutableMapOf([to(start, 0)]);
    // Inline function 'kotlin.collections.mutableMapOf' call
    var costPerTile = LinkedHashMap_init_$Create$();
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!frontier.p()) {
        break $l$loop;
      }
      // Inline function 'kotlin.collections.sortBy' call
      if (frontier.m() > 1) {
        // Inline function 'kotlin.comparisons.compareBy' call
        var tmp = HexMap$movementRange$lambda;
        var tmp$ret$3 = new sam$kotlin_Comparator$0_3(tmp);
        sortWith(frontier, tmp$ret$3);
      }
      var current = removeFirst(frontier).qd_1;
      // Inline function 'kotlin.collections.mapNotNull' call
      var tmp0 = neighbors(current);
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        var tmp0_safe_receiver = this.g1i_1.i2(element);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          destination.e(tmp0_safe_receiver);
        }
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = destination.j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        $l$block: {
          var currentCost = getValue(totalCosts, current);
          if (movement <= currentCost || element_0.movementCost() === 100000) {
            break $l$block;
          }
          var newCost = getValue(totalCosts, current) + element_0.movementCost() | 0;
          var tmp0_safe_receiver_0 = totalCosts.i2(element_0.coords);
          var tmp_0;
          if (tmp0_safe_receiver_0 == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            tmp_0 = tmp0_safe_receiver_0 > newCost;
          }
          if (!(tmp_0 === false)) {
            var tmp2 = element_0.coords;
            // Inline function 'kotlin.collections.set' call
            var value = element_0.movementCost();
            costPerTile.l2(tmp2, value);
            // Inline function 'kotlin.collections.set' call
            var key = element_0.coords;
            totalCosts.l2(key, newCost);
            // Inline function 'kotlin.collections.set' call
            var key_0 = element_0.coords;
            cameFrom.l2(key_0, current);
            frontier.e(to(element_0.coords, newCost));
          }
        }
      }
    }
    return new Paths(start, cameFrom, costPerTile);
  };
  function generateGroup($this, freeTiles, desiredCount) {
    // Inline function 'kotlin.collections.mutableSetOf' call
    var resultTiles = LinkedHashSet_init_$Create$();
    while (resultTiles.m() < desiredCount) {
      var desiredSize = coerceAtMost($this.z1m_1.oe(2, 6), desiredCount - resultTiles.m() | 0);
      var current = mutableSetOf([random(freeTiles, $this.z1m_1)]);
      $l$loop: while (current.m() < desiredSize) {
        var remaining = desiredSize - current.m() | 0;
        // Inline function 'kotlin.collections.mutableSetOf' call
        // Inline function 'kotlin.collections.flatMapTo' call
        var destination = LinkedHashSet_init_$Create$();
        var _iterator__ex2g4s = current.j();
        while (_iterator__ex2g4s.k()) {
          var element = _iterator__ex2g4s.l();
          var list = neighbors(element);
          addAll(destination, list);
        }
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterTo' call
        var destination_0 = ArrayList_init_$Create$();
        var _iterator__ex2g4s_0 = destination.j();
        while (_iterator__ex2g4s_0.k()) {
          var element_0 = _iterator__ex2g4s_0.l();
          if (!current.r(element_0) && freeTiles.r(element_0)) {
            destination_0.e(element_0);
          }
        }
        var toAdd = take(shuffled(destination_0, $this.z1m_1), coerceAtMost($this.z1m_1.oe(1, 3), remaining));
        // Inline function 'kotlin.collections.plusAssign' call
        addAll(current, toAdd);
        if (toAdd.p())
          break $l$loop;
      }
      resultTiles.n(current);
      freeTiles.h1(current);
    }
    return resultTiles;
  }
  function MapData(seed, tiles, units) {
    this.i1n_1 = seed;
    this.j1n_1 = tiles;
    this.k1n_1 = units;
  }
  protoOf(MapData).toString = function () {
    return 'MapData(seed=' + this.i1n_1.toString() + ', tiles=' + toString_0(this.j1n_1) + ', units=' + toString_0(this.k1n_1) + ')';
  };
  protoOf(MapData).hashCode = function () {
    var result = this.i1n_1.hashCode();
    result = imul(result, 31) + hashCode(this.j1n_1) | 0;
    result = imul(result, 31) + hashCode(this.k1n_1) | 0;
    return result;
  };
  protoOf(MapData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapData))
      return false;
    var tmp0_other_with_cast = other instanceof MapData ? other : THROW_CCE();
    if (!this.i1n_1.equals(tmp0_other_with_cast.i1n_1))
      return false;
    if (!equals(this.j1n_1, tmp0_other_with_cast.j1n_1))
      return false;
    if (!equals(this.k1n_1, tmp0_other_with_cast.k1n_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0_4(function_0) {
    this.a1p_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_4).bc = function (a, b) {
    return this.a1p_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_4).compare = function (a, b) {
    return this.bc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_4).n3 = function () {
    return this.a1p_1;
  };
  protoOf(sam$kotlin_Comparator$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.n3(), other.n3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_4).hashCode = function () {
    return hashCode(this.n3());
  };
  function MapGenerator$generate$lambda($layout, $borderWaterTiles) {
    return function (tile) {
      var tmp0 = neighbors(tile);
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlin.collections.count' call
        var tmp;
        if (isInterface(tmp0, Collection)) {
          tmp = tmp0.p();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = 0;
          break $l$block;
        }
        var count = 0;
        var _iterator__ex2g4s = tmp0.j();
        while (_iterator__ex2g4s.k()) {
          var element = _iterator__ex2g4s.l();
          if ($layout.r(element)) {
            count = count + 1 | 0;
            checkCountOverflow(count);
          }
        }
        tmp$ret$0 = count;
      }
      // Inline function 'kotlin.also' call
      var this_0 = tmp$ret$0 < 6;
      if (this_0) {
        $borderWaterTiles.e(tile);
      }
      return this_0;
    };
  }
  function MapGenerator$generate$lambda_0($end, $layout, $mountainTiles, $borderWaterTiles, $riverTiles, $forestTiles) {
    return function ($this$dijkstra) {
      return $this$dijkstra.equals($end) ? 0 : !$layout.r($this$dijkstra) ? 100000 : $mountainTiles.r($this$dijkstra) ? 100000 : $borderWaterTiles.r($this$dijkstra) ? 100000 : $riverTiles.r($this$dijkstra) ? 3 : $forestTiles.r($this$dijkstra) ? 10 : 5;
    };
  }
  function MapGenerator$generate$lambda_1($mountainTiles, $riverTiles, $forestTiles, $freeTiles) {
    return function (a, b) {
      // Inline function 'kotlin.comparisons.compareValuesBy' call
      // Inline function 'kotlin.collections.sumOf' call
      var sum = 0;
      var _iterator__ex2g4s = neighbors(b).j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        var tmp = sum;
        sum = tmp + ($mountainTiles.r(element) ? 0 : $riverTiles.r(element) ? 8 : $forestTiles.r(element) ? 5 : 2) | 0;
      }
      var tmp$ret$1 = sum;
      var tmp_0 = addIf(tmp$ret$1, $freeTiles.r(b), 8);
      // Inline function 'kotlin.collections.sumOf' call
      var sum_0 = 0;
      var _iterator__ex2g4s_0 = neighbors(a).j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        var tmp_1 = sum_0;
        sum_0 = tmp_1 + ($mountainTiles.r(element_0) ? 0 : $riverTiles.r(element_0) ? 8 : $forestTiles.r(element_0) ? 5 : 2) | 0;
      }
      var tmp$ret$4 = sum_0;
      var tmp$ret$5 = addIf(tmp$ret$4, $freeTiles.r(a), 8);
      return compareValues(tmp_0, tmp$ret$5);
    };
  }
  function MapGenerator(seed) {
    this.y1m_1 = seed;
    this.z1m_1 = Random(this.y1m_1);
    this.a1n_1 = Random(this.y1m_1);
    this.b1n_1 = 0.35;
    this.c1n_1 = 0.09;
    this.d1n_1 = 0.5;
    this.e1n_1 = 0.05;
    this.f1n_1 = 0.05;
    this.g1n_1 = 0.1;
  }
  protoOf(MapGenerator).h1n = function (width, height, players, startingUnits) {
    var layout = HexLayouts_instance.s1o(width, height);
    // Inline function 'kotlin.collections.mutableSetOf' call
    var borderWaterTiles = LinkedHashSet_init_$Create$();
    var freeTiles = toMutableSet(layout);
    removeAll_0(freeTiles, MapGenerator$generate$lambda(layout, borderWaterTiles));
    var lakes = roundToInt(freeTiles.m() * this.e1n_1);
    var forests = roundToInt(freeTiles.m() * this.b1n_1);
    var animals = roundToInt(freeTiles.m() * this.f1n_1);
    var mountains = roundToInt(freeTiles.m() * this.c1n_1);
    var golds = roundToInt(mountains * this.d1n_1);
    var rivers = roundToInt(freeTiles.m() * this.g1n_1);
    println('Free tiles: ' + freeTiles.m() + ', generating: ' + lakes + ' lakes, ' + forests + ' forests, ' + animals + ' animals, ' + ('' + mountains + ' mountains, at least ' + rivers + ' rivers'));
    var lakeTiles = generateGroup(this, freeTiles, lakes);
    println('Lakes generated');
    // Inline function 'kotlin.collections.mutableMapOf' call
    var units = LinkedHashMap_init_$Create$();
    var distanceBetweenPlayers = 5;
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = borderWaterTiles.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      var list = getAllInRange(element, 2);
      addAll(destination, list);
    }
    var playerSafeZone = toMutableSet(destination);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = players.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      var playerPosition = random(minus(freeTiles, playerSafeZone), this.z1m_1);
      var neighbors_0 = toSet(neighbors(playerPosition));
      var neighbors2 = minus_2(minus_1(getAllInRange(playerPosition, 2), neighbors_0), playerPosition);
      var tmp = listOf(playerPosition);
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_1 = neighbors_0.j();
      while (_iterator__ex2g4s_1.k()) {
        var element_1 = _iterator__ex2g4s_1.l();
        if (freeTiles.r(element_1)) {
          destination_0.e(element_1);
        }
      }
      var tmp_0 = plus(tmp, shuffled(destination_0, this.a1n_1));
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_1 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_2 = neighbors2.j();
      while (_iterator__ex2g4s_2.k()) {
        var element_2 = _iterator__ex2g4s_2.l();
        if (freeTiles.r(element_2)) {
          destination_1.e(element_2);
        }
      }
      var placeableTiles = plus(tmp_0, shuffled(destination_1, this.a1n_1));
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var _iterator__ex2g4s_3 = startingUnits.j();
      while (_iterator__ex2g4s_3.k()) {
        var item = _iterator__ex2g4s_3.l();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var index_0 = checkIndexOverflow(_unary__edvuaz);
        var coordinates = placeableTiles.o(index_0);
        // Inline function 'kotlin.collections.set' call
        var value = to(element_0.playerId, item);
        units.l2(coordinates, value);
        freeTiles.b2(coordinates);
      }
      playerSafeZone.n(getAllInRange(playerPosition, distanceBetweenPlayers));
    }
    var forestTiles = generateGroup(this, freeTiles, forests);
    println('Forests generated');
    var mountainTiles = generateGroup(this, freeTiles, mountains);
    println('Mountains generated');
    var goldTiles = take(shuffled(mountainTiles, this.z1m_1), golds);
    println('Gold generated');
    // Inline function 'kotlin.collections.mutableSetOf' call
    var riverTiles = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var riverOrigins = LinkedHashSet_init_$Create$();
    println('Rivers = ' + rivers);
    while (riverTiles.m() < rivers) {
      var tmp_1;
      if (riverOrigins.p()) {
        tmp_1 = random(borderWaterTiles, this.z1m_1);
      } else {
        var tmp0 = minus(borderWaterTiles, riverOrigins);
        var tmp$ret$18;
        $l$block: {
          // Inline function 'kotlin.collections.maxBy' call
          var iterator = tmp0.j();
          if (!iterator.k())
            throw NoSuchElementException_init_$Create$_0();
          var maxElem = iterator.l();
          if (!iterator.k()) {
            tmp$ret$18 = maxElem;
            break $l$block;
          }
          var borderTile = maxElem;
          // Inline function 'kotlin.collections.minOf' call
          var iterator_0 = riverOrigins.j();
          if (!iterator_0.k())
            throw NoSuchElementException_init_$Create$_0();
          var it = iterator_0.l();
          var minValue = distanceTo(borderTile, it);
          while (iterator_0.k()) {
            var it_0 = iterator_0.l();
            var v = distanceTo(borderTile, it_0);
            if (compareTo(minValue, v) > 0) {
              minValue = v;
            }
          }
          var maxValue = minValue;
          do {
            var e = iterator.l();
            // Inline function 'kotlin.collections.minOf' call
            var iterator_1 = riverOrigins.j();
            if (!iterator_1.k())
              throw NoSuchElementException_init_$Create$_0();
            var it_1 = iterator_1.l();
            var minValue_0 = distanceTo(e, it_1);
            while (iterator_1.k()) {
              var it_2 = iterator_1.l();
              var v_0 = distanceTo(e, it_2);
              if (compareTo(minValue_0, v_0) > 0) {
                minValue_0 = v_0;
              }
            }
            var v_1 = minValue_0;
            if (compareTo(maxValue, v_1) < 0) {
              maxElem = e;
              maxValue = v_1;
            }
          }
           while (iterator.k());
          tmp$ret$18 = maxElem;
        }
        tmp_1 = tmp$ret$18;
      }
      var origin = tmp_1;
      var tmp$ret$27;
      $l$block_0: {
        // Inline function 'kotlin.collections.maxBy' call
        var iterator_2 = borderWaterTiles.j();
        if (!iterator_2.k())
          throw NoSuchElementException_init_$Create$_0();
        var maxElem_0 = iterator_2.l();
        if (!iterator_2.k()) {
          tmp$ret$27 = maxElem_0;
          break $l$block_0;
        }
        var it_3 = maxElem_0;
        var maxValue_0 = distanceTo(it_3, origin);
        do {
          var e_0 = iterator_2.l();
          var v_2 = distanceTo(e_0, origin);
          if (compareTo(maxValue_0, v_2) < 0) {
            maxElem_0 = e_0;
            maxValue_0 = v_2;
          }
        }
         while (iterator_2.k());
        tmp$ret$27 = maxElem_0;
      }
      var end = tmp$ret$27;
      println('Plotting: ' + origin.toString() + ' -> ' + end.toString());
      // Inline function 'kotlin.collections.filter' call
      var tmp0_0 = dijkstra_0(origin, end, MapGenerator$generate$lambda_0(end, layout, mountainTiles, borderWaterTiles, riverTiles, forestTiles));
      // Inline function 'kotlin.collections.filterTo' call
      var destination_2 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_4 = tmp0_0.j();
      while (_iterator__ex2g4s_4.k()) {
        var element_3 = _iterator__ex2g4s_4.l();
        if (!borderWaterTiles.r(element_3) && !lakeTiles.r(element_3)) {
          destination_2.e(element_3);
        }
      }
      var river = destination_2;
      println('Plotted, path size: ' + river.m() + ', total: ' + riverTiles.m());
      riverOrigins.e(origin);
      riverOrigins.e(end);
      riverTiles.n(river);
    }
    println('Total river tiles: ' + riverTiles.m());
    var allWaterTiles = plus_1(lakeTiles, borderWaterTiles);
    var riverConnectingTiles = plus_1(allWaterTiles, riverTiles);
    // Inline function 'kotlin.collections.associateWith' call
    var result = LinkedHashMap_init_$Create$_0(coerceAtLeast(mapCapacity(collectionSizeOrDefault(riverTiles, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var _iterator__ex2g4s_5 = riverTiles.j();
    while (_iterator__ex2g4s_5.k()) {
      var element_4 = _iterator__ex2g4s_5.l();
      // Inline function 'kotlin.collections.filter' call
      var tmp0_1 = get_entries_0();
      // Inline function 'kotlin.collections.filterTo' call
      var destination_3 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_6 = tmp0_1.j();
      while (_iterator__ex2g4s_6.k()) {
        var element_5 = _iterator__ex2g4s_6.l();
        if (riverConnectingTiles.r(movedBy_0(element_4, element_5))) {
          destination_3.e(element_5);
        }
      }
      result.l2(element_4, destination_3);
    }
    var riverEdgesMap = result;
    // Inline function 'kotlin.collections.mutableSetOf' call
    var animalTiles = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var animalFreeZone = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = plus_1(forestTiles, freeTiles);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_2 = MapGenerator$generate$lambda_1(mountainTiles, riverTiles, forestTiles, freeTiles);
    var tmp$ret$41 = new sam$kotlin_Comparator$0_4(tmp_2);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_7 = sortedWith_0(this_0, tmp$ret$41).j();
    while (_iterator__ex2g4s_7.k()) {
      var element_6 = _iterator__ex2g4s_7.l();
      if (animalTiles.m() < animals && !animalFreeZone.r(element_6)) {
        animalTiles.e(element_6);
        animalFreeZone.n(getAllInRange(element_6, 2));
      }
    }
    // Inline function 'kotlin.collections.mutableSetOf' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_4 = LinkedHashSet_init_$Create$();
    var _iterator__ex2g4s_8 = layout.j();
    while (_iterator__ex2g4s_8.k()) {
      var item_0 = _iterator__ex2g4s_8.l();
      var tmp_3;
      if (allWaterTiles.r(item_0)) {
        tmp_3 = new Water(item_0);
      } else if (mountainTiles.r(item_0)) {
        tmp_3 = new Mountains(item_0, VOID, VOID, goldTiles.r(item_0));
      } else {
        var tmp1_forest = forestTiles.r(item_0);
        // Inline function 'kotlin.collections.orEmpty' call
        var tmp0_elvis_lhs = riverEdgesMap.i2(item_0);
        var tmp2_riverEdges = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
        var tmp3_animals = animalTiles.r(item_0);
        var tmp0_2 = neighbors(item_0);
        var tmp$ret$47;
        $l$block_2: {
          // Inline function 'kotlin.collections.any' call
          var tmp_4;
          if (isInterface(tmp0_2, Collection)) {
            tmp_4 = tmp0_2.p();
          } else {
            tmp_4 = false;
          }
          if (tmp_4) {
            tmp$ret$47 = false;
            break $l$block_2;
          }
          var _iterator__ex2g4s_9 = tmp0_2.j();
          while (_iterator__ex2g4s_9.k()) {
            var element_7 = _iterator__ex2g4s_9.l();
            if (allWaterTiles.r(element_7)) {
              tmp$ret$47 = true;
              break $l$block_2;
            }
          }
          tmp$ret$47 = false;
        }
        var tmp4_coast = tmp$ret$47;
        var tmp5_isBusy = units.g2(item_0);
        tmp_3 = new Grass(item_0, tmp5_isBusy, tmp4_coast, tmp1_forest, tmp3_animals, tmp2_riverEdges);
      }
      var tmp$ret$49 = tmp_3;
      destination_4.e(tmp$ret$49);
    }
    return new MapData(this.y1m_1, destination_4, units);
  };
  var Building_VILLAGE_HALL_instance;
  var Building_TOWN_HALL_instance;
  var Building_CASTLE_instance;
  var Building_ROAD_instance;
  var Building_WATCH_TOWER_instance;
  var Building_FISH_TRAP_instance;
  var Building_FISHING_SHIP_instance;
  var Building_FISHING_HUT_instance;
  var Building_PORT_instance;
  var Building_LUMBERCAMP_instance;
  var Building_SAWMILL_instance;
  var Building_FARM_instance;
  var Building_WINDMILL_instance;
  var Building_RIVERLAND_FARM_instance;
  var Building_WATERMILL_instance;
  var Building_HUNTERS_CAMP_instance;
  var Building_BUTCHERY_instance;
  var Building_MINE_instance;
  var Building_MARKET_instance;
  var Building_GUARD_TOWERS_instance;
  var Building_WALLS_instance;
  var Building_BARRACKS_instance;
  var Building_BLACKSMITH_instance;
  var Building_ARMORERS_WORKSHOP_instance;
  var Building_STABLE_instance;
  var Building_WARHORSE_STABLES_instance;
  var Building_KNIGHTS_HALL_instance;
  var Building_ARCHERY_RANGE_instance;
  var Building_ARBALEST_GUILD_instance;
  var Building_SIEGE_WORKSHOP_instance;
  function Building_init_$Init$(name, ordinal, tileRequirement, buildingRequirements, cost, bonus, replaces, $this) {
    buildingRequirements = buildingRequirements === VOID ? emptySet() : buildingRequirements;
    replaces = replaces === VOID ? null : replaces;
    Building.call($this, name, ordinal, tileRequirement, buildingRequirements, cost, listOf(bonus), replaces);
    return $this;
  }
  function Building_init_$Create$(name, ordinal, tileRequirement, buildingRequirements, cost, bonus, replaces) {
    return Building_init_$Init$(name, ordinal, tileRequirement, buildingRequirements, cost, bonus, replaces, objectCreate(protoOf(Building)));
  }
  function getAllReplacements($this) {
    // Inline function 'kotlin.collections.buildSet' call
    // Inline function 'kotlin.collections.buildSetInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = LinkedHashSet_init_$Create$();
    var tmp0_safe_receiver = $this.replaces;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.e(tmp0_safe_receiver);
      this_0.n(getAllReplacements(tmp0_safe_receiver));
    }
    return this_0.q3();
  }
  function Companion_7() {
  }
  protoOf(Companion_7).b1p = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Building_VILLAGE_HALL_getInstance(), Building_TOWN_HALL_getInstance(), Building_CASTLE_getInstance()];
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    return Companion_instance_8;
  }
  function values_3() {
    return [Building_VILLAGE_HALL_getInstance(), Building_TOWN_HALL_getInstance(), Building_CASTLE_getInstance(), Building_ROAD_getInstance(), Building_WATCH_TOWER_getInstance(), Building_FISH_TRAP_getInstance(), Building_FISHING_SHIP_getInstance(), Building_FISHING_HUT_getInstance(), Building_PORT_getInstance(), Building_LUMBERCAMP_getInstance(), Building_SAWMILL_getInstance(), Building_FARM_getInstance(), Building_WINDMILL_getInstance(), Building_RIVERLAND_FARM_getInstance(), Building_WATERMILL_getInstance(), Building_HUNTERS_CAMP_getInstance(), Building_BUTCHERY_getInstance(), Building_MINE_getInstance(), Building_MARKET_getInstance(), Building_GUARD_TOWERS_getInstance(), Building_WALLS_getInstance(), Building_BARRACKS_getInstance(), Building_BLACKSMITH_getInstance(), Building_ARMORERS_WORKSHOP_getInstance(), Building_STABLE_getInstance(), Building_WARHORSE_STABLES_getInstance(), Building_KNIGHTS_HALL_getInstance(), Building_ARCHERY_RANGE_getInstance(), Building_ARBALEST_GUILD_getInstance(), Building_SIEGE_WORKSHOP_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'VILLAGE_HALL':
        return Building_VILLAGE_HALL_getInstance();
      case 'TOWN_HALL':
        return Building_TOWN_HALL_getInstance();
      case 'CASTLE':
        return Building_CASTLE_getInstance();
      case 'ROAD':
        return Building_ROAD_getInstance();
      case 'WATCH_TOWER':
        return Building_WATCH_TOWER_getInstance();
      case 'FISH_TRAP':
        return Building_FISH_TRAP_getInstance();
      case 'FISHING_SHIP':
        return Building_FISHING_SHIP_getInstance();
      case 'FISHING_HUT':
        return Building_FISHING_HUT_getInstance();
      case 'PORT':
        return Building_PORT_getInstance();
      case 'LUMBERCAMP':
        return Building_LUMBERCAMP_getInstance();
      case 'SAWMILL':
        return Building_SAWMILL_getInstance();
      case 'FARM':
        return Building_FARM_getInstance();
      case 'WINDMILL':
        return Building_WINDMILL_getInstance();
      case 'RIVERLAND_FARM':
        return Building_RIVERLAND_FARM_getInstance();
      case 'WATERMILL':
        return Building_WATERMILL_getInstance();
      case 'HUNTERS_CAMP':
        return Building_HUNTERS_CAMP_getInstance();
      case 'BUTCHERY':
        return Building_BUTCHERY_getInstance();
      case 'MINE':
        return Building_MINE_getInstance();
      case 'MARKET':
        return Building_MARKET_getInstance();
      case 'GUARD_TOWERS':
        return Building_GUARD_TOWERS_getInstance();
      case 'WALLS':
        return Building_WALLS_getInstance();
      case 'BARRACKS':
        return Building_BARRACKS_getInstance();
      case 'BLACKSMITH':
        return Building_BLACKSMITH_getInstance();
      case 'ARMORERS_WORKSHOP':
        return Building_ARMORERS_WORKSHOP_getInstance();
      case 'STABLE':
        return Building_STABLE_getInstance();
      case 'WARHORSE_STABLES':
        return Building_WARHORSE_STABLES_getInstance();
      case 'KNIGHTS_HALL':
        return Building_KNIGHTS_HALL_getInstance();
      case 'ARCHERY_RANGE':
        return Building_ARCHERY_RANGE_getInstance();
      case 'ARBALEST_GUILD':
        return Building_ARBALEST_GUILD_getInstance();
      case 'SIEGE_WORKSHOP':
        return Building_SIEGE_WORKSHOP_getInstance();
      default:
        Building_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_3());
    return $ENTRIES_1;
  }
  function Building$lambda(it) {
    return false;
  }
  function Building$lambda_0(it) {
    return it.buildings.r(Building_VILLAGE_HALL_getInstance());
  }
  function Building$lambda_1(it) {
    return it.buildings.r(Building_TOWN_HALL_getInstance());
  }
  function Building$lambda_2(it) {
    var tmp;
    if (it instanceof Grass) {
      tmp = isNotACity(it);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function Building$lambda_3(it) {
    var tmp;
    if (it instanceof Grass) {
      tmp = isNotACity(it);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function Building$lambda_4(it) {
    return it instanceof Water;
  }
  function Building$lambda_5(it) {
    return it instanceof Water;
  }
  function Building$lambda_6(it) {
    var tmp;
    var tmp_0;
    if (isNotACity(it)) {
      tmp_0 = it instanceof Grass;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = it.coast;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function Building$lambda_7(it) {
    return Building_FISHING_HUT_getInstance().tileRequirement(it);
  }
  function Building$lambda_8(it) {
    var tmp;
    var tmp_0;
    if (isNotACity(it)) {
      tmp_0 = it instanceof Grass;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = it.forest;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function Building$lambda_9(it) {
    return Building_LUMBERCAMP_getInstance().tileRequirement(it);
  }
  function Building$lambda_10(it) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (isNotACity(it)) {
      tmp_1 = it instanceof Grass;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = !it.forest;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !it.river;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function Building$lambda_11(it) {
    return Building_FARM_getInstance().tileRequirement(it);
  }
  function Building$lambda_12(it) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (isNotACity(it)) {
      tmp_1 = it instanceof Grass;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = it.river;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !it.forest;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function Building$lambda_13(it) {
    return Building_RIVERLAND_FARM_getInstance().tileRequirement(it);
  }
  function Building$lambda_14(it) {
    var tmp;
    var tmp_0;
    if (isNotACity(it)) {
      tmp_0 = it instanceof Grass;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = it.animals;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function Building$lambda_15(it) {
    return Building_HUNTERS_CAMP_getInstance().tileRequirement(it);
  }
  function Building$lambda_16(it) {
    var tmp;
    if (it instanceof Mountains) {
      tmp = it.gold;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function Building$lambda_17(it) {
    return isACity(it);
  }
  function Building$lambda_18(it) {
    return isACity(it);
  }
  function Building$lambda_19(it) {
    return isACity(it);
  }
  function Building$lambda_20(it) {
    return isACity(it);
  }
  function Building$lambda_21(it) {
    return isACity(it);
  }
  function Building$lambda_22(it) {
    return isACity(it);
  }
  function Building$lambda_23(it) {
    return isACity(it);
  }
  function Building$lambda_24(it) {
    return isACity(it);
  }
  function Building$lambda_25(it) {
    return isACity(it);
  }
  function Building$lambda_26(it) {
    return isACity(it);
  }
  function Building$lambda_27(it) {
    return isACity(it);
  }
  function Building$lambda_28(it) {
    return isACity(it);
  }
  var Building_entriesInitialized;
  function Building_initEntries() {
    if (Building_entriesInitialized)
      return Unit_instance;
    Building_entriesInitialized = true;
    Building_VILLAGE_HALL_instance = new Building('VILLAGE_HALL', 0, Building$lambda, VOID, new Stockpiles(), listOf_0([new OverrideMovementCost(5), new StockCollectBonus(new Stockpiles(VOID, VOID, 1))]));
    var tmp0_replaces = Building_VILLAGE_HALL_getInstance();
    var tmp1_cost = new Stockpiles(100, VOID, 50);
    var tmp2_bonuses = listOf_0([new OverrideMovementCost(5), new StockCollectBonus(new Stockpiles(VOID, VOID, 3)), new DefenseBonus(1)]);
    Building_TOWN_HALL_instance = new Building('TOWN_HALL', 1, Building$lambda_0, VOID, tmp1_cost, tmp2_bonuses, tmp0_replaces);
    var tmp3_replaces = Building_TOWN_HALL_getInstance();
    var tmp4_cost = new Stockpiles(300, VOID, 100);
    var tmp5_bonuses = listOf_0([new OverrideMovementCost(5), new StockCollectBonus(new Stockpiles(VOID, VOID, 5)), new DefenseBonus(1)]);
    Building_CASTLE_instance = new Building('CASTLE', 2, Building$lambda_1, VOID, tmp4_cost, tmp5_bonuses, tmp3_replaces);
    Building_ROAD_instance = Building_init_$Create$('ROAD', 3, Building$lambda_2, VOID, new Stockpiles(VOID, VOID, 5), new OverrideMovementCost(5));
    Building_WATCH_TOWER_instance = Building_init_$Create$('WATCH_TOWER', 4, Building$lambda_3, VOID, new Stockpiles(VOID, 10, 5), new VisionUpgrade(3));
    Building_FISH_TRAP_instance = Building_init_$Create$('FISH_TRAP', 5, Building$lambda_4, VOID, new Stockpiles(VOID, 5), new StockCollectBonus(new Stockpiles(1)));
    Building_FISHING_SHIP_instance = Building_init_$Create$('FISHING_SHIP', 6, Building$lambda_5, VOID, new Stockpiles(VOID, 20), new StockCollectBonus(new Stockpiles(3)));
    Building_FISHING_HUT_instance = Building_init_$Create$('FISHING_HUT', 7, Building$lambda_6, VOID, new Stockpiles(VOID, 10), new StockCollectBonus(new Stockpiles(1)));
    Building_PORT_instance = Building_init_$Create$('PORT', 8, Building$lambda_7, setOf(Building_FISHING_HUT_getInstance()), new Stockpiles(VOID, 35), new StockCollectBonus(new Stockpiles(2, VOID, 3)));
    Building_LUMBERCAMP_instance = Building_init_$Create$('LUMBERCAMP', 9, Building$lambda_8, VOID, new Stockpiles(VOID, 10), new StockCollectBonus(new Stockpiles(VOID, 1)));
    Building_SAWMILL_instance = Building_init_$Create$('SAWMILL', 10, Building$lambda_9, setOf(Building_LUMBERCAMP_getInstance()), new Stockpiles(VOID, 20), new StockCollectBonus(new Stockpiles(VOID, 3)));
    Building_FARM_instance = Building_init_$Create$('FARM', 11, Building$lambda_10, VOID, new Stockpiles(VOID, 10), new StockCollectBonus(new Stockpiles(1)));
    Building_WINDMILL_instance = Building_init_$Create$('WINDMILL', 12, Building$lambda_11, setOf(Building_FARM_getInstance()), new Stockpiles(VOID, 25), new StockCollectBonus(new Stockpiles(3)));
    Building_RIVERLAND_FARM_instance = Building_init_$Create$('RIVERLAND_FARM', 13, Building$lambda_12, VOID, new Stockpiles(VOID, 10), new StockCollectBonus(new Stockpiles(2)));
    Building_WATERMILL_instance = Building_init_$Create$('WATERMILL', 14, Building$lambda_13, setOf(Building_RIVERLAND_FARM_getInstance()), new Stockpiles(VOID, 25), new StockCollectBonus(new Stockpiles(4)));
    Building_HUNTERS_CAMP_instance = Building_init_$Create$('HUNTERS_CAMP', 15, Building$lambda_14, VOID, new Stockpiles(VOID, 10), new StockCollectBonus(new Stockpiles(1, VOID, 1)));
    Building_BUTCHERY_instance = Building_init_$Create$('BUTCHERY', 16, Building$lambda_15, setOf(Building_HUNTERS_CAMP_getInstance()), new Stockpiles(VOID, 30), new StockCollectBonus(new Stockpiles(3, VOID, 1)));
    Building_MINE_instance = Building_init_$Create$('MINE', 17, Building$lambda_16, VOID, new Stockpiles(VOID, 40), new StockCollectBonus(new Stockpiles(VOID, VOID, 5)));
    Building_MARKET_instance = Building_init_$Create$('MARKET', 18, Building$lambda_17, setOf(Building_TOWN_HALL_getInstance()), new Stockpiles(VOID, 20, 5), new StockCollectBonus(new Stockpiles(VOID, VOID, 3)));
    Building_GUARD_TOWERS_instance = Building_init_$Create$('GUARD_TOWERS', 19, Building$lambda_18, setOf(Building_TOWN_HALL_getInstance()), new Stockpiles(VOID, 40), new DefenseBonus(1));
    Building_WALLS_instance = Building_init_$Create$('WALLS', 20, Building$lambda_19, setOf_0([Building_CASTLE_getInstance(), Building_GUARD_TOWERS_getInstance()]), new Stockpiles(VOID, 60), new DefenseBonus(2));
    Building_BARRACKS_instance = new Building('BARRACKS', 21, Building$lambda_20, VOID, new Stockpiles(VOID, 20));
    Building_BLACKSMITH_instance = new Building('BLACKSMITH', 22, Building$lambda_21, setOf_0([Building_TOWN_HALL_getInstance(), Building_BARRACKS_getInstance()]), new Stockpiles(VOID, 50, 20));
    Building_ARMORERS_WORKSHOP_instance = new Building('ARMORERS_WORKSHOP', 23, Building$lambda_22, setOf_0([Building_CASTLE_getInstance(), Building_BLACKSMITH_getInstance()]), new Stockpiles(VOID, 50, 50));
    Building_STABLE_instance = new Building('STABLE', 24, Building$lambda_23, VOID, new Stockpiles(VOID, 30));
    Building_WARHORSE_STABLES_instance = new Building('WARHORSE_STABLES', 25, Building$lambda_24, setOf_0([Building_TOWN_HALL_getInstance(), Building_STABLE_getInstance()]), new Stockpiles(VOID, 50, 20));
    Building_KNIGHTS_HALL_instance = new Building('KNIGHTS_HALL', 26, Building$lambda_25, setOf_0([Building_CASTLE_getInstance(), Building_WARHORSE_STABLES_getInstance()]), new Stockpiles(VOID, 50, 50));
    Building_ARCHERY_RANGE_instance = new Building('ARCHERY_RANGE', 27, Building$lambda_26, VOID, new Stockpiles(VOID, 30));
    Building_ARBALEST_GUILD_instance = new Building('ARBALEST_GUILD', 28, Building$lambda_27, setOf_0([Building_TOWN_HALL_getInstance(), Building_ARCHERY_RANGE_getInstance()]), new Stockpiles(VOID, 50, 20));
    Building_SIEGE_WORKSHOP_instance = new Building('SIEGE_WORKSHOP', 29, Building$lambda_28, setOf_0([Building_CASTLE_getInstance(), Building_ARBALEST_GUILD_getInstance()]), new Stockpiles(VOID, 50, 50));
  }
  var $ENTRIES_1;
  function Building(name, ordinal, tileRequirement, buildingRequirements, cost, bonuses, replaces) {
    buildingRequirements = buildingRequirements === VOID ? emptySet() : buildingRequirements;
    var tmp;
    if (bonuses === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = bonuses;
    }
    bonuses = tmp;
    replaces = replaces === VOID ? null : replaces;
    Enum.call(this, name, ordinal);
    this.tileRequirement = tileRequirement;
    this.buildingRequirements = buildingRequirements;
    this.cost = cost;
    this.bonuses = bonuses;
    this.replaces = replaces;
  }
  protoOf(Building).f1p = function () {
    return this.tileRequirement;
  };
  protoOf(Building).g1p = function () {
    return this.buildingRequirements;
  };
  protoOf(Building).x1o = function () {
    return this.cost;
  };
  protoOf(Building).h1p = function () {
    return this.bonuses;
  };
  protoOf(Building).i1p = function () {
    return this.replaces;
  };
  protoOf(Building).unlockRequirement = function (tile) {
    var tmp0 = this.buildingRequirements;
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.p();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        var tmp0_0 = tile.buildings;
        var tmp$ret$1;
        $l$block_1: {
          // Inline function 'kotlin.collections.any' call
          var tmp_0;
          if (isInterface(tmp0_0, Collection)) {
            tmp_0 = tmp0_0.p();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$1 = false;
            break $l$block_1;
          }
          var _iterator__ex2g4s_0 = tmp0_0.j();
          while (_iterator__ex2g4s_0.k()) {
            var element_0 = _iterator__ex2g4s_0.l();
            if (element_0.equals(element) || getAllReplacements(element_0).r(element)) {
              tmp$ret$1 = true;
              break $l$block_1;
            }
          }
          tmp$ret$1 = false;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(Building).production = function () {
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = this.bonuses;
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (element instanceof StockCollectBonus) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.fold' call
    var accumulator = new Stockpiles();
    var _iterator__ex2g4s_0 = destination.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      accumulator = accumulator.plus(element_0.r1m_1);
    }
    return accumulator;
  };
  protoOf(Building).defenseBonus = function () {
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = this.bonuses;
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (element instanceof DefenseBonus) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s_0 = destination.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      var tmp = sum;
      sum = tmp + element_0.j1p_1 | 0;
    }
    return sum;
  };
  function OverrideMovementCost(movementCost) {
    this.k1p_1 = movementCost;
  }
  protoOf(OverrideMovementCost).toString = function () {
    return 'OverrideMovementCost(movementCost=' + this.k1p_1 + ')';
  };
  protoOf(OverrideMovementCost).hashCode = function () {
    return this.k1p_1;
  };
  protoOf(OverrideMovementCost).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OverrideMovementCost))
      return false;
    var tmp0_other_with_cast = other instanceof OverrideMovementCost ? other : THROW_CCE();
    if (!(this.k1p_1 === tmp0_other_with_cast.k1p_1))
      return false;
    return true;
  };
  function StockCollectBonus(amount) {
    this.r1m_1 = amount;
  }
  protoOf(StockCollectBonus).toString = function () {
    return 'StockCollectBonus(amount=' + this.r1m_1.toString() + ')';
  };
  protoOf(StockCollectBonus).hashCode = function () {
    return this.r1m_1.hashCode();
  };
  protoOf(StockCollectBonus).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StockCollectBonus))
      return false;
    var tmp0_other_with_cast = other instanceof StockCollectBonus ? other : THROW_CCE();
    if (!this.r1m_1.equals(tmp0_other_with_cast.r1m_1))
      return false;
    return true;
  };
  function DefenseBonus(amount) {
    this.j1p_1 = amount;
  }
  protoOf(DefenseBonus).toString = function () {
    return 'DefenseBonus(amount=' + this.j1p_1 + ')';
  };
  protoOf(DefenseBonus).hashCode = function () {
    return this.j1p_1;
  };
  protoOf(DefenseBonus).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DefenseBonus))
      return false;
    var tmp0_other_with_cast = other instanceof DefenseBonus ? other : THROW_CCE();
    if (!(this.j1p_1 === tmp0_other_with_cast.j1p_1))
      return false;
    return true;
  };
  function VisionUpgrade(amount) {
    this.l1p_1 = amount;
  }
  protoOf(VisionUpgrade).toString = function () {
    return 'VisionUpgrade(amount=' + this.l1p_1 + ')';
  };
  protoOf(VisionUpgrade).hashCode = function () {
    return this.l1p_1;
  };
  protoOf(VisionUpgrade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VisionUpgrade))
      return false;
    var tmp0_other_with_cast = other instanceof VisionUpgrade ? other : THROW_CCE();
    if (!(this.l1p_1 === tmp0_other_with_cast.l1p_1))
      return false;
    return true;
  };
  function isACity(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.buildings;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.p();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        if (contains(Companion_instance_8.cityMainBuildings, element)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function isNotACity(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.buildings;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.p();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        if (contains(Companion_instance_8.cityMainBuildings, element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function Building_VILLAGE_HALL_getInstance() {
    Building_initEntries();
    return Building_VILLAGE_HALL_instance;
  }
  function Building_TOWN_HALL_getInstance() {
    Building_initEntries();
    return Building_TOWN_HALL_instance;
  }
  function Building_CASTLE_getInstance() {
    Building_initEntries();
    return Building_CASTLE_instance;
  }
  function Building_ROAD_getInstance() {
    Building_initEntries();
    return Building_ROAD_instance;
  }
  function Building_WATCH_TOWER_getInstance() {
    Building_initEntries();
    return Building_WATCH_TOWER_instance;
  }
  function Building_FISH_TRAP_getInstance() {
    Building_initEntries();
    return Building_FISH_TRAP_instance;
  }
  function Building_FISHING_SHIP_getInstance() {
    Building_initEntries();
    return Building_FISHING_SHIP_instance;
  }
  function Building_FISHING_HUT_getInstance() {
    Building_initEntries();
    return Building_FISHING_HUT_instance;
  }
  function Building_PORT_getInstance() {
    Building_initEntries();
    return Building_PORT_instance;
  }
  function Building_LUMBERCAMP_getInstance() {
    Building_initEntries();
    return Building_LUMBERCAMP_instance;
  }
  function Building_SAWMILL_getInstance() {
    Building_initEntries();
    return Building_SAWMILL_instance;
  }
  function Building_FARM_getInstance() {
    Building_initEntries();
    return Building_FARM_instance;
  }
  function Building_WINDMILL_getInstance() {
    Building_initEntries();
    return Building_WINDMILL_instance;
  }
  function Building_RIVERLAND_FARM_getInstance() {
    Building_initEntries();
    return Building_RIVERLAND_FARM_instance;
  }
  function Building_WATERMILL_getInstance() {
    Building_initEntries();
    return Building_WATERMILL_instance;
  }
  function Building_HUNTERS_CAMP_getInstance() {
    Building_initEntries();
    return Building_HUNTERS_CAMP_instance;
  }
  function Building_BUTCHERY_getInstance() {
    Building_initEntries();
    return Building_BUTCHERY_instance;
  }
  function Building_MINE_getInstance() {
    Building_initEntries();
    return Building_MINE_instance;
  }
  function Building_MARKET_getInstance() {
    Building_initEntries();
    return Building_MARKET_instance;
  }
  function Building_GUARD_TOWERS_getInstance() {
    Building_initEntries();
    return Building_GUARD_TOWERS_instance;
  }
  function Building_WALLS_getInstance() {
    Building_initEntries();
    return Building_WALLS_instance;
  }
  function Building_BARRACKS_getInstance() {
    Building_initEntries();
    return Building_BARRACKS_instance;
  }
  function Building_BLACKSMITH_getInstance() {
    Building_initEntries();
    return Building_BLACKSMITH_instance;
  }
  function Building_ARMORERS_WORKSHOP_getInstance() {
    Building_initEntries();
    return Building_ARMORERS_WORKSHOP_instance;
  }
  function Building_STABLE_getInstance() {
    Building_initEntries();
    return Building_STABLE_instance;
  }
  function Building_WARHORSE_STABLES_getInstance() {
    Building_initEntries();
    return Building_WARHORSE_STABLES_instance;
  }
  function Building_KNIGHTS_HALL_getInstance() {
    Building_initEntries();
    return Building_KNIGHTS_HALL_instance;
  }
  function Building_ARCHERY_RANGE_getInstance() {
    Building_initEntries();
    return Building_ARCHERY_RANGE_instance;
  }
  function Building_ARBALEST_GUILD_getInstance() {
    Building_initEntries();
    return Building_ARBALEST_GUILD_instance;
  }
  function Building_SIEGE_WORKSHOP_getInstance() {
    Building_initEntries();
    return Building_SIEGE_WORKSHOP_instance;
  }
  var CityLevel_VILLAGE_instance;
  var CityLevel_TOWN_instance;
  var CityLevel_CITY_instance;
  function values_4() {
    return [CityLevel_VILLAGE_getInstance(), CityLevel_TOWN_getInstance(), CityLevel_CITY_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'VILLAGE':
        return CityLevel_VILLAGE_getInstance();
      case 'TOWN':
        return CityLevel_TOWN_getInstance();
      case 'CITY':
        return CityLevel_CITY_getInstance();
      default:
        CityLevel_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var CityLevel_entriesInitialized;
  function CityLevel_initEntries() {
    if (CityLevel_entriesInitialized)
      return Unit_instance;
    CityLevel_entriesInitialized = true;
    CityLevel_VILLAGE_instance = new CityLevel('VILLAGE', 0, 1, 2, 1, 1, 1);
    CityLevel_TOWN_instance = new CityLevel('TOWN', 1, 1, 3, 2, 2, 2);
    CityLevel_CITY_instance = new CityLevel('CITY', 2, 1, 3, 4, 2, 3);
  }
  function CityLevel(name, ordinal, borderRange, visionRange, attack, attackRange, occupationTime) {
    Enum.call(this, name, ordinal);
    this.borderRange = borderRange;
    this.visionRange = visionRange;
    this.attack = attack;
    this.attackRange = attackRange;
    this.occupationTime = occupationTime;
  }
  protoOf(CityLevel).m1p = function () {
    return this.borderRange;
  };
  protoOf(CityLevel).n1p = function () {
    return this.visionRange;
  };
  protoOf(CityLevel).o1p = function () {
    return this.attack;
  };
  protoOf(CityLevel).p1p = function () {
    return this.attackRange;
  };
  protoOf(CityLevel).q1p = function () {
    return this.occupationTime;
  };
  function City$Companion$$childSerializers$_anonymous__xt0clb() {
    return createSimpleEnumSerializer('civ.model.CityLevel', values_4());
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r1p_1 = [null, null, null, lazy(tmp_0, City$Companion$$childSerializers$_anonymous__xt0clb)];
  }
  protoOf(Companion_8).a16 = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('civ.model.City', this, 4);
    tmp0_serialDesc.cv('cityId', true);
    tmp0_serialDesc.cv('playerId', false);
    tmp0_serialDesc.cv('coordinates', false);
    tmp0_serialDesc.cv('level', true);
    this.s1p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).t1p = function (encoder, value) {
    var tmp0_desc = this.s1p_1;
    var tmp1_output = encoder.mn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().r1p_1;
    if (tmp1_output.jp(tmp0_desc, 0) ? true : !(value.cityId === Companion_getInstance_0().hi().li())) {
      tmp1_output.bp(tmp0_desc, 0, value.cityId);
    }
    tmp1_output.bp(tmp0_desc, 1, value.playerId);
    tmp1_output.dp(tmp0_desc, 2, $serializer_getInstance_3(), value.coordinates);
    if (tmp1_output.jp(tmp0_desc, 3) ? true : !value.level.equals(CityLevel_VILLAGE_getInstance())) {
      tmp1_output.dp(tmp0_desc, 3, tmp2_cached[3].f2(), value.level);
    }
    tmp1_output.nn(tmp0_desc);
  };
  protoOf($serializer_4).gk = function (encoder, value) {
    return this.t1p(encoder, value instanceof City ? value : THROW_CCE());
  };
  protoOf($serializer_4).hk = function (decoder) {
    var tmp0_desc = this.s1p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.mn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_10().r1p_1;
    if (tmp8_input.co()) {
      tmp4_local0 = tmp8_input.wn(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.wn(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.yn(tmp0_desc, 2, $serializer_getInstance_3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.yn(tmp0_desc, 3, tmp9_cached[3].f2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.do(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.wn(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.wn(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.yn(tmp0_desc, 2, $serializer_getInstance_3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.yn(tmp0_desc, 3, tmp9_cached[3].f2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.nn(tmp0_desc);
    return City_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_4).fk = function () {
    return this.s1p_1;
  };
  protoOf($serializer_4).rv = function () {
    var tmp0_cached = Companion_getInstance_10().r1p_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_3(), tmp0_cached[3].f2()];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function City_init_$Init$(seen0, cityId, playerId, coordinates, level, serializationConstructorMarker, $this) {
    if (!(6 === (6 & seen0))) {
      throwMissingFieldException(seen0, 6, $serializer_getInstance_4().s1p_1);
    }
    if (0 === (seen0 & 1))
      $this.cityId = Companion_getInstance_0().hi().li();
    else
      $this.cityId = cityId;
    $this.playerId = playerId;
    $this.coordinates = coordinates;
    if (0 === (seen0 & 8))
      $this.level = CityLevel_VILLAGE_getInstance();
    else
      $this.level = level;
    return $this;
  }
  function City_init_$Create$(seen0, cityId, playerId, coordinates, level, serializationConstructorMarker) {
    return City_init_$Init$(seen0, cityId, playerId, coordinates, level, serializationConstructorMarker, objectCreate(protoOf(City)));
  }
  function City(cityId, playerId, coordinates, level) {
    Companion_getInstance_10();
    cityId = cityId === VOID ? Companion_getInstance_0().hi().li() : cityId;
    level = level === VOID ? CityLevel_VILLAGE_getInstance() : level;
    this.cityId = cityId;
    this.playerId = playerId;
    this.coordinates = coordinates;
    this.level = level;
  }
  protoOf(City).u1p = function () {
    return this.cityId;
  };
  protoOf(City).z1h = function () {
    return this.playerId;
  };
  protoOf(City).m1f = function () {
    return this.coordinates;
  };
  protoOf(City).v1p = function () {
    return this.level;
  };
  protoOf(City).m1p = function () {
    return this.level.borderRange;
  };
  protoOf(City).n1p = function () {
    return this.level.visionRange;
  };
  protoOf(City).sd = function () {
    return this.cityId;
  };
  protoOf(City).td = function () {
    return this.playerId;
  };
  protoOf(City).i1f = function () {
    return this.coordinates;
  };
  protoOf(City).j1l = function () {
    return this.level;
  };
  protoOf(City).w1p = function (cityId, playerId, coordinates, level) {
    return new City(cityId, playerId, coordinates, level);
  };
  protoOf(City).copy = function (cityId, playerId, coordinates, level, $super) {
    cityId = cityId === VOID ? this.cityId : cityId;
    playerId = playerId === VOID ? this.playerId : playerId;
    coordinates = coordinates === VOID ? this.coordinates : coordinates;
    level = level === VOID ? this.level : level;
    return $super === VOID ? this.w1p(cityId, playerId, coordinates, level) : $super.w1p.call(this, cityId, playerId, coordinates, level);
  };
  protoOf(City).toString = function () {
    return 'City(cityId=' + this.cityId + ', playerId=' + this.playerId + ', coordinates=' + this.coordinates.toString() + ', level=' + this.level.toString() + ')';
  };
  protoOf(City).hashCode = function () {
    var result = getStringHashCode(this.cityId);
    result = imul(result, 31) + getStringHashCode(this.playerId) | 0;
    result = imul(result, 31) + this.coordinates.hashCode() | 0;
    result = imul(result, 31) + this.level.hashCode() | 0;
    return result;
  };
  protoOf(City).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof City))
      return false;
    var tmp0_other_with_cast = other instanceof City ? other : THROW_CCE();
    if (!(this.cityId === tmp0_other_with_cast.cityId))
      return false;
    if (!(this.playerId === tmp0_other_with_cast.playerId))
      return false;
    if (!this.coordinates.equals(tmp0_other_with_cast.coordinates))
      return false;
    if (!this.level.equals(tmp0_other_with_cast.level))
      return false;
    return true;
  };
  function CityLevel_VILLAGE_getInstance() {
    CityLevel_initEntries();
    return CityLevel_VILLAGE_instance;
  }
  function CityLevel_TOWN_getInstance() {
    CityLevel_initEntries();
    return CityLevel_TOWN_instance;
  }
  function CityLevel_CITY_getInstance() {
    CityLevel_initEntries();
    return CityLevel_CITY_instance;
  }
  var UnitType_SETTLERS_instance;
  var UnitType_WARRIOR_instance;
  var UnitType_SCOUT_instance;
  var UnitType_ARCHER_instance;
  var UnitType_SWORDSMAN_instance;
  var UnitType_RIDER_instance;
  var UnitType_CROSSBOWMAN_instance;
  var UnitType_HEAVY_SWORDSMAN_instance;
  var UnitType_KNIGHT_instance;
  var UnitType_TREBUCHET_instance;
  function Companion_9() {
  }
  protoOf(Companion_9).byValue = function (value) {
    var tmp0 = get_entries_2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.first' call
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        if (element.value === value) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    return tmp$ret$1;
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    return Companion_instance_10;
  }
  function values_5() {
    return [UnitType_SETTLERS_getInstance(), UnitType_WARRIOR_getInstance(), UnitType_SCOUT_getInstance(), UnitType_ARCHER_getInstance(), UnitType_SWORDSMAN_getInstance(), UnitType_RIDER_getInstance(), UnitType_CROSSBOWMAN_getInstance(), UnitType_HEAVY_SWORDSMAN_getInstance(), UnitType_KNIGHT_getInstance(), UnitType_TREBUCHET_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'SETTLERS':
        return UnitType_SETTLERS_getInstance();
      case 'WARRIOR':
        return UnitType_WARRIOR_getInstance();
      case 'SCOUT':
        return UnitType_SCOUT_getInstance();
      case 'ARCHER':
        return UnitType_ARCHER_getInstance();
      case 'SWORDSMAN':
        return UnitType_SWORDSMAN_getInstance();
      case 'RIDER':
        return UnitType_RIDER_getInstance();
      case 'CROSSBOWMAN':
        return UnitType_CROSSBOWMAN_getInstance();
      case 'HEAVY_SWORDSMAN':
        return UnitType_HEAVY_SWORDSMAN_getInstance();
      case 'KNIGHT':
        return UnitType_KNIGHT_getInstance();
      case 'TREBUCHET':
        return UnitType_TREBUCHET_getInstance();
      default:
        UnitType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_5());
    return $ENTRIES_2;
  }
  var UnitType_entriesInitialized;
  function UnitType_initEntries() {
    if (UnitType_entriesInitialized)
      return Unit_instance;
    UnitType_entriesInitialized = true;
    UnitType_SETTLERS_instance = new UnitType('SETTLERS', 0, 'settlers', 0, 0, 0, 5, 1, 1, new Stockpiles(80));
    UnitType_WARRIOR_instance = new UnitType('WARRIOR', 1, 'warrior', 2, 1, 2, 15, 1, 1, new Stockpiles(40), setOf(Building_BARRACKS_getInstance()));
    UnitType_SCOUT_instance = new UnitType('SCOUT', 2, 'scout', 3, 1, 1, 10, 2, 2, new Stockpiles(50), setOf(Building_STABLE_getInstance()));
    UnitType_ARCHER_instance = new UnitType('ARCHER', 3, 'archer', 3, 2, 1, 10, 1, 2, new Stockpiles(40, VOID, 10), setOf(Building_ARCHERY_RANGE_getInstance()));
    UnitType_SWORDSMAN_instance = new UnitType('SWORDSMAN', 4, 'swordsman', 5, 1, 3, 15, 1, 1, new Stockpiles(50, VOID, 10), setOf(Building_BLACKSMITH_getInstance()));
    UnitType_RIDER_instance = new UnitType('RIDER', 5, 'rider', 5, 1, 1, 15, 2, 1, new Stockpiles(60, VOID, 10), setOf(Building_WARHORSE_STABLES_getInstance()));
    UnitType_CROSSBOWMAN_instance = new UnitType('CROSSBOWMAN', 6, 'crossbowman', 6, 2, 1, 15, 1, 2, new Stockpiles(50, VOID, 25), setOf(Building_ARBALEST_GUILD_getInstance()));
    UnitType_HEAVY_SWORDSMAN_instance = new UnitType('HEAVY_SWORDSMAN', 7, 'heavy_swordsman', 8, 1, 10, 20, 1, 1, new Stockpiles(100, VOID, 50), setOf(Building_ARMORERS_WORKSHOP_getInstance()));
    UnitType_KNIGHT_instance = new UnitType('KNIGHT', 8, 'knight', 10, 1, 5, 20, 2, 2, new Stockpiles(100, VOID, 80), setOf(Building_KNIGHTS_HALL_getInstance()));
    UnitType_TREBUCHET_instance = new UnitType('TREBUCHET', 9, 'trebuchet', 10, 3, 0, 10, 1, 3, new Stockpiles(50, VOID, 100), setOf(Building_SIEGE_WORKSHOP_getInstance()));
  }
  var $ENTRIES_2;
  function UnitType(name, ordinal, value, attack, range, defense, maxHp, speed, visionRange, cost, requiredBuildings) {
    requiredBuildings = requiredBuildings === VOID ? emptySet() : requiredBuildings;
    Enum.call(this, name, ordinal);
    this.value = value;
    this.attack = attack;
    this.range = range;
    this.defense = defense;
    this.maxHp = maxHp;
    this.speed = speed;
    this.visionRange = visionRange;
    this.cost = cost;
    this.requiredBuildings = requiredBuildings;
  }
  protoOf(UnitType).f2 = function () {
    return this.value;
  };
  protoOf(UnitType).o1p = function () {
    return this.attack;
  };
  protoOf(UnitType).x1p = function () {
    return this.range;
  };
  protoOf(UnitType).y1p = function () {
    return this.defense;
  };
  protoOf(UnitType).z1p = function () {
    return this.maxHp;
  };
  protoOf(UnitType).a1q = function () {
    return this.speed;
  };
  protoOf(UnitType).n1p = function () {
    return this.visionRange;
  };
  protoOf(UnitType).x1o = function () {
    return this.cost;
  };
  protoOf(UnitType).b1q = function () {
    return this.requiredBuildings;
  };
  protoOf(UnitType).buildingRequirement = function (buildings) {
    return buildings.v1(this.requiredBuildings);
  };
  function CivUnit$Companion$$childSerializers$_anonymous__iybyeu() {
    return createSimpleEnumSerializer('civ.model.UnitType', values_5());
  }
  function CivUnit$Companion$$childSerializers$_anonymous__iybyeu_0() {
    return Companion_getInstance_14().a16();
  }
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, CivUnit$Companion$$childSerializers$_anonymous__iybyeu);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.d1q_1 = [null, tmp_1, null, null, null, null, null, lazy(tmp_2, CivUnit$Companion$$childSerializers$_anonymous__iybyeu_0), null, null, null, null, null, null];
  }
  protoOf(Companion_10).speedToMovement = function (speed) {
    return imul(speed, 10);
  };
  protoOf(Companion_10).a16 = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('civ.model.CivUnit', this, 14);
    tmp0_serialDesc.cv('unitId', true);
    tmp0_serialDesc.cv('unitType', false);
    tmp0_serialDesc.cv('playerId', false);
    tmp0_serialDesc.cv('coordinates', false);
    tmp0_serialDesc.cv('hp', true);
    tmp0_serialDesc.cv('movementLeft', true);
    tmp0_serialDesc.cv('actionPoint', true);
    tmp0_serialDesc.cv('conquerState', true);
    tmp0_serialDesc.cv('attack', true);
    tmp0_serialDesc.cv('defense', true);
    tmp0_serialDesc.cv('attackRange', true);
    tmp0_serialDesc.cv('maxHp', true);
    tmp0_serialDesc.cv('speed', true);
    tmp0_serialDesc.cv('visionRange', true);
    this.e1q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).f1q = function (encoder, value) {
    var tmp0_desc = this.e1q_1;
    var tmp1_output = encoder.mn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().d1q_1;
    if (tmp1_output.jp(tmp0_desc, 0) ? true : !(value.unitId === Companion_getInstance_0().hi().li())) {
      tmp1_output.bp(tmp0_desc, 0, value.unitId);
    }
    tmp1_output.dp(tmp0_desc, 1, tmp2_cached[1].f2(), value.unitType);
    tmp1_output.bp(tmp0_desc, 2, value.playerId);
    tmp1_output.dp(tmp0_desc, 3, $serializer_getInstance_3(), value.coordinates);
    if (tmp1_output.jp(tmp0_desc, 4) ? true : !(value.hp === value.unitType.maxHp)) {
      tmp1_output.wo(tmp0_desc, 4, value.hp);
    }
    if (tmp1_output.jp(tmp0_desc, 5) ? true : !(value.movementLeft === Companion_getInstance_12().speedToMovement(value.unitType.speed))) {
      tmp1_output.wo(tmp0_desc, 5, value.movementLeft);
    }
    if (tmp1_output.jp(tmp0_desc, 6) ? true : !(value.actionPoint === true)) {
      tmp1_output.to(tmp0_desc, 6, value.actionPoint);
    }
    if (tmp1_output.jp(tmp0_desc, 7) ? true : !equals(value.conquerState, None_getInstance_0())) {
      tmp1_output.dp(tmp0_desc, 7, tmp2_cached[7].f2(), value.conquerState);
    }
    if (tmp1_output.jp(tmp0_desc, 8) ? true : !(value.attack === value.unitType.attack)) {
      tmp1_output.wo(tmp0_desc, 8, value.attack);
    }
    if (tmp1_output.jp(tmp0_desc, 9) ? true : !(value.defense === value.unitType.defense)) {
      tmp1_output.wo(tmp0_desc, 9, value.defense);
    }
    if (tmp1_output.jp(tmp0_desc, 10) ? true : !(value.attackRange === value.unitType.range)) {
      tmp1_output.wo(tmp0_desc, 10, value.attackRange);
    }
    if (tmp1_output.jp(tmp0_desc, 11) ? true : !(value.maxHp === value.unitType.maxHp)) {
      tmp1_output.wo(tmp0_desc, 11, value.maxHp);
    }
    if (tmp1_output.jp(tmp0_desc, 12) ? true : !(value.speed === value.unitType.speed)) {
      tmp1_output.wo(tmp0_desc, 12, value.speed);
    }
    if (tmp1_output.jp(tmp0_desc, 13) ? true : !(value.visionRange === value.unitType.visionRange)) {
      tmp1_output.wo(tmp0_desc, 13, value.visionRange);
    }
    tmp1_output.nn(tmp0_desc);
  };
  protoOf($serializer_5).gk = function (encoder, value) {
    return this.f1q(encoder, value instanceof CivUnit ? value : THROW_CCE());
  };
  protoOf($serializer_5).hk = function (decoder) {
    var tmp0_desc = this.e1q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_local5 = 0;
    var tmp10_local6 = false;
    var tmp11_local7 = null;
    var tmp12_local8 = 0;
    var tmp13_local9 = 0;
    var tmp14_local10 = 0;
    var tmp15_local11 = 0;
    var tmp16_local12 = 0;
    var tmp17_local13 = 0;
    var tmp18_input = decoder.mn(tmp0_desc);
    var tmp19_cached = Companion_getInstance_12().d1q_1;
    if (tmp18_input.co()) {
      tmp4_local0 = tmp18_input.wn(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp18_input.yn(tmp0_desc, 1, tmp19_cached[1].f2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp18_input.wn(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp18_input.yn(tmp0_desc, 3, $serializer_getInstance_3(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp18_input.rn(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp18_input.rn(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp18_input.on(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp18_input.yn(tmp0_desc, 7, tmp19_cached[7].f2(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp18_input.rn(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp18_input.rn(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp18_input.rn(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp18_input.rn(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp18_input.rn(tmp0_desc, 12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp18_input.rn(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp18_input.do(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp18_input.wn(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp18_input.yn(tmp0_desc, 1, tmp19_cached[1].f2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp18_input.wn(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp18_input.yn(tmp0_desc, 3, $serializer_getInstance_3(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp18_input.rn(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp18_input.rn(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp18_input.on(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp18_input.yn(tmp0_desc, 7, tmp19_cached[7].f2(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp18_input.rn(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp18_input.rn(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp18_input.rn(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp18_input.rn(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp18_input.rn(tmp0_desc, 12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp18_input.rn(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp18_input.nn(tmp0_desc);
    return CivUnit_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, null);
  };
  protoOf($serializer_5).fk = function () {
    return this.e1q_1;
  };
  protoOf($serializer_5).rv = function () {
    var tmp0_cached = Companion_getInstance_12().d1q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].f2(), StringSerializer_getInstance(), $serializer_getInstance_3(), IntSerializer_getInstance(), IntSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[7].f2(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function CivUnit_init_$Init$(seen0, unitId, unitType, playerId, coordinates, hp, movementLeft, actionPoint, conquerState, attack, defense, attackRange, maxHp, speed, visionRange, serializationConstructorMarker, $this) {
    if (!(14 === (14 & seen0))) {
      throwMissingFieldException(seen0, 14, $serializer_getInstance_5().e1q_1);
    }
    if (0 === (seen0 & 1))
      $this.unitId = Companion_getInstance_0().hi().li();
    else
      $this.unitId = unitId;
    $this.unitType = unitType;
    $this.playerId = playerId;
    $this.coordinates = coordinates;
    if (0 === (seen0 & 16))
      $this.hp = $this.unitType.maxHp;
    else
      $this.hp = hp;
    if (0 === (seen0 & 32))
      $this.movementLeft = Companion_getInstance_12().speedToMovement($this.unitType.speed);
    else
      $this.movementLeft = movementLeft;
    if (0 === (seen0 & 64))
      $this.actionPoint = true;
    else
      $this.actionPoint = actionPoint;
    if (0 === (seen0 & 128))
      $this.conquerState = None_getInstance_0();
    else
      $this.conquerState = conquerState;
    if (0 === (seen0 & 256))
      $this.attack = $this.unitType.attack;
    else
      $this.attack = attack;
    if (0 === (seen0 & 512))
      $this.defense = $this.unitType.defense;
    else
      $this.defense = defense;
    if (0 === (seen0 & 1024))
      $this.attackRange = $this.unitType.range;
    else
      $this.attackRange = attackRange;
    if (0 === (seen0 & 2048))
      $this.maxHp = $this.unitType.maxHp;
    else
      $this.maxHp = maxHp;
    if (0 === (seen0 & 4096))
      $this.speed = $this.unitType.speed;
    else
      $this.speed = speed;
    if (0 === (seen0 & 8192))
      $this.visionRange = $this.unitType.visionRange;
    else
      $this.visionRange = visionRange;
    return $this;
  }
  function CivUnit_init_$Create$(seen0, unitId, unitType, playerId, coordinates, hp, movementLeft, actionPoint, conquerState, attack, defense, attackRange, maxHp, speed, visionRange, serializationConstructorMarker) {
    return CivUnit_init_$Init$(seen0, unitId, unitType, playerId, coordinates, hp, movementLeft, actionPoint, conquerState, attack, defense, attackRange, maxHp, speed, visionRange, serializationConstructorMarker, objectCreate(protoOf(CivUnit)));
  }
  function CivUnit(unitId, unitType, playerId, coordinates, hp, movementLeft, actionPoint, conquerState) {
    Companion_getInstance_12();
    unitId = unitId === VOID ? Companion_getInstance_0().hi().li() : unitId;
    hp = hp === VOID ? unitType.maxHp : hp;
    movementLeft = movementLeft === VOID ? Companion_getInstance_12().speedToMovement(unitType.speed) : movementLeft;
    actionPoint = actionPoint === VOID ? true : actionPoint;
    conquerState = conquerState === VOID ? None_getInstance_0() : conquerState;
    this.unitId = unitId;
    this.unitType = unitType;
    this.playerId = playerId;
    this.coordinates = coordinates;
    this.hp = hp;
    this.movementLeft = movementLeft;
    this.actionPoint = actionPoint;
    this.conquerState = conquerState;
    this.attack = this.unitType.attack;
    this.defense = this.unitType.defense;
    this.attackRange = this.unitType.range;
    this.maxHp = this.unitType.maxHp;
    this.speed = this.unitType.speed;
    this.visionRange = this.unitType.visionRange;
  }
  protoOf(CivUnit).d1f = function () {
    return this.unitId;
  };
  protoOf(CivUnit).p1f = function () {
    return this.unitType;
  };
  protoOf(CivUnit).z1h = function () {
    return this.playerId;
  };
  protoOf(CivUnit).m1f = function () {
    return this.coordinates;
  };
  protoOf(CivUnit).g1q = function () {
    return this.hp;
  };
  protoOf(CivUnit).h1q = function () {
    return this.movementLeft;
  };
  protoOf(CivUnit).i1q = function () {
    return this.actionPoint;
  };
  protoOf(CivUnit).j1q = function () {
    return this.conquerState;
  };
  protoOf(CivUnit).o1p = function () {
    return this.attack;
  };
  protoOf(CivUnit).y1p = function () {
    return this.defense;
  };
  protoOf(CivUnit).p1p = function () {
    return this.attackRange;
  };
  protoOf(CivUnit).z1p = function () {
    return this.maxHp;
  };
  protoOf(CivUnit).a1q = function () {
    return this.speed;
  };
  protoOf(CivUnit).n1p = function () {
    return this.visionRange;
  };
  protoOf(CivUnit).sd = function () {
    return this.unitId;
  };
  protoOf(CivUnit).td = function () {
    return this.unitType;
  };
  protoOf(CivUnit).i1f = function () {
    return this.playerId;
  };
  protoOf(CivUnit).j1l = function () {
    return this.coordinates;
  };
  protoOf(CivUnit).k1l = function () {
    return this.hp;
  };
  protoOf(CivUnit).l1l = function () {
    return this.movementLeft;
  };
  protoOf(CivUnit).m1l = function () {
    return this.actionPoint;
  };
  protoOf(CivUnit).n1l = function () {
    return this.conquerState;
  };
  protoOf(CivUnit).k1q = function (unitId, unitType, playerId, coordinates, hp, movementLeft, actionPoint, conquerState) {
    return new CivUnit(unitId, unitType, playerId, coordinates, hp, movementLeft, actionPoint, conquerState);
  };
  protoOf(CivUnit).copy = function (unitId, unitType, playerId, coordinates, hp, movementLeft, actionPoint, conquerState, $super) {
    unitId = unitId === VOID ? this.unitId : unitId;
    unitType = unitType === VOID ? this.unitType : unitType;
    playerId = playerId === VOID ? this.playerId : playerId;
    coordinates = coordinates === VOID ? this.coordinates : coordinates;
    hp = hp === VOID ? this.hp : hp;
    movementLeft = movementLeft === VOID ? this.movementLeft : movementLeft;
    actionPoint = actionPoint === VOID ? this.actionPoint : actionPoint;
    conquerState = conquerState === VOID ? this.conquerState : conquerState;
    return $super === VOID ? this.k1q(unitId, unitType, playerId, coordinates, hp, movementLeft, actionPoint, conquerState) : $super.k1q.call(this, unitId, unitType, playerId, coordinates, hp, movementLeft, actionPoint, conquerState);
  };
  protoOf(CivUnit).toString = function () {
    return 'CivUnit(unitId=' + this.unitId + ', unitType=' + this.unitType.toString() + ', playerId=' + this.playerId + ', coordinates=' + this.coordinates.toString() + ', hp=' + this.hp + ', movementLeft=' + this.movementLeft + ', actionPoint=' + this.actionPoint + ', conquerState=' + toString_0(this.conquerState) + ')';
  };
  protoOf(CivUnit).hashCode = function () {
    var result = getStringHashCode(this.unitId);
    result = imul(result, 31) + this.unitType.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.playerId) | 0;
    result = imul(result, 31) + this.coordinates.hashCode() | 0;
    result = imul(result, 31) + this.hp | 0;
    result = imul(result, 31) + this.movementLeft | 0;
    result = imul(result, 31) + getBooleanHashCode(this.actionPoint) | 0;
    result = imul(result, 31) + hashCode(this.conquerState) | 0;
    return result;
  };
  protoOf(CivUnit).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CivUnit))
      return false;
    var tmp0_other_with_cast = other instanceof CivUnit ? other : THROW_CCE();
    if (!(this.unitId === tmp0_other_with_cast.unitId))
      return false;
    if (!this.unitType.equals(tmp0_other_with_cast.unitType))
      return false;
    if (!(this.playerId === tmp0_other_with_cast.playerId))
      return false;
    if (!this.coordinates.equals(tmp0_other_with_cast.coordinates))
      return false;
    if (!(this.hp === tmp0_other_with_cast.hp))
      return false;
    if (!(this.movementLeft === tmp0_other_with_cast.movementLeft))
      return false;
    if (!(this.actionPoint === tmp0_other_with_cast.actionPoint))
      return false;
    if (!equals(this.conquerState, tmp0_other_with_cast.conquerState))
      return false;
    return true;
  };
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.m1q_1.f2();
  }
  function ConquerState$None$_anonymous__u29w6f() {
    var tmp = None_getInstance_0();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return ObjectSerializer_init_$Create$('civ.model.ConquerState.None', tmp, tmp$ret$2);
  }
  function Companion_11() {
  }
  protoOf(Companion_11).a16 = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_12;
  function Companion_getInstance_13() {
    return Companion_instance_12;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('civ.model.ConquerState.Occupying', this, 2);
    tmp0_serialDesc.cv('turnsLeft', false);
    tmp0_serialDesc.cv('canConquer', true);
    this.n1q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).o1q = function (encoder, value) {
    var tmp0_desc = this.n1q_1;
    var tmp1_output = encoder.mn(tmp0_desc);
    tmp1_output.wo(tmp0_desc, 0, value.turnsLeft);
    if (tmp1_output.jp(tmp0_desc, 1) ? true : !(value.canConquer === (value.turnsLeft === 0))) {
      tmp1_output.to(tmp0_desc, 1, value.canConquer);
    }
    tmp1_output.nn(tmp0_desc);
  };
  protoOf($serializer_6).gk = function (encoder, value) {
    return this.o1q(encoder, value instanceof Occupying ? value : THROW_CCE());
  };
  protoOf($serializer_6).hk = function (decoder) {
    var tmp0_desc = this.n1q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = false;
    var tmp6_input = decoder.mn(tmp0_desc);
    if (tmp6_input.co()) {
      tmp4_local0 = tmp6_input.rn(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.on(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.do(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.rn(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.on(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.nn(tmp0_desc);
    return Occupying_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_6).fk = function () {
    return this.n1q_1;
  };
  protoOf($serializer_6).rv = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function Occupying_init_$Init$(seen0, turnsLeft, canConquer, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_6().n1q_1);
    }
    ConquerState_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.turnsLeft = turnsLeft;
    if (0 === (seen0 & 2))
      $this.l1h_1 = $this.turnsLeft === 0;
    else
      $this.l1h_1 = canConquer;
    return $this;
  }
  function Occupying_init_$Create$(seen0, turnsLeft, canConquer, serializationConstructorMarker) {
    return Occupying_init_$Init$(seen0, turnsLeft, canConquer, serializationConstructorMarker, objectCreate(protoOf(Occupying)));
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.c1q_1.f2();
  }
  function ConquerState$Companion$_anonymous__30kftd() {
    var tmp = getKClass(ConquerState);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(None_0), getKClass(Occupying)];
    var tmp_1 = None_getInstance_0();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = [ObjectSerializer_init_$Create$('civ.model.ConquerState.None', tmp_1, tmp$ret$5), $serializer_getInstance_6()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [];
    return SealedClassSerializer_init_$Create$('civ.model.ConquerState', tmp, tmp_0, tmp_2, tmp$ret$11);
  }
  function None_0() {
    None_instance_0 = this;
    ConquerState.call(this);
    this.l1q_1 = false;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.m1q_1 = lazy(tmp_0, ConquerState$None$_anonymous__u29w6f);
  }
  protoOf(None_0).p1q = function () {
    return this.l1q_1;
  };
  protoOf(None_0).a16 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(None_0).ew = function (typeParamsSerializers) {
    return this.a16();
  };
  protoOf(None_0).toString = function () {
    return 'None';
  };
  protoOf(None_0).hashCode = function () {
    return 1812115077;
  };
  protoOf(None_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof None_0))
      return false;
    other instanceof None_0 || THROW_CCE();
    return true;
  };
  var None_instance_0;
  function None_getInstance_0() {
    if (None_instance_0 == null)
      new None_0();
    return None_instance_0;
  }
  function Occupying(turnsLeft) {
    ConquerState.call(this);
    this.turnsLeft = turnsLeft;
    this.l1h_1 = this.turnsLeft === 0;
  }
  protoOf(Occupying).q1q = function () {
    return this.turnsLeft;
  };
  protoOf(Occupying).p1q = function () {
    return this.l1h_1;
  };
  protoOf(Occupying).onTurnPassed = function () {
    return new Occupying(coerceAtLeast(this.turnsLeft - 1 | 0, 0));
  };
  protoOf(Occupying).toString = function () {
    return 'Occupying(' + this.turnsLeft + ')';
  };
  function Companion_12() {
    Companion_instance_13 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.c1q_1 = lazy(tmp_0, ConquerState$Companion$_anonymous__30kftd);
  }
  protoOf(Companion_12).a16 = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_12).ew = function (typeParamsSerializers) {
    return this.a16();
  };
  var Companion_instance_13;
  function Companion_getInstance_14() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function ConquerState_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function ConquerState() {
    Companion_getInstance_14();
  }
  protoOf(ConquerState).onTurnPassed = function () {
    return this;
  };
  function UnitType_SETTLERS_getInstance() {
    UnitType_initEntries();
    return UnitType_SETTLERS_instance;
  }
  function UnitType_WARRIOR_getInstance() {
    UnitType_initEntries();
    return UnitType_WARRIOR_instance;
  }
  function UnitType_SCOUT_getInstance() {
    UnitType_initEntries();
    return UnitType_SCOUT_instance;
  }
  function UnitType_ARCHER_getInstance() {
    UnitType_initEntries();
    return UnitType_ARCHER_instance;
  }
  function UnitType_SWORDSMAN_getInstance() {
    UnitType_initEntries();
    return UnitType_SWORDSMAN_instance;
  }
  function UnitType_RIDER_getInstance() {
    UnitType_initEntries();
    return UnitType_RIDER_instance;
  }
  function UnitType_CROSSBOWMAN_getInstance() {
    UnitType_initEntries();
    return UnitType_CROSSBOWMAN_instance;
  }
  function UnitType_HEAVY_SWORDSMAN_getInstance() {
    UnitType_initEntries();
    return UnitType_HEAVY_SWORDSMAN_instance;
  }
  function UnitType_KNIGHT_getInstance() {
    UnitType_initEntries();
    return UnitType_KNIGHT_instance;
  }
  function UnitType_TREBUCHET_getInstance() {
    UnitType_initEntries();
    return UnitType_TREBUCHET_instance;
  }
  function Player$Companion$$childSerializers$_anonymous__rslo3t() {
    return createSimpleEnumSerializer('civ.model.PlayerColor', values_6());
  }
  function Player$Companion$$childSerializers$_anonymous__rslo3t_0() {
    return createSimpleEnumSerializer('civ.ai.AiType', values());
  }
  function Companion_13() {
    Companion_instance_14 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, Player$Companion$$childSerializers$_anonymous__rslo3t);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r1q_1 = [null, tmp_1, lazy(tmp_2, Player$Companion$$childSerializers$_anonymous__rslo3t_0), null];
  }
  protoOf(Companion_13).a16 = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('civ.model.Player', this, 4);
    tmp0_serialDesc.cv('name', false);
    tmp0_serialDesc.cv('color', false);
    tmp0_serialDesc.cv('aiType', true);
    tmp0_serialDesc.cv('playerId', true);
    this.s1q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).t1q = function (encoder, value) {
    var tmp0_desc = this.s1q_1;
    var tmp1_output = encoder.mn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_15().r1q_1;
    tmp1_output.bp(tmp0_desc, 0, value.name);
    tmp1_output.dp(tmp0_desc, 1, tmp2_cached[1].f2(), value.color);
    if (tmp1_output.jp(tmp0_desc, 2) ? true : !(value.aiType == null)) {
      tmp1_output.fp(tmp0_desc, 2, tmp2_cached[2].f2(), value.aiType);
    }
    if (tmp1_output.jp(tmp0_desc, 3) ? true : !(value.playerId === Companion_getInstance_0().hi().li())) {
      tmp1_output.bp(tmp0_desc, 3, value.playerId);
    }
    tmp1_output.nn(tmp0_desc);
  };
  protoOf($serializer_7).gk = function (encoder, value) {
    return this.t1q(encoder, value instanceof Player ? value : THROW_CCE());
  };
  protoOf($serializer_7).hk = function (decoder) {
    var tmp0_desc = this.s1q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.mn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_15().r1q_1;
    if (tmp8_input.co()) {
      tmp4_local0 = tmp8_input.wn(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.yn(tmp0_desc, 1, tmp9_cached[1].f2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ao(tmp0_desc, 2, tmp9_cached[2].f2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.wn(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.do(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.wn(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.yn(tmp0_desc, 1, tmp9_cached[1].f2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ao(tmp0_desc, 2, tmp9_cached[2].f2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.wn(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.nn(tmp0_desc);
    return Player_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_7).fk = function () {
    return this.s1q_1;
  };
  protoOf($serializer_7).rv = function () {
    var tmp0_cached = Companion_getInstance_15().r1q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].f2(), get_nullable(tmp0_cached[2].f2()), StringSerializer_getInstance()];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function Player_init_$Init$(seen0, name, color, aiType, playerId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_7().s1q_1);
    }
    $this.name = name;
    $this.color = color;
    if (0 === (seen0 & 4))
      $this.aiType = null;
    else
      $this.aiType = aiType;
    if (0 === (seen0 & 8))
      $this.playerId = Companion_getInstance_0().hi().li();
    else
      $this.playerId = playerId;
    return $this;
  }
  function Player_init_$Create$(seen0, name, color, aiType, playerId, serializationConstructorMarker) {
    return Player_init_$Init$(seen0, name, color, aiType, playerId, serializationConstructorMarker, objectCreate(protoOf(Player)));
  }
  function Player(name, color, aiType, playerId) {
    Companion_getInstance_15();
    aiType = aiType === VOID ? null : aiType;
    playerId = playerId === VOID ? Companion_getInstance_0().hi().li() : playerId;
    this.name = name;
    this.color = color;
    this.aiType = aiType;
    this.playerId = playerId;
  }
  protoOf(Player).p2 = function () {
    return this.name;
  };
  protoOf(Player).u1q = function () {
    return this.color;
  };
  protoOf(Player).v1q = function () {
    return this.aiType;
  };
  protoOf(Player).z1h = function () {
    return this.playerId;
  };
  protoOf(Player).sd = function () {
    return this.name;
  };
  protoOf(Player).td = function () {
    return this.color;
  };
  protoOf(Player).i1f = function () {
    return this.aiType;
  };
  protoOf(Player).j1l = function () {
    return this.playerId;
  };
  protoOf(Player).w1q = function (name, color, aiType, playerId) {
    return new Player(name, color, aiType, playerId);
  };
  protoOf(Player).copy = function (name, color, aiType, playerId, $super) {
    name = name === VOID ? this.name : name;
    color = color === VOID ? this.color : color;
    aiType = aiType === VOID ? this.aiType : aiType;
    playerId = playerId === VOID ? this.playerId : playerId;
    return $super === VOID ? this.w1q(name, color, aiType, playerId) : $super.w1q.call(this, name, color, aiType, playerId);
  };
  protoOf(Player).toString = function () {
    return 'Player(name=' + this.name + ', color=' + this.color.toString() + ', aiType=' + toString(this.aiType) + ', playerId=' + this.playerId + ')';
  };
  protoOf(Player).hashCode = function () {
    var result = getStringHashCode(this.name);
    result = imul(result, 31) + this.color.hashCode() | 0;
    result = imul(result, 31) + (this.aiType == null ? 0 : this.aiType.hashCode()) | 0;
    result = imul(result, 31) + getStringHashCode(this.playerId) | 0;
    return result;
  };
  protoOf(Player).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Player))
      return false;
    var tmp0_other_with_cast = other instanceof Player ? other : THROW_CCE();
    if (!(this.name === tmp0_other_with_cast.name))
      return false;
    if (!this.color.equals(tmp0_other_with_cast.color))
      return false;
    if (!equals(this.aiType, tmp0_other_with_cast.aiType))
      return false;
    if (!(this.playerId === tmp0_other_with_cast.playerId))
      return false;
    return true;
  };
  var PlayerColor_BLUE_instance;
  var PlayerColor_RED_instance;
  var PlayerColor_GREEN_instance;
  var PlayerColor_YELLOW_instance;
  function values_6() {
    return [PlayerColor_BLUE_getInstance(), PlayerColor_RED_getInstance(), PlayerColor_GREEN_getInstance(), PlayerColor_YELLOW_getInstance()];
  }
  function valueOf_5(value) {
    switch (value) {
      case 'BLUE':
        return PlayerColor_BLUE_getInstance();
      case 'RED':
        return PlayerColor_RED_getInstance();
      case 'GREEN':
        return PlayerColor_GREEN_getInstance();
      case 'YELLOW':
        return PlayerColor_YELLOW_getInstance();
      default:
        PlayerColor_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var PlayerColor_entriesInitialized;
  function PlayerColor_initEntries() {
    if (PlayerColor_entriesInitialized)
      return Unit_instance;
    PlayerColor_entriesInitialized = true;
    PlayerColor_BLUE_instance = new PlayerColor('BLUE', 0);
    PlayerColor_RED_instance = new PlayerColor('RED', 1);
    PlayerColor_GREEN_instance = new PlayerColor('GREEN', 2);
    PlayerColor_YELLOW_instance = new PlayerColor('YELLOW', 3);
  }
  function PlayerColor(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlayerColor_BLUE_getInstance() {
    PlayerColor_initEntries();
    return PlayerColor_BLUE_instance;
  }
  function PlayerColor_RED_getInstance() {
    PlayerColor_initEntries();
    return PlayerColor_RED_instance;
  }
  function PlayerColor_GREEN_getInstance() {
    PlayerColor_initEntries();
    return PlayerColor_GREEN_instance;
  }
  function PlayerColor_YELLOW_getInstance() {
    PlayerColor_initEntries();
    return PlayerColor_YELLOW_instance;
  }
  function PlayerTileData(coordinates, isVisible, tile, unit, city, cityRange) {
    this.coordinates = coordinates;
    this.isVisible = isVisible;
    this.tile = tile;
    this.unit = unit;
    this.city = city;
    this.cityRange = cityRange;
  }
  protoOf(PlayerTileData).m1f = function () {
    return this.coordinates;
  };
  protoOf(PlayerTileData).z1q = function () {
    return this.isVisible;
  };
  protoOf(PlayerTileData).a1r = function () {
    return this.tile;
  };
  protoOf(PlayerTileData).z1n = function () {
    return this.unit;
  };
  protoOf(PlayerTileData).b1r = function () {
    return this.city;
  };
  protoOf(PlayerTileData).c1r = function () {
    return this.cityRange;
  };
  protoOf(PlayerTileData).sd = function () {
    return this.coordinates;
  };
  protoOf(PlayerTileData).td = function () {
    return this.isVisible;
  };
  protoOf(PlayerTileData).i1f = function () {
    return this.tile;
  };
  protoOf(PlayerTileData).j1l = function () {
    return this.unit;
  };
  protoOf(PlayerTileData).k1l = function () {
    return this.city;
  };
  protoOf(PlayerTileData).l1l = function () {
    return this.cityRange;
  };
  protoOf(PlayerTileData).d1r = function (coordinates, isVisible, tile, unit, city, cityRange) {
    return new PlayerTileData(coordinates, isVisible, tile, unit, city, cityRange);
  };
  protoOf(PlayerTileData).copy = function (coordinates, isVisible, tile, unit, city, cityRange, $super) {
    coordinates = coordinates === VOID ? this.coordinates : coordinates;
    isVisible = isVisible === VOID ? this.isVisible : isVisible;
    tile = tile === VOID ? this.tile : tile;
    unit = unit === VOID ? this.unit : unit;
    city = city === VOID ? this.city : city;
    cityRange = cityRange === VOID ? this.cityRange : cityRange;
    return $super === VOID ? this.d1r(coordinates, isVisible, tile, unit, city, cityRange) : $super.d1r.call(this, coordinates, isVisible, tile, unit, city, cityRange);
  };
  protoOf(PlayerTileData).toString = function () {
    return 'PlayerTileData(coordinates=' + this.coordinates.toString() + ', isVisible=' + this.isVisible + ', tile=' + toString(this.tile) + ', unit=' + toString(this.unit) + ', city=' + toString(this.city) + ', cityRange=' + toString(this.cityRange) + ')';
  };
  protoOf(PlayerTileData).hashCode = function () {
    var result = this.coordinates.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.isVisible) | 0;
    result = imul(result, 31) + (this.tile == null ? 0 : hashCode(this.tile)) | 0;
    result = imul(result, 31) + (this.unit == null ? 0 : this.unit.hashCode()) | 0;
    result = imul(result, 31) + (this.city == null ? 0 : this.city.hashCode()) | 0;
    result = imul(result, 31) + (this.cityRange == null ? 0 : this.cityRange.hashCode()) | 0;
    return result;
  };
  protoOf(PlayerTileData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlayerTileData))
      return false;
    var tmp0_other_with_cast = other instanceof PlayerTileData ? other : THROW_CCE();
    if (!this.coordinates.equals(tmp0_other_with_cast.coordinates))
      return false;
    if (!(this.isVisible === tmp0_other_with_cast.isVisible))
      return false;
    if (!equals(this.tile, tmp0_other_with_cast.tile))
      return false;
    if (!equals(this.unit, tmp0_other_with_cast.unit))
      return false;
    if (!equals(this.city, tmp0_other_with_cast.city))
      return false;
    if (!equals(this.cityRange, tmp0_other_with_cast.cityRange))
      return false;
    return true;
  };
  function Companion_14() {
  }
  protoOf(Companion_14).a16 = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_15;
  function Companion_getInstance_16() {
    return Companion_instance_15;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('civ.model.Stockpiles', this, 3);
    tmp0_serialDesc.cv('food', true);
    tmp0_serialDesc.cv('wood', true);
    tmp0_serialDesc.cv('gold', true);
    this.e1r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).f1r = function (encoder, value) {
    var tmp0_desc = this.e1r_1;
    var tmp1_output = encoder.mn(tmp0_desc);
    if (tmp1_output.jp(tmp0_desc, 0) ? true : !(value.food === 0)) {
      tmp1_output.wo(tmp0_desc, 0, value.food);
    }
    if (tmp1_output.jp(tmp0_desc, 1) ? true : !(value.wood === 0)) {
      tmp1_output.wo(tmp0_desc, 1, value.wood);
    }
    if (tmp1_output.jp(tmp0_desc, 2) ? true : !(value.gold === 0)) {
      tmp1_output.wo(tmp0_desc, 2, value.gold);
    }
    tmp1_output.nn(tmp0_desc);
  };
  protoOf($serializer_8).gk = function (encoder, value) {
    return this.f1r(encoder, value instanceof Stockpiles ? value : THROW_CCE());
  };
  protoOf($serializer_8).hk = function (decoder) {
    var tmp0_desc = this.e1r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.mn(tmp0_desc);
    if (tmp7_input.co()) {
      tmp4_local0 = tmp7_input.rn(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.rn(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.rn(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.do(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.rn(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.rn(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.rn(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.nn(tmp0_desc);
    return Stockpiles_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_8).fk = function () {
    return this.e1r_1;
  };
  protoOf($serializer_8).rv = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function Stockpiles_init_$Init$(seen0, food, wood, gold, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().e1r_1);
    }
    if (0 === (seen0 & 1))
      $this.food = 0;
    else
      $this.food = food;
    if (0 === (seen0 & 2))
      $this.wood = 0;
    else
      $this.wood = wood;
    if (0 === (seen0 & 4))
      $this.gold = 0;
    else
      $this.gold = gold;
    return $this;
  }
  function Stockpiles_init_$Create$(seen0, food, wood, gold, serializationConstructorMarker) {
    return Stockpiles_init_$Init$(seen0, food, wood, gold, serializationConstructorMarker, objectCreate(protoOf(Stockpiles)));
  }
  function Stockpiles(food, wood, gold) {
    food = food === VOID ? 0 : food;
    wood = wood === VOID ? 0 : wood;
    gold = gold === VOID ? 0 : gold;
    this.food = food;
    this.wood = wood;
    this.gold = gold;
  }
  protoOf(Stockpiles).g1r = function () {
    return this.food;
  };
  protoOf(Stockpiles).h1r = function () {
    return this.wood;
  };
  protoOf(Stockpiles).i1r = function () {
    return this.gold;
  };
  protoOf(Stockpiles).j1r = function () {
    return (this.food + this.wood | 0) + this.gold | 0;
  };
  protoOf(Stockpiles).plus = function (other) {
    return new Stockpiles(this.food + other.food | 0, this.wood + other.wood | 0, this.gold + other.gold | 0);
  };
  protoOf(Stockpiles).minus = function (other) {
    return new Stockpiles(this.food - other.food | 0, this.wood - other.wood | 0, this.gold - other.gold | 0);
  };
  protoOf(Stockpiles).canSubstract = function (other) {
    var result = this.minus(other);
    return result.food >= 0 && result.wood >= 0 && result.gold >= 0;
  };
  protoOf(Stockpiles).sd = function () {
    return this.food;
  };
  protoOf(Stockpiles).td = function () {
    return this.wood;
  };
  protoOf(Stockpiles).i1f = function () {
    return this.gold;
  };
  protoOf(Stockpiles).k1r = function (food, wood, gold) {
    return new Stockpiles(food, wood, gold);
  };
  protoOf(Stockpiles).copy = function (food, wood, gold, $super) {
    food = food === VOID ? this.food : food;
    wood = wood === VOID ? this.wood : wood;
    gold = gold === VOID ? this.gold : gold;
    return $super === VOID ? this.k1r(food, wood, gold) : $super.k1r.call(this, food, wood, gold);
  };
  protoOf(Stockpiles).toString = function () {
    return 'Stockpiles(food=' + this.food + ', wood=' + this.wood + ', gold=' + this.gold + ')';
  };
  protoOf(Stockpiles).hashCode = function () {
    var result = this.food;
    result = imul(result, 31) + this.wood | 0;
    result = imul(result, 31) + this.gold | 0;
    return result;
  };
  protoOf(Stockpiles).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stockpiles))
      return false;
    var tmp0_other_with_cast = other instanceof Stockpiles ? other : THROW_CCE();
    if (!(this.food === tmp0_other_with_cast.food))
      return false;
    if (!(this.wood === tmp0_other_with_cast.wood))
      return false;
    if (!(this.gold === tmp0_other_with_cast.gold))
      return false;
    return true;
  };
  function _get_$cachedSerializer__te6jhj_1($this) {
    return $this.u1k_1.f2();
  }
  function Tile$Companion$_anonymous__ha5hun() {
    var tmp = getKClass(Tile);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(Grass), getKClass(Mountains), getKClass(Water)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_10(), $serializer_getInstance_11(), $serializer_getInstance_9()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('civ.tile.Tile', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Companion_15() {
    Companion_instance_16 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.u1k_1 = lazy(tmp_0, Tile$Companion$_anonymous__ha5hun);
  }
  protoOf(Companion_15).a16 = function () {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(Companion_15).ew = function (typeParamsSerializers) {
    return this.a16();
  };
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_15();
    return Companion_instance_16;
  }
  function Tile_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function sam$kotlin_Comparator$0_5(function_0) {
    this.l1r_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_5).bc = function (a, b) {
    return this.l1r_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_5).compare = function (a, b) {
    return this.bc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_5).n3 = function () {
    return this.l1r_1;
  };
  protoOf(sam$kotlin_Comparator$0_5).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.n3(), other.n3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_5).hashCode = function () {
    return hashCode(this.n3());
  };
  function Tile$getAllPossibleBuildings$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.o2_1;
    var tmp$ret$1 = b.o2_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Tile() {
    Companion_getInstance_17();
  }
  protoOf(Tile).o1r = function () {
    return false;
  };
  protoOf(Tile).p1r = function () {
    return 10;
  };
  protoOf(Tile).q1r = function () {
    return 0;
  };
  protoOf(Tile).movementCost = function () {
    var tmp;
    if (this.isBusy) {
      tmp = 100000;
    } else {
      // Inline function 'kotlin.collections.flatMap' call
      var tmp0 = this.buildings;
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        var list = element.bonuses;
        addAll(destination, list);
      }
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination_0 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_0 = destination.j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        if (element_0 instanceof OverrideMovementCost) {
          destination_0.e(element_0);
        }
      }
      var tmp0_safe_receiver = firstOrNull_0(destination_0);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k1p_1;
      tmp = tmp1_elvis_lhs == null ? this.baseMovementCost : tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Tile).tileVision = function () {
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = this.buildings;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      var list = element.bonuses;
      addAll(destination, list);
    }
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_0 = destination.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      if (element_0 instanceof VisionUpgrade) {
        destination_0.e(element_0);
      }
    }
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlin.collections.maxOfOrNull' call
      var iterator = destination_0.j();
      if (!iterator.k()) {
        tmp$ret$5 = null;
        break $l$block;
      }
      var maxValue = iterator.l().l1p_1;
      while (iterator.k()) {
        var v = iterator.l().l1p_1;
        if (compareTo(maxValue, v) < 0) {
          maxValue = v;
        }
      }
      tmp$ret$5 = maxValue;
    }
    return tmp$ret$5;
  };
  protoOf(Tile).defenseBonus = function () {
    var tmp = this.baseDefenseBonus;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = this.buildings;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      var list = element.bonuses;
      addAll(destination, list);
    }
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_0 = destination.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      if (element_0 instanceof DefenseBonus) {
        destination_0.e(element_0);
      }
    }
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s_1 = destination_0.j();
    while (_iterator__ex2g4s_1.k()) {
      var element_1 = _iterator__ex2g4s_1.l();
      var tmp_0 = sum;
      sum = tmp_0 + element_1.j1p_1 | 0;
    }
    return tmp + sum | 0;
  };
  protoOf(Tile).updated = function (isBusy, buildings, $super) {
    isBusy = isBusy === VOID ? this.isBusy : isBusy;
    buildings = buildings === VOID ? this.buildings : buildings;
    return $super === VOID ? this.r1r(isBusy, buildings) : $super.r1r.call(this, isBusy, buildings);
  };
  protoOf(Tile).getAllPossibleBuildings = function () {
    var tmp = this.buildings;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = get_entries_1();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      if (element.tileRequirement(this)) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    var this_0 = plus_1(tmp, destination);
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = Tile$getAllPossibleBuildings$lambda;
    var tmp$ret$3 = new sam$kotlin_Comparator$0_5(tmp_0);
    return sortedWith_0(this_0, tmp$ret$3);
  };
  protoOf(Tile).getMainCityBuilding = function () {
    var tmp0 = this.buildings;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        if (contains(Companion_instance_8.cityMainBuildings, element)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  function Water$Companion$$childSerializers$_anonymous__yolnl9() {
    return new LinkedHashSetSerializer(createSimpleEnumSerializer('civ.model.Building', values_3()));
  }
  function Companion_16() {
    Companion_instance_17 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s1r_1 = [null, lazy(tmp_0, Water$Companion$$childSerializers$_anonymous__yolnl9)];
  }
  protoOf(Companion_16).a16 = function () {
    return $serializer_getInstance_9();
  };
  var Companion_instance_17;
  function Companion_getInstance_18() {
    if (Companion_instance_17 == null)
      new Companion_16();
    return Companion_instance_17;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('civ.tile.Water', this, 2);
    tmp0_serialDesc.cv('coords', false);
    tmp0_serialDesc.cv('buildings', true);
    this.t1r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).u1r = function (encoder, value) {
    var tmp0_desc = this.t1r_1;
    var tmp1_output = encoder.mn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_18().s1r_1;
    tmp1_output.dp(tmp0_desc, 0, $serializer_getInstance_3(), value.v1r_1);
    var tmp;
    if (tmp1_output.jp(tmp0_desc, 1)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.setOf' call
      var tmp$ret$0 = emptySet();
      tmp = !equals(value.w1r_1, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.dp(tmp0_desc, 1, tmp2_cached[1].f2(), value.w1r_1);
    }
    tmp1_output.nn(tmp0_desc);
  };
  protoOf($serializer_9).gk = function (encoder, value) {
    return this.u1r(encoder, value instanceof Water ? value : THROW_CCE());
  };
  protoOf($serializer_9).hk = function (decoder) {
    var tmp0_desc = this.t1r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.mn(tmp0_desc);
    var tmp7_cached = Companion_getInstance_18().s1r_1;
    if (tmp6_input.co()) {
      tmp4_local0 = tmp6_input.yn(tmp0_desc, 0, $serializer_getInstance_3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.yn(tmp0_desc, 1, tmp7_cached[1].f2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.do(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.yn(tmp0_desc, 0, $serializer_getInstance_3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.yn(tmp0_desc, 1, tmp7_cached[1].f2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.nn(tmp0_desc);
    return Water_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_9).fk = function () {
    return this.t1r_1;
  };
  protoOf($serializer_9).rv = function () {
    var tmp0_cached = Companion_getInstance_18().s1r_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_3(), tmp0_cached[1].f2()];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function Water_init_$Init$(seen0, coords, buildings, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_9().t1r_1);
    }
    Tile_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.v1r_1 = coords;
    if (0 === (seen0 & 2)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.setOf' call
      tmp.w1r_1 = emptySet();
    } else
      $this.w1r_1 = buildings;
    return $this;
  }
  function Water_init_$Create$(seen0, coords, buildings, serializationConstructorMarker) {
    return Water_init_$Init$(seen0, coords, buildings, serializationConstructorMarker, objectCreate(protoOf(Water)));
  }
  function Water(coords, buildings) {
    Companion_getInstance_18();
    var tmp;
    if (buildings === VOID) {
      // Inline function 'kotlin.collections.setOf' call
      tmp = emptySet();
    } else {
      tmp = buildings;
    }
    buildings = tmp;
    Tile.call(this);
    this.v1r_1 = coords;
    this.w1r_1 = buildings;
  }
  protoOf(Water).m1r = function () {
    return this.v1r_1;
  };
  protoOf(Water).n1r = function () {
    return this.w1r_1;
  };
  protoOf(Water).p1r = function () {
    return 100000;
  };
  protoOf(Water).r1r = function (isBusy, buildings) {
    return this.copy(VOID, buildings);
  };
  protoOf(Water).getVisibleName = function () {
    return 'Water';
  };
  protoOf(Water).sd = function () {
    return this.v1r_1;
  };
  protoOf(Water).td = function () {
    return this.w1r_1;
  };
  protoOf(Water).x1r = function (coords, buildings) {
    return new Water(coords, buildings);
  };
  protoOf(Water).copy = function (coords, buildings, $super) {
    coords = coords === VOID ? this.v1r_1 : coords;
    buildings = buildings === VOID ? this.w1r_1 : buildings;
    return $super === VOID ? this.x1r(coords, buildings) : $super.x1r.call(this, coords, buildings);
  };
  protoOf(Water).toString = function () {
    return 'Water(coords=' + this.v1r_1.toString() + ', buildings=' + toString_0(this.w1r_1) + ')';
  };
  protoOf(Water).hashCode = function () {
    var result = this.v1r_1.hashCode();
    result = imul(result, 31) + hashCode(this.w1r_1) | 0;
    return result;
  };
  protoOf(Water).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Water))
      return false;
    var tmp0_other_with_cast = other instanceof Water ? other : THROW_CCE();
    if (!this.v1r_1.equals(tmp0_other_with_cast.v1r_1))
      return false;
    if (!equals(this.w1r_1, tmp0_other_with_cast.w1r_1))
      return false;
    return true;
  };
  function Grass$Companion$$childSerializers$_anonymous__ktl0ok() {
    return new ArrayListSerializer(createSimpleEnumSerializer('civ.hex.HexEdge', values_2()));
  }
  function Grass$Companion$$childSerializers$_anonymous__ktl0ok_0() {
    return new LinkedHashSetSerializer(createSimpleEnumSerializer('civ.model.Building', values_3()));
  }
  function Companion_17() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, Grass$Companion$$childSerializers$_anonymous__ktl0ok);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y1r_1 = [null, null, null, null, null, tmp_1, lazy(tmp_2, Grass$Companion$$childSerializers$_anonymous__ktl0ok_0)];
  }
  protoOf(Companion_17).a16 = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_18;
  function Companion_getInstance_19() {
    if (Companion_instance_18 == null)
      new Companion_17();
    return Companion_instance_18;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('civ.tile.Grass', this, 7);
    tmp0_serialDesc.cv('coords', false);
    tmp0_serialDesc.cv('isBusy', true);
    tmp0_serialDesc.cv('coast', true);
    tmp0_serialDesc.cv('forest', true);
    tmp0_serialDesc.cv('animals', true);
    tmp0_serialDesc.cv('riverEdges', true);
    tmp0_serialDesc.cv('buildings', true);
    this.z1r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).a1s = function (encoder, value) {
    var tmp0_desc = this.z1r_1;
    var tmp1_output = encoder.mn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().y1r_1;
    tmp1_output.dp(tmp0_desc, 0, $serializer_getInstance_3(), value.o1m_1);
    if (tmp1_output.jp(tmp0_desc, 1) ? true : !(value.p1m_1 === false)) {
      tmp1_output.to(tmp0_desc, 1, value.p1m_1);
    }
    if (tmp1_output.jp(tmp0_desc, 2) ? true : !(value.coast === false)) {
      tmp1_output.to(tmp0_desc, 2, value.coast);
    }
    if (tmp1_output.jp(tmp0_desc, 3) ? true : !(value.forest === false)) {
      tmp1_output.to(tmp0_desc, 3, value.forest);
    }
    if (tmp1_output.jp(tmp0_desc, 4) ? true : !(value.animals === false)) {
      tmp1_output.to(tmp0_desc, 4, value.animals);
    }
    var tmp;
    if (tmp1_output.jp(tmp0_desc, 5)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.listOf' call
      var tmp$ret$0 = emptyList();
      tmp = !equals(value.riverEdges, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.dp(tmp0_desc, 5, tmp2_cached[5].f2(), value.riverEdges);
    }
    var tmp_0;
    if (tmp1_output.jp(tmp0_desc, 6)) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.setOf' call
      var tmp$ret$1 = emptySet();
      tmp_0 = !equals(value.q1m_1, tmp$ret$1);
    }
    if (tmp_0) {
      tmp1_output.dp(tmp0_desc, 6, tmp2_cached[6].f2(), value.q1m_1);
    }
    tmp1_output.nn(tmp0_desc);
  };
  protoOf($serializer_10).gk = function (encoder, value) {
    return this.a1s(encoder, value instanceof Grass ? value : THROW_CCE());
  };
  protoOf($serializer_10).hk = function (decoder) {
    var tmp0_desc = this.z1r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = false;
    var tmp7_local3 = false;
    var tmp8_local4 = false;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.mn(tmp0_desc);
    var tmp12_cached = Companion_getInstance_19().y1r_1;
    if (tmp11_input.co()) {
      tmp4_local0 = tmp11_input.yn(tmp0_desc, 0, $serializer_getInstance_3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.on(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.on(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.on(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.on(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.yn(tmp0_desc, 5, tmp12_cached[5].f2(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.yn(tmp0_desc, 6, tmp12_cached[6].f2(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.do(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.yn(tmp0_desc, 0, $serializer_getInstance_3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.on(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.on(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.on(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.on(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.yn(tmp0_desc, 5, tmp12_cached[5].f2(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.yn(tmp0_desc, 6, tmp12_cached[6].f2(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.nn(tmp0_desc);
    return Grass_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_10).fk = function () {
    return this.z1r_1;
  };
  protoOf($serializer_10).rv = function () {
    var tmp0_cached = Companion_getInstance_19().y1r_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_3(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[5].f2(), tmp0_cached[6].f2()];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function Grass_init_$Init$(seen0, coords, isBusy, coast, forest, animals, riverEdges, buildings, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_10().z1r_1);
    }
    Tile_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.o1m_1 = coords;
    if (0 === (seen0 & 2))
      $this.p1m_1 = false;
    else
      $this.p1m_1 = isBusy;
    if (0 === (seen0 & 4))
      $this.coast = false;
    else
      $this.coast = coast;
    if (0 === (seen0 & 8))
      $this.forest = false;
    else
      $this.forest = forest;
    if (0 === (seen0 & 16))
      $this.animals = false;
    else
      $this.animals = animals;
    if (0 === (seen0 & 32)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.listOf' call
      tmp.riverEdges = emptyList();
    } else
      $this.riverEdges = riverEdges;
    if (0 === (seen0 & 64)) {
      var tmp_0 = $this;
      // Inline function 'kotlin.collections.setOf' call
      tmp_0.q1m_1 = emptySet();
    } else
      $this.q1m_1 = buildings;
    return $this;
  }
  function Grass_init_$Create$(seen0, coords, isBusy, coast, forest, animals, riverEdges, buildings, serializationConstructorMarker) {
    return Grass_init_$Init$(seen0, coords, isBusy, coast, forest, animals, riverEdges, buildings, serializationConstructorMarker, objectCreate(protoOf(Grass)));
  }
  function Grass(coords, isBusy, coast, forest, animals, riverEdges, buildings) {
    Companion_getInstance_19();
    isBusy = isBusy === VOID ? false : isBusy;
    coast = coast === VOID ? false : coast;
    forest = forest === VOID ? false : forest;
    animals = animals === VOID ? false : animals;
    var tmp;
    if (riverEdges === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = riverEdges;
    }
    riverEdges = tmp;
    var tmp_0;
    if (buildings === VOID) {
      // Inline function 'kotlin.collections.setOf' call
      tmp_0 = emptySet();
    } else {
      tmp_0 = buildings;
    }
    buildings = tmp_0;
    Tile.call(this);
    this.o1m_1 = coords;
    this.p1m_1 = isBusy;
    this.coast = coast;
    this.forest = forest;
    this.animals = animals;
    this.riverEdges = riverEdges;
    this.q1m_1 = buildings;
  }
  protoOf(Grass).m1r = function () {
    return this.o1m_1;
  };
  protoOf(Grass).o1r = function () {
    return this.p1m_1;
  };
  protoOf(Grass).b1s = function () {
    return this.coast;
  };
  protoOf(Grass).c1s = function () {
    return this.forest;
  };
  protoOf(Grass).d1s = function () {
    return this.animals;
  };
  protoOf(Grass).e1s = function () {
    return this.riverEdges;
  };
  protoOf(Grass).n1r = function () {
    return this.q1m_1;
  };
  protoOf(Grass).f1s = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.riverEdges.p();
  };
  protoOf(Grass).p1r = function () {
    return this.river || this.forest ? 20 : 10;
  };
  protoOf(Grass).r1r = function (isBusy, buildings) {
    return this.copy(VOID, isBusy, VOID, VOID, VOID, VOID, buildings);
  };
  protoOf(Grass).getVisibleName = function () {
    var tmp = this.forest ? 'Forest' : 'Plains';
    // Inline function 'kotlin.takeIf' call
    var this_0 = 'coastline';
    var tmp_0;
    if (this.coast) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    var tmp_1 = tmp_0;
    // Inline function 'kotlin.takeIf' call
    var tmp_2;
    if (this.river) {
      tmp_2 = 'river';
    } else {
      tmp_2 = null;
    }
    var tmp_3 = tmp_2;
    // Inline function 'kotlin.takeIf' call
    var tmp_4;
    if (this.animals) {
      tmp_4 = 'animals';
    } else {
      tmp_4 = null;
    }
    var tmp$ret$5 = tmp_4;
    return joinToString(listOfNotNull([tmp, tmp_1, tmp_3, tmp$ret$5]), ', ');
  };
  protoOf(Grass).sd = function () {
    return this.o1m_1;
  };
  protoOf(Grass).td = function () {
    return this.p1m_1;
  };
  protoOf(Grass).i1f = function () {
    return this.coast;
  };
  protoOf(Grass).j1l = function () {
    return this.forest;
  };
  protoOf(Grass).k1l = function () {
    return this.animals;
  };
  protoOf(Grass).l1l = function () {
    return this.riverEdges;
  };
  protoOf(Grass).m1l = function () {
    return this.q1m_1;
  };
  protoOf(Grass).g1s = function (coords, isBusy, coast, forest, animals, riverEdges, buildings) {
    return new Grass(coords, isBusy, coast, forest, animals, riverEdges, buildings);
  };
  protoOf(Grass).copy = function (coords, isBusy, coast, forest, animals, riverEdges, buildings, $super) {
    coords = coords === VOID ? this.o1m_1 : coords;
    isBusy = isBusy === VOID ? this.p1m_1 : isBusy;
    coast = coast === VOID ? this.coast : coast;
    forest = forest === VOID ? this.forest : forest;
    animals = animals === VOID ? this.animals : animals;
    riverEdges = riverEdges === VOID ? this.riverEdges : riverEdges;
    buildings = buildings === VOID ? this.q1m_1 : buildings;
    return $super === VOID ? this.g1s(coords, isBusy, coast, forest, animals, riverEdges, buildings) : $super.g1s.call(this, coords, isBusy, coast, forest, animals, riverEdges, buildings);
  };
  protoOf(Grass).toString = function () {
    return 'Grass(coords=' + this.o1m_1.toString() + ', isBusy=' + this.p1m_1 + ', coast=' + this.coast + ', forest=' + this.forest + ', animals=' + this.animals + ', riverEdges=' + toString_0(this.riverEdges) + ', buildings=' + toString_0(this.q1m_1) + ')';
  };
  protoOf(Grass).hashCode = function () {
    var result = this.o1m_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.p1m_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.coast) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.forest) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.animals) | 0;
    result = imul(result, 31) + hashCode(this.riverEdges) | 0;
    result = imul(result, 31) + hashCode(this.q1m_1) | 0;
    return result;
  };
  protoOf(Grass).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Grass))
      return false;
    var tmp0_other_with_cast = other instanceof Grass ? other : THROW_CCE();
    if (!this.o1m_1.equals(tmp0_other_with_cast.o1m_1))
      return false;
    if (!(this.p1m_1 === tmp0_other_with_cast.p1m_1))
      return false;
    if (!(this.coast === tmp0_other_with_cast.coast))
      return false;
    if (!(this.forest === tmp0_other_with_cast.forest))
      return false;
    if (!(this.animals === tmp0_other_with_cast.animals))
      return false;
    if (!equals(this.riverEdges, tmp0_other_with_cast.riverEdges))
      return false;
    if (!equals(this.q1m_1, tmp0_other_with_cast.q1m_1))
      return false;
    return true;
  };
  function Mountains$Companion$$childSerializers$_anonymous__iviujg() {
    return new LinkedHashSetSerializer(createSimpleEnumSerializer('civ.model.Building', values_3()));
  }
  function Companion_18() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h1s_1 = [null, null, lazy(tmp_0, Mountains$Companion$$childSerializers$_anonymous__iviujg), null];
  }
  protoOf(Companion_18).a16 = function () {
    return $serializer_getInstance_11();
  };
  var Companion_instance_19;
  function Companion_getInstance_20() {
    if (Companion_instance_19 == null)
      new Companion_18();
    return Companion_instance_19;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('civ.tile.Mountains', this, 4);
    tmp0_serialDesc.cv('coords', false);
    tmp0_serialDesc.cv('isBusy', true);
    tmp0_serialDesc.cv('buildings', true);
    tmp0_serialDesc.cv('gold', true);
    this.i1s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).j1s = function (encoder, value) {
    var tmp0_desc = this.i1s_1;
    var tmp1_output = encoder.mn(tmp0_desc);
    var tmp2_cached = Companion_getInstance_20().h1s_1;
    tmp1_output.dp(tmp0_desc, 0, $serializer_getInstance_3(), value.c1p_1);
    if (tmp1_output.jp(tmp0_desc, 1) ? true : !(value.d1p_1 === false)) {
      tmp1_output.to(tmp0_desc, 1, value.d1p_1);
    }
    var tmp;
    if (tmp1_output.jp(tmp0_desc, 2)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.setOf' call
      var tmp$ret$0 = emptySet();
      tmp = !equals(value.e1p_1, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.dp(tmp0_desc, 2, tmp2_cached[2].f2(), value.e1p_1);
    }
    if (tmp1_output.jp(tmp0_desc, 3) ? true : !(value.gold === false)) {
      tmp1_output.to(tmp0_desc, 3, value.gold);
    }
    tmp1_output.nn(tmp0_desc);
  };
  protoOf($serializer_11).gk = function (encoder, value) {
    return this.j1s(encoder, value instanceof Mountains ? value : THROW_CCE());
  };
  protoOf($serializer_11).hk = function (decoder) {
    var tmp0_desc = this.i1s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_input = decoder.mn(tmp0_desc);
    var tmp9_cached = Companion_getInstance_20().h1s_1;
    if (tmp8_input.co()) {
      tmp4_local0 = tmp8_input.yn(tmp0_desc, 0, $serializer_getInstance_3(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.on(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.yn(tmp0_desc, 2, tmp9_cached[2].f2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.on(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.do(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.yn(tmp0_desc, 0, $serializer_getInstance_3(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.on(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.yn(tmp0_desc, 2, tmp9_cached[2].f2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.on(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.nn(tmp0_desc);
    return Mountains_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_11).fk = function () {
    return this.i1s_1;
  };
  protoOf($serializer_11).rv = function () {
    var tmp0_cached = Companion_getInstance_20().h1s_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_3(), BooleanSerializer_getInstance(), tmp0_cached[2].f2(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function Mountains_init_$Init$(seen0, coords, isBusy, buildings, gold, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_11().i1s_1);
    }
    Tile_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.c1p_1 = coords;
    if (0 === (seen0 & 2))
      $this.d1p_1 = false;
    else
      $this.d1p_1 = isBusy;
    if (0 === (seen0 & 4)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.setOf' call
      tmp.e1p_1 = emptySet();
    } else
      $this.e1p_1 = buildings;
    if (0 === (seen0 & 8))
      $this.gold = false;
    else
      $this.gold = gold;
    return $this;
  }
  function Mountains_init_$Create$(seen0, coords, isBusy, buildings, gold, serializationConstructorMarker) {
    return Mountains_init_$Init$(seen0, coords, isBusy, buildings, gold, serializationConstructorMarker, objectCreate(protoOf(Mountains)));
  }
  function Mountains(coords, isBusy, buildings, gold) {
    Companion_getInstance_20();
    isBusy = isBusy === VOID ? false : isBusy;
    var tmp;
    if (buildings === VOID) {
      // Inline function 'kotlin.collections.setOf' call
      tmp = emptySet();
    } else {
      tmp = buildings;
    }
    buildings = tmp;
    gold = gold === VOID ? false : gold;
    Tile.call(this);
    this.c1p_1 = coords;
    this.d1p_1 = isBusy;
    this.e1p_1 = buildings;
    this.gold = gold;
  }
  protoOf(Mountains).m1r = function () {
    return this.c1p_1;
  };
  protoOf(Mountains).o1r = function () {
    return this.d1p_1;
  };
  protoOf(Mountains).n1r = function () {
    return this.e1p_1;
  };
  protoOf(Mountains).i1r = function () {
    return this.gold;
  };
  protoOf(Mountains).p1r = function () {
    return 100;
  };
  protoOf(Mountains).q1r = function () {
    return 1;
  };
  protoOf(Mountains).r1r = function (isBusy, buildings) {
    return this.copy(VOID, isBusy, buildings);
  };
  protoOf(Mountains).getVisibleName = function () {
    return 'Mountains' + (this.gold ? ', gold ore' : '');
  };
  protoOf(Mountains).sd = function () {
    return this.c1p_1;
  };
  protoOf(Mountains).td = function () {
    return this.d1p_1;
  };
  protoOf(Mountains).i1f = function () {
    return this.e1p_1;
  };
  protoOf(Mountains).j1l = function () {
    return this.gold;
  };
  protoOf(Mountains).k1s = function (coords, isBusy, buildings, gold) {
    return new Mountains(coords, isBusy, buildings, gold);
  };
  protoOf(Mountains).copy = function (coords, isBusy, buildings, gold, $super) {
    coords = coords === VOID ? this.c1p_1 : coords;
    isBusy = isBusy === VOID ? this.d1p_1 : isBusy;
    buildings = buildings === VOID ? this.e1p_1 : buildings;
    gold = gold === VOID ? this.gold : gold;
    return $super === VOID ? this.k1s(coords, isBusy, buildings, gold) : $super.k1s.call(this, coords, isBusy, buildings, gold);
  };
  protoOf(Mountains).toString = function () {
    return 'Mountains(coords=' + this.c1p_1.toString() + ', isBusy=' + this.d1p_1 + ', buildings=' + toString_0(this.e1p_1) + ', gold=' + this.gold + ')';
  };
  protoOf(Mountains).hashCode = function () {
    var result = this.c1p_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.d1p_1) | 0;
    result = imul(result, 31) + hashCode(this.e1p_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.gold) | 0;
    return result;
  };
  protoOf(Mountains).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Mountains))
      return false;
    var tmp0_other_with_cast = other instanceof Mountains ? other : THROW_CCE();
    if (!this.c1p_1.equals(tmp0_other_with_cast.c1p_1))
      return false;
    if (!(this.d1p_1 === tmp0_other_with_cast.d1p_1))
      return false;
    if (!equals(this.e1p_1, tmp0_other_with_cast.e1p_1))
      return false;
    if (!(this.gold === tmp0_other_with_cast.gold))
      return false;
    return true;
  };
  function WindowHelper$createBoolFunction$lambda($declaration) {
    return function (argument) {
      $declaration(argument);
      return Unit_instance;
    };
  }
  function WindowHelper() {
  }
  protoOf(WindowHelper).x1h = function (name, declaration) {
    // Inline function 'kotlin.js.asDynamic' call
    window[name] = WindowHelper$createBoolFunction$lambda(declaration);
  };
  var WindowHelper_instance;
  function WindowHelper_getInstance() {
    return WindowHelper_instance;
  }
  function ConsoleLog() {
  }
  protoOf(ConsoleLog).t1k = function (message) {
    (function () {
      var $externalVarargReceiverTmp = console;
      return $externalVarargReceiverTmp.log.apply($externalVarargReceiverTmp, [].slice.call(message.r1k_1.slice()));
    }.call(this));
  };
  //region block: post-declaration
  protoOf($serializer).sv = typeParametersSerializers;
  defineProp(protoOf(AiType), 'name', protoOf(AiType).p2);
  defineProp(protoOf(AiType), 'ordinal', protoOf(AiType).q2);
  defineProp(protoOf(GameApi), 'currentPlayer', protoOf(GameApi).d1k);
  protoOf($serializer_0).sv = typeParametersSerializers;
  protoOf($serializer_1).sv = typeParametersSerializers;
  protoOf($serializer_2).sv = typeParametersSerializers;
  defineProp(protoOf(CreatorMapSize), 'name', protoOf(CreatorMapSize).p2);
  defineProp(protoOf(CreatorMapSize), 'ordinal', protoOf(CreatorMapSize).q2);
  protoOf($serializer_3).sv = typeParametersSerializers;
  defineProp(protoOf(Coordinates), 's', protoOf(Coordinates).l1o);
  defineProp(protoOf(HexEdge), 'name', protoOf(HexEdge).p2);
  defineProp(protoOf(HexEdge), 'ordinal', protoOf(HexEdge).q2);
  defineProp(protoOf(Paths), 'moveTargets', protoOf(Paths).u1o);
  defineProp(protoOf(Paths), 'possibleTargets', protoOf(Paths).v1o);
  defineProp(protoOf(Companion_7), 'cityMainBuildings', protoOf(Companion_7).b1p);
  defineProp(protoOf(Building), 'name', protoOf(Building).p2);
  defineProp(protoOf(Building), 'ordinal', protoOf(Building).q2);
  defineProp(protoOf(CityLevel), 'name', protoOf(CityLevel).p2);
  defineProp(protoOf(CityLevel), 'ordinal', protoOf(CityLevel).q2);
  protoOf($serializer_4).sv = typeParametersSerializers;
  defineProp(protoOf(City), 'borderRange', protoOf(City).m1p);
  defineProp(protoOf(City), 'visionRange', protoOf(City).n1p);
  defineProp(protoOf(UnitType), 'name', protoOf(UnitType).p2);
  defineProp(protoOf(UnitType), 'ordinal', protoOf(UnitType).q2);
  protoOf($serializer_5).sv = typeParametersSerializers;
  protoOf($serializer_6).sv = typeParametersSerializers;
  defineProp(protoOf(ConquerState), 'canConquer', function () {
    return this.p1q();
  });
  protoOf($serializer_7).sv = typeParametersSerializers;
  defineProp(protoOf(PlayerColor), 'name', protoOf(PlayerColor).p2);
  defineProp(protoOf(PlayerColor), 'ordinal', protoOf(PlayerColor).q2);
  protoOf($serializer_8).sv = typeParametersSerializers;
  defineProp(protoOf(Stockpiles), 'total', protoOf(Stockpiles).j1r);
  defineProp(protoOf(Tile), 'coords', function () {
    return this.m1r();
  });
  defineProp(protoOf(Tile), 'buildings', function () {
    return this.n1r();
  });
  defineProp(protoOf(Tile), 'isBusy', function () {
    return this.o1r();
  });
  defineProp(protoOf(Tile), 'baseMovementCost', function () {
    return this.p1r();
  });
  defineProp(protoOf(Tile), 'baseDefenseBonus', function () {
    return this.q1r();
  });
  protoOf($serializer_9).sv = typeParametersSerializers;
  protoOf($serializer_10).sv = typeParametersSerializers;
  defineProp(protoOf(Grass), 'river', protoOf(Grass).f1s);
  protoOf($serializer_11).sv = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  TestData_instance = new TestData();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Companion_instance_6 = new Companion_5();
  GameCreator_instance = new GameCreator();
  Companion_instance_7 = new Companion_6();
  HexLayouts_instance = new HexLayouts();
  Companion_instance_8 = new Companion_7();
  Companion_instance_10 = new Companion_9();
  Companion_instance_12 = new Companion_11();
  Companion_instance_15 = new Companion_14();
  WindowHelper_instance = new WindowHelper();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $civ = _.civ || (_.civ = {});
    $civ.LongWrapper = LongWrapper;
    defineProp($civ.LongWrapper, 'Companion', Companion_getInstance_1);
    var $civ = _.civ || (_.civ = {});
    defineProp($civ, 'TestData', TestData_getInstance);
    var $civ = _.civ || (_.civ = {});
    var $civ$action = $civ.action || ($civ.action = {});
    $civ$action.Move = Move;
    $civ$action.Attack = Attack;
    $civ$action.Settle = Settle;
    $civ$action.Build = Build;
    $civ$action.Recruit = Recruit;
    $civ$action.Conquer = Conquer;
    $civ$action.Disband = Disband;
    var $civ = _.civ || (_.civ = {});
    var $civ$action = $civ.action || ($civ.action = {});
    $civ$action.ActionResult = ActionResult;
    defineProp($civ$action.ActionResult, 'Companion', Companion_getInstance_2);
    var $civ = _.civ || (_.civ = {});
    var $civ$ai = $civ.ai || ($civ.ai = {});
    $civ$ai.AiType = AiType;
    $civ$ai.AiType.values = values;
    $civ$ai.AiType.valueOf = valueOf;
    defineProp($civ$ai.AiType, 'IDLE', AiType_IDLE_getInstance);
    defineProp($civ$ai.AiType, 'OTP_WARRIOR', AiType_OTP_WARRIOR_getInstance);
    defineProp($civ$ai.AiType, 'OTP_ARCHER', AiType_OTP_ARCHER_getInstance);
    defineProp($civ$ai.AiType, 'OTP_SCOUT', AiType_OTP_SCOUT_getInstance);
    var $civ = _.civ || (_.civ = {});
    var $civ$core = $civ.core || ($civ.core = {});
    $civ$core.CityRange = CityRange;
    var $civ = _.civ || (_.civ = {});
    var $civ$core = $civ.core || ($civ.core = {});
    $civ$core.GameApi = GameApi;
    $civ$core.GameApi.recalculateVision$default = recalculateVision$default;
    defineProp($civ$core.GameApi, 'Companion', Companion_getInstance_4);
    var $civ = _.civ || (_.civ = {});
    var $civ$core = $civ.core || ($civ.core = {});
    $civ$core.GameState = GameState;
    defineProp($civ$core.GameState, 'Companion', Companion_getInstance_5);
    $civ$core.GameStateVisionData = GameStateVisionData;
    defineProp($civ$core.GameStateVisionData, 'Companion', Companion_getInstance_6);
    var $civ = _.civ || (_.civ = {});
    var $civ$core = $civ.core || ($civ.core = {});
    $civ$core.SimpleStats = SimpleStats;
    $civ$core.GameStatistics = GameStatistics;
    defineProp($civ$core.GameStatistics, 'Companion', Companion_getInstance_7);
    var $civ = _.civ || (_.civ = {});
    var $civ$creator = $civ.creator || ($civ.creator = {});
    $civ$creator.CreatorMapSize = CreatorMapSize;
    $civ$creator.CreatorMapSize.values = values_1;
    $civ$creator.CreatorMapSize.valueOf = valueOf_0;
    defineProp($civ$creator.CreatorMapSize, 'SMALL', CreatorMapSize_SMALL_getInstance);
    defineProp($civ$creator.CreatorMapSize, 'MEDIUM', CreatorMapSize_MEDIUM_getInstance);
    defineProp($civ$creator.CreatorMapSize, 'LARGE', CreatorMapSize_LARGE_getInstance);
    var $civ = _.civ || (_.civ = {});
    var $civ$creator = $civ.creator || ($civ.creator = {});
    defineProp($civ$creator, 'GameCreator', GameCreator_getInstance);
    var $civ = _.civ || (_.civ = {});
    var $civ$events = $civ.events || ($civ.events = {});
    $civ$events.StockUpdated = StockUpdated;
    $civ$events.VisionChanged = VisionChanged;
    $civ$events.AttackEvent = AttackEvent;
    $civ$events.TileUpdated = TileUpdated;
    $civ$events.ScoreChanged = ScoreChanged;
    $civ$events.UnitEvent = UnitEvent;
    $civ$events.UnitEvent.Created = Created;
    $civ$events.UnitEvent.Moved = Moved;
    $civ$events.UnitEvent.CombinedMove = CombinedMove;
    $civ$events.UnitEvent.Vanish = Vanish;
    $civ$events.TurnEndedEvent = TurnEndedEvent;
    $civ$events.GameOverEvent = GameOverEvent;
    var $civ = _.civ || (_.civ = {});
    var $civ$hex = $civ.hex || ($civ.hex = {});
    $civ$hex.Coordinates = Coordinates;
    defineProp($civ$hex.Coordinates, 'Companion', Companion_getInstance_8);
    var $civ = _.civ || (_.civ = {});
    var $civ$hex = $civ.hex || ($civ.hex = {});
    $civ$hex.HexEdge = HexEdge;
    $civ$hex.HexEdge.values = values_2;
    $civ$hex.HexEdge.valueOf = valueOf_1;
    defineProp($civ$hex.HexEdge, 'TOP_RIGHT', HexEdge_TOP_RIGHT_getInstance);
    defineProp($civ$hex.HexEdge, 'RIGHT', HexEdge_RIGHT_getInstance);
    defineProp($civ$hex.HexEdge, 'BOTTOM_RIGHT', HexEdge_BOTTOM_RIGHT_getInstance);
    defineProp($civ$hex.HexEdge, 'BOTTOM_LEFT', HexEdge_BOTTOM_LEFT_getInstance);
    defineProp($civ$hex.HexEdge, 'LEFT', HexEdge_LEFT_getInstance);
    defineProp($civ$hex.HexEdge, 'TOP_LEFT', HexEdge_TOP_LEFT_getInstance);
    var $civ = _.civ || (_.civ = {});
    var $civ$hex = $civ.hex || ($civ.hex = {});
    $civ$hex.Paths = Paths;
    $civ$hex.PathSegment = PathSegment;
    var $civ = _.civ || (_.civ = {});
    var $civ$model = $civ.model || ($civ.model = {});
    $civ$model.Building = Building;
    $civ$model.Building.values = values_3;
    $civ$model.Building.valueOf = valueOf_2;
    defineProp($civ$model.Building, 'VILLAGE_HALL', Building_VILLAGE_HALL_getInstance);
    defineProp($civ$model.Building, 'TOWN_HALL', Building_TOWN_HALL_getInstance);
    defineProp($civ$model.Building, 'CASTLE', Building_CASTLE_getInstance);
    defineProp($civ$model.Building, 'ROAD', Building_ROAD_getInstance);
    defineProp($civ$model.Building, 'WATCH_TOWER', Building_WATCH_TOWER_getInstance);
    defineProp($civ$model.Building, 'FISH_TRAP', Building_FISH_TRAP_getInstance);
    defineProp($civ$model.Building, 'FISHING_SHIP', Building_FISHING_SHIP_getInstance);
    defineProp($civ$model.Building, 'FISHING_HUT', Building_FISHING_HUT_getInstance);
    defineProp($civ$model.Building, 'PORT', Building_PORT_getInstance);
    defineProp($civ$model.Building, 'LUMBERCAMP', Building_LUMBERCAMP_getInstance);
    defineProp($civ$model.Building, 'SAWMILL', Building_SAWMILL_getInstance);
    defineProp($civ$model.Building, 'FARM', Building_FARM_getInstance);
    defineProp($civ$model.Building, 'WINDMILL', Building_WINDMILL_getInstance);
    defineProp($civ$model.Building, 'RIVERLAND_FARM', Building_RIVERLAND_FARM_getInstance);
    defineProp($civ$model.Building, 'WATERMILL', Building_WATERMILL_getInstance);
    defineProp($civ$model.Building, 'HUNTERS_CAMP', Building_HUNTERS_CAMP_getInstance);
    defineProp($civ$model.Building, 'BUTCHERY', Building_BUTCHERY_getInstance);
    defineProp($civ$model.Building, 'MINE', Building_MINE_getInstance);
    defineProp($civ$model.Building, 'MARKET', Building_MARKET_getInstance);
    defineProp($civ$model.Building, 'GUARD_TOWERS', Building_GUARD_TOWERS_getInstance);
    defineProp($civ$model.Building, 'WALLS', Building_WALLS_getInstance);
    defineProp($civ$model.Building, 'BARRACKS', Building_BARRACKS_getInstance);
    defineProp($civ$model.Building, 'BLACKSMITH', Building_BLACKSMITH_getInstance);
    defineProp($civ$model.Building, 'ARMORERS_WORKSHOP', Building_ARMORERS_WORKSHOP_getInstance);
    defineProp($civ$model.Building, 'STABLE', Building_STABLE_getInstance);
    defineProp($civ$model.Building, 'WARHORSE_STABLES', Building_WARHORSE_STABLES_getInstance);
    defineProp($civ$model.Building, 'KNIGHTS_HALL', Building_KNIGHTS_HALL_getInstance);
    defineProp($civ$model.Building, 'ARCHERY_RANGE', Building_ARCHERY_RANGE_getInstance);
    defineProp($civ$model.Building, 'ARBALEST_GUILD', Building_ARBALEST_GUILD_getInstance);
    defineProp($civ$model.Building, 'SIEGE_WORKSHOP', Building_SIEGE_WORKSHOP_getInstance);
    defineProp($civ$model.Building, 'Companion', Companion_getInstance_9);
    var $civ = _.civ || (_.civ = {});
    var $civ$model = $civ.model || ($civ.model = {});
    $civ$model.CityLevel = CityLevel;
    $civ$model.CityLevel.values = values_4;
    $civ$model.CityLevel.valueOf = valueOf_3;
    defineProp($civ$model.CityLevel, 'VILLAGE', CityLevel_VILLAGE_getInstance);
    defineProp($civ$model.CityLevel, 'TOWN', CityLevel_TOWN_getInstance);
    defineProp($civ$model.CityLevel, 'CITY', CityLevel_CITY_getInstance);
    $civ$model.City = City;
    defineProp($civ$model.City, 'Companion', Companion_getInstance_10);
    var $civ = _.civ || (_.civ = {});
    var $civ$model = $civ.model || ($civ.model = {});
    $civ$model.UnitType = UnitType;
    $civ$model.UnitType.values = values_5;
    $civ$model.UnitType.valueOf = valueOf_4;
    defineProp($civ$model.UnitType, 'SETTLERS', UnitType_SETTLERS_getInstance);
    defineProp($civ$model.UnitType, 'WARRIOR', UnitType_WARRIOR_getInstance);
    defineProp($civ$model.UnitType, 'SCOUT', UnitType_SCOUT_getInstance);
    defineProp($civ$model.UnitType, 'ARCHER', UnitType_ARCHER_getInstance);
    defineProp($civ$model.UnitType, 'SWORDSMAN', UnitType_SWORDSMAN_getInstance);
    defineProp($civ$model.UnitType, 'RIDER', UnitType_RIDER_getInstance);
    defineProp($civ$model.UnitType, 'CROSSBOWMAN', UnitType_CROSSBOWMAN_getInstance);
    defineProp($civ$model.UnitType, 'HEAVY_SWORDSMAN', UnitType_HEAVY_SWORDSMAN_getInstance);
    defineProp($civ$model.UnitType, 'KNIGHT', UnitType_KNIGHT_getInstance);
    defineProp($civ$model.UnitType, 'TREBUCHET', UnitType_TREBUCHET_getInstance);
    defineProp($civ$model.UnitType, 'Companion', Companion_getInstance_11);
    $civ$model.CivUnit = CivUnit;
    defineProp($civ$model.CivUnit, 'Companion', Companion_getInstance_12);
    $civ$model.ConquerState = ConquerState;
    defineProp($civ$model.ConquerState, 'None', None_getInstance_0);
    $civ$model.ConquerState.Occupying = Occupying;
    defineProp($civ$model.ConquerState.Occupying, 'Companion', Companion_getInstance_13);
    defineProp($civ$model.ConquerState, 'Companion', Companion_getInstance_14);
    var $civ = _.civ || (_.civ = {});
    var $civ$model = $civ.model || ($civ.model = {});
    $civ$model.Player = Player;
    defineProp($civ$model.Player, 'Companion', Companion_getInstance_15);
    $civ$model.PlayerColor = PlayerColor;
    $civ$model.PlayerColor.values = values_6;
    $civ$model.PlayerColor.valueOf = valueOf_5;
    defineProp($civ$model.PlayerColor, 'BLUE', PlayerColor_BLUE_getInstance);
    defineProp($civ$model.PlayerColor, 'RED', PlayerColor_RED_getInstance);
    defineProp($civ$model.PlayerColor, 'GREEN', PlayerColor_GREEN_getInstance);
    defineProp($civ$model.PlayerColor, 'YELLOW', PlayerColor_YELLOW_getInstance);
    var $civ = _.civ || (_.civ = {});
    var $civ$model = $civ.model || ($civ.model = {});
    $civ$model.PlayerTileData = PlayerTileData;
    var $civ = _.civ || (_.civ = {});
    var $civ$model = $civ.model || ($civ.model = {});
    $civ$model.Stockpiles = Stockpiles;
    defineProp($civ$model.Stockpiles, 'Companion', Companion_getInstance_16);
    var $civ = _.civ || (_.civ = {});
    var $civ$tile = $civ.tile || ($civ.tile = {});
    $civ$tile.Tile = Tile;
    defineProp($civ$tile.Tile, 'Companion', Companion_getInstance_17);
    $civ$tile.Water = Water;
    defineProp($civ$tile.Water, 'Companion', Companion_getInstance_18);
    $civ$tile.Grass = Grass;
    defineProp($civ$tile.Grass, 'Companion', Companion_getInstance_19);
    $civ$tile.Mountains = Mountains;
    defineProp($civ$tile.Mountains, 'Companion', Companion_getInstance_20);
  }
  $jsExportAll$(_);
  kotlin_kotlin.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-civ.js.map
