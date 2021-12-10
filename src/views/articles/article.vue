<template>
  <md-document
    :document="state.document"
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
import { Component, Prop, Vue } from "vue-property-decorator"
import { ArticleState as State } from "./article-state"

@Component({
  name: "cicada-article",
  components: {
    ...require("@xieyuheng/postmark-components-vue2").components,
  },
})
export default class extends Vue {
  @Prop() state!: State
}
</script>
