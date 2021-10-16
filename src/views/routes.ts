import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  { path: "/", component: () => import("@/views/home") },
  ...require("@/views/articles/routes").routes,
  ...require("@/views/books/routes").routes,
]
