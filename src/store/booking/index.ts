import actions from './actions'
import mutations from './mutations'
import { Booking } from '@/services/BookingService.types'

type BookingState = {
  currentBooking: Booking;
  bookings: Booking[];
}

const state: BookingState = {
  currentBooking: {
    name: '',
    email: '',
    date: '',
    guests: 1,
    confirmed: false,
    createdAt: ''
  },
  bookings: []
}

export default {
  state,
  actions,
  mutations
}
