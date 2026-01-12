import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'studio-7784532433-72b62',
  appId: '1:10796431370:web:0154d88984000d630287f3',
  apiKey: 'AIzaSyDZuQhZ6j7uZ7NotJVRkjlTXnSBkgBP7TU',
  authDomain: 'studio-7784532433-72b62.firebaseapp.com',
  measurementId: '',
  messagingSenderId: '10796431370',
  storageBucket: 'studio-7784532433-72b62.appspot.com'
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
