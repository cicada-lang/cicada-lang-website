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
      v-html="code"
      contenteditable="true"
      @focus="active = true"
      spellcheck="false"
    ></pre>
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

  output: string = ""
  running: boolean = false
  active: boolean = false

  @Watch("pageName")
  init(): void {
    this.book.cache.delete(this.pageName)
    this.output = ""
  }

  updateOutput(mod: Module): void {
    const code_block = mod.get_code_block(this.index)

    this.output = ""

    if (code_block === undefined) {
      return
    }

    for (const output of code_block.outputs) {
      this.output += output.repr()
      this.output += "\n"
    }

    this.output = this.output.trim()
  }

  get code(): string {
    return hljs.highlight(this.text, { language: "typescript" }).value
  }

  async run(): Promise<void> {
    this.output = ""
    this.running = true

    // await ut.wait(1 * 1000)

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
}
</script>
