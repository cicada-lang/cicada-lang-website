import { GitPath } from "@xieyuheng/enchanter/lib/git-path"
import { FileStore } from "@xieyuheng/enchanter/lib/file-store"
import postmark, { Parser, Nodes } from "@xieyuheng/postmark"
import { ArticlePathResolver } from "./article-path-resolver"
import ty from "@xieyuheng/ty"
const Path = require("path")

export class ArticleState {
  articleId: GitPath
  files: FileStore
  text: string
  baseURL: string

  pathResolver: ArticlePathResolver

  constructor(opts: {
    articleId: GitPath
    files: FileStore
    text: string
    baseURL: string
  }) {
    this.articleId = opts.articleId
    this.files = opts.files
    this.text = opts.text
    this.baseURL = opts.baseURL

    this.pathResolver = new ArticlePathResolver({
      articleId: this.articleId,
      baseURL: this.baseURL,
    })
  }

  static async build(opts: {
    articleId: string
    baseURL: string
  }): Promise<ArticleState> {
    const articleId = GitPath.decode(opts.articleId)
    const files = articleId.upward().createFileStore()
    const text = await files.getOrFail(Path.basename(articleId.path))
    return new ArticleState({
      articleId,
      files,
      text,
      baseURL: opts.baseURL,
    })
  }

  get document(): Nodes.Document {
    return postmark.parser.parseDocument(this.text).postprocess({
      customBlockParsers: [
        // TODO
      ],
    })
  }

  render(): string {
    return this.document.render()
  }
}
