import { Booking } from '@/services/BookingService.types'
import { MenuData } from '@/services/MenuSevice.types'

export const state: State = {
  menu: [],
  booking: {
    name: '',
    email: '',
    date: '',
    guests: 0,
    confirmed: false,
    createdAt: ''
  }
}

export type State = {
  menu: MenuData[];
  booking: Booking;
}
