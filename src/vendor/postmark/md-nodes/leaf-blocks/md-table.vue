<template>
  <table class="max-w-max">
    <thead>
      <tr>
        <th
          v-for="(children, index) in node.header"
          :key="index"
          class="px-2 py-1 font-normal border border-b-2 border-gray-500"
          :align="node.alignments[index] || 'left'"
        >
          <md-node
            v-for="(child, index) in children"
            :key="index"
            :state="state"
            :node="child"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in node.rows" :key="index">
        <td
          v-for="(data, index) in row"
          :key="index"
          class="px-2 py-1 border border-gray-500"
          :align="node.alignments[index] || 'left'"
        >
          <md-node
            v-for="(child, index) in data"
            :key="index"
            :state="state"
            :node="child"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Node, Nodes } from "@xieyuheng/postmark"
import { MdDocumentState as State } from "../md-document-state"

@Component({
  name: "md-table",
  // prettier-ignore
  components: {
    ...require("../../md-nodes").components,
  },
})
export default class extends Vue {
  @Prop() state!: State
  @Prop() node!: Nodes.Table
}
</script>
