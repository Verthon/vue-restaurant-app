import { Actions, Getters } from 'vuex-smart-module'

import MenuService from '@/services/MenuService'
import { getData } from '@/utils/firestore'

import State from './state'
import BookingMutations from './mutations'

export default class MenuActions extends Actions<
  State,
  Getters<State>,
  BookingMutations,
  MenuActions
> {
  async getMenu () {
    try {
      const response = await MenuService.getMenu()
      const data = getData(response)
      this.commit('setMenu', data as any)
    } catch (error) {
      console.error('error', error)
    }
  }
}
