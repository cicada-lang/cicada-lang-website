<template>
  <div class="md:py-10 max-w-prose px-6 py-6 mx-auto font-serif text-xl">
    <h1 class="font-sans text-4xl font-bold">Cicada Language</h1>

    <section class="py-4 space-y-2">
      <p>
        Cicada language is a dependently typed programming language and
        interactive theorem prover.
      </p>

      <p>
        The aim of cicada project is to help people understand that developing
        software and developing mathematics are increasingly the same kind of
        activity, and people who practices these developments, can learn from
        each other, and help each other in very good ways.
      </p>
    </section>

    <h2 class="font-sans text-3xl font-bold">Books & Articles</h2>

    <section class="py-4 space-y-2">
      <p>Cicada code can be organized into books and articles.</p>

      <p>
        We strive to provide clear and beautiful rendering, to help one sharing
        ones work with others.
      </p>

      <p>For details, please visit dedicated serive pages:</p>

      <ul class="space-y-2">
        <li>
          <router-link :to="{ path: `/books` }" class="font-sans underline">
            Book Serive
          </router-link>
        </li>

        <li>
          <router-link :to="{ path: `/articles` }" class="font-sans underline">
            Article Serive
          </router-link>
        </li>
      </ul>

      <p class="font-sans font-bold">Example books:</p>

      <ul class="space-y-2">
        <li v-for="exampleBook in exampleBooks">
          <router-link
            :to="{ path: `/books/${getGitPath(exampleBook)}` }"
            class="font-sans underline"
          >
            {{ exampleBook.title }}
          </router-link>
        </li>
      </ul>
    </section>

    <h2 class="font-sans text-3xl font-bold">Community</h2>

    <section class="py-4 space-y-2">
      <ul class="space-y-2">
        <li>
          GitHub:
          <a
            href="https://github.com/cicada-lang"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            cicada-lang <icon-external-link class="w-4" />
          </a>
        </li>

        <li>
          Telegram:
          <a
            href="https://t.me/CicadaLanguage"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            CicadaLanguage <icon-external-link class="w-4" />
          </a>
        </li>

        <li>
          IRC: #cicada-lang at
          <a
            href="https://libera.chat"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            libera.chat <icon-external-link class="w-4" />
          </a>
        </li>
      </ul>
    </section>

    <h2 class="font-sans text-3xl font-bold">Core Team</h2>

    <section class="py-4 space-y-2">
      <ul class="space-y-2">
        <li>
          <a
            href="https://github.com/xieyuheng"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            Xie Yuheng <icon-external-link class="w-4" />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/tsao-chi"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            Zaoqi <icon-external-link class="w-4" />
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { GitPath } from "@xieyuheng/enchanter/lib/git-path"

type Example = {
  title: string
  url: string
}

@Component({
  name: "home",
  // prettier-ignore
  components: {
    "icon-external-link": require("@/components/icons/icon-external-link").default
  },
})
export default class extends Vue {
  getGitPath(example: Example): string {
    const { url } = example
    return GitPath.fromURL(url).encode()
  }

  exampleBooks: Array<Example> = [
    {
      title: "Group Theory",
      url: "https://gitlab.com/cicada-lang/cicada/-/tree/master/books/group",
    },
    {
      title: "Order Theory",
      url: "https://gitlab.com/cicada-lang/cicada/-/tree/master/books/order",
    },
    {
      title: "Category Theory",
      url: "https://gitlab.com/cicada-lang/cicada/-/tree/master/books/category",
    },
    {
      title: "Logic and Judgment",
      url: "https://gitlab.com/cicada-lang/cicada/-/tree/master/books/logic-and-judgment",
    },
  ]
}
</script>

<style scoped>
li {
  list-style-type: " - ";
  list-style-position: inside;
}
</style>
