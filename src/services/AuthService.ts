import { firebase } from '@/firestore/firebase'

import { Credentials } from './AuthService.types'

export default {
  async doLogin (email: Credentials['email'], password: Credentials['password']) {
    return await firebase.auth().signInWithEmailAndPassword(email, password)
  },
  async doLogout () {
    return await firebase.auth().signOut()
  }
}
