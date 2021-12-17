import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/docs/tests",
    component: () => import("@/views/docs/tests/test-list.vue"),
  },
  {
    path: "/docs/tests/*",
    component: () => import("@/views/docs/tests/test-layout.vue"),
    props: (route) => ({
      articleId: route.params.pathMatch,
    }),
    children: [
      {
        path: "/docs/tests/*",
        component: () => import("@/views/docs/tests/test-page.vue"),
        props: (route) => ({
          articleId: route.params.pathMatch,
          baseURL: `${window.location.origin}/docs/tests`,
        }),
      },
    ],
  },
]
