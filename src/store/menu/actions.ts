import { Actions, Getters } from 'vuex-smart-module'

import MenuService from '@/services/MenuService'

import State from './state'
import MenuMutations from './mutations'

export default class MenuActions extends Actions<
  State,
  Getters<State>,
  MenuMutations,
  MenuActions
> {
  async getMenu () {
    try {
      this.commit('setMenuStatus', 'loading')
      const response = await MenuService.fetchMenu()
      this.commit('setMenu', response.data as any)
      this.commit('setMenuStatus', 'complete')
    } catch (error) {
      this.commit('setMenuStatus', 'error')
      console.error('error', error)
    }
  }
}
