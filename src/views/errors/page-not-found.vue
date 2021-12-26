<template>
  <page-layout>
    <section class="py-4 space-y-2">
      <h2>404</h2>
      <p>Page Not Found</p>
    </section>
  </page-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "page-not-found",
  // prettier-ignore
  components: {
    "page-layout": require("@/layouts/page-layout").default,
  },
})
</script>

<style scoped>
h2 {
  @apply py-1 font-sans text-2xl font-bold;
}
</style>
