import { Base64 } from "js-base64"

export class GitFileStoreId {
  host: string
  path: string
  dir: string

  constructor(opts: { host: string; path: string; dir?: string }) {
    this.host = opts.host
    this.path = opts.path
    this.dir = opts.dir || ""
  }

  format(): string {
    return JSON.stringify([this.host, this.path, this.dir])
  }

  static parse(str: string): [host: string, path: string, dir: string] {
    const [host, path, dir] = JSON.parse(str)
    return [host, path, dir]
  }

  encode(): string {
    return Base64.encodeURI(this.format())
  }

  static decode(str: string): GitFileStoreId {
    const [host, path, dir] = this.parse(Base64.decode(str))
    return new GitFileStoreId({ host, path, dir })
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
