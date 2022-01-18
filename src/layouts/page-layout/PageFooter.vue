<template>
  <div class="flex flex-col justify-center items-center md:py-10 py-6 w-full">
    <div class="pb-3 space-x-3 flex items-stretch">
      <a
        href="https://github.com/cicada-lang/cicada"
        target="_blank"
        title="github.com/cicada-lang/cicada"
      >
        <IconGithub class="hover:text-gray-900 w-5 text-gray-500" />
      </a>

      <a
        href="https://twitter.com/CicadaLanguage"
        target="_blank"
        title="@CicadaLanguage"
      >
        <IconTwitter class="hover:text-gray-900 w-5 text-gray-500" />
      </a>
    </div>

    <div class="font-sans text-lg text-gray-600">
      Copyright © 2021-2022 Xie Yuheng
    </div>
  </div>
</template>

<script setup lang="ts">
import IconGithub from "../../components/icons/IconGithub.vue"
import IconTwitter from "../../components/icons/IconTwitter.vue"
</script>
