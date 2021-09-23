import { createMapper, Module } from 'vuex-smart-module'

import actions from './actions'
import mutations from './mutations'
import state from './state'

export const menu = new Module({
  state,
  actions,
  mutations
})

export const menuMapper = createMapper(menu)
