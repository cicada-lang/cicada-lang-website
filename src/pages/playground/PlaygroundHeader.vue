<script setup lang="ts">
import { PlaygroundState as State } from './PlaygroundState'
import PlaygroundToolbar from './PlaygroundToolbar.vue'

defineProps<{
  state: State
}>()
</script>

<template>
  <div
    class="border-theme-300 bg-theme-200 flex items-center justify-between border-b px-3 py-2"
  >
    <router-link
      to="/playground"
      class="text-theme-900 font-logo text-xl font-semibold"
    >
      Playground
    </router-link>
    <PlaygroundToolbar :state="state" />
  </div>
</template>
