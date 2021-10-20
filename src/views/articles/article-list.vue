<template>
  <div class="flex flex-col my-6">
    <div class="mx-auto">
      <form @submit.prevent="loadArticle()" class="flex flex-col w-full py-4">
        <label
          class="pt-6 pb-6 text-5xl font-bold text-center text-gray-800"
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
            class="
              focus:outline-none focus:ring-2 focus:ring-gray-300
              placeholder-opacity-60
              w-full
              px-6
              pt-4
              pb-3
              text-lg
              font-bold
              text-gray-800
              placeholder-gray-800
              bg-gray-200
              rounded-lg
            "
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
          <h3 class="py-1 text-2xl font-bold text-gray-800">Usage</h3>

          <div class="p-2">
            <p class="py-1">Welcome to Cicada's article rendering service.</p>
            <p class="py-1">GitHub, GitLab and Gitee are supported.</p>
            <p class="py-1">Fill in article's URL is all you need!</p>
          </div>

          <div class="p-2">
            <p class="py-2">For examples:</p>
            <ul class="px-8">
              <li class="max-w-sm text-lg break-all list-disc">
                https://gitlab.com/cicada-lang/cicada/-/blob/master/articles/simulating-the-sigma-type-by-hand.md
              </li>
            </ul>
          </div>
        </div>

        <div class="px-10 pt-4">
          <h3 class="py-1 text-2xl font-bold text-gray-800">
            Example Articles
          </h3>

          <div class="p-2">
            <p class="py-1">We will showcase of this service,</p>
            <p class="py-1">in follow example articles:</p>
          </div>

          <ul class="px-8 py-1 space-y-2">
            <li
              class="hover:text-gray-500 text-gray-700 list-disc"
              v-for="example in examples"
            >
              <router-link
                :to="{ path: `articles/${getGitPath(example.url)}` }"
                class="font-sans underline"
              >
                {{ example.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { GitPath } from "@xieyuheng/enchanter/lib/git-path"

type Example = {
  title: string
  url: string
}

@Component({
  name: "article-list",
  // prettier-ignore
  components: {
    "icon-arrow-circle-right": require("@/components/icons/icon-arrow-circle-right.vue").default,
  },
})
export default class extends Vue {
  inputURL: string | null = null

  getGitPath(url: string): string {
    return GitPath.fromURL(url).encode()
  }

  loadArticle(): void {
    if (this.inputURL) {
      this.$router.push(`articles/${this.getGitPath(this.inputURL)}`)
    }
  }

  examples: Array<Example> = [
    {
      title: "Simulating the Sigma type by hand",
      url: "https://gitlab.com/cicada-lang/cicada/-/blob/master/articles/simulating-the-sigma-type-by-hand.md",
    },
    {
      title: "Integer as quotient type",
      url: "https://gitlab.com/cicada-lang/cicada/-/blob/master/articles/integer-as-quotient-type.md",
    },
  ]
}
</script>
