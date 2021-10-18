<template>
  <div class="flex flex-col">
    <div ref="editor" @click="active = true"></div>

    <cicada-block-toolbox
      v-show="active"
      @run="run()"
      @deactivate="active = false"
    />

    <div v-if="running" class="py-4 font-sans text-orange-500">Running...</div>
    <pre
      v-show="output"
      class="py-4 overflow-x-auto text-orange-500"
      style="font-size: 92%"
      >{{ output }}</pre
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { Book } from "@cicada-lang/cicada/lib/book"
import { Module } from "@cicada-lang/cicada/lib/module"
import * as Runners from "@cicada-lang/cicada/lib/runners"
import * as ut from "@/ut"

import { createEditorState } from "./editor-state"
import { EditorView } from "@codemirror/view"

@Component({
  name: "cicada-block",
  // prettier-ignore
  components: {
    "cicada-block-toolbox": require("./cicada-block-toolbox.vue").default,
  },
})
export default class extends Vue {
  @Prop() pageName!: string
  @Prop() index!: number
  @Prop() text!: string
  @Prop() page!: string
  @Prop() book!: Book

  output: string = ""
  running: boolean = false
  active: boolean = false

  editorView: EditorView | null = null

  mounted(): void {
    this.init()
  }

  @Watch("pageName")
  init(): void {
    this.book.cache.delete(this.pageName)
    this.output = ""
    this.initEditor()
  }

  initEditor(): void {
    const state = createEditorState({
      doc: this.text,
    })

    const parent = this.$refs["editor"] as any
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }

    this.editorView = new EditorView({ state, parent })
  }

  async run(): Promise<void> {
    if (this.editorView) {
      this.output = ""
      this.running = true

      try {
        this.book.cache.delete(this.pageName)
        const mod = this.book.load(this.pageName, this.page)

        const code_block = mod.get_code_block(this.index)
        if (code_block) {
          code_block.updateCode(this.editorView.state.doc.toString())
        }

        await mod.run_to(this.index)
        this.updateOutput(mod)
      } catch (error) {
        this.output = `${error}`
      }

      this.running = false
    }
  }

  updateOutput(mod: Module): void {
    const code_block = mod.get_code_block(this.index)
    this.output = ""

    if (code_block === undefined) return

    for (const output of code_block.outputs) {
      this.output += output.repr()
      this.output += "\n"
    }

    this.output = this.output.trim()
  }
}
</script>

<style>
.cm-content {
  @apply font-mono;
  font-size: 92%;
}
</style>
