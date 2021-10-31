import { Actions, Getters } from 'vuex-smart-module'

import BookingService from '@/services/BookingService'
import { Booking } from '@/services/BookingService.types'

<<<<<<< HEAD
import { RootState } from '../types'
import { BookingState } from './state'
import { BookingMutation } from './mutations'
=======
import State from './state'
import BookingMutations from './mutations'
>>>>>>> master

export default class BookingActions extends Actions<
  State,
  Getters<State>,
  BookingMutations,
  BookingActions
> {
  async addBooking (booking: Booking) {
    try {
<<<<<<< HEAD
      const response = await BookingService.addBooking(booking)
      console.log(response)
      if (response) {
        commit(BookingMutation.BOOKING_SAVE_TO_DB, booking)
      }
=======
      this.commit('changeBookingStatus', 'loading')
      await BookingService.addBooking(booking)
      this.commit('addBooking', booking)
      this.commit('changeBookingStatus', 'success')
>>>>>>> master
    } catch (error) {
      console.log('error', error)
      this.commit('changeBookingStatus', 'error')
    }
<<<<<<< HEAD
  },
  [types.ACTION_BOOKING_ADD]: function ({ commit }: {commit: Function}, booking: Booking) {
    commit(BookingMutation.BOOKING_ADD, booking)
=======
>>>>>>> master
  }
}
