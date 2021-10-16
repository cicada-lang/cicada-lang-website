<template>
  <div
    class="
      py-12
      flex flex-col
      items-center
      justify-between
      h-screen
      font-serif
      text-2xl
    "
  >
    <router-link
      :to="{ path: `/books/${bookId}/contents` }"
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
        <span class="pl-2 pr-1">{{ state.config.title }}</span>
        <span class="text-sm">{{ state.config.version }}</span>
      </div>

      <h2 class="md:text-2xl py-2 font-sans text-xl font-normal">
        <span>{{ state.config.subtitle }}</span>
      </h2>
    </router-link>

    <section
      v-if="state.config.authors && state.config.authors.length > 0"
      class="py-4"
    >
      <div class="font-sans font-bold" v-for="author in state.config.authors">
        {{ author }}
      </div>
    </section>

    <section class="flex flex-col items-center px-4">
      <a
        :href="state.bookId.formatURL()"
        class="hover:text-gray-500 py-1 font-sans text-xl"
        target="_blank"
      >
        <span>{{ state.bookId.repo }}</span>
        <span> @ {{ state.bookId.host }}</span>
      </a>

      <div v-if="state.config.date" class="py-1">
        <div class="font-sans">{{ state.config.date }}</div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { BookState as State } from "@/views/books/book-state"

@Component({
  name: "book-title-page",
  // prettier-ignore
  components: {
    // TODO
  },
})
export default class extends Vue {
  @Prop() bookId!: string
  @Prop() state!: State
}
</script>
