<template>
  <pre
    class="overflow-x-auto"
    style="font-size: 92%"
  ><code style="padding: 1rem 0rem; background-color: inherit;">{{ node.text }}</code></pre>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node, Nodes } from "@xieyuheng/postmark"
import { MdDocumentState as State } from "../md-document-state"
import hljs from "highlight.js"

@Component({
  name: "md-code-block",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() state!: State
  @Prop() node!: Node

  mounted(): void {
    hljs.highlightAll()
  }
}
</script>
