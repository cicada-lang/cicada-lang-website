<template>
  <div class="flex flex-col py-2 font-sans text-lg text-gray-700">
    <div class="flex justify-between py-1">
      <div>
        <div v-if="authors" class="font-bold">{{ authors }}</div>
      </div>

      <div>
        <div v-if="year">{{ year }}</div>
        <div v-else-if="date">{{ date }}</div>
      </div>
    </div>

    <div class="flex justify-between py-1">
      <div></div>

      <div>
        <div v-if="keywords" class="italic">{{ keywords }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { MdDocumentState as State } from "./md-document-state"
import * as ut from "@enchanterjs/enchanter/lib/ut"

@Component({
  name: "md-document-attributes",
  // prettier-ignore
  components: {

  },
})
export default class extends Vue {
  @Prop() state!: State

  attributes = this.state.document.attributes

  get year(): string | undefined {
    if (this.attributes.year) {
      return String(this.attributes.year)
    }
  }

  get date(): string | undefined {
    if (this.attributes.date) {
      return ut.formatDate(this.attributes.date)
    }
  }

  get authors(): string | undefined {
    const authors = []

    if (this.attributes.author) {
      authors.push(this.attributes.author)
    }

    if (this.attributes.authors) {
      authors.push(...this.attributes.authors)
    }

    if (authors.length > 0) {
      return authors.join(", ")
    }
  }

  get keywords(): string | undefined {
    if (this.attributes.keywords) {
      return this.attributes.keywords.join(", ")
    }
  }
}
</script>
