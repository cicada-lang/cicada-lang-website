<template>
  <div class="md:mx-auto mx-6 md:py-10 py-6 max-w-prose">
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
    <div v-else-if="!state">
      <div>Loading...</div>
    </div>
    <div v-else>
      <h1 class="text-4xl py-4 font-bold">{{ state.bookConfig.title }}</h1>
      <div>{{ state.bookConfig.version }}</div>
      <div v-if="state.bookConfig.authors">{{ state.bookConfig.authors }}</div>
      <div v-if="state.bookConfig.date">{{ state.bookConfig.date }}</div>
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
