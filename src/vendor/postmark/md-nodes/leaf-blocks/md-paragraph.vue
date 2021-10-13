<template>
  <div>
    <md-node
      v-for="(child, index) in node.children"
      :key="index"
      :node="child"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node } from "@xieyuheng/postmark"

@Component({
  name: "md-paragraph",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() node!: Node
}
</script>
