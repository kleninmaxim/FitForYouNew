import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/for_designers",
    name: "for_designers",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ForDesigners.vue")
  },
  {
    path: "/take_sizes",
    name: "take_sizes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TakeSizes.vue")
  },
  {
    path: "/find_designers",
    name: "find_designers",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FindDesigners.vue")
  },
  {
    path: "/order_step_1",
    name: "order_step_1",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Order1.vue")
  },
  {
    path: "/order_step_2",
    name: "order_step_2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Order2.vue")
  },
  {
    path: "/test",
    name: "test",
    component: () => import(/* webpackChunkName: "about" */ "../views/Test.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
