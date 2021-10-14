<template>
  <div
    class="
      flex flex-col
      px-3
      my-2
      font-sans
      text-gray-600
      border-l-4 border-gray-300
    "
  >
    <md-node
      class="py-2"
      style="font-family: inherit"
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node, Nodes } from "@xieyuheng/postmark"
import { MdDocumentState as State } from "../md-document-state"

@Component({
  name: "md-block-quote",
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
