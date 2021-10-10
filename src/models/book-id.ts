import * as ut from "../ut"

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
    return ut.hexEncode([this.host, this.path, this.dir || ""].join(" "))
  }

  static decode(str: string): BookId {
    const [host, path, dir] = ut.hexDecode(str).split(" ")
    return new BookId({ host, path, dir })
  }
}
