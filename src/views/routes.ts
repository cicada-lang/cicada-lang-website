import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", component: require("@/views/home").default },
  {
    path: "/books/:bookname",
    component: require("@/views/book").default,
    props: (route) => ({ bookname: route.params.bookname }),
  },
]
