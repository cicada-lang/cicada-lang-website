<template>
  <div class="flex flex-wrap items-baseline justify-between pb-8">
    <router-link :to="{ path: `/` }">
      <page-logo class="my-2" />
    </router-link>

    <div class="flex flex-wrap font-sans text-gray-400">
      <router-link class="hover:text-gray-900 pr-4" :to="{ path: `/docs` }">
        DOCS
      </router-link>
      <router-link class="hover:text-gray-900" :to="{ path: `/about` }">
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
