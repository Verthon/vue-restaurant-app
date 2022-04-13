import { defineStore } from 'pinia'

import AuthService from '@/services/AuthService'
import type { Credentials } from '@/services/AuthService.types'
import type { AuthStoreState } from './authStore.types'

export const useAuthStore = defineStore('authStore', {
  state: (): AuthStoreState => {
    return {
      status: 'idle',
      user: null
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
    async login (credentials: Credentials) {
      try {
        this.status = 'loading'
        const response = await AuthService.doLogin(credentials.email, credentials.password)
        if (response.user) {
          this.user = response.user
        }
        this.status = 'complete'
      } catch (error) {
        this.status = 'error'
      }
    },
    async logout () {
      try {
        this.status = 'loading'
        await AuthService.doLogout()
        this.user = null
        this.status = 'complete'
      } catch (error) {
        this.status = 'error'
      }
    }
  }
})
