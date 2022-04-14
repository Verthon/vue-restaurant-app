import type { Booking } from '@/services/BookingService.types'
import type { ApiRequestStatus } from '@/types/api'

export type BookingStoreState = {
  status: ApiRequestStatus;
  currentBooking: Booking;
  bookingsList: Booking[] | null;
}
