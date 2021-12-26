<template>
  <PageLayout>
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
  </PageLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "HomePage",
  // prettier-ignore
  components: {
    "PageLayout": require("@/layouts/page-layout").default,
    "IconExternalLink": require("@/components/icons/IconExternalLink.vue").default,
  },
})
</script>
