<template>
  <transition name="slide-left">
    <slot />
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component({
  name: "slide-left",
})
export default class extends Vue {}
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 250ms ease;
}

.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(-25px);
}
</style>
