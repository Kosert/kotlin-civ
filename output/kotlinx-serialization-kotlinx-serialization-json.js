(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var protoOf = kotlin_kotlin.$_$.f9;
  var initMetadataForObject = kotlin_kotlin.$_$.n8;
  var VOID = kotlin_kotlin.$_$.e;
  var Unit_instance = kotlin_kotlin.$_$.u3;
  var initMetadataForClass = kotlin_kotlin.$_$.i8;
  var toString = kotlin_kotlin.$_$.jc;
  var Enum = kotlin_kotlin.$_$.gb;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var initMetadataForInterface = kotlin_kotlin.$_$.l8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.w;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.i1;
  var equals = kotlin_kotlin.$_$.d8;
  var hashCode = kotlin_kotlin.$_$.h8;
  var joinToString = kotlin_kotlin.$_$.r5;
  var THROW_CCE = kotlin_kotlin.$_$.lb;
  var KtMap = kotlin_kotlin.$_$.d4;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var toString_0 = kotlin_kotlin.$_$.i9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var getBooleanHashCode = kotlin_kotlin.$_$.e8;
  var getStringHashCode = kotlin_kotlin.$_$.g8;
  var KtList = kotlin_kotlin.$_$.b4;
  var toDouble = kotlin_kotlin.$_$.na;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.g3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gc;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var toLongOrNull = kotlin_kotlin.$_$.qa;
  var toULongOrNull = kotlin_kotlin.$_$.ua;
  var ULong = kotlin_kotlin.$_$.tb;
  var Companion_getInstance = kotlin_kotlin.$_$.s3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j2;
  var toDoubleOrNull = kotlin_kotlin.$_$.ma;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.la;
  var isInterface = kotlin_kotlin.$_$.v8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var KProperty1 = kotlin_kotlin.$_$.u9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.f8;
  var lazy = kotlin_kotlin.$_$.fc;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var toLong = kotlin_kotlin.$_$.h9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z1;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.b2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i2;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.k2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.q1;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.s1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.r2;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.t2;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var captureStack = kotlin_kotlin.$_$.v7;
  var charSequenceLength = kotlin_kotlin.$_$.z7;
  var charSequenceSubSequence = kotlin_kotlin.$_$.a8;
  var coerceAtLeast = kotlin_kotlin.$_$.n9;
  var coerceAtMost = kotlin_kotlin.$_$.o9;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var Collection = kotlin_kotlin.$_$.w3;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var singleOrNull = kotlin_kotlin.$_$.w6;
  var emptyMap = kotlin_kotlin.$_$.i5;
  var getValue = kotlin_kotlin.$_$.n5;
  var copyOf = kotlin_kotlin.$_$.b5;
  var arrayCopy = kotlin_kotlin.$_$.j4;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.eb;
  var invoke = kotlin_kotlin.$_$.bc;
  var CoroutineImpl = kotlin_kotlin.$_$.p7;
  var DeepRecursiveScope = kotlin_kotlin.$_$.fb;
  var Unit = kotlin_kotlin.$_$.wb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o7;
  var initMetadataForLambda = kotlin_kotlin.$_$.m8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.k8;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var getKClass = kotlin_kotlin.$_$.d;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var ensureNotNull = kotlin_kotlin.$_$.ac;
  var substringBefore = kotlin_kotlin.$_$.ja;
  var removeSuffix = kotlin_kotlin.$_$.fa;
  var substringAfter = kotlin_kotlin.$_$.ia;
  var contains = kotlin_kotlin.$_$.z9;
  var plus = kotlin_kotlin.$_$.hc;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var IllegalArgumentException = kotlin_kotlin.$_$.hb;
  var isFinite = kotlin_kotlin.$_$.dc;
  var isFinite_0 = kotlin_kotlin.$_$.cc;
  var charCodeAt = kotlin_kotlin.$_$.x7;
  var toUInt = kotlin_kotlin.$_$.ta;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a2;
  var toULong = kotlin_kotlin.$_$.va;
  var toUByte = kotlin_kotlin.$_$.sa;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.r1;
  var toUShort = kotlin_kotlin.$_$.wa;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.s2;
  var objectCreate = kotlin_kotlin.$_$.e9;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var toString_1 = kotlin_kotlin.$_$.l1;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.r3;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.q3;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.t3;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var setOf = kotlin_kotlin.$_$.u6;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k1;
  var numberToChar = kotlin_kotlin.$_$.b9;
  var equals_0 = kotlin_kotlin.$_$.aa;
  var toByte = kotlin_kotlin.$_$.g9;
  var startsWith = kotlin_kotlin.$_$.ha;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var numberRangeToNumber = kotlin_kotlin.$_$.a9;
  var ClosedRange = kotlin_kotlin.$_$.m9;
  var contains_0 = kotlin_kotlin.$_$.q9;
  var single = kotlin_kotlin.$_$.ga;
  var Char = kotlin_kotlin.$_$.cb;
  var emptySet = kotlin_kotlin.$_$.j5;
  var plus_0 = kotlin_kotlin.$_$.i6;
  var toInt = kotlin_kotlin.$_$.pa;
  var toList = kotlin_kotlin.$_$.d7;
  var enumEntries = kotlin_kotlin.$_$.q7;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var charSequenceGet = kotlin_kotlin.$_$.y7;
  var last = kotlin_kotlin.$_$.v5;
  var removeLast = kotlin_kotlin.$_$.r6;
  var lastIndexOf = kotlin_kotlin.$_$.ea;
  var Long = kotlin_kotlin.$_$.ib;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.j1;
  var numberToLong = kotlin_kotlin.$_$.d9;
  var charArray = kotlin_kotlin.$_$.w7;
  var indexOf = kotlin_kotlin.$_$.ba;
  var indexOf_0 = kotlin_kotlin.$_$.ca;
  var substring = kotlin_kotlin.$_$.ka;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json');
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [JsonElement, KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [JsonElement, KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
  initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForClass(Composer, 'Composer');
  initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', VOID, Composer);
  initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', VOID, Composer);
  initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
  initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.h14_1 = configuration;
    this.i14_1 = serializersModule;
    this.j14_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).bo = function () {
    return this.i14_1;
  };
  protoOf(Json).k14 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.n14();
    }
  };
  protoOf(Json).l14 = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.fk(), null);
    var result = input.ln(deserializer);
    lexer.a15();
    return result;
  };
  function JsonClassDiscriminator() {
  }
  function JsonIgnoreUnknownKeys() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    this.b15_1 = encodeDefaults;
    this.c15_1 = ignoreUnknownKeys;
    this.d15_1 = isLenient;
    this.e15_1 = allowStructuredMapKeys;
    this.f15_1 = prettyPrint;
    this.g15_1 = explicitNulls;
    this.h15_1 = prettyPrintIndent;
    this.i15_1 = coerceInputValues;
    this.j15_1 = useArrayPolymorphism;
    this.k15_1 = classDiscriminator;
    this.l15_1 = allowSpecialFloatingPointValues;
    this.m15_1 = useAlternativeNames;
    this.n15_1 = namingStrategy;
    this.o15_1 = decodeEnumsCaseInsensitive;
    this.p15_1 = allowTrailingComma;
    this.q15_1 = allowComments;
    this.r15_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.b15_1 + ', ignoreUnknownKeys=' + this.c15_1 + ', isLenient=' + this.d15_1 + ', ' + ('allowStructuredMapKeys=' + this.e15_1 + ', prettyPrint=' + this.f15_1 + ', explicitNulls=' + this.g15_1 + ', ') + ("prettyPrintIndent='" + this.h15_1 + "', coerceInputValues=" + this.i15_1 + ', useArrayPolymorphism=' + this.j15_1 + ', ') + ("classDiscriminator='" + this.k15_1 + "', allowSpecialFloatingPointValues=" + this.l15_1 + ', ') + ('useAlternativeNames=' + this.m15_1 + ', namingStrategy=' + toString(this.n15_1) + ', decodeEnumsCaseInsensitive=' + this.o15_1 + ', ') + ('allowTrailingComma=' + this.p15_1 + ', allowComments=' + this.q15_1 + ', classDiscriminatorMode=' + this.r15_1.toString() + ')');
  };
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  var ClassDiscriminatorMode_entriesInitialized;
  function ClassDiscriminatorMode_initEntries() {
    if (ClassDiscriminatorMode_entriesInitialized)
      return Unit_instance;
    ClassDiscriminatorMode_entriesInitialized = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function JsonDecoder() {
  }
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_3() {
    return Companion_instance;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.e2();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.f2();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.s8(_Char___init__impl__6a9atx(58));
    this_0.q8(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.u15_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.u15_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.u15_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.u15_1.u();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).p = function () {
    return this.u15_1.p();
  };
  protoOf(JsonObject).v15 = function (key) {
    return this.u15_1.g2(key);
  };
  protoOf(JsonObject).g2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.v15((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).w15 = function (value) {
    return this.u15_1.h2(value);
  };
  protoOf(JsonObject).h2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.w15(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).x15 = function (key) {
    return this.u15_1.i2(key);
  };
  protoOf(JsonObject).i2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.x15((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.u15_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).m = function () {
    return this.u15_1.m();
  };
  protoOf(JsonObject).j2 = function () {
    return this.u15_1.j2();
  };
  protoOf(JsonObject).k2 = function () {
    return this.u15_1.k2();
  };
  protoOf(JsonObject).u = function () {
    return this.u15_1.u();
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.y15_1 = 'null';
  }
  protoOf(JsonNull).z15 = function () {
    return this.y15_1;
  };
  protoOf(JsonNull).a16 = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).ew = function (typeParamsSerializers) {
    return this.a16();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.z15();
  };
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.b16_1 = isString;
    this.c16_1 = coerceToInlineType;
    this.d16_1 = toString_0(body);
    if (!(this.c16_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.c16_1.rl()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
    }
  }
  protoOf(JsonLiteral).z15 = function () {
    return this.d16_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.b16_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.d16_1);
      tmp = this_0.toString();
    } else {
      tmp = this.d16_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.b16_1 === other.b16_1))
      return false;
    if (!(this.d16_1 === other.d16_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.b16_1);
    result = imul(31, result) + getStringHashCode(this.d16_1) | 0;
    return result;
  };
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.e16_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.e16_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.e16_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.e16_1, ',', '[', ']');
  };
  protoOf(JsonArray).p = function () {
    return this.e16_1.p();
  };
  protoOf(JsonArray).f16 = function (element) {
    return this.e16_1.r(element);
  };
  protoOf(JsonArray).r = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.f16(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).j = function () {
    return this.e16_1.j();
  };
  protoOf(JsonArray).g16 = function (elements) {
    return this.e16_1.v1(elements);
  };
  protoOf(JsonArray).v1 = function (elements) {
    return this.g16(elements);
  };
  protoOf(JsonArray).o = function (index) {
    return this.e16_1.o(index);
  };
  protoOf(JsonArray).h16 = function (element) {
    return this.e16_1.w1(element);
  };
  protoOf(JsonArray).w1 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.h16(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).i16 = function (element) {
    return this.e16_1.x1(element);
  };
  protoOf(JsonArray).x1 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.i16(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).y1 = function () {
    return this.e16_1.y1();
  };
  protoOf(JsonArray).z1 = function (index) {
    return this.e16_1.z1(index);
  };
  protoOf(JsonArray).a2 = function (fromIndex, toIndex) {
    return this.e16_1.a2(fromIndex, toIndex);
  };
  protoOf(JsonArray).asJsReadonlyArrayView = function () {
    return this.e16_1.asJsReadonlyArrayView();
  };
  protoOf(JsonArray).m = function () {
    return this.e16_1.m();
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.z15());
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return (new StringJsonLexer(_this__u8e3s4.z15())).j16();
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.z15();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.z15());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.z15();
    }
    return tmp;
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString_0(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.qk('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.qk('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.qk('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.qk('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.qk('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().k16_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().l16_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().m16_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().n16_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().o16_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.p16_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).fk = function () {
    return this.p16_1;
  };
  protoOf(JsonElementSerializer).q16 = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.ep(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.ep(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.ep(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).gk = function (encoder, value) {
    return this.q16(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).hk = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.t15();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.r16_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).fk();
    this.s16_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).fl = function () {
    return this.s16_1;
  };
  protoOf(JsonObjectDescriptor).ul = function (index) {
    return this.r16_1.ul(index);
  };
  protoOf(JsonObjectDescriptor).vl = function (name) {
    return this.r16_1.vl(name);
  };
  protoOf(JsonObjectDescriptor).wl = function (index) {
    return this.r16_1.wl(index);
  };
  protoOf(JsonObjectDescriptor).xl = function (index) {
    return this.r16_1.xl(index);
  };
  protoOf(JsonObjectDescriptor).yl = function (index) {
    return this.r16_1.yl(index);
  };
  protoOf(JsonObjectDescriptor).ql = function () {
    return this.r16_1.ql();
  };
  protoOf(JsonObjectDescriptor).ml = function () {
    return this.r16_1.ml();
  };
  protoOf(JsonObjectDescriptor).rl = function () {
    return this.r16_1.rl();
  };
  protoOf(JsonObjectDescriptor).sl = function () {
    return this.r16_1.sl();
  };
  protoOf(JsonObjectDescriptor).tl = function () {
    return this.r16_1.tl();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.n16_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).fk = function () {
    return this.n16_1;
  };
  protoOf(JsonObjectSerializer).t16 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).gk(encoder, value);
  };
  protoOf(JsonObjectSerializer).gk = function (encoder, value) {
    return this.t16(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).hk = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).hk(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.u16_1 = ListSerializer(JsonElementSerializer_getInstance()).fk();
    this.v16_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).fl = function () {
    return this.v16_1;
  };
  protoOf(JsonArrayDescriptor).ul = function (index) {
    return this.u16_1.ul(index);
  };
  protoOf(JsonArrayDescriptor).vl = function (name) {
    return this.u16_1.vl(name);
  };
  protoOf(JsonArrayDescriptor).wl = function (index) {
    return this.u16_1.wl(index);
  };
  protoOf(JsonArrayDescriptor).xl = function (index) {
    return this.u16_1.xl(index);
  };
  protoOf(JsonArrayDescriptor).yl = function (index) {
    return this.u16_1.yl(index);
  };
  protoOf(JsonArrayDescriptor).ql = function () {
    return this.u16_1.ql();
  };
  protoOf(JsonArrayDescriptor).ml = function () {
    return this.u16_1.ml();
  };
  protoOf(JsonArrayDescriptor).rl = function () {
    return this.u16_1.rl();
  };
  protoOf(JsonArrayDescriptor).sl = function () {
    return this.u16_1.sl();
  };
  protoOf(JsonArrayDescriptor).tl = function () {
    return this.u16_1.tl();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.o16_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).fk = function () {
    return this.o16_1;
  };
  protoOf(JsonArraySerializer).w16 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).gk(encoder, value);
  };
  protoOf(JsonArraySerializer).gk = function (encoder, value) {
    return this.w16(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).hk = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).hk(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.k16_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).fk = function () {
    return this.k16_1;
  };
  protoOf(JsonPrimitiveSerializer).x16 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.ep(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.ep(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).gk = function (encoder, value) {
    return this.x16(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).hk = function (decoder) {
    var result = asJsonDecoder(decoder).t15();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + toString_0(getKClassFromExpression(result)), toString_0(result));
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.l16_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).fk = function () {
    return this.l16_1;
  };
  protoOf(JsonNullSerializer).y16 = function (encoder, value) {
    verify(encoder);
    encoder.ho();
  };
  protoOf(JsonNullSerializer).gk = function (encoder, value) {
    return this.y16(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).hk = function (decoder) {
    verify_0(decoder);
    if (decoder.xm()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.ym();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.m16_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).fk = function () {
    return this.m16_1;
  };
  protoOf(JsonLiteralSerializer).z16 = function (encoder, value) {
    verify(encoder);
    if (value.b16_1) {
      return encoder.qo(value.d16_1);
    }
    if (!(value.c16_1 == null)) {
      return encoder.so(value.c16_1).qo(value.d16_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.d16_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.mo(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.d16_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).nj_1;
      var tmp_1 = encoder.so(serializer_0(Companion_getInstance()).fk());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.mo(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.d16_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.oo(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.d16_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.io(tmp3_safe_receiver);
    }
    encoder.qo(value.d16_1);
  };
  protoOf(JsonLiteralSerializer).gk = function (encoder, value) {
    return this.z16(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).hk = function (decoder) {
    var result = asJsonDecoder(decoder).t15();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + toString_0(getKClassFromExpression(result)), toString_0(result));
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString_0(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString_0(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp0 = $this.a17_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
    return tmp0.f2();
  }
  function defer$o$_get_original_$ref_3cje7k() {
    return function (p0) {
      return _get_original__l7ku1m(p0);
    };
  }
  function defer$1($deferred) {
    this.a17_1 = lazy($deferred);
  }
  protoOf(defer$1).fl = function () {
    return _get_original__l7ku1m(this).fl();
  };
  protoOf(defer$1).ql = function () {
    return _get_original__l7ku1m(this).ql();
  };
  protoOf(defer$1).sl = function () {
    return _get_original__l7ku1m(this).sl();
  };
  protoOf(defer$1).ul = function (index) {
    return _get_original__l7ku1m(this).ul(index);
  };
  protoOf(defer$1).vl = function (name) {
    return _get_original__l7ku1m(this).vl(name);
  };
  protoOf(defer$1).wl = function (index) {
    return _get_original__l7ku1m(this).wl(index);
  };
  protoOf(defer$1).xl = function (index) {
    return _get_original__l7ku1m(this).xl(index);
  };
  protoOf(defer$1).yl = function (index) {
    return _get_original__l7ku1m(this).yl(index);
  };
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.b17_1 = writer;
    this.c17_1 = true;
  }
  protoOf(Composer).d17 = function () {
    this.c17_1 = true;
  };
  protoOf(Composer).e17 = function () {
    return Unit_instance;
  };
  protoOf(Composer).f17 = function () {
    this.c17_1 = false;
  };
  protoOf(Composer).g17 = function () {
    this.c17_1 = false;
  };
  protoOf(Composer).h17 = function () {
    return Unit_instance;
  };
  protoOf(Composer).i17 = function (v) {
    return this.b17_1.j17(v);
  };
  protoOf(Composer).k17 = function (v) {
    return this.b17_1.l17(v);
  };
  protoOf(Composer).m17 = function (v) {
    return this.b17_1.l17(v.toString());
  };
  protoOf(Composer).n17 = function (v) {
    return this.b17_1.l17(v.toString());
  };
  protoOf(Composer).o17 = function (v) {
    return this.b17_1.p17(toLong(v));
  };
  protoOf(Composer).q17 = function (v) {
    return this.b17_1.p17(toLong(v));
  };
  protoOf(Composer).r17 = function (v) {
    return this.b17_1.p17(toLong(v));
  };
  protoOf(Composer).s17 = function (v) {
    return this.b17_1.p17(v);
  };
  protoOf(Composer).t17 = function (v) {
    return this.b17_1.l17(v.toString());
  };
  protoOf(Composer).u17 = function (value) {
    return this.b17_1.v17(value);
  };
  function Composer_0(sb, json) {
    return json.h14_1.f15_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.y17_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).r17 = function (v) {
    if (this.y17_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.u17(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.k17(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).s17 = function (v) {
    if (this.y17_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.u17(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.k17(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).o17 = function (v) {
    if (this.y17_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.u17(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.k17(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).q17 = function (v) {
    if (this.y17_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.u17(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.k17(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.b18_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).u17 = function (value) {
    if (this.b18_1) {
      protoOf(Composer).u17.call(this, value);
    } else {
      protoOf(Composer).k17.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.e18_1 = json;
    this.f18_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).d17 = function () {
    this.c17_1 = true;
    this.f18_1 = this.f18_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).e17 = function () {
    this.f18_1 = this.f18_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).f17 = function () {
    this.c17_1 = false;
    this.k17('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.f18_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.k17(this.e18_1.h14_1.h15_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).g17 = function () {
    if (this.c17_1)
      this.c17_1 = false;
    else {
      this.f17();
    }
  };
  protoOf(ComposerWithPrettyPrint).h17 = function () {
    this.i17(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.h18_1 = (!descriptor.yl(index) && descriptor.xl(index).ml());
    return $this.h18_1;
  }
  function JsonElementMarker$readIfAbsent$ref(p0) {
    var l = function (_this__u8e3s4, p0_0) {
      var tmp0 = p0;
      return readIfAbsent(tmp0, _this__u8e3s4, p0_0);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.g18_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.h18_1 = false;
  }
  protoOf(JsonElementMarker).i18 = function (index) {
    this.g18_1.ut(index);
  };
  protoOf(JsonElementMarker).j18 = function () {
    return this.g18_1.vt();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.k18('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.w14_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.l18('Unexpected special floating-point value ' + toString_0(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.fl() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.ql().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString_0(minify(input, offset)));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString_0(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp2 = coerceAtLeast(start_0, 0);
    // Inline function 'kotlin.text.substring' call
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString_0(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString_0(value) + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString_0(minify(output))));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString_0(value) + ' with key ' + key + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString_0(minify(output)));
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function ignoreUnknownKeys(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp;
    if (json.h14_1.c15_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.tl();
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
          if (element instanceof JsonIgnoreUnknownKeys) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.vl(name);
    if (!(index === -3))
      return index;
    if (!json.h14_1.m15_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.fl() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.ul(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.ql(), CLASS_getInstance()) ? json.h14_1.n15_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.n18(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.h14_1.o15_1 && equals(descriptor.ql(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).i2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.n18(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.sl();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.wl(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.j();
        while (_iterator__ex2g4s.k()) {
          var element = _iterator__ex2g4s.l();
          if (element instanceof JsonNames) {
            destination.e(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o18_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp1_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp1_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.ul(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.p18(_this__u8e3s4, i, _this__u8e3s4.ul(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.p()) {
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.ql(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).g2(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.ul(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.ul(getValue(_this__u8e3s4, name)) + ' in ' + toString_0($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.l2(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.sl();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.ul(tmp_2);
        tmp_1[tmp_2] = $strategy.p18($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.s18_1, 2);
    $this.q18_1 = copyOf($this.q18_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.r18_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.r18_1 = newIndices;
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.q18_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.r18_1 = tmp_2;
    this.s18_1 = -1;
  }
  protoOf(JsonPath).t18 = function (sd) {
    this.s18_1 = this.s18_1 + 1 | 0;
    var depth = this.s18_1;
    if (depth === this.q18_1.length) {
      resize(this);
    }
    this.q18_1[depth] = sd;
  };
  protoOf(JsonPath).u18 = function (index) {
    this.r18_1[this.s18_1] = index;
  };
  protoOf(JsonPath).v18 = function (key) {
    var tmp;
    if (!(this.r18_1[this.s18_1] === -2)) {
      this.s18_1 = this.s18_1 + 1 | 0;
      tmp = this.s18_1 === this.q18_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.q18_1[this.s18_1] = key;
    this.r18_1[this.s18_1] = -2;
  };
  protoOf(JsonPath).w18 = function () {
    if (this.r18_1[this.s18_1] === -2) {
      this.q18_1[this.s18_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).x18 = function () {
    var depth = this.s18_1;
    if (this.r18_1[depth] === -2) {
      this.r18_1[depth] = -1;
      this.s18_1 = this.s18_1 - 1 | 0;
    }
    if (!(this.s18_1 === -1)) {
      this.s18_1 = this.s18_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).y18 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.r8('$');
    // Inline function 'kotlin.repeat' call
    var times = this.s18_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.q18_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.ql(), LIST_getInstance())) {
            if (!(this.r18_1[index] === -1)) {
              this_0.r8('[');
              this_0.tb(this.r18_1[index]);
              this_0.r8(']');
            }
          } else {
            var idx = this.r18_1[index];
            if (idx >= 0) {
              this_0.r8('.');
              this_0.r8(element.ul(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.r8('[');
            this_0.r8("'");
            this_0.q8(element);
            this_0.r8("'");
            this_0.r8(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.y18();
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().m();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.ep(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.i19_1.m19(6);
    if ($this.i19_1.n19() === 4) {
      $this.i19_1.l18('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.i19_1.o19()) {
      var key = $this.j19_1 ? $this.i19_1.q19() : $this.i19_1.p19();
      $this.i19_1.m19(5);
      var element = $this.r19();
      // Inline function 'kotlin.collections.set' call
      result.l2(key, element);
      lastToken = $this.i19_1.s19();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.i19_1.l18('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.i19_1.m19(7);
    } else if (lastToken === 4) {
      if (!$this.k19_1) {
        invalidTrailingComma($this.i19_1);
      }
      $this.i19_1.m19(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, _this__u8e3s4, $completion) {
    var tmp = new $readObjectCOROUTINE$($this, _this__u8e3s4, $completion);
    tmp.i9_1 = Unit_instance;
    tmp.j9_1 = null;
    return tmp.o9();
  }
  function readArray($this) {
    var lastToken = $this.i19_1.s19();
    if ($this.i19_1.n19() === 4) {
      $this.i19_1.l18('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.i19_1.o19()) {
      var element = $this.r19();
      result.e(element);
      lastToken = $this.i19_1.s19();
      if (!(lastToken === 4)) {
        var tmp0 = $this.i19_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.w14_1;
        if (!condition) {
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.l18(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.i19_1.m19(9);
    } else if (lastToken === 4) {
      if (!$this.k19_1) {
        invalidTrailingComma($this.i19_1, 'array');
      }
      $this.i19_1.m19(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.j19_1 || !isString) {
      tmp = $this.i19_1.q19();
    } else {
      tmp = $this.i19_1.p19();
    }
    var string = tmp;
    if (!isString && string === 'null')
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.q1a_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).v1a = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.w1a($this$DeepRecursiveFunction, it, $completion);
    tmp.i9_1 = Unit_instance;
    tmp.j9_1 = null;
    return tmp.o9();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).u9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.v1a(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).o9 = function () {
    var suspendResult = this.i9_1;
    $sm: do
      try {
        var tmp = this.g9_1;
        switch (tmp) {
          case 0:
            this.h9_1 = 3;
            this.t1a_1 = this.q1a_1.i19_1.n19();
            if (this.t1a_1 === 1) {
              this.u1a_1 = readValue(this.q1a_1, true);
              this.g9_1 = 2;
              continue $sm;
            } else {
              if (this.t1a_1 === 0) {
                this.u1a_1 = readValue(this.q1a_1, false);
                this.g9_1 = 2;
                continue $sm;
              } else {
                if (this.t1a_1 === 6) {
                  this.g9_1 = 1;
                  suspendResult = readObject_0(this.q1a_1, this.r1a_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.t1a_1 === 8) {
                    this.u1a_1 = readArray(this.q1a_1);
                    this.g9_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.q1a_1.i19_1.l18("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.u1a_1 = suspendResult;
            this.g9_1 = 2;
            continue $sm;
          case 2:
            return this.u1a_1;
          case 3:
            throw this.j9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.h9_1 === 3) {
          throw e;
        } else {
          this.g9_1 = this.h9_1;
          this.j9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).w1a = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.q1a_1, completion);
    i.r1a_1 = $this$DeepRecursiveFunction;
    i.s1a_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.v1a($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1a_1 = _this__u8e3s4;
    this.c1a_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).o9 = function () {
    var suspendResult = this.i9_1;
    $sm: do
      try {
        var tmp = this.g9_1;
        switch (tmp) {
          case 0:
            this.h9_1 = 5;
            var tmp_0 = this;
            tmp_0.d1a_1 = this.b1a_1;
            this.e1a_1 = this.d1a_1;
            this.f1a_1 = this.e1a_1.i19_1.m19(6);
            if (this.e1a_1.i19_1.n19() === 4) {
              this.e1a_1.i19_1.l18('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.g1a_1 = LinkedHashMap_init_$Create$();
            this.g9_1 = 1;
            continue $sm;
          case 1:
            if (!this.e1a_1.i19_1.o19()) {
              this.g9_1 = 4;
              continue $sm;
            }

            this.h1a_1 = this.e1a_1.j19_1 ? this.e1a_1.i19_1.q19() : this.e1a_1.i19_1.p19();
            this.e1a_1.i19_1.m19(5);
            this.g9_1 = 2;
            suspendResult = this.c1a_1.ph(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.g1a_1;
            var key = this.h1a_1;
            tmp0.l2(key, element);
            this.f1a_1 = this.e1a_1.i19_1.s19();
            var tmp0_subject = this.f1a_1;
            if (tmp0_subject === 4) {
              this.g9_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.g9_1 = 4;
                continue $sm;
              } else {
                this.e1a_1.i19_1.l18('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.g9_1 = 1;
            continue $sm;
          case 4:
            if (this.f1a_1 === 6) {
              this.e1a_1.i19_1.m19(7);
            } else if (this.f1a_1 === 4) {
              if (!this.e1a_1.k19_1) {
                invalidTrailingComma(this.e1a_1.i19_1);
              }
              this.e1a_1.i19_1.m19(7);
            }

            return new JsonObject(this.g1a_1);
          case 5:
            throw this.j9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.h9_1 === 5) {
          throw e;
        } else {
          this.g9_1 = this.h9_1;
          this.j9_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.i19_1 = lexer;
    this.j19_1 = configuration.d15_1;
    this.k19_1 = configuration.p15_1;
    this.l19_1 = 0;
  }
  protoOf(JsonTreeReader).r19 = function () {
    var token = this.i19_1.n19();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.l19_1 = this.l19_1 + 1 | 0;
      if (this.l19_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.l19_1 = this.l19_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.i19_1.l18('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.tl().j();
    while (_iterator__ex2g4s.k()) {
      var annotation = _iterator__ex2g4s.l();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.x1a_1;
    }
    return json.h14_1.k15_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.fk()).r(classDiscriminator)) {
      var baseName = serializer.fk().fl();
      var actualName = actualSerializer.fk().fl();
      // Inline function 'kotlin.error' call
      var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString_0(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString_0(message_1));
    }
  }
  function access$validateIfSealed$tPolymorphicKt(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.m18_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).y1a = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.m18_1;
    var value_0 = this_0.i2(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.l2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.l2(tmp2, value_1);
  };
  protoOf(DescriptorSchemaCache).n18 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.z1a(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.y1a(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).z1a = function (descriptor, key) {
    var tmp0_safe_receiver = this.m18_1.i2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.i2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.a1b_1 = discriminatorToSkip;
  }
  function trySkip($this, _this__u8e3s4, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.a1b_1 === unknownKey) {
      _this__u8e3s4.a1b_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.do(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.q14_1.n19() === 4) {
      $this.q14_1.l18('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.s14_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.s14_1 === -1)) {
        hasComma = $this.q14_1.c1b();
      }
    } else {
      $this.q14_1.b1b(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.q14_1.o19()) {
      if (decodingKey) {
        if ($this.s14_1 === -1) {
          var tmp0 = $this.q14_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.w14_1;
          if (!condition) {
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.l18(tmp$ret$0, position);
          }
        } else {
          var tmp0_0 = $this.q14_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.w14_1;
          if (!condition_0) {
            var tmp$ret$2 = 'Expected comma after the key-value pair';
            tmp0_0.l18(tmp$ret$2, position_0);
          }
        }
      }
      $this.s14_1 = $this.s14_1 + 1 | 0;
      tmp = $this.s14_1;
    } else {
      if (hasComma && !$this.o14_1.h14_1.p15_1) {
        invalidTrailingComma($this.q14_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.o14_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.yl(index);
      var elementDescriptor = descriptor.xl(index);
      var tmp;
      if (isOptional && !elementDescriptor.ml()) {
        tmp = $this.q14_1.d1b(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.ql(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.ml()) {
          tmp_0 = $this.q14_1.d1b(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.q14_1.e1b($this.u14_1.d15_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.h14_1.g15_1 && elementDescriptor.ml();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.q14_1.p19();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.q14_1.c1b();
    while ($this.q14_1.o19()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.q14_1.b1b(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.o14_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.u14_1.i15_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.q14_1.c1b();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.v14_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.i18(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, descriptor, key);
      }
    }
    if (hasComma && !$this.o14_1.h14_1.p15_1) {
      invalidTrailingComma($this.q14_1);
    }
    var tmp1_safe_receiver = $this.v14_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j18();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.o14_1) || trySkip($this, $this.t14_1, key)) {
      $this.q14_1.g1b($this.u14_1.d15_1);
    } else {
      $this.q14_1.x14_1.x18();
      $this.q14_1.f1b(key);
    }
    return $this.q14_1.c1b();
  }
  function decodeListIndex($this) {
    var hasComma = $this.q14_1.c1b();
    var tmp;
    if ($this.q14_1.o19()) {
      if (!($this.s14_1 === -1) && !hasComma) {
        $this.q14_1.l18('Expected end of the array or comma');
      }
      $this.s14_1 = $this.s14_1 + 1 | 0;
      tmp = $this.s14_1;
    } else {
      if (hasComma && !$this.o14_1.h14_1.p15_1) {
        invalidTrailingComma($this.q14_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.u14_1.d15_1) {
      tmp = $this.q14_1.i1b();
    } else {
      tmp = $this.q14_1.h1b();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.o14_1 = json;
    this.p14_1 = mode;
    this.q14_1 = lexer;
    this.r14_1 = this.o14_1.bo();
    this.s14_1 = -1;
    this.t14_1 = discriminatorHolder;
    this.u14_1 = this.o14_1.h14_1;
    this.v14_1 = this.u14_1.g15_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).s15 = function () {
    return this.o14_1;
  };
  protoOf(StreamingJsonDecoder).bo = function () {
    return this.r14_1;
  };
  protoOf(StreamingJsonDecoder).t15 = function () {
    return (new JsonTreeReader(this.o14_1.h14_1, this.q14_1)).r19();
  };
  protoOf(StreamingJsonDecoder).ln = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.o14_1.h14_1.j15_1;
      }
      if (tmp) {
        return deserializer.hk(this);
      }
      var discriminator = classDiscriminator(deserializer.fk(), this.o14_1);
      var tmp0_elvis_lhs = this.q14_1.j1b(discriminator, this.u14_1.d15_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.s15().h14_1.j15_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.hk(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.fk(), this.s15());
          var tmp0 = this.t15();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.fk().fl();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).ha();
            var tmp_3 = getKClassFromExpression(tmp0).ha();
            var tmp$ret$1 = this.q14_1.x14_1.y18();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString_0(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.x15(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4;
          try {
            tmp_4 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_5;
            if ($p instanceof SerializationException) {
              var it = $p;
              throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_4;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.s15(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p) {
        var tmp_8;
        if ($p instanceof SerializationException) {
          var it_0 = $p;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.q14_1.l18(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.t14_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.hk(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.gl_1, plus(e.message, ' at path: ') + this.q14_1.x14_1.y18(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).mn = function (descriptor) {
    var newMode = switchMode(this.o14_1, descriptor);
    this.q14_1.x14_1.t18(descriptor);
    this.q14_1.b1b(newMode.m1b_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.o2_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.o14_1, newMode, this.q14_1, descriptor, this.t14_1);
        break;
      default:
        var tmp_0;
        if (this.p14_1.equals(newMode) && this.o14_1.h14_1.g15_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.o14_1, newMode, this.q14_1, descriptor, this.t14_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).nn = function (descriptor) {
    if (descriptor.sl() === 0 && ignoreUnknownKeys(descriptor, this.o14_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.q14_1.c1b() && !this.o14_1.h14_1.p15_1) {
      invalidTrailingComma(this.q14_1, '');
    }
    this.q14_1.b1b(this.p14_1.n1b_1);
    this.q14_1.x14_1.x18();
  };
  protoOf(StreamingJsonDecoder).xm = function () {
    var tmp;
    var tmp0_safe_receiver = this.v14_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h18_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.q14_1.o1b();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).ym = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).yn = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.p14_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.q14_1.x14_1.w18();
    }
    var value = protoOf(AbstractDecoder).yn.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.q14_1.x14_1.v18(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).do = function (descriptor) {
    var index;
    switch (this.p14_1.o2_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.p14_1.equals(WriteMode_MAP_getInstance())) {
      this.q14_1.x14_1.u18(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).zm = function () {
    return this.q14_1.p1b();
  };
  protoOf(StreamingJsonDecoder).an = function () {
    var value = this.q14_1.q1b();
    if (!value.equals(toLong(value.k3()))) {
      this.q14_1.l18("Failed to parse byte for input '" + value.toString() + "'");
    }
    return value.k3();
  };
  protoOf(StreamingJsonDecoder).bn = function () {
    var value = this.q14_1.q1b();
    if (!value.equals(toLong(value.l3()))) {
      this.q14_1.l18("Failed to parse short for input '" + value.toString() + "'");
    }
    return value.l3();
  };
  protoOf(StreamingJsonDecoder).cn = function () {
    var value = this.q14_1.q1b();
    if (!value.equals(toLong(value.e1()))) {
      this.q14_1.l18("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.e1();
  };
  protoOf(StreamingJsonDecoder).dn = function () {
    return this.q14_1.q1b();
  };
  protoOf(StreamingJsonDecoder).en = function () {
    var tmp0 = this.q14_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.q19();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.l18("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.o14_1.h14_1.l15_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.q14_1, result);
  };
  protoOf(StreamingJsonDecoder).fn = function () {
    var tmp0 = this.q14_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.q19();
      try {
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.l18("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.o14_1.h14_1.l15_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.q14_1, result);
  };
  protoOf(StreamingJsonDecoder).gn = function () {
    var string = this.q14_1.q19();
    if (!(string.length === 1)) {
      this.q14_1.l18("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  };
  protoOf(StreamingJsonDecoder).hn = function () {
    var tmp;
    if (this.u14_1.d15_1) {
      tmp = this.q14_1.i1b();
    } else {
      tmp = this.q14_1.p19();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).jn = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.q14_1, this.o14_1) : protoOf(AbstractDecoder).jn.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).in = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.o14_1, this.hn(), ' at path ' + this.q14_1.x14_1.y18());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.r1b_1 = lexer;
    this.s1b_1 = json.bo();
  }
  protoOf(JsonDecoderForUnsignedTypes).bo = function () {
    return this.s1b_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).do = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString_0(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).cn = function () {
    var tmp0 = this.r1b_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.q19();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.l18("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).dn = function () {
    var tmp0 = this.r1b_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.q19();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.l18("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).an = function () {
    var tmp0 = this.r1b_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.q19();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.l18("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).bn = function () {
    var tmp0 = this.r1b_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.q19();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.l18("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, discriminator, serialName) {
    $this.z18_1.f17();
    $this.qo(discriminator);
    $this.z18_1.i17(_Char___init__impl__6a9atx(58));
    $this.z18_1.h17();
    $this.qo(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.z18_1 = composer;
    this.a19_1 = json;
    this.b19_1 = mode;
    this.c19_1 = modeReuseCache;
    this.d19_1 = this.a19_1.bo();
    this.e19_1 = this.a19_1.h14_1;
    this.f19_1 = false;
    this.g19_1 = null;
    this.h19_1 = null;
    var i = this.b19_1.o2_1;
    if (!(this.c19_1 == null)) {
      if (!(this.c19_1[i] === null) || !(this.c19_1[i] === this)) {
        this.c19_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).s15 = function () {
    return this.a19_1;
  };
  protoOf(StreamingJsonEncoder).bo = function () {
    return this.d19_1;
  };
  protoOf(StreamingJsonEncoder).jp = function (descriptor, index) {
    return this.e19_1.b15_1;
  };
  protoOf(StreamingJsonEncoder).ep = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.s15().h14_1.j15_1) {
        serializer.gk(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.s15().h14_1.r15_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.s15().h14_1.r15_1.o2_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.fk().ql();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.fk(), this.s15()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString_0(serializer.fk()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
          checkKind(actual.fk().ql());
        }
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        var serialName = actualSerializer.fk().fl();
        this.g19_1 = baseClassDiscriminator;
        this.h19_1 = serialName;
      }
      actualSerializer.gk(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).mn = function (descriptor) {
    var newMode = switchMode(this.a19_1, descriptor);
    if (!(newMode.m1b_1 === _Char___init__impl__6a9atx(0))) {
      this.z18_1.i17(newMode.m1b_1);
      this.z18_1.d17();
    }
    var discriminator = this.g19_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.h19_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.fl() : tmp0_elvis_lhs);
      this.g19_1 = null;
      this.h19_1 = null;
    }
    if (this.b19_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.c19_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.o2_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.z18_1, this.a19_1, newMode, this.c19_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).nn = function (descriptor) {
    if (!(this.b19_1.n1b_1 === _Char___init__impl__6a9atx(0))) {
      this.z18_1.e17();
      this.z18_1.g17();
      this.z18_1.i17(this.b19_1.n1b_1);
    }
  };
  protoOf(StreamingJsonEncoder).fo = function (descriptor, index) {
    switch (this.b19_1.o2_1) {
      case 1:
        if (!this.z18_1.c17_1) {
          this.z18_1.i17(_Char___init__impl__6a9atx(44));
        }

        this.z18_1.f17();
        break;
      case 2:
        if (!this.z18_1.c17_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.z18_1.i17(_Char___init__impl__6a9atx(44));
            this.z18_1.f17();
            tmp_0 = true;
          } else {
            this.z18_1.i17(_Char___init__impl__6a9atx(58));
            this.z18_1.h17();
            tmp_0 = false;
          }
          tmp.f19_1 = tmp_0;
        } else {
          this.f19_1 = true;
          this.z18_1.f17();
        }

        break;
      case 3:
        if (index === 0)
          this.f19_1 = true;
        if (index === 1) {
          this.z18_1.i17(_Char___init__impl__6a9atx(44));
          this.z18_1.h17();
          this.f19_1 = false;
        }

        break;
      default:
        if (!this.z18_1.c17_1) {
          this.z18_1.i17(_Char___init__impl__6a9atx(44));
        }

        this.z18_1.f17();
        this.qo(getJsonElementName(descriptor, this.a19_1, index));
        this.z18_1.i17(_Char___init__impl__6a9atx(58));
        this.z18_1.h17();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).fp = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.e19_1.g15_1) {
      protoOf(AbstractEncoder).fp.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).so = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.z18_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.z18_1;
      } else {
        var tmp0 = this.z18_1.b17_1;
        var p1 = this.f19_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.a19_1, this.b19_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.z18_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.z18_1;
      } else {
        var tmp0_0 = this.z18_1.b17_1;
        var p1_0 = this.f19_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.a19_1, this.b19_1, null);
    } else if (!(this.g19_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.h19_1 = descriptor.fl();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).so.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).ho = function () {
    this.z18_1.k17('null');
  };
  protoOf(StreamingJsonEncoder).io = function (value) {
    if (this.f19_1) {
      this.qo(value.toString());
    } else {
      this.z18_1.t17(value);
    }
  };
  protoOf(StreamingJsonEncoder).jo = function (value) {
    if (this.f19_1) {
      this.qo(value.toString());
    } else {
      this.z18_1.o17(value);
    }
  };
  protoOf(StreamingJsonEncoder).ko = function (value) {
    if (this.f19_1) {
      this.qo(value.toString());
    } else {
      this.z18_1.q17(value);
    }
  };
  protoOf(StreamingJsonEncoder).lo = function (value) {
    if (this.f19_1) {
      this.qo(value.toString());
    } else {
      this.z18_1.r17(value);
    }
  };
  protoOf(StreamingJsonEncoder).mo = function (value) {
    if (this.f19_1) {
      this.qo(value.toString());
    } else {
      this.z18_1.s17(value);
    }
  };
  protoOf(StreamingJsonEncoder).no = function (value) {
    if (this.f19_1) {
      this.qo(value.toString());
    } else {
      this.z18_1.m17(value);
    }
    if (!this.e19_1.l15_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString_0(this.z18_1.b17_1));
    }
  };
  protoOf(StreamingJsonEncoder).oo = function (value) {
    if (this.f19_1) {
      this.qo(value.toString());
    } else {
      this.z18_1.n17(value);
    }
    if (!this.e19_1.l15_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, toString_0(this.z18_1.b17_1));
    }
  };
  protoOf(StreamingJsonEncoder).po = function (value) {
    this.qo(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).qo = function (value) {
    return this.z18_1.u17(value);
  };
  protoOf(StreamingJsonEncoder).ro = function (enumDescriptor, index) {
    this.qo(enumDescriptor.ul(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.rl() && get_unsignedNumberDescriptors().r(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.rl() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).fk(), serializer_0(Companion_getInstance()).fk(), serializer_2(Companion_getInstance_1()).fk(), serializer_3(Companion_getInstance_2()).fk()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.s8(_Char___init__impl__6a9atx(34));
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charCodeAt(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.qb(value, lastPos, i);
          _this__u8e3s4.r8(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.qb(value, lastPos, value.length);
    else
      _this__u8e3s4.r8(value);
    _this__u8e3s4.s8(_Char___init__impl__6a9atx(34));
  }
  function toBooleanStrictOrNull_0(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.apply' call
      var this_0 = Array(93);
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      var tmp = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(34);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$1);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$12 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$12);
      ESCAPE_MARKERS = this_7;
    }
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.z1b(tag), toString_0($this.a1c()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.v1b_1 = json;
    this.w1b_1 = value;
    this.x1b_1 = polymorphicDiscriminator;
    this.y1b_1 = this.s15().h14_1;
  }
  protoOf(AbstractJsonTreeDecoder).s15 = function () {
    return this.v1b_1;
  };
  protoOf(AbstractJsonTreeDecoder).f2 = function () {
    return this.w1b_1;
  };
  protoOf(AbstractJsonTreeDecoder).bo = function () {
    return this.s15().bo();
  };
  protoOf(AbstractJsonTreeDecoder).a1c = function () {
    var tmp0_safe_receiver = this.w11();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.b1c(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.f2() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).z1b = function (currentTag) {
    return this.y11() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).t15 = function () {
    return this.a1c();
  };
  protoOf(AbstractJsonTreeDecoder).ln = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.s15().h14_1.j15_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.hk(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.fk(), this.s15());
      var tmp0 = this.t15();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.fk().fl();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).ha();
        var tmp_1 = getKClassFromExpression(tmp0).ha();
        var tmp$ret$1 = this.y11();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString_0(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.x15(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_2;
      try {
        tmp_2 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof SerializationException) {
          var it = $p;
          throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_2;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.s15(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).x11 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).mn = function (descriptor) {
    var currentObject = this.a1c();
    var tmp0_subject = descriptor.ql();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.s15();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.fl();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).ha();
        var tmp_3 = getKClassFromExpression(currentObject).ha();
        var tmp$ret$0 = this.y11();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString_0(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.s15();
        var keyDescriptor = carrierDescriptor(descriptor.xl(0), this_0.bo());
        var keyKind = keyDescriptor.ql();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.s15();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.fl();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).ha();
            var tmp_8 = getKClassFromExpression(currentObject).ha();
            var tmp$ret$3 = this.y11();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString_0(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.h14_1.e15_1) {
            var tmp_9 = this.s15();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.fl();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).ha();
              var tmp_11 = getKClassFromExpression(currentObject).ha();
              var tmp$ret$7 = this.y11();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString_0(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.s15();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.fl();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).ha();
          var tmp_14 = getKClassFromExpression(currentObject).ha();
          var tmp$ret$12 = this.y11();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString_0(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.x1b_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).nn = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).xm = function () {
    var tmp = this.a1c();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).c1c = function (tag, enumDescriptor) {
    var tmp = this.s15();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.b1c(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.fl();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp_0 = getKClass(JsonPrimitive).ha();
      var tmp_1 = getKClassFromExpression(tmp2).ha();
      var tmp$ret$0 = this.z1b(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString_0(tmp2));
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.z15());
  };
  protoOf(AbstractJsonTreeDecoder).k12 = function (tag, enumDescriptor) {
    return this.c1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).d1c = function (tag) {
    return !(this.b1c(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).a12 = function (tag) {
    return this.d1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).e1c = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b1c(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ha();
        var tmp_0 = getKClassFromExpression(value).ha();
        var tmp$ret$0 = this.z1b(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$0, toString_0(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).b12 = function (tag) {
    return this.e1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).f1c = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b1c(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ha();
        var tmp_0 = getKClassFromExpression(value).ha();
        var tmp$ret$0 = this.z1b(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$0, toString_0(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.k3();
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$5;
  };
  protoOf(AbstractJsonTreeDecoder).c12 = function (tag) {
    return this.f1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g1c = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b1c(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ha();
        var tmp_0 = getKClassFromExpression(value).ha();
        var tmp$ret$0 = this.z1b(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$0, toString_0(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.l3();
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$5;
  };
  protoOf(AbstractJsonTreeDecoder).d12 = function (tag) {
    return this.g1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h1c = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b1c(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ha();
        var tmp_0 = getKClassFromExpression(value).ha();
        var tmp$ret$0 = this.z1b(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString_0(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.e1();
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$5;
  };
  protoOf(AbstractJsonTreeDecoder).e12 = function (tag) {
    return this.h1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i1c = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b1c(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ha();
        var tmp_0 = getKClassFromExpression(value).ha();
        var tmp$ret$0 = this.z1b(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$0, toString_0(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).f12 = function (tag) {
    return this.i1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j1c = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b1c(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ha();
        var tmp_0 = getKClassFromExpression(value).ha();
        var tmp$ret$0 = this.z1b(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'float' + ' at element: ' + tmp$ret$0, toString_0(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.s15().h14_1.l15_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString_0(this.a1c()));
  };
  protoOf(AbstractJsonTreeDecoder).g12 = function (tag) {
    return this.j1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).k1c = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b1c(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ha();
        var tmp_0 = getKClassFromExpression(value).ha();
        var tmp$ret$0 = this.z1b(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'double' + ' at element: ' + tmp$ret$0, toString_0(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.s15().h14_1.l15_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString_0(this.a1c()));
  };
  protoOf(AbstractJsonTreeDecoder).h12 = function (tag) {
    return this.k1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).l1c = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b1c(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ha();
        var tmp_0 = getKClassFromExpression(value).ha();
        var tmp$ret$0 = this.z1b(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString_0(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.z15()));
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1.j1_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).i12 = function (tag) {
    return this.l1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).m1c = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.b1c(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).ha();
      var tmp_0 = getKClassFromExpression(value).ha();
      var tmp$ret$0 = this.z1b(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString_0(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.z1b(tag), toString_0(this.a1c()));
    if (!value_0.b16_1 && !this.s15().h14_1.d15_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.z1b(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString_0(this.a1c()));
    }
    return value_0.d16_1;
  };
  protoOf(AbstractJsonTreeDecoder).j12 = function (tag) {
    return this.m1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).n1c = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.s15();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.b1c(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.fl();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).ha();
        var tmp_2 = getKClassFromExpression(tmp2).ha();
        var tmp$ret$0 = this.z1b(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString_0(tmp2));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.z15());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.s15());
    } else {
      tmp = protoOf(NamedValueDecoder).l12.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).l12 = function (tag, inlineDescriptor) {
    return this.n1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).jn = function (descriptor) {
    return !(this.w11() == null) ? protoOf(NamedValueDecoder).jn.call(this, descriptor) : (new JsonPrimitiveDecoder(this.s15(), this.f2(), this.x1b_1)).jn(descriptor);
  };
  function setForceNull($this, descriptor, index) {
    $this.x1c_1 = (!$this.s15().h14_1.g15_1 && !descriptor.yl(index) && descriptor.xl(index).ml());
    return $this.x1c_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.u1c_1 = value;
    this.v1c_1 = polyDescriptor;
    this.w1c_1 = 0;
    this.x1c_1 = false;
  }
  protoOf(JsonTreeDecoder).f2 = function () {
    return this.u1c_1;
  };
  protoOf(JsonTreeDecoder).do = function (descriptor) {
    $l$loop: while (this.w1c_1 < descriptor.sl()) {
      var _unary__edvuaz = this.w1c_1;
      this.w1c_1 = _unary__edvuaz + 1 | 0;
      var name = this.r11(descriptor, _unary__edvuaz);
      var index = this.w1c_1 - 1 | 0;
      this.x1c_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.f2();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).g2(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.y1b_1.i15_1)
          return index;
        var tmp0 = this.s15();
        var tmp$ret$3;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.yl(index);
          var elementDescriptor = descriptor.xl(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.ml()) {
            var tmp_1 = this.y1c(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$3 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.ql(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.ml()) {
              var tmp_3 = this.y1c(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$3 = false;
              break $l$block_2;
            }
            var tmp_4 = this.y1c(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$3 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.h14_1.g15_1 && elementDescriptor.ml();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$3 = true;
              break $l$block_2;
            }
          }
          tmp$ret$3 = false;
        }
        if (tmp$ret$3)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).xm = function () {
    return !this.x1c_1 && protoOf(AbstractJsonTreeDecoder).xm.call(this);
  };
  protoOf(JsonTreeDecoder).s11 = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.s15());
    var baseName = descriptor.ul(index);
    if (strategy == null) {
      if (!this.y1b_1.m15_1)
        return baseName;
      if (this.f2().j2().r(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.s15(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.f2().j2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        if (deserializationNamesMap_0.i2(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.p18(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).b1c = function (tag) {
    return getValue(this.f2(), tag);
  };
  protoOf(JsonTreeDecoder).y1c = function (tag) {
    return this.f2().x15(tag);
  };
  protoOf(JsonTreeDecoder).mn = function (descriptor) {
    if (descriptor === this.v1c_1) {
      var tmp = this.s15();
      var tmp2 = this.a1c();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.v1c_1.fl();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).ha();
        var tmp_1 = getKClassFromExpression(tmp2).ha();
        var tmp$ret$0 = this.y11();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString_0(tmp2));
      }
      return new JsonTreeDecoder(tmp, tmp2, this.x1b_1, this.v1c_1);
    }
    return protoOf(AbstractJsonTreeDecoder).mn.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).nn = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.s15())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.ql();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.s15());
    var tmp_1;
    if (strategy == null && !this.y1b_1.m15_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.s15(), descriptor).j2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.s15()).z1a(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.f2().j2().j();
    while (_iterator__ex2g4s.k()) {
      var key = _iterator__ex2g4s.l();
      if (!names.r(key) && !(key === this.x1b_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.y11() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString_0(minify(this.f2().toString()))));
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.f1d_1 = value;
    this.g1d_1 = this.f1d_1.m();
    this.h1d_1 = -1;
  }
  protoOf(JsonTreeListDecoder).f2 = function () {
    return this.f1d_1;
  };
  protoOf(JsonTreeListDecoder).s11 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).b1c = function (tag) {
    return this.f1d_1.o(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).do = function (descriptor) {
    while (this.h1d_1 < (this.g1d_1 - 1 | 0)) {
      this.h1d_1 = this.h1d_1 + 1 | 0;
      return this.h1d_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.o1d_1 = value;
    this.m12('primitive');
  }
  protoOf(JsonPrimitiveDecoder).f2 = function () {
    return this.o1d_1;
  };
  protoOf(JsonPrimitiveDecoder).do = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).b1c = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    return this.o1d_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.z1d_1 = value;
    this.a1e_1 = toList(this.z1d_1.j2());
    this.b1e_1 = imul(this.a1e_1.m(), 2);
    this.c1e_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).f2 = function () {
    return this.z1d_1;
  };
  protoOf(JsonTreeMapDecoder).s11 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.a1e_1.o(i);
  };
  protoOf(JsonTreeMapDecoder).do = function (descriptor) {
    while (this.c1e_1 < (this.b1e_1 - 1 | 0)) {
      this.c1e_1 = this.c1e_1 + 1 | 0;
      return this.c1e_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).b1c = function (tag) {
    return (this.c1e_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.z1d_1, tag);
  };
  protoOf(JsonTreeMapDecoder).nn = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.fk())).ln(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  var $ENTRIES;
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.m1b_1 = begin;
    this.n1b_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.ql();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.xl(0), _this__u8e3s4.bo());
          var keyKind = keyDescriptor.ql();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.h14_1.e15_1) {
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.ql(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.rl()) {
      tmp = carrierDescriptor(_this__u8e3s4.xl(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.d1e(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.d1e(lastPosition, currentPosition);
    var result = $this.z14_1.toString();
    $this.z14_1.wb(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.y14_1);
    $this.y14_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.e1e(), $this.w14_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.f1e(currentPosition);
    if (currentPosition === -1) {
      $this.l18('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.e1e();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.e1e(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.l18("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.z14_1.s8(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.w14_1 = startPos;
      $this.g1e();
      if (($this.w14_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.l18('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.w14_1);
    }
    $this.z14_1.s8(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.l18("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.f1e(start);
    if (current >= charSequenceLength($this.e1e()) || current === -1) {
      $this.l18('EOF');
    }
    var tmp = $this.e1e();
    var _unary__edvuaz = current;
    current = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(tmp, _unary__edvuaz);
    var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.l18("Expected valid boolean literal prefix, but had '" + $this.q19() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.e1e()) - current | 0) < literalSuffix.length) {
      $this.l18('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.e1e(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.l18("Expected valid boolean literal prefix, but had '" + $this.q19() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.w14_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.m3();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.m3();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.w14_1 = 0;
    this.x14_1 = new JsonPath();
    this.y14_1 = null;
    this.z14_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).g1e = function () {
  };
  protoOf(AbstractJsonLexer).c1b = function () {
    var current = this.h1e();
    var source = this.e1e();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.w14_1 = this.w14_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).i1e = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).a15 = function () {
    var nextToken = this.s19();
    if (!(nextToken === 10)) {
      this.l18('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.e1e(), this.w14_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).m19 = function (expected) {
    var token = this.s19();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.w14_1 - 1 | 0 : this.w14_1;
      var s = this.w14_1 === charSequenceLength(this.e1e()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.e1e(), position));
      var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.l18(tmp$ret$0, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).j1e = function (expected) {
    if (this.w14_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.w14_1;
        try {
          this.w14_1 = this.w14_1 - 1 | 0;
          tmp$ret$1 = this.q19();
          break $l$block;
        }finally {
          this.w14_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.k18("Expected string literal but 'null' literal was found", this.w14_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.w14_1 - 1 | 0 : this.w14_1;
    var s = this.w14_1 === charSequenceLength(this.e1e()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.e1e(), position));
    var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.l18(tmp$ret$2, position);
  };
  protoOf(AbstractJsonLexer).n19 = function () {
    var source = this.e1e();
    var cpos = this.w14_1;
    $l$loop_0: while (true) {
      cpos = this.f1e(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.w14_1 = cpos;
      return charToTokenClass(ch);
    }
    this.w14_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).d1b = function (doConsume) {
    var current = this.h1e();
    current = this.f1e(current);
    var len = charSequenceLength(this.e1e()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.e1e(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.e1e(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.w14_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).o1b = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.d1b(doConsume) : $super.d1b.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).e1b = function (isLenient) {
    var token = this.n19();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.q19();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.p19();
    }
    var string = tmp;
    this.y14_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).k1e = function () {
    this.y14_1 = null;
  };
  protoOf(AbstractJsonLexer).l1e = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.e1e();
    return toString_0(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).p19 = function () {
    if (!(this.y14_1 == null)) {
      return takePeeked(this);
    }
    return this.h1b();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.f1e(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.l18('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.d1e(lastPosition, currentPosition);
          currentPosition = this.f1e(currentPosition);
          if (currentPosition === -1) {
            this.l18('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.l1e(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.w14_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).i1b = function () {
    var result = this.q19();
    if (result === 'null' && wasUnquotedString(this)) {
      this.l18("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).q19 = function () {
    if (!(this.y14_1 == null)) {
      return takePeeked(this);
    }
    var current = this.h1e();
    if (current >= charSequenceLength(this.e1e()) || current === -1) {
      this.l18('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.e1e(), current));
    if (token === 1) {
      return this.p19();
    }
    if (!(token === 0)) {
      this.l18('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.e1e(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.e1e(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.e1e())) {
        usedAppend = true;
        this.d1e(this.w14_1, current);
        var eof = this.f1e(current);
        if (eof === -1) {
          this.w14_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.l1e(this.w14_1, current);
    } else {
      tmp = decodedString(this, this.w14_1, current);
    }
    var result = tmp;
    this.w14_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).d1e = function (fromIndex, toIndex) {
    this.z14_1.qb(this.e1e(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).g1b = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.n19();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.q19();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.n19();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.q19();
        else
          this.h1b();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.e(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.w14_1, 'found ] instead of } at path: ' + this.x14_1.toString(), this.e1e());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.w14_1, 'found } instead of ] at path: ' + this.x14_1.toString(), this.e1e());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.l18('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.s19();
      if (tokenStack.m() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString_0(this.e1e()) + "', currentPosition=" + this.w14_1 + ')';
  };
  protoOf(AbstractJsonLexer).f1b = function (key) {
    var processed = this.l1e(0, this.w14_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw new JsonDecodingException("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.x14_1.y18() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString_0(minify(this.e1e(), lastIndexOf_0))));
  };
  protoOf(AbstractJsonLexer).k18 = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.x14_1.y18() + hintMessage, this.e1e());
  };
  protoOf(AbstractJsonLexer).l18 = function (message, position, hint, $super) {
    position = position === VOID ? this.w14_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.k18(message, position, hint) : $super.k18.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).q1b = function () {
    var current = this.h1e();
    current = this.f1e(current);
    if (current >= charSequenceLength(this.e1e()) || current === -1) {
      this.l18('EOF');
    }
    var tmp;
    if (charSequenceGet(this.e1e(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.e1e())) {
        this.l18('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.e1e()))) {
      var ch = charSequenceGet(this.e1e(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.l18('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.l18("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.l18("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.l18("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.l18("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        // Inline function 'kotlin.Long.plus' call
        exponentAccumulator = exponentAccumulator.y2(toLong(10)).w2(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.minus' call
      accumulator = accumulator.y2(toLong(10)).x2(toLong(digit));
      if (accumulator.z(new Long(0, 0)) > 0) {
        this.l18('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.l18('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.l18('EOF');
      }
      if (!(charSequenceGet(this.e1e(), current) === _Char___init__impl__6a9atx(34))) {
        this.l18('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.w14_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.m3() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).m3() || doubleAccumulator < (new Long(0, -2147483648)).m3()) {
        this.l18('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.l18("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.c3();
    } else {
      this.l18('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).j16 = function () {
    var result = this.q1b();
    var next = this.s19();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.w14_1 - 1 | 0 : this.w14_1;
      var s = this.w14_1 === charSequenceLength(this.e1e()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.e1e(), position));
      var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.l18(tmp$ret$0, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).p1b = function () {
    var current = this.h1e();
    if (current === charSequenceLength(this.e1e())) {
      this.l18('EOF');
    }
    var tmp;
    if (charSequenceGet(this.e1e(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.w14_1 === charSequenceLength(this.e1e())) {
        this.l18('EOF');
      }
      if (!(charSequenceGet(this.e1e(), this.w14_1) === _Char___init__impl__6a9atx(34))) {
        this.l18('Expected closing quotation mark');
      }
      this.w14_1 = this.w14_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().n1e_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().m1e_1[c] : _Char___init__impl__6a9atx(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.m1e_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.n1e_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.m1e_1 = charArray(117);
    this.n1e_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexerWithComments(source) {
    StringJsonLexer.call(this, source);
  }
  protoOf(StringJsonLexerWithComments).s19 = function () {
    var source = this.e1e();
    var cpos = this.h1e();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.w14_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).o19 = function () {
    var current = this.h1e();
    if (current >= this.e1e().length || current === -1)
      return false;
    return this.i1e(charCodeAt(this.e1e(), current));
  };
  protoOf(StringJsonLexerWithComments).b1b = function (expected) {
    var source = this.e1e();
    var current = this.h1e();
    if (current >= source.length || current === -1) {
      this.w14_1 = -1;
      this.j1e(expected);
    }
    var c = charCodeAt(source, current);
    this.w14_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.j1e(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).n19 = function () {
    var source = this.e1e();
    var cpos = this.h1e();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.w14_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).h1e = function () {
    var current = this.w14_1;
    if (current === -1)
      return current;
    var source = this.e1e();
    $l$loop_1: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charCodeAt(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.w14_1 = source.length;
            this.l18('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.w14_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.x1e_1 = source;
  }
  protoOf(StringJsonLexer).e1e = function () {
    return this.x1e_1;
  };
  protoOf(StringJsonLexer).f1e = function (position) {
    return position < this.e1e().length ? position : -1;
  };
  protoOf(StringJsonLexer).s19 = function () {
    var source = this.e1e();
    var cpos = this.w14_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.w14_1 = cpos;
      return charToTokenClass(c);
    }
    this.w14_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).o19 = function () {
    var current = this.w14_1;
    if (current === -1)
      return false;
    var source = this.e1e();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.w14_1 = current;
      return this.i1e(c);
    }
    this.w14_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).h1e = function () {
    var current = this.w14_1;
    if (current === -1)
      return current;
    var source = this.e1e();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.w14_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).b1b = function (expected) {
    if (this.w14_1 === -1) {
      this.j1e(expected);
    }
    var source = this.e1e();
    var cpos = this.w14_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.w14_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.j1e(expected);
    }
    this.w14_1 = -1;
    this.j1e(expected);
  };
  protoOf(StringJsonLexer).h1b = function () {
    this.b1b(_Char___init__impl__6a9atx(34));
    var current = this.w14_1;
    var closingQuote = indexOf_0(this.e1e(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.q19();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.w14_1 - 1 | 0 : this.w14_1;
      var s = this.w14_1 === charSequenceLength(this.e1e()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.e1e(), position));
      var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.l18(tmp$ret$0, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.e1e(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.e1e(), this.w14_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.w14_1 = closingQuote + 1 | 0;
    return substring(this.e1e(), current, closingQuote);
  };
  protoOf(StringJsonLexer).j1b = function (keyToMatch, isLenient) {
    var positionSnapshot = this.w14_1;
    try {
      if (!(this.s19() === 6))
        return null;
      var firstKey = this.e1b(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.k1e();
      if (!(this.s19() === 5))
        return null;
      return this.e1b(isLenient);
    }finally {
      this.w14_1 = positionSnapshot;
      this.k1e();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.h14_1.q15_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.j14_1;
  }
  function JsonToStringWriter() {
    this.m14_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).p17 = function (value) {
    this.m14_1.ub(value);
  };
  protoOf(JsonToStringWriter).j17 = function (char) {
    this.m14_1.s8(char);
  };
  protoOf(JsonToStringWriter).l17 = function (text) {
    this.m14_1.r8(text);
  };
  protoOf(JsonToStringWriter).v17 = function (text) {
    printQuoted(this.m14_1, text);
  };
  protoOf(JsonToStringWriter).n14 = function () {
    this.m14_1.xb();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.m14_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).ml = get_isNullable;
  protoOf(defer$1).rl = get_isInline;
  protoOf(defer$1).tl = get_annotations;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Default_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
