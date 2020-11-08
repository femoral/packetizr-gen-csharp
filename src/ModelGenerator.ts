import { TemplateContainer } from "./TemplateContainer";
import { pascalCase } from "change-case";
import { ModelClass } from "./model/ModelClass";
import { FieldTypes, Packet, SourceFile, TypeSchema } from "packetizr";

export class ModelGenerator {
  constructor(private _templateContainer: TemplateContainer) {}

  generate(model: Packet | TypeSchema): SourceFile {
    const isPacket = model instanceof Packet;
    return {
      name: `${pascalCase(model.name)}${isPacket ? "" : "Dto"}.cs`,
      content: this._templateContainer.build<ModelClass>("model", {
        isPacket,
        className: pascalCase(model.name),
        header: !(model instanceof TypeSchema) ? model.header : undefined,
        fields: model.fields.map((field) => ({
          type: this.getTypeDefinition(field.schema),
          name: pascalCase(field.name),
          isArray: field.type === FieldTypes.ARRAY,
        })),
      }),
    };
  }

  private getTypeDefinition(schema: string): string {
    switch (schema) {
      case FieldTypes.UINT32:
        return "uint";
      case FieldTypes.UINT16:
        return "ushort";
      case FieldTypes.UINT8:
        return "byte";
      case FieldTypes.INT32:
        return "int";
      case FieldTypes.INT16:
        return "short";
      case FieldTypes.INT8:
        return "sbyte";
      case FieldTypes.VARCHAR:
        return "string";
      case FieldTypes.CHAR:
        return "string";
      case FieldTypes.FLOAT32:
        return "float";
      default:
        return `${pascalCase(schema)}Dto`;
    }
  }
}
