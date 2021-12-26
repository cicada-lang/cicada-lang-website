<template>
  <div class="max-w-3xl p-4 mx-auto font-serif text-xl">
    <page-header />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "page-layout",
  // prettier-ignore
  components: {
    "page-header": require("./page-header.vue").default,
  },
})
</script>
