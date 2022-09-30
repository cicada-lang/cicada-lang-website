import { RouteRecordRaw } from 'vue-router'
import HomePage from './home/HomePage.vue'
import AboutPage from './about/AboutPage.vue'
import Playground from './playground/Playground.vue'
import PageNotFound from './errors/PageNotFound.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  {
    path: '/playground/:encoded?',
    component: Playground,
    props: (route) => ({ encoded: route.params.encoded }),
  },
  { path: '/:pathMatch(.*)', component: PageNotFound },
]
