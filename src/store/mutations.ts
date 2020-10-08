import { Booking } from '@/services/BookingService.types'
import { MenuData } from '@/services/MenuSevice.types'
import { State } from './state'

export const mutations = {
  SET_MENU (state: State, menu: MenuData[]) {
    state.menu = menu
  },
  ADD_BOOKING (state: State, booking: Booking) {
    state.booking = booking
  }
}
