import { ActionTree } from 'vuex'
import { Actions, Getters } from 'vuex-smart-module'

import BookingService from '@/services/BookingService'
import { Booking } from '@/services/BookingService.types'

import State from './state'
import BookingMutations from './mutations'

export default class BookingActions extends Actions<
  State,
  Getters<State>,
  BookingMutations,
  BookingActions
> {
  async addBooking (booking: Booking) {
    try {
      await BookingService.addBooking(booking)
      this.commit('addBooking', booking)
    } catch (error) {
      console.log('error', error)
    }
  }
}
