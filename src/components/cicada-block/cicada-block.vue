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
import { Component, Prop, Vue } from "vue-property-decorator"
import { Module } from "@cicada-lang/cicada/lib/module"
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

  get output(): string {
    const { outputs } = this.mod.code_blocks[this.index]

    let s = ""

    for (const output of outputs) {
      if (output) {
        s += output.repr()
        s += "\n"
      }
    }

    return s.trim() ? s : ""
  }

  get code(): string {
    return hljs.highlight(this.text, { language: "typescript" }).value
  }

  async run(): Promise<void> {
    await this.mod.run_to_the_end()
  }
}
</script>
