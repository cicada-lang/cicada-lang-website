import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  { path: "/", component: () => import("@/views/home") },
  {
    path: "/articles/:articleId",
    component: () => import("@/views/article"),
    props: (route) => ({
      articleId: route.params.articleId,
      baseURL: `${window.location.origin}/articles`,
    }),
  },
  {
    path: "/books/:bookId",
    component: () => import("@/views/book"),
    props: (route) => ({ bookId: route.params.bookId }),
  },
]
