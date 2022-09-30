<script setup lang="ts">
import { useRoute } from 'vue-router'
import Link from '../../components/Link.vue'
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
  <div class="space-x-3">
    <Link class="font-semibold text-theme-900" href="/"> HOMEPAGE </Link>
    <button class="font-semibold text-theme-900" @click="share()">SHARE</button>
  </div>
</template>
