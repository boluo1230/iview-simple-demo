import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appId: '',
    mpInfo: '',
    apiHost: process.env.NODE_ENV === 'production' ? './api' : 'http://localhost:3000',
    mpList: [],
    userInfo: {}
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app
  }
})
