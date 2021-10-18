<template>
  <button @click="showToolbox = !showToolbox">
    <icon-menu class="w-4 text-orange-500" />

    <modal-fade-drop
      v-show="showToolbox"
      class="relative"
      @close="showToolbox = false"
    >
      <div
        class="
          right-3
          absolute
          top-0
          z-50
          flex flex-col
          items-end
          justify-end
          p-2
          bg-orange-100
          border border-orange-400
          rounded
        "
      >
        <button @click="$emit('run')" title="Run cicada code">
          <p class="p-1 text-orange-500 font-bold hover:text-orange-300">RUN</p>
        </button>
        <button @click="$emit('reset')" title="Reset to original code">
          <p class="hover:text-orange-300 p-1 font-bold text-orange-500">
            RESET
          </p>
        </button>
        <button @click="$emit('deactivate')" title="Deactivate editor">
          <p class="hover:text-orange-300 p-1 font-bold text-orange-500">
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
