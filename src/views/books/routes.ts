import { RouteConfig } from "vue-router"

export const routes: Array<RouteConfig> = [
  {
    path: "/books",
    component: () => import("@/views/books/book-list.vue"),
  },
  {
    path: "/books/*",
    component: () => import("@/views/books/book-layout.vue"),
    props: (route) => ({ bookId: route.params.pathMatch }),
    children: [
      {
        path: "",
        component: () => import("@/views/books/book-title-page.vue"),
        props: (route) => ({ bookId: route.params.pathMatch }),
      },
      {
        path: "contents",
        component: () => import("@/views/books/book-contents.vue"),
        props: (route) => ({ bookId: route.params.pathMatch }),
      },
      {
        path: "pages/*",
        component: () => import("@/views/books/book-page.vue"),
        props: (route) => ({
          bookId: route.params.pathMatch,
          pageName: route.params.pathMatch,
          baseURL: `${window.location.origin}/books/${route.params.bookId}/pages`,
        }),
      },
    ],
  },
]
