import { GitPath } from "@xieyuheng/enchanter/lib/git-path"
import { FileStore } from "@xieyuheng/enchanter/lib/file-store"
import { GitHubFileStore } from "@xieyuheng/enchanter/lib/github-file-store"
import { GitLabFileStore } from "@xieyuheng/enchanter/lib/gitlab-file-store"
import { Gitlab } from "@gitbeaker/browser"
import { Parser, Nodes } from "@xieyuheng/postmark"
import ty from "@xieyuheng/ty"
import Path from "path"

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
    const files = createFileStore(articleId.upward())
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

function createFileStore(gitPath: GitPath): FileStore {
  const { host, repo, path: dir } = gitPath

  switch (host) {
    case "github":
      return new GitHubFileStore(repo, { dir })
    case "gitlab":
      return new GitLabFileStore(repo, {
        dir,
        requester: new Gitlab({ host: "https://gitlab.com" }),
      })
    default:
      return new GitLabFileStore(repo, {
        dir,
        requester: new Gitlab({ host }),
      })
  }
}
