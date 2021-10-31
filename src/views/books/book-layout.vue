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
import { BookState as State } from "@/views/books/book-state"
import { MetaInfo } from "vue-meta"

@Component({
  name: "book-layout",
  metaInfo(this: BookLayout): MetaInfo {
    return {
      title: this.state?.bookConfig.title,
    }
  },
})
export default class BookLayout extends Vue {
  @Prop() bookId!: string

  state: State | null = null
  error: unknown | null = null

  async mounted(): Promise<void> {
    try {
      this.state = await State.build({
        bookId: this.bookId,
      })
    } catch (error) {
      this.error = error
    }
  }
}
</script>
