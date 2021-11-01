import Vue from 'vue'
import Vuex from 'vuex'
import { createStore, Module } from 'vuex-smart-module'

import { booking } from '@/store/booking'
import { company } from '@/store/company'
import { auth } from '@/store/auth'

Vue.use(Vuex)

export const root = new Module({
  namespaced: false,
  modules: {
    booking,
    company,
    auth
  }
})

export const store = createStore(
  root,
  {
    strict: process.env.NODE_ENV !== 'production'
  }
)
