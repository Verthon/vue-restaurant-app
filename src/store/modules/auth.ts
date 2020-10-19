import AuthService from '@/services/AuthService'
import { Credentials } from '@/services/AuthService.types'

const setUser = (user: firebase.User) => ({
  email: user.email,
  name: user.displayName,
  photoUrl: user.photoURL,
  metadata: user.metadata
})

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
  LOGIN (state: any, payload: firebase.auth.UserCredential) {
    const user = setUser(payload.user!)
    state.isAuthorizing = false
    state.isAuthorized = true
    state.user = user
  },
  SET_USER (state: any, payload: firebase.User) {
    const user = setUser(payload)
    state.isAuthorizing = false
    state.isAuthorized = true
    state.user = user
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
  },
  setUser ({ commit }, user: firebase.User) {
    commit('START_AUTHORIZING')
    commit('SET_USER', user)
  }
}
