export default {
  install(vue, options) {
    console.log(options);
    options.store.registerModule(["myModule"], {
      namespaced: true,
      state: {
        count: "111",
      },
      mutations: {
        COUNT_CHANGE: (state, payload) => {
          console.log(payload);
          state.count = payload;
        },
      },
    }),
      vue.directive("colorChange", {
        //bind : el, binding{value , oldValue , arg .....} , vnode , prevNode
        bind(el) {
          console.log(el);
          el.style.color = "red";
        },
      });
    vue.directive("colorChange2", {
      //bind : el, binding{value , oldValue , arg .....} , vnode , prevNode
      bind(el, binding) {
        console.log(el, binding);
        el.style.color = binding.value.color;
      },
    });
    vue.prototype.$_test = (option) => {
      console.log(option);
      options.store.commit("myModule/COUNT_CHANGE", option);
    };
  },
};
