<template>
  <div class="md:py-12 max-w-prose px-6 py-6 mx-auto font-serif text-2xl">
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
    <div v-else-if="!(state && state.pages)" class="flex flex-col items-center">
      <div class="py-4">Loading...</div>
    </div>
    <div v-else class="flex flex-col">
      <div v-for="(text, path) in state.pages" :key="path">{{ path }}</div>
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
      this.state = await State.build({
        bookId: this.bookId,
      })
      this.state.loadPages()
    } catch (error) {
      this.error = error
    }
  }
}
</script>
