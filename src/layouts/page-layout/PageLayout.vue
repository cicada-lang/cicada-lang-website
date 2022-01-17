<template>
  <div class="flex flex-col w-full font-serif text-xl">
    <div
      class="w-full px-6 flex flex-col items-center shadow fixed bg-white md:opacity-90"
    >
      <PageHeader class="max-w-5xl" />
    </div>

    <div class="mt-28 px-6 w-full flex flex-col items-center">
      <slot class="max-w-5xl" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "./PageHeader.vue"
</script>
