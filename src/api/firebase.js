// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { } from 'firebase/auth';
import { getFirestore } from "firebase";
import firestore from "@react-native-firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP35bgbZlmcpaTAGYW5sTmHRVw8JPQ-f0",
  authDomain: "matchpoint-5fb9c.firebaseapp.com",
  projectId: "matchpoint-5fb9c",
  storageBucket: "matchpoint-5fb9c.appspot.com",
  messagingSenderId: "66342459742",
  appId: "1:66342459742:web:53c05c046fcb50ad12d7cf"
};

let app;
// Initialize Firebase
if (firebase.apps.length === 0)
{
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}


const auth = firebase.auth();
const firestore1 = firebase.firestore();   

// const db = firestore.authDomain();

console.log(auth, firestore1);


export { auth, firestore1 }