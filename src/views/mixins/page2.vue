<template>
  <div>
    <p v-colorChange>{{ count }}</p>
  </div>
</template>

<script>
import { mixinsTest } from "@/mixins/test";
export default {
  name: "mixins-page2",
  mixins: [mixinsTest],
};
</script>

<style scoped></style>
