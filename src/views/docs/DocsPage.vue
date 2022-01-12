<template>
  <PageLayout>
    <h2 class="font-sans text-2xl font-bold">Books & Articles</h2>

    <section class="py-4 space-y-2">
      <p>
        Cicada uses
        <a
          href="https://readonly.link"
          class="inline-flex font-sans underline"
          target="_blank"
          >Readonly.Link <IconExternalLink class="w-4" />
        </a>
        to render documents.
      </p>

      <p><strong>Manuals:</strong></p>

      <ul class="px-6">
        <li class="list-disc">
          <a
            href="https://readonly.link/manual/github.com/cicada-lang/cicada"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            Cicada Language Manual <IconExternalLink class="w-4" />
          </a>
        </li>
      </ul>

      <p><strong>Books:</strong></p>

      <ul class="px-6">
        <li class="list-disc">
          <a
            href="https://readonly.link/books/github.com/xieyuheng/cicada-monologues"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            蝉语独白 <IconExternalLink class="w-4" />
          </a>
          -- Cicada Monologues (in Chinese)
        </li>

        <li class="list-disc">
          <a
            href="https://readonly.link/books/github.com/xieyuheng/mathematical-structures"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            Mathematical Structures <IconExternalLink class="w-4" />
          </a>
          -- Formalizing abstract structures by <em>classes and objects</em>
        </li>

        <li class="list-disc">
          <a
            href="https://readonly.link/books/github.com/xieyuheng/the-little-typer-exercises"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            The Little Typer Exercises <IconExternalLink class="w-4" />
          </a>
          -- A student's report on <em>"The Little Typer"</em>
        </li>
      </ul>

      <p><strong>Articles:</strong></p>

      <ul class="px-6">
        <li class="list-disc">
          <a
            href="https://readonly.link/articles/github.com/cicada-lang/cicada/-/docs/articles/one-of-euler-s-conjecture.md"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            One of Euler's conjecture <IconExternalLink class="w-4" />
          </a>
        </li>

        <li class="list-disc">
          <a
            href="https://readonly.link/articles/github.com/cicada-lang/cicada/-/docs/articles/inductive-datatype.md"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            Inductive datatype <IconExternalLink class="w-4" />
          </a>
        </li>

        <li class="list-disc">
          <a
            href="https://readonly.link/articles/github.com/cicada-lang/cicada/-/docs/articles/implicit-arguments.md"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            Implicit arguments <IconExternalLink class="w-4" />
          </a>
        </li>
      </ul>
    </section>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "../../layouts/page-layout"
import IconExternalLink from "../../components/icons/IconExternalLink.vue"
</script>
