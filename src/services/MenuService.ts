import { db } from '@/firestore/firebase'

export default {
  getMenu() {
    return db.collection('menu')
  }
}