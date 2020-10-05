import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery';
import bootstrap from 'bootstrap';
import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

Vue.config.productionTip = false

new Vue({
  jQuery,
  bootstrap,
  router,
  render: h => h(App)
}).$mount('#app')
