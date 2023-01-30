import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import test from "./plugins/test";
Vue.use(test, { store, router });
/*
  Vue 인스턴스
  개발에 필요한 기능들을 생성자에 미리 정의하고 사용하기 위함
*/
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
