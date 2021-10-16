import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/books/:bookId",
    component: () => import("@/views/book/book-layout.vue"),
    props: (route) => ({ bookId: route.params.bookId }),
    children: [
      {
        path: "",
        component: () => import("@/views/book/book-title-page.vue"),
        props: (route) => ({ bookId: route.params.bookId }),
      },
      {
        path: "contents",
        component: () => import("@/views/book/book-contents.vue"),
        props: (route) => ({ bookId: route.params.bookId }),
      },
      {
        path: "pages/:pageName",
        component: () => import("@/views/book/book-page.vue"),
        props: (route) => ({
          bookId: route.params.bookId,
          pageName: route.params.pageName,
        }),
      },
    ],
  },
]
