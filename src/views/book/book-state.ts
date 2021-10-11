import { GitFileStoreId } from "@xieyuheng/enchanter/lib/git-file-store-id"
import { FileStore } from "@xieyuheng/enchanter/lib/file-store"
import { GitHubFileStore } from "@xieyuheng/enchanter/lib/github-file-store"
import { GitLabFileStore } from "@xieyuheng/enchanter/lib/gitlab-file-store"
import { Gitlab } from "@gitbeaker/browser"
import { Optional } from "utility-types"
import ty from "@xieyuheng/ty"

export class BookState {
  bookId: GitFileStoreId
  files: FileStore
  bookConfig: Record<string, any>

  constructor(opts: {
    bookId: GitFileStoreId
    files: FileStore
    bookConfig: Record<string, any>
  }) {
    this.bookId = opts.bookId
    this.files = opts.files
    this.bookConfig = opts.bookConfig
  }

  static async build(input: string): Promise<BookState> {
    const bookId = GitFileStoreId.decode(input)
    const files = createFileStore(bookId)
    const bookConfig = JSON.parse(await files.getOrFail("book.json"))
    return new BookState({ bookId, files, bookConfig })
  }
}

function createFileStore({ host, path, dir }: GitFileStoreId): FileStore {
  switch (host) {
    case "github":
      return new GitHubFileStore(path, { dir })
    case "gitlab":
      return new GitLabFileStore(path, {
        dir,
        requester: new Gitlab({ host: "https://gitlab.com" }),
      })
    default:
      return new GitLabFileStore(path, {
        dir,
        requester: new Gitlab({ host }),
      })
  }
}
