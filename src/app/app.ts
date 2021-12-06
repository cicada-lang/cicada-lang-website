import { ServiceContainer } from "@enchanterjs/enchanter/lib/service-container"
import { WebApp } from "@cicada-lang/cicada/lib/app/web-app"
import postmark, { Nodes } from "@xieyuheng/postmark"

export class App extends ServiceContainer {
  cicada = new WebApp()

  postmarkParser = postmark.createParser().customBlock({
    recognize: (info) => info.startsWith("cicada"),
    customKind: "Cicada",
    parse: (text, { index }) => ({ index }),
  })
}
