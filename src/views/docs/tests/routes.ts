import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/docs/tests",
    component: () => import("@/views/docs/tests/test-list.vue"),
  },
  {
    path: "/docs/tests/*",
    component: () => import("@/views/docs/tests/test-root.vue"),
    props: (route) => ({
      link: route.params.pathMatch,
    }),
  },
]
