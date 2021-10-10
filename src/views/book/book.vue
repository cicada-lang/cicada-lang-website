<template>
  <div
    class="md:py-20 max-w-prose px-6 py-6 mx-auto font-serif text-2xl h-screen"
  >
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
    <div v-else-if="!state" class="flex flex-col items-center">
      <div class="py-4">Loading...</div>
    </div>
    <div v-else class="flex flex-col justify-between items-center h-full">
      <h1 class="py-4 font-sans text-4xl font-bold">
        <span class="pl-4 pr-1">{{ state.bookConfig.title }}</span>
        <span class="text-sm">{{ state.bookConfig.version }}</span>
      </h1>

      <section
        v-if="state.bookConfig.authors && state.bookConfig.authors.length > 0"
        class="py-4"
      >
        <div
          class="font-sans font-bold"
          v-for="author in state.bookConfig.authors"
        >
          {{ author }}
        </div>
      </section>

      <section class="px-4 flex flex-col items-center">
        <div class="py-1 font-sans">
          <span>{{ state.bookId.path }}</span>
          <span> @ {{ state.bookId.host }}</span>
        </div>

        <div v-if="state.bookConfig.date" class="py-1">
          <div class="font-sans">{{ state.bookConfig.date }}</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { BookState as State } from "@/views/book/book-state"

@Component({
  name: "book",
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
      this.state = await State.build(this.bookId)
    } catch (error) {
      this.error = error
    }
  }
}
</script>
