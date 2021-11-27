<template>
  <button @click="showToolbox = !showToolbox">
    <icon-menu class="w-4 text-orange-500" />

    <modal-fade-drop
      v-show="showToolbox"
      class="relative"
      @close="showToolbox = false"
    >
      <div
        class="right-3 bg-orange-50 absolute top-0 z-50 flex flex-col p-1 border border-orange-200 rounded"
      >
        <button class="w-full" @click="$emit('run')" title="Run cicada code">
          <p
            class="hover:text-orange-300 p-1 font-bold text-right text-orange-500"
          >
            RUN
          </p>
        </button>
        <button
          class="w-full"
          @click="$emit('copy')"
          title="Copy code to clipboard"
        >
          <p
            class="hover:text-orange-300 p-1 font-bold text-right text-orange-500"
          >
            COPY
          </p>
        </button>
        <button
          class="w-full"
          @click="$emit('reset')"
          title="Reset to original code"
        >
          <p
            class="hover:text-orange-300 p-1 font-bold text-right text-orange-500"
          >
            RESET
          </p>
        </button>
        <button
          class="w-full"
          @click="$emit('deactivate')"
          title="Deactivate editor"
        >
          <p
            class="hover:text-orange-300 p-1 font-bold text-right text-orange-500"
          >
            DEACT
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
