<template>
  <div class="flex justify-between font-sans text-gray-400">
    <div>
      <router-link
        v-if="prevPageName"
        :to="{ path: `/books/${bookId}/pages/${prevPageName}` }"
        class="hover:text-gray-700"
        title="Previous Page"
      >
        PREV
      </router-link>
      <div v-else class="text-gray-200">PREV</div>
    </div>

    <div>
      <router-link
        :to="{ path: `/books/${bookId}` }"
        class="hover:text-gray-700"
        title="Back to Title Page"
      >
        TITLE
      </router-link>
      /
      <router-link
        :to="{ path: `/books/${bookId}/contents` }"
        class="hover:text-gray-700"
        title="Back to Contents"
      >
        CONTENTS
      </router-link>
    </div>

    <div>
      <router-link
        v-if="nextPageName"
        :to="{ path: `/books/${bookId}/pages/${nextPageName}` }"
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
import { BookState as State } from "@/views/book/book-state"

@Component({
  name: "book-page-navbar",
  // prettier-ignore
  components: {

  },
})
export default class extends Vue {
  @Prop() bookId!: string
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
