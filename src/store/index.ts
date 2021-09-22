import Vue from 'vue'
import Vuex, { Store, StoreOptions } from 'vuex'
import { createStore, Module } from 'vuex-smart-module'

import { booking } from '@/store/booking'
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
    menu,
    company
  }
}

export const store = createStore(
  booking,
  {
    strict: process.env.NODE_ENV !== 'production'
  }
)
