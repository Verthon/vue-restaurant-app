import db from '@/firestore/firebase'
import { Booking } from './BookingService.types'

export default {
  async addBooking (booking: Booking) {
    return await db.collection('bookings').add(booking)
  }
}
