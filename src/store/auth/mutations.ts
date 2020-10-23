import * as types from '@/types/store'
import { AuthState } from '.'

const setUser = (user: firebase.User) => ({
  email: user.email,
  name: user.displayName,
  photoUrl: user.photoURL,
  metadata: user.metadata
})

export default {
  [types.MUTATION_AUTH_START_AUTHORIZING] (state: AuthState) {
    state.isAuthorizing = true
  },
  [types.MUTATION_AUTH_LOGIN] (state: AuthState, payload: firebase.auth.UserCredential) {
    if (payload.user) {
      const user = setUser(payload.user)
      state.isAuthorizing = false
      state.isAuthorized = true
      state.user = user
    }
  },
  [types.MUTATION_AUTH_SET_USER] (state: AuthState, payload: firebase.User) {
    const user = setUser(payload)
    state.isAuthorizing = false
    state.isAuthorized = true
    state.user = user
  },
  [types.MUTATION_AUTH_LOGOUT] (state: AuthState) {
    state.isAuthorizing = false
    state.isAuthorized = false
  }
}
