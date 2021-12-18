import { GitLink } from "@enchanterjs/enchanter/lib/git-link"
import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/books",
    component: () => import("@/views/books/book-list.vue"),
  },
  {
    path: "/books/*",
    component: () => import("@/views/books/book-layout.vue"),
    props: (route) => ({
      bookId: route.params.pathMatch,
      frontMatter: route.query["front-matter"],
      backMatter: route.query["back-matter"],
      get baseURL(): string {
        const { host, repo } = GitLink.decode(route.params.pathMatch)
        return `${window.location.origin}/books/${repo}@${host}`
      },
    }),
  },
]
