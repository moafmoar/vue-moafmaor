import { getAppName } from '@/api/app'

/*异步请求处理*/
const actions = {
  /*
  * 两种异步的方式，第二种是es8中的async
  * */
  /*updateAppName ({ commit }) {
    /!*getAppName().then(res => {
      //console.log(res)
      const {info:{appName}} = res
      commit('SET_APP_NAME',appName)
    }).catch(err => {
      console.log(err)
    })*!/

  }*/
  async updateAppName({commit}){
    try {
      const {info:{appName}} = await getAppName()
      commit('SET_APP_NAME',appName)
    }catch (err) {
      console.log(err)
    }
  }
}

export default actions
