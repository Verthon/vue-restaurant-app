import { Mutations } from 'vuex-smart-module'

import BookingState, { BookingStatus } from './state'
import { Booking } from '@/services/BookingService.types'

export default class BookingMutations extends Mutations<BookingState> {
  addBooking (booking: Booking) {
    this.state.currentBooking = booking
  }

  changeBookingStatus (status: BookingStatus) {
    this.state.status = status
  }

  editBooking (booking: Booking) {
    this.state.currentBooking = booking
  }
}
