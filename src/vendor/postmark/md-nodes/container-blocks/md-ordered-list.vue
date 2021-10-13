<template>
  <ol class="flex flex-col px-4 py-4 space-y-2">
    <md-node
      style="font-family: inherit"
      v-for="(child, index) in node.children"
      :key="index"
      :node="child"
    />
  </ol>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node } from "@xieyuheng/postmark"

@Component({
  name: "md-ordered-list",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components
  },
})
export default class extends Vue {
  @Prop() node!: Node
}
</script>
