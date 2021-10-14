<template>
  <li class="list-decimal">
    <md-node
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child"
    />
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node, Nodes } from "@xieyuheng/postmark"
import { MdDocumentState as State } from "../md-document-state"

@Component({
  name: "md-ordered-list-item",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components
  },
})
export default class extends Vue {
  @Prop() state!: State
  @Prop() node!: Node
}
</script>
