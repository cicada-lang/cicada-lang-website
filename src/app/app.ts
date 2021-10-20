import { ServiceContainer } from "@xieyuheng/enchanter/lib/service-container"
import { BookState } from "@/views/books/book-state"
import { WebApp } from "@cicada-lang/cicada/lib/app/web-app"
import postmark, { Nodes } from "@xieyuheng/postmark"

export class App extends ServiceContainer {
  cicada = new WebApp()

  private bookStateCache: Map<string, BookState> = new Map()

  async buildBookState(opts: { bookId: string }): Promise<BookState> {
    const found = this.bookStateCache.get(opts.bookId)
    if (found) return found

    const state = await BookState.build(opts)
    this.bookStateCache.set(opts.bookId, state)
    return state
  }

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
