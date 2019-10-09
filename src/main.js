import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import api from './api/install';

import './cube-ui';
import 'amfe-flexible';
import './assets/iconfont.css';

Vue.config.productionTip = false;
Vue.use(api);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
