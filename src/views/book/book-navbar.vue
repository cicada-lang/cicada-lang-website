<template>
  <div class="flex justify-between font-sans text-gray-400">
    <div></div>

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

    <div></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { BookState as State } from "@/views/book/book-state"

@Component({
  name: "book-navbar",
  // prettier-ignore
  components: {

  },
})
export default class extends Vue {
  @Prop() bookId!: string
  @Prop() state!: State
}
</script>
