import MenuService from '@/services/MenuService'

export const actions = {
  async fetchMenu ({ commit }) {
    const response = await MenuService.getMenu()
    commit('SET_MENU', response)
    console.log(response)
  }
}
