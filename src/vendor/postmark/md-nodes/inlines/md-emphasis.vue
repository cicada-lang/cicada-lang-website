<template>
  <span class="font-sans italic"
    ><md-node
      style="font-family: inherit"
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child"
  /></span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node, Nodes } from "@xieyuheng/postmark"
import { MdDocumentState as State } from "../md-document-state"

@Component({
  name: "md-emphasis",
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
