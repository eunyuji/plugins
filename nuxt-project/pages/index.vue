<template>
  <div>
    <input type="text" v-model="txt" />
    <button @click="$_msg(txt)">클릭하면 메세지가</button>
  </div>
</template>

<script>
import bridgeBus from "@/mixins/birdgeBus";
export default {
  name: "IndexPage",
  data() {
    return {
      txt: "",
    };
  },
  mounted() {
    console.log(this.$bridge);
    console.log(this.$bridge.callNative.getAppInfo());
  },
  methods: {
    init() {
      bridgeBus.$on("emitData", (data) => {
        console.log(data);
      });
    },
  },
};
</script>
