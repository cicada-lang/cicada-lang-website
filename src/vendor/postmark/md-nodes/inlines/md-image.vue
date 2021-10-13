<template>
  <img class="py-1" :src="node.href" :alt="node.title" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node } from "@xieyuheng/postmark"

@Component({
  name: "md-image",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() node!: Node
}
</script>
