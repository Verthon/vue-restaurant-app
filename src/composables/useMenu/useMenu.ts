// @ts-nocheck
import { ref } from '@vue/composition-api'

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
  const fetchMenu = () => {
    return MenuService.fetchMenu()
  }
  const menu = ref(fetchMenu())
  const appetizers = ref(menu.value.filter(item => item.category_id === CATEGORIES.appetizers))
  const desserts = menu.value.filter(item => item.category_id === CATEGORIES.desserts)
  const mains = menu.value.filter(item => item.category_id === CATEGORIES.mains)
  const salads = menu.value.filter(item => item.category_id === CATEGORIES.salads)
  const drinks = menu.value.filter(item => item.category_id === CATEGORIES.drinks)
  console.log(menu.value, appetizers)
  return {
    appetizers,
    desserts,
    mains,
    salads,
    drinks
  }
}
