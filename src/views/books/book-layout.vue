<template>
  <div class="max-w-3xl mx-auto">
    <div v-if="error">
      <pre class="text-rose-800">{{ error }}</pre>
    </div>
    <div v-else-if="!state" class="flex flex-col items-center">
      <div class="py-6 text-xl text-gray-600">
        <p>Loading book ...</p>
      </div>
    </div>

    <book-contents v-else-if="frontMatter === 'contents'" :state="state" />
    <book-page
      v-else-if="state.pageName"
      :pageName="state.pageName"
      :state="state"
    />
    <book-title-page v-else :state="state" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { BookState as State } from "@/views/books/book-state"
import { MetaInfo } from "vue-meta"

@Component({
  name: "book-layout",
  // prettier-ignore
  components: {
    "book-title-page": require("@/views/books/book-title-page.vue").default,
    "book-contents": require("@/views/books/book-contents.vue").default,
    "book-page": require("@/views/books/book-page.vue").default,
  },
  metaInfo(this: BookLayout): MetaInfo {
    return {
      title: this.state?.bookConfig.title,
    }
  },
})
export default class BookLayout extends Vue {
  @Prop() bookId!: string
  @Prop() frontMatter!: string | undefined
  @Prop() backMatter!: string | undefined

  state: State | null = null
  error: unknown | null = null

  async mounted(): Promise<void> {
    try {
      this.state = await State.build({ bookId: this.bookId })
    } catch (error) {
      this.error = error
    }
  }

  @Watch("$route", { immediate: true, deep: true })
  updateState(route: any): void {
    this.bookId = route.params.pathMatch
    this.frontMatter = route.query["front-matter"]
    this.backMatter = route.query["back-matter"]
    if (this.state) {
      this.state.updateBookId(this.bookId)
    }
  }
}
</script>
