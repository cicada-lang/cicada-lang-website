import { PathResolver } from "@/vendor/postmark/models/path-resolver"
import { GitPath } from "@enchanterjs/enchanter/lib/git-path"

export class ArticlePathResolver extends PathResolver {
  articleId: GitPath
  baseURL: string

  constructor(opts: { articleId: GitPath; baseURL: string }) {
    super()
    this.articleId = opts.articleId
    this.baseURL = opts.baseURL
  }

  resolve(path: string): string {
    if (this.isExternal(path)) {
      return path
    } else if (path.startsWith("#")) {
      return path
    } else {
      const id = this.articleId.resolve(path).encode()
      return `${this.baseURL}/${id}`
    }
  }

  isExternal(path: string): boolean {
    return path.startsWith("http://") || path.startsWith("https://")
  }
}
