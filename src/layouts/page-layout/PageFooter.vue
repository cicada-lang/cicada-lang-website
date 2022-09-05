<script setup lang="ts">
import IconGithub from '../../components/icons/IconGithub.vue'
import IconTwitter from '../../components/icons/IconTwitter.vue'
import IconReadonly from '../../components/icons/IconReadonly.vue'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="flex w-full flex-col items-center justify-center py-6 md:py-10">
    <div class="flex items-stretch space-x-3 pb-3">
      <a
        href="https://readonly.link/authors/cicada-lang"
        target="_blank"
        title="readonly.link/authors/cicada-lang"
      >
        <IconReadonly class="w-5 text-gray-500 hover:text-gray-900" />
      </a>

      <a
        href="https://github.com/cicada-lang/cicada"
        target="_blank"
        title="github.com/cicada-lang/cicada"
      >
        <IconGithub class="w-5 text-gray-500 hover:text-gray-900" />
      </a>

      <a
        href="https://twitter.com/CicadaLanguage"
        target="_blank"
        title="@CicadaLanguage"
      >
        <IconTwitter class="w-5 text-gray-500 hover:text-gray-900" />
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
      Copyright © 2021-2022 Xie Yuheng
    </div>
  </div>
</template>
