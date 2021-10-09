<template>
  <div class="md:mx-auto mx-6 md:py-10 py-6 max-w-prose">
    {{ bookname }}
    {{ test }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { BookState as State } from "@/views/book/book-state"

export default defineComponent({
  name: "book",
  props: {
    bookname: String,
  },
  data() {
    return new State({
      test: "abcd",
    })
  },
  components: {
    // TODO
  },
})
</script>
