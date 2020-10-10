import Vue from 'vue'
import Vuex from 'vuex'

import * as booking from './modules/booking'
import * as menu from './modules/menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    booking,
    menu
  }
})
