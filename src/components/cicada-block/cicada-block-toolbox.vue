<template>
  <div class="flex justify-end space-x-2">
    <button
      @click="$emit('run')"
      title="Run cicada code"
      class="hover:text-gray-500 self-end text-sm text-gray-700"
    >
      RUN
    </button>
    <button
      @click="$emit('deactivate')"
      class="hover:text-gray-500 self-end text-sm text-gray-700"
      title="Deactivate editor"
    >
      X
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"

@Component({
  name: "cicada-block-toolbox",
})
export default class extends Vue {}
</script>
