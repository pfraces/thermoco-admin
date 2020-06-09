import Vue from 'vue';
import VueRouter from 'vue-router';

import LoginView from '@/components/LoginView.vue';
import SensorsView from '@/components/SensorsView.vue';
import SensorDetailView from '@/components/SensorDetailView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/sensors', component: SensorsView },
  { path: '/sensors/new', component: SensorDetailView },
  {
    path: '/sensors/:id',
    component: SensorDetailView,
    props: (route) => ({ id: parseInt(route.params.id, 10) })
  }
];

export default new VueRouter({
  mode: 'history',
  routes: routes
});
