<template>
  <pre
    class="
      overflow-x-auto
      py-3
      border-t border-b border-dashed border-gray-800
    "
    style="font-size: 92%"
  ><code>{{ text }}</code></pre>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component({
  name: "cicada-block",
  // prettier-ignore
  components: {

  },
})
export default class extends Vue {
  @Prop() text!: string
}
</script>
