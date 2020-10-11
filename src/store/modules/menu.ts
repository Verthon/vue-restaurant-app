import { MenuData } from '@/services/MenuSevice.types'
import { State } from '../state'
import MenuService from '@/services/MenuService'
import { getData } from '@/utils/firestore'

export const namespaced = true

export const state: { menu: MenuData[] } = {
  menu: []
}

export const mutations = {
  SET_MENU (state: State, menu: MenuData[]) {
    state.menu = menu
  }
}

export const actions = {
  async fetchMenu ({ commit }) {
    const response = await MenuService.getMenu()
    const data = getData(response)
    commit('SET_MENU', data)
  }
}
