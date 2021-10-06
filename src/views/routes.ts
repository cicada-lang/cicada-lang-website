import { RouteRecordRaw } from "vue-router"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: require("@/views/home.vue").default },
]
