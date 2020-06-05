import VueRouter from 'vue-router';

import LoginView from '@/components/LoginView.vue';
import SensorsView from '@/components/SensorsView.vue';
import SensorDetailView from '@/components/SensorDetailView.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/sensors', component: SensorsView },
  { path: '/sensors/:id', component: SensorDetailView },
];

export default new VueRouter({
  mode: 'history',
  routes: routes,
});
