import { GitFileStore } from "@enchanterjs/enchanter/lib/git-file-store"
import { GitLink } from "@enchanterjs/enchanter/lib/git-link"
import { Nodes } from "@xieyuheng/postmark"
import { Module } from "@cicada-lang/cicada/lib/module"
const Path = require("path")

export class ArticleState {
  link: GitLink
  files: GitFileStore
  text: string
  pageName: string
  mod: Module

  constructor(opts: {
    link: GitLink
    files: GitFileStore
    text: string
    pageName: string
    mod: Module
  }) {
    this.link = opts.link
    this.files = opts.files
    this.text = opts.text
    this.pageName = opts.pageName
    this.mod = opts.mod
  }

  static async build(opts: { link: string }): Promise<ArticleState> {
    const link = GitLink.decode(opts.link)
    const files = link.upward().createGitFileStore()
    const pageName = link.path
    const text = await files.getOrFail(Path.basename(pageName))
    const mod = await this.loadMod(link)
    return new ArticleState({ link, files, text, pageName, mod })
  }

  private static async loadMod(link: GitLink): Promise<Module> {
    const { repo, version, path } = link
    const url = version
      ? new URL(`https://cdn.jsdelivr.net/gh/${repo}@${version}/${path}`)
      : new URL(`https://cdn.jsdelivr.net/gh/${repo}/${path}`)

    return await Module.load(url)
  }

  get document(): Nodes.Document {
    return app.postmarkParser.parseDocument(this.text)
  }
}
