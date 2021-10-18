<template>
  <transition name="slide">
    <div class="fixed inset-0 flex justify-start" @click.self="$emit('close')">
      <div class="shadow-2xl">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"

@Component({
  name: "modal-slide-left",
})
export default class extends Vue {
  mounted(): void {
    document.querySelector("body")?.classList.add("overflow-hidden")
  }

  beforeDestroy(): void {
    document.querySelector("body")?.classList.remove("overflow-hidden")
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 250ms ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-25px);
}
</style>
