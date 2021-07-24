import Vue from 'vue'
import Vuex, { Store, StoreOptions } from 'vuex'

import booking from '@/store/booking'
import menu from '@/store/menu'
import company from '@/store/company'
import auth from '@/store/auth'
import { RootState } from './types'

Vue.use(Vuex)

const rootState = {} as RootState

const storeConfig: StoreOptions<RootState> = {
  state: rootState,
  modules: {
    auth,
    booking,
    menu,
    company
  }
}

const store: Store<RootState> = new Vuex.Store(storeConfig)

export default store
