import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  { path: "/", component: require("@/views/home").default },
  {
    path: "/books/:bookname",
    component: require("@/views/book").default,
    props: (route) => ({
      reference: {
        bookname: route.params.bookname,
        host: route.query.host,
        by: route.query.by,
        dir: route.query.dir,
        hostURL: route.query.hostURL,
      },
    }),
  },
]
