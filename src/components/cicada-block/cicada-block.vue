<template>
  <pre class="py-4 overflow-x-auto" style="font-size: 92%" v-html="code"></pre>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import hljs from "highlight.js"

@Component({
  name: "cicada-block",
  // prettier-ignore
  components: {

  },
})
export default class extends Vue {
  @Prop() text!: string

  get code(): string {
    return hljs.highlight(this.text, { language: "javascript" }).value
  }
}
</script>
