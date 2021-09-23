import { MenuData } from '@/services/MenuSevice.types'

export type MenuState = { menu: MenuData[] }

export default class State {
  menu: MenuData[] = []
}
