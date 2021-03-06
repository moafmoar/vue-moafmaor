import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from "./lib/bus";
/*import Mock from './mock'*/


if (process.env.NODE_ENV  !== 'production' ) require('./mock')
Vue.config.productionTip = false
Vue.prototype.$bus = Bus  //在全局实例里面注入 $bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
