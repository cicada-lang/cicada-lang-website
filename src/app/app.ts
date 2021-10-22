import { ServiceContainer } from "@enchanterjs/enchanter/lib/service-container"
import { WebApp } from "@cicada-lang/cicada/lib/app/web-app"
import postmark, { Nodes } from "@xieyuheng/postmark"

export class App extends ServiceContainer {
  cicada = new WebApp()

  postmarkParser = postmark.createParser({
    enableTable: true,
    customBlockParsers: [
      postmark.createCustomBlockParser<{ index: number }>({
        recognize: (info) => info === "cicada",
        customKind: "Cicada",
        parse: (text, { index }) => ({ index }),
      }),
    ],
  })
}
