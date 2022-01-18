<template>
  <div class="flex flex-wrap justify-between items-center md:py-3 w-full">
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

<script setup lang="ts">
import PageLogo from "./PageLogo.vue"
</script>
