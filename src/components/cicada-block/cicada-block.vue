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
      RUN {{ index }}
    </button>
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
import { Module } from "@cicada-lang/cicada/lib/module"
import { CodeBlock } from "@cicada-lang/cicada/lib/module/code-block"
import hljs from "highlight.js"

@Component({
  name: "cicada-block",
  // prettier-ignore
  components: {

  },
})
export default class extends Vue {
  @Prop() text!: string
  @Prop() pageName!: string
  @Prop() index!: number
  @Prop() mod!: Module
  @Prop() code_block!: CodeBlock

  output: string = ""

  @Watch("mod.index", { immediate: true })
  updateOutput(): void {
    const code_block = this.mod.get_code_block(this.index)

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
    await this.mod.run_to_the_end()
  }
}
</script>
