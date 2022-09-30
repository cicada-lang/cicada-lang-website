<script setup lang="ts">
import { nextTick, watch, reactive, onMounted, onErrorCaptured } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { PlaygroundState as State } from './PlaygroundState'
import debounce from 'lodash/debounce'
import { Base64 } from 'js-base64'

import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import PlaygroundHeader from './PlaygroundHeader.vue'
import PlaygroundOutput from './PlaygroundOutput.vue'
import PlaygroundEditor from './PlaygroundEditor.vue'

defineProps<{ encoded: String }>()

const router = useRouter()
const route = useRoute()

const state = reactive(new State()) as State

onErrorCaptured((error, component, info) => {
  state.catchError(error)
  return false
})

watch(
  route,
  () => {
    state.text = Base64.decode(route.params.encoded as string)
  },
  { immediate: true },
)

watch(
  () => state.text,
  debounce(async (text) => {
    const path = `/playground/${Base64.encodeURI(text)}`
    const href = window.location.origin + path
    const url = new URL(href)
    router.replace({ path })
    await state.refresh(url)
  }, 300),
  { immediate: true },
)
</script>

<template>
  <div class="flex h-screen flex-col">
    <PlaygroundHeader :state="state" />
    <div class="flex h-full flex-col overflow-y-auto md:flex-row">
      <PlaygroundEditor
        class="shrink grow md:w-1/2 md:resize-x"
        style="min-height: 30rem"
        :state="state"
      />
      <PlaygroundOutput
        class="shrink grow border-l border-theme-300 md:w-1/2"
        :state="state"
      />
    </div>
  </div>
</template>
