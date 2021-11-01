
import { Credentials } from './AuthService.types'

export default {
  doLogin (email: Credentials['email'], password: Credentials['password']) {
    return new Promise(() => 123)
  },
  doLogout () {
    return new Promise(() => null)
  }
}
