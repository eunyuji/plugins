export const mixinsTest = {
  data() {
    return {
      dataShow: true,
      count: "1111",
    };
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
        this.dataShow = false;
      }, 3000);
    },
  },
};
