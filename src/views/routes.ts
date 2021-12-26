import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", component: () => import("./home/home-page.vue") },
  { path: "/about", component: () => import("./about/about-page.vue") },
  { path: "/docs", component: () => import("./docs/docs-page.vue") },
  {
    path: "/:pathMatch(.*)",
    component: () => import("./errors/page-not-found.vue"),
  },
]
