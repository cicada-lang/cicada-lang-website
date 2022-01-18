<template>
  <PageLayout>
    <div
      class="md:pt-10 pt-8 pb-4 md:text-5xl sm:text-4xl text-3xl font-serif text-center"
    >
      Let's build a bridge between <br />
      <span class="font-bold text-gray-800">writing software</span> and <br />
      <span class="font-bold text-gray-800">doing mathematics</span>
    </div>

    <div class="py-4 md:text-2xl sm:text-xl text-lg text-center">
      <span class="font-logo text-gray-900">Cicada Language</span>
      is a dependently typed
      <br />
      <span class="font-bold text-gray-900"> programming language</span>
      and an <br />
      <span class="font-bold text-gray-900">interactive theorem prover</span>
    </div>

    <HomePageBeProud class="my-8" />

    <div class="pt-2 pb-20 md:text-4xl font-bold font-sans text-center">
      <div class="text-3xl py-6 text-amber-500">Get Started</div>

      <router-link to="/docs" class="font-normal">
        <button
          class="border-2 py-3 px-6 bg-amber-400 hover:bg-amber-300 rounded-lg font-bold text-2xl border-amber-200 text-white"
        >
          DOCS
        </button>
      </router-link>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "../../layouts/page-layout"
import IconExternalLink from "../../components/icons/IconExternalLink.vue"
import HomePageBeProud from "./HomePageBeProud.vue"
</script>
