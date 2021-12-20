import Vue from "vue"
import "./assets/fonts/fonts.css"
import "./plugins/register-service-worker"
import "./plugins/vue-meta"
import router from "./router"
import "./styles/tailwind.css"

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(require("./views/root/root-layout.vue").default),
}).$mount("#app")
