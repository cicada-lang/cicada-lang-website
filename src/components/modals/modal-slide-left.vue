<template>
  <slide-left>
    <div class="fixed inset-0 flex justify-start" @click.self="$emit('close')">
      <div class="shadow-2xl">
        <slot />
      </div>
    </div>
  </slide-left>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"

@Component({
  name: "modal-slide-left",
  // prettier-ignore
  components: {
    "slide-left": require("@/components/transitions/slide-left.vue").default,
  },
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
