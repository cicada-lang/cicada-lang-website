<template>
  <div class="mt-4 mb-8 border-b-2 border-gray-400"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node } from "@xieyuheng/postmark"

@Component({
  name: "md-thematic-break",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() node!: Node
}
</script>
