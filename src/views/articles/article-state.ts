import { GitPath } from "@xieyuheng/enchanter/lib/git-path"
import { GitFileStore } from "@xieyuheng/enchanter/lib/git-file-store"
import postmark, { Nodes } from "@xieyuheng/postmark"
const Path = require("path")

export class ArticleState {
  articleId: GitPath
  files: GitFileStore
  text: string

  constructor(opts: { articleId: GitPath; files: GitFileStore; text: string }) {
    this.articleId = opts.articleId
    this.files = opts.files
    this.text = opts.text
  }

  static async build(opts: { articleId: string }): Promise<ArticleState> {
    const articleId = GitPath.decode(opts.articleId)
    const files = articleId.upward().createGitFileStore()
    const text = await files.getOrFail(Path.basename(articleId.path))
    return new ArticleState({ articleId, files, text })
  }

  get document(): Nodes.Document {
    return postmark.parser.parseDocument(this.text).postprocess({
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
