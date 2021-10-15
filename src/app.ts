import { ServiceContainer } from "@xieyuheng/enchanter/lib/service-container"
import { BookState } from "@/views/book/book-state"

export class App extends ServiceContainer {
  bookStateCache: Map<string, BookState> = new Map()

  async buildBookState(opts: { bookId: string }): Promise<BookState> {
    console.log(Array.from(this.bookStateCache.keys()))

    const found = this.bookStateCache.get(opts.bookId)
    if (found) return found

    const state = await BookState.build(opts)
    this.bookStateCache.set(opts.bookId, state)
    return state
  }
}

declare global {
  interface Window {
    app: App
  }
}

window.app = new App()
