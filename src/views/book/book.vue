<template>
  <div class="md:py-10 max-w-prose px-6 py-6 mx-auto font-serif text-2xl">
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
    <div v-else-if="!state" class="flex flex-col items-center">
      <div class="py-4">Loading...</div>
    </div>
    <div v-else class="flex flex-col items-center">
      <h1 class="py-4 font-sans text-4xl font-bold">
        <span class="pl-4 pr-1">{{ state.bookConfig.title }}</span>
        <span class="text-sm">{{ state.bookConfig.version }}</span>
      </h1>

      <div
        v-if="state.bookConfig.authors && state.bookConfig.authors.length > 0"
        class="py-4"
      >
        <div
          class="font-sans font-bold"
          v-for="author in state.bookConfig.authors"
        >
          {{ author }}
        </div>
      </div>

      <div v-if="state.bookConfig.date" class="py-4">
        <div class="font-sans">{{ state.bookConfig.date }}</div>
      </div>
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
  @Prop() reference!: any

  state: State | null = null
  error: unknown | null = null

  async mounted(): Promise<void> {
    try {
      this.state = await State.build({ reference: this.reference })
    } catch (error) {
      this.error = error
    }
  }
}
</script>
