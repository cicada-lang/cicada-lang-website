<template>
  <!-- NOTE A link starts with `http` is viewed as an external link. -->
  <a
    v-if="isExternal(node.href)"
    class="inline-flex items-center font-sans underline"
    :href="node.href"
    :title="node.title"
    :target="target(node.href)"
    ><md-node
      style="font-family: inherit"
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child" /><icon-external-link class="p-1"
  /></a>
  <router-link
    v-else
    class="inline-flex items-center font-sans underline"
    :to="node.href"
    :title="node.title"
    ><md-node
      style="font-family: inherit"
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child"
  /></router-link>
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

  isExternal(path: string): boolean {
    return path.startsWith("http://") || path.startsWith("https://")
  }

  target(path: string): string {
    if (this.isExternal(path)) {
      return "_blank"
    } else {
      return "_self"
    }
  }
}
</script>
