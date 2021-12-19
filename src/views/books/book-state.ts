import { Module } from "@cicada-lang/cicada/lib/module"
import { GitLink } from "@enchanterjs/enchanter/lib/git-link"
import { Nodes } from "@xieyuheng/postmark"

export class BookState {
  link: GitLink
  bookConfig: Record<string, any>
  files: Record<string, string>
  pageName: string

  constructor(opts: {
    link: GitLink
    bookConfig: Record<string, any>
    files: Record<string, string>
    pageName: string
  }) {
    this.link = opts.link
    this.bookConfig = opts.bookConfig
    this.files = opts.files
    this.pageName = opts.pageName
  }

  static async build(opts: { link: string }): Promise<BookState> {
    const link = GitLink.decode(opts.link)
    const pageName = link.path
    link.path = ""
    const files = link.createGitFileStore()
    const bookConfig = JSON.parse(await files.getOrFail("book.json"))
    const pages = await files.cd(bookConfig.src).all()
    return new BookState({ link, bookConfig, files: pages, pageName })
  }

  async loadMod(pageName: string): Promise<Module> {
    // TODO use config to map `GitLink` to CDN prefix
    const link = this.link
    const { repo, version } = link
    const path = this.bookConfig.src + "/" + pageName
    const url = version
      ? new URL(`https://cdn.jsdelivr.net/gh/${repo}@${version}/${path}`)
      : new URL(`https://cdn.jsdelivr.net/gh/${repo}/${path}`)

    return await Module.load(url)
  }

  updateLink(input: string): void {
    const link = GitLink.decode(input)
    this.pageName = link.path
    link.path = ""
    this.link = link
  }

  get bookName(): string {
    const { host, repo } = this.link
    return `${host}/${repo}`
  }

  parseDocument(text: string): Nodes.Document {
    return app.postmarkParser.parseDocument(text)
  }

  get documentsWithTitle(): Array<{
    pageName: string
    document: Nodes.Document
  }> {
    const documents: Array<{ pageName: string; document: Nodes.Document }> = []
    const entries = Object.entries(this.files)
    for (const [pageName, text] of entries) {
      if (pageName.endsWith(".md")) {
        const document = this.parseDocument(text)
        if (document.attributes.title) {
          documents.push({ pageName, document })
        }
      }
    }

    return documents.sort((x, y) => (x.pageName > y.pageName ? 1 : -1))
  }

  get pageNames(): Array<string> {
    return this.documentsWithTitle.map(({ pageName }) => pageName)
  }
}
