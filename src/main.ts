import { createApp } from "vue"
import app from "./app.vue"
import router from "./router"
import "./register-service-worker"

createApp(app).use(router).mount("#app")
