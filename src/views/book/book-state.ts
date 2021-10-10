import { Reference } from "@/models/reference"
import { FileStore } from "@xieyuheng/enchanter/lib/file-store"
import { GitHubFileStore } from "@xieyuheng/enchanter/lib/github-file-store"
import { GitLabFileStore } from "@xieyuheng/enchanter/lib/gitlab-file-store"
import { Gitlab } from "@gitbeaker/browser"
import { Optional } from "utility-types"
import ty from "@xieyuheng/ty"

export class BookState {
  reference: Reference
  files: FileStore
  bookConfig: Record<string, any>

  constructor(opts: {
    reference: Reference
    files: FileStore
    bookConfig: Record<string, any>
  }) {
    this.reference = opts.reference
    this.files = opts.files
    this.bookConfig = opts.bookConfig
  }

  static async build(opts: { reference: any }): Promise<BookState> {
    const reference = createReference(opts.reference)
    const files = createFileStore(reference)
    const bookConfig = JSON.parse(await files.getOrFail("book.json"))
    return new BookState({ reference, files, bookConfig })
  }
}

function createFileStore(reference: Reference): FileStore {
  const { host, bookname, by, dir } = reference

  switch (host) {
    case "github":
      return new GitHubFileStore(by + "/" + bookname, {
        dir,
      })
    case "gitlab":
      return new GitLabFileStore(by + "/" + bookname, {
        dir,
        requester: new Gitlab({
          host: reference.hostURL || "https://gitlab.com",
        }),
      })
  }
}

function createReference(input: any): Reference {
  const schema = ty.object({
    bookname: ty.string(),
    by: ty.string(),
    dir: ty.optional(ty.string()),
    hostURL: ty.optional(ty.string()),
  })

  schema.validate(input)

  if (input.host === "gitlab") {
    return { host: "gitlab", ...schema.prune(input) }
  } else if (input.host === "github") {
    return { host: "github", ...schema.prune(input) }
  } else {
    if (input.host) {
      console.warn(
        [
          `I was given unknown host when try to create a reference.`,
          `  given host: ${input.host}`,
        ].join("\n")
      )
    }

    // NOTE Use github as the default host.
    return { host: "github", ...schema.prune(input) }
  }
}
