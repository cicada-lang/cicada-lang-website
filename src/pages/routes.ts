import { RouteRecordRaw } from 'vue-router'
import HomePage from './home/HomePage.vue'
import AboutPage from './about/AboutPage.vue'
import PageNotFound from './errors/PageNotFound.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/:pathMatch(.*)', component: PageNotFound },
]
