<template>
  <PageLayout>
    <section class="py-4 space-y-2">
      <p class="md:text-5xl text-3xl font-serif text-center">
        Let's build a bridge between <br />
        <span class="font-bold text-gray-800">writing software</span> and <br />
        <span class="font-bold text-gray-800">doing mathematics</span>
      </p>
    </section>

    <section class="py-4 space-y-2">
      <p class="md:text-2xl text-lg text-center">
        <span class="font-logo text-gray-900">Cicada Language</span>
        is a dependently typed
        <br />
        <span class="font-bold text-gray-900"> programming language</span>
        and an <br />
        <span class="font-bold text-gray-900">interactive theorem prover</span>
      </p>
    </section>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "../../layouts/page-layout"
import IconExternalLink from "../../components/icons/IconExternalLink.vue"
</script>
