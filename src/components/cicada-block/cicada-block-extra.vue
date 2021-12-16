<template>
  <click-away class="relative">
    <div
      class="
        absolute
        right-0
        top-2
        px-1
        py-0.5
        bg-rose-50
        opacity-90
        hover:opacity-30
        text-rose-500
        border border-rose-400
        italic
      "
    >
      {{ extra }}
    </div>
    <pre
      class="overflow-x-auto border-t border-l border-white border-rose-400"
      style="font-size: 92%"
    ><code style="padding: 1rem 1rem; background-color: inherit;">{{ text }}</code></pre>
  </click-away>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import hljs from "highlight.js"

@Component({
  name: "cicada-block-extra",
  // prettier-ignore
  components: {
    "click-away": require("@/components/utilities/click-away.vue").default,
  },
})
export default class extends Vue {
  @Prop() text!: string
  @Prop() extra!: string

  mounted(): void {
    hljs.highlightAll()
  }
}
</script>
