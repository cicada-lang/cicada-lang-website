import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/books/:bookId",
    component: () => import("@/views/book"),
    props: (route) => ({ bookId: route.params.bookId }),
  },
  {
    path: "/books/:bookId/contents",
    component: () => import("@/views/book/book-contents.vue"),
    props: (route) => ({ bookId: route.params.bookId }),
  },
  {
    path: "/books/:bookId/pages/:pageName",
    component: () => import("@/views/book/book-page.vue"),
    props: (route) => ({
      bookId: route.params.bookId,
      pageName: route.params.pageName,
    }),
  },
]
