import Vue from "vue"
import app from "./app.vue"
import router from "./router"
import "./plugins/register-service-worker"
import "twind/shim"

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(app),
}).$mount("#app")
