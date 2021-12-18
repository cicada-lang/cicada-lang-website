import { Book } from "@cicada-lang/cicada/lib/book"
import { GitLink } from "@enchanterjs/enchanter/lib/git-link"
import { Nodes } from "@xieyuheng/postmark"

export class BookState {
  bookId: GitLink
  bookConfig: Record<string, any>
  files: Record<string, string>
  pageName: string
  book: Book

  constructor(opts: {
    bookId: GitLink
    bookConfig: Record<string, any>
    files: Record<string, string>
    pageName: string
    book: Book
  }) {
    this.bookId = opts.bookId
    this.bookConfig = opts.bookConfig
    this.files = opts.files
    this.pageName = opts.pageName
    this.book = opts.book
  }

  static async build(opts: { bookId: string }): Promise<BookState> {
    const bookId = GitLink.decode(opts.bookId)

    const pageName = bookId.path
    bookId.path = ""

    const files = bookId.createGitFileStore()
    const bookConfig = JSON.parse(await files.getOrFail("book.json"))
    const pages = await files.cd(bookConfig.src).all()
    const book = await app.cicada.gitBooks.getFromGitLink(bookId)
    return new BookState({ bookId, bookConfig, files: pages, pageName, book })
  }

  updateBookId(input: string): void {
    const bookId = GitLink.decode(input)
    this.pageName = bookId.path
    bookId.path = ""
    this.bookId = bookId
  }

  get bookName(): string {
    const { host, repo } = this.bookId
    return `${host}/${repo}`
  }

  parseDocument(text: string): Nodes.Document {
    return app.postmarkParser.parseDocument(text)
  }

  get documentsWithTitle(): Array<{
    pageName: string
    document: Nodes.Document
  }> {
    const documents: Array<{ pageName: string; document: Nodes.Document }> = []
    const entries = Object.entries(this.files)
    for (const [pageName, text] of entries) {
      if (pageName.endsWith(".md")) {
        const document = this.parseDocument(text)
        if (document.attributes.title) {
          documents.push({ pageName, document })
        }
      }
    }

    return documents.sort((x, y) => (x.pageName > y.pageName ? 1 : -1))
  }

  get pageNames(): Array<string> {
    return this.documentsWithTitle.map(({ pageName }) => pageName)
  }
}
