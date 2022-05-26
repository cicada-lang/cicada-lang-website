<template>
  <div class="flex w-full flex-wrap items-center justify-between md:py-3">
    <router-link :to="{ path: `/` }">
      <PageLogo class="my-2 text-2xl md:text-4xl" />
    </router-link>

    <div class="flex flex-wrap font-sans text-gray-400">
      <router-link class="pr-4 hover:text-gray-900" :to="{ path: `/docs` }">
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
