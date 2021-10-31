import { Mutations } from 'vuex-smart-module'

import AuthState from './state'

const setUser = (user: any) => ({
  email: user.email,
  name: user.displayName,
  photoUrl: user.photoURL,
  metadata: user.metadata
})

export default class AuthMutations extends Mutations<AuthState> {
  startAuthorizing () {
    this.state.isAuthorizing = true
  }

  login (payload: any) {
    if (payload.user) {
      const user = setUser(payload.user)
      this.state.isAuthorizing = false
      this.state.isAuthorized = true
      this.state.user = user
    }
  }

  logout () {
    this.state.isAuthorizing = false
    this.state.isAuthorized = false
  }

  restoreUser (payload: any | null) {
    if (payload && payload) {
      const user = setUser(payload)
      this.state.isAuthorizing = false
      this.state.isAuthorized = true
      this.state.user = user
    } else {
      this.state.user = null
    }
  }
}
