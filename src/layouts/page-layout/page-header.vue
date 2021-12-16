<template>
  <div class="flex items-baseline justify-between py-4">
    <page-logo />

    <div class="flex space-x-4 font-sans">
      <router-link class="hover:text-gray-400" :to="{ path: `/books` }">
        BOOKS
      </router-link>
      <router-link class="hover:text-gray-400" :to="{ path: `/articles` }">
        ARTICLES
      </router-link>
    </div>
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
