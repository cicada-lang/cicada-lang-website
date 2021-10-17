import Vue from "vue"
import router from "./router"
import "./styles/tailwind.css"
import "./assets/fonts/fonts.css"
import "./plugins/vue-meta"
import "./plugins/register-service-worker"
import "./plugins/highlight"
import "./app"

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(require("./root.vue").default),
}).$mount("#app")
