<template>
  <div class="md:mx-auto mx-6 md:py-10 py-6 max-w-prose">
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
    <div v-else>
      {{ reference }}
      {{ bookConfig }}
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

  async mounted(): Promise<void> {
    try {
      this.state = new State({
        reference: this.reference,
      })
      this.bookConfig = await this.state.files.get("book.json")
      console.log(await this.state.files.all())
    } catch (error) {
      this.error
    }
  }
}
</script>
