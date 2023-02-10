import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA6mw_Ksi0TKVJNj1kxTx5ytv60JeDmELg",
  authDomain: "education-47bf5.firebaseapp.com",
  projectId: "education-47bf5",
  storageBucket: "education-47bf5.appspot.com",
  messagingSenderId: "314988730693",
  appId: "1:314988730693:web:e8feb243b361370449862c",
  measurementId: "G-2CD21NY8KL"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;