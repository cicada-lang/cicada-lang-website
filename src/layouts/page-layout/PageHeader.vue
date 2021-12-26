<template>
  <div class="flex flex-wrap items-baseline justify-between pb-8">
    <router-link :to="{ path: `/` }">
      <PageLogo class="my-2" />
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
import { defineComponent } from "vue"

export default defineComponent({
  name: "PageHeader",
  // prettier-ignore
  components: {
    "PageLogo": require("./PageLogo.vue").default,
  },
})
</script>
