<template>
  <pre
    class="
      border-sky-400
      py-3
      overflow-x-auto
      border-t-2 border-b-2 border-dashed
    "
    style="font-size: 92%"
  >le="font-size: 92%"
  ><code>
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
