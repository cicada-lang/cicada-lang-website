import { Base64 } from "js-base64"

export class BookId {
  host: string
  path: string
  dir: string

  constructor(opts: { host: string; path: string; dir?: string }) {
    this.host = opts.host
    this.path = opts.path
    this.dir = opts.dir || ""
  }

  encode(): string {
    const text = [this.host, this.path, this.dir].join(" ")
    return Base64.encodeURI(text)
  }

  static decode(str: string): BookId {
    const text = Base64.decode(str)
    const [host, path, dir] = text.split(" ")
    return new BookId({ host, path, dir })
  }

  repoURL(): string {
    switch (this.host) {
      case "github":
        return this.dir
          ? `https://github.com/${this.path}/tree/master/${this.dir}`
          : `https://github.com/${this.path}`
      case "gitlab":
        return this.dir
          ? `https://gitlab.com/${this.path}/-/tree/master/${this.dir}`
          : `https://gitlab.com/${this.path}`
      default:
        return this.dir
          ? `${this.host}/${this.path}/-/tree/master/${this.dir}`
          : `${this.host}/${this.path}`
    }
  }
}
