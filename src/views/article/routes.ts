import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/articles/:articleId",
    component: () => import("@/views/article/article.vue"),
    props: (route) => ({
      articleId: route.params.articleId,
      baseURL: `${window.location.origin}/articles`,
    }),
  },
]
