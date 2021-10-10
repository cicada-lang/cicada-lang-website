<template>
  <div class="md:mx-auto mx-6 md:py-10 py-6 max-w-prose">
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
    <div v-else>
      {{ test }}
      {{ reference }}
    </div>
  </div>
</template>

<script>
import { BookState as State } from "@/views/book/book-state"

export default {
  name: "book",

  components: {
    // TODO
  },

  props: ["reference"],

  data() {
    try {
      const state = new State({
        reference: this.reference,
      })

      return { state, error: undefined }
    } catch (error) {
      return { state: undefined, error }
    }
  },

  async mounted() {
    console.log(await this.state.files.all())
  },
}
</script>
