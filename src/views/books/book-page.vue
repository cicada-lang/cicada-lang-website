<template>
  <div class="md:py-10 px-6 py-6">
    <book-page-navbar :bookId="bookId" :pageName="pageName" :state="state" />
    <md-document
      :document="state.parseDocument(page)"
      :path-resolver="pathResolver"
      :custom-block-components="{
        Cicada: {
          component: require('@/components/cicada-block').default,
          props: (node) => ({
            pageName: pageName,
            index: node.value.index,
            text: node.text.trim(),
            page: page,
            book: state.book,
          }),
        },
      }"
    />
    <book-page-navbar
      class="my-6"
      :bookId="bookId"
      :pageName="pageName"
      :state="state"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { BookState as State } from "@/views/books/book-state"
import { BookPagePathResolver } from "./book-page-path-resolver"

@Component({
  name: "book-page",
  // prettier-ignore
  components: {
    "book-page-navbar": require("./book-page-navbar.vue").default,
    "cicabook-page-navbar": require("./book-page-navbar.vue").default,
    ...require("@/vendor/postmark/md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() bookId!: string
  @Prop() baseURL!: string
  @Prop() pageName!: string
  @Prop() state!: State

  pathResolver: BookPagePathResolver | null = null

  get page(): string | undefined {
    if (this.state) {
      return this.state.pages[this.pageName]
    }
  }

  @Watch("pageName")
  scrollToTop(): void {
    window.scrollTo(0, 0)
  }

  async mounted(): Promise<void> {
    this.pathResolver = new BookPagePathResolver({
      pageName: this.pageName,
      baseURL: this.baseURL,
    })
  }
}
</script>
