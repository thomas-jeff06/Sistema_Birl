import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery';
import bootstrap from 'bootstrap';
import axios from 'axios'

Vue.prototype.$http = axios ;
Vue.config.productionTip = false

new Vue({
  jQuery,
  bootstrap,
  router,
  render: h => h(App)
}).$mount('#app')
