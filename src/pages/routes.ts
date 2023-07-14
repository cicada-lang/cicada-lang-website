import { RouteRecordRaw } from 'vue-router'
import AboutPage from './about/AboutPage.vue'
import PageNotFound from './errors/PageNotFound.vue'
import HomePage from './home/HomePage.vue'
import Playground from './playground/Playground.vue'

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
