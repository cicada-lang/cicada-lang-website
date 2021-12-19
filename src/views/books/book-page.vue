<template>
  <div class="md:py-10 px-6 py-6">
    <book-page-navbar :pageName="pageName" :state="state" />
    <md-document
      v-if="mod"
      :key="pageName"
      :document="state.parseDocument(page)"
      :custom-block-components="{
        Cicada: {
          component: require('@/components/cicada-block').default,
          props: (node) => ({
            pageName: pageName,
            index: node.value.index,
            info: node.info,
            page: page || '',
            text: node.text.trim(),
            mod,
          }),
        },
      }"
    />
    <book-page-navbar class="my-6" :pageName="pageName" :state="state" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { BookState as State } from "@/views/books/book-state"
import { Module } from "@cicada-lang/cicada/lib/module"

@Component({
  name: "book-page",
  // prettier-ignore
  components: {
    "book-page-navbar": require("./book-page-navbar.vue").default,
    ...require("@xieyuheng/postmark-components-vue2").components,
  },
})
export default class extends Vue {
  @Prop() baseURL!: string
  @Prop() pageName!: string
  @Prop() state!: State

  mod: Module | null = null

  async mounted(): Promise<void> {
    this.mod = await this.state.loadMod(this.pageName)
  }

  get page(): string | undefined {
    if (this.state) {
      return this.state.files[this.pageName]
    }
  }

  @Watch("pageName")
  scrollToTop(): void {
    window.scrollTo(0, 0)
  }
}
</script>
