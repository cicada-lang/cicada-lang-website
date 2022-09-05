import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('./home/HomePage.vue') },
  { path: '/about', component: () => import('./about/AboutPage.vue') },
  { path: '/docs', component: () => import('./docs/DocsPage.vue') },
  {
    path: '/:pathMatch(.*)',
    component: () => import('./errors/PageNotFound.vue'),
  },
]
