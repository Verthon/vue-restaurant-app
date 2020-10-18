import Vue from 'vue'
import Vuex from 'vuex'

import * as booking from './modules/booking'
import * as menu from './modules/menu'
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
