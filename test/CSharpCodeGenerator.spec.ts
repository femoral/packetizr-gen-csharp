import { deepEqual, instance, mock, when } from "ts-mockito";

import { CSharpSourceFileFixture } from "./CSharpSourceFile.fixture";
import { ContractFixture } from "./fixture/Contract.fixture";
import { SerializerGenerator } from "../src/SerializerGenerator";
import { DeserializerGenerator } from "../src/DeserializerGenerator";
import { BoilerplateGenerator } from "../src/BoilerplateGenerator";
import { ModelGenerator } from "../src/ModelGenerator";
import { CSharpCodeGenerator } from "../src/CSharpCodeGenerator";
import { PacketFixture } from "./fixture/Packet.fixture";
import { TypeSchemaFixture } from "./fixture/TypeSchema.fixture";

it("Should return an array of source files, when compile is called with contract without schemas", () => {
  let generator = setUp();

  let sourceFiles = generator.generate(ContractFixture.buildPlainContract());

  expect(sourceFiles.sort()).toEqual(
    CSharpSourceFileFixture.buildListOk().sort()
  );
});

it("Should return an array of source files, when compile is called with contract without schemas", () => {
  let generator = setUp();

  let sourceFiles = generator.generate(
    ContractFixture.buildContractWithCustomTypes()
  );

  expect(sourceFiles.sort()).toEqual(
    CSharpSourceFileFixture.buildListWithCustomTypes().sort()
  );
});

function setUp() {
  let serializerGeneratorMock = mock(SerializerGenerator);
  let deserializerGeneratorMock = mock(DeserializerGenerator);
  let boilerplateGeneratorMock = mock(BoilerplateGenerator);
  let modelGeneratorMock = mock(ModelGenerator);
  let generator = new CSharpCodeGenerator(
    instance(boilerplateGeneratorMock),
    instance(modelGeneratorMock),
    instance(serializerGeneratorMock),
    instance(deserializerGeneratorMock)
  );
  setupModelMocks(modelGeneratorMock);
  setupSerializerMocks(serializerGeneratorMock);
  setupBoilerplateMocks(boilerplateGeneratorMock);
  setupDeserializerMocks(deserializerGeneratorMock);
  return generator;
}

function setupModelMocks(modelGeneratorMock: ModelGenerator) {
  when(
    modelGeneratorMock.generate(
      deepEqual(PacketFixture.buildPacketWithNumbersOnly())
    )
  ).thenReturn(CSharpSourceFileFixture.buildPacket1Model());
  when(
    modelGeneratorMock.generate(
      deepEqual(PacketFixture.buildPacketWithStringsOnly())
    )
  ).thenReturn(CSharpSourceFileFixture.buildPacket2Model());

  when(
    modelGeneratorMock.generate(
      deepEqual(TypeSchemaFixture.buildStringsObjectSchema())
    )
  ).thenReturn(CSharpSourceFileFixture.buildStringsCustomTypeModel());
  when(
    modelGeneratorMock.generate(
      deepEqual(TypeSchemaFixture.buildNumbersObjectSchema())
    )
  ).thenReturn(CSharpSourceFileFixture.buildNumbersCustomTypeModel());
}

function setupSerializerMocks(serializerGeneratorMock: SerializerGenerator) {
  when(
    serializerGeneratorMock.generate(
      deepEqual(PacketFixture.buildPacketWithNumbersOnly())
    )
  ).thenReturn(CSharpSourceFileFixture.buildPacket1Serializer());
  when(
    serializerGeneratorMock.generate(
      deepEqual(PacketFixture.buildPacketWithStringsOnly())
    )
  ).thenReturn(CSharpSourceFileFixture.buildPacket2Serializer());

  when(
    serializerGeneratorMock.generate(
      deepEqual(TypeSchemaFixture.buildStringsObjectSchema())
    )
  ).thenReturn(CSharpSourceFileFixture.buildStringsCustomTypeSerializer());
  when(
    serializerGeneratorMock.generate(
      deepEqual(TypeSchemaFixture.buildNumbersObjectSchema())
    )
  ).thenReturn(CSharpSourceFileFixture.buildNumbersCustomTypeSerializer());
}

function setupDeserializerMocks(
  deserializerGeneratorMock: DeserializerGenerator
) {
  when(
    deserializerGeneratorMock.generate(
      deepEqual(PacketFixture.buildPacketWithNumbersOnly())
    )
  ).thenReturn(CSharpSourceFileFixture.buildPacket1Deserializer());
  when(
    deserializerGeneratorMock.generate(
      deepEqual(PacketFixture.buildPacketWithStringsOnly())
    )
  ).thenReturn(CSharpSourceFileFixture.buildPacket2Deserializer());

  when(
    deserializerGeneratorMock.generate(
      deepEqual(TypeSchemaFixture.buildStringsObjectSchema())
    )
  ).thenReturn(CSharpSourceFileFixture.buildStringsCustomTypeDeserializer());
  when(
    deserializerGeneratorMock.generate(
      deepEqual(TypeSchemaFixture.buildNumbersObjectSchema())
    )
  ).thenReturn(CSharpSourceFileFixture.buildNumbersCustomTypeDeserializer());
}

function setupBoilerplateMocks(boilerplateGeneratorMock: BoilerplateGenerator) {
  when(boilerplateGeneratorMock.generate()).thenReturn([
    CSharpSourceFileFixture.buildSerializerInterface(),
  ]);
}
