import { Module } from 'vuex'

import actions from './actions'
import mutations from './mutations'
import { RootState } from '../types'
import { BookingState, state } from './state'

const booking: Module<BookingState, RootState> = {
  state,
  actions,
  mutations
}

export default booking
