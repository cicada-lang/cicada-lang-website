import { createApp } from 'vue'
import FloatingVue from 'floating-vue'
import router from './router'
import './styles/index.css'
import 'floating-vue/dist/style.css'
import App from './App.vue'

createApp(App).use(router).use(FloatingVue).mount('#app')
