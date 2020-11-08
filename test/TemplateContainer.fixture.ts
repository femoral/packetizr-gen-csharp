import { TemplateContainer } from "../src/TemplateContainer";

const templateContainer = new TemplateContainer();

export class TemplateContainerFixture {
  static getContainer() {
    return templateContainer;
  }
}
