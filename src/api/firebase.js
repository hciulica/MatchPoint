// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// import { } from 'firebase/auth';
// import { getFirestore } from "firebase";
// import firestore from "@react-native-firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFHnauA4XehIUs4Cr_SehGwAmiaf5-m6Y",
  authDomain: "matchpoint-dcedb.firebaseapp.com",
  projectId: "matchpoint-dcedb",
  storageBucket: "matchpoint-dcedb.appspot.com",
  messagingSenderId: "818902020884",
  appId: "1:818902020884:web:1d6750e576f22a8cf9c801",
  measurementId: "G-04E38MLQBK"
};

//Initialize firebase

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);

// let app;
// // Initialize Firebase
// if (firebase.apps.length === 0)
// {
//     app = firebase.initializeApp(firebaseConfig);
// } else {
//     app = firebase.app();
// }


// const auth = firebase.auth();
// const firestore1 = firebase.firestore();   
// const db1 = firebase.database();
// // const db = firestore.authDomain();

// console.log(auth, firestore1);


// export { auth, firestore1, db1 }