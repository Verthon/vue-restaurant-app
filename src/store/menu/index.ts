import actions from './actions'
import mutations from './mutations'
import { MenuData } from '@/services/MenuSevice.types'

export type MenuState = { menu: MenuData[] }

const state: MenuState = {
  menu: []
}

export default {
  state,
  actions,
  mutations
}
