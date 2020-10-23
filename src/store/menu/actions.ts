import MenuService from '@/services/MenuService'
import { getData } from '@/utils/firestore'
import * as types from '@/types/store'

export default {
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
