<template>
  <page-layout>
    <h2 class="font-sans text-2xl font-bold">Books & Articles</h2>

    <section class="py-4 space-y-2">
      <p>
        Cicada code can be shared as
        <router-link :to="{ path: `/books` }" class="font-sans underline">
          <em>Books</em>
        </router-link>

        and
        <router-link :to="{ path: `/articles` }" class="font-sans underline">
          <em> Articles</em> </router-link
        >.
      </p>

      <p>
        <router-link
          :to="{ path: `/books/cicada-lang/cicada-book@gitlab.com` }"
          class="font-sans underline"
        >
          <em>The Cicada Book</em>
        </router-link>
        serve as an introduction to the language.
      </p>
    </section>

    <h2 class="font-sans text-2xl font-bold">Reference</h2>

    <section class="py-4 space-y-2">
      <p>
        We use
        <router-link :to="{ path: `/docs/tests` }" class="font-sans underline">
          <em>Tests</em>
        </router-link>
        as language reference documents.
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
