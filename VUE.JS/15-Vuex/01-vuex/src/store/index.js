import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    students: [
      {id: '001', name: 'lchkid1', age: 18},
      {id: '002', name: 'lchkid2', age: 28},
      {id: '003', name: 'lchkid3', age: 8},
      {id: '004', name: 'lchkid4', age: 13}
    ],
    info: {
      id: 1,
      name: 'kobe',
      height: 1.99
    }
  },
  getters,
  mutations,
  actions,
  modules: {
    a: moduleA,
    b: moduleB
  }
})
