<template>
  <div class="md:py-10 max-w-2xl px-6 py-6 mx-auto">
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
    <div v-else-if="!state" class="flex flex-col items-center">
      <div class="py-4">Loading...</div>
    </div>
    <router-view v-else :state="state" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { ArticleState as State } from "./article-state"

@Component({
  name: "cicada-article-layout",
  // prettier-ignore
  components: {

  },
})
export default class extends Vue {
  @Prop() articleId!: string

  state: State | null = null
  error: unknown | null = null

  async mounted(): Promise<void> {
    try {
      this.state = await State.build({
        articleId: this.articleId,
      })
    } catch (error) {
      this.error = error
    }
  }
}
</script>
