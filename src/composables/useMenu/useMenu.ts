import { reactive } from '@vue/composition-api'
import { useQuery } from 'vue-query'

import type { Menu } from '@/services/MenuSevice.types'
import MenuService from '@/services/MenuService'

const CATEGORIES = {
  appetizers: 2,
  desserts: 3,
  mains: 4,
  salads: 5,
  drinks: 6
}

export const useMenu = () => {
  const { isLoading, isError, data } = useQuery('menu', MenuService.fetchMenu)
  let appetizers = reactive<Menu[]>([])
  let desserts = reactive<Menu[]>([])
  let mains = reactive<Menu[]>([])
  let salads = reactive<Menu[]>([])
  let drinks = reactive<Menu[]>([])
  console.log('data', data, data.value)

  if (data && data.value) {
    console.log('if')
    appetizers = data.value.filter(item => item.category_id === CATEGORIES.appetizers)
    desserts = data.value.filter(item => item.category_id === CATEGORIES.desserts)
    mains = data.value.filter(item => item.category_id === CATEGORIES.mains)
    salads = data.value.filter(item => item.category_id === CATEGORIES.salads)
    drinks = data.value.filter(item => item.category_id === CATEGORIES.drinks)
  }

  return {
    isLoading,
    isError,
    appetizers,
    desserts,
    mains,
    salads,
    drinks
  }
}
