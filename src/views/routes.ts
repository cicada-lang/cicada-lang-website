import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  { path: "/", component: require("@/views/home").default },
  {
    path: "/books/:bookId",
    component: require("@/views/book").default,
    props: (route) => ({ bookId: route.params.bookId }),
  },
]
