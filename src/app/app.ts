import { ServiceContainer } from "@enchanterjs/enchanter/lib/service-container"
import Postmark from "@xieyuheng/postmark"

export class App extends ServiceContainer {
  postmarkParser = Postmark.createParser().customBlock({
    customKind: "Cicada",
    recognize: (info) => info.startsWith("cicada"),
    parse: (text, { index }) => ({ index }),
  })
}
