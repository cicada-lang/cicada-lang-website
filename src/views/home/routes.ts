import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: () => import("./home-layout.vue"),
  },
]
