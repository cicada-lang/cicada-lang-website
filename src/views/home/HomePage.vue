<template>
  <PageLayout>
    <div
      class="pt-8 pb-4 text-center font-serif text-3xl sm:text-4xl md:pt-10 md:text-5xl"
    >
      Let's build a bridge between <br />
      <span class="font-bold text-gray-800">writing software</span> and <br />
      <span class="font-bold text-gray-800">doing mathematics</span>
    </div>

    <div class="py-4 text-center text-lg sm:text-xl md:text-2xl">
      <span class="font-logo text-gray-900">Cicada Language</span>
      is a dependently typed
      <br />
      <span class="font-bold text-gray-900"> programming language</span>
      and an <br />
      <span class="font-bold text-gray-900">interactive theorem prover</span>
    </div>

    <HomePageBeProud class="my-8" />

    <div class="space-y-10 pt-4 pb-14">
      <div class="text-center font-sans font-bold md:text-4xl">
        <div class="pb-6 text-3xl text-amber-500">Get Started</div>

        <router-link to="/docs" class="font-normal">
          <button
            class="rounded-lg border-2 border-amber-200 bg-amber-400 py-3 px-6 text-2xl font-bold text-white hover:bg-amber-300"
          >
            DOCS
          </button>
        </router-link>
      </div>

      <div class="text-center font-sans font-bold md:text-4xl">
        <div class="pb-6 text-3xl text-lime-500">Become a Sponsor</div>

        <router-link to="/sponsors" class="font-normal">
          <button
            class="rounded-lg border-2 border-lime-200 bg-lime-400 py-3 px-6 text-2xl font-bold text-white hover:bg-lime-300"
          >
            SPONSORS
          </button>
        </router-link>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "../../layouts/page-layout"
import IconExternalLink from "../../components/icons/IconExternalLink.vue"
import HomePageBeProud from "./HomePageBeProud.vue"
</script>
