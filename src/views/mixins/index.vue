<template>
  <div>
    <h1>mixins</h1>
    <p v-if="dataShow">3초후 사라집니다.</p>
    <p v-colorChange>{{ count }}</p>
    <input type="text" v-model="count" />
    <p><router-link to="/mixins/page2">page2 이동</router-link></p>
  </div>
</template>

<script>
import { mixinsTest } from "@/mixins/test";
export default {
  name: "mixins-index",
  mixins: [mixinsTest],
};
</script>

<style scoped></style>
