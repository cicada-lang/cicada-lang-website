<template>
  <page-layout>
    <section class="py-4 space-y-2">
      <p class="text-gray-500">
        <em class="text-gray-800">Cicada language</em> is a <br />
        <em class="text-gray-800">dependently typed programming language</em>
        and a <br />
        <em class="text-gray-800">interactive theorem prover</em>.
      </p>
    </section>

    <section class="py-4 space-y-2">
      <p>
        The aim of cicada project is to help people understand that developing
        software and developing mathematics are increasingly the same kind of
        activity, and people who practices these developments, can learn from
        each other, and help each other in very good ways.
      </p>
    </section>

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
