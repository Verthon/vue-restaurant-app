import { MenuData } from '@/services/MenuSevice.types'
import { FetchStatus } from '@/types/api'

export default class MenuState {
  menu: MenuData[] = []
  status: FetchStatus = 'idle'
}
