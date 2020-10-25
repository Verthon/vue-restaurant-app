import Vue from 'vue'
import Vuex from 'vuex'

import booking from '@/store/booking'
import menu from '@/store/menu'
import company from '@/store/company'
import auth from '@/store/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    booking: booking.state,
    menu: menu.state,
    company: company.state,
    auth: auth.state
  },
  modules: {
    auth,
    booking,
    menu,
    company
  }
})
