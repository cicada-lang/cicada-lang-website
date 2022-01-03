import { createApp } from "vue"
import { createMetaManager } from "vue-meta"
import { plugin as vueMetaPlugin } from "vue-meta"
import "./assets/fonts/fonts.css"
import router from "./router"
import "./styles/tailwind.css"

createApp(require("./views/root/RootLayout.vue").default)
  .use(router)
  .use(vueMetaPlugin)
  .use(createMetaManager())
  .mount("#app")
