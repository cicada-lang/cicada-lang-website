import { Nodes } from "@xieyuheng/postmark"
import { PathResolver } from "../models/path-resolver"
import Vue from "vue"

export type CustomBlockEntry = {
  component: Vue.Component
  props: <T>(node: Nodes.CustomBlock<T>) => any
  style: Record<string, string>
  class: Record<string, any> | Array<any>
}

export class MdDocumentState {
  document: Nodes.Document
  pathResolver: PathResolver
  customBlockComponents: Record<string, CustomBlockEntry>

  constructor(opts: {
    document: Nodes.Document
    pathResolver: PathResolver
    customBlockComponents: Record<string, CustomBlockEntry>
  }) {
    this.document = opts.document
    this.pathResolver = opts.pathResolver
    this.customBlockComponents = opts.customBlockComponents
  }
}
