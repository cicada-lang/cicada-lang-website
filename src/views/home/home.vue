<template>
  <div class="md:mx-auto mx-6 md:py-10 py-6 max-w-prose">
    <h1 class="text-3xl">Cicada Language</h1>

    <div class="py-4 text-lg space-y-2">
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
      <h2 class="text-2xl">Community</h2>

      <ul class="py-4 text-lg space-y-2 list-disc list-inside">
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
      <h2 class="text-2xl">Core Team</h2>

      <ul class="py-4 text-lg space-y-2 list-disc list-inside">
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
import { defineComponent } from "vue"

export default defineComponent({
  name: "home",
  components: {
    // TODO
  },
})
</script>
