<template>
  <md-document
    :document="state.document"
    :path-resolver="pathResolver"
    :custom-block-components="{
      Cicada: {
        component: require('@/components/cicada-block').default,
        props: (node) => ({
          text: node.text.trim(),
          index: node.value.index,
          info: node.info,
          book: state.book,
          pageName: state.pageName,
          page: state.text,
        }),
      },
    }"
  />
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

  @Prop() state!: State

  pathResolver = new ArticlePathResolver({
    articleId: this.state.articleId,
    baseURL: this.baseURL,
  })
}
</script>
