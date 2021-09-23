import { Actions, Getters } from 'vuex-smart-module'

import AuthService from '@/services/AuthService'
import { Credentials } from '@/services/AuthService.types'

import State from './state'
import BookingMutations from './mutations'

export default class AuthActions extends Actions<
  State,
  Getters<State>,
  BookingMutations,
  AuthActions
> {
  async login(credentials: Credentials) {
    try {
      this.commit("startAuthorizing")
      const response = await AuthService.doLogin(credentials.email, credentials.password)
      if (response) {
        this.commit("login", response)
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  async logout() {
    this.commit("startAuthorizing")
    const response = await AuthService.doLogout()
    this.commit("logout", response)
  }
}
