import { Booking } from '@/services/BookingService.types'

export default class State {
  currentBooking: Booking = {
    name: '',
    email: '',
    date: '',
    guests: 1,
    confirmed: false,
    createdAt: ''
  };

  bookings: Booking[] = []
}
