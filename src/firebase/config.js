import firebase from 'firebase/app'
import 'firebase/firestore'
import { Firestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAL07VgBvQFLs6pKlkl98gCQIr9D2VaM_k",
    authDomain: "zeek-cooking-site.firebaseapp.com",
    projectId: "zeek-cooking-site",
    storageBucket: "zeek-cooking-site.appspot.com",
    messagingSenderId: "9122917934",
    appId: "1:9122917934:web:b7641ba91f11966809b9bf"
  };

  // initialize firebase 

  firebase.initializeApp(firebaseConfig)

  // initialize services 

 const projectFirestore =  firebase.firestore()

 export { projectFirestore }