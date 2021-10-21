<template>
  <div
    class="
      flex flex-col
      justify-center
      min-h-screen
      px-6
      py-12
      font-serif
      text-2xl
    "
  >
    <div v-for="(text, pageName) in state.pages" :key="pageName">
      <div
        v-if="
          pageName.endsWith('.md') && state.parseDocument(text).attributes.title
        "
      >
        <router-link
          :to="{ path: `/books/${bookId}/pages/${pageName}` }"
          class="hover:text-gray-500 font-sans"
        >
          {{ state.parseDocument(text).attributes.title }}
        </router-link>
        <div
          class="
            font-sans
            text-xs
            italic
            leading-3
            tracking-tight
            text-right text-gray-600
          "
        >
          {{ pageName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { BookState as State } from "@/views/books/book-state"

@Component({
  name: "book-contents",
  // prettier-ignore
  components: {
    // TODO
  },
})
export default class extends Vue {
  @Prop() bookId!: string
  @Prop() state!: State

  mounted(): void {
    window.scrollTo(0, 0)
  }
}
</script>
