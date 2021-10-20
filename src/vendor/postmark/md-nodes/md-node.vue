<!-- prettier-ignore -->
<template>
  <!-- NOTE container-blocks -->
  <md-block-quote v-if="node.kind === 'BlockQuote'" :state="state" :node="node" />
  <md-bullet-list v-else-if="node.kind === 'BulletList'" :state="state" :node="node" />
  <md-bullet-list-item v-else-if="node.kind === 'BulletListItem'" :state="state" :node="node"
  />
  <md-ordered-list v-else-if="node.kind === 'OrderedList'" :state="state" :node="node" />
  <md-ordered-list-item v-else-if="node.kind === 'OrderedListItem'" :state="state" :node="node"
  />
  <!-- NOTE leaf-blocks -->
  <md-paragraph v-else-if="node.kind === 'Paragraph'" :state="state" :node="node" />
  <md-table v-else-if="node.kind === 'Table'" :state="state" :node="node" />
  <md-headline v-else-if="node.kind === 'Headline'" :state="state" :node="node" />
  <md-thematic-break v-else-if="node.kind === 'ThematicBreak'" :state="state" :node="node" />
  <md-html-block v-else-if="node.kind === 'HtmlBlock'" :state="state" :node="node" />
  <md-code-block v-else-if="node.kind === 'CodeBlock'" :state="state" :node="node" />
  <md-custom-block v-else-if="node.kind === 'CustomBlock'" :state="state" :node="node" />
  <!-- NOTE inlines -->
  <md-emphasis v-else-if="node.kind === 'Emphasis'" :state="state" :node="node" />
  <md-strong v-else-if="node.kind === 'Strong'" :state="state" :node="node" />
  <md-text v-else-if="node.kind === 'Text'" :state="state" :node="node" />
  <md-soft-line-break v-else-if="node.kind === 'SoftLineBreak'" :state="state" :node="node" />
  <md-hard-line-break v-else-if="node.kind === 'HardLineBreak'" :state="state" :node="node" />
  <md-link v-else-if="node.kind === 'Link'" :state="state" :node="node" />
  <md-image v-else-if="node.kind === 'Image'" :state="state" :node="node" />
  <md-code v-else-if="node.kind === 'Code'" :state="state" :node="node" />
  <md-html-tag v-else-if="node.kind === 'HtmlTag'" :state="state" :node="node" />
  <!-- NOTE unhandled -->
  <span
    v-else
    class="border-rose-400 text-rose-400 font-bold border-2"
    title="Unhandled Markdown Node"
    >{{ node.kind }}</span
  >
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node, Nodes } from "@xieyuheng/postmark"
import { MdDocumentState as State } from "./md-document-state"

@Component({
  name: "md-node",
  // prettier-ignore
  components: {
    ...require("../md-nodes").components
  },
})
export default class extends Vue {
  @Prop() state!: State
  @Prop() node!: Node
}
</script>
