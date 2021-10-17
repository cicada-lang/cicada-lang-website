<template>
  <div>
    <prism
      class="overflow-x-auto"
      style="background-color: white; font-size: 92%; padding: 0 0"
      language="javascript"
      :code="text"
    ></prism>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import "prismjs"
import "prismjs/themes/prism.css"

@Component({
  name: "cicada-block",
  // prettier-ignore
  components: {
    prism: require("vue-prismjs"),
  },
})
export default class extends Vue {
  @Prop() text!: string
}
</script>
