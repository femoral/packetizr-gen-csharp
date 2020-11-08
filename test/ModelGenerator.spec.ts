import * as fs from "fs";
import { TemplateContainerFixture } from "./TemplateContainer.fixture";
import { ModelGenerator } from "../src/ModelGenerator";
import { PacketFixture } from "./fixture/Packet.fixture";
import { TypeSchemaFixture } from "./fixture/TypeSchema.fixture";

describe("generate is called with packet", () => {
  it("Should return SourceFile with class model containing packet fields, given packet has upper case packet name and fields", () => {
    let modelGenerator = new ModelGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(`${__dirname}/fixture/files/TestMessage.cs`)
      .toString();
    let file = modelGenerator.generate(
      PacketFixture.buildWithAllFieldsAndUpperCaseFirstCharacter()
    );

    expect(file.name).toEqual("TestMessage.cs");
    expect(file.content).toEqual(expectedFileContent);
  });

  it("Should return SourceFile with class model containing packet fields, given packet has lower case packet name and fields", () => {
    let modelGenerator = new ModelGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(`${__dirname}/fixture/files/TestMessage.cs`)
      .toString();
    let file = modelGenerator.generate(
      PacketFixture.buildWithAllFieldsAndLowerCaseFirstCharacter()
    );

    expect(file.name).toEqual("TestMessage.cs");
    expect(file.content).toEqual(expectedFileContent);
  });
});

describe("generate is called with TypeSchema", () => {
  it("Should return SourceFile with class model containing schema fields, given schema has upper case packet name and fields", () => {
    let modelGenerator = new ModelGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(`${__dirname}/fixture/files/CustomTypeDto.cs`)
      .toString();
    let file = modelGenerator.generate(TypeSchemaFixture.buildCustomType());

    expect(file.name).toEqual("CustomTypeDto.cs");
    expect(file.content).toEqual(expectedFileContent);
  });

  it("Should return SourceFile with class model containing schema fields, given schema has lower case packet name and fields", () => {
    let modelGenerator = new ModelGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(`${__dirname}/fixture/files/CustomTypeDto.cs`)
      .toString();
    let file = modelGenerator.generate(TypeSchemaFixture.buildCustomType());

    expect(file.name).toEqual("CustomTypeDto.cs");
    expect(file.content).toEqual(expectedFileContent);
  });
});
