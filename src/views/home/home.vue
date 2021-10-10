<template>
  <div class="md:py-10 max-w-prose px-6 py-6 mx-auto font-serif text-xl">
    <h1 class="font-sans text-4xl font-bold">Cicada Language</h1>

    <section class="py-4 space-y-2">
      <p>
        Cicada language is a dependently typed programming language and
        interactive theorem prover.
      </p>

      <p>
        The aim of cicada project is to help people understand that developing
        software and developing mathematics are increasingly the same kind of
        activity, and people who practices these developments, can learn from
        each other, and help each other in very good ways.
      </p>
    </section>

    <h2 class="font-sans text-3xl font-bold">Books</h2>

    <section class="py-4 space-y-2">
      <p>Cicada code can be organized into books.</p>

      <ul class="space-y-2">
        <li>
          <router-link
            :to="{
              path: 'books/cicada',
              query: { by: 'cicada-lang', dir: 'books/group' },
            }"
            class="underline font-sans"
          >
            Group Theory
          </router-link>
        </li>

        <li>
          <router-link
            :to="{
              path: 'books/cicada',
              query: { by: 'cicada-lang', dir: 'books/order' },
            }"
            class="underline font-sans"
          >
            Order Theory
          </router-link>
        </li>

        <li>
          <router-link
            :to="{
              path: 'books/cicada',
              query: { by: 'cicada-lang', dir: 'books/category' },
            }"
            class="underline font-sans"
          >
            Category Theory
          </router-link>
        </li>

        <li>
          <router-link
            :to="{
              path: 'books/cicada',
              query: { by: 'cicada-lang', dir: 'books/the-little-typer' },
            }"
            class="underline font-sans"
          >
            The Little Typer
          </router-link>
        </li>
      </ul>
    </section>

    <h2 class="font-sans text-3xl font-bold">Community</h2>

    <section class="py-4 space-y-2">
      <ul class="space-y-2">
        <li>
          GitHub:
          <a href="https://github.com/cicada-lang" class="underline font-sans">
            cicada-lang
          </a>
        </li>

        <li>
          Telegram group:
          <a href="https://t.me/CicadaLanguage" class="underline font-sans">
            CicadaLanguage
          </a>
        </li>

        <li>
          IRC channel: #cicada-lang at
          <a href="https://libera.chat" class="underline font-sans">
            libera.chat
          </a>
        </li>
      </ul>
    </section>

    <h2 class="font-sans text-3xl font-bold">Core Team</h2>

    <section class="py-4 space-y-2">
      <ul class="space-y-2">
        <li>
          <a href="https://github.com/xieyuheng" class="underline font-sans">
            Xie Yuheng
          </a>
        </li>

        <li>
          <a href="https://github.com/tsao-chi" class="underline font-sans">
            Zaoqi
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
    // TODO
  },
})
export default class extends Vue {}
</script>

<style scoped>
li {
  list-style-type: " - ";
  list-style-position: inside;
}
</style>
