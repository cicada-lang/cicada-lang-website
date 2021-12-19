<template>
  <div class="md:py-10 max-w-2xl px-6 py-6 mx-auto">
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
    <div v-else-if="!state" class="flex flex-col items-center">
      <div class="text-xl text-gray-600">
        <p>Loading article ...</p>
      </div>
    </div>
    <router-view v-else :state="state" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { ArticleState as State } from "./article-state"
import { MetaInfo } from "vue-meta"

@Component({
  name: "article-layout",
  metaInfo(this: ArticleLayout): MetaInfo {
    return {
      title: this.state?.document.attributes.title,
    }
  },
})
export default class ArticleLayout extends Vue {
  @Prop() link!: string

  state: State | null = null
  error: unknown | null = null

  @Watch("$route", { immediate: true, deep: true })
  async updateState(route: any): Promise<void> {
    try {
      this.state = await State.build({ link: this.link })
    } catch (error) {
      this.error = error
    }
  }
}
</script>
