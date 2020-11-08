import { CSharpSourceFileFixture } from "./CSharpSourceFile.fixture";
import { TemplateContainerFixture } from "./TemplateContainer.fixture";
import { BoilerplateGenerator } from "../src/BoilerplateGenerator";

describe("generate is called", () => {
  it("Should return array with deserializer interface source file", () => {
    let serializerGenerator = new BoilerplateGenerator(
      TemplateContainerFixture.getContainer()
    );

    let files = serializerGenerator.generate();

    expect(files.sort()).toEqual(
      CSharpSourceFileFixture.buildBoilerplateFiles().sort()
    );
  });
});
