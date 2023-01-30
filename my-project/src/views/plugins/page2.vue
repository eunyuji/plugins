<template>
  <div>{{ count }}</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "plugins-page2",
  data() {
    return {};
  },

  computed: {
    ...mapState("myModule", ["count"]),
  },
};
</script>

<style scoped></style>
