import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  { path: "/", component: () => import("@/views/home") },
  ...require("@/views/article/routes").routes,
  ...require("@/views/book/routes").routes,
]
