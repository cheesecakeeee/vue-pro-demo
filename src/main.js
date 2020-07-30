import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import api from './api'

if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.$bus = Bus
Vue.prototype.$Api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
