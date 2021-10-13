import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  { path: "/", component: require("@/views/home").default },
  {
    path: "/articles/:articleId",
    component: require("@/views/article").default,
    props: (route) => ({ articleId: route.params.articleId }),
  },
  {
    path: "/books/:bookId",
    component: require("@/views/book").default,
    props: (route) => ({ bookId: route.params.bookId }),
  },
]
