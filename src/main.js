import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery';
import bootstrap from 'bootstrap';
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios ;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

new Vue({
  jQuery,
  bootstrap,
  router,
  render: h => h(App)
}).$mount('#app')
