export default {
  state: {
    name: 'lchlch'
  },
  getters: {
    fullname(state) {
      return state.name + 'getters';
    },
    fullname2(state, getters) {
      return getters.fullname + 'getters2';
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.info.name;
    }
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload;
    }
  },
  actions: {
    aUpdateName({commit, rootGetters}, name) {
      setTimeout(() => {
        commit('updateName', name);
        console.log(rootGetters.fullname)
      }, 1000);
    }
  }
}