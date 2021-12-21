<template>
  <page-layout>
    <h2 class="font-sans text-2xl font-bold">Books & Articles</h2>

    <section class="py-4 space-y-2">
      <p>
        Cicada uses
        <a href="https://readonly.link" class="font-sans underline"
          >Readonly.Link</a
        >
        to render documents.
      </p>

      <p><strong>Books:</strong></p>

      <ul class="px-6">
        <li class="list-disc">
          <a
            href="https://readonly.link/books/github.com/xieyuheng/cicada-monologues"
            class="font-sans underline"
          >
            蝉语独白
          </a>
          -- Cicada Monologues (in Chinese)
        </li>

        <li class="list-disc">
          <a
            href="https://readonly.link/books/github.com/xieyuheng/mathematical-structures"
            class="font-sans underline"
          >
            Mathematical Structures
          </a>
          -- Formalizing abstract structures by <em>classes and objects</em>
        </li>

        <li class="list-disc">
          <a
            href="https://readonly.link/books/github.com/xieyuheng/the-little-typer-exercises"
            class="font-sans underline"
          >
            The Little Typer Exercises
          </a>
          -- A student's report on <em>"The Little Typer"</em>
        </li>
      </ul>

      <p><strong>Articles:</strong></p>

      <ul class="px-6">
        <li class="list-disc">
          <a
            href="https://readonly.link/articles/github.com/cicada-lang/cicada/-/docs/articles/one-of-euler-s-conjecture.md"
            class="font-sans underline"
          >
            One of Euler's conjecture
          </a>
        </li>

        <li class="list-disc">
          <a
            href="https://readonly.link/articles/github.com/cicada-lang/cicada/-/docs/articles/inductive-datatype.md"
            class="font-sans underline"
          >
            Inductive datatype
          </a>
        </li>

        <li class="list-disc">
          <a
            href="https://readonly.link/articles/github.com/cicada-lang/cicada/-/docs/articles/implicit-arguments.md"
            class="font-sans underline"
          >
            Implicit arguments
          </a>
        </li>
      </ul>
    </section>

    <h2 class="font-sans text-2xl font-bold">Reference</h2>

    <section class="py-4 space-y-2">
      <p>
        We will use
        <a class="font-sans underline">
          <em>Tests</em>
        </a>
        as language reference documents. (TODO)
      </p>
    </section>
  </page-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "home-page",
  // prettier-ignore
  components: {
    "page-layout": require("@/layouts/page-layout").default,
    "icon-external-link": require("@/components/icons/icon-external-link.vue").default,
  },
})
export default class extends Vue {}
</script>
