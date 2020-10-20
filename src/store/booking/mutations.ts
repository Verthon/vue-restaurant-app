import * as types from '@/types/store'

import { Booking } from '@/services/BookingService.types'

type BookingState = {
  currentBooking: Booking;
  bookings: Booking[];
}

export default {
  [types.MUTATION_BOOKING_ADD] (state: BookingState, booking: Booking) {
    state.currentBooking = booking
  },
  [types.MUTATION_BOOKING_EDIT] (state: BookingState, booking: Booking) {
    state.currentBooking = booking
  }
}
