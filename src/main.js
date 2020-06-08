import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueMaterial from 'vue-material';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import router from './router';
import App from './App.vue';

import '@/styles/theme.css';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueMaterial);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    accessToken: null
  },
  mutations: {
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    }
  }
});

new Vue({
  router: router,
  store: store,
  render: (h) => h(App)
}).$mount('#app');
