<template>
  <pre
    class="overflow-x-auto"
    style="font-size: 92%"
  ><code>{{ node.text }}</code></pre>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node } from "@xieyuheng/postmark"

@Component({
  name: "md-code-block",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() node!: Node
}
</script>
