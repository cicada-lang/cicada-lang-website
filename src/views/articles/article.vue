<template>
  <div class="md:py-10 max-w-2xl px-6 py-6 mx-auto">
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
    <div v-else-if="!state" class="flex flex-col items-center">
      <div class="py-4">Loading...</div>
    </div>
    <div v-else>
      <md-document
        :document="state.document"
        :path-resolver="pathResolver"
        :custom-block-components="{
          Cicada: {
            component: require('@/components/cicada-block').default,
            props: (node) => ({
              text: node.text.trim(),
              index: node.value.index,
            }),
          },
        }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { ArticleState as State } from "./article-state"
import { ArticlePathResolver } from "./article-path-resolver"

@Component({
  name: "cicada-article",
  // prettier-ignore
  components: {
    ...require("@/vendor/postmark/md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() articleId!: string
  @Prop() baseURL!: string

  state: State | null = null
  error: unknown | null = null
  pathResolver: ArticlePathResolver | null = null

  async mounted(): Promise<void> {
    try {
      this.state = await State.build({
        articleId: this.articleId,
      })
      this.pathResolver = new ArticlePathResolver({
        articleId: this.state.articleId,
        baseURL: this.baseURL,
      })
    } catch (error) {
      this.error = error
    }
  }
}
</script>
