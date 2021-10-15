import { GitPath } from "@xieyuheng/enchanter/lib/git-path"
import { GitFileStore } from "@xieyuheng/enchanter/lib/git-file-store"
import ty from "@xieyuheng/ty"

export class BookState {
  bookId: GitPath
  files: GitFileStore
  bookConfig: Record<string, any>
  pages: Record<string, string>

  constructor(opts: {
    bookId: GitPath
    files: GitFileStore
    bookConfig: Record<string, any>
    pages: Record<string, string>
  }) {
    this.bookId = opts.bookId
    this.files = opts.files
    this.bookConfig = opts.bookConfig
    this.pages = opts.pages
  }

  static async build(opts: { bookId: string }): Promise<BookState> {
    const bookId = GitPath.decode(opts.bookId)
    const files = bookId.createGitFileStore()
    const bookConfig = JSON.parse(await files.getOrFail("book.json"))
    const pages = await files.cd(bookConfig.src).all()
    return new BookState({ bookId, files, bookConfig, pages })
  }
}
