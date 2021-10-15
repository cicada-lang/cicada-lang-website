<template>
  <div class="md:py-10 max-w-3xl px-6 py-6 mx-auto">
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
    <div v-else-if="!state" class="flex flex-col items-center">
      <div class="py-4">Loading...</div>
    </div>
    <div v-else>
      <book-page-navbar :bookId="bookId" :pageName="pageName" :state="state" />
      <md-document
        :document="state.parseDocument(page)"
        :path-resolver="pathResolver"
        :custom-block-components="{}"
      />
      <book-page-navbar
        class="my-6"
        :bookId="bookId"
        :pageName="pageName"
        :state="state"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { BookState as State } from "@/views/book/book-state"
import { BookPagePathResolver } from "./book-page-path-resolver"

@Component({
  name: "book-page",
  // prettier-ignore
  components: {
    "book-page-navbar": require("./book-page-navbar.vue").default,
    ...require("@/vendor/postmark/md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() bookId!: string
  @Prop() baseURL!: string
  @Prop() pageName!: string

  state: State | null = null
  error: unknown | null = null
  pathResolver: BookPagePathResolver | null = null

  get page(): string | undefined {
    if (this.state) {
      return this.state.pages[this.pageName]
    }
  }

  async mounted(): Promise<void> {
    try {
      this.state = await window.app.buildBookState({
        bookId: this.bookId,
      })

      this.pathResolver = new BookPagePathResolver({
        pageName: this.pageName,
        baseURL: this.baseURL,
      })
    } catch (error) {
      this.error = error
    }
  }
}
</script>
