import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 组件状态
    count:0
  },
  mutations: {
    //改变组件的状态值
    countchange () {
      this.state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
