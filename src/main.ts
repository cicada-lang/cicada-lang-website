import { createApp } from "vue"
import { createMetaManager } from "vue-meta"
import { plugin as vueMetaPlugin } from "vue-meta"
import router from "./router"
import "./fonts/index.css"
import "./styles/index.css"

createApp(require("./views/root/RootLayout.vue").default)
  .use(router)
  .use(vueMetaPlugin)
  .use(createMetaManager())
  .mount("#app")

async function unregisterServiceWorker(): Promise<void> {
  const registrations = await navigator.serviceWorker.getRegistrations()
  for (let registration of registrations) {
    registration.unregister()
  }
}

unregisterServiceWorker()
