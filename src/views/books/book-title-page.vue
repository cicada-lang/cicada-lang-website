<template>
  <div
    class="
      flex flex-col
      items-center
      justify-between
      h-screen
      py-12
      font-serif
      text-2xl
    "
  >
    <router-link
      :to="{
        path: `/books/${state.bookId.host}/${state.bookId.repo}?front-matter=contents`,
      }"
      class="
        md:text-4xl
        hover:text-gray-500
        flex flex-col
        items-center
        py-4
        font-sans
        text-3xl
        font-bold
      "
    >
      <div>
        <span class="pl-2 pr-1">{{ state.bookConfig.title }}</span>
      </div>

      <h2 class="md:text-2xl py-2 font-sans text-xl font-normal">
        <span>{{ state.bookConfig.subtitle }}</span>
      </h2>

      <div>
        <span class="font-sans text-lg font-normal">{{
          state.bookConfig.version
        }}</span>
      </div>
    </router-link>

    <section
      v-if="state.bookConfig.authors && state.bookConfig.authors.length > 0"
      class="py-4"
    >
      <div
        class="font-sans font-bold"
        v-for="author in state.bookConfig.authors"
      >
        {{ author }}
      </div>
    </section>

    <section class="flex flex-col items-center px-4">
      <a
        :href="state.bookId.formatURL()"
        class="
          md:flex-row
          hover:text-gray-500
          flex flex-col
          items-center
          py-1
          font-sans
          text-xl
        "
        target="_blank"
      >
        <div>{{ state.bookId.host }}/{{ state.bookId.repo }}</div>
      </a>

      <div v-if="state.bookConfig.date" class="py-1">
        <div class="text font-sans text-xl">{{ state.bookConfig.date }}</div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { BookState as State } from "@/views/books/book-state"

@Component({
  name: "book-title-page",
})
export default class extends Vue {
  @Prop() state!: State
}
</script>
