import { createMapper, Module } from 'vuex-smart-module'

import actions from './actions'
import mutations from './mutations'
import state from './state'

export const booking = new Module({
  state,
  actions,
  mutations
})

export const bookingMapper = createMapper(booking)
