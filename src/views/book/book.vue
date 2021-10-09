<template>
  <div class="md:mx-auto mx-6 md:py-10 py-6 max-w-prose">
    {{ bookname }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "book",
  props: {
    bookname: String,
  },
  components: {
    // TODO
  },
})
</script>
