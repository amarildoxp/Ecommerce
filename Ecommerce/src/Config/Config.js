import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCNluTD9INQG_wLFNGJCTeYCUnVVnc8qH0",
  authDomain: "ecommerce-a01e4.firebaseapp.com",
  projectId: "ecommerce-a01e4",
  storageBucket: "ecommerce-a01e4.appspot.com",
  messagingSenderId: "461136564589",
  appId: "1:461136564589:web:5b1fdbbc2830ca89f7ca64",
  measurementId: "G-WW7RJ0HKTN"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }