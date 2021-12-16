<template>
  <div class="md:py-10 max-w-3xl px-3 py-6 mx-auto font-serif text-xl">
    <page-header />
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "page-layout",
  // prettier-ignore
  components: {
    "page-header": require("./page-header.vue").default,
  },
})
export default class extends Vue {}
</script>
