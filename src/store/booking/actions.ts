import BookingService from '@/services/BookingService'
import { Booking } from '@/services/BookingService.types'
import * as types from '@/types/store'

export default {
  [types.ACTION_BOOKING_SAVE_TO_DB]: async function ({ commit }: {commit: Function}, booking: Booking) {
    try {
      const response = await BookingService.addBooking(booking)
      if (response) {
        commit(types.MUTATION_BOOKING_SAVE_TO_DB, booking)
      }
    } catch (error) {
      console.error('error', error)
    }
  },
  [types.ACTION_BOOKING_ADD]: function ({ commit }: {commit: Function}, booking: Booking) {
    commit(types.MUTATION_BOOKING_ADD, booking)
  }
}
