import { ActionTree } from 'vuex'

import MenuService from '@/services/MenuService'
import { getData } from '@/utils/firestore'
import * as types from '@/types/store'

import { MenuState } from './state'
import { RootState } from '../types'

const actions: ActionTree<MenuState, RootState> = {
  [types.ACTION_MENU_SET]: async function ({ commit }: {commit: Function}) {
    try {
      const response = await MenuService.getMenu()
      const data = getData(response)
      commit(types.MUTATION_MENU_SET, data)
    } catch (error) {
      console.error('error', error)
    }
  }
}

export default actions
