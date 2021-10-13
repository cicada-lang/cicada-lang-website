<template>
  <div class="flex flex-col">
    <md-node
      class="py-2"
      v-for="(child, index) in document.children"
      :key="index"
      :node="child"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Nodes } from "@xieyuheng/postmark"

@Component({
  name: "md-document",
  // prettier-ignore
  components: {
    ...require("../md-nodes").components
  },
})
export default class extends Vue {
  @Prop() document!: Nodes.Document
}
</script>
