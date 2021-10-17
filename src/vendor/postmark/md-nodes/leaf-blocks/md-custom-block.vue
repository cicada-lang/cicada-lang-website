<template>
  <component
    v-if="customBlockEntry"
    :is="customBlockEntry.component"
    v-bind="customBlockEntry.props(node)"
    :style="customBlockEntry.style"
    :class="customBlockEntry.class"
    :state="state"
    :node="node"
  />
  <span
    v-else
    class="border-rose-400 text-rose-400 font-bold border-2"
    title="Unhandled CustomBlock"
    >{{ node.customKind }}</span
  >
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node, Nodes } from "@xieyuheng/postmark"
import {
  CustomBlockEntry,
  MdDocumentState as State,
} from "../md-document-state"

@Component({
  name: "md-custom-block",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() state!: State
  @Prop() node!: Nodes.CustomBlock<unknown>

  get customBlockEntry(): CustomBlockEntry | undefined {
    return this.state.customBlockComponents[this.node.customKind]
  }
}
</script>
