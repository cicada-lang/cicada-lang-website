<template>
  <div class="flex justify-between font-sans text-gray-400">
    <div>
      <router-link
        v-if="prevPageName"
        :to="{ path: `/books/${state.bookName}/-/${prevPageName}` }"
        class="hover:text-gray-700"
        title="Previous Page"
      >
        PREV
      </router-link>
      <div v-else class="text-gray-200">PREV</div>
    </div>

    <div>
      <router-link
        :to="{ path: `/books/${state.bookName}` }"
        class="hover:text-gray-700"
        title="Back to Title Page"
      >
        TITLE
      </router-link>
      /
      <router-link
        :to="{ path: `/books/${state.bookName}?front-matter=contents` }"
        class="hover:text-gray-700"
        title="Back to Contents"
      >
        CONTENTS
      </router-link>
    </div>

    <div>
      <router-link
        v-if="nextPageName"
        :to="{ path: `/books/${state.bookName}/-/${nextPageName}` }"
        class="hover:text-gray-700"
        title="Next Page"
      >
        NEXT
      </router-link>
      <div v-else class="text-gray-200">NEXT</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { BookState as State } from "@/views/books/book-state"

@Component({
  name: "book-page-navbar",
  // prettier-ignore
  components: {

  },
})
export default class extends Vue {
  @Prop() pageName!: string
  @Prop() state!: State

  get prevPageName(): string | undefined {
    const index = this.state.pageNames.findIndex(
      (pageName) => pageName === this.pageName
    )
    if (index === -1) return undefined
    return this.state.pageNames[index - 1]
  }

  get nextPageName(): string | undefined {
    const index = this.state.pageNames.findIndex(
      (pageName) => pageName === this.pageName
    )
    if (index === -1) return undefined
    return this.state.pageNames[index + 1]
  }
}
</script>
