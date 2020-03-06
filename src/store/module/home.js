/*
*
* 1.commit 提交一个 mutations
* 2.state 当前 state
* 3.rootState 根目录  index 下的state
*   state.appName
* 4. dispatch 多个actions 的情况下子此处提交另一个actions
* */

const state = {
   homeName: 'sup_amdin',
   supNameWithVersion: 'sNameWithVsersion',
    mockHomeName:''
}

/*获取 state 里面的状态值*/
const getters = {
   supNameVersion: (state) =>{
       return `${state.supNameWithVersion} v2.0`
   }
}

/*更改对应的 state 的状态值*/
const mutations = {
    SET_SUP_NAME (state,params) {
        state.homeName = params.homeName
    },
    SET_SUP_MOCK_NAME (state,params) {
        state.mockHomeName = params.mockHomeName
    }
}

/*异步操作，提交 mutations */
const actions = {
   updateHomeName ({commit,state,rootState,dispatch},params) {
       commit('SET_SUP_NAME',params)
   },
    updateMockHomeName ({commit},params) {
       commit('SET_SUP_MOCK_NAME',params)
    }
}
export default {
    state,
    actions,
    mutations,
    getters,
    modules: {

    }
}
