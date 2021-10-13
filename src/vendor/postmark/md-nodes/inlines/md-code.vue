<template>
  <!-- NOTE We use the following div to avoid `font-family: inherit;`
       which is setted by `md-link` and so on.
  -->
  <span
    ><code class="font-mono font-normal break-all" style="font-size: 88%">{{
      node.text
    }}</code></span
  >
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node } from "@xieyuheng/postmark"

@Component({
  name: "md-code",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() node!: Node
}
</script>
