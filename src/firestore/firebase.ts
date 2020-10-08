import firebase from 'firebase/app'
import 'firebase/firestore'


let config = null

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  config = {
    apiKey: process.env.VUE_APP_DEV_FIRESTORE_API_KEY,
    authDomain: process.env.VUE_APP_DEV_FIRESTORE_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_DEV_FIRESTORE_PROJECT_ID,
    databaseURL: process.env.VUE_APP_DEV_FIRESTORE_DATABASE_URL,
    appId: process.env.VUE_APP_DEV_FIRESTORE_APP_ID
  }
} else {
  config = {
    apiKey: process.env.VUE_APP_FIRESTORE_API_KEY,
    authDomain: process.env.VUE_APP_FIRESTORE_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_FIRESTORE_PROJECT_ID,
    databaseURL: process.env.VUE_APP_FIRESTORE_DATABASE_URL,
    appId: process.env.VUE_APP_FIRESTORE_APP_ID
  }
}

// Get a Firestore instance
export const db = firebase
  .initializeApp(config)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })
