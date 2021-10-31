import { Booking } from '@/services/BookingService.types'

export type BookingStatus = 'idle' | 'loading' | 'error' | 'success'

export default class State {
  currentBooking = {
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
