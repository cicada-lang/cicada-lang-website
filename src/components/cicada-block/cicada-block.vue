<template>
  <div class="flex flex-col">
    <cicada-block-toolbox
      v-show="active"
      @run="run()"
      @deactivate="active = false"
    />
    <pre
      class="focus:outline-none py-2 overflow-x-auto"
      :class="['border-sky-300', active && 'border-t-2 border-b-2']"
      style="font-size: 92%"
      v-html="highlightedCode"
      @click="active = true"
    ></pre>
    <!-- <pre
         class="focus:outline-none py-2 overflow-x-auto"
         :class="['border-sky-300', active && 'border-t-2 border-b-2']"
         style="font-size: 92%"
         v-html="highlightedCode"
         contenteditable="true"
         @input="updateCode($event.target.innerText)"
         @focus="active = true"
         spellcheck="false"
         ></pre> -->
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
import hljs from "highlight.js"

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

  code: string = this.text
  output: string = ""
  running: boolean = false
  active: boolean = false

  @Watch("pageName")
  init(): void {
    this.book.cache.delete(this.pageName)
    this.output = ""
  }

  updateCode(code: string): void {
    // TODO We can not update code this way, because vue will rerender the cursor.
    // this.code = code
    // Solutions:
    // - (A) Maybe we can save and restore cursor by:
    //   https://stackoverflow.com/questions/6249095/how-to-set-the-caret-cursor-position-in-a-contenteditable-element-div
    // - (B) Use CodeMirror
  }

  get highlightedCode(): string {
    return hljs.highlight(this.code, { language: "typescript" }).value
  }

  async run(): Promise<void> {
    this.output = ""
    this.running = true

    try {
      this.book.cache.delete(this.pageName)
      const mod = this.book.load(this.pageName, this.page)
      await mod.run_to(this.index)
      this.updateOutput(mod)
    } catch (error) {
      this.output = `${error}`
    }

    this.running = false
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
