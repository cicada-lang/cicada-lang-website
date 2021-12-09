import { ServiceContainer } from "@enchanterjs/enchanter/lib/service-container"
import { WebApp } from "@cicada-lang/cicada/lib/app/web-app"
import postmark, { Nodes } from "@xieyuheng/postmark"

export class App extends ServiceContainer {
  cicada = new WebApp()

  postmarkParser = postmark.createParser().customBlock({
    customKind: "Cicada",
    recognize: (info) => info.startsWith("cicada"),
    parse: (text, { index }) => ({ index }),
  })
}
