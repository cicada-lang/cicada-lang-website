import { GitPath } from "@xieyuheng/enchanter/lib/git-path"
import { GitFileStore } from "@xieyuheng/enchanter/lib/git-file-store"
import postmark, { Parser, Nodes } from "@xieyuheng/postmark"
import ty from "@xieyuheng/ty"
import { Book } from "@cicada-lang/cicada/lib/book"
import { Module } from "@cicada-lang/cicada/lib/module"
import { GitBookStore } from "@cicada-lang/cicada/lib/book-stores/git-book-store"
import * as CtxObservers from "@cicada-lang/cicada/lib/ctx/ctx-observers"

export class BookState {
  bookId: GitPath
  bookConfig: Record<string, any>
  pages: Record<string, string>
  book: Book

  constructor(opts: {
    bookId: GitPath
    bookConfig: Record<string, any>
    pages: Record<string, string>
    book: Book
  }) {
    this.bookId = opts.bookId
    this.bookConfig = opts.bookConfig
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
    return new BookState({ bookId, bookConfig: config, pages, book })
  }

  load(path: string): Module {
    const text = this.pages[path]
    return this.book.load(path, text)
  }

  get pageNames(): Array<string> {
    return Object.keys(this.pages).filter((path) => path.endsWith(".md"))
  }

  parseDocument(text: string): Nodes.Document {
    return postmark.parser.parseDocument(text).postprocess({
      customBlockParsers: [
        postmark.createCustomBlockParser<{ index: number }>({
          recognize: (info) => info === "cicada",
          customKind: "Cicada",
          parse: (text, { index }) => ({ index }),
        }),
      ],
    })
  }
}
