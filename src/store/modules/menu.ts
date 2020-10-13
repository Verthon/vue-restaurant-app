import { MenuData } from '@/services/MenuSevice.types'
import MenuService from '@/services/MenuService'
import { getData } from '@/utils/firestore'

export const namespaced = true

type MenuState = { menu: MenuData[] }

export const state: MenuState = {
  menu: []
}

export const mutations = {
  SET_MENU (state: MenuState, menu: MenuData[]) {
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
