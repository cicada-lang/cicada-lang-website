<template>
  <button @click="showToolbox = !showToolbox">
    <icon-menu class="text-sky-500 w-4" />

    <modal-fade-drop
      v-show="showToolbox"
      class="relative"
      @close="showToolbox = false"
    >
      <div
        class="right-3 bg-sky-50 border-sky-200 absolute top-0 z-50 flex flex-col p-1 border rounded"
      >
        <button class="w-full" @click="$emit('run')" title="Run cicada code">
          <p class="hover:text-sky-300 text-sky-500 p-1 font-bold text-right">
            RUN
          </p>
        </button>
        <button
          class="w-full"
          @click="$emit('copy')"
          title="Copy code to clipboard"
        >
          <p class="hover:text-sky-300 text-sky-500 p-1 font-bold text-right">
            COPY
          </p>
        </button>
        <button
          class="w-full"
          @click="$emit('reset')"
          title="Reset to original code"
        >
          <p class="hover:text-sky-300 text-sky-500 p-1 font-bold text-right">
            RESET
          </p>
        </button>
      </div>
    </modal-fade-drop>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"

@Component({
  name: "cicada-block-toolbox",
  // prettier-ignore
  components: {
    "icon-menu": require("@/components/icons/icon-menu.vue").default,
    "modal-fade-drop": require("@/components/modals/modal-fade-drop.vue").default,
  },
})
export default class extends Vue {
  showToolbox: boolean = false
}
</script>
