<template>
  <div class="max-w-3xl p-4 mx-auto font-serif text-xl">
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
