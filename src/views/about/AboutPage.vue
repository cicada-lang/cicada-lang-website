<template>
  <PageLayout>
    <h2 class="font-sans text-2xl font-bold">Why this project?</h2>

    <section class="py-4 space-y-2">
      <p>
        Cicada project was founded by
        <a
          href="https://xieyuheng.com"
          class="inline-flex font-sans underline"
          target="_blank"
        >
          Xie Yuheng <IconExternalLink class="w-4" /> </a
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
            cicada-lang <IconExternalLink class="w-4" />
          </a>
        </li>

        <li class="list-disc">
          Telegram:
          <a
            href="https://t.me/CicadaLanguage"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            CicadaLanguage <IconExternalLink class="w-4" />
          </a>
          <ul class="px-8 py-2 space-y-2">
            <li class="list-disc">
               中文 / Chinese:
              <a
                href="https://t.me/CicadaLanguageCN"
                class="inline-flex font-sans underline"
                target="_blank"
              >
                CicadaLanguageCN <IconExternalLink class="w-4" />
              </a>
            </li>
          </ul>
        </li>

        <li class="list-disc">
          IRC: #cicada-lang at
          <a
            href="https://libera.chat"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            libera.chat <IconExternalLink class="w-4" />
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
            Xie Yuheng <IconExternalLink class="w-4" />
          </a>
        </li>

        <li class="list-disc">
          <a
            href="https://github.com/tsao-chi"
            class="inline-flex font-sans underline"
            target="_blank"
          >
            Zaoqi <IconExternalLink class="w-4" />
          </a>
        </li>
      </ul>
    </section>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "../../layouts/page-layout"
import IconExternalLink from "../../components/icons/IconExternalLink.vue"
</script>
