<template>
  <div>
    <hello-world name="xyh" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "home",
  components: {
    "hello-world": require("@/components/hello-world.vue").default,
  },
})
</script>
