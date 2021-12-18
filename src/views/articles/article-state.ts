import { Book } from "@cicada-lang/cicada/lib/book"
import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"
import { GitLink } from "@enchanterjs/enchanter/lib/git-link"
import { Nodes } from "@xieyuheng/postmark"
const Path = require("path")

export class ArticleState {
  articleId: GitLink
  files: GitFileStore
  text: string
  pageName: string
  book: Book

  constructor(opts: {
    articleId: GitLink
    files: GitFileStore
    text: string
    pageName: string
    book: Book
  }) {
    this.articleId = opts.articleId
    this.files = opts.files
    this.text = opts.text
    this.pageName = opts.pageName
    this.book = opts.book
  }

  static async build(opts: { articleId: string }): Promise<ArticleState> {
    const articleId = GitLink.decode(opts.articleId)
    const files = articleId.upward().createGitFileStore()
    const pageName = articleId.path
    const text = await files.getOrFail(Path.basename(pageName))
    const book = await app.cicada.gitBooks.fake({
      fallback: files,
      faked: { [pageName]: text },
    })
    return new ArticleState({ articleId, files, text, pageName, book })
  }

  get document(): Nodes.Document {
    return app.postmarkParser.parseDocument(this.text)
  }
}
