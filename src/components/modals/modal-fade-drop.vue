<template>
  <transition name="fade">
    <div class="modal absolute flex justify-start shadow-lg">
      <slot />
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"

@Component({
  name: "modal-fade-drop",
})
export default class extends Vue {
  emiter(event: Event): void {
    const element = event.target as Element
    if (!element.closest(".modal")) {
      this.$emit("close")
    }
  }

  mounted(): void {
    document.addEventListener("click", this.emiter, { capture: true })
  }

  beforeDestroy(): void {
    document.removeEventListener("click", this.emiter, { capture: true })
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
