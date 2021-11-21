import { ref } from '@vue/composition-api'
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
  const appetizers = ref<Menu[]>([])
  const desserts = ref<Menu[]>([])
  const mains = ref<Menu[]>([])
  const salads = ref<Menu[]>([])
  const drinks = ref<Menu[]>([])
  console.log(data?.value?.length)

  if (data?.value?.length) {
    console.log('if reached', data, data.value)
    appetizers.value = data.value.filter(item => item.category_id === CATEGORIES.appetizers)
    desserts.value = data.value.filter(item => item.category_id === CATEGORIES.desserts)
    mains.value = data.value.filter(item => item.category_id === CATEGORIES.mains)
    salads.value = data.value.filter(item => item.category_id === CATEGORIES.salads)
    drinks.value = data.value.filter(item => item.category_id === CATEGORIES.drinks)
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
