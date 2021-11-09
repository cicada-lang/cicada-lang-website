<template>
  <div class="flex flex-col">
    <h1
      v-if="document.attributes.title"
      class="md:text-5xl pt-6 pb-2 text-4xl font-bold"
    >
      {{ document.attributes.title }}
    </h1>

    <md-document-attributes :state="state" />

    <md-node
      class="py-2"
      v-for="(child, index) in document.children"
      :key="index"
      :state="state"
      :node="child"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Nodes } from "@xieyuheng/postmark"
import { CustomBlockEntry, MdDocumentState as State } from "./md-document-state"

@Component({
  name: "md-document",
  // prettier-ignore
  components: {
    ...require("../md-nodes").components,
    "md-document-attributes": require("./md-document-attributes.vue").default,
  },
})
export default class extends Vue {
  @Prop() document!: Nodes.Document
  @Prop() customBlockComponents!: Record<string, CustomBlockEntry>

  state = new State({
    document: this.document,
    customBlockComponents: this.customBlockComponents,
  })
}
</script>
