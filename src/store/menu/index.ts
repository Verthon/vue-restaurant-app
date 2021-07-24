import { Module } from 'vuex'

import { RootState } from '../types'
import actions from './actions'
import mutations from './mutations'
import { MenuState, state } from './state'

export const menu: Module<MenuState, RootState> = {
  state,
  actions,
  mutations
}

export default menu
