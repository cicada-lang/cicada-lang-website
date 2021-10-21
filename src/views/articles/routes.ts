import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/articles",
    component: () => import("@/views/articles/article-list.vue"),
  },
  {
    path: "/articles/:articleId",
    component: () => import("@/views/articles/article-layout.vue"),
    props: (route) => ({
      articleId: route.params.articleId,
    }),
    children: [
      {
        path: "",
        component: () => import("@/views/articles/article.vue"),
        props: (route) => ({
          articleId: route.params.articleId,
          baseURL: `${window.location.origin}/articles`,
        }),
      },
    ],
  },
]
