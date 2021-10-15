import { GitPath } from "@xieyuheng/enchanter/lib/git-path"
import { GitFileStore } from "@xieyuheng/enchanter/lib/git-file-store"
import ty from "@xieyuheng/ty"

export class BookState {
  bookId: GitPath
  files: GitFileStore
  bookConfig: Record<string, any>
  pages: Record<string, string> | null = null

  constructor(opts: {
    bookId: GitPath
    files: GitFileStore
    bookConfig: Record<string, any>
  }) {
    this.bookId = opts.bookId
    this.files = opts.files
    this.bookConfig = opts.bookConfig
  }

  static async build(opts: { bookId: string }): Promise<BookState> {
    const bookId = GitPath.decode(opts.bookId)
    const files = bookId.createGitFileStore()
    const bookConfig = JSON.parse(await files.getOrFail("book.json"))
    return new BookState({ bookId, files, bookConfig })
  }

  async loadPages(): Promise<void> {
    this.pages = await this.files.cd(this.bookConfig.src).all()
  }
}
