import { Booking } from '@/services/BookingService.types'
import { State } from '../state'

export const state: { currentBooking: Booking; bookings: Booking[] } = {
  currentBooking: {
    name: '',
    email: '',
    date: '',
    guests: 0,
    confirmed: false,
    createdAt: ''
  },
  bookings: []
}

export const mutations = {
  ADD_BOOKING (state: State, booking: Booking) {
    state.booking = booking
  },
  EDIT_BOOKING (state: State, booking: Booking) {
    state.booking = booking
  }
}
