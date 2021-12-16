<template>
  <div class="py-4">
    <page-logo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "page-header",
  // prettier-ignore
  components: {
    "page-logo": require("./page-logo.vue").default,
  },
})
export default class extends Vue {}
</script>
