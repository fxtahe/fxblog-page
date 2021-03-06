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
    path: "/tag/:name/:id",
    component: () => import("@/views/tag/index"),
    name: "tag"
  },
  {
    path: "/category/:name/:id",
    component: () => import("@/views/category/index"),
    name: "category"
  },
  {
    path: "/author/:name/:id",
    component: () => import("@/views/author/index"),
    name: "author"
  },
  {
    path: "/article/:id",
    component: () => import("@/views/article/index"),
    name: "article"
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
