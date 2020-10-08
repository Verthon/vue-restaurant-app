import { db } from '@/firestore/firebase'

export default {
  async getMenu () {
    return db.collection('menu').get()
  }
}
