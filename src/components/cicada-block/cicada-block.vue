<template>
  <cicada-block-extra v-if="extra" :text="text" :extra="extra" />
  <cicada-block-normal
    v-else
    :pageName="pageName"
    :index="index"
    :page="page"
    :text="text"
    :book="book"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { Book } from "@cicada-lang/cicada/lib/book"

@Component({
  name: "cicada-block",
  // prettier-ignore
  components: {
    "cicada-block-extra": require("./cicada-block-extra.vue").default,
    "cicada-block-normal": require("./cicada-block-normal.vue").default,
  },
})
export default class extends Vue {
  @Prop() pageName!: string
  @Prop() index!: number
  @Prop() info!: string
  @Prop() page!: string
  @Prop() text!: string
  @Prop() book!: Book

  get extra(): string | undefined {
    const prefix = "cicada "
    if (this.info.startsWith(prefix)) {
      return this.info.slice(prefix.length)
    } else {
      return undefined
    }
  }
}
</script>
