import Vue from 'vue';

import '@/styles';
import router from '@/router';
import store from '@/store';
import App from '@/components/App.vue';

new Vue({
  router: router,
  store: store,
  render: (h) => h(App)
}).$mount('#app');
