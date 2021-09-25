import { Mutations } from 'vuex-smart-module'

import { MenuData } from '@/services/MenuSevice.types'
import { MenuState } from './state'

export default class MenuMutations extends Mutations<MenuState> {
  setMenu (menu: MenuData[]) {
    this.state.menu = menu
  }
}
