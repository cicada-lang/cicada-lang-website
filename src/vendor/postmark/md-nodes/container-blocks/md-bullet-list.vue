<template>
  <ul class="flex flex-col px-4 py-4 space-y-2">
    <md-node
      style="font-family: inherit"
      v-for="(child, index) in node.children"
      :key="index"
      :node="child"
    />
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node } from "@xieyuheng/postmark"

@Component({
  name: "md-bullet-list",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components
  },
})
export default class extends Vue {
  @Prop() node!: Node
}
</script>
