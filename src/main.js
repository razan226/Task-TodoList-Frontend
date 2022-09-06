import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$BaseURL = 'http://localhost:3000'



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

