<template>
  <div>
    <div v-for="output in outputs">
      <pre v-html="renderOutput(output)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { StmtOutput } from "@cicada-lang/cicada/lib/stmt"
import * as StmtOutputs from "@cicada-lang/cicada/lib/stmt/stmt-outputs"

@Component({
  name: "stmt-output-list",
  // prettier-ignore
  components: {

  },
})
export default class extends Vue {
  @Prop() outputs!: Array<StmtOutput>

  renderOutput(output: StmtOutput): string {
    if (output instanceof StmtOutputs.NormalTerm) {
      return [
        `<span class="text-orange-600">${output.exp.repr()}</span>`,
        `<span class="text-gray-500">: </span>`,
        `<span class="text-sky-700">${output.t.repr()}</span>`,
      ].join("")
    } else {
      return `<span class="text-orange-600">${output.repr()}</span>`
    }
  }
}
</script>
