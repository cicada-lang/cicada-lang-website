<template>
  <div class="flex items-baseline flex-wrap justify-between py-4">
    <page-logo class="my-2" />

    <div class="flex flex-wrap font-sans">
      <router-link class="hover:text-gray-400 pr-4" :to="{ path: `/books` }">
        BOOKS
      </router-link>
      <router-link class="hover:text-gray-400 pr-4" :to="{ path: `/articles` }">
        ARTICLES
      </router-link>
      <router-link class="hover:text-gray-400" :to="{ path: `/about` }">
        ABOUT
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
