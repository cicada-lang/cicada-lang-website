import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import { plugin as vueMetaPlugin } from 'vue-meta'
import FloatingVue from 'floating-vue'
import router from './router'
import './fonts/index.css'
import './styles/index.css'
import 'floating-vue/dist/style.css'

createApp(require('./views/root/RootLayout.vue').default)
  .use(router)
  .use(vueMetaPlugin)
  .use(FloatingVue)
  .use(createMetaManager())
  .mount('#app')

async function unregisterServiceWorker(): Promise<void> {
  const registrations = await navigator.serviceWorker.getRegistrations()
  for (let registration of registrations) {
    registration.unregister()
  }
}

unregisterServiceWorker()
