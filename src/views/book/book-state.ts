import { Reference } from "@/models/reference"
import { FileStore } from "@xieyuheng/enchanter/lib/file-store"
import { GitHubFileStore } from "@xieyuheng/enchanter/lib/github-file-store"
import { Optional } from "utility-types"
import ty from "@xieyuheng/ty"

export class BookState {
  reference: Reference
  error?: Error
  files: FileStore

  constructor(opts: { reference: any }) {
    try {
      this.reference = createReference(opts.reference)
      this.files = createFileStore(this.reference)
    } catch (error) {
      this.error = error
    }
  }
}

function createFileStore(reference: Reference): FileStore {
  const { bookname, by, dir } = reference
  return new GitHubFileStore(by + "/" + bookname, { dir })
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
