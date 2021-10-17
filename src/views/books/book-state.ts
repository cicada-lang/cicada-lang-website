import { GitPath } from "@xieyuheng/enchanter/lib/git-path"
import { GitFileStore } from "@xieyuheng/enchanter/lib/git-file-store"
import postmark, { Parser, Nodes } from "@xieyuheng/postmark"
import ty from "@xieyuheng/ty"
import { Book } from "@cicada-lang/cicada/lib/book"
import { GitBookStore } from "@cicada-lang/cicada/lib/book-stores/git-book-store"
import * as CtxObservers from "@cicada-lang/cicada/lib/ctx/ctx-observers"
import * as Runners from "@cicada-lang/cicada/lib/runners"

export class BookState {
  bookId: GitPath
  config: Record<string, any>
  pages: Record<string, string>
  book: Book

  constructor(opts: {
    bookId: GitPath
    config: Record<string, any>
    pages: Record<string, string>
    book: Book
  }) {
    this.bookId = opts.bookId
    this.config = opts.config
    this.pages = opts.pages
    this.book = opts.book
  }

  static async build(opts: { bookId: string }): Promise<BookState> {
    const bookId = GitPath.decode(opts.bookId)
    const files = bookId.createGitFileStore()
    const config = JSON.parse(await files.getOrFail("book.json"))
    const pages = await files.cd(config.src).all()
    const books = window.app.cicada.createGitBookStore({
      ctx: { observers: [new CtxObservers.NarrationLogger()] },
    })
    const book = await books.getFromGitPath(bookId)
    return new BookState({ bookId, config, pages, book })
  }

  async run(path: string): Promise<{ error?: unknown }> {
    const runner = new Runners.DefaultRunner({ book: this.book })
    return runner.run(path)
  }

  get pageNames(): Array<string> {
    return Object.keys(this.pages).filter((path) => path.endsWith(".md"))
  }

  parseDocument(text: string): Nodes.Document {
    return postmark.parser.parseDocument(text).postprocess({
      customBlockParsers: [
        postmark.createCustomBlockParser<undefined>({
          recognize: (info) => info.startsWith("cicada"),
          customKind: "Cicada",
          parse: (text) => undefined,
        }),
      ],
    })
  }
}
