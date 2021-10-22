<template>
  <transition name="slide-right">
    <slot />
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component({
  name: "slide-right",
})
export default class extends Vue {}
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 250ms ease;
}

.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(25px);
}
</style>
