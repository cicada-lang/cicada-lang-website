<template>
  <div class="md:py-12 max-w-prose px-6 py-6 mx-auto font-serif text-2xl">
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
    <div v-else-if="!state" class="flex flex-col items-center">
      <div class="py-4">Loading...</div>
    </div>
    <div v-else class="flex flex-col">
      <div v-for="(text, pageName) in state.pages" :key="pageName">
        <router-link
          v-if="pageName.endsWith('.md')"
          :to="{ path: `/books/${bookId}/pages/${pageName}` }"
          class="font-sans underline"
        >
          {{ pageName }}
        </router-link>
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
