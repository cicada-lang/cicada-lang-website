<template>
  <div
    class="bg-orange-50 flex flex-col p-4 mx-3 my-4 font-sans text-xl border-4 border-orange-200 border-double rounded-lg"
  >
    <button
      @click="$emit('close')"
      class="hover:text-orange-300 self-end text-base font-bold text-orange-500"
    >
      CLOSE
    </button>
    <div
      class="font-narration py-2 text-xl"
      v-for="(narration, index) in narrations"
      :key="index"
      v-html="narration"
    ></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"

@Component({
  name: "cicada-block-narration",
})
export default class extends Vue {
  @Prop() narrations!: Array<string>
}
</script>
