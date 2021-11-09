<template>
  <div class="md:py-10 max-w-prose px-6 py-6 mx-auto font-serif text-xl">
    <h1 class="font-sans text-4xl font-bold">Cicada Language</h1>

    <section class="py-4 space-y-2">
      <p>
        Cicada language is a <em>dependently typed programming language</em> and
        <em>interactive theorem prover</em>.
      </p>
    </section>

    <h2 class="font-sans text-3xl font-bold">Aim</h2>

    <section class="py-4 space-y-2">
      <p>
        The aim of cicada project is to help people understand that developing
        software and developing mathematics are increasingly the same kind of
        activity, and people who practices these developments, can learn from
        each other, and help each other in very good ways.
      </p>
    </section>

    <h2 class="font-sans text-3xl font-bold">Serives</h2>

    <section class="py-4 space-y-2">
      <p>
        Cicada code can be organized into <em>Books</em> and <em>Articles.</em>
        We strive to provide simple content management and clear rendering, to
        help one sharing ones work with others. For details, please visit
        dedicated serive pages:
      </p>

      <ul class="px-8 py-2 space-y-2">
        <li class="list-disc">
          <router-link :to="{ path: `/books` }" class="font-sans underline">
            Book Serive
          </router-link>
        </li>

        <li class="list-disc">
          <router-link :to="{ path: `/articles` }" class="font-sans underline">
            Article Serive
          </router-link>
        </li>
      </ul>
    </section>

    <h2 class="font-sans text-3xl font-bold">Community</h2>

    <section class="py-4 space-y-2">
      <p>
        Happiness is only real when shared, and software service is only
        valuable when serving people well.
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

    <h2 class="font-sans text-3xl font-bold">Core Team</h2>

    <section class="py-4 space-y-2">
      <p>
        Cicada project was started by Xie Yuheng, who cherishes it as a lifelong
        inquiry into <em>foundations of mathematics</em>.
      </p>

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
  name: "home",
  // prettier-ignore
  components: {
    "icon-external-link": require("@/components/icons/icon-external-link").default
  },
})
export default class extends Vue {}
</script>
