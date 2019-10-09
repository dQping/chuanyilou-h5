import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import './cube-ui'
import 'amfe-flexible'
import './assets/iconfont.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
