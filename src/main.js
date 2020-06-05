import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import router from './router';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#app');
