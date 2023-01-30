import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/views/index";
import mixinsIndex from "@/views/mixins";
import mixinsPage2 from "@/views/mixins/page2";
import pluginsIndex from "@/views/plugins";
import pluginsPage2 from "@/views/plugins/page2";
Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    name: "메인",
    component: home,
  },
  {
    path: "/plugins",
    name: "plugins page",
    component: pluginsIndex,
  },
  {
    path: "/plugins/page2",
    name: "plugins page2",
    component: pluginsPage2,
  },
  {
    path: "/mixins",
    name: "mixins page",
    component: mixinsIndex,
  },
  {
    path: "/mixins/page2",
    name: "mixins page2",
    component: mixinsPage2,
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
