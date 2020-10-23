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

const handleError = (error: { code: string }) => {
  if (error.code === 'failed-precondition') {
    return {
      message: 'Error',
      description:
        'Multiple tabs open, persistence can only be enabled in one tab at a a time.'
    }
  } else if (error.code === 'unimplemented') {
    return {
      message: 'Error',
      description:
        'The current browser does not support all of the features required to enable persistence'
    }
  }
}

firebase.initializeApp(config)
firebase
  .firestore()
  .enablePersistence()
  .then(() => firebase.firestore())
  .catch((err) => {
    handleError(err)
    firebase.firestore()
  })
const db = firebase.firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

export { firebase }

export default db
