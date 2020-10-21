import * as types from '@/types/store'
import AuthService from '@/services/AuthService'
import { Credentials } from '@/services/AuthService.types'

export default {
  [types.ACTION_AUTH_START_AUTHORIZING]: function ({ commit }: {commit: Function}) {
    commit(types.MUTATION_AUTH_START_AUTHORIZING)
  },
  [types.ACTION_AUTH_LOGIN]: async function ({ commit }: {commit: Function}, credentials: Credentials) {
    commit(types.MUTATION_AUTH_START_AUTHORIZING)
    try {
      const response = await AuthService.doLogin(credentials.email, credentials.password)
      if (response) {
        commit(types.MUTATION_AUTH_LOGIN, response)
      }
    } catch (error) {
      console.error('Login error', error)
    }
  },
  [types.ACTION_AUTH_SET_USER]: function ({ commit }: {commit: Function}, user: firebase.User) {
    commit(types.MUTATION_AUTH_START_AUTHORIZING)
    commit(types.MUTATION_AUTH_SET_USER, user)
  },
  [types.ACTION_AUTH_LOGOUT]: async function ({ commit }: {commit: Function}) {
    commit(types.MUTATION_AUTH_START_AUTHORIZING)
    const response = await AuthService.doLogout()
    commit(types.MUTATION_AUTH_LOGOUT, response)
  }

}
