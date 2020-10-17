import Vue from 'vue'
import Vuex from 'vuex'

import * as booking from './modules/booking'
import * as menu from './modules/menu'
import * as company from './modules/company'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  modules: {
    booking,
    menu,
    company
  }
})
