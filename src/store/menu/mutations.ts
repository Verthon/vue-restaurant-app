import { Mutations } from 'vuex-smart-module'

import { MenuData } from '@/services/MenuSevice.types'
import { FetchStatus } from '@/types/api'
import MenuState from './state'

export default class MenuMutations extends Mutations<MenuState> {
  setMenuStatus (status: FetchStatus) {
    this.state.status = status
  }

  setMenu (menu: MenuData[]) {
    this.state.menu = menu
  }
}
