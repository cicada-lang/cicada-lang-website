import { createApp } from "vue"
import app from "./app.vue"
import router from "./router"
import "./plugins/register-service-worker"
import "twind/shim"

createApp(app).use(router).mount("#app")
