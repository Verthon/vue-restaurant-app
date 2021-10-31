<<<<<<< HEAD
import { MutationTree } from 'vuex'
=======
import { Mutations } from 'vuex-smart-module'
>>>>>>> master

import BookingState, { BookingStatus } from './state'
import { Booking } from '@/services/BookingService.types'

<<<<<<< HEAD
import { BookingState } from './state'

export enum BookingMutation {
  BOOKING_ADD = 'BOOKING_ADD',
  BOOKING_EDIT = 'BOOKING_EDIT',
  BOOKING_SAVE_TO_DB = 'BOOKING_SAVE_TO_DB'
}

const mutations: MutationTree<BookingState> = {
  [BookingMutation.BOOKING_ADD] (state: BookingState, booking: Booking) {
    state.currentBooking = booking
  },
  [BookingMutation.BOOKING_EDIT] (state: BookingState, booking: Booking) {
    state.currentBooking = booking
=======
export default class BookingMutations extends Mutations<BookingState> {
  addBooking (booking: Booking) {
    this.state.currentBooking = booking
  }

  changeBookingStatus (status: BookingStatus) {
    this.state.status = status
  }

  editBooking (booking: Booking) {
    this.state.currentBooking = booking
>>>>>>> master
  }
}

export default mutations
