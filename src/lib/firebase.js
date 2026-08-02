import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB6Wrvxbtm0FYAkWd4-jw6TlGAsCAhJYm0',
  authDomain: 'firestore-72e4c.firebaseapp.com',
  projectId: 'firestore-72e4c',
  storageBucket: 'firestore-72e4c.appspot.com',
  messagingSenderId: '326075174803',
  appId: '1:326075174803:web:ef2e916a87590535f0a266',
  measurementId: 'G-JFVNJ3KWB0'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)

export { app, auth, firestore }
