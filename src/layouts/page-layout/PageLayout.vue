<template>
  <div class="max-w-3xl p-4 mx-auto font-serif text-xl">
    <PageHeader />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "PageLayout",
  // prettier-ignore
  components: {
    "PageHeader": require("./PageHeader.vue").default,
  },
})
</script>
