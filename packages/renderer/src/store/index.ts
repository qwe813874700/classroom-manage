import { createStore } from 'vuex'
import RootStateTypes from './interface'

const store = createStore<RootStateTypes>({
  state: {
    common: {
      currNav: 'control'
    }
  },
  getters: {},
  mutations: {
    setNav (state, data) {
      state.common.currNav = data
    }
  },
  actions: {
    setStateByMutationKey ({ commit }, data) {
      commit('')
    }
  }
})

export default store