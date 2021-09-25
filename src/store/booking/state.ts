import { Booking } from '@/services/BookingService.types'

export type BookingStatus = 'idle' | 'loading' | 'error' | 'success'

export default class State {
  currentBooking: Booking = {
    name: '',
    email: '',
    date: '',
    guests: 1,
    confirmed: false,
    createdAt: ''
  };

  status: BookingStatus = 'idle';
  bookings: Booking[] = []
}
