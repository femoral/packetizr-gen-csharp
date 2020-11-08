import * as fs from "fs";
import { TemplateContainerFixture } from "./TemplateContainer.fixture";
import { SerializerGenerator } from "../src/SerializerGenerator";
import { PacketFixture } from "./fixture/Packet.fixture";
import { TypeSchemaFixture } from "./fixture/TypeSchema.fixture";

describe("generate is called with packet", () => {
  it("should return SourceFile with serializer name and content, given packet has upper case packet name and fields", () => {
    let serializerGenerator = new SerializerGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(`${__dirname}/fixture/files/TestMessagePacketSerializer.cs`)
      .toString();

    let file = serializerGenerator.generate(
      PacketFixture.buildWithAllFieldsAndUpperCaseFirstCharacter()
    );

    expect(file.name).toEqual("TestMessagePacketSerializer.cs");
    expect(file.content).toEqual(expectedFileContent);
  });

  it("should return SourceFile with serializer name and content, given packet has lower case packet name and fields", () => {
    let serializerGenerator = new SerializerGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(`${__dirname}/fixture/files/TestMessagePacketSerializer.cs`)
      .toString();

    let file = serializerGenerator.generate(
      PacketFixture.buildWithAllFieldsAndLowerCaseFirstCharacter()
    );

    expect(file.name).toEqual("TestMessagePacketSerializer.cs");
    expect(file.content).toEqual(expectedFileContent);
  });
});

describe("generate is called with TypeSchema", () => {
  it("Should return SourceFile with class serializer containing schema fields, given schema has upper case packet name and fields", () => {
    let serializerGenerator = new SerializerGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(
        `${__dirname}/fixture/files/CustomTypeDtoPacketSerializer.cs`
      )
      .toString();
    let file = serializerGenerator.generate(
      TypeSchemaFixture.buildCustomType()
    );

    expect(file.name).toEqual("CustomTypeDtoPacketSerializer.cs");
    expect(file.content).toEqual(expectedFileContent);
  });

  it("Should return SourceFile with class serializer containing schema fields, given schema has lower case packet name and fields", () => {
    let serializerGenerator = new SerializerGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(
        `${__dirname}/fixture/files/CustomTypeDtoPacketSerializer.cs`
      )
      .toString();
    let file = serializerGenerator.generate(
      TypeSchemaFixture.buildCustomType()
    );

    expect(file.name).toEqual("CustomTypeDtoPacketSerializer.cs");
    expect(file.content).toEqual(expectedFileContent);
  });
});
