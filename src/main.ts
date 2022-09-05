import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import FloatingVue from 'floating-vue'
import router from './router'
import './assets/styles/index.css'
import './assets/fonts/index.css'
import 'floating-vue/dist/style.css'
import App from './App.vue'

const root = createApp(App)

root.use(router)
root.use(createHead())
root.use(FloatingVue)

root.mount('#app')
