export const getData = (snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}
