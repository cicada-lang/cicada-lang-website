<template>
  <div class="hidden"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node, Nodes } from "@xieyuheng/postmark"
import { MdDocumentState as State } from "../md-document-state"

@Component({
  name: "md-html-block",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() state!: State
  @Prop() node!: Node

  mounted(): void {
    console.warn({
      msg: "We ignore `HtmlBlock` for now.",
      node: this.node,
    })
  }
}
</script>
