<template>
  <div>
    <div>TODO</div>

    <div>bookId: {{ bookId }}</div>
    <div>pageName: {{ pageName }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { BookState as State } from "@/views/book/book-state"

@Component({
  name: "book-page",
  // prettier-ignore
  components: {
    // TODO
  },
})
export default class extends Vue {
  @Prop() bookId!: string
  @Prop() pageName!: string

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
