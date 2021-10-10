<template>
  <div class="md:py-10 max-w-prose px-6 py-6 mx-auto font-serif text-xl">
    <h1 class="font-sans text-4xl font-bold">Cicada Language</h1>

    <div class="py-4 space-y-2">
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
    </div>

    <div>
      <h2 class="font-sans text-3xl font-bold">Community</h2>

      <ul class="py-4 space-y-2 list-disc list-inside">
        <li>
          GitHub:
          <a href="https://github.com/cicada-lang" class="underline">
            cicada-lang
          </a>
        </li>

        <li>
          Telegram group:
          <a href="https://t.me/CicadaLanguage" class="underline">
            CicadaLanguage
          </a>
        </li>

        <li>
          IRC channel: #cicada-lang at
          <a href="https://libera.chat" class="underline">libera.chat</a>
        </li>
      </ul>
    </div>

    <div>
      <h2 class="font-sans text-3xl font-bold">Core Team</h2>

      <ul class="py-4 space-y-2 list-disc list-inside">
        <li>
          <a href="https://github.com/xieyuheng" class="underline">
            Xie Yuheng
          </a>
        </li>

        <li>
          <a href="https://github.com/tsao-chi" class="underline"> Zaoqi </a>
        </li>
      </ul>
    </div>
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
