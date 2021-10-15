import { GitPath } from "@xieyuheng/enchanter/lib/git-path"
import { FileStore } from "@xieyuheng/enchanter/lib/file-store"
import ty from "@xieyuheng/ty"

export class BookState {
  bookId: GitPath
  files: FileStore
  bookConfig: Record<string, any>
  pages: Record<string, string> | null = null

  constructor(opts: {
    bookId: GitPath
    files: FileStore
    bookConfig: Record<string, any>
  }) {
    this.bookId = opts.bookId
    this.files = opts.files
    this.bookConfig = opts.bookConfig
  }

  static async build(input: string): Promise<BookState> {
    const bookId = GitPath.decode(input)
    const files = bookId.createGitFileStore()
    const bookConfig = JSON.parse(await files.getOrFail("book.json"))
    return new BookState({ bookId, files, bookConfig })
  }

  async loadPages(): Promise<void> {
    console.log(this.bookConfig.src)
    // this.pages = await this.files.cd(this.bookConfig.src).all()
    this.pages = await this.files.all()
  }
}
