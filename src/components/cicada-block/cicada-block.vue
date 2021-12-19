<template>
  <cicada-block-extra v-if="extra" :text="text" :extra="extra" />
  <cicada-block-normal
    v-else
    :pageName="pageName"
    :index="index"
    :page="page"
    :text="text"
    :mod="mod"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { Module } from "@cicada-lang/cicada/lib/module"

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
  @Prop() mod!: Module
  @Prop() debug?: boolean

  mounted(): void {
    if (this.debug) {
      console.log({
        msg: "[cicada-block] debug",
        pageName: this.pageName,
        index: this.index,
        info: this.info,
        page: this.page,
        text: this.text,
        mod: this.mod,
      })
    }
  }

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
