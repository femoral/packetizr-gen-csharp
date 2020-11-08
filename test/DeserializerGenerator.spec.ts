import * as fs from "fs";
import { TemplateContainerFixture } from "./TemplateContainer.fixture";
import { PacketFixture } from "./fixture/Packet.fixture";
import { DeserializerGenerator } from "../src/DeserializerGenerator";
import { TypeSchemaFixture } from "./fixture/TypeSchema.fixture";

describe("generate is called with packet", () => {
  it("should return SourceFile with serializer name and content, given packet has upper case packet name and fields", () => {
    let deserializerGenerator = new DeserializerGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(
        `${__dirname}/fixture/files/TestMessagePacketDeserializer.cs`
      )
      .toString();

    let file = deserializerGenerator.generate(
      PacketFixture.buildWithAllFieldsAndUpperCaseFirstCharacter()
    );

    expect(file.name).toEqual("TestMessagePacketDeserializer.cs");
    expect(file.content).toEqual(expectedFileContent);
  });

  it("should return SourceFile with serializer name and content, given packet has lower case packet name and fields", () => {
    let deserializerGenerator = new DeserializerGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(
        `${__dirname}/fixture/files/TestMessagePacketDeserializer.cs`
      )
      .toString();

    let file = deserializerGenerator.generate(
      PacketFixture.buildWithAllFieldsAndLowerCaseFirstCharacter()
    );

    expect(file.name).toEqual("TestMessagePacketDeserializer.cs");
    expect(file.content).toEqual(expectedFileContent);
  });
});

describe("generate is called with packet", () => {
  it("should return SourceFile with serializer name and content, given packet has upper case packet name and fields", () => {
    let deserializerGenerator = new DeserializerGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(
        `${__dirname}/fixture/files/TestMessagePacketDeserializer.cs`
      )
      .toString();

    let file = deserializerGenerator.generate(
      PacketFixture.buildWithAllFieldsAndUpperCaseFirstCharacter()
    );

    expect(file.name).toEqual("TestMessagePacketDeserializer.cs");
    expect(file.content).toEqual(expectedFileContent);
  });

  it("should return SourceFile with serializer name and content, given packet has lower case packet name and fields", () => {
    let deserializerGenerator = new DeserializerGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(
        `${__dirname}/fixture/files/TestMessagePacketDeserializer.cs`
      )
      .toString();

    let file = deserializerGenerator.generate(
      PacketFixture.buildWithAllFieldsAndLowerCaseFirstCharacter()
    );

    expect(file.name).toEqual("TestMessagePacketDeserializer.cs");
    expect(file.content).toEqual(expectedFileContent);
  });
});

describe("generate is called with TypeSchema", () => {
  it("Should return SourceFile with class deserializer containing schema fields, given schema has upper case packet name and fields", () => {
    let deserializerGenerator = new DeserializerGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(
        `${__dirname}/fixture/files/CustomTypeDtoPacketDeserializer.cs`
      )
      .toString();
    let file = deserializerGenerator.generate(
      TypeSchemaFixture.buildCustomType()
    );

    expect(file.name).toEqual("CustomTypeDtoPacketDeserializer.cs");
    expect(file.content).toEqual(expectedFileContent);
  });

  it("Should return SourceFile with class deserializer containing schema fields, given schema has lower case packet name and fields", () => {
    let deserializerGenerator = new DeserializerGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(
        `${__dirname}/fixture/files/CustomTypeDtoPacketDeserializer.cs`
      )
      .toString();
    let file = deserializerGenerator.generate(
      TypeSchemaFixture.buildCustomType()
    );

    expect(file.name).toEqual("CustomTypeDtoPacketDeserializer.cs");
    expect(file.content).toEqual(expectedFileContent);
  });
});
