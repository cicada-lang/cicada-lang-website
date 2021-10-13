<template>
  <a
    :href="'#' + fragmentId"
    :id="fragmentId"
    :class="{
      'py-8': node.level === 1,
      'py-6': node.level === 2,
      'py-4': node.level === 3,
      'py-3': node.level === 4,
      'py-2': node.level === 5,
      'py-1': node.level === 6,
    }"
  >
    <md-node
      class="inline font-serif font-bold"
      :class="{
        'text-5xl': node.level === 1,
        'text-4xl': node.level === 2,
        'text-3xl': node.level === 3,
        'text-2xl': node.level === 4,
        'text-xl': node.level === 5,
        'text-xl': node.level === 6,
      }"
      style="font-family: inherit"
      v-for="(child, index) in node.children"
      :key="index"
      :node="child"
    />
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Nodes } from "@xieyuheng/postmark"
import { paramCase } from "change-case"

@Component({
  name: "md-headline",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() node!: Nodes.Headline

  get fragmentId(): string {
    return paramCase(this.node.children.map((child) => child.format()).join(""))
  }
}
</script>
