<template>
  <br v-if="state.document.attributes.newline === 'preserve'" />
  <span v-else>&nbsp;</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node, Nodes } from "@xieyuheng/postmark"
import { MdDocumentState as State } from "../md-document-state"

@Component({
  name: "md-soft-line-break",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() state!: State
  @Prop() node!: Node
}
</script>
