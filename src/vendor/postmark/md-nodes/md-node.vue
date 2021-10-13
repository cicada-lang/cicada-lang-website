<template>
  <!-- NOTE container-blocks -->
  <md-block-quote v-if="node.kind === 'BlockQuote'" :node="node" />
  <md-bullet-list v-else-if="node.kind === 'BulletList'" :node="node" />
  <md-bullet-list-item
    v-else-if="node.kind === 'BulletListItem'"
    :node="node"
  />
  <md-ordered-list v-else-if="node.kind === 'OrderedList'" :node="node" />
  <md-ordered-list-item
    v-else-if="node.kind === 'OrderedListItem'"
    :node="node"
  />
  <!-- NOTE leaf-blocks -->
  <md-paragraph v-else-if="node.kind === 'Paragraph'" :node="node" />
  <md-headline v-else-if="node.kind === 'Headline'" :node="node" />
  <md-thematic-break v-else-if="node.kind === 'ThematicBreak'" :node="node" />
  <md-html-block v-else-if="node.kind === 'HtmlBlock'" :node="node" />
  <md-code-block v-else-if="node.kind === 'CodeBlock'" :node="node" />
  <!-- NOTE inlines -->
  <md-emphasis v-else-if="node.kind === 'Emphasis'" :node="node" />
  <md-strong v-else-if="node.kind === 'Strong'" :node="node" />
  <md-text v-else-if="node.kind === 'Text'" :node="node" />
  <md-soft-line-break v-else-if="node.kind === 'SoftLineBreak'" :node="node" />
  <md-hard-line-break v-else-if="node.kind === 'HardLineBreak'" :node="node" />
  <md-link v-else-if="node.kind === 'Link'" :node="node" />
  <md-image v-else-if="node.kind === 'Image'" :node="node" />
  <md-code v-else-if="node.kind === 'Code'" :node="node" />
  <md-html-tag v-else-if="node.kind === 'HtmlTag'" :node="node" />
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

@Component({
  name: "md-node",
  // prettier-ignore
  components: {
    ...require("../md-nodes").components
  },
})
export default class extends Vue {
  @Prop() node!: Node
}
</script>
