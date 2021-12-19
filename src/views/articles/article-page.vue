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
          pageName: state.pageName,
          page: state.text,
          mod: state.mod,
        }),
      },
    }"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { ArticleState as State } from "./article-state"

@Component({
  name: "article-page",
  components: {
    ...require("@xieyuheng/postmark-components-vue2").components,
  },
})
export default class extends Vue {
  @Prop() state!: State

  @Watch("state.pageName")
  scrollToTop(): void {
    window.scrollTo(0, 0)
  }
}
</script>
