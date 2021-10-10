<template>
  <div class="md:mx-auto mx-6 md:py-10 py-6 max-w-prose">
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
    <div v-else>
      <div>{{ reference }}</div>
      <div>{{ bookConfig }}</div>
      <div>{{ files }}</div>
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
  bookConfig: any | null = null
  error: Error | null = null
  files: Record<string, string> | null = null

  async mounted(): Promise<void> {
    try {
      this.state = new State({ reference: this.reference })
      const text = await this.state.files.getOrFail("book.json")
      this.bookConfig = JSON.parse(text)
      this.files = await this.state.files.all()
      console.log(this.files)
    } catch (error) {
      this.error
    }
  }
}
</script>
