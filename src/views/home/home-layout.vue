<template>
  <div class="md:py-10 max-w-3xl px-3 py-6 mx-auto font-serif text-xl">
    <home-page />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "home-layout",
  // prettier-ignore
  components: {
    "home-page": require("@/views/home/home-page.vue").default
  },
})
export default class extends Vue {}
</script>
