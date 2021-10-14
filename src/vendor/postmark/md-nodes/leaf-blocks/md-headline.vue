<template>
  <a
    :href="'#' + fragmentId"
    :id="fragmentId"
    :class="{
      'py-4': node.level === 1,
      'py-3': node.level === 2,
      'py-2': node.level === 3,
      'py-2': node.level === 4,
      'py-2': node.level === 5,
      'py-1': node.level === 6,
    }"
  >
    <md-node
      class="inline font-serif font-bold"
      :class="{
        'md:text-4xl text-3xl': node.level === 1,
        'md:text-3xl text-2xl': node.level === 2,
        'md:text-2xl text-xl': node.level === 3,
        'md:text-xl text-xl': node.level === 4,
        'md:text-xl': node.level === 5,
        'md:text-xl': node.level === 6,
      }"
      style="font-family: inherit"
      v-for="(child, index) in node.children"
      :key="index"
      :state="state"
      :node="child"
    />
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { MdDocumentState as State } from "../md-document-state"
import { Node, Nodes } from "@xieyuheng/postmark"
import { paramCase } from "change-case"

@Component({
  name: "md-headline",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() state!: State
  @Prop() node!: Nodes.Headline

  get fragmentId(): string {
    return paramCase(this.node.children.map((child) => child.format()).join(""))
  }
}
</script>
