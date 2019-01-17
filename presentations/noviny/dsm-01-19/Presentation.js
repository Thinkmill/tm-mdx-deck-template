export { default as theme } from "../../../src/theme";

import Introduction from "./01-introduction.md";
import MonoRepo from "./02-mono-repo.md";
import ComponentAPIS from "./03-component-apis.md";
import DocsPages from "./04-docs-pages.md";
import Examples from "./05-examples.md";
import DesignerDocs from "./06-designer-documentation.md";
import Hamartia from "./07-hamartia.md";
import Conclusion from "./08-conclusion.md";

export default [
  ...Introduction,
  ...MonoRepo,
  ...DocsPages,
  ...ComponentAPIS,
  ...Examples,
  ...DesignerDocs,
  ...Hamartia,
  ...Conclusion
];
