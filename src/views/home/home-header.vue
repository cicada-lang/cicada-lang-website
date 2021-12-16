<template>
  <div>
    <home-logo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "home-header",
  // prettier-ignore
  components: {
    "home-logo": require("@/views/home/home-logo.vue").default,
  },
})
export default class extends Vue {}
</script>
