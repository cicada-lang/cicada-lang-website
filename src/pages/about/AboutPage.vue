<script setup lang="ts">
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { LinkIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <PageLayout>
    <div class="py-4 text-xl md:text-2xl">
      <h2 class="font-sans text-2xl font-bold">Why this project?</h2>

      <section class="space-y-2 py-4">
        <p>
          Cicada project was founded by
          <a
            href="https://xieyuheng.com"
            class="inline-flex items-center font-sans underline"
            target="_blank"
          >
            Xie Yuheng <LinkIcon class="w-4" /> </a
          >, <br class="hidden md:block" />
          who wants to share the ideas about dependent type,
          <br class="hidden md:block" />
          by a language that is familiar to his fellow programmers.
        </p>
      </section>

      <h2 class="font-sans text-2xl font-bold">Community</h2>

      <section class="space-y-2 py-4">
        <p>
          Happiness is only real when shared, <br />
          and software service is only valuable when serving people well.
        </p>

        <ul class="space-y-2 px-5 pt-2">
          <li class="list-disc">
            GitHub:
            <a
              href="https://github.com/cicada-lang"
              class="inline-flex items-center font-sans underline"
              target="_blank"
            >
              cicada-lang <LinkIcon class="w-4" />
            </a>
          </li>

          <li class="list-disc">
            Telegram:
            <a
              href="https://t.me/CicadaLanguage"
              class="inline-flex items-center font-sans underline"
              target="_blank"
            >
              CicadaLanguage <LinkIcon class="w-4" />
            </a>
            <ul class="space-y-2 px-5 pt-2">
              <li class="list-disc">
                中文 / Chinese:
                <a
                  href="https://t.me/CicadaLanguageCN"
                  class="inline-flex items-center font-sans underline"
                  target="_blank"
                >
                  CicadaLanguageCN <LinkIcon class="w-4" />
                </a>
              </li>
            </ul>
          </li>

          <li class="list-disc">
            IRC: #cicada-lang at
            <a
              href="https://libera.chat"
              class="inline-flex items-center font-sans underline"
              target="_blank"
            >
              libera.chat <LinkIcon class="w-4" />
            </a>
          </li>
        </ul>
      </section>

      <h2 class="font-sans text-2xl font-bold">Core Team</h2>

      <section class="space-y-2 py-4">
        <ul class="space-y-2 px-5 pt-2">
          <li class="list-disc">
            <a
              href="https://xieyuheng.com"
              class="inline-flex items-center font-sans underline"
              target="_blank"
            >
              Xie Yuheng <LinkIcon class="w-4" />
            </a>
          </li>

          <li class="list-disc">
            <a
              href="https://github.com/tsao-chi"
              class="inline-flex items-center font-sans underline"
              target="_blank"
            >
              Zaoqi <LinkIcon class="w-4" />
            </a>
          </li>

          <li class="list-disc">
            <a
              href="https://github.com/LittleJianCH"
              class="inline-flex items-center font-sans underline"
              target="_blank"
            >
              LittleJian <LinkIcon class="w-4" />
            </a>
          </li>

          <li class="list-disc">
            <a
              href="https://github.com/bzy-debug"
              class="inline-flex items-center font-sans underline"
              target="_blank"
            >
              Bao Zhiyuan <LinkIcon class="w-4" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  </PageLayout>
</template>
