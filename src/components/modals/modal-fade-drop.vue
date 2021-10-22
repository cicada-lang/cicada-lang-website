<template>
  <fade>
    <div class="modal absolute flex justify-start shadow-lg">
      <slot />
    </div>
  </fade>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"

@Component({
  name: "modal-fade-drop",
  // prettier-ignore
  components: {
    "fade": require("@/components/transitions/fade.vue").default,
  },
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
