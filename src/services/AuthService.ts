
import { Credentials } from './AuthService.types'
import firebase from 'firebase'

export default {
  async doLogin (email: Credentials['email'], password: Credentials['password']) {
    console.log('email and pass', email, password)
    return await firebase.auth().signInWithEmailAndPassword(email, password)
  },
  async doLogout () {
    return await firebase.auth().signOut()
  }
}
