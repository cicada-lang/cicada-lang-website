import { Base64 } from "js-base64"

export class BookId {
  host: string
  path: string
  dir?: string

  constructor(opts: { host: string; path: string; dir?: string }) {
    this.host = opts.host
    this.path = opts.path
    this.dir = opts.dir
  }

  encode(): string {
    const text = [this.host, this.path, this.dir || ""].join(" ")
    return Base64.encodeURI(text)
  }

  static decode(str: string): BookId {
    const text = Base64.decode(str)
    const [host, path, dir] = text.split(" ")
    return new BookId({ host, path, dir })
  }
}
