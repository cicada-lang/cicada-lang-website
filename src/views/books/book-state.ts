import { GitPath } from "@xieyuheng/enchanter/lib/git-path"
import { Nodes } from "@xieyuheng/postmark"
import { Book } from "@cicada-lang/cicada/lib/book"

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
    const book = await window.app.cicada.gitBooks.getFromGitPath(bookId)
    return new BookState({ bookId, bookConfig: config, pages, book })
  }

  get pageNames(): Array<string> {
    return Object.keys(this.pages).filter((path) => path.endsWith(".md"))
  }

  parseDocument(text: string): Nodes.Document {
    return window.app.postmarkParser.parseDocument(text)
  }

  get documentsWithTitle(): Record<string, Nodes.Document> {
    const documents: Record<string, Nodes.Document> = {}
    for (const [pageName, text] of Object.entries(this.pages)) {
      if (pageName.endsWith(".md")) {
        const document = this.parseDocument(text)
        if (document.attributes.title) {
          documents[pageName] = document
        }
      }
    }

    return documents
  }
}
