import { supabase } from '@/lib/supabase'
import { definitions } from '@/types/supabase'
import { Booking } from './BookingService.types'

export default {
  async addBooking (booking: Booking) {
    return supabase.from<definitions['bookings']>('bookings').insert(booking)
  }
}
