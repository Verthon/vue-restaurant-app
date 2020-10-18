import AuthService from '@/services/AuthService'
import { Credentials } from '@/services/AuthService.types'

export const namespaced = true

export const state: any = {}

export const mutations = {
  LOGIN (state: any, payload: any) {
    state = payload
  },
  LOGOUT (state: any, payload: any) {
    state = payload
  }
}

export const actions = {
  async doLogin ({ commit }, credentials: Credentials) {
    const response = await AuthService.doLogin(credentials.email, credentials.password)
    if (response) {
      commit('LOGIN', response)
    }
  },
  async doLogout ({ commit }) {
    const response = await AuthService.doLogout()
    commit('LOGOUT', response)
  }
}
