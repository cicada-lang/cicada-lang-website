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
      articleId: route.params.pathMatch,
    }),
    children: [
      {
        path: "/articles/*",
        component: () => import("@/views/articles/article.vue"),
        props: (route) => ({
          articleId: route.params.pathMatch,
          baseURL: `${window.location.origin}/articles`,
        }),
      },
    ],
  },
]
