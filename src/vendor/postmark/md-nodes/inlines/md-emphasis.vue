<template>
  <span class="font-sans italic"
    ><md-node
      style="font-family: inherit"
      v-for="(child, index) in node.children"
      :key="index"
      :node="child"
  /></span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node } from "@xieyuheng/postmark"

@Component({
  name: "md-emphasis",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() node!: Node
}
</script>
