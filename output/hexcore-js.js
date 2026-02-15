(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'me.kosert.js:hexcore-js'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'me.kosert.js:hexcore-js'.");
    }
    globalThis['me.kosert.js:hexcore-js'] = factory(typeof globalThis['me.kosert.js:hexcore-js'] === 'undefined' ? {} : globalThis['me.kosert.js:hexcore-js'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.a;
  var listOf = kotlin_kotlin.$_$.x;
  var mutableListOf = kotlin_kotlin.$_$.a1;
  var emptySet = kotlin_kotlin.$_$.p;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.f;
  var removeFirst = kotlin_kotlin.$_$.g1;
  var addAll = kotlin_kotlin.$_$.m;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n;
  var mapCapacity = kotlin_kotlin.$_$.y;
  var coerceAtLeast = kotlin_kotlin.$_$.f2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d;
  var to = kotlin_kotlin.$_$.s2;
  var Unit_getInstance = kotlin_kotlin.$_$.k;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.b;
  var toSet = kotlin_kotlin.$_$.k1;
  var lazy = kotlin_kotlin.$_$.p2;
  var protoOf = kotlin_kotlin.$_$.b2;
  var defineProp = kotlin_kotlin.$_$.o1;
  var initMetadataForObject = kotlin_kotlin.$_$.y1;
  var KProperty1 = kotlin_kotlin.$_$.h2;
  var getPropertyCallableRef = kotlin_kotlin.$_$.s1;
  var initMetadataForInterface = kotlin_kotlin.$_$.x1;
  var getStringHashCode = kotlin_kotlin.$_$.t1;
  var THROW_CCE = kotlin_kotlin.$_$.l2;
  var initMetadataForClass = kotlin_kotlin.$_$.v1;
  var listOf_0 = kotlin_kotlin.$_$.w;
  var objectCreate = kotlin_kotlin.$_$.a2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.w1;
  var THROW_IAE = kotlin_kotlin.$_$.m2;
  var enumEntries = kotlin_kotlin.$_$.m1;
  var NotImplementedError = kotlin_kotlin.$_$.k2;
  var Enum = kotlin_kotlin.$_$.j2;
  var Companion_getInstance = kotlin_kotlin.$_$.j;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.h;
  var KProperty0 = kotlin_kotlin.$_$.g2;
  var THROW_ISE = kotlin_kotlin.$_$.n2;
  var getLocalDelegateReference = kotlin_kotlin.$_$.r1;
  var toMutableList = kotlin_kotlin.$_$.i1;
  var toMutableMap = kotlin_kotlin.$_$.j1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.c;
  var first = kotlin_kotlin.$_$.s;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.q2;
  var Collection = kotlin_kotlin.$_$.l;
  var isInterface = kotlin_kotlin.$_$.z1;
  var last = kotlin_kotlin.$_$.v;
  var toString = kotlin_kotlin.$_$.c2;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.i;
  var hashCode = kotlin_kotlin.$_$.u1;
  var equals = kotlin_kotlin.$_$.p1;
  var firstOrNull = kotlin_kotlin.$_$.r;
  var contains = kotlin_kotlin.$_$.o;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var plus = kotlin_kotlin.$_$.e1;
  var plus_0 = kotlin_kotlin.$_$.c1;
  var roundToInt = kotlin_kotlin.$_$.e2;
  var abs = kotlin_kotlin.$_$.d2;
  var Triple = kotlin_kotlin.$_$.o2;
  var FunctionAdapter = kotlin_kotlin.$_$.n1;
  var Comparator = kotlin_kotlin.$_$.i2;
  var compareValues = kotlin_kotlin.$_$.l1;
  var minus = kotlin_kotlin.$_$.z;
  var plus_1 = kotlin_kotlin.$_$.d1;
  var mutableMapOf = kotlin_kotlin.$_$.b1;
  var sortWith = kotlin_kotlin.$_$.h1;
  var getValue = kotlin_kotlin.$_$.u;
  var plus_2 = kotlin_kotlin.$_$.f1;
  var flatten = kotlin_kotlin.$_$.t;
  var firstOrNull_0 = kotlin_kotlin.$_$.q;
  var getBooleanHashCode = kotlin_kotlin.$_$.q1;
  var toString_0 = kotlin_kotlin.$_$.r2;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(TestData, 'TestData');
  initMetadataForInterface(Action, 'Action');
  initMetadataForClass(Move, 'Move', VOID, VOID, [Action]);
  initMetadataForClass(Attack, 'Attack', VOID, VOID, [Action]);
  initMetadataForClass(Settle, 'Settle', VOID, VOID, [Action]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Building, 'Building', VOID, Enum);
  initMetadataForInterface(TileBonus, 'TileBonus');
  initMetadataForClass(OverrideMovementCost, 'OverrideMovementCost', VOID, VOID, [TileBonus]);
  initMetadataForClass(StockCollectBonus, 'StockCollectBonus', VOID, VOID, [TileBonus]);
  initMetadataForClass(DefenseBonus, 'DefenseBonus', VOID, VOID, [TileBonus]);
  initMetadataForClass(CityLevel, 'CityLevel', VOID, Enum);
  initMetadataForClass(City, 'City');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(UnitType, 'UnitType', VOID, Enum);
  initMetadataForClass(CivUnit, 'CivUnit');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(GameApi, 'GameApi');
  initMetadataForInterface(GameLog, 'GameLog');
  initMetadataForClass(GameLogImpl, 'GameLogImpl', GameLogImpl, VOID, [GameLog]);
  initMetadataForClass(GameState, 'GameState');
  initMetadataForClass(Player, 'Player');
  initMetadataForClass(PlayerColor, 'PlayerColor', VOID, Enum);
  initMetadataForClass(Stockpiles, 'Stockpiles', Stockpiles);
  initMetadataForClass(StockpilesManager, 'StockpilesManager');
  initMetadataForClass(VisionData, 'VisionData');
  initMetadataForClass(VisionCalculator, 'VisionCalculator');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Coordinates, 'Coordinates');
  initMetadataForObject(HexLayouts, 'HexLayouts');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(HexMap, 'HexMap');
  initMetadataForClass(Tile, 'Tile');
  initMetadataForClass(Water, 'Water', VOID, Tile);
  initMetadataForClass(Grass, 'Grass', VOID, Tile);
  initMetadataForClass(Mountains, 'Mountains', VOID, Tile);
  initMetadataForClass(PlayerTileData, 'PlayerTileData');
  //endregion
  function TestData$gameState1$delegate$lambda() {
    var playerList = listOf([new Player(VOID, 'Pierwszy', PlayerColor_BLUE_getInstance()), new Player(VOID, 'Drugi', PlayerColor_RED_getInstance())]);
    var randomCoords = mutableListOf([new Coordinates(0, 0), new Coordinates(2, 1), new Coordinates(3, 3), new Coordinates(4, 4)]);
    var tmp = TestData_getInstance().map1;
    // Inline function 'kotlin.collections.setOf' call
    var tmp_0 = emptySet();
    // Inline function 'kotlin.collections.mutableSetOf' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = LinkedHashSet_init_$Create$();
    var _iterator__ex2g4s = playerList.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var list = listOf([new CivUnit(VOID, UnitType_SETTLERS_getInstance(), element.playerId, removeFirst(randomCoords)), new CivUnit(VOID, UnitType_SCOUT_getInstance(), element.playerId, removeFirst(randomCoords))]);
      addAll(destination, list);
    }
    var tmp_1 = destination;
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(playerList, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination_0 = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s_0 = playerList.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element_0.playerId, new Stockpiles(0, 0, 0));
      destination_0.put_4fpzoq_k$(pair.get_first_irdx8n_k$(), pair.get_second_jf7fjx_k$());
    }
    return new GameState(playerList, tmp, tmp_0, tmp_1, destination_0);
  }
  function TestData() {
    TestData_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = HexLayouts_getInstance().rectangle$default_59oapf_k$(10, 10);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$0 = new Grass(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    tmp.map1 = toSet(destination);
    var tmp_0 = this;
    tmp_0.gameState1$delegate_1 = lazy(TestData$gameState1$delegate$lambda);
  }
  protoOf(TestData).get_map1_woqboe_k$ = function () {
    return this.map1;
  };
  protoOf(TestData).get_gameState1_9stc85_k$ = function () {
    var tmp0 = this.gameState1$delegate_1;
    // Inline function 'kotlin.getValue' call
    gameState1$factory();
    return tmp0.get_value_j01efc_k$();
  };
  var TestData_instance;
  function TestData_getInstance() {
    if (TestData_instance == null)
      new TestData();
    return TestData_instance;
  }
  function gameState1$factory() {
    return getPropertyCallableRef('gameState1', 1, KProperty1, function (receiver) {
      return receiver.gameState1;
    }, null);
  }
  function Action() {
  }
  function Move(unitId, destination) {
    this.unitId = unitId;
    this.destination = destination;
  }
  protoOf(Move).get_unitId_kicqfc_k$ = function () {
    return this.unitId;
  };
  protoOf(Move).get_destination_9r3c63_k$ = function () {
    return this.destination;
  };
  protoOf(Move).component1_7eebsc_k$ = function () {
    return this.unitId;
  };
  protoOf(Move).component2_7eebsb_k$ = function () {
    return this.destination;
  };
  protoOf(Move).copy_3l7ne1_k$ = function (unitId, destination) {
    return new Move(unitId, destination);
  };
  protoOf(Move).copy = function (unitId, destination, $super) {
    unitId = unitId === VOID ? this.unitId : unitId;
    destination = destination === VOID ? this.destination : destination;
    return $super === VOID ? this.copy_3l7ne1_k$(unitId, destination) : $super.copy_3l7ne1_k$.call(this, unitId, destination);
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
  function Attack(unitId, targetUnitId) {
    this.unitId = unitId;
    this.targetUnitId = targetUnitId;
  }
  protoOf(Attack).get_unitId_kicqfc_k$ = function () {
    return this.unitId;
  };
  protoOf(Attack).get_targetUnitId_3jn2fb_k$ = function () {
    return this.targetUnitId;
  };
  protoOf(Attack).component1_7eebsc_k$ = function () {
    return this.unitId;
  };
  protoOf(Attack).component2_7eebsb_k$ = function () {
    return this.targetUnitId;
  };
  protoOf(Attack).copy_plwnsl_k$ = function (unitId, targetUnitId) {
    return new Attack(unitId, targetUnitId);
  };
  protoOf(Attack).copy = function (unitId, targetUnitId, $super) {
    unitId = unitId === VOID ? this.unitId : unitId;
    targetUnitId = targetUnitId === VOID ? this.targetUnitId : targetUnitId;
    return $super === VOID ? this.copy_plwnsl_k$(unitId, targetUnitId) : $super.copy_plwnsl_k$.call(this, unitId, targetUnitId);
  };
  protoOf(Attack).toString = function () {
    return 'Attack(unitId=' + this.unitId + ', targetUnitId=' + this.targetUnitId + ')';
  };
  protoOf(Attack).hashCode = function () {
    var result = getStringHashCode(this.unitId);
    result = imul(result, 31) + getStringHashCode(this.targetUnitId) | 0;
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
    if (!(this.targetUnitId === tmp0_other_with_cast.targetUnitId))
      return false;
    return true;
  };
  function Settle(settlersId) {
    this.settlersId = settlersId;
  }
  protoOf(Settle).get_settlersId_iy77n4_k$ = function () {
    return this.settlersId;
  };
  protoOf(Settle).component1_7eebsc_k$ = function () {
    return this.settlersId;
  };
  protoOf(Settle).copy_a35qlh_k$ = function (settlersId) {
    return new Settle(settlersId);
  };
  protoOf(Settle).copy = function (settlersId, $super) {
    settlersId = settlersId === VOID ? this.settlersId : settlersId;
    return $super === VOID ? this.copy_a35qlh_k$(settlersId) : $super.copy_a35qlh_k$.call(this, settlersId);
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
  var Building_VILLAGE_HALL_instance;
  var Building_TOWN_HALL_instance;
  var Building_CITY_HALL_instance;
  var Building_ROAD_instance;
  var Building_LUMBERCAMP_instance;
  function Building_init_$Init$(name, ordinal, tileRequirement, cost, bonus, replaces, $this) {
    replaces = replaces === VOID ? null : replaces;
    Building.call($this, name, ordinal, tileRequirement, cost, listOf_0(bonus), replaces);
    return $this;
  }
  function Building_init_$Create$(name, ordinal, tileRequirement, cost, bonus, replaces) {
    return Building_init_$Init$(name, ordinal, tileRequirement, cost, bonus, replaces, objectCreate(protoOf(Building)));
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).get_cityMainBuildings_rl9f4e_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Building_VILLAGE_HALL_getInstance(), Building_TOWN_HALL_getInstance(), Building_CITY_HALL_getInstance()];
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    Building_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [Building_VILLAGE_HALL_getInstance(), Building_TOWN_HALL_getInstance(), Building_CITY_HALL_getInstance(), Building_ROAD_getInstance(), Building_LUMBERCAMP_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'VILLAGE_HALL':
        return Building_VILLAGE_HALL_getInstance();
      case 'TOWN_HALL':
        return Building_TOWN_HALL_getInstance();
      case 'CITY_HALL':
        return Building_CITY_HALL_getInstance();
      case 'ROAD':
        return Building_ROAD_getInstance();
      case 'LUMBERCAMP':
        return Building_LUMBERCAMP_getInstance();
      default:
        Building_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  function Building$lambda(it) {
    return false;
  }
  function Building$lambda_0(it) {
    return it.buildings.contains_aljjnj_k$(Building_VILLAGE_HALL_getInstance());
  }
  function Building$lambda_1(it) {
    return it.buildings.contains_aljjnj_k$(Building_TOWN_HALL_getInstance());
  }
  function Building$lambda_2(it) {
    return it instanceof Grass;
  }
  function Building$lambda_3(it) {
    var tmp;
    if (it instanceof Grass) {
      tmp = it.forest;
    } else {
      tmp = false;
    }
    return tmp;
  }
  var Building_entriesInitialized;
  function Building_initEntries() {
    if (Building_entriesInitialized)
      return Unit_getInstance();
    Building_entriesInitialized = true;
    Building_VILLAGE_HALL_instance = new Building('VILLAGE_HALL', 0, Building$lambda, new Stockpiles(), listOf_0(new StockCollectBonus(new Stockpiles(VOID, VOID, 1))));
    var tmp0_replaces = Building_VILLAGE_HALL_getInstance();
    var tmp1_cost = new Stockpiles(VOID, 50, 25);
    var tmp2_bonuses = listOf([new StockCollectBonus(new Stockpiles(VOID, VOID, 3)), new DefenseBonus(1)]);
    Building_TOWN_HALL_instance = new Building('TOWN_HALL', 1, Building$lambda_0, tmp1_cost, tmp2_bonuses, tmp0_replaces);
    Building_TOWN_HALL_getInstance();
    throw new NotImplementedError();
  }
  var $ENTRIES;
  function Building(name, ordinal, tileRequirement, cost, bonuses, replaces) {
    replaces = replaces === VOID ? null : replaces;
    Enum.call(this, name, ordinal);
    this.tileRequirement = tileRequirement;
    this.cost = cost;
    this.bonuses = bonuses;
    this.replaces = replaces;
  }
  protoOf(Building).get_tileRequirement_3c7iks_k$ = function () {
    return this.tileRequirement;
  };
  protoOf(Building).get_cost_wok8ba_k$ = function () {
    return this.cost;
  };
  protoOf(Building).get_bonuses_2bp6p0_k$ = function () {
    return this.bonuses;
  };
  protoOf(Building).get_replaces_w3ysco_k$ = function () {
    return this.replaces;
  };
  function TileBonus() {
  }
  function OverrideMovementCost(movementCost) {
    this.movementCost_1 = movementCost;
  }
  protoOf(OverrideMovementCost).get_movementCost_aa1lej_k$ = function () {
    return this.movementCost_1;
  };
  protoOf(OverrideMovementCost).component1_7eebsc_k$ = function () {
    return this.movementCost_1;
  };
  protoOf(OverrideMovementCost).copy_ns6qmb_k$ = function (movementCost) {
    return new OverrideMovementCost(movementCost);
  };
  protoOf(OverrideMovementCost).copy$default_aq9js0_k$ = function (movementCost, $super) {
    movementCost = movementCost === VOID ? this.movementCost_1 : movementCost;
    return $super === VOID ? this.copy_ns6qmb_k$(movementCost) : $super.copy_ns6qmb_k$.call(this, movementCost);
  };
  protoOf(OverrideMovementCost).toString = function () {
    return 'OverrideMovementCost(movementCost=' + this.movementCost_1 + ')';
  };
  protoOf(OverrideMovementCost).hashCode = function () {
    return this.movementCost_1;
  };
  protoOf(OverrideMovementCost).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OverrideMovementCost))
      return false;
    var tmp0_other_with_cast = other instanceof OverrideMovementCost ? other : THROW_CCE();
    if (!(this.movementCost_1 === tmp0_other_with_cast.movementCost_1))
      return false;
    return true;
  };
  function StockCollectBonus(amount) {
    this.amount_1 = amount;
  }
  protoOf(StockCollectBonus).get_amount_b10di9_k$ = function () {
    return this.amount_1;
  };
  protoOf(StockCollectBonus).component1_7eebsc_k$ = function () {
    return this.amount_1;
  };
  protoOf(StockCollectBonus).copy_wx8lqn_k$ = function (amount) {
    return new StockCollectBonus(amount);
  };
  protoOf(StockCollectBonus).copy$default_36crnx_k$ = function (amount, $super) {
    amount = amount === VOID ? this.amount_1 : amount;
    return $super === VOID ? this.copy_wx8lqn_k$(amount) : $super.copy_wx8lqn_k$.call(this, amount);
  };
  protoOf(StockCollectBonus).toString = function () {
    return 'StockCollectBonus(amount=' + this.amount_1.toString() + ')';
  };
  protoOf(StockCollectBonus).hashCode = function () {
    return this.amount_1.hashCode();
  };
  protoOf(StockCollectBonus).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StockCollectBonus))
      return false;
    var tmp0_other_with_cast = other instanceof StockCollectBonus ? other : THROW_CCE();
    if (!this.amount_1.equals(tmp0_other_with_cast.amount_1))
      return false;
    return true;
  };
  function DefenseBonus(amount) {
    this.amount_1 = amount;
  }
  protoOf(DefenseBonus).get_amount_b10di9_k$ = function () {
    return this.amount_1;
  };
  protoOf(DefenseBonus).component1_7eebsc_k$ = function () {
    return this.amount_1;
  };
  protoOf(DefenseBonus).copy_ns6qmb_k$ = function (amount) {
    return new DefenseBonus(amount);
  };
  protoOf(DefenseBonus).copy$default_pku8zt_k$ = function (amount, $super) {
    amount = amount === VOID ? this.amount_1 : amount;
    return $super === VOID ? this.copy_ns6qmb_k$(amount) : $super.copy_ns6qmb_k$.call(this, amount);
  };
  protoOf(DefenseBonus).toString = function () {
    return 'DefenseBonus(amount=' + this.amount_1 + ')';
  };
  protoOf(DefenseBonus).hashCode = function () {
    return this.amount_1;
  };
  protoOf(DefenseBonus).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DefenseBonus))
      return false;
    var tmp0_other_with_cast = other instanceof DefenseBonus ? other : THROW_CCE();
    if (!(this.amount_1 === tmp0_other_with_cast.amount_1))
      return false;
    return true;
  };
  function Building_VILLAGE_HALL_getInstance() {
    Building_initEntries();
    return Building_VILLAGE_HALL_instance;
  }
  function Building_TOWN_HALL_getInstance() {
    Building_initEntries();
    return Building_TOWN_HALL_instance;
  }
  function Building_CITY_HALL_getInstance() {
    Building_initEntries();
    return Building_CITY_HALL_instance;
  }
  function Building_ROAD_getInstance() {
    Building_initEntries();
    return Building_ROAD_instance;
  }
  function Building_LUMBERCAMP_getInstance() {
    Building_initEntries();
    return Building_LUMBERCAMP_instance;
  }
  var CityLevel_VILLAGE_instance;
  var CityLevel_TOWN_instance;
  var CityLevel_CITY_instance;
  function values_0() {
    return [CityLevel_VILLAGE_getInstance(), CityLevel_TOWN_getInstance(), CityLevel_CITY_getInstance()];
  }
  function valueOf_0(value) {
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
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var CityLevel_entriesInitialized;
  function CityLevel_initEntries() {
    if (CityLevel_entriesInitialized)
      return Unit_getInstance();
    CityLevel_entriesInitialized = true;
    CityLevel_VILLAGE_instance = new CityLevel('VILLAGE', 0, 1, 2, 1, 1);
    CityLevel_TOWN_instance = new CityLevel('TOWN', 1, 1, 3, 2, 2);
    CityLevel_CITY_instance = new CityLevel('CITY', 2, 2, 4, 4, 3);
  }
  var $ENTRIES_0;
  function CityLevel(name, ordinal, borderRange, visionRange, attack, attackRange) {
    Enum.call(this, name, ordinal);
    this.borderRange = borderRange;
    this.visionRange = visionRange;
    this.attack = attack;
    this.attackRange = attackRange;
  }
  protoOf(CityLevel).get_borderRange_q2k16w_k$ = function () {
    return this.borderRange;
  };
  protoOf(CityLevel).get_visionRange_5kdbuc_k$ = function () {
    return this.visionRange;
  };
  protoOf(CityLevel).get_attack_b4xpht_k$ = function () {
    return this.attack;
  };
  protoOf(CityLevel).get_attackRange_2oftrg_k$ = function () {
    return this.attackRange;
  };
  function City(cityId, playerId, coordinates, level) {
    cityId = cityId === VOID ? Companion_getInstance().random_fimq0t_k$().toHexString_vts0k1_k$() : cityId;
    level = level === VOID ? CityLevel_VILLAGE_getInstance() : level;
    this.cityId = cityId;
    this.playerId = playerId;
    this.coordinates = coordinates;
    this.level = level;
  }
  protoOf(City).get_cityId_bwzoxb_k$ = function () {
    return this.cityId;
  };
  protoOf(City).get_playerId_q2dzv_k$ = function () {
    return this.playerId;
  };
  protoOf(City).get_coordinates_q6f2pa_k$ = function () {
    return this.coordinates;
  };
  protoOf(City).get_level_ium7h7_k$ = function () {
    return this.level;
  };
  protoOf(City).get_borderRange_q2k16w_k$ = function () {
    return this.level.borderRange;
  };
  protoOf(City).get_visionRange_5kdbuc_k$ = function () {
    return this.level.visionRange;
  };
  protoOf(City).component1_7eebsc_k$ = function () {
    return this.cityId;
  };
  protoOf(City).component2_7eebsb_k$ = function () {
    return this.playerId;
  };
  protoOf(City).component3_7eebsa_k$ = function () {
    return this.coordinates;
  };
  protoOf(City).component4_7eebs9_k$ = function () {
    return this.level;
  };
  protoOf(City).copy_9cr3h_k$ = function (cityId, playerId, coordinates, level) {
    return new City(cityId, playerId, coordinates, level);
  };
  protoOf(City).copy = function (cityId, playerId, coordinates, level, $super) {
    cityId = cityId === VOID ? this.cityId : cityId;
    playerId = playerId === VOID ? this.playerId : playerId;
    coordinates = coordinates === VOID ? this.coordinates : coordinates;
    level = level === VOID ? this.level : level;
    return $super === VOID ? this.copy_9cr3h_k$(cityId, playerId, coordinates, level) : $super.copy_9cr3h_k$.call(this, cityId, playerId, coordinates, level);
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
  var UnitType_SCOUT_instance;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).byValue = function (value) {
    var tmp0 = get_entries_1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.first' call
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (element.value === value) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    return tmp$ret$1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    UnitType_initEntries();
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function values_1() {
    return [UnitType_SETTLERS_getInstance(), UnitType_SCOUT_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'SETTLERS':
        return UnitType_SETTLERS_getInstance();
      case 'SCOUT':
        return UnitType_SCOUT_getInstance();
      default:
        UnitType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var UnitType_entriesInitialized;
  function UnitType_initEntries() {
    if (UnitType_entriesInitialized)
      return Unit_getInstance();
    UnitType_entriesInitialized = true;
    UnitType_SETTLERS_instance = new UnitType('SETTLERS', 0, 'settlers', 0, 10, 1, 1, new Stockpiles(30));
    UnitType_SCOUT_instance = new UnitType('SCOUT', 1, 'scout', 1, 10, 2, 2, new Stockpiles(5));
    Companion_getInstance_1();
  }
  var $ENTRIES_1;
  function UnitType(name, ordinal, value, attack, maxHp, speed, visionRange, cost) {
    Enum.call(this, name, ordinal);
    this.value = value;
    this.attack = attack;
    this.maxHp = maxHp;
    this.speed = speed;
    this.visionRange = visionRange;
    this.cost = cost;
  }
  protoOf(UnitType).get_value_j01efc_k$ = function () {
    return this.value;
  };
  protoOf(UnitType).get_attack_b4xpht_k$ = function () {
    return this.attack;
  };
  protoOf(UnitType).get_maxHp_iv3gwz_k$ = function () {
    return this.maxHp;
  };
  protoOf(UnitType).get_speed_iynfvi_k$ = function () {
    return this.speed;
  };
  protoOf(UnitType).get_visionRange_5kdbuc_k$ = function () {
    return this.visionRange;
  };
  protoOf(UnitType).get_cost_wok8ba_k$ = function () {
    return this.cost;
  };
  function CivUnit(unitId, unitType, playerId, coordinates, hp, movementLeft) {
    unitId = unitId === VOID ? Companion_getInstance().random_fimq0t_k$().toHexString_vts0k1_k$() : unitId;
    hp = hp === VOID ? unitType.maxHp : hp;
    movementLeft = movementLeft === VOID ? imul(unitType.speed, 10) : movementLeft;
    this.unitId = unitId;
    this.unitType = unitType;
    this.playerId = playerId;
    this.coordinates = coordinates;
    this.hp = hp;
    this.movementLeft = movementLeft;
    this.attack = this.unitType.attack;
    this.maxHp = this.unitType.maxHp;
    this.speed = this.unitType.speed;
    this.visionRange = this.unitType.visionRange;
  }
  protoOf(CivUnit).get_unitId_kicqfc_k$ = function () {
    return this.unitId;
  };
  protoOf(CivUnit).get_unitType_ydxrc7_k$ = function () {
    return this.unitType;
  };
  protoOf(CivUnit).get_playerId_q2dzv_k$ = function () {
    return this.playerId;
  };
  protoOf(CivUnit).get_coordinates_q6f2pa_k$ = function () {
    return this.coordinates;
  };
  protoOf(CivUnit).get_hp_kntnxr_k$ = function () {
    return this.hp;
  };
  protoOf(CivUnit).get_movementLeft_a9w28x_k$ = function () {
    return this.movementLeft;
  };
  protoOf(CivUnit).get_attack_b4xpht_k$ = function () {
    return this.attack;
  };
  protoOf(CivUnit).get_maxHp_iv3gwz_k$ = function () {
    return this.maxHp;
  };
  protoOf(CivUnit).get_speed_iynfvi_k$ = function () {
    return this.speed;
  };
  protoOf(CivUnit).get_visionRange_5kdbuc_k$ = function () {
    return this.visionRange;
  };
  protoOf(CivUnit).component1_7eebsc_k$ = function () {
    return this.unitId;
  };
  protoOf(CivUnit).component2_7eebsb_k$ = function () {
    return this.unitType;
  };
  protoOf(CivUnit).component3_7eebsa_k$ = function () {
    return this.playerId;
  };
  protoOf(CivUnit).component4_7eebs9_k$ = function () {
    return this.coordinates;
  };
  protoOf(CivUnit).component5_7eebs8_k$ = function () {
    return this.hp;
  };
  protoOf(CivUnit).component6_7eebs7_k$ = function () {
    return this.movementLeft;
  };
  protoOf(CivUnit).copy_4qx5pl_k$ = function (unitId, unitType, playerId, coordinates, hp, movementLeft) {
    return new CivUnit(unitId, unitType, playerId, coordinates, hp, movementLeft);
  };
  protoOf(CivUnit).copy = function (unitId, unitType, playerId, coordinates, hp, movementLeft, $super) {
    unitId = unitId === VOID ? this.unitId : unitId;
    unitType = unitType === VOID ? this.unitType : unitType;
    playerId = playerId === VOID ? this.playerId : playerId;
    coordinates = coordinates === VOID ? this.coordinates : coordinates;
    hp = hp === VOID ? this.hp : hp;
    movementLeft = movementLeft === VOID ? this.movementLeft : movementLeft;
    return $super === VOID ? this.copy_4qx5pl_k$(unitId, unitType, playerId, coordinates, hp, movementLeft) : $super.copy_4qx5pl_k$.call(this, unitId, unitType, playerId, coordinates, hp, movementLeft);
  };
  protoOf(CivUnit).toString = function () {
    return 'CivUnit(unitId=' + this.unitId + ', unitType=' + this.unitType.toString() + ', playerId=' + this.playerId + ', coordinates=' + this.coordinates.toString() + ', hp=' + this.hp + ', movementLeft=' + this.movementLeft + ')';
  };
  protoOf(CivUnit).hashCode = function () {
    var result = getStringHashCode(this.unitId);
    result = imul(result, 31) + this.unitType.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.playerId) | 0;
    result = imul(result, 31) + this.coordinates.hashCode() | 0;
    result = imul(result, 31) + this.hp | 0;
    result = imul(result, 31) + this.movementLeft | 0;
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
    return true;
  };
  function UnitType_SETTLERS_getInstance() {
    UnitType_initEntries();
    return UnitType_SETTLERS_instance;
  }
  function UnitType_SCOUT_getInstance() {
    UnitType_initEntries();
    return UnitType_SCOUT_instance;
  }
  function _get_turns__ar36yt($this) {
    return $this.turns_1;
  }
  function _get_hexMap__jqqm8m($this) {
    return $this.hexMap_1;
  }
  function _get_visionCalculator__nbxc75($this) {
    return $this.visionCalculator_1;
  }
  function _get_stocksManager__nf8v0h($this) {
    return $this.stocksManager_1;
  }
  function _get_cities__k94pi6($this) {
    return $this.cities_1;
  }
  function _get_units__ae1r5q($this) {
    return $this.units_1;
  }
  function recalculateVision($this) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.turns_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      $this.visionCalculator_1.recalculate_b0l54_k$(element.playerId, $this.unitsFor(element.playerId), $this.citiesFor(element.playerId));
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).fromGameState = function (state) {
    return new GameApi(state.players, state.tileList, state.cities, state.units, state.stock);
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function tilesForPlayer$lambda($isDiscovered$delegate) {
    // Inline function 'kotlin.getValue' call
    getLocalDelegateReference('isDiscovered', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $isDiscovered$delegate.get_value_j01efc_k$();
  }
  function GameApi$tilesForPlayer$lambda($vision, $it) {
    return function () {
      return $vision.get_discovered_ba7rjj_k$().contains_aljjnj_k$($it.coords);
    };
  }
  function GameApi(players, tileList, cities, units, stocks) {
    Companion_getInstance_2();
    this.turns_1 = toMutableList(players);
    this.hexMap_1 = new HexMap(tileList);
    this.visionCalculator_1 = new VisionCalculator(this.hexMap_1);
    this.stocksManager_1 = new StockpilesManager(this.hexMap_1, stocks);
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(cities, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = cities.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$0 = element.coordinates;
      destination.put_4fpzoq_k$(tmp$ret$0, element);
    }
    tmp.cities_1 = toMutableMap(destination);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.associateBy' call
    var capacity_0 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(units, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination_0 = LinkedHashMap_init_$Create$(capacity_0);
    var _iterator__ex2g4s_0 = units.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
      var tmp$ret$3 = element_0.coordinates;
      destination_0.put_4fpzoq_k$(tmp$ret$3, element_0);
    }
    tmp_0.units_1 = toMutableMap(destination_0);
    recalculateVision(this);
  }
  protoOf(GameApi).citiesFor = function (playerId) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.cities_1.get_values_ksazhn_k$();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      if (element.playerId === playerId) {
        destination.add_utx5q5_k$(element);
      }
    }
    return destination;
  };
  protoOf(GameApi).unitsFor = function (playerId) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.units_1.get_values_ksazhn_k$();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      if (element.playerId === playerId) {
        destination.add_utx5q5_k$(element);
      }
    }
    return destination;
  };
  protoOf(GameApi).stocksFor = function (playerId) {
    return this.stocksManager_1.getFor_rjhf5z_k$(playerId);
  };
  protoOf(GameApi).get_currentPlayer_yc1fgx_k$ = function () {
    return first(this.turns_1);
  };
  protoOf(GameApi).tilesForPlayer = function (playerId) {
    var vision = this.visionCalculator_1.getVisionFor_6va55b_k$(playerId);
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.hexMap_1.get_tiles_iz2wrg_k$().get_values_ksazhn_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var isVisible = vision.get_visible_8zfvk9_k$().contains_aljjnj_k$(item.coords);
      var isDiscovered$delegate = lazy(GameApi$tilesForPlayer$lambda(vision, item));
      var tmp = item.coords;
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tilesForPlayer$lambda(isDiscovered$delegate)) {
        tmp_0 = item;
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      // Inline function 'kotlin.takeIf' call
      var this_1 = this.units_1.get_wei43m_k$(item.coords);
      var tmp_2;
      if (isVisible) {
        tmp_2 = this_1;
      } else {
        tmp_2 = null;
      }
      var tmp_3 = tmp_2;
      // Inline function 'kotlin.takeIf' call
      var this_2 = this.cities_1.get_wei43m_k$(item.coords);
      var tmp_4;
      if (tilesForPlayer$lambda(isDiscovered$delegate)) {
        tmp_4 = this_2;
      } else {
        tmp_4 = null;
      }
      var tmp$ret$5 = tmp_4;
      var tmp$ret$6 = new PlayerTileData(tmp, isVisible, tmp_1, tmp_3, tmp$ret$5);
      destination.add_utx5q5_k$(tmp$ret$6);
    }
    return destination;
  };
  protoOf(GameApi).testCrash = function () {
    throw IllegalStateException_init_$Create$('chuj');
  };
  protoOf(GameApi).execute = function (action) {
    if (action instanceof Move) {
      var tmp0 = this.units_1.get_values_ksazhn_k$();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
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
        throw new NotImplementedError();
      } else {
        tmp_1 = tmp2_elvis_lhs;
      }
      var unit = tmp_1;
      var paths = this.hexMap_1.movementRange_bkyi8a_k$(unit.coordinates, unit.movementLeft);
      // Inline function 'kotlin.collections.find' call
      var tmp$ret$5;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = paths.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
          if (last(element_0).equals(action.destination)) {
            tmp$ret$5 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$5 = null;
      }
      var tmp3_elvis_lhs = tmp$ret$5;
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        throw new NotImplementedError();
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      var path = tmp_2;
      if (first(path).equals(unit.coordinates)) {
        // Inline function 'kotlin.error' call
        var message = 'first is same';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_1 = path.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
        var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
        var current = unit.coordinates;
        var nextTile = require_0(this.hexMap_1.get_5pd6m2_k$(element_1));
        this.hexMap_1.markBusy_enngrl_k$(current, false);
        this.hexMap_1.markBusy_enngrl_k$(nextTile.coords, true);
        this.units_1.remove_gppy8k_k$(current);
        this.units_1.put_4fpzoq_k$(nextTile.coords, unit.copy(VOID, VOID, VOID, nextTile.coords, VOID, unit.movementLeft - 1 | 0));
        recalculateVision(this);
      }
    } else {
      if (action instanceof Attack) {
        // Inline function 'kotlin.TODO' call
        throw new NotImplementedError();
      } else {
        if (action instanceof Settle) {
          var tmp9 = this.units_1.get_values_ksazhn_k$();
          var tmp$ret$10;
          $l$block_1: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var _iterator__ex2g4s_2 = tmp9.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
              var element_2 = _iterator__ex2g4s_2.next_20eer_k$();
              if (element_2.unitId === action.settlersId) {
                tmp$ret$10 = element_2;
                break $l$block_1;
              }
            }
            tmp$ret$10 = null;
          }
          var tmp4_safe_receiver = tmp$ret$10;
          var tmp_3;
          if (tmp4_safe_receiver == null) {
            tmp_3 = null;
          } else {
            // Inline function 'kotlin.takeIf' call
            var tmp_4;
            if (tmp4_safe_receiver.playerId === this.currentPlayer.playerId) {
              tmp_4 = tmp4_safe_receiver;
            } else {
              tmp_4 = null;
            }
            tmp_3 = tmp_4;
          }
          var tmp5_safe_receiver = tmp_3;
          var tmp_5;
          if (tmp5_safe_receiver == null) {
            tmp_5 = null;
          } else {
            // Inline function 'kotlin.takeIf' call
            var tmp_6;
            if (tmp5_safe_receiver.unitType.equals(UnitType_SETTLERS_getInstance())) {
              tmp_6 = tmp5_safe_receiver;
            } else {
              tmp_6 = null;
            }
            tmp_5 = tmp_6;
          }
          var tmp6_elvis_lhs = tmp_5;
          var tmp_7;
          if (tmp6_elvis_lhs == null) {
            throw new NotImplementedError();
          } else {
            tmp_7 = tmp6_elvis_lhs;
          }
          var unit_0 = tmp_7;
          var tmp15 = this.cities_1.get_keys_wop4xp_k$();
          var tmp$ret$15;
          $l$block_3: {
            // Inline function 'kotlin.collections.any' call
            var tmp_8;
            if (isInterface(tmp15, Collection)) {
              tmp_8 = tmp15.isEmpty_y1axqb_k$();
            } else {
              tmp_8 = false;
            }
            if (tmp_8) {
              tmp$ret$15 = false;
              break $l$block_3;
            }
            var _iterator__ex2g4s_3 = tmp15.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
              var element_3 = _iterator__ex2g4s_3.next_20eer_k$();
              if (distanceTo(element_3, unit_0.coordinates) < 4) {
                tmp$ret$15 = true;
                break $l$block_3;
              }
            }
            tmp$ret$15 = false;
          }
          if (tmp$ret$15) {
            // Inline function 'kotlin.TODO' call
            throw new NotImplementedError();
          }
          this.hexMap_1.markBusy_enngrl_k$(unit_0.coordinates, false);
          this.hexMap_1.build_jx4jxu_k$(unit_0.coordinates, Building_VILLAGE_HALL_getInstance());
          this.units_1.remove_gppy8k_k$(unit_0.coordinates);
          var tmp_9 = unit_0.coordinates;
          var tmp7_coordinates = unit_0.coordinates;
          var tmp8_playerId = unit_0.playerId;
          this.cities_1.put_4fpzoq_k$(tmp_9, new City(VOID, tmp8_playerId, tmp7_coordinates));
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(GameApi).endTurn = function () {
    var removed = this.turns_1.removeAt_6niowx_k$(0);
    this.turns_1.add_utx5q5_k$(removed);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.unitsFor(this.currentPlayer.playerId).iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      this.units_1.put_4fpzoq_k$(element.coordinates, element.copy(VOID, VOID, VOID, VOID, VOID, imul(element.speed, 10)));
    }
    this.stocksManager_1.collect_nkk15z_k$(this.citiesFor(this.currentPlayer.playerId), this.units_1.get_values_ksazhn_k$());
  };
  protoOf(GameApi).generateGameState = function () {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
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
  function GameLog() {
  }
  function _get_records__lxxg5r($this) {
    return $this.records_1;
  }
  function _get_listeners__760gzy($this) {
    return $this.listeners_1;
  }
  function GameLogImpl() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.records_1 = ArrayList_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.listeners_1 = ArrayList_init_$Create$_0();
  }
  protoOf(GameLogImpl).write_mozxwr_k$ = function (message) {
    this.records_1.add_utx5q5_k$(message);
  };
  protoOf(GameLogImpl).addMessageListener_468aa7_k$ = function (listener) {
    this.listeners_1.add_utx5q5_k$(listener);
  };
  protoOf(GameLogImpl).removeMessageListener_ru87sc_k$ = function (listener) {
    this.listeners_1.remove_cedx0m_k$(listener);
  };
  function GameState(players, tileList, cities, units, stock) {
    this.players = players;
    this.tileList = tileList;
    this.cities = cities;
    this.units = units;
    this.stock = stock;
  }
  protoOf(GameState).get_players_6wax4n_k$ = function () {
    return this.players;
  };
  protoOf(GameState).get_tileList_4e6fqt_k$ = function () {
    return this.tileList;
  };
  protoOf(GameState).get_cities_bwzdqq_k$ = function () {
    return this.cities;
  };
  protoOf(GameState).get_units_izpufa_k$ = function () {
    return this.units;
  };
  protoOf(GameState).get_stock_iyq771_k$ = function () {
    return this.stock;
  };
  protoOf(GameState).component1_7eebsc_k$ = function () {
    return this.players;
  };
  protoOf(GameState).component2_7eebsb_k$ = function () {
    return this.tileList;
  };
  protoOf(GameState).component3_7eebsa_k$ = function () {
    return this.cities;
  };
  protoOf(GameState).component4_7eebs9_k$ = function () {
    return this.units;
  };
  protoOf(GameState).component5_7eebs8_k$ = function () {
    return this.stock;
  };
  protoOf(GameState).copy_ve02xx_k$ = function (players, tileList, cities, units, stock) {
    return new GameState(players, tileList, cities, units, stock);
  };
  protoOf(GameState).copy = function (players, tileList, cities, units, stock, $super) {
    players = players === VOID ? this.players : players;
    tileList = tileList === VOID ? this.tileList : tileList;
    cities = cities === VOID ? this.cities : cities;
    units = units === VOID ? this.units : units;
    stock = stock === VOID ? this.stock : stock;
    return $super === VOID ? this.copy_ve02xx_k$(players, tileList, cities, units, stock) : $super.copy_ve02xx_k$.call(this, players, tileList, cities, units, stock);
  };
  protoOf(GameState).toString = function () {
    return 'GameState(players=' + toString(this.players) + ', tileList=' + toString(this.tileList) + ', cities=' + toString(this.cities) + ', units=' + toString(this.units) + ', stock=' + toString(this.stock) + ')';
  };
  protoOf(GameState).hashCode = function () {
    var result = hashCode(this.players);
    result = imul(result, 31) + hashCode(this.tileList) | 0;
    result = imul(result, 31) + hashCode(this.cities) | 0;
    result = imul(result, 31) + hashCode(this.units) | 0;
    result = imul(result, 31) + hashCode(this.stock) | 0;
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
    return true;
  };
  function Player(playerId, name, color) {
    playerId = playerId === VOID ? Companion_getInstance().random_fimq0t_k$().toHexString_vts0k1_k$() : playerId;
    this.playerId = playerId;
    this.name = name;
    this.color = color;
  }
  protoOf(Player).get_playerId_q2dzv_k$ = function () {
    return this.playerId;
  };
  protoOf(Player).get_name_woqyms_k$ = function () {
    return this.name;
  };
  protoOf(Player).get_color_ipu8u2_k$ = function () {
    return this.color;
  };
  protoOf(Player).component1_7eebsc_k$ = function () {
    return this.playerId;
  };
  protoOf(Player).component2_7eebsb_k$ = function () {
    return this.name;
  };
  protoOf(Player).component3_7eebsa_k$ = function () {
    return this.color;
  };
  protoOf(Player).copy_s6f4ib_k$ = function (playerId, name, color) {
    return new Player(playerId, name, color);
  };
  protoOf(Player).copy = function (playerId, name, color, $super) {
    playerId = playerId === VOID ? this.playerId : playerId;
    name = name === VOID ? this.name : name;
    color = color === VOID ? this.color : color;
    return $super === VOID ? this.copy_s6f4ib_k$(playerId, name, color) : $super.copy_s6f4ib_k$.call(this, playerId, name, color);
  };
  protoOf(Player).toString = function () {
    return 'Player(playerId=' + this.playerId + ', name=' + this.name + ', color=' + this.color.toString() + ')';
  };
  protoOf(Player).hashCode = function () {
    var result = getStringHashCode(this.playerId);
    result = imul(result, 31) + getStringHashCode(this.name) | 0;
    result = imul(result, 31) + this.color.hashCode() | 0;
    return result;
  };
  protoOf(Player).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Player))
      return false;
    var tmp0_other_with_cast = other instanceof Player ? other : THROW_CCE();
    if (!(this.playerId === tmp0_other_with_cast.playerId))
      return false;
    if (!(this.name === tmp0_other_with_cast.name))
      return false;
    if (!this.color.equals(tmp0_other_with_cast.color))
      return false;
    return true;
  };
  var PlayerColor_BLUE_instance;
  var PlayerColor_RED_instance;
  var PlayerColor_GREEN_instance;
  function values_2() {
    return [PlayerColor_BLUE_getInstance(), PlayerColor_RED_getInstance(), PlayerColor_GREEN_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'BLUE':
        return PlayerColor_BLUE_getInstance();
      case 'RED':
        return PlayerColor_RED_getInstance();
      case 'GREEN':
        return PlayerColor_GREEN_getInstance();
      default:
        PlayerColor_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var PlayerColor_entriesInitialized;
  function PlayerColor_initEntries() {
    if (PlayerColor_entriesInitialized)
      return Unit_getInstance();
    PlayerColor_entriesInitialized = true;
    PlayerColor_BLUE_instance = new PlayerColor('BLUE', 0);
    PlayerColor_RED_instance = new PlayerColor('RED', 1);
    PlayerColor_GREEN_instance = new PlayerColor('GREEN', 2);
  }
  var $ENTRIES_2;
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
  function Stockpiles(food, wood, gold) {
    food = food === VOID ? 0 : food;
    wood = wood === VOID ? 0 : wood;
    gold = gold === VOID ? 0 : gold;
    this.food = food;
    this.wood = wood;
    this.gold = gold;
  }
  protoOf(Stockpiles).get_food_wom55z_k$ = function () {
    return this.food;
  };
  protoOf(Stockpiles).get_wood_wowzxy_k$ = function () {
    return this.wood;
  };
  protoOf(Stockpiles).get_gold_woms2x_k$ = function () {
    return this.gold;
  };
  protoOf(Stockpiles).plus = function (other) {
    return new Stockpiles(this.food + other.food | 0, this.wood + other.wood | 0, this.gold + other.gold | 0);
  };
  protoOf(Stockpiles).minus = function (other) {
    return new Stockpiles(this.food - other.food | 0, this.wood - other.wood | 0, this.gold - other.gold | 0);
  };
  protoOf(Stockpiles).component1_7eebsc_k$ = function () {
    return this.food;
  };
  protoOf(Stockpiles).component2_7eebsb_k$ = function () {
    return this.wood;
  };
  protoOf(Stockpiles).component3_7eebsa_k$ = function () {
    return this.gold;
  };
  protoOf(Stockpiles).copy_6of2tf_k$ = function (food, wood, gold) {
    return new Stockpiles(food, wood, gold);
  };
  protoOf(Stockpiles).copy = function (food, wood, gold, $super) {
    food = food === VOID ? this.food : food;
    wood = wood === VOID ? this.wood : wood;
    gold = gold === VOID ? this.gold : gold;
    return $super === VOID ? this.copy_6of2tf_k$(food, wood, gold) : $super.copy_6of2tf_k$.call(this, food, wood, gold);
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
  function _get_hexMap__jqqm8m_0($this) {
    return $this.hexMap_1;
  }
  function _get_stocks__6miu1a($this) {
    return $this.stocks_1;
  }
  function StockpilesManager(hexMap, stocks) {
    this.hexMap_1 = hexMap;
    this.stocks_1 = toMutableMap(stocks);
  }
  protoOf(StockpilesManager).getFor_rjhf5z_k$ = function (playerId) {
    return require_0(this.stocks_1.get_wei43m_k$(playerId));
  };
  protoOf(StockpilesManager).collect_nkk15z_k$ = function (playerCities, allUnits) {
    var tmp0_safe_receiver = firstOrNull(playerCities);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.playerId;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var playerId = tmp;
    var stock = this.getFor_rjhf5z_k$(playerId);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = playerCities.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.mapNotNull' call
      var tmp0 = this.hexMap_1.range_zaux3b_k$(element.coordinates, element.borderRange);
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$_0();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        var tmp0_safe_receiver_0 = this.hexMap_1.get_5pd6m2_k$(element_0);
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          destination.add_utx5q5_k$(tmp0_safe_receiver_0);
        }
      }
      var tiles = destination;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_1 = tiles.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
        var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
        var tmp_0;
        if (element_1.isBusy) {
          var tmp$ret$8;
          $l$block: {
            // Inline function 'kotlin.collections.first' call
            var _iterator__ex2g4s_2 = allUnits.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
              var element_2 = _iterator__ex2g4s_2.next_20eer_k$();
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
          stock = stock.plus(collect(element_1));
        }
      }
    }
    var tmp2 = this.stocks_1;
    // Inline function 'kotlin.collections.set' call
    var value = stock;
    tmp2.put_4fpzoq_k$(playerId, value);
  };
  function collect(_this__u8e3s4) {
    var tmp;
    var tmp0 = _this__u8e3s4.buildings;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.isEmpty_y1axqb_k$();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (contains(Companion_getInstance_0().cityMainBuildings, element)) {
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
        tmp = new Stockpiles(_this__u8e3s4.animals ? 2 : 1, _this__u8e3s4.forest ? 1 : 0);
      } else {
        tmp = new Stockpiles();
      }
    }
    var base = tmp;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0_0 = _this__u8e3s4.buildings;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_0 = tmp0_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
      var list = element_0.bonuses;
      addAll(destination, list);
    }
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_1 = destination.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
      var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
      if (element_1 instanceof StockCollectBonus) {
        destination_0.add_utx5q5_k$(element_1);
      }
    }
    // Inline function 'kotlin.collections.fold' call
    var accumulator = base;
    var _iterator__ex2g4s_2 = destination_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
      var element_2 = _iterator__ex2g4s_2.next_20eer_k$();
      accumulator = accumulator.plus(element_2.get_amount_b10di9_k$());
    }
    return accumulator;
  }
  function _get_hexMap__jqqm8m_1($this) {
    return $this.hexMap_1;
  }
  function _get_data__d5abxd($this) {
    return $this.data_1;
  }
  function VisionData(visible, discovered) {
    this.visible_1 = visible;
    this.discovered_1 = discovered;
  }
  protoOf(VisionData).get_visible_8zfvk9_k$ = function () {
    return this.visible_1;
  };
  protoOf(VisionData).get_discovered_ba7rjj_k$ = function () {
    return this.discovered_1;
  };
  function VisionCalculator(hexMap) {
    this.hexMap_1 = hexMap;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.data_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(VisionCalculator).getVisionFor_6va55b_k$ = function (playerId) {
    var tmp0_elvis_lhs = this.data_1.get_wei43m_k$(playerId);
    return tmp0_elvis_lhs == null ? new VisionData(emptySet(), emptySet()) : tmp0_elvis_lhs;
  };
  protoOf(VisionCalculator).recalculate_b0l54_k$ = function (playerId, units, cities) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(units, 10));
    var _iterator__ex2g4s = units.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$0 = to(item.coordinates, item.visionRange);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var tmp = destination;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(cities, 10));
    var _iterator__ex2g4s_0 = cities.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var item_0 = _iterator__ex2g4s_0.next_20eer_k$();
      var tmp$ret$3 = to(item_0.coordinates, item_0.visionRange);
      destination_0.add_utx5q5_k$(tmp$ret$3);
    }
    var visionPoints = plus(tmp, destination_0);
    // Inline function 'kotlin.collections.mutableSetOf' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_1 = LinkedHashSet_init_$Create$();
    var _iterator__ex2g4s_1 = visionPoints.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s_1.next_20eer_k$();
      var coordinates = element.component1_7eebsc_k$();
      var range = element.component2_7eebsb_k$();
      var list = this.hexMap_1.range_zaux3b_k$(coordinates, range);
      addAll(destination_1, list);
    }
    var visible = destination_1;
    var updatedDiscovered = plus_0(this.getVisionFor_6va55b_k$(playerId).discovered_1, visible);
    this.data_1.put_4fpzoq_k$(playerId, new VisionData(visible, updatedDiscovered));
  };
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).fromDoubles = function (q, r, s) {
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
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Coordinates(q, r) {
    Companion_getInstance_3();
    this.q = q;
    this.r = r;
  }
  protoOf(Coordinates).get_q_1mhr60_k$ = function () {
    return this.q;
  };
  protoOf(Coordinates).get_r_1mhr61_k$ = function () {
    return this.r;
  };
  protoOf(Coordinates).get_s_1mhr62_k$ = function () {
    return (-this.q | 0) - this.r | 0;
  };
  protoOf(Coordinates).toString = function () {
    return '(q=' + this.q + ', r=' + this.r + ')';
  };
  protoOf(Coordinates).component1_7eebsc_k$ = function () {
    return this.q;
  };
  protoOf(Coordinates).component2_7eebsb_k$ = function () {
    return this.r;
  };
  protoOf(Coordinates).copy_fhtu3_k$ = function (q, r) {
    return new Coordinates(q, r);
  };
  protoOf(Coordinates).copy = function (q, r, $super) {
    q = q === VOID ? this.q : q;
    r = r === VOID ? this.r : r;
    return $super === VOID ? this.copy_fhtu3_k$(q, r) : $super.copy_fhtu3_k$.call(this, q, r);
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
  function toCoordinates(_this__u8e3s4) {
    return new Coordinates(_this__u8e3s4.get_first_irdx8n_k$(), _this__u8e3s4.get_second_jf7fjx_k$());
  }
  function movedBy(_this__u8e3s4, q, r) {
    q = q === VOID ? 0 : q;
    r = r === VOID ? 0 : r;
    return new Coordinates(_this__u8e3s4.q + q | 0, _this__u8e3s4.r + r | 0);
  }
  function neighbors(_this__u8e3s4) {
    return listOf([movedBy(_this__u8e3s4, -1, 0), movedBy(_this__u8e3s4, -1, 1), movedBy(_this__u8e3s4, 0, 1), movedBy(_this__u8e3s4, 0, -1), movedBy(_this__u8e3s4, 1, 0), movedBy(_this__u8e3s4, 1, -1)]);
  }
  function distanceTo(_this__u8e3s4, other) {
    return ((abs(_this__u8e3s4.q - other.q | 0) + abs(_this__u8e3s4.r - other.r | 0) | 0) + abs(_this__u8e3s4.s - other.s | 0) | 0) / 2 | 0;
  }
  function lineTo(_this__u8e3s4, other) {
    if (_this__u8e3s4.equals(other))
      return listOf_0(_this__u8e3s4);
    var length = distanceTo(_this__u8e3s4, other);
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = length + 1 | 0;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var _destruct__k2r9zo = lineTo$cubeLerp(_this__u8e3s4, other, 1.0 / length * index);
        var q = _destruct__k2r9zo.component1_7eebsc_k$();
        var r = _destruct__k2r9zo.component2_7eebsb_k$();
        var s = _destruct__k2r9zo.component3_7eebsa_k$();
        var tmp$ret$0 = Companion_getInstance_3().fromDoubles(q, r, s);
        list.add_utx5q5_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
    return list;
  }
  function getAllInRange(_this__u8e3s4, radius) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
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
            this_0.add_utx5q5_k$(movedBy(_this__u8e3s4, q, r));
          }
           while (!(r === last));
      }
       while (!(q === radius));
    return this_0.build_nmwvly_k$();
  }
  function lineTo$lerp(a, b, t) {
    return a + (b - a | 0) * t;
  }
  function lineTo$cubeLerp(a, b, t) {
    return new Triple(lineTo$lerp(a.q, b.q, t), lineTo$lerp(a.r, b.r, t), lineTo$lerp(a.s, b.s, t));
  }
  function HexLayouts() {
    HexLayouts_instance = this;
  }
  protoOf(HexLayouts).rectangle_ymh55_k$ = function (width, height, offset) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
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
            this_0.add_utx5q5_k$(new Coordinates((index - (index_0 / 2 | 0) | 0) - offset | 0, index_0 - offset | 0));
          }
           while (inductionVariable_0 < height);
      }
       while (inductionVariable < width);
    return this_0.build_nmwvly_k$();
  };
  protoOf(HexLayouts).rectangle$default_59oapf_k$ = function (width, height, offset, $super) {
    offset = offset === VOID ? 0 : offset;
    return $super === VOID ? this.rectangle_ymh55_k$(width, height, offset) : $super.rectangle_ymh55_k$.call(this, width, height, offset);
  };
  var HexLayouts_instance;
  function HexLayouts_getInstance() {
    if (HexLayouts_instance == null)
      new HexLayouts();
    return HexLayouts_instance;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
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
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function HexMap$movementRange$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.get_second_jf7fjx_k$();
    var tmp$ret$1 = b.get_second_jf7fjx_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function HexMap(tileList) {
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tileList, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = tileList.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$0 = element.coords;
      destination.put_4fpzoq_k$(tmp$ret$0, element);
    }
    tmp.tiles_1 = toMutableMap(destination);
  }
  protoOf(HexMap).get_tiles_iz2wrg_k$ = function () {
    return this.tiles_1;
  };
  protoOf(HexMap).get_5pd6m2_k$ = function (coordinates) {
    return this.tiles_1.get_wei43m_k$(coordinates);
  };
  protoOf(HexMap).set_xdmflf_k$ = function (tile) {
    var tmp0 = this.tiles_1;
    // Inline function 'kotlin.collections.set' call
    var key = tile.coords;
    tmp0.put_4fpzoq_k$(key, tile);
  };
  protoOf(HexMap).range_zaux3b_k$ = function (center, radius) {
    return getAllInRange(center, radius);
  };
  protoOf(HexMap).markBusy_enngrl_k$ = function (coordinates, isBusy) {
    var tile = require_0(this.tiles_1.get_wei43m_k$(coordinates));
    var tmp0 = this.tiles_1;
    // Inline function 'kotlin.collections.set' call
    var value = tile.updated(isBusy);
    tmp0.put_4fpzoq_k$(coordinates, value);
  };
  protoOf(HexMap).build_jx4jxu_k$ = function (coordinates, building) {
    var tile = require_0(this.tiles_1.get_wei43m_k$(coordinates));
    var tmp0_safe_receiver = building.replaces;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = minus(tile.buildings, tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var updatedBuildings = plus_1(tmp1_elvis_lhs == null ? tile.buildings : tmp1_elvis_lhs, building);
    var tmp_0;
    var tmp_1;
    if (contains(Companion_getInstance_0().cityMainBuildings, building)) {
      tmp_1 = tile instanceof Grass;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = tile.copy(VOID, VOID, VOID, false, false, VOID, updatedBuildings);
    } else {
      tmp_0 = tile.updated(VOID, updatedBuildings);
    }
    var updated = tmp_0;
    // Inline function 'kotlin.collections.set' call
    this.tiles_1.put_4fpzoq_k$(coordinates, updated);
  };
  protoOf(HexMap).findPath_5dfdz2_k$ = function (start, destination) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(HexMap).movementRange_bkyi8a_k$ = function (start, movement) {
    var frontier = mutableListOf([to(start, 0)]);
    // Inline function 'kotlin.collections.mutableMapOf' call
    var cameFrom = LinkedHashMap_init_$Create$_0();
    var costSoFar = mutableMapOf([to(start, 0)]);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!frontier.isEmpty_y1axqb_k$()) {
        break $l$loop;
      }
      // Inline function 'kotlin.collections.sortBy' call
      if (frontier.get_size_woubt6_k$() > 1) {
        // Inline function 'kotlin.comparisons.compareBy' call
        var tmp = HexMap$movementRange$lambda;
        var tmp$ret$2 = new sam$kotlin_Comparator$0(tmp);
        sortWith(frontier, tmp$ret$2);
      }
      var current = removeFirst(frontier).get_first_irdx8n_k$();
      // Inline function 'kotlin.collections.mapNotNull' call
      var tmp0 = neighbors(current);
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$_0();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        var tmp0_safe_receiver = this.tiles_1.get_wei43m_k$(element);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          destination.add_utx5q5_k$(tmp0_safe_receiver);
        }
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = destination.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        $l$block: {
          var newCost = getValue(costSoFar, current) + element_0.movementCost() | 0;
          if (newCost > movement) {
            break $l$block;
          }
          var tmp0_safe_receiver_0 = costSoFar.get_wei43m_k$(element_0.coords);
          var tmp_0;
          if (tmp0_safe_receiver_0 == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            tmp_0 = tmp0_safe_receiver_0 > newCost;
          }
          if (!(tmp_0 === false)) {
            // Inline function 'kotlin.collections.set' call
            var key = element_0.coords;
            costSoFar.put_4fpzoq_k$(key, newCost);
            frontier.add_utx5q5_k$(to(element_0.coords, newCost));
            // Inline function 'kotlin.collections.set' call
            var key_0 = element_0.coords;
            cameFrom.put_4fpzoq_k$(key_0, current);
          }
        }
      }
    }
    var costToPaths = mutableMapOf([to(0, mutableListOf([listOf_0(start)]))]);
    var inductionVariable = 1;
    if (inductionVariable <= movement)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paths = getValue(costToPaths, i - 1 | 0);
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(paths, 10));
        var _iterator__ex2g4s_1 = paths.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
          var item = _iterator__ex2g4s_1.next_20eer_k$();
          var tmp$ret$17 = last(item);
          destination_0.add_utx5q5_k$(tmp$ret$17);
        }
        var existingPathEnds = destination_0;
        var tmp13 = i;
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(paths, 10));
        var _iterator__ex2g4s_2 = paths.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
          var item_0 = _iterator__ex2g4s_2.next_20eer_k$();
          // Inline function 'kotlin.collections.filter' call
          var tmp0_0 = neighbors(last(item_0));
          // Inline function 'kotlin.collections.filterTo' call
          var destination_2 = ArrayList_init_$Create$_0();
          var _iterator__ex2g4s_3 = tmp0_0.iterator_jk1svi_k$();
          while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
            var element_1 = _iterator__ex2g4s_3.next_20eer_k$();
            var tmp_1;
            var tmp_2;
            var tmp0_safe_receiver_1 = this.tiles_1.get_wei43m_k$(element_1);
            if ((tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.canGoThrough()) === true) {
              tmp_2 = !existingPathEnds.contains_aljjnj_k$(element_1);
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp_1 = !element_1.equals(start);
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              destination_2.add_utx5q5_k$(element_1);
            }
          }
          var possibleTargets = destination_2;
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.mapTo' call
          var destination_3 = ArrayList_init_$Create$(collectionSizeOrDefault(possibleTargets, 10));
          var _iterator__ex2g4s_4 = possibleTargets.iterator_jk1svi_k$();
          while (_iterator__ex2g4s_4.hasNext_bitz1p_k$()) {
            var item_1 = _iterator__ex2g4s_4.next_20eer_k$();
            var tmp$ret$23 = plus_2(item_0, item_1);
            destination_3.add_utx5q5_k$(tmp$ret$23);
          }
          destination_1.add_utx5q5_k$(destination_3);
        }
        // Inline function 'kotlin.collections.set' call
        var value = flatten(destination_1);
        costToPaths.put_4fpzoq_k$(tmp13, value);
      }
       while (!(i === movement));
    costToPaths.remove_gppy8k_k$(0);
    return flatten(costToPaths.get_values_ksazhn_k$());
  };
  protoOf(HexMap).line_s1v8ng_k$ = function (from, to) {
    return lineTo(from, to);
  };
  protoOf(HexMap).isVisible_5otqxk_k$ = function (from, to) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(HexMap).getFoV_qax2px_k$ = function (from) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  function Tile() {
    this.isBusy_1 = false;
  }
  protoOf(Tile).get_isBusy_evvdxo_k$ = function () {
    return this.isBusy_1;
  };
  protoOf(Tile).movementCost = function () {
    var tmp;
    if (this.isBusy) {
      tmp = 2147483647;
    } else {
      // Inline function 'kotlin.collections.flatMap' call
      var tmp0 = this.buildings;
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        var list = element.bonuses;
        addAll(destination, list);
      }
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination_0 = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s_0 = destination.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        if (element_0 instanceof OverrideMovementCost) {
          destination_0.add_utx5q5_k$(element_0);
        }
      }
      var tmp0_safe_receiver = firstOrNull_0(destination_0);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_movementCost_aa1lej_k$();
      tmp = tmp1_elvis_lhs == null ? this.baseMovementCost : tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Tile).updated = function (isBusy, buildings, $super) {
    isBusy = isBusy === VOID ? this.isBusy : isBusy;
    buildings = buildings === VOID ? this.buildings : buildings;
    return $super === VOID ? this.updated_r7gmwl_k$(isBusy, buildings) : $super.updated_r7gmwl_k$.call(this, isBusy, buildings);
  };
  protoOf(Tile).canGoThrough = function () {
    return !this.isBusy;
  };
  function Water(coords, buildings) {
    var tmp;
    if (buildings === VOID) {
      // Inline function 'kotlin.collections.setOf' call
      tmp = emptySet();
    } else {
      tmp = buildings;
    }
    buildings = tmp;
    Tile.call(this);
    this.coords_1 = coords;
    this.buildings_1 = buildings;
    this.baseMovementCost_1 = 2147483647;
  }
  protoOf(Water).get_coords_c0750n_k$ = function () {
    return this.coords_1;
  };
  protoOf(Water).get_buildings_en7o8a_k$ = function () {
    return this.buildings_1;
  };
  protoOf(Water).get_baseMovementCost_9h4biu_k$ = function () {
    return this.baseMovementCost_1;
  };
  protoOf(Water).updated_r7gmwl_k$ = function (isBusy, buildings) {
    return this.copy(VOID, buildings);
  };
  protoOf(Water).component1_7eebsc_k$ = function () {
    return this.coords_1;
  };
  protoOf(Water).component2_7eebsb_k$ = function () {
    return this.buildings_1;
  };
  protoOf(Water).copy_frsp8u_k$ = function (coords, buildings) {
    return new Water(coords, buildings);
  };
  protoOf(Water).copy = function (coords, buildings, $super) {
    coords = coords === VOID ? this.coords_1 : coords;
    buildings = buildings === VOID ? this.buildings_1 : buildings;
    return $super === VOID ? this.copy_frsp8u_k$(coords, buildings) : $super.copy_frsp8u_k$.call(this, coords, buildings);
  };
  protoOf(Water).toString = function () {
    return 'Water(coords=' + this.coords_1.toString() + ', buildings=' + toString(this.buildings_1) + ')';
  };
  protoOf(Water).hashCode = function () {
    var result = this.coords_1.hashCode();
    result = imul(result, 31) + hashCode(this.buildings_1) | 0;
    return result;
  };
  protoOf(Water).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Water))
      return false;
    var tmp0_other_with_cast = other instanceof Water ? other : THROW_CCE();
    if (!this.coords_1.equals(tmp0_other_with_cast.coords_1))
      return false;
    if (!equals(this.buildings_1, tmp0_other_with_cast.buildings_1))
      return false;
    return true;
  };
  function Grass(coords, isBusy, coast, forest, animals, river, buildings) {
    isBusy = isBusy === VOID ? false : isBusy;
    coast = coast === VOID ? false : coast;
    forest = forest === VOID ? false : forest;
    animals = animals === VOID ? false : animals;
    river = river === VOID ? false : river;
    var tmp;
    if (buildings === VOID) {
      // Inline function 'kotlin.collections.setOf' call
      tmp = emptySet();
    } else {
      tmp = buildings;
    }
    buildings = tmp;
    Tile.call(this);
    this.coords_1 = coords;
    this.isBusy_2 = isBusy;
    this.coast = coast;
    this.forest = forest;
    this.animals = animals;
    this.river = river;
    this.buildings_1 = buildings;
  }
  protoOf(Grass).get_coords_c0750n_k$ = function () {
    return this.coords_1;
  };
  protoOf(Grass).get_isBusy_evvdxo_k$ = function () {
    return this.isBusy_2;
  };
  protoOf(Grass).get_coast_ipu0rx_k$ = function () {
    return this.coast;
  };
  protoOf(Grass).get_forest_dfdnvq_k$ = function () {
    return this.forest;
  };
  protoOf(Grass).get_animals_cwn5yq_k$ = function () {
    return this.animals;
  };
  protoOf(Grass).get_river_ixzizn_k$ = function () {
    return this.river;
  };
  protoOf(Grass).get_buildings_en7o8a_k$ = function () {
    return this.buildings_1;
  };
  protoOf(Grass).get_baseMovementCost_9h4biu_k$ = function () {
    return this.river || this.forest ? 15 : 10;
  };
  protoOf(Grass).updated_r7gmwl_k$ = function (isBusy, buildings) {
    return this.copy(VOID, isBusy, VOID, VOID, VOID, VOID, buildings);
  };
  protoOf(Grass).component1_7eebsc_k$ = function () {
    return this.coords_1;
  };
  protoOf(Grass).component2_7eebsb_k$ = function () {
    return this.isBusy_2;
  };
  protoOf(Grass).component3_7eebsa_k$ = function () {
    return this.coast;
  };
  protoOf(Grass).component4_7eebs9_k$ = function () {
    return this.forest;
  };
  protoOf(Grass).component5_7eebs8_k$ = function () {
    return this.animals;
  };
  protoOf(Grass).component6_7eebs7_k$ = function () {
    return this.river;
  };
  protoOf(Grass).component7_7eebs6_k$ = function () {
    return this.buildings_1;
  };
  protoOf(Grass).copy_gt2asp_k$ = function (coords, isBusy, coast, forest, animals, river, buildings) {
    return new Grass(coords, isBusy, coast, forest, animals, river, buildings);
  };
  protoOf(Grass).copy = function (coords, isBusy, coast, forest, animals, river, buildings, $super) {
    coords = coords === VOID ? this.coords_1 : coords;
    isBusy = isBusy === VOID ? this.isBusy_2 : isBusy;
    coast = coast === VOID ? this.coast : coast;
    forest = forest === VOID ? this.forest : forest;
    animals = animals === VOID ? this.animals : animals;
    river = river === VOID ? this.river : river;
    buildings = buildings === VOID ? this.buildings_1 : buildings;
    return $super === VOID ? this.copy_gt2asp_k$(coords, isBusy, coast, forest, animals, river, buildings) : $super.copy_gt2asp_k$.call(this, coords, isBusy, coast, forest, animals, river, buildings);
  };
  protoOf(Grass).toString = function () {
    return 'Grass(coords=' + this.coords_1.toString() + ', isBusy=' + this.isBusy_2 + ', coast=' + this.coast + ', forest=' + this.forest + ', animals=' + this.animals + ', river=' + this.river + ', buildings=' + toString(this.buildings_1) + ')';
  };
  protoOf(Grass).hashCode = function () {
    var result = this.coords_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.isBusy_2) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.coast) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.forest) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.animals) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.river) | 0;
    result = imul(result, 31) + hashCode(this.buildings_1) | 0;
    return result;
  };
  protoOf(Grass).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Grass))
      return false;
    var tmp0_other_with_cast = other instanceof Grass ? other : THROW_CCE();
    if (!this.coords_1.equals(tmp0_other_with_cast.coords_1))
      return false;
    if (!(this.isBusy_2 === tmp0_other_with_cast.isBusy_2))
      return false;
    if (!(this.coast === tmp0_other_with_cast.coast))
      return false;
    if (!(this.forest === tmp0_other_with_cast.forest))
      return false;
    if (!(this.animals === tmp0_other_with_cast.animals))
      return false;
    if (!(this.river === tmp0_other_with_cast.river))
      return false;
    if (!equals(this.buildings_1, tmp0_other_with_cast.buildings_1))
      return false;
    return true;
  };
  function Mountains(coords, isBusy, buildings, gold) {
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
    this.coords_1 = coords;
    this.isBusy_2 = isBusy;
    this.buildings_1 = buildings;
    this.gold = gold;
  }
  protoOf(Mountains).get_coords_c0750n_k$ = function () {
    return this.coords_1;
  };
  protoOf(Mountains).get_isBusy_evvdxo_k$ = function () {
    return this.isBusy_2;
  };
  protoOf(Mountains).get_buildings_en7o8a_k$ = function () {
    return this.buildings_1;
  };
  protoOf(Mountains).get_gold_woms2x_k$ = function () {
    return this.gold;
  };
  protoOf(Mountains).get_baseMovementCost_9h4biu_k$ = function () {
    return 15;
  };
  protoOf(Mountains).updated_r7gmwl_k$ = function (isBusy, buildings) {
    return this.copy(VOID, isBusy, buildings);
  };
  protoOf(Mountains).component1_7eebsc_k$ = function () {
    return this.coords_1;
  };
  protoOf(Mountains).component2_7eebsb_k$ = function () {
    return this.isBusy_2;
  };
  protoOf(Mountains).component3_7eebsa_k$ = function () {
    return this.buildings_1;
  };
  protoOf(Mountains).component4_7eebs9_k$ = function () {
    return this.gold;
  };
  protoOf(Mountains).copy_j38xr0_k$ = function (coords, isBusy, buildings, gold) {
    return new Mountains(coords, isBusy, buildings, gold);
  };
  protoOf(Mountains).copy = function (coords, isBusy, buildings, gold, $super) {
    coords = coords === VOID ? this.coords_1 : coords;
    isBusy = isBusy === VOID ? this.isBusy_2 : isBusy;
    buildings = buildings === VOID ? this.buildings_1 : buildings;
    gold = gold === VOID ? this.gold : gold;
    return $super === VOID ? this.copy_j38xr0_k$(coords, isBusy, buildings, gold) : $super.copy_j38xr0_k$.call(this, coords, isBusy, buildings, gold);
  };
  protoOf(Mountains).toString = function () {
    return 'Mountains(coords=' + this.coords_1.toString() + ', isBusy=' + this.isBusy_2 + ', buildings=' + toString(this.buildings_1) + ', gold=' + this.gold + ')';
  };
  protoOf(Mountains).hashCode = function () {
    var result = this.coords_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.isBusy_2) | 0;
    result = imul(result, 31) + hashCode(this.buildings_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.gold) | 0;
    return result;
  };
  protoOf(Mountains).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Mountains))
      return false;
    var tmp0_other_with_cast = other instanceof Mountains ? other : THROW_CCE();
    if (!this.coords_1.equals(tmp0_other_with_cast.coords_1))
      return false;
    if (!(this.isBusy_2 === tmp0_other_with_cast.isBusy_2))
      return false;
    if (!equals(this.buildings_1, tmp0_other_with_cast.buildings_1))
      return false;
    if (!(this.gold === tmp0_other_with_cast.gold))
      return false;
    return true;
  };
  function PlayerTileData(coordinates, isVisible, tile, unit, city) {
    this.coordinates = coordinates;
    this.isVisible = isVisible;
    this.tile = tile;
    this.unit = unit;
    this.city = city;
  }
  protoOf(PlayerTileData).get_coordinates_q6f2pa_k$ = function () {
    return this.coordinates;
  };
  protoOf(PlayerTileData).get_isVisible_6n82m7_k$ = function () {
    return this.isVisible;
  };
  protoOf(PlayerTileData).get_tile_wouygn_k$ = function () {
    return this.tile;
  };
  protoOf(PlayerTileData).get_unit_wovp3h_k$ = function () {
    return this.unit;
  };
  protoOf(PlayerTileData).get_city_wok3w4_k$ = function () {
    return this.city;
  };
  protoOf(PlayerTileData).component1_7eebsc_k$ = function () {
    return this.coordinates;
  };
  protoOf(PlayerTileData).component2_7eebsb_k$ = function () {
    return this.isVisible;
  };
  protoOf(PlayerTileData).component3_7eebsa_k$ = function () {
    return this.tile;
  };
  protoOf(PlayerTileData).component4_7eebs9_k$ = function () {
    return this.unit;
  };
  protoOf(PlayerTileData).component5_7eebs8_k$ = function () {
    return this.city;
  };
  protoOf(PlayerTileData).copy_7of1bf_k$ = function (coordinates, isVisible, tile, unit, city) {
    return new PlayerTileData(coordinates, isVisible, tile, unit, city);
  };
  protoOf(PlayerTileData).copy = function (coordinates, isVisible, tile, unit, city, $super) {
    coordinates = coordinates === VOID ? this.coordinates : coordinates;
    isVisible = isVisible === VOID ? this.isVisible : isVisible;
    tile = tile === VOID ? this.tile : tile;
    unit = unit === VOID ? this.unit : unit;
    city = city === VOID ? this.city : city;
    return $super === VOID ? this.copy_7of1bf_k$(coordinates, isVisible, tile, unit, city) : $super.copy_7of1bf_k$.call(this, coordinates, isVisible, tile, unit, city);
  };
  protoOf(PlayerTileData).toString = function () {
    return 'PlayerTileData(coordinates=' + this.coordinates.toString() + ', isVisible=' + this.isVisible + ', tile=' + toString_0(this.tile) + ', unit=' + toString_0(this.unit) + ', city=' + toString_0(this.city) + ')';
  };
  protoOf(PlayerTileData).hashCode = function () {
    var result = this.coordinates.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.isVisible) | 0;
    result = imul(result, 31) + (this.tile == null ? 0 : hashCode(this.tile)) | 0;
    result = imul(result, 31) + (this.unit == null ? 0 : this.unit.hashCode()) | 0;
    result = imul(result, 31) + (this.city == null ? 0 : this.city.hashCode()) | 0;
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
    return true;
  };
  //region block: post-declaration
  defineProp(protoOf(TestData), 'gameState1', protoOf(TestData).get_gameState1_9stc85_k$);
  defineProp(protoOf(Companion), 'cityMainBuildings', protoOf(Companion).get_cityMainBuildings_rl9f4e_k$);
  defineProp(protoOf(Building), 'name', protoOf(Building).get_name_woqyms_k$);
  defineProp(protoOf(Building), 'ordinal', protoOf(Building).get_ordinal_ip24qg_k$);
  defineProp(protoOf(CityLevel), 'name', protoOf(CityLevel).get_name_woqyms_k$);
  defineProp(protoOf(CityLevel), 'ordinal', protoOf(CityLevel).get_ordinal_ip24qg_k$);
  defineProp(protoOf(City), 'borderRange', protoOf(City).get_borderRange_q2k16w_k$);
  defineProp(protoOf(City), 'visionRange', protoOf(City).get_visionRange_5kdbuc_k$);
  defineProp(protoOf(UnitType), 'name', protoOf(UnitType).get_name_woqyms_k$);
  defineProp(protoOf(UnitType), 'ordinal', protoOf(UnitType).get_ordinal_ip24qg_k$);
  defineProp(protoOf(GameApi), 'currentPlayer', protoOf(GameApi).get_currentPlayer_yc1fgx_k$);
  defineProp(protoOf(PlayerColor), 'name', protoOf(PlayerColor).get_name_woqyms_k$);
  defineProp(protoOf(PlayerColor), 'ordinal', protoOf(PlayerColor).get_ordinal_ip24qg_k$);
  defineProp(protoOf(Coordinates), 's', protoOf(Coordinates).get_s_1mhr62_k$);
  defineProp(protoOf(Tile), 'coords', function () {
    return this.get_coords_c0750n_k$();
  });
  defineProp(protoOf(Tile), 'buildings', function () {
    return this.get_buildings_en7o8a_k$();
  });
  defineProp(protoOf(Tile), 'isBusy', function () {
    return this.get_isBusy_evvdxo_k$();
  });
  defineProp(protoOf(Tile), 'baseMovementCost', function () {
    return this.get_baseMovementCost_9h4biu_k$();
  });
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    defineProp(_, 'TestData', TestData_getInstance);
    var $civ = _.civ || (_.civ = {});
    $civ.Move = Move;
    $civ.Attack = Attack;
    $civ.Settle = Settle;
    var $civ = _.civ || (_.civ = {});
    $civ.Building = Building;
    $civ.Building.values = values;
    $civ.Building.valueOf = valueOf;
    defineProp($civ.Building, 'VILLAGE_HALL', Building_VILLAGE_HALL_getInstance);
    defineProp($civ.Building, 'TOWN_HALL', Building_TOWN_HALL_getInstance);
    defineProp($civ.Building, 'CITY_HALL', Building_CITY_HALL_getInstance);
    defineProp($civ.Building, 'ROAD', Building_ROAD_getInstance);
    defineProp($civ.Building, 'LUMBERCAMP', Building_LUMBERCAMP_getInstance);
    defineProp($civ.Building, 'Companion', Companion_getInstance_0);
    var $civ = _.civ || (_.civ = {});
    $civ.CityLevel = CityLevel;
    $civ.CityLevel.values = values_0;
    $civ.CityLevel.valueOf = valueOf_0;
    defineProp($civ.CityLevel, 'VILLAGE', CityLevel_VILLAGE_getInstance);
    defineProp($civ.CityLevel, 'TOWN', CityLevel_TOWN_getInstance);
    defineProp($civ.CityLevel, 'CITY', CityLevel_CITY_getInstance);
    $civ.City = City;
    var $civ = _.civ || (_.civ = {});
    $civ.UnitType = UnitType;
    $civ.UnitType.values = values_1;
    $civ.UnitType.valueOf = valueOf_1;
    defineProp($civ.UnitType, 'SETTLERS', UnitType_SETTLERS_getInstance);
    defineProp($civ.UnitType, 'SCOUT', UnitType_SCOUT_getInstance);
    defineProp($civ.UnitType, 'Companion', Companion_getInstance_1);
    $civ.CivUnit = CivUnit;
    var $civ = _.civ || (_.civ = {});
    $civ.GameApi = GameApi;
    defineProp($civ.GameApi, 'Companion', Companion_getInstance_2);
    var $civ = _.civ || (_.civ = {});
    $civ.GameState = GameState;
    var $civ = _.civ || (_.civ = {});
    $civ.Player = Player;
    $civ.PlayerColor = PlayerColor;
    $civ.PlayerColor.values = values_2;
    $civ.PlayerColor.valueOf = valueOf_2;
    defineProp($civ.PlayerColor, 'BLUE', PlayerColor_BLUE_getInstance);
    defineProp($civ.PlayerColor, 'RED', PlayerColor_RED_getInstance);
    defineProp($civ.PlayerColor, 'GREEN', PlayerColor_GREEN_getInstance);
    var $civ = _.civ || (_.civ = {});
    $civ.Stockpiles = Stockpiles;
    var $hexcore = _.hexcore || (_.hexcore = {});
    $hexcore.Coordinates = Coordinates;
    defineProp($hexcore.Coordinates, 'Companion', Companion_getInstance_3);
    var $hexcore = _.hexcore || (_.hexcore = {});
    $hexcore.Tile = Tile;
    $hexcore.Water = Water;
    $hexcore.Grass = Grass;
    $hexcore.Mountains = Mountains;
    $hexcore.PlayerTileData = PlayerTileData;
  }
  $jsExportAll$(_);
  kotlin_kotlin.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=hexcore-js.js.map
