import { ActionTree } from 'vuex'

import BookingService from '@/services/BookingService'
import { Booking } from '@/services/BookingService.types'
import * as types from '@/types/store'

import { RootState } from '../types'
import { BookingState } from './state'
import { BookingMutation } from './mutations'

export const actions: ActionTree<BookingState, RootState> = {
  [types.ACTION_BOOKING_SAVE_TO_DB]: async function ({ commit }: {commit: Function}, booking: Booking) {
    try {
      const response = await BookingService.addBooking(booking)
      console.log(response)
      if (response) {
        commit(BookingMutation.BOOKING_SAVE_TO_DB, booking)
      }
    } catch (error) {
      console.error('error', error)
    }
  },
  [types.ACTION_BOOKING_ADD]: function ({ commit }: {commit: Function}, booking: Booking) {
    commit(BookingMutation.BOOKING_ADD, booking)
  }
}

export default actions
