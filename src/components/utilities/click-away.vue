<template>
  <div>
    <slot class="click-away" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"

@Component({
  name: "click-away",
})
export default class extends Vue {
  emiter(event: Event): void {
    const element = event.target as Element
    if (!element.closest(".click-away")) {
      this.$emit("away")
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
