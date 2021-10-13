<template>
  <div class="md:py-10 max-w-3xl px-6 py-6 mx-auto">
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
    <div v-else-if="!state" class="flex flex-col items-center">
      <div class="py-4">Loading...</div>
    </div>
    <div v-else>
      <pre
        v-if="Object.keys(state.document.attributes).length > 0"
        class="overflow-x-auto"
        >{{ state.document.attributes }}</pre
      >
      <md-document :document="state.document" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { ArticleState as State } from "./article-state"

@Component({
  name: "cicada-article",
  // prettier-ignore
  components: {
    ...require("@/vendor/postmark/md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() articleId!: string

  state: State | null = null
  error: unknown | null = null

  async mounted(): Promise<void> {
    try {
      this.state = await State.build(this.articleId)
    } catch (error) {
      this.error = error
    }
  }
}
</script>
