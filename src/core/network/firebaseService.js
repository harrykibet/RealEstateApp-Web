// src/core/network/firebaseService.js

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6Wrvxbtm0FYAkWd4-jw6TlGAsCAhJYm0",
  authDomain: "firestore-72e4c.firebaseapp.com",
  projectId: "firestore-72e4c",
  storageBucket: "firestore-72e4c.appspot.com",
  messagingSenderId: "326075174803",
  appId: "1:326075174803:web:ef2e916a87590535f0a266",
  measurementId: "G-JFVNJ3KWB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

/**
 * Firebase Auth Service
 */
const login = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

const register = async (email, password) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error registering:", error);
    throw error;
  }
};

/**
 * Firebase Firestore Service
 */
const getUserProfile = async (userId) => {
  try {
    const userDoc = await firestore.collection('users').doc(userId).get();
    if (userDoc.exists) {
      return userDoc.data();
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export default {
  login,
  register,
  getUserProfile
};

