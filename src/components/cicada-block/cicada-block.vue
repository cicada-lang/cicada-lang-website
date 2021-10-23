<template>
  <div class="flex flex-col">
    <div
      class="relative py-2 border-t border-b"
      :class="[active ? 'border-orange-400' : 'border-white']"
    >
      <cicada-block-toolbox
        class="-top-2 -right-4 absolute"
        v-show="active"
        @run="runCode()"
        @copy="copyCode()"
        @reset="resetCode()"
        @deactivate="active = false"
      />

      <div ref="editor" @click="active = true"></div>

      <fade class="absolute top-0">
        <div
          v-show="narrations.length > 0"
          class="
            flex flex-col
            font-sans
            p-4
            rounded
            bg-sky-50
            ring-4 ring-sky-200
          "
        >
          <button @click="narrations = []" class="self-end">CLOSE</button>
          <div
            class="py-2 text-lg font-narration"
            v-for="(narration, index) in narrations"
            :key="index"
          >
            {{ narration }}
          </div>
        </div>
      </fade>

      <cicada-block-toolbox
        class="-bottom-2 -right-4 absolute"
        v-show="active"
        @run="runCode()"
        @copy="copyCode()"
        @reset="resetCode()"
        @deactivate="active = false"
      />
    </div>

    <fade>
      <div
        v-show="active && running"
        class="py-2 font-sans text-orange-500 border-b border-orange-400"
      >
        Running...
      </div>
    </fade>

    <slide-right>
      <stmt-output-list
        v-show="active && outputs.length"
        class="py-2 overflow-x-auto border-b border-orange-400"
        style="font-size: 92%"
        :outputs="outputs"
      />
    </slide-right>

    <slide-left>
      <pre
        v-show="active && error"
        class="text-rose-500 py-2 overflow-x-auto border-b border-orange-400"
        style="font-size: 92%"
        >{{ error }}</pre
      >
    </slide-left>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { Book } from "@cicada-lang/cicada/lib/book"
import { Module } from "@cicada-lang/cicada/lib/module"
import { StmtOutput } from "@cicada-lang/cicada/lib/lang/stmt"
import * as ut from "@/ut"
import { createEditorState } from "./editor-state"
import { EditorView } from "@codemirror/view"
import { CtxEvent, CtxObserver } from "@cicada-lang/cicada/lib/lang/ctx"

@Component({
  name: "cicada-block",
  // prettier-ignore
  components: {
    "cicada-block-toolbox": require("./cicada-block-toolbox.vue").default,
    "stmt-output-list": require("./stmt-output-list.vue").default,
    "icon-menu": require("@/components/icons/icon-menu.vue").default,
    "fade": require("@/components/transitions/fade.vue").default,
    "slide-left": require("@/components/transitions/slide-left.vue").default,
    "slide-right": require("@/components/transitions/slide-right.vue").default,
  },
})
export default class extends Vue {
  @Prop() pageName!: string
  @Prop() index!: number
  @Prop() page!: string
  @Prop() text!: string
  @Prop() book!: Book

  error: unknown | null = null
  outputs: Array<StmtOutput> = []
  running: boolean = false
  active: boolean = false
  showToolbox: boolean = false
  editorView: EditorView | null = null

  narrations: Array<string> = []

  get mod(): Module {
    return this.book.load(this.pageName, this.page, {
      observers: [
        app.cicada.createCtxObserver({
          receive: (event) => {
            if (event.tag === "narration") {
              this.narrations.push(event.msg)
            }
          },
        }),
      ],
    })
  }

  mounted(): void {
    this.init()
  }

  @Watch("pageName")
  init(): void {
    this.outputs = []
    this.narrations = []
    this.error = null
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

  async runCode(): Promise<void> {
    if (this.editorView) {
      this.outputs = []
      this.narrations = []
      this.error = null
      this.running = true

      try {
        const outputs = await this.mod.rerunWith({
          id: this.index,
          code: this.editorView.state.doc.toString(),
        })

        this.outputs = outputs
      } catch (error) {
        this.error = error
      }

      this.running = false
    }
  }

  async copyCode(): Promise<void> {
    if (this.editorView) {
      const code = this.editorView.state.doc.toString()
      await navigator.clipboard.writeText(code)
    }
  }

  async resetCode(): Promise<void> {
    this.outputs = []
    this.error = null

    this.mod.updateCodeBlock(this.index, this.text)

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
