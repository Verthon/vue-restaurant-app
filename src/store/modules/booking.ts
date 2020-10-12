import { Booking } from '@/services/BookingService.types'
import BookingService from '@/services/BookingService'

export const namespaced = true

type BookingState = {
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

export const mutations = {
  ADD_BOOKING (state: BookingState, booking: Booking) {
    state.currentBooking = booking
  },
  EDIT_BOOKING (state: BookingState, booking: Booking) {
    state.currentBooking = booking
  }
}

export const actions = {
  async addToDatabase ({ commit }, booking: Booking) {
    const response = await BookingService.addBooking(booking)
    if (response) {
      commit('ADD_BOOKING', booking)
    }
  },
  add ({ commit }, booking: Booking) {
    commit('ADD_BOOKING', booking)
  }
}
