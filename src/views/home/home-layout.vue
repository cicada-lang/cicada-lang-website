<template>
  <div class="md:py-10 max-w-3xl px-3 py-6 mx-auto font-serif text-xl">
    <home-header />
    <home-page />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "home-layout",
  // prettier-ignore
  components: {
    "home-header": require("@/views/home/home-header.vue").default,
    "home-page": require("@/views/home/home-page.vue").default,
  },
})
export default class extends Vue {}
</script>
