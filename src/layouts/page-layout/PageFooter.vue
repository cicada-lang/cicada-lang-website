<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import GithubIcon from '../../components/icons/GithubIcon.vue'
import ReadonlyIcon from '../../components/icons/ReadonlyIcon.vue'
import TwitterIcon from '../../components/icons/TwitterIcon.vue'
</script>

<template>
  <div class="flex w-full flex-col items-center justify-center py-6 md:py-10">
    <div class="flex items-stretch space-x-3 pb-3">
      <a
        href="https://readonly.link/authors/https://code-of-cicada.xieyuheng.com/docs/author.json"
        target="_blank"
        title="readonly.link/authors/https://code-of-cicada.xieyuheng.com/docs/author.json"
      >
        <ReadonlyIcon class="w-5 text-gray-500 hover:text-gray-900" />
      </a>

      <a
        href="https://github.com/cicada-lang/cicada"
        target="_blank"
        title="github.com/cicada-lang/cicada"
      >
        <GithubIcon class="w-5 text-gray-500 hover:text-gray-900" />
      </a>

      <a
        href="https://twitter.com/CicadaLanguage"
        target="_blank"
        title="@CicadaLanguage"
      >
        <TwitterIcon class="w-5 text-gray-500 hover:text-gray-900" />
      </a>

      <a
        href="mailto:xyheme@gmail.com"
        target="_blank"
        title="xyheme@gmail.com"
      >
        <EnvelopeIcon class="w-5 text-gray-500 hover:text-gray-900" />
      </a>
    </div>

    <div class="font-sans text-lg text-gray-600">
      Copyright © 2021-{{ new Date().getFullYear() }} Xie Yuheng
    </div>
  </div>
</template>
