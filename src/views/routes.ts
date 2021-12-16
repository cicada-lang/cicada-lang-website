import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  { path: "/", component: () => import("./home/home-page.vue") },
  ...require("./articles/routes").routes,
  ...require("./books/routes").routes,
  { path: "*", component: () => import("./errors/page-not-found.vue") },
]
