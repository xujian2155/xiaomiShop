/* eslint-disable */
import { createStore } from 'vuex'

export default createStore({
  state: {
    lang: 'cn'
  },
  getters: {
  },
  mutations: {
    changeGlobalLang (state, lang) {
      debugger
      state.lang = lang
    }
  },
  actions: {
  },
  modules: {
  }
})
