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

import { javascript } from "@codemirror/lang-javascript"
import {
  keymap,
  highlightSpecialChars,
  drawSelection,
  highlightActiveLine,
} from "@codemirror/view"
import { Extension, EditorState } from "@codemirror/state"
import { EditorView } from "@codemirror/view"
import { history, historyKeymap } from "@codemirror/history"
import { foldGutter, foldKeymap } from "@codemirror/fold"
import { indentOnInput } from "@codemirror/language"
import { lineNumbers, highlightActiveLineGutter } from "@codemirror/gutter"
import { defaultKeymap } from "@codemirror/commands"
import { bracketMatching } from "@codemirror/matchbrackets"
import { closeBrackets, closeBracketsKeymap } from "@codemirror/closebrackets"
import { searchKeymap, highlightSelectionMatches } from "@codemirror/search"
import { autocompletion, completionKeymap } from "@codemirror/autocomplete"
import { commentKeymap } from "@codemirror/comment"
import { rectangularSelection } from "@codemirror/rectangular-selection"
import { defaultHighlightStyle } from "@codemirror/highlight"
import { lintKeymap } from "@codemirror/lint"

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

  @Watch("pageName", { immediate: true })
  init(): void {
    this.book.cache.delete(this.pageName)
    this.output = ""
    this.initEditor()
  }

  initEditor(): void {
    const state = EditorState.create({
      doc: this.text,
      extensions: [
        javascript(),
        // lineNumbers(),
        // highlightActiveLineGutter(),
        highlightSpecialChars(),
        history(),
        foldGutter(),
        drawSelection(),
        EditorState.allowMultipleSelections.of(true),
        indentOnInput(),
        defaultHighlightStyle.fallback,
        bracketMatching(),
        closeBrackets(),
        // autocompletion(),
        rectangularSelection(),
        highlightActiveLine(),
        highlightSelectionMatches(),
        keymap.of([
          ...closeBracketsKeymap,
          ...defaultKeymap,
          ...searchKeymap,
          ...historyKeymap,
          ...foldKeymap,
          ...commentKeymap,
          ...completionKeymap,
          ...lintKeymap,
        ]),
      ],
    })

    const parent = this.$refs["editor"] as any

    if (parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
      }
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
