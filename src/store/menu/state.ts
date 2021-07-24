import { MenuData } from '@/services/MenuSevice.types'

export type MenuState = { menu: MenuData[] }

export const state: MenuState = {
  menu: []
}
