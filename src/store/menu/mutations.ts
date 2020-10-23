import * as types from '@/types/store'
import { MenuState } from '.'
import { MenuData } from '@/services/MenuSevice.types'

export default {
  [types.MUTATION_MENU_SET] (state: MenuState, menu: MenuData[]) {
    state.menu = menu
  }
}
