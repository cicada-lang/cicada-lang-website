<template>
  <!-- NOTE We use the following div to avoid `font-family: inherit;`
       which is setted by `md-link` and so on.
  -->
  <span
    ><code class="font-mono font-normal break-words" style="font-size: 88%">{{
      node.text
    }}</code></span
  >
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node, Nodes } from "@xieyuheng/postmark"
import { MdDocumentState as State } from "../md-document-state"

@Component({
  name: "md-code",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() state!: State
  @Prop() node!: Node
}
</script>
