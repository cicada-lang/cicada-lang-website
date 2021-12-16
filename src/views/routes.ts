import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  ...require("@/views/home/routes").routes,
  ...require("@/views/articles/routes").routes,
  ...require("@/views/books/routes").routes,
  { path: "*", component: () => import("@/views/errors/page-not-found.vue") },
]
