<script setup lang="ts">
import { PlaygroundState as State } from './PlaygroundState'
import PlaygroundToolbar from './PlaygroundToolbar.vue'
import Link from '../../components/Link.vue'

defineProps<{
  state: State
}>()
</script>

<template>
  <div
    class="border-theme-300 bg-theme-200 flex items-center justify-between border-b px-3 py-2"
  >
    <Link
      href="/playground"
      class="text-theme-900 font-logo text-xl font-semibold"
    >
      Cicada Playground
    </Link>
    <PlaygroundToolbar :state="state" />
  </div>
</template>
