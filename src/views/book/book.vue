<template>
  <div class="md:mx-auto mx-6 md:py-10 py-6 max-w-prose">
    <div v-if="state.error">
      <pre>{{ state.error }}</pre>
    </div>
    <div v-else>
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
    const state = new State({
      reference: this.reference,
    })

    return { state }
  },

  async mounted() {
    // console.log(await this.state.files.keys())
  },
}
</script>
