<template>
  <div class="max-w-3xl p-4 mx-auto font-serif text-xl">
    <PageHeader />
    <slot />
  </div>
</template>

<script setup lang="ts">
import PageHeader from "./PageHeader.vue"
</script>
