const state = {
  userName: 'eudoracheng'
}

// 模块内的getters
const getters = {
  firstLetter: state => state.userName.substr(0, 1)
}

const mutations = {
  SET_USER_NAME (state, payload) {
    state.userName = payload.userName
  }
}

const actions = {
  //
}

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
