<script setup lang="ts">
import { PlaygroundState as State } from './PlaygroundState'

defineProps<{
  state: State
}>()
</script>

<template>
  <div class="h-full w-full overflow-y-auto">
    <div v-if="state.error" class="h-full w-full overflow-y-auto">
      <pre
        class="whitespace-pre-line px-3 py-2 text-base"
        v-html="state.error.message"
      ></pre>
    </div>

    <div
      v-else
      class="flex h-full w-full flex-col overflow-x-auto overflow-y-auto"
    >
      <div class="p-3 font-mono text-sm text-theme-600 md:text-base">
        <div v-for="(output, index) in state.outputs" :key="index">
          <div v-if="output" v-html="output" class="whitespace-pre-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>
