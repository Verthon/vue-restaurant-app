import { Mutations } from 'vuex-smart-module'

import BookingState from './state'
import { Booking } from '@/services/BookingService.types'

export default class BookingMutations extends Mutations<BookingState> {
  addBooking (booking: Booking) {
    this.state.currentBooking = booking
  }

  editBooking (booking: Booking) {
    this.state.currentBooking = booking
  }
}
