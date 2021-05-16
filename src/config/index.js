import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyDBpdrN6EiKIKhgyzA68sMntAA_9epkNqw',
  authDomain: 'budget-tracker-5253f.firebaseapp.com',
  projectId: 'budget-tracker-5253f',
  storageBucket: 'budget-tracker-5253f.appspot.com',
  messagingSenderId: '264514099559',
  appId: '1:264514099559:web:8c8ae209e4768ebcbc77c2',
  measurementId: 'G-5293S9DJZN',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
