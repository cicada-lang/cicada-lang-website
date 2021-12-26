<template>
  <page-layout>
    <h2 class="font-sans text-2xl font-bold">Why this project?</h2>

    <section class="py-4 space-y-2">
      <p>
        Cicada project was founded by
        <a
          href="https://xieyuheng.com"
          class="inline-flex font-sans underline"
          target="_blank"
        >
          Xie Yuheng <icon-external-link class="w-4" /> </a
        >, <br />
        who just wants to build his own language to prove himself.
      </p>
    </section>

    <h2 class="font-sans text-2xl font-bold">Community</h2>

    <section class="py-4 space-y-2">
      <p>
        Happiness is only real when shared, <br />
        and software service is only valuable when serving people well.
      </p>

      <ul class="px-8 py-2 space-y-2">
        <li class="list-disc">
          GitHub:
          <a
            href="https://github.com/cicada-lang"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            cicada-lang <icon-external-link class="w-4" />
          </a>
        </li>

        <li class="list-disc">
          Telegram:
          <a
            href="https://t.me/CicadaLanguage"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            CicadaLanguage <icon-external-link class="w-4" />
          </a>
        </li>

        <li class="list-disc">
          IRC: #cicada-lang at
          <a
            href="https://libera.chat"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            libera.chat <icon-external-link class="w-4" />
          </a>
        </li>
      </ul>
    </section>

    <h2 class="font-sans text-2xl font-bold">Core Team</h2>

    <section class="py-4 space-y-2">
      <ul class="px-8 py-2 space-y-2">
        <li class="list-disc">
          <a
            href="https://xieyuheng.com"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            Xie Yuheng <icon-external-link class="w-4" />
          </a>
        </li>

        <li class="list-disc">
          <a
            href="https://github.com/tsao-chi"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            Zaoqi <icon-external-link class="w-4" />
          </a>
        </li>
      </ul>
    </section>
  </page-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "about-page",
  // prettier-ignore
  components: {
    "page-layout": require("@/layouts/page-layout").default,
    "icon-external-link": require("@/components/icons/icon-external-link.vue").default,
  },
})
</script>
