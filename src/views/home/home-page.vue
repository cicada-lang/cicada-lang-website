<template>
  <div>
    <section class="py-4 space-y-2">
      <p>
        <em class="font-bold text-gray-800">Cicada language</em> is a <br />
        <em class="font-bold text-gray-800"
          >dependently typed programming language</em
        >
        and <br />
        <em class="font-bold text-gray-800">interactive theorem prover</em>.
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

    <h2 class="font-sans text-3xl font-bold">Community</h2>

    <section class="py-4 space-y-2">
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

    <h2 class="font-sans text-3xl font-bold">Core Team</h2>

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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "home-page",
  // prettier-ignore
  components: {
    "icon-external-link": require("@/components/icons/icon-external-link.vue").default
  },
})
export default class extends Vue {}
</script>
