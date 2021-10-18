<template>
  <div class="flex flex-col">
    <pre
      class="py-4 overflow-x-auto"
      style="font-size: 92%"
      v-html="code"
    ></pre>
    <button
      @click="run()"
      class="hover:text-gray-500 self-end text-sm text-gray-700"
    >
      RUN
    </button>
    <div v-if="running" class="text-sm font-sans text-orange-600">Running...</div>
    <pre
      v-show="output"
      class="py-4 text-orange-500 overflow-x-auto"
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
})
export default class extends Vue {
  @Prop() pageName!: string
  @Prop() index!: number
  @Prop() text!: string
  @Prop() page!: string
  @Prop() book!: Book

  output: string = ""
  running: boolean = false

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
