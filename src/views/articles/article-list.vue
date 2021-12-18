<template>
  <page-layout class="flex flex-col">
    <form
      @submit.prevent="loadArticle()"
      class="flex flex-col w-full pt-8 pb-4"
    >
      <label
        class="pt-6 pb-6 font-sans text-4xl font-bold text-center text-gray-800"
        for="inputURL"
      >
        Cicada Articles
      </label>
      <div class="flex pl-4 pr-1">
        <input
          v-model.trim="inputURL"
          id="inputURL"
          required
          autocomplete="url"
          class="focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-opacity-60 w-full px-6 pt-4 pb-3 font-sans text-lg font-bold text-gray-800 placeholder-gray-800 bg-gray-200 rounded-lg"
          type="url"
          placeholder="Article URL"
          spellcheck="false"
        />
        <button class="p-2 text-gray-800" type="submit">
          <icon-arrow-circle-right class="w-8 h-8" />
        </button>
      </div>
    </form>

    <div class="pb-8 text-xl">
      <div class="px-10 pt-4">
        <h3 class="py-1 font-sans text-2xl font-bold text-gray-800">
          Example Articles
        </h3>

        <ul class="px-8 py-1 space-y-2">
          <li
            class="hover:text-gray-500 text-gray-700 list-disc"
            v-for="example in examples"
          >
            <router-link
              :to="{ path: `/articles/${getGitLink(example.url)}` }"
              class="font-sans underline"
            >
              {{ example.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </page-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { GitLink } from "@enchanterjs/enchanter/lib/git-link"

type Example = {
  title: string
  url: string
}

@Component({
  name: "article-list",
  // prettier-ignore
  components: {
    "page-layout": require("@/layouts/page-layout").default,
    "icon-arrow-circle-right": require("@/components/icons/icon-arrow-circle-right.vue").default,
  },
})
export default class extends Vue {
  inputURL: string | null = null

  getGitLink(url: string): string {
    return GitLink.fromURL(url).encode()
  }

  loadArticle(): void {
    if (this.inputURL) {
      this.$router.push(`articles/${this.getGitLink(this.inputURL)}`)
    }
  }

  examples: Array<Example> = [
    {
      title: "Simulating the Sigma type by hand",
      url: "https://gitlab.com/cicada-lang/cicada/-/blob/master/docs/articles/simulating-the-sigma-type-by-hand.md",
    },
    {
      title: "Integer as quotient type",
      url: "https://gitlab.com/cicada-lang/cicada/-/blob/master/docs/articles/integer-as-quotient-type.md",
    },
    {
      title: "Implicit arguments",
      url: "https://gitlab.com/cicada-lang/cicada/-/blob/master/docs/articles/implicit-arguments.md",
    },
    {
      title: "Inductive datatype",
      url: "https://gitlab.com/cicada-lang/cicada/-/blob/master/docs/articles/inductive-datatype.md",
    },
  ]
}
</script>
