<template>
  <div class="flex flex-col">
    <div
      class="relative py-2 border-t border-b"
      :class="[active ? 'border-orange-400' : 'border-white']"
    >
      <cicada-block-toolbox
        class="-top-2 -right-4 absolute"
        v-show="active"
        @run="run()"
        @reset="resetCode()"
        @deactivate="active = false"
      />

      <div ref="editor" @click="active = true"></div>

      <cicada-block-toolbox
        class="-bottom-2 -right-4 absolute"
        v-show="active"
        @run="run()"
        @reset="resetCode()"
        @deactivate="active = false"
      />
    </div>

    <div
      v-if="active && running"
      class="py-2 font-sans text-orange-500 border-b border-orange-400"
    >
      Running...
    </div>

    <div v-show="active && output" class="py-2 border-b border-orange-400">
      <pre class="overflow-x-auto text-orange-500" style="font-size: 92%">{{
        output
      }}</pre>
    </div>
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
    "icon-menu": require("@/components/icons/icon-menu.vue").default,
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
  showToolbox: boolean = false

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

      await ut.wait(1000 * 3)

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

  resetCode(): void {
    this.output = ""

    if (this.editorView) {
      this.editorView.dispatch({
        changes: {
          from: 0,
          to: this.editorView.state.doc.length,
          insert: this.text,
        },
      })
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
.cm-editor.cm-focused {
  outline: none;
}

.cm-content {
  @apply font-mono;
  font-size: 92%;
}
</style>
