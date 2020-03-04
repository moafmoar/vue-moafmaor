import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import saveInLocal  from "./plugin/saveInLocal";

Vue.use(Vuex)

export default new Vuex.Store({  // Vuex.Store创建实例
  strict: process.env.NODE_ENV ==='development',  /* 开启严格模式 默认是 false*/
  state: {
    // 组件状态
    count:0,
    appName: 'admin',
    appVersion: '',
    stateValue:'abc'
  },
  mutations,
  actions,
  modules: {
    user
  },
  getters,
  plugins: [
      saveInLocal
  ]
})
