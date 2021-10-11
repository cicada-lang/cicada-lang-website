import { GitPath } from "@xieyuheng/enchanter/lib/git-path"
import { FileStore } from "@xieyuheng/enchanter/lib/file-store"
import { GitHubFileStore } from "@xieyuheng/enchanter/lib/github-file-store"
import { GitLabFileStore } from "@xieyuheng/enchanter/lib/gitlab-file-store"
import { Gitlab } from "@gitbeaker/browser"
import ty from "@xieyuheng/ty"

export class BookState {
  bookId: GitPath
  files: FileStore
  bookConfig: Record<string, any>

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
    const files = createFileStore(bookId)
    const bookConfig = JSON.parse(await files.getOrFail("book.json"))
    return new BookState({ bookId, files, bookConfig })
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
