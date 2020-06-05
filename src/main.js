import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueMaterial);

Vue.config.productionTip = false;

const Login = { template: '<div>login</div>' };
const Sensors = { template: '<div>sensors</div>' };

const routes = [
  { path: '/login', component: Login },
  { path: '/sensors', component: Sensors },
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#app');
