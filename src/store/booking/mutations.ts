import { MutationTree } from 'vuex'

import { Booking } from '@/services/BookingService.types'

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
  }
}

export default mutations
