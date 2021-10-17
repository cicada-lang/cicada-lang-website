<template>
  <div class="flex flex-col">
    <pre
      class="py-4 overflow-x-auto"
      style="font-size: 92%"
      v-html="code"
    ></pre>
    <button
      @click="run()"
      class="text-sm text-gray-700 hover:text-gray-500 self-end"
    >
      RUN
    </button>
    <pre v-show="output" class="py-4 overflow-x-auto" style="font-size: 92%">{{
      output
    }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Book } from "@cicada-lang/cicada/lib/book"
import hljs from "highlight.js"

@Component({
  name: "cicada-block",
  // prettier-ignore
  components: {

  },
})
export default class extends Vue {
  @Prop() text!: string
  @Prop() book!: Book
  @Prop() pageName!: string

  output: string = ""

  get code(): string {
    return hljs.highlight(this.text, { language: "typescript" }).value
  }

  async run(): Promise<void> {
    const mod = await this.book.load(this.pageName)
    await mod.run()
    this.output = mod.all_output
  }
}
</script>
