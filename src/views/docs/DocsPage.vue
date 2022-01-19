<template>
  <PageLayout>
    <div class="py-4 space-y-4 md:text-2xl text-xl">
      <h2 class="font-sans text-2xl font-bold">The Manual</h2>

      <ul class="px-6">
        <li class="list-disc">
          <a
            href="https://readonly.link/manuals/gitlab.com/cicada-lang/cicada"
            class="inline-flex font-sans items-center underline"
            target="_blank"
          >
            Cicada Language Manual <IconExternalLink class="w-4" />
          </a>
        </li>
      </ul>

      <h2 class="font-sans text-2xl font-bold">Books</h2>

      <ul class="px-6">
        <li class="list-disc">
          <a
            href="https://readonly.link/books/github.com/xieyuheng/cicada-monologues"
            class="inline-flex font-sans items-center underline"
            target="_blank"
          >
            蝉语独白 <IconExternalLink class="w-4" />
          </a>
          -- Cicada Monologues (in Chinese)
        </li>

        <li class="list-disc">
          <a
            href="https://readonly.link/books/github.com/xieyuheng/mathematical-structures"
            class="inline-flex font-sans items-center underline"
            target="_blank"
          >
            Mathematical Structures <IconExternalLink class="w-4" />
          </a>
          -- Formalizing abstract structures by <em>classes and objects</em>
        </li>

        <li class="list-disc">
          <a
            href="https://readonly.link/books/github.com/xieyuheng/the-little-typer-exercises"
            class="inline-flex font-sans items-center underline"
            target="_blank"
          >
            The Little Typer Exercises <IconExternalLink class="w-4" />
          </a>
          -- A student's report on <em>"The Little Typer"</em>
        </li>
      </ul>

      <h2 class="font-sans text-2xl font-bold">Tools</h2>

      <ul class="px-6">
        <li class="list-disc">
          <p>
            <a
              href="https://readonly.link"
              class="inline-flex font-sans items-center underline"
              target="_blank"
              >Readonly.Link <IconExternalLink class="w-4" />
            </a>
            -- our document renderer.
          </p>
        </li>
      </ul>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "../../layouts/page-layout"
import IconExternalLink from "../../components/icons/IconExternalLink.vue"
</script>
