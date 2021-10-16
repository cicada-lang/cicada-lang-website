import { ServiceContainer } from "@xieyuheng/enchanter/lib/service-container"
import { BookState } from "@/views/books/book-state"

export class App extends ServiceContainer {
  bookStateCache: Map<string, BookState> = new Map()

  async buildBookState(opts: { bookId: string }): Promise<BookState> {
    const found = this.bookStateCache.get(opts.bookId)
    if (found) return found

    const state = await BookState.build(opts)
    this.bookStateCache.set(opts.bookId, state)
    return state
  }
}
