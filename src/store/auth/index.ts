import { Module } from 'vuex-smart-module'

import actions from './actions'
import mutations from './mutations'
import state from './state'

export const auth = new Module({
  state,
  actions,
  mutations
})
