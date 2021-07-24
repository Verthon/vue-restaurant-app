import { MutationTree } from 'vuex'

import * as types from '@/types/store'
import { MenuData } from '@/services/MenuSevice.types'
import { MenuState } from './state'

const mutations: MutationTree<MenuState> = {
  [types.MUTATION_MENU_SET] (state: MenuState, menu: MenuData[]) {
    state.menu = menu
  }
}

export default mutations
