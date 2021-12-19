import { GitLink } from "@enchanterjs/enchanter/lib/git-link"
import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/books",
    component: () => import("@/views/books/book-list.vue"),
  },
  {
    path: "/books/*",
    component: () => import("@/views/books/book-root.vue"),
    props: (route) => ({
      link: route.params.pathMatch,
      frontMatter: route.query["front-matter"],
      backMatter: route.query["back-matter"],
    }),
  },
]
