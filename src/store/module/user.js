const state = {
    userName: 'Moafmoar'
}

const getters = {
    firstLetter: (state) => {
        return state.userName.substr(0,1)
    }
}

const mutations = {
   SET_USER_NAME (state,params) {
      state.userName = params
   }
}

const actions = {
   updateUserName ({commit,state,rootState,dispatch}) {
       //rootState.appaName
   },
}

export default {
    //namespaced: true,  //模块的命名空间
    getters,
    state,
    mutations,
    actions,
    modules: {

    }
}
