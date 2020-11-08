import { ModelGenerator } from "./ModelGenerator";
import { BoilerplateGenerator } from "./BoilerplateGenerator";
import { SerializerGenerator } from "./SerializerGenerator";
import { DeserializerGenerator } from "./DeserializerGenerator";
import { CodeGenerator, Contract, SourceFile } from "packetizr";

export class CSharpCodeGenerator implements CodeGenerator {
  constructor(
    private _boilerplateGenerator: BoilerplateGenerator,
    private _modelGenerator: ModelGenerator,
    private _serializerGenerator: SerializerGenerator,
    private _deserializerGenerator: DeserializerGenerator
  ) {}

  generate(contract: Contract): SourceFile[] {
    return [
      ...contract.packets.map((packet) =>
        this._modelGenerator.generate(packet)
      ),
      ...contract.packets.map((packet) =>
        this._serializerGenerator.generate(packet)
      ),
      ...contract.packets.map((packet) =>
        this._deserializerGenerator.generate(packet)
      ),
      ...this._boilerplateGenerator.generate(),
      ...contract.typeSchemas.map((schema) =>
        this._modelGenerator.generate(schema)
      ),
      ...contract.typeSchemas.map((schema) =>
        this._serializerGenerator.generate(schema)
      ),
      ...contract.typeSchemas.map((schema) =>
        this._deserializerGenerator.generate(schema)
      ),
    ];
  }
}
