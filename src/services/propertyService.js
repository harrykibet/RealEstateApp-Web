import { collection, getDocs } from 'firebase/firestore'
import { firestore } from '@/lib/firebase'

export async function fetchProperties() {
  const collectionRef = collection(firestore, 'properties')
  const snapshot = await getDocs(collectionRef)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))
}
