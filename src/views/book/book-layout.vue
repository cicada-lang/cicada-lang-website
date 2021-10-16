<template>
  <div class="max-w-3xl mx-auto">
    <div v-if="error">
      <pre class="text-rose-800">{{ error }}</pre>
    </div>
    <div v-else-if="!state" class="flex flex-col items-center">
      <div class="py-4">Loading...</div>
    </div>
    <router-view v-else :state="state" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { BookState as State } from "@/views/book/book-state"

@Component({
  name: "book-layout",
  // prettier-ignore
  components: {

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
