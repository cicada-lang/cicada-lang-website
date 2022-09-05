<template>
  <div class="flex w-full flex-wrap items-center justify-between md:py-3">
    <router-link :to="{ path: `/` }">
      <PageLogo class="my-2 text-2xl md:text-4xl" />
    </router-link>

    <div class="flex flex-wrap font-sans text-gray-400">
      <a class="pr-4 hover:text-gray-900"           href="https://readonly.link/manuals/cicada-lang/cicada"

          target="_blank">
        DOCS
      </a>
      <router-link class="hover:text-gray-900" :to="{ path: `/about` }">
        ABOUT
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageLogo from './PageLogo.vue'
</script>
