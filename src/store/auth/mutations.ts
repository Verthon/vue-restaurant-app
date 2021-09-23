const setUser = (user: firebase.User) => ({
  email: user.email,
  name: user.displayName,
  photoUrl: user.photoURL,
  metadata: user.metadata
})

import { Mutations } from 'vuex-smart-module'

import AuthState from "./state";

export default class AuthMutations extends Mutations<AuthState> {
  startAuthorizing() {
    this.state.isAuthorizing = true
  }
  login(payload: firebase.auth.UserCredential) {
    if (payload.user) {
      const user = setUser(payload.user)
      this.state.isAuthorizing = false
      this.state.isAuthorized = true
      this.state.user = user
    }
  }
  logout() {
    this.state.isAuthorizing = false
    this.state.isAuthorized = false
  }
}

