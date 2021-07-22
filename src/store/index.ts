import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { state as bookingState } from '@/store/booking/state'
import booking from '@/store/booking'
import { state as menuState } from '@/store/menu/state'
import menu from '@/store/menu'
import { state as companyState } from '@/store/company/state'
import company from '@/store/company'
import { state as authState } from '@/store/auth/state'
import auth from '@/store/auth'
import { RootState } from './types'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    booking: bookingState,
    menu: menuState,
    company: companyState,
    auth: authState
  },
  modules: {
    auth,
    booking,
    menu,
    company
  }
}

export default new Vuex.Store(store)
