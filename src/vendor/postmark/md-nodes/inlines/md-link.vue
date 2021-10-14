<template>
  <!-- NOTE A link starts with `http` is viewed as an external link. -->
  <a
    class="inline-flex items-center font-sans underline"
    :href="state.pathResolver.resolve(node.href)"
    :title="node.title"
    :target="state.pathResolver.target(node.href)"
    ><md-node
      style="font-family: inherit"
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child" /><icon-external-link
      v-if="state.pathResolver.isExternal(node.href)"
      class="p-1"
  /></a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node, Nodes } from "@xieyuheng/postmark"
import { MdDocumentState as State } from "../md-document-state"

@Component({
  name: "md-link",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components,
    "icon-external-link": require("../../components/icons/icon-external-link.vue").default,
  },
})
export default class extends Vue {
  @Prop() state!: State
  @Prop() node!: Nodes.Link
}
</script>
