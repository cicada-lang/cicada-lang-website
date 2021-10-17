import { GitPath } from "@xieyuheng/enchanter/lib/git-path"
import { GitFileStore } from "@xieyuheng/enchanter/lib/git-file-store"
import postmark, { Parser, Nodes } from "@xieyuheng/postmark"
import ty from "@xieyuheng/ty"
import { Book } from "@cicada-lang/cicada/lib/book"
import * as Runners from "@cicada-lang/cicada/lib/runners"

export class BookState {
  bookId: GitPath
  files: GitFileStore
  config: Record<string, any>
  pages: Record<string, string>

  constructor(opts: {
    bookId: GitPath
    files: GitFileStore
    config: Record<string, any>
    pages: Record<string, string>
  }) {
    this.bookId = opts.bookId
    this.files = opts.files
    this.config = opts.config
    this.pages = opts.pages
  }

  static async build(opts: { bookId: string }): Promise<BookState> {
    const bookId = GitPath.decode(opts.bookId)
    const files = bookId.createGitFileStore()
    const config = JSON.parse(await files.getOrFail("book.json"))
    const pages = await files.cd(config.src).all()
    return new BookState({ bookId, files, config, pages })
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
