<template>
  <li class="list-disc">
    <md-node
      v-for="(child, index) in node.children"
      :key="index"
      :node="child"
    />
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node } from "@xieyuheng/postmark"

@Component({
  name: "md-bullet-list-item",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components
  },
})
export default class extends Vue {
  @Prop() node!: Node
}
</script>
