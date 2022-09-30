<script setup lang="ts">
import PageLogo from './PageLogo.vue'
import Link from '../../components/Link.vue'
</script>

<template>
  <div class="flex w-full flex-wrap items-center justify-between md:py-3">
    <Link href="/">
      <PageLogo class="my-2 text-2xl md:text-4xl" />
    </Link>

    <div class="flex flex-wrap space-x-3 font-sans text-gray-400">
      <a
        class="hover:text-gray-900"
        href="https://readonly.link/manuals/cicada-lang/cicada"
        target="_blank"
      >
        DOCS
      </a>

      <Link class="hover:text-gray-900" href="/playground"> PLAY </Link>

      <Link class="hover:text-gray-900" href="/about"> ABOUT </Link>
    </div>
  </div>
</template>
