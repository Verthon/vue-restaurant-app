import { Module } from 'vuex'

import { RootState } from '../types'
import actions from './actions'
import mutations from './mutations'
import { state, AuthState } from './state'

const auth: Module<AuthState, RootState> = {
  state,
  actions,
  mutations
}

export default auth
