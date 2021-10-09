import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", component: require("@/views/home").default },
  { path: "/books", component: require("@/views/book-list").default },
]
