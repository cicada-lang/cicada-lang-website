import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/articles",
    component: () => import("@/views/articles/article-list.vue"),
  },
  {
    path: "/articles/*",
    component: () => import("@/views/articles/article-layout.vue"),
    props: (route) => ({
      link: route.params.pathMatch,
    }),
    children: [
      {
        path: "/articles/*",
        component: () => import("@/views/articles/article-page.vue"),
        props: (route) => ({
          link: route.params.pathMatch,
          baseURL: `${window.location.origin}/articles`,
        }),
      },
    ],
  },
]
