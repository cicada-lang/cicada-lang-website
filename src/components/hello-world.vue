<template>
  <div>
    <h1 class="p-2 font-bold">hello world!</h1>
    <h1 class="p-2">hi! {{ name }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "hello-world",
  props: {
    name: String,
  },
})
</script>
