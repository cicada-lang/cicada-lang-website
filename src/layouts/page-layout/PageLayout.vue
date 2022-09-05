<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'

import PageHeader from './PageHeader.vue'
import PageFooter from './PageFooter.vue'

const route = useRoute()

watch(
  () => route.path,
  () => {
    window.scrollTo(0, 0)
  },
  { immediate: true },
)
</script>

<template>
  <div class="flex w-full flex-col items-center font-serif text-xl">
    <div
      class="fixed flex w-full flex-col items-center bg-white px-4 opacity-90 shadow"
    >
      <PageHeader class="max-w-5xl" />
    </div>

    <div
      class="flex min-h-screen w-full max-w-5xl flex-col px-4 pt-20 md:pt-28"
    >
      <slot />
    </div>

    <div
      class="flex w-full flex-col items-center border-t border-stone-200 bg-stone-50 px-4"
    >
      <PageFooter class="max-w-5xl" />
    </div>
  </div>
</template>
