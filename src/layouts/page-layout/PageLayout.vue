<template>
  <div class="flex flex-col w-full font-serif items-center text-xl">
    <div
      class="w-full px-4 flex flex-col items-center shadow fixed bg-white md:opacity-90"
    >
      <PageHeader class="max-w-5xl" />
    </div>

    <div class="md:mt-28 mt-20 px-4 w-full flex flex-col max-w-5xl">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "./PageHeader.vue"
</script>
