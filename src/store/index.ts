import Vue from 'vue'
import Vuex from 'vuex'

import booking from '@/store/booking'
import menu from '@/store/menu'

import * as company from './modules/company'
import * as auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      isAuthorizing: false,
      isAuthorized: true,
      user: null
    }
  },
  modules: {
    auth,
    booking,
    menu,
    company
  }
})
