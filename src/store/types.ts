import { AuthState } from './auth/state'
import { BookingState } from './booking/state'
import { CompanyState } from './company/state'
import { MenuState } from './menu/state'

export type RootState = {
  booking: BookingState;
  menu: MenuState;
  company: CompanyState;
  auth: AuthState;
}
