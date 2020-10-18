import AuthService from '@/services/AuthService'
import { Credentials } from '@/services/AuthService.types'

export const namespaced = true

export const state: any = {
  isAuthorized: false,
  isAuthorizing: false,
  user: null
}

export const mutations = {
  START_AUTHORIZING (state: any) {
    state.isAuthorizing = true
  },
  LOGIN (state: any, payload: any) {
    state.isAuthorizing = false
    state.isAuthorized = true
  },
  LOGOUT (state: any) {
    state.isAuthorizing = false
    state.isAuthorized = false
  }
}

export const actions = {
  async doLogin ({ commit }, credentials: Credentials) {
    commit('START_AUTHORIZING')
    const response = await AuthService.doLogin(credentials.email, credentials.password)
    if (response) {
      commit('LOGIN', response)
    }
  },
  async doLogout ({ commit }) {
    commit('START_AUTHORIZING')
    const response = await AuthService.doLogout()
    commit('LOGOUT', response)
  }
}
