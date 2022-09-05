import { createApp } from 'vue'
import FloatingVue from 'floating-vue'
import router from './router'
import './fonts/index.css'
import './styles/index.css'
import 'floating-vue/dist/style.css'
import RootLayout from './pages/root/RootLayout.vue'

createApp(RootLayout).use(router).use(FloatingVue).mount('#app')

async function unregisterServiceWorker(): Promise<void> {
  const registrations = await navigator.serviceWorker.getRegistrations()
  for (let registration of registrations) {
    registration.unregister()
  }
}

unregisterServiceWorker()
