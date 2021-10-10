import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  // prettier-ignore
  routes: [
    ...require("@/views/routes").routes,
  ],
})

export default router
