<template>
  <div class="md:py-10 max-w-3xl px-6 py-6 mx-auto">
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
    <div v-else-if="!state" class="flex flex-col items-center">
      <div class="py-4">Loading...</div>
    </div>
    <div v-else>
      <div class="flex justify-between font-sans text-gray-400">
        <div></div>

        <div>
          <router-link
            :to="{ path: `/books/${bookId}` }"
            class="hover:text-gray-700"
            title="Back to Title Page"
          >
            TITLE
          </router-link>
          /
          <router-link
            :to="{ path: `/books/${bookId}/contents` }"
            class="hover:text-gray-700"
            title="Back to Contents"
          >
            CONTENTS
          </router-link>
        </div>

        <div></div>
      </div>

      <md-document
        :document="state.parseDocument(page)"
        :path-resolver="pathResolver"
        :custom-block-components="{}"
      />

      <div class="flex justify-between font-sans text-gray-400">
        <div></div>

        <div>
          <router-link
            :to="{ path: `/books/${bookId}` }"
            class="hover:text-gray-700"
            title="Back to Title Page"
          >
            TITLE
          </router-link>
          /
          <router-link
            :to="{ path: `/books/${bookId}/contents` }"
            class="hover:text-gray-700"
            title="Back to Contents"
          >
            CONTENTS
          </router-link>
        </div>

        <div></div>
      </div>
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
