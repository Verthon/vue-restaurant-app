import { AuthState } from './auth/state'
import { MenuState } from './menu/state'

export type RootState = {
  menu: MenuState;
  auth: AuthState;
}
