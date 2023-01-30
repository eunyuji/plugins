<template>
  <div>
    <h1>plugins</h1>
    <h2>커스텀 디렉티브</h2>
    <p>글자색이 변화가 없습니다.</p>
    <p v-colorChange>글자색이 레드로 바뀝니다.</p>
    <p v-colorChange2="{ color: 'blue' }">
      옵션으로 지정된 글자색으로 바뀝니다.
    </p>
    <h2>인스턴스 플러그인</h2>
    <p v-colorChange>{{ count }}</p>
    <input type="text" v-model="count2" /><button
      type="button"
      @click="$_test(count2)"
    >
      입력된값으로 변경
    </button>
    <p><router-link to="/plugins/page2">page2 이동</router-link></p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "plugins-index",
  data() {
    return {
      count2: "",
    };
  },
  created() {
    console.log(this.$store);
    this.count2 = this.count;
  },
  computed: {
    ...mapState("myModule", ["count"]),
  },
};
</script>

<style scoped></style>
