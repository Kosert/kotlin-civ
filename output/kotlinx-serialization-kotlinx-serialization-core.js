(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.f9;
  var initMetadataForInterface = kotlin_kotlin.$_$.l8;
  var VOID = kotlin_kotlin.$_$.e;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.g3;
  var Unit_instance = kotlin_kotlin.$_$.u3;
  var emptyList = kotlin_kotlin.$_$.h5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.ec;
  var KProperty1 = kotlin_kotlin.$_$.u9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.f8;
  var toString = kotlin_kotlin.$_$.i9;
  var initMetadataForClass = kotlin_kotlin.$_$.i8;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var asList = kotlin_kotlin.$_$.k4;
  var objectCreate = kotlin_kotlin.$_$.e9;
  var THROW_CCE = kotlin_kotlin.$_$.lb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var zip = kotlin_kotlin.$_$.m7;
  var toMap = kotlin_kotlin.$_$.f7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var mapCapacity = kotlin_kotlin.$_$.z5;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var KtMap = kotlin_kotlin.$_$.d4;
  var isInterface = kotlin_kotlin.$_$.v8;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.x;
  var captureStack = kotlin_kotlin.$_$.v7;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.y;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.a1;
  var IllegalArgumentException = kotlin_kotlin.$_$.hb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.p4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var KClass = kotlin_kotlin.$_$.t9;
  var Triple = kotlin_kotlin.$_$.nb;
  var getKClass = kotlin_kotlin.$_$.d;
  var Pair = kotlin_kotlin.$_$.jb;
  var Entry = kotlin_kotlin.$_$.c4;
  var KtMutableMap = kotlin_kotlin.$_$.f4;
  var LinkedHashMap = kotlin_kotlin.$_$.z3;
  var HashMap = kotlin_kotlin.$_$.x3;
  var KtSet = kotlin_kotlin.$_$.h4;
  var KtMutableSet = kotlin_kotlin.$_$.g4;
  var LinkedHashSet = kotlin_kotlin.$_$.a4;
  var HashSet = kotlin_kotlin.$_$.y3;
  var Collection = kotlin_kotlin.$_$.w3;
  var KtList = kotlin_kotlin.$_$.b4;
  var KtMutableList = kotlin_kotlin.$_$.e4;
  var ArrayList = kotlin_kotlin.$_$.v3;
  var copyToArray = kotlin_kotlin.$_$.d5;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.p1;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.o1;
  var Result = kotlin_kotlin.$_$.kb;
  var ensureNotNull = kotlin_kotlin.$_$.ac;
  var equals = kotlin_kotlin.$_$.d8;
  var getStringHashCode = kotlin_kotlin.$_$.g8;
  var isBlank = kotlin_kotlin.$_$.da;
  var toList = kotlin_kotlin.$_$.e7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var toHashSet = kotlin_kotlin.$_$.c7;
  var toBooleanArray = kotlin_kotlin.$_$.b7;
  var withIndex = kotlin_kotlin.$_$.k7;
  var to = kotlin_kotlin.$_$.kc;
  var lazy_0 = kotlin_kotlin.$_$.fc;
  var contentEquals = kotlin_kotlin.$_$.r4;
  var initMetadataForObject = kotlin_kotlin.$_$.n8;
  var Long = kotlin_kotlin.$_$.ib;
  var Char = kotlin_kotlin.$_$.cb;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.h1;
  var Duration = kotlin_kotlin.$_$.ya;
  var Companion_getInstance = kotlin_kotlin.$_$.k3;
  var Instant = kotlin_kotlin.$_$.za;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.l3;
  var Uuid = kotlin_kotlin.$_$.bb;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.m3;
  var toIntOrNull = kotlin_kotlin.$_$.oa;
  var hashCode = kotlin_kotlin.$_$.h8;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.j;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.s;
  var isArray = kotlin_kotlin.$_$.o8;
  var arrayIterator = kotlin_kotlin.$_$.t7;
  var until = kotlin_kotlin.$_$.s9;
  var step = kotlin_kotlin.$_$.r9;
  var getValue = kotlin_kotlin.$_$.n5;
  var longArray = kotlin_kotlin.$_$.z8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j8;
  var get_lastIndex = kotlin_kotlin.$_$.s5;
  var countTrailingZeroBits = kotlin_kotlin.$_$.yb;
  var indexOf = kotlin_kotlin.$_$.o5;
  var contentToString = kotlin_kotlin.$_$.t4;
  var Enum = kotlin_kotlin.$_$.gb;
  var joinToString = kotlin_kotlin.$_$.r5;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.n;
  var toString_0 = kotlin_kotlin.$_$.jc;
  var KTypeParameter = kotlin_kotlin.$_$.v9;
  var contentHashCode = kotlin_kotlin.$_$.s4;
  var booleanArray = kotlin_kotlin.$_$.u7;
  var emptyMap = kotlin_kotlin.$_$.i5;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.n3;
  var isCharArray = kotlin_kotlin.$_$.r8;
  var charArray = kotlin_kotlin.$_$.w7;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.c3;
  var isDoubleArray = kotlin_kotlin.$_$.s8;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.d3;
  var isFloatArray = kotlin_kotlin.$_$.t8;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.o3;
  var isLongArray = kotlin_kotlin.$_$.w8;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.s3;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.p2;
  var ULongArray = kotlin_kotlin.$_$.sb;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.l2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i2;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.n2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.e3;
  var isIntArray = kotlin_kotlin.$_$.u8;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.r3;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.g2;
  var UIntArray = kotlin_kotlin.$_$.qb;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.c2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z1;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.e2;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a2;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.f3;
  var isShortArray = kotlin_kotlin.$_$.x8;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.t3;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.y2;
  var UShortArray = kotlin_kotlin.$_$.ub;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.u2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.r2;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.w2;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.s2;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.b3;
  var isByteArray = kotlin_kotlin.$_$.q8;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.q3;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.x1;
  var UByteArray = kotlin_kotlin.$_$.ob;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.u1;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.q1;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.v1;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.r1;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.a3;
  var isBooleanArray = kotlin_kotlin.$_$.p8;
  var coerceAtLeast = kotlin_kotlin.$_$.n9;
  var copyOf = kotlin_kotlin.$_$.x4;
  var copyOf_0 = kotlin_kotlin.$_$.z4;
  var copyOf_1 = kotlin_kotlin.$_$.a5;
  var copyOf_2 = kotlin_kotlin.$_$.v4;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.q2;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.m2;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.o2;
  var copyOf_3 = kotlin_kotlin.$_$.c5;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.h2;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.d2;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.f2;
  var copyOf_4 = kotlin_kotlin.$_$.u4;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.z2;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.v2;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.x2;
  var copyOf_5 = kotlin_kotlin.$_$.y4;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.y1;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.t1;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.w1;
  var copyOf_6 = kotlin_kotlin.$_$.w4;
  var Unit = kotlin_kotlin.$_$.wb;
  var trimIndent = kotlin_kotlin.$_$.xa;
  var charSequenceLength = kotlin_kotlin.$_$.z7;
  var lastOrNull = kotlin_kotlin.$_$.u5;
  var get_lastIndex_0 = kotlin_kotlin.$_$.t5;
  var ULong = kotlin_kotlin.$_$.tb;
  var UInt = kotlin_kotlin.$_$.rb;
  var UShort = kotlin_kotlin.$_$.vb;
  var UByte = kotlin_kotlin.$_$.pb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.i3;
  var mapOf = kotlin_kotlin.$_$.a6;
  var get_js = kotlin_kotlin.$_$.y8;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.q5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var get_indices_0 = kotlin_kotlin.$_$.p5;
  var Companion_instance = kotlin_kotlin.$_$.p3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m1;
  var createFailure = kotlin_kotlin.$_$.zb;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy, DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SealedClassSerializer$$inlined$groupingBy$1);
  initMetadataForClass(SealedClassSerializer, 'SealedClassSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(elementNames$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.hk(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.yn(descriptor, index, deserializer, previousValue) : $super.yn.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.mn(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.gk(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.fk().ml();
    if (isNullabilitySupported) {
      return this.ep(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.ho();
    } else {
      this.hp();
      this.ep(serializer, value);
    }
  }
  initMetadataForInterface(Encoder, 'Encoder');
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  initMetadataForInterface(CompositeEncoder, 'CompositeEncoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(InstantSerializer, 'InstantSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashSetClassDesc, 'HashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashSetSerializer, 'HashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(LinkedHashSetSerializer, 'LinkedHashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(EnumSerializer, 'EnumSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(EnumDescriptor, 'EnumDescriptor', VOID, PluginGeneratedSerialDescriptor);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NoOpEncoder, 'NoOpEncoder', VOID, AbstractEncoder);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(DoubleArrayBuilder, 'DoubleArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(FloatArrayBuilder, 'FloatArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(LongArrayBuilder, 'LongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ULongArrayBuilder, 'ULongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(IntArrayBuilder, 'IntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UIntArrayBuilder, 'UIntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ShortArrayBuilder, 'ShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UShortArrayBuilder, 'UShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UByteArrayBuilder, 'UByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(BooleanArrayBuilder, 'BooleanArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(KeyValueSerializer, 'KeyValueSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntrySerializer_0, 'MapEntrySerializer', VOID, KeyValueSerializer);
  initMetadataForClass(PairSerializer_0, 'PairSerializer', VOID, KeyValueSerializer);
  initMetadataForClass(TripleSerializer_0, 'TripleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  initMetadataForClass(createCache$1);
  initMetadataForClass(createParametrizedCache$1);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.qk('type', serializer_0(StringCompanionObject_instance).fk());
      $this$buildSerialDescriptor.qk('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.rk_1.ha() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.kk_1 = this$0.sk_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.rk_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return function (p0) {
      return p0.fk();
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.rk_1 = baseClass;
    this.sk_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.tk_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).uk = function () {
    return this.rk_1;
  };
  protoOf(PolymorphicSerializer).fk = function () {
    var tmp0 = this.tk_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.f2();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.rk_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.xk(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.uk());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.wk(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.uk());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.zk_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = this$0.cl_1.u().j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'kotlin.collections.component1' call
        var name = element.e2();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element.f2();
        $this$buildSerialDescriptor.qk(name, serializer.fk());
      }
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.qk('type', serializer_0(StringCompanionObject_instance).fk());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.yk_1.ha() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.qk('value', elementDescriptor);
      $this$buildSerialDescriptor.kk_1 = this$0.zk_1;
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function SealedClassSerializer$_get_descriptor_$ref_m511rz() {
    return function (p0) {
      return p0.fk();
    };
  }
  function SealedClassSerializer$$inlined$groupingBy$1($this) {
    this.dl_1 = $this;
  }
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).j4 = function () {
    return this.dl_1.j();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).el = function (element) {
    return element.f2().fk().fl();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).k4 = function (element) {
    return this.el((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.yk_1 = baseClass;
    this.zk_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.al_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.yk_1.ha() + ' should be marked @Serializable');
    }
    this.bl_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    // Inline function 'kotlin.collections.groupingBy' call
    var this_0 = this.bl_1.u();
    // Inline function 'kotlin.collections.aggregate' call
    var tmp0 = new SealedClassSerializer$$inlined$groupingBy$1(this_0);
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.collections.aggregateTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.j4();
    while (_iterator__ex2g4s.k()) {
      var e = _iterator__ex2g4s.l();
      var key = tmp0.k4(e);
      var accumulator = destination.i2(key);
      accumulator == null && !destination.g2(key);
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var message = "Multiple sealed subclasses of '" + toString(this.yk_1) + "' have the same serial name '" + key + "':" + (" '" + toString(accumulator.e2()) + "', '" + toString(e.e2()) + "'");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      destination.l2(key, e);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.m()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = destination.u().j();
    while (_iterator__ex2g4s_0.k()) {
      var element = _iterator__ex2g4s_0.l();
      var tmp_2 = element.e2();
      var tmp$ret$8 = element.f2().f2();
      destination_0.l2(tmp_2, tmp$ret$8);
    }
    tmp_1.cl_1 = destination_0;
  }
  protoOf(SealedClassSerializer).uk = function () {
    return this.yk_1;
  };
  protoOf(SealedClassSerializer).fk = function () {
    var tmp0 = this.al_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, SealedClassSerializer$_get_descriptor_$ref_m511rz(), null);
    return tmp0.f2();
  };
  protoOf(SealedClassSerializer).wk = function (decoder, klassName) {
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.cl_1;
    var tmp0_elvis_lhs = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).i2(klassName);
    return tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).wk.call(this, decoder, klassName) : tmp0_elvis_lhs;
  };
  protoOf(SealedClassSerializer).xk = function (encoder, value) {
    var tmp0_elvis_lhs = this.bl_1.i2(getKClassFromExpression(value));
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).xk.call(this, encoder, value) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, SerializationStrategy) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  };
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.m() === 1 ? "Field '" + missingFields.o(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.gl_1 = missingFields;
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s = typeArguments.j();
      while (_iterator__ex2g4s.k()) {
        var item = _iterator__ex2g4s.l();
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s_0 = typeArguments.j();
      while (_iterator__ex2g4s_0.k()) {
        var item_0 = _iterator__ex2g4s_0.l();
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.e(tmp$ret$3);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (_this__u8e3s4.equals(getKClass(Collection)) || _this__u8e3s4.equals(getKClass(KtList)) || (_this__u8e3s4.equals(getKClass(KtMutableList)) || _this__u8e3s4.equals(getKClass(ArrayList)))) {
      tmp = new ArrayListSerializer(serializers.o(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.o(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.o(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.o(0), serializers.o(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.o(0), serializers.o(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.o(0), serializers.o(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.o(0), serializers.o(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.o(0), serializers.o(1), serializers.o(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.o(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.va();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.ua();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.j();
    while (_iterator__ex2g4s.k()) {
      var item = _iterator__ex2g4s.l();
      var tmp$ret$0 = typeOrThrow(item);
      destination.e(tmp$ret$0);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.p()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.il(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.hl()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        var tmp_2;
        if (_Result___get_isFailure__impl__jpiriv(this_1)) {
          tmp_2 = null;
        } else {
          var tmp_3 = _Result___get_value__impl__bjfvqg(this_1);
          tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        }
        tmp_1 = tmp_2;
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_4;
    if (typeArguments.p()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.il(rootClass) : tmp0_elvis_lhs;
      var tmp_5;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp1_elvis_lhs;
      }
      tmp_4 = tmp_5;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_6;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var serializers = tmp_6;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.jl(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_7;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_7 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_7 = tmp4_elvis_lhs;
      }
      tmp_4 = tmp_7;
    }
    var contextualSerializer = tmp_4;
    var tmp_8;
    if (contextualSerializer == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_8 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_8;
    return tmp6_safe_receiver == null ? null : nullable(tmp6_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.o(0).ta();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().kl(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().kl(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().ll(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().ll(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_nullable(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_0 = isInterface(tmp2_safe_receiver, KSerializer) ? tmp2_safe_receiver : THROW_CCE();
    }
    return tmp_0;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.o(0).ta();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.o(0).ta();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.fk().ml()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return InstantSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.nl_1 = original;
    this.ol_1 = kClass;
    this.pl_1 = this.nl_1.fl() + '<' + this.ol_1.ha() + '>';
  }
  protoOf(ContextDescriptor).fl = function () {
    return this.pl_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.nl_1, another.nl_1) && another.ol_1.equals(this.ol_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.ol_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.pl_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.ol_1) + ', original: ' + toString(this.nl_1) + ')';
  };
  protoOf(ContextDescriptor).ql = function () {
    return this.nl_1.ql();
  };
  protoOf(ContextDescriptor).ml = function () {
    return this.nl_1.ml();
  };
  protoOf(ContextDescriptor).rl = function () {
    return this.nl_1.rl();
  };
  protoOf(ContextDescriptor).sl = function () {
    return this.nl_1.sl();
  };
  protoOf(ContextDescriptor).tl = function () {
    return this.nl_1.tl();
  };
  protoOf(ContextDescriptor).ul = function (index) {
    return this.nl_1.ul(index);
  };
  protoOf(ContextDescriptor).vl = function (name) {
    return this.nl_1.vl(name);
  };
  protoOf(ContextDescriptor).wl = function (index) {
    return this.nl_1.wl(index);
  };
  protoOf(ContextDescriptor).xl = function (index) {
    return this.nl_1.xl(index);
  };
  protoOf(ContextDescriptor).yl = function (index) {
    return this.nl_1.yl(index);
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.il(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.fk();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.ol_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.zl_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementNames$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementDescriptors$1($this_elementDescriptors) {
    this.dm_1 = $this_elementDescriptors;
    this.cm_1 = $this_elementDescriptors.sl();
  }
  protoOf(elementDescriptors$1).k = function () {
    return this.cm_1 > 0;
  };
  protoOf(elementDescriptors$1).l = function () {
    var tmp = this.dm_1.sl();
    var _unary__edvuaz = this.cm_1;
    this.cm_1 = _unary__edvuaz - 1 | 0;
    return this.dm_1.xl(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.em_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).j = function () {
    return new elementDescriptors$1(this.em_1);
  };
  function elementNames$1($this_elementNames) {
    this.gm_1 = $this_elementNames;
    this.fm_1 = $this_elementNames.sl();
  }
  protoOf(elementNames$1).k = function () {
    return this.fm_1 > 0;
  };
  protoOf(elementNames$1).l = function () {
    var tmp = this.gm_1.sl();
    var _unary__edvuaz = this.fm_1;
    this.fm_1 = _unary__edvuaz - 1 | 0;
    return this.gm_1.ul(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.hm_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).j = function () {
    return new elementNames$1(this.hm_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.lk_1.m(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.ik_1 = serialName;
    this.jk_1 = false;
    this.kk_1 = emptyList();
    this.lk_1 = ArrayList_init_$Create$_0();
    this.mk_1 = HashSet_init_$Create$();
    this.nk_1 = ArrayList_init_$Create$_0();
    this.ok_1 = ArrayList_init_$Create$_0();
    this.pk_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).im = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.mk_1.e(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.ik_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.lk_1.e(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.nk_1.e(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.ok_1.e(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.pk_1.e(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).qk = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.im(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.im.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.um_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.f2();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.tm_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return function (p0) {
      return _get__hashCode__tgwhef(p0);
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.jm_1 = serialName;
    this.km_1 = kind;
    this.lm_1 = elementsCount;
    this.mm_1 = builder.kk_1;
    this.nm_1 = toHashSet(builder.lk_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.lk_1;
    tmp.om_1 = copyToArray(this_0);
    this.pm_1 = compactArray(builder.nk_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.ok_1;
    tmp_0.qm_1 = copyToArray(this_1);
    this.rm_1 = toBooleanArray(builder.pk_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.om_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.j();
    while (_iterator__ex2g4s.k()) {
      var item = _iterator__ex2g4s.l();
      var tmp$ret$2 = to(item.hd_1, item.gd_1);
      destination.e(tmp$ret$2);
    }
    tmp_1.sm_1 = toMap(destination);
    this.tm_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.um_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).fl = function () {
    return this.jm_1;
  };
  protoOf(SerialDescriptorImpl).ql = function () {
    return this.km_1;
  };
  protoOf(SerialDescriptorImpl).sl = function () {
    return this.lm_1;
  };
  protoOf(SerialDescriptorImpl).tl = function () {
    return this.mm_1;
  };
  protoOf(SerialDescriptorImpl).vm = function () {
    return this.nm_1;
  };
  protoOf(SerialDescriptorImpl).ul = function (index) {
    return getChecked(this.om_1, index);
  };
  protoOf(SerialDescriptorImpl).vl = function (name) {
    var tmp0_elvis_lhs = this.sm_1.i2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).wl = function (index) {
    return getChecked(this.qm_1, index);
  };
  protoOf(SerialDescriptorImpl).xl = function (index) {
    return getChecked(this.pm_1, index);
  };
  protoOf(SerialDescriptorImpl).yl = function (index) {
    return getChecked_0(this.rm_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.fl() === other.fl())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.tm_1, other.tm_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.sl() === other.sl())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.sl();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.xl(index).fl() === other.xl(index).fl())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.xl(index).ql(), other.xl(index).ql())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    return toStringImpl(this);
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.lk_1.m(), toList(typeParameters), sdBuilder);
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function buildClassSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).ha());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).wm = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).xm = function () {
    return true;
  };
  protoOf(AbstractDecoder).ym = function () {
    return null;
  };
  protoOf(AbstractDecoder).zm = function () {
    var tmp = this.wm();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).an = function () {
    var tmp = this.wm();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).bn = function () {
    var tmp = this.wm();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).cn = function () {
    var tmp = this.wm();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).dn = function () {
    var tmp = this.wm();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).en = function () {
    var tmp = this.wm();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).fn = function () {
    var tmp = this.wm();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).gn = function () {
    var tmp = this.wm();
    return tmp instanceof Char ? tmp.j1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).hn = function () {
    var tmp = this.wm();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).in = function (enumDescriptor) {
    var tmp = this.wm();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).jn = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).kn = function (deserializer, previousValue) {
    return this.ln(deserializer);
  };
  protoOf(AbstractDecoder).mn = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).nn = function (descriptor) {
  };
  protoOf(AbstractDecoder).on = function (descriptor, index) {
    return this.zm();
  };
  protoOf(AbstractDecoder).pn = function (descriptor, index) {
    return this.an();
  };
  protoOf(AbstractDecoder).qn = function (descriptor, index) {
    return this.bn();
  };
  protoOf(AbstractDecoder).rn = function (descriptor, index) {
    return this.cn();
  };
  protoOf(AbstractDecoder).sn = function (descriptor, index) {
    return this.dn();
  };
  protoOf(AbstractDecoder).tn = function (descriptor, index) {
    return this.en();
  };
  protoOf(AbstractDecoder).un = function (descriptor, index) {
    return this.fn();
  };
  protoOf(AbstractDecoder).vn = function (descriptor, index) {
    return this.gn();
  };
  protoOf(AbstractDecoder).wn = function (descriptor, index) {
    return this.hn();
  };
  protoOf(AbstractDecoder).xn = function (descriptor, index) {
    return this.jn(descriptor.xl(index));
  };
  protoOf(AbstractDecoder).yn = function (descriptor, index, deserializer, previousValue) {
    return this.kn(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).ao = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.fk().ml();
    var tmp;
    if (isNullabilitySupported || this.xm()) {
      tmp = this.kn(deserializer, previousValue);
    } else {
      tmp = this.ym();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).mn = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).nn = function (descriptor) {
  };
  protoOf(AbstractEncoder).fo = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).go = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).ho = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).io = function (value) {
    return this.go(value);
  };
  protoOf(AbstractEncoder).jo = function (value) {
    return this.go(value);
  };
  protoOf(AbstractEncoder).ko = function (value) {
    return this.go(value);
  };
  protoOf(AbstractEncoder).lo = function (value) {
    return this.go(value);
  };
  protoOf(AbstractEncoder).mo = function (value) {
    return this.go(value);
  };
  protoOf(AbstractEncoder).no = function (value) {
    return this.go(value);
  };
  protoOf(AbstractEncoder).oo = function (value) {
    return this.go(value);
  };
  protoOf(AbstractEncoder).po = function (value) {
    return this.go(new Char(value));
  };
  protoOf(AbstractEncoder).qo = function (value) {
    return this.go(value);
  };
  protoOf(AbstractEncoder).ro = function (enumDescriptor, index) {
    return this.go(index);
  };
  protoOf(AbstractEncoder).so = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).to = function (descriptor, index, value) {
    if (this.fo(descriptor, index)) {
      this.io(value);
    }
  };
  protoOf(AbstractEncoder).uo = function (descriptor, index, value) {
    if (this.fo(descriptor, index)) {
      this.jo(value);
    }
  };
  protoOf(AbstractEncoder).vo = function (descriptor, index, value) {
    if (this.fo(descriptor, index)) {
      this.ko(value);
    }
  };
  protoOf(AbstractEncoder).wo = function (descriptor, index, value) {
    if (this.fo(descriptor, index)) {
      this.lo(value);
    }
  };
  protoOf(AbstractEncoder).xo = function (descriptor, index, value) {
    if (this.fo(descriptor, index)) {
      this.mo(value);
    }
  };
  protoOf(AbstractEncoder).yo = function (descriptor, index, value) {
    if (this.fo(descriptor, index)) {
      this.no(value);
    }
  };
  protoOf(AbstractEncoder).zo = function (descriptor, index, value) {
    if (this.fo(descriptor, index)) {
      this.oo(value);
    }
  };
  protoOf(AbstractEncoder).ap = function (descriptor, index, value) {
    if (this.fo(descriptor, index)) {
      this.po(value);
    }
  };
  protoOf(AbstractEncoder).bp = function (descriptor, index, value) {
    if (this.fo(descriptor, index)) {
      this.qo(value);
    }
  };
  protoOf(AbstractEncoder).cp = function (descriptor, index) {
    return this.fo(descriptor, index) ? this.so(descriptor.xl(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).dp = function (descriptor, index, serializer, value) {
    if (this.fo(descriptor, index)) {
      this.ep(serializer, value);
    }
  };
  protoOf(AbstractEncoder).fp = function (descriptor, index, serializer, value) {
    if (this.fo(descriptor, index)) {
      this.gp(serializer, value);
    }
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.wn($this.fk(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.zn($this.fk(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).vk = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.fk();
    var composite = encoder.mn(descriptor);
    composite.bp(this.fk(), 0, actualSerializer.fk().fl());
    var tmp = this.fk();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.dp(tmp, 1, tmp$ret$0, value);
    composite.nn(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).gk = function (encoder, value) {
    return this.vk(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).hk = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.fk();
    var composite = decoder.mn(descriptor);
    var tmp$ret$0;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.co()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.do(this.fk());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.wn(this.fk(), index);
            break;
          case 1:
            var tmp0 = klassName;
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (tmp0 == null) {
                var message = 'Cannot read polymorphic value before its type token';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = tmp0;
                break $l$block_0;
              }
            }

            klassName = tmp$ret$2;
            var serializer = findPolymorphicSerializer_0(this, composite, klassName);
            value = composite.zn(this.fk(), index, serializer);
            break;
          default:
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var tmp0_0 = value;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0_0 == null) {
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp0_0;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.nn(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).wk = function (decoder, klassName) {
    return decoder.bo().kp(this.uk(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).xk = function (encoder, value) {
    return encoder.bo().lp(this.uk(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.ha();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.ha() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.ha() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.mp_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).fk = function () {
    return this.mp_1;
  };
  protoOf(NothingSerializer_0).np = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).gk = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.np(encoder, tmp);
  };
  protoOf(NothingSerializer_0).hk = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.op_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).fk = function () {
    return this.op_1;
  };
  protoOf(DurationSerializer).pp = function (encoder, value) {
    encoder.qo(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).gk = function (encoder, value) {
    return this.pp(encoder, value instanceof Duration ? value.tg_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).qp = function (decoder) {
    return Companion_getInstance().sg(decoder.hn());
  };
  protoOf(DurationSerializer).hk = function (decoder) {
    return new Duration(this.qp(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.rp_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).fk = function () {
    return this.rp_1;
  };
  protoOf(InstantSerializer).sp = function (encoder, value) {
    encoder.qo(value.toString());
  };
  protoOf(InstantSerializer).gk = function (encoder, value) {
    return this.sp(encoder, value instanceof Instant ? value : THROW_CCE());
  };
  protoOf(InstantSerializer).hk = function (decoder) {
    return Companion_getInstance_0().xg(decoder.hn());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.tp_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).fk = function () {
    return this.tp_1;
  };
  protoOf(UuidSerializer).up = function (encoder, value) {
    encoder.qo(value.toString());
  };
  protoOf(UuidSerializer).gk = function (encoder, value) {
    return this.up(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).hk = function (decoder) {
    return Companion_getInstance_1().gi(decoder.hn());
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).fl = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).fl = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).fl = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).fl = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.xp_1 = elementDescriptor;
    this.yp_1 = 1;
  }
  protoOf(ListLikeDescriptor).ql = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).sl = function () {
    return this.yp_1;
  };
  protoOf(ListLikeDescriptor).ul = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).vl = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).yl = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.fl() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).wl = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.fl() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).xl = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.fl() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.xp_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.xp_1, other.xp_1) && this.fl() === other.fl())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.xp_1), 31) + getStringHashCode(this.fl()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.fl() + '(' + toString(this.xp_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.dq_1 = serialName;
    this.eq_1 = keyDescriptor;
    this.fq_1 = valueDescriptor;
    this.gq_1 = 2;
  }
  protoOf(MapLikeDescriptor).fl = function () {
    return this.dq_1;
  };
  protoOf(MapLikeDescriptor).ql = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).sl = function () {
    return this.gq_1;
  };
  protoOf(MapLikeDescriptor).ul = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).vl = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).yl = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.fl() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).wl = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.fl() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).xl = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.fl() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.eq_1;
        break;
      case 1:
        tmp = this.fq_1;
        break;
      default:
        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.fl() === other.fl()))
      return false;
    if (!equals(this.eq_1, other.eq_1))
      return false;
    if (!equals(this.fq_1, other.fq_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.fl());
    result = imul(31, result) + hashCode(this.eq_1) | 0;
    result = imul(31, result) + hashCode(this.fq_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.fl() + '(' + toString(this.eq_1) + ', ' + toString(this.fq_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.lq_1 = primitive.fl() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).fl = function () {
    return this.lq_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.nq_1 = new ArrayListClassDesc(element.fk());
  }
  protoOf(ArrayListSerializer).fk = function () {
    return this.nq_1;
  };
  protoOf(ArrayListSerializer).oq = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).pq = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(ArrayListSerializer).qq = function (_this__u8e3s4) {
    return this.pq(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).rq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).sq = function (_this__u8e3s4) {
    return this.rq(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).tq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).uq = function (_this__u8e3s4) {
    return this.tq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).vq = function (_this__u8e3s4, size) {
    return _this__u8e3s4.w5(size);
  };
  protoOf(ArrayListSerializer).wq = function (_this__u8e3s4, size) {
    return this.vq(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).xq = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.f5(index, element);
  };
  protoOf(ArrayListSerializer).yq = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.xq(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.jr_1 = new HashSetClassDesc(eSerializer.fk());
  }
  protoOf(HashSetSerializer).fk = function () {
    return this.jr_1;
  };
  protoOf(HashSetSerializer).oq = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).kr = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(HashSetSerializer).qq = function (_this__u8e3s4) {
    return this.kr(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).lr = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).sq = function (_this__u8e3s4) {
    return this.lr(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).mr = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).uq = function (_this__u8e3s4) {
    return this.mr((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).nr = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).wq = function (_this__u8e3s4, size) {
    return this.nr(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).or = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e(element);
  };
  protoOf(HashSetSerializer).yq = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.or(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.qr_1 = new LinkedHashSetClassDesc(eSerializer.fk());
  }
  protoOf(LinkedHashSetSerializer).fk = function () {
    return this.qr_1;
  };
  protoOf(LinkedHashSetSerializer).oq = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).rr = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(LinkedHashSetSerializer).qq = function (_this__u8e3s4) {
    return this.rr(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).sr = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).sq = function (_this__u8e3s4) {
    return this.sr(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).mr = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).uq = function (_this__u8e3s4) {
    return this.mr((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).tr = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).wq = function (_this__u8e3s4, size) {
    return this.tr(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).ur = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e(element);
  };
  protoOf(LinkedHashSetSerializer).yq = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.ur(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.xr_1 = new HashMapClassDesc(kSerializer.fk(), vSerializer.fk());
  }
  protoOf(HashMapSerializer).fk = function () {
    return this.xr_1;
  };
  protoOf(HashMapSerializer).yr = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(HashMapSerializer).zr = function (_this__u8e3s4) {
    return this.yr((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).as = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.u().j();
  };
  protoOf(HashMapSerializer).bs = function (_this__u8e3s4) {
    return this.as((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).oq = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).cs = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.m(), 2);
  };
  protoOf(HashMapSerializer).qq = function (_this__u8e3s4) {
    return this.cs(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).ds = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).sq = function (_this__u8e3s4) {
    return this.ds(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).es = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).uq = function (_this__u8e3s4) {
    return this.es((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).fs = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).wq = function (_this__u8e3s4, size) {
    return this.fs(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.ms_1 = new LinkedHashMapClassDesc(kSerializer.fk(), vSerializer.fk());
  }
  protoOf(LinkedHashMapSerializer).fk = function () {
    return this.ms_1;
  };
  protoOf(LinkedHashMapSerializer).yr = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(LinkedHashMapSerializer).zr = function (_this__u8e3s4) {
    return this.yr((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).as = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.u().j();
  };
  protoOf(LinkedHashMapSerializer).bs = function (_this__u8e3s4) {
    return this.as((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).oq = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).ns = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.m(), 2);
  };
  protoOf(LinkedHashMapSerializer).qq = function (_this__u8e3s4) {
    return this.ns(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).os = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).sq = function (_this__u8e3s4) {
    return this.os(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).es = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).uq = function (_this__u8e3s4) {
    return this.es((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).ps = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).wq = function (_this__u8e3s4, size) {
    return this.ps(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.rs_1 = kClass;
    this.ss_1 = new ArrayClassDesc(eSerializer.fk());
  }
  protoOf(ReferenceArraySerializer).fk = function () {
    return this.ss_1;
  };
  protoOf(ReferenceArraySerializer).ts = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).zr = function (_this__u8e3s4) {
    return this.ts((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).us = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).bs = function (_this__u8e3s4) {
    return this.us((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).oq = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).vs = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(ReferenceArraySerializer).qq = function (_this__u8e3s4) {
    return this.vs(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ws = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.rs_1);
  };
  protoOf(ReferenceArraySerializer).sq = function (_this__u8e3s4) {
    return this.ws(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).xs = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).uq = function (_this__u8e3s4) {
    return this.xs((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ys = function (_this__u8e3s4, size) {
    return _this__u8e3s4.w5(size);
  };
  protoOf(ReferenceArraySerializer).wq = function (_this__u8e3s4, size) {
    return this.ys(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).zs = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.f5(index, element);
  };
  protoOf(ReferenceArraySerializer).yq = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.zs(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).ar = function (_this__u8e3s4) {
    return _this__u8e3s4.m();
  };
  protoOf(CollectionSerializer).zr = function (_this__u8e3s4) {
    return this.ar((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).br = function (_this__u8e3s4) {
    return _this__u8e3s4.j();
  };
  protoOf(CollectionSerializer).bs = function (_this__u8e3s4) {
    return this.br((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.gs_1 = keySerializer;
    this.hs_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).is = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.a1_1;
    var last = progression.b1_1;
    var step_0 = progression.c1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.js(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).er = function (decoder, builder, startIndex, size) {
    return this.is(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).js = function (decoder, index, builder, checkIndex) {
    var key = decoder.zn(this.fk(), index, this.gs_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.do(this.fk());
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.g2(key)) {
      var tmp_2 = this.hs_1.fk().ql();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.yn(this.fk(), vIndex, this.hs_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.zn(this.fk(), vIndex, this.hs_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.l2(key, value);
  };
  protoOf(MapLikeSerializer).fr = function (decoder, index, builder, checkIndex) {
    return this.js(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).dr = function (encoder, value) {
    var size = this.zr(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.fk();
    var composite = encoder.ip(descriptor, size);
    var iterator = this.bs(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'kotlin.collections.component1' call
      var k = element.e2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.f2();
      var tmp = this.fk();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.dp(tmp, _unary__edvuaz, this.gs_1, k);
      var tmp_0 = this.fk();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.dp(tmp_0, _unary__edvuaz_0, this.hs_1, v);
    }
    composite.nn(descriptor);
  };
  protoOf(MapLikeSerializer).gk = function (encoder, value) {
    return this.dr(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.cr_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).dr = function (encoder, value) {
    var size = this.zr(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.fk();
    var composite = encoder.ip(descriptor, size);
    var iterator = this.bs(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.dp(this.fk(), index, this.cr_1, iterator.l());
      }
       while (inductionVariable < size);
    composite.nn(descriptor);
  };
  protoOf(CollectionLikeSerializer).gk = function (encoder, value) {
    return this.dr(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).er = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.fr(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).fr = function (decoder, index, builder, checkIndex) {
    this.yq(builder, index, decoder.zn(this.fk(), index, this.cr_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.eo($this.fk());
    $this.wq(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).hr = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.uq(previous);
    var builder = tmp1_elvis_lhs == null ? this.oq() : tmp1_elvis_lhs;
    var startIndex = this.qq(builder);
    var compositeDecoder = decoder.mn(this.fk());
    if (compositeDecoder.co()) {
      this.er(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.do(this.fk());
        if (index === -1)
          break $l$loop;
        this.gr(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.nn(this.fk());
    return this.sq(builder);
  };
  protoOf(AbstractCollectionSerializer).hk = function (decoder) {
    return this.hr(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).gr = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.fr(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.fr.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.bt_1 = new PrimitiveArrayDescriptor(primitiveSerializer.fk());
  }
  protoOf(PrimitiveArraySerializer).fk = function () {
    return this.bt_1;
  };
  protoOf(PrimitiveArraySerializer).ct = function (_this__u8e3s4) {
    return _this__u8e3s4.dt();
  };
  protoOf(PrimitiveArraySerializer).qq = function (_this__u8e3s4) {
    return this.ct(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).et = function (_this__u8e3s4) {
    return _this__u8e3s4.ft();
  };
  protoOf(PrimitiveArraySerializer).sq = function (_this__u8e3s4) {
    return this.et(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).gt = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ht(size);
  };
  protoOf(PrimitiveArraySerializer).wq = function (_this__u8e3s4, size) {
    return this.gt(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).it = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).bs = function (_this__u8e3s4) {
    return this.it((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).jt = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).yq = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.jt(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).oq = function () {
    return this.uq(this.kt());
  };
  protoOf(PrimitiveArraySerializer).nt = function (encoder, value) {
    var size = this.zr(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.bt_1;
    var composite = encoder.ip(descriptor, size);
    this.mt(composite, value, size);
    composite.nn(descriptor);
  };
  protoOf(PrimitiveArraySerializer).gk = function (encoder, value) {
    return this.nt(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).dr = function (encoder, value) {
    return this.nt(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).hk = function (decoder) {
    return this.hr(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).ot = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.dt() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.ht(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.ht.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.pt_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).e3(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.tt_1[slot] = $this.tt_1[slot].i3((new Long(1, 0)).e3(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.tt_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.tt_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.d3());
          slotMarks = slotMarks.i3((new Long(1, 0)).e3(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.rt_1($this.qt_1, index)) {
            $this.tt_1[slot] = slotMarks;
            return index;
          }
        }
        $this.tt_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.qt_1 = descriptor;
    this.rt_1 = readIfAbsent;
    var elementsCount = this.qt_1.sl();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).e3(elementsCount);
      }
      tmp.st_1 = tmp_0;
      this.tt_1 = Companion_getInstance_8().pt_1;
    } else {
      this.st_1 = new Long(0, 0);
      this.tt_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).ut = function (index) {
    if (index < 64) {
      this.st_1 = this.st_1.i3((new Long(1, 0)).e3(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).vt = function () {
    var elementsCount = this.qt_1.sl();
    while (!this.st_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.st_1.d3());
      this.st_1 = this.st_1.i3((new Long(1, 0)).e3(index));
      if (this.rt_1(this.qt_1, index)) {
        return index;
      }
    }
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.wt_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.wt_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.lu(element.n2_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.xt_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return function (p0) {
      return p0.fk();
    };
  }
  function EnumSerializer(serialName, values) {
    this.wt_1 = values;
    this.xt_1 = null;
    var tmp = this;
    tmp.yt_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).fk = function () {
    var tmp0 = this.yt_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.f2();
  };
  protoOf(EnumSerializer).mu = function (encoder, value) {
    var index = indexOf(this.wt_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.fk().fl() + ', ' + ('must be one of ' + contentToString(this.wt_1)));
    }
    encoder.ro(this.fk(), index);
  };
  protoOf(EnumSerializer).gk = function (encoder, value) {
    return this.mu(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).hk = function (decoder) {
    var index = decoder.in(this.fk());
    if (!(0 <= index ? index <= (this.wt_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.fk().fl() + ' enum values, ' + ('values size is ' + this.wt_1.length));
    }
    return this.wt_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.fk().fl() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.av_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('elementDescriptors', 1, tmp, EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a(), null);
    return tmp0.f2();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.ul(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a() {
    return function (p0) {
      return _get_elementDescriptors__y23q9p(p0);
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.zu_1 = ENUM_getInstance();
    var tmp = this;
    tmp.av_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).ql = function () {
    return this.zu_1;
  };
  protoOf(EnumDescriptor).xl = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.ql() === ENUM_getInstance()))
      return false;
    if (!(this.fl() === other.fl()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.fl() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.fl());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = get_elementNames(this).j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.pv_1 = true;
  }
  protoOf(InlineClassDescriptor).rl = function () {
    return this.pv_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.fl() === other.fl())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.pv_1 && contentEquals(this.bv(), other.bv()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.sl() === other.sl())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.sl();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.xl(index).fl() === other.xl(index).fl())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.xl(index).ql(), other.xl(index).ql())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.qv_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).rv = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.qv_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).fk = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).gk = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).hk = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.tv_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).bo = function () {
    return this.tv_1;
  };
  protoOf(NoOpEncoder).go = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ho = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).io = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).jo = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ko = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).lo = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).mo = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).no = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).oo = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).po = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).qo = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ro = function (enumDescriptor, index) {
    return Unit_instance;
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.uv_1 = OBJECT_getInstance();
    this.vv_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).ql = function () {
    return this.uv_1;
  };
  protoOf(NothingSerialDescriptor).fl = function () {
    return this.vv_1;
  };
  protoOf(NothingSerialDescriptor).sl = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).ul = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).vl = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).yl = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).xl = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).wl = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.vv_1) + imul(31, this.uv_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.wv_1 = serializer;
    this.xv_1 = new SerialDescriptorForNullable(this.wv_1.fk());
  }
  protoOf(NullableSerializer).fk = function () {
    return this.xv_1;
  };
  protoOf(NullableSerializer).yv = function (encoder, value) {
    if (!(value == null)) {
      encoder.hp();
      encoder.ep(this.wv_1, value);
    } else {
      encoder.ho();
    }
  };
  protoOf(NullableSerializer).gk = function (encoder, value) {
    return this.yv(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).hk = function (decoder) {
    return decoder.xm() ? decoder.ln(this.wv_1) : decoder.ym();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.wv_1, other.wv_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.wv_1);
  };
  function SerialDescriptorForNullable(original) {
    this.zl_1 = original;
    this.am_1 = this.zl_1.fl() + '?';
    this.bm_1 = cachedSerialNames(this.zl_1);
  }
  protoOf(SerialDescriptorForNullable).fl = function () {
    return this.am_1;
  };
  protoOf(SerialDescriptorForNullable).vm = function () {
    return this.bm_1;
  };
  protoOf(SerialDescriptorForNullable).ml = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.zl_1, other.zl_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.zl_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.zl_1), 31);
  };
  protoOf(SerialDescriptorForNullable).ql = function () {
    return this.zl_1.ql();
  };
  protoOf(SerialDescriptorForNullable).rl = function () {
    return this.zl_1.rl();
  };
  protoOf(SerialDescriptorForNullable).sl = function () {
    return this.zl_1.sl();
  };
  protoOf(SerialDescriptorForNullable).tl = function () {
    return this.zl_1.tl();
  };
  protoOf(SerialDescriptorForNullable).ul = function (index) {
    return this.zl_1.ul(index);
  };
  protoOf(SerialDescriptorForNullable).vl = function (name) {
    return this.zl_1.vl(name);
  };
  protoOf(SerialDescriptorForNullable).wl = function (index) {
    return this.zl_1.wl(index);
  };
  protoOf(SerialDescriptorForNullable).xl = function (index) {
    return this.zl_1.xl(index);
  };
  protoOf(SerialDescriptorForNullable).yl = function (index) {
    return this.zl_1.yl(index);
  };
  function ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, $this) {
    ObjectSerializer.call($this, serialName, objectInstance);
    $this.aw_1 = asList(classAnnotations);
    return $this;
  }
  function ObjectSerializer_init_$Create$(serialName, objectInstance, classAnnotations) {
    return ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, objectCreate(protoOf(ObjectSerializer)));
  }
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.kk_1 = this$0.aw_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer$_get_descriptor_$ref_7z4xb6() {
    return function (p0) {
      return p0.fk();
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.zv_1 = objectInstance;
    this.aw_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.bw_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).fk = function () {
    var tmp0 = this.bw_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.f2();
  };
  protoOf(ObjectSerializer).vk = function (encoder, value) {
    encoder.mn(this.fk()).nn(this.fk());
  };
  protoOf(ObjectSerializer).gk = function (encoder, value) {
    return this.vk(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).hk = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.fk();
    var composite = decoder.mn(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      if (composite.co()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.do(this.fk());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.nn(descriptor);
    return this.zv_1;
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.vm();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.sl());
    var inductionVariable = 0;
    var last = _this__u8e3s4.sl();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.ul(i);
        result.e(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.ta();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + toString(t) + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + toString(t) + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + toString(t) + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + toString_0(t));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0 = _this__u8e3s4.dw_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.dw_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.ha();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.p())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.ul(i);
          missingFields.e(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.fl());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.fl());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.fl();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.ql();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.sl());
    var tmp_0 = _this__u8e3s4.fl() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.iu_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.f2();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.ku_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.f2();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.du_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.du_1[i];
        indices.l2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.au_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rv();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.au_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sv();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0 = item.fk();
          destination.e(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return function (p0) {
      return p0.bv();
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.bv());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.zt_1 = serialName;
    this.au_1 = generatedSerializer;
    this.bu_1 = elementsCount;
    this.cu_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.bu_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.du_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.bu_1;
    tmp_3.eu_1 = Array(size);
    this.fu_1 = null;
    this.gu_1 = booleanArray(this.bu_1);
    this.hu_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.iu_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.ju_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.ku_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).fl = function () {
    return this.zt_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).sl = function () {
    return this.bu_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).ql = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).tl = function () {
    var tmp0_elvis_lhs = this.fu_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).vm = function () {
    return this.hu_1.j2();
  };
  protoOf(PluginGeneratedSerialDescriptor).bv = function () {
    var tmp0 = this.ju_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.f2();
  };
  protoOf(PluginGeneratedSerialDescriptor).cv = function (name, isOptional) {
    this.cu_1 = this.cu_1 + 1 | 0;
    this.du_1[this.cu_1] = name;
    this.gu_1[this.cu_1] = isOptional;
    this.eu_1[this.cu_1] = null;
    if (this.cu_1 === (this.bu_1 - 1 | 0)) {
      this.hu_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).lu = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.cv(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.cv.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).xl = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).fk();
  };
  protoOf(PluginGeneratedSerialDescriptor).yl = function (index) {
    return getChecked_0(this.gu_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).wl = function (index) {
    var tmp0_elvis_lhs = getChecked(this.eu_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).ul = function (index) {
    return getChecked(this.du_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).vl = function (name) {
    var tmp0_elvis_lhs = this.hu_1.i2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.fl() === other.fl())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.bv(), other.bv())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.sl() === other.sl())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.sl();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.xl(index).fl() === other.xl(index).fl())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.xl(index).ql(), other.xl(index).ql())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    return toStringImpl(this);
  };
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.ul(i) + ': ' + $this_toStringImpl.xl(i).fl();
    };
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_2()));
  }
  protoOf(CharArraySerializer_0).hw = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).zr = function (_this__u8e3s4) {
    return this.hw((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).iw = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).uq = function (_this__u8e3s4) {
    return this.iw((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).kt = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).jw = function (decoder, index, builder, checkIndex) {
    builder.mw(decoder.vn(this.bt_1, index));
  };
  protoOf(CharArraySerializer_0).fr = function (decoder, index, builder, checkIndex) {
    return this.jw(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).lt = function (decoder, index, builder, checkIndex) {
    return this.jw(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).nw = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ap(this.bt_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).mt = function (encoder, content, size) {
    return this.nw(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).qw = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).zr = function (_this__u8e3s4) {
    return this.qw((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).rw = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).uq = function (_this__u8e3s4) {
    return this.rw((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).kt = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).sw = function (decoder, index, builder, checkIndex) {
    builder.vw(decoder.un(this.bt_1, index));
  };
  protoOf(DoubleArraySerializer_0).fr = function (decoder, index, builder, checkIndex) {
    return this.sw(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).lt = function (decoder, index, builder, checkIndex) {
    return this.sw(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).ww = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.zo(this.bt_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).mt = function (encoder, content, size) {
    return this.ww(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).zw = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).zr = function (_this__u8e3s4) {
    return this.zw((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).ax = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).uq = function (_this__u8e3s4) {
    return this.ax((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).kt = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).bx = function (decoder, index, builder, checkIndex) {
    builder.ex(decoder.tn(this.bt_1, index));
  };
  protoOf(FloatArraySerializer_0).fr = function (decoder, index, builder, checkIndex) {
    return this.bx(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).lt = function (decoder, index, builder, checkIndex) {
    return this.bx(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).fx = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.yo(this.bt_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).mt = function (encoder, content, size) {
    return this.fx(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_3()));
  }
  protoOf(LongArraySerializer_0).ix = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).zr = function (_this__u8e3s4) {
    return this.ix((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).jx = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).uq = function (_this__u8e3s4) {
    return this.jx((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).kt = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).kx = function (decoder, index, builder, checkIndex) {
    builder.nx(decoder.sn(this.bt_1, index));
  };
  protoOf(LongArraySerializer_0).fr = function (decoder, index, builder, checkIndex) {
    return this.kx(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).lt = function (decoder, index, builder, checkIndex) {
    return this.kx(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).ox = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.xo(this.bt_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).mt = function (encoder, content, size) {
    return this.ox(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_4()));
  }
  protoOf(ULongArraySerializer_0).rx = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).zr = function (_this__u8e3s4) {
    return this.rx(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.sj_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).sx = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).uq = function (_this__u8e3s4) {
    return this.sx(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.sj_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).tx = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).kt = function () {
    return new ULongArray(this.tx());
  };
  protoOf(ULongArraySerializer_0).ux = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.xn(this.bt_1, index).dn();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.xx(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).fr = function (decoder, index, builder, checkIndex) {
    return this.ux(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).lt = function (decoder, index, builder, checkIndex) {
    return this.ux(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).yx = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.cp(this.bt_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.mo(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).mt = function (encoder, content, size) {
    return this.yx(encoder, content instanceof ULongArray ? content.sj_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).by = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).zr = function (_this__u8e3s4) {
    return this.by((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).cy = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).uq = function (_this__u8e3s4) {
    return this.cy((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).kt = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).dy = function (decoder, index, builder, checkIndex) {
    builder.gy(decoder.rn(this.bt_1, index));
  };
  protoOf(IntArraySerializer_0).fr = function (decoder, index, builder, checkIndex) {
    return this.dy(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).lt = function (decoder, index, builder, checkIndex) {
    return this.dy(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).hy = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.wo(this.bt_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).mt = function (encoder, content, size) {
    return this.hy(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_getInstance_5()));
  }
  protoOf(UIntArraySerializer_0).ky = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).zr = function (_this__u8e3s4) {
    return this.ky(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.hj_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).ly = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).uq = function (_this__u8e3s4) {
    return this.ly(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.hj_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).my = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).kt = function () {
    return new UIntArray(this.my());
  };
  protoOf(UIntArraySerializer_0).ny = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.xn(this.bt_1, index).cn();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.qy(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).fr = function (decoder, index, builder, checkIndex) {
    return this.ny(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).lt = function (decoder, index, builder, checkIndex) {
    return this.ny(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).ry = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.cp(this.bt_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.lo(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).mt = function (encoder, content, size) {
    return this.ry(encoder, content instanceof UIntArray ? content.hj_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).uy = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).zr = function (_this__u8e3s4) {
    return this.uy((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).vy = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).uq = function (_this__u8e3s4) {
    return this.vy((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).kt = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).wy = function (decoder, index, builder, checkIndex) {
    builder.zy(decoder.qn(this.bt_1, index));
  };
  protoOf(ShortArraySerializer_0).fr = function (decoder, index, builder, checkIndex) {
    return this.wy(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).lt = function (decoder, index, builder, checkIndex) {
    return this.wy(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).az = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.vo(this.bt_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).mt = function (encoder, content, size) {
    return this.az(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_6()));
  }
  protoOf(UShortArraySerializer_0).dz = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).zr = function (_this__u8e3s4) {
    return this.dz(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.dk_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).ez = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).uq = function (_this__u8e3s4) {
    return this.ez(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.dk_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).fz = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).kt = function () {
    return new UShortArray(this.fz());
  };
  protoOf(UShortArraySerializer_0).gz = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.xn(this.bt_1, index).bn();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.jz(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).fr = function (decoder, index, builder, checkIndex) {
    return this.gz(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).lt = function (decoder, index, builder, checkIndex) {
    return this.gz(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).kz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.cp(this.bt_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.ko(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).mt = function (encoder, content, size) {
    return this.kz(encoder, content instanceof UShortArray ? content.dk_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).nz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).zr = function (_this__u8e3s4) {
    return this.nz((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).oz = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).uq = function (_this__u8e3s4) {
    return this.oz((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).kt = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).pz = function (decoder, index, builder, checkIndex) {
    builder.sz(decoder.pn(this.bt_1, index));
  };
  protoOf(ByteArraySerializer_0).fr = function (decoder, index, builder, checkIndex) {
    return this.pz(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).lt = function (decoder, index, builder, checkIndex) {
    return this.pz(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).tz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.uo(this.bt_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).mt = function (encoder, content, size) {
    return this.tz(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_7()));
  }
  protoOf(UByteArraySerializer_0).wz = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).zr = function (_this__u8e3s4) {
    return this.wz(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.wi_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).xz = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).uq = function (_this__u8e3s4) {
    return this.xz(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.wi_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).yz = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).kt = function () {
    return new UByteArray(this.yz());
  };
  protoOf(UByteArraySerializer_0).zz = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.xn(this.bt_1, index).an();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.c10(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).fr = function (decoder, index, builder, checkIndex) {
    return this.zz(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).lt = function (decoder, index, builder, checkIndex) {
    return this.zz(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).d10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.cp(this.bt_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.jo(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).mt = function (encoder, content, size) {
    return this.d10(encoder, content instanceof UByteArray ? content.wi_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).g10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).zr = function (_this__u8e3s4) {
    return this.g10((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).h10 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).uq = function (_this__u8e3s4) {
    return this.h10((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).kt = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).i10 = function (decoder, index, builder, checkIndex) {
    builder.l10(decoder.on(this.bt_1, index));
  };
  protoOf(BooleanArraySerializer_0).fr = function (decoder, index, builder, checkIndex) {
    return this.i10(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).lt = function (decoder, index, builder, checkIndex) {
    return this.i10(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).m10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.to(this.bt_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).mt = function (encoder, content, size) {
    return this.m10(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.kw_1 = bufferWithData;
    this.lw_1 = bufferWithData.length;
    this.ht(10);
  }
  protoOf(CharArrayBuilder).dt = function () {
    return this.lw_1;
  };
  protoOf(CharArrayBuilder).ht = function (requiredCapacity) {
    if (this.kw_1.length < requiredCapacity)
      this.kw_1 = copyOf(this.kw_1, coerceAtLeast(requiredCapacity, imul(this.kw_1.length, 2)));
  };
  protoOf(CharArrayBuilder).mw = function (c) {
    this.ot();
    var tmp = this.kw_1;
    var _unary__edvuaz = this.lw_1;
    this.lw_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).ft = function () {
    return copyOf(this.kw_1, this.lw_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.tw_1 = bufferWithData;
    this.uw_1 = bufferWithData.length;
    this.ht(10);
  }
  protoOf(DoubleArrayBuilder).dt = function () {
    return this.uw_1;
  };
  protoOf(DoubleArrayBuilder).ht = function (requiredCapacity) {
    if (this.tw_1.length < requiredCapacity)
      this.tw_1 = copyOf_0(this.tw_1, coerceAtLeast(requiredCapacity, imul(this.tw_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).vw = function (c) {
    this.ot();
    var tmp = this.tw_1;
    var _unary__edvuaz = this.uw_1;
    this.uw_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).ft = function () {
    return copyOf_0(this.tw_1, this.uw_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.cx_1 = bufferWithData;
    this.dx_1 = bufferWithData.length;
    this.ht(10);
  }
  protoOf(FloatArrayBuilder).dt = function () {
    return this.dx_1;
  };
  protoOf(FloatArrayBuilder).ht = function (requiredCapacity) {
    if (this.cx_1.length < requiredCapacity)
      this.cx_1 = copyOf_1(this.cx_1, coerceAtLeast(requiredCapacity, imul(this.cx_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).ex = function (c) {
    this.ot();
    var tmp = this.cx_1;
    var _unary__edvuaz = this.dx_1;
    this.dx_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).ft = function () {
    return copyOf_1(this.cx_1, this.dx_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.lx_1 = bufferWithData;
    this.mx_1 = bufferWithData.length;
    this.ht(10);
  }
  protoOf(LongArrayBuilder).dt = function () {
    return this.mx_1;
  };
  protoOf(LongArrayBuilder).ht = function (requiredCapacity) {
    if (this.lx_1.length < requiredCapacity)
      this.lx_1 = copyOf_2(this.lx_1, coerceAtLeast(requiredCapacity, imul(this.lx_1.length, 2)));
  };
  protoOf(LongArrayBuilder).nx = function (c) {
    this.ot();
    var tmp = this.lx_1;
    var _unary__edvuaz = this.mx_1;
    this.mx_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).ft = function () {
    return copyOf_2(this.lx_1, this.mx_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.vx_1 = bufferWithData;
    this.wx_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.ht(10);
  }
  protoOf(ULongArrayBuilder).dt = function () {
    return this.wx_1;
  };
  protoOf(ULongArrayBuilder).ht = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.vx_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.vx_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.vx_1), 2));
      tmp.vx_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).xx = function (c) {
    this.ot();
    var tmp = this.vx_1;
    var _unary__edvuaz = this.wx_1;
    this.wx_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).n10 = function () {
    var tmp0 = this.vx_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.wx_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).ft = function () {
    return new ULongArray(this.n10());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ey_1 = bufferWithData;
    this.fy_1 = bufferWithData.length;
    this.ht(10);
  }
  protoOf(IntArrayBuilder).dt = function () {
    return this.fy_1;
  };
  protoOf(IntArrayBuilder).ht = function (requiredCapacity) {
    if (this.ey_1.length < requiredCapacity)
      this.ey_1 = copyOf_3(this.ey_1, coerceAtLeast(requiredCapacity, imul(this.ey_1.length, 2)));
  };
  protoOf(IntArrayBuilder).gy = function (c) {
    this.ot();
    var tmp = this.ey_1;
    var _unary__edvuaz = this.fy_1;
    this.fy_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).ft = function () {
    return copyOf_3(this.ey_1, this.fy_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.oy_1 = bufferWithData;
    this.py_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.ht(10);
  }
  protoOf(UIntArrayBuilder).dt = function () {
    return this.py_1;
  };
  protoOf(UIntArrayBuilder).ht = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.oy_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.oy_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.oy_1), 2));
      tmp.oy_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).qy = function (c) {
    this.ot();
    var tmp = this.oy_1;
    var _unary__edvuaz = this.py_1;
    this.py_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).o10 = function () {
    var tmp0 = this.oy_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.py_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).ft = function () {
    return new UIntArray(this.o10());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.xy_1 = bufferWithData;
    this.yy_1 = bufferWithData.length;
    this.ht(10);
  }
  protoOf(ShortArrayBuilder).dt = function () {
    return this.yy_1;
  };
  protoOf(ShortArrayBuilder).ht = function (requiredCapacity) {
    if (this.xy_1.length < requiredCapacity)
      this.xy_1 = copyOf_4(this.xy_1, coerceAtLeast(requiredCapacity, imul(this.xy_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).zy = function (c) {
    this.ot();
    var tmp = this.xy_1;
    var _unary__edvuaz = this.yy_1;
    this.yy_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).ft = function () {
    return copyOf_4(this.xy_1, this.yy_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.hz_1 = bufferWithData;
    this.iz_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.ht(10);
  }
  protoOf(UShortArrayBuilder).dt = function () {
    return this.iz_1;
  };
  protoOf(UShortArrayBuilder).ht = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.hz_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.hz_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.hz_1), 2));
      tmp.hz_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).jz = function (c) {
    this.ot();
    var tmp = this.hz_1;
    var _unary__edvuaz = this.iz_1;
    this.iz_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).p10 = function () {
    var tmp0 = this.hz_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.iz_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).ft = function () {
    return new UShortArray(this.p10());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.qz_1 = bufferWithData;
    this.rz_1 = bufferWithData.length;
    this.ht(10);
  }
  protoOf(ByteArrayBuilder).dt = function () {
    return this.rz_1;
  };
  protoOf(ByteArrayBuilder).ht = function (requiredCapacity) {
    if (this.qz_1.length < requiredCapacity)
      this.qz_1 = copyOf_5(this.qz_1, coerceAtLeast(requiredCapacity, imul(this.qz_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).sz = function (c) {
    this.ot();
    var tmp = this.qz_1;
    var _unary__edvuaz = this.rz_1;
    this.rz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).ft = function () {
    return copyOf_5(this.qz_1, this.rz_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a10_1 = bufferWithData;
    this.b10_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.ht(10);
  }
  protoOf(UByteArrayBuilder).dt = function () {
    return this.b10_1;
  };
  protoOf(UByteArrayBuilder).ht = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.a10_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.a10_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.a10_1), 2));
      tmp.a10_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).c10 = function (c) {
    this.ot();
    var tmp = this.a10_1;
    var _unary__edvuaz = this.b10_1;
    this.b10_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).q10 = function () {
    var tmp0 = this.a10_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.b10_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).ft = function () {
    return new UByteArray(this.q10());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.j10_1 = bufferWithData;
    this.k10_1 = bufferWithData.length;
    this.ht(10);
  }
  protoOf(BooleanArrayBuilder).dt = function () {
    return this.k10_1;
  };
  protoOf(BooleanArrayBuilder).ht = function (requiredCapacity) {
    if (this.j10_1.length < requiredCapacity)
      this.j10_1 = copyOf_6(this.j10_1, coerceAtLeast(requiredCapacity, imul(this.j10_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).l10 = function (c) {
    this.ot();
    var tmp = this.j10_1;
    var _unary__edvuaz = this.k10_1;
    this.k10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).ft = function () {
    return copyOf_6(this.j10_1, this.k10_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().i2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.r10_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).fk = function () {
    return this.r10_1;
  };
  protoOf(StringSerializer).s10 = function (encoder, value) {
    return encoder.qo(value);
  };
  protoOf(StringSerializer).gk = function (encoder, value) {
    return this.s10(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).hk = function (decoder) {
    return decoder.hn();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.t10_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).fk = function () {
    return this.t10_1;
  };
  protoOf(CharSerializer).u10 = function (encoder, value) {
    return encoder.po(value);
  };
  protoOf(CharSerializer).gk = function (encoder, value) {
    return this.u10(encoder, value instanceof Char ? value.j1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).v10 = function (decoder) {
    return decoder.gn();
  };
  protoOf(CharSerializer).hk = function (decoder) {
    return new Char(this.v10(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.w10_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).fk = function () {
    return this.w10_1;
  };
  protoOf(DoubleSerializer).x10 = function (encoder, value) {
    return encoder.oo(value);
  };
  protoOf(DoubleSerializer).gk = function (encoder, value) {
    return this.x10(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).hk = function (decoder) {
    return decoder.fn();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.y10_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).fk = function () {
    return this.y10_1;
  };
  protoOf(FloatSerializer).z10 = function (encoder, value) {
    return encoder.no(value);
  };
  protoOf(FloatSerializer).gk = function (encoder, value) {
    return this.z10(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).hk = function (decoder) {
    return decoder.en();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.a11_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).fk = function () {
    return this.a11_1;
  };
  protoOf(LongSerializer).b11 = function (encoder, value) {
    return encoder.mo(value);
  };
  protoOf(LongSerializer).gk = function (encoder, value) {
    return this.b11(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).hk = function (decoder) {
    return decoder.dn();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.c11_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).fk = function () {
    return this.c11_1;
  };
  protoOf(IntSerializer).d11 = function (encoder, value) {
    return encoder.lo(value);
  };
  protoOf(IntSerializer).gk = function (encoder, value) {
    return this.d11(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).hk = function (decoder) {
    return decoder.cn();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.e11_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).fk = function () {
    return this.e11_1;
  };
  protoOf(ShortSerializer).f11 = function (encoder, value) {
    return encoder.ko(value);
  };
  protoOf(ShortSerializer).gk = function (encoder, value) {
    return this.f11(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).hk = function (decoder) {
    return decoder.bn();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.g11_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).fk = function () {
    return this.g11_1;
  };
  protoOf(ByteSerializer).h11 = function (encoder, value) {
    return encoder.jo(value);
  };
  protoOf(ByteSerializer).gk = function (encoder, value) {
    return this.h11(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).hk = function (decoder) {
    return decoder.an();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.i11_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).fk = function () {
    return this.i11_1;
  };
  protoOf(BooleanSerializer).j11 = function (encoder, value) {
    return encoder.io(value);
  };
  protoOf(BooleanSerializer).gk = function (encoder, value) {
    return this.j11(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).hk = function (decoder) {
    return decoder.zm();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.k11_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).fk = function () {
    return this.k11_1.fk();
  };
  protoOf(UnitSerializer).l11 = function (encoder, value) {
    this.k11_1.vk(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).gk = function (encoder, value) {
    return this.l11(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).m11 = function (decoder) {
    this.k11_1.hk(decoder);
  };
  protoOf(UnitSerializer).hk = function (decoder) {
    this.m11(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.n11_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.n11_1 = serialName;
    this.o11_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).fl = function () {
    return this.n11_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).ql = function () {
    return this.o11_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).sl = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).ul = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).vl = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).yl = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).xl = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).wl = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.n11_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.n11_1 === other.n11_1 && equals(this.o11_1, other.o11_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.n11_1) + imul(31, this.o11_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().k2();
    var _iterator__ex2g4s = values.j();
    while (_iterator__ex2g4s.k()) {
      var primitive = _iterator__ex2g4s.l();
      var primitiveName = primitive.fk().fl();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).ha() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).r11 = function (_this__u8e3s4, index) {
    return this.t11(this.s11(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).t11 = function (nestedName) {
    var tmp0_elvis_lhs = this.w11();
    return this.x11(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).s11 = function (descriptor, index) {
    return descriptor.ul(index);
  };
  protoOf(NamedValueDecoder).x11 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).y11 = function () {
    return this.u11_1.p() ? '$' : joinToString(this.u11_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.m12(tag);
    var r = block();
    if (!$this.v11_1) {
      $this.n12();
    }
    $this.v11_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.kn($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.fk().ml();
      var tmp;
      if (isNullabilitySupported || tmp0.xm()) {
        tmp = this$0.kn($deserializer, $previousValue);
      } else {
        tmp = tmp0.ym();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.u11_1 = ArrayList_init_$Create$_0();
    this.v11_1 = false;
  }
  protoOf(TaggedDecoder).bo = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).z11 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).a12 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).b12 = function (tag) {
    var tmp = this.z11(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).c12 = function (tag) {
    var tmp = this.z11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).d12 = function (tag) {
    var tmp = this.z11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).e12 = function (tag) {
    var tmp = this.z11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).f12 = function (tag) {
    var tmp = this.z11(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).g12 = function (tag) {
    var tmp = this.z11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).h12 = function (tag) {
    var tmp = this.z11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).i12 = function (tag) {
    var tmp = this.z11(tag);
    return tmp instanceof Char ? tmp.j1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).j12 = function (tag) {
    var tmp = this.z11(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).k12 = function (tag, enumDescriptor) {
    var tmp = this.z11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).l12 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.m12(tag);
    return this;
  };
  protoOf(TaggedDecoder).kn = function (deserializer, previousValue) {
    return this.ln(deserializer);
  };
  protoOf(TaggedDecoder).jn = function (descriptor) {
    return this.l12(this.n12(), descriptor);
  };
  protoOf(TaggedDecoder).xm = function () {
    var tmp0_elvis_lhs = this.w11();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.a12(currentTag);
  };
  protoOf(TaggedDecoder).ym = function () {
    return null;
  };
  protoOf(TaggedDecoder).zm = function () {
    return this.b12(this.n12());
  };
  protoOf(TaggedDecoder).an = function () {
    return this.c12(this.n12());
  };
  protoOf(TaggedDecoder).bn = function () {
    return this.d12(this.n12());
  };
  protoOf(TaggedDecoder).cn = function () {
    return this.e12(this.n12());
  };
  protoOf(TaggedDecoder).dn = function () {
    return this.f12(this.n12());
  };
  protoOf(TaggedDecoder).en = function () {
    return this.g12(this.n12());
  };
  protoOf(TaggedDecoder).fn = function () {
    return this.h12(this.n12());
  };
  protoOf(TaggedDecoder).gn = function () {
    return this.i12(this.n12());
  };
  protoOf(TaggedDecoder).hn = function () {
    return this.j12(this.n12());
  };
  protoOf(TaggedDecoder).in = function (enumDescriptor) {
    return this.k12(this.n12(), enumDescriptor);
  };
  protoOf(TaggedDecoder).mn = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).nn = function (descriptor) {
  };
  protoOf(TaggedDecoder).on = function (descriptor, index) {
    return this.b12(this.r11(descriptor, index));
  };
  protoOf(TaggedDecoder).pn = function (descriptor, index) {
    return this.c12(this.r11(descriptor, index));
  };
  protoOf(TaggedDecoder).qn = function (descriptor, index) {
    return this.d12(this.r11(descriptor, index));
  };
  protoOf(TaggedDecoder).rn = function (descriptor, index) {
    return this.e12(this.r11(descriptor, index));
  };
  protoOf(TaggedDecoder).sn = function (descriptor, index) {
    return this.f12(this.r11(descriptor, index));
  };
  protoOf(TaggedDecoder).tn = function (descriptor, index) {
    return this.g12(this.r11(descriptor, index));
  };
  protoOf(TaggedDecoder).un = function (descriptor, index) {
    return this.h12(this.r11(descriptor, index));
  };
  protoOf(TaggedDecoder).vn = function (descriptor, index) {
    return this.i12(this.r11(descriptor, index));
  };
  protoOf(TaggedDecoder).wn = function (descriptor, index) {
    return this.j12(this.r11(descriptor, index));
  };
  protoOf(TaggedDecoder).xn = function (descriptor, index) {
    return this.l12(this.r11(descriptor, index), descriptor.xl(index));
  };
  protoOf(TaggedDecoder).yn = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.r11(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).ao = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.r11(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).w11 = function () {
    return lastOrNull(this.u11_1);
  };
  protoOf(TaggedDecoder).m12 = function (name) {
    this.u11_1.e(name);
  };
  protoOf(TaggedDecoder).n12 = function () {
    var r = this.u11_1.d2(get_lastIndex_0(this.u11_1));
    this.v11_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.o12_1 = key;
    this.p12_1 = value;
  }
  protoOf(MapEntry).e2 = function () {
    return this.o12_1;
  };
  protoOf(MapEntry).f2 = function () {
    return this.p12_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.o12_1) + ', value=' + toString_0(this.p12_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.o12_1 == null ? 0 : hashCode(this.o12_1);
    result = imul(result, 31) + (this.p12_1 == null ? 0 : hashCode(this.p12_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.o12_1, tmp0_other_with_cast.o12_1))
      return false;
    if (!equals(this.p12_1, tmp0_other_with_cast.p12_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.qk('key', $keySerializer.fk());
      $this$buildSerialDescriptor.qk('value', $valueSerializer.fk());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.s12_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).fk = function () {
    return this.s12_1;
  };
  protoOf(MapEntrySerializer_0).t12 = function (_this__u8e3s4) {
    return _this__u8e3s4.e2();
  };
  protoOf(MapEntrySerializer_0).u12 = function (_this__u8e3s4) {
    return this.t12((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).v12 = function (_this__u8e3s4) {
    return _this__u8e3s4.f2();
  };
  protoOf(MapEntrySerializer_0).w12 = function (_this__u8e3s4) {
    return this.v12((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).x12 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.qk('first', $keySerializer.fk());
      $this$buildClassSerialDescriptor.qk('second', $valueSerializer.fk());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.d13_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).fk = function () {
    return this.d13_1;
  };
  protoOf(PairSerializer_0).e13 = function (_this__u8e3s4) {
    return _this__u8e3s4.qd_1;
  };
  protoOf(PairSerializer_0).u12 = function (_this__u8e3s4) {
    return this.e13(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).f13 = function (_this__u8e3s4) {
    return _this__u8e3s4.rd_1;
  };
  protoOf(PairSerializer_0).w12 = function (_this__u8e3s4) {
    return this.f13(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).x12 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.zn($this.j13_1, 0, $this.g13_1);
    var b = composite.zn($this.j13_1, 1, $this.h13_1);
    var c = composite.zn($this.j13_1, 2, $this.i13_1);
    composite.nn($this.j13_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.do($this.j13_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.zn($this.j13_1, 0, $this.g13_1);
          break;
        case 1:
          b = composite.zn($this.j13_1, 1, $this.h13_1);
          break;
        case 2:
          c = composite.zn($this.j13_1, 2, $this.i13_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.nn($this.j13_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : !(b == null)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : !(c == null)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.qk('first', this$0.g13_1.fk());
      $this$buildClassSerialDescriptor.qk('second', this$0.h13_1.fk());
      $this$buildClassSerialDescriptor.qk('third', this$0.i13_1.fk());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.g13_1 = aSerializer;
    this.h13_1 = bSerializer;
    this.i13_1 = cSerializer;
    var tmp = this;
    tmp.j13_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).fk = function () {
    return this.j13_1;
  };
  protoOf(TripleSerializer_0).k13 = function (encoder, value) {
    var structuredEncoder = encoder.mn(this.j13_1);
    structuredEncoder.dp(this.j13_1, 0, this.g13_1, value.ci_1);
    structuredEncoder.dp(this.j13_1, 1, this.h13_1, value.di_1);
    structuredEncoder.dp(this.j13_1, 2, this.i13_1, value.ei_1);
    structuredEncoder.nn(this.j13_1);
  };
  protoOf(TripleSerializer_0).gk = function (encoder, value) {
    return this.k13(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).hk = function (decoder) {
    var composite = decoder.mn(this.j13_1);
    if (composite.co()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.y12_1 = keySerializer;
    this.z12_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).a13 = function (encoder, value) {
    var structuredEncoder = encoder.mn(this.fk());
    structuredEncoder.dp(this.fk(), 0, this.y12_1, this.u12(value));
    structuredEncoder.dp(this.fk(), 1, this.z12_1, this.w12(value));
    structuredEncoder.nn(this.fk());
  };
  protoOf(KeyValueSerializer).gk = function (encoder, value) {
    return this.a13(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).hk = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.fk();
    var composite = decoder.mn(descriptor);
    var tmp$ret$0;
    $l$block: {
      if (composite.co()) {
        var key = composite.zn(this.fk(), 0, this.y12_1);
        var value = composite.zn(this.fk(), 1, this.z12_1);
        tmp$ret$0 = this.x12(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.do(this.fk());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.zn(this.fk(), 0, this.y12_1);
            break;
          case 1:
            value_0 = composite.zn(this.fk(), 1, this.z12_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      var tmp = (key_0 == null ? true : !(key_0 == null)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.x12(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.nn(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.l13_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_3()));
  }
  protoOf(ULongSerializer).fk = function () {
    return this.l13_1;
  };
  protoOf(ULongSerializer).m13 = function (encoder, value) {
    var tmp = encoder.so(this.l13_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.mo(tmp$ret$0);
  };
  protoOf(ULongSerializer).gk = function (encoder, value) {
    return this.m13(encoder, value instanceof ULong ? value.nj_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).n13 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.jn(this.l13_1).dn();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).hk = function (decoder) {
    return new ULong(this.n13(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.o13_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).fk = function () {
    return this.o13_1;
  };
  protoOf(UIntSerializer).p13 = function (encoder, value) {
    var tmp = encoder.so(this.o13_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.lo(tmp$ret$0);
  };
  protoOf(UIntSerializer).gk = function (encoder, value) {
    return this.p13(encoder, value instanceof UInt ? value.cj_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).q13 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.jn(this.o13_1).cn();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).hk = function (decoder) {
    return new UInt(this.q13(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.r13_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).fk = function () {
    return this.r13_1;
  };
  protoOf(UShortSerializer).s13 = function (encoder, value) {
    var tmp = encoder.so(this.r13_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.ko(tmp$ret$0);
  };
  protoOf(UShortSerializer).gk = function (encoder, value) {
    return this.s13(encoder, value instanceof UShort ? value.yj_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).t13 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.jn(this.r13_1).bn();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).hk = function (decoder) {
    return new UShort(this.t13(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.u13_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_10(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).fk = function () {
    return this.u13_1;
  };
  protoOf(UByteSerializer).v13 = function (encoder, value) {
    var tmp = encoder.so(this.u13_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.jo(tmp$ret$0);
  };
  protoOf(UByteSerializer).gk = function (encoder, value) {
    return this.v13(encoder, value instanceof UByte ? value.ri_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).w13 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.jn(this.u13_1).an();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).hk = function (decoder) {
    return new UByte(this.w13(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).il = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.jl(kClass, typeArgumentsSerializers) : $super.jl.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.x13_1 = class2ContextualFactory;
    this.y13_1 = polyBase2Serializers;
    this.z13_1 = polyBase2DefaultSerializerProvider;
    this.a14_1 = polyBase2NamedSerializers;
    this.b14_1 = polyBase2DefaultDeserializerProvider;
    this.c14_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).hl = function () {
    return this.c14_1;
  };
  protoOf(SerialModuleImpl).lp = function (baseClass, value) {
    if (!baseClass.ia(value))
      return null;
    var tmp0_safe_receiver = this.y13_1.i2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.z13_1.i2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).kp = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.a14_1.i2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).i2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.b14_1.i2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).jl = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.x13_1.i2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d14(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializableWith(serializer) {
    this.e14_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.e14_1.equals(tmp0_other_with_cast.e14_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.e14_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.e14_1) + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function isInterface_0(_this__u8e3s4) {
    return get_isInterfaceHack(_this__u8e3s4);
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().gb(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_1(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().jb(), CharArraySerializer()), to(PrimitiveClasses_getInstance().eb(), serializer_2(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().pb(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().db(), serializer_3(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().ob(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance_3())), to(PrimitiveClasses_getInstance().nb(), LongArraySerializer()), to(getKClass(ULong), serializer_5(Companion_getInstance_4())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().cb(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().mb(), IntArraySerializer()), to(getKClass(UInt), serializer_7(Companion_getInstance_5())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().bb(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().lb(), ShortArraySerializer()), to(getKClass(UShort), serializer_9(Companion_getInstance_6())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().ab(), serializer_10(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().kb(), ByteArraySerializer()), to(getKClass(UByte), serializer_11(Companion_getInstance_7())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().za(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().ib(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().ya(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().ya())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().ya()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().fb());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = isInterface(assocObject, KSerializer) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.ew(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function createCache$1($factory) {
    this.f14_1 = $factory;
  }
  protoOf(createCache$1).kl = function (key) {
    return this.f14_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.g14_1 = $factory;
  }
  protoOf(createParametrizedCache$1).ll = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.g14_1(key, types);
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
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).ml = get_isNullable;
  protoOf(SerialDescriptorImpl).rl = get_isInline;
  protoOf(AbstractDecoder).zn = decodeSerializableElement$default;
  protoOf(AbstractDecoder).ln = decodeSerializableValue;
  protoOf(AbstractDecoder).co = decodeSequentially;
  protoOf(AbstractDecoder).eo = decodeCollectionSize;
  protoOf(AbstractEncoder).hp = encodeNotNullMark;
  protoOf(AbstractEncoder).ip = beginCollection;
  protoOf(AbstractEncoder).ep = encodeSerializableValue;
  protoOf(AbstractEncoder).gp = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).jp = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).ml = get_isNullable;
  protoOf(ListLikeDescriptor).rl = get_isInline;
  protoOf(ListLikeDescriptor).tl = get_annotations;
  protoOf(MapLikeDescriptor).ml = get_isNullable;
  protoOf(MapLikeDescriptor).rl = get_isInline;
  protoOf(MapLikeDescriptor).tl = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).ml = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).rl = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).sv = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).ml = get_isNullable;
  protoOf(NothingSerialDescriptor).rl = get_isInline;
  protoOf(NothingSerialDescriptor).tl = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).ml = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).rl = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).tl = get_annotations;
  protoOf(TaggedDecoder).zn = decodeSerializableElement$default;
  protoOf(TaggedDecoder).ln = decodeSerializableValue;
  protoOf(TaggedDecoder).co = decodeSequentially;
  protoOf(TaggedDecoder).eo = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ObjectSerializer_init_$Create$;
  _.$_$.b = SealedClassSerializer_init_$Create$;
  _.$_$.c = SerializationException_init_$Init$_0;
  _.$_$.d = SerializationException_init_$Create$_0;
  _.$_$.e = UnknownFieldException_init_$Create$;
  _.$_$.f = SEALED_getInstance;
  _.$_$.g = STRING_getInstance;
  _.$_$.h = CONTEXTUAL_getInstance;
  _.$_$.i = ENUM_getInstance;
  _.$_$.j = CLASS_getInstance;
  _.$_$.k = LIST_getInstance;
  _.$_$.l = MAP_getInstance;
  _.$_$.m = OBJECT_getInstance;
  _.$_$.n = BooleanSerializer_getInstance;
  _.$_$.o = IntSerializer_getInstance;
  _.$_$.p = StringSerializer_getInstance;
  _.$_$.q = ListSerializer;
  _.$_$.r = MapSerializer;
  _.$_$.s = get_nullable;
  _.$_$.t = serializer_0;
  _.$_$.u = serializer_9;
  _.$_$.v = serializer_7;
  _.$_$.w = serializer_11;
  _.$_$.x = serializer_5;
  _.$_$.y = PolymorphicKind;
  _.$_$.z = PrimitiveKind;
  _.$_$.a1 = PrimitiveSerialDescriptor;
  _.$_$.b1 = get_annotations;
  _.$_$.c1 = get_isInline;
  _.$_$.d1 = get_isNullable;
  _.$_$.e1 = SerialDescriptor;
  _.$_$.f1 = ENUM;
  _.$_$.g1 = buildSerialDescriptor;
  _.$_$.h1 = getContextualDescriptor;
  _.$_$.i1 = AbstractDecoder;
  _.$_$.j1 = AbstractEncoder;
  _.$_$.k1 = CompositeDecoder;
  _.$_$.l1 = CompositeEncoder;
  _.$_$.m1 = Decoder;
  _.$_$.n1 = Encoder;
  _.$_$.o1 = AbstractPolymorphicSerializer;
  _.$_$.p1 = ArrayListSerializer;
  _.$_$.q1 = ElementMarker;
  _.$_$.r1 = typeParametersSerializers;
  _.$_$.s1 = GeneratedSerializer;
  _.$_$.t1 = InlinePrimitiveDescriptor;
  _.$_$.u1 = LinkedHashMapSerializer;
  _.$_$.v1 = LinkedHashSetSerializer;
  _.$_$.w1 = NamedValueDecoder;
  _.$_$.x1 = PluginGeneratedSerialDescriptor;
  _.$_$.y1 = SerializerFactory;
  _.$_$.z1 = createSimpleEnumSerializer;
  _.$_$.a2 = jsonCachedSerialNames;
  _.$_$.b2 = throwMissingFieldException;
  _.$_$.c2 = EmptySerializersModule_0;
  _.$_$.d2 = DeserializationStrategy;
  _.$_$.e2 = KSerializer;
  _.$_$.f2 = MissingFieldException;
  _.$_$.g2 = SealedClassSerializer;
  _.$_$.h2 = SerializationException;
  _.$_$.i2 = SerializationStrategy;
  _.$_$.j2 = findPolymorphicSerializer_0;
  _.$_$.k2 = findPolymorphicSerializer;
  _.$_$.l2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
