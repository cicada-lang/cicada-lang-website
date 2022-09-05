import { RouteRecordRaw } from 'vue-router'
import HomePage from './home/HomePage.vue'
import AboutPage from './about/AboutPage.vue'
import DocsPage from './docs/DocsPage.vue'
import PageNotFound from './errors/PageNotFound.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/docs', component: DocsPage },
  { path: '/:pathMatch(.*)', component: PageNotFound },
]
