import { PathResolver } from "@/vendor/postmark/models/path-resolver"
import { GitPath } from "@xieyuheng/enchanter/lib/git-path"
const Path = require("path")

export class BookPagePathResolver extends PathResolver {
  pageName: string
  baseURL: string

  constructor(opts: { pageName: string; baseURL: string }) {
    super()
    this.pageName = opts.pageName
    this.baseURL = opts.baseURL
  }

  resolve(path: string): string {
    if (this.isExternal(path)) {
      return path
    } else if (path.startsWith("#")) {
      return path
    } else {
      const newPageName = Path.resolve(Path.dirname(this.pageName), path)
      // NOTE The return value of `Path.resolve` already has a starting "/"
      return `${this.baseURL}/${newPageName}`
    }
  }

  isExternal(path: string): boolean {
    return path.startsWith("http://") || path.startsWith("https://")
  }
}
