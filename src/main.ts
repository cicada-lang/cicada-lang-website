import Vue from "vue"
import root from "./root.vue"
import router from "./router"
import "./styles/tailwind.css"
import "./assets/fonts/fonts.css"
import "./plugins/register-service-worker"

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(root),
}).$mount("#app")
