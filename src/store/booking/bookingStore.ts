import { defineStore } from 'pinia'

import type { BookingStoreState } from './bookingStore.types'
import BookingService from '@/services/BookingService'
import type { Booking } from '@/services/BookingService.types'

export const useBookingStore = defineStore('authStore', {
  state: (): BookingStoreState => {
    return {
      status: 'idle',
      currentBooking: {
        name: '',
        email: '',
        date: '',
        guests: 1,
        confirmed: false,
        createdAt: ''
      },
      bookingsList: null
    }
  },
  getters: {
    isLoading (state) {
      return state.status === 'loading'
    },
    isError (state) {
      return state.status === 'error'
    }
  },
  actions: {
    async createBooking (booking: Booking) {
      try {
        this.status = 'loading'
        await BookingService.addBooking(booking)
        this.status = 'complete'
      } catch (error) {
        this.status = 'error'
      }
    }
  }
})
