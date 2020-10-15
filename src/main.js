import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/bootstrap-icons.svg'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
