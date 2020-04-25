import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    name: "home"
  },
  {
    path: "/archive",
    component: () => import("@/views/archive/index"),
    name: "archive"
  },
  {
    path: "/sitemap",
    component: () => import("@/views/sitemap/index"),
    name: "sitemap"
  },
  {
    path: "/about",
    component: () => import("@/views/about/index"),
    name: "about"
  }
];

const router = new VueRouter({
  routes
});

export default router;
