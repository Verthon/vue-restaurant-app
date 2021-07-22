import { Booking } from '@/services/BookingService.types'

export type BookingState = {
  currentBooking: Booking;
  bookings: Booking[];
}

export const state: BookingState = {
  currentBooking: {
    name: '',
    email: '',
    date: '',
    guests: 1,
    confirmed: false,
    createdAt: ''
  },
  bookings: []
}
