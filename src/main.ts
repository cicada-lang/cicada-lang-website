import { createApp } from 'vue'
import FloatingVue from 'floating-vue'
import router from './router'
import './assets/styles/index.css'
import './assets/fonts/index.css'
import 'floating-vue/dist/style.css'
import App from './App.vue'

createApp(App).use(router).use(FloatingVue).mount('#app')
