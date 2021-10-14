import { GitPath } from "@xieyuheng/enchanter/lib/git-path"
import { FileStore } from "@xieyuheng/enchanter/lib/file-store"
import { Parser, Nodes } from "@xieyuheng/postmark"
import ty from "@xieyuheng/ty"
const Path = require("path")

export class ArticleState {
  articleId: GitPath
  files: FileStore
  text: string

  constructor(opts: { articleId: GitPath; files: FileStore; text: string }) {
    this.articleId = opts.articleId
    this.files = opts.files
    this.text = opts.text
  }

  static async build(input: string): Promise<ArticleState> {
    const articleId = GitPath.decode(input)
    const files = articleId.upward().createFileStore()
    const text = await files.getOrFail(Path.basename(articleId.path))
    return new ArticleState({ articleId, files, text })
  }

  get document(): Nodes.Document {
    const parser = new Parser()
    return parser.parseDocument(this.text)
  }

  render(): string {
    return this.document.render()
  }
}
