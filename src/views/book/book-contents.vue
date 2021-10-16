<template>
  <div
    class="
      max-w-prose
      px-6
      py-6
      min-h-screen
      flex flex-col
      justify-center
      mx-auto
      font-serif
      text-2xl
    "
  >
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
    <div v-else-if="!state" class="flex flex-col items-center">
      <div class="py-4">Loading...</div>
    </div>
    <div v-else class="flex flex-col">
      <div v-for="(text, pageName) in state.pages" :key="pageName">
        <div v-if="pageName.endsWith('.md')">
          <router-link
            :to="{ path: `/books/${bookId}/pages/${pageName}` }"
            class="hover:text-gray-500 font-sans"
          >
            {{ state.parseDocument(text).attributes.title }}
          </router-link>
          <div
            class="
              font-sans
              text-xs
              italic
              leading-3
              tracking-tight
              text-right text-gray-600
            "
          >
            {{ pageName }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { BookState as State } from "@/views/book/book-state"

@Component({
  name: "book-contents",
  // prettier-ignore
  components: {
    // TODO
  },
})
export default class extends Vue {
  @Prop() bookId!: string

  state: State | null = null
  error: unknown | null = null

  async mounted(): Promise<void> {
    try {
      this.state = await window.app.buildBookState({
        bookId: this.bookId,
      })
    } catch (error) {
      this.error = error
    }
  }
}
</script>
