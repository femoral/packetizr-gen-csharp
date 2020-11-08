import { TemplateContainer } from "./TemplateContainer";
import { SourceFile } from "packetizr";

export class BoilerplateGenerator {
  constructor(private _templateContainer: TemplateContainer) {}

  generate(): SourceFile[] {
    return [
      {
        name: "IPacketSerializer.cs",
        content: this._templateContainer.build("serializer-interface"),
      },
      {
        name: "IPacketDeserializer.cs",
        content: this._templateContainer.build("deserializer-interface"),
      },
    ];
  }
}
