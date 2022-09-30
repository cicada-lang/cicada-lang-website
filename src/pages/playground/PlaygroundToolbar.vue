<script setup lang="ts">
import { useRoute } from 'vue-router'
import { PlaygroundState as State } from './PlaygroundState'

const route = useRoute()

defineProps<{
  state: State
}>()

async function share() {
  try {
    const url = window.location.href
    await navigator.clipboard.writeText(url)
    window.alert(`URL copied to clipboard!`)
  } catch (error) {
    if (error instanceof Error) {
      window.alert(error.message)
    }
  }
}
</script>

<template>
  <div>
    <button class="text-theme-900 font-logo text-base" @click="share()">
      SHARE
    </button>
  </div>
</template>
