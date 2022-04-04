//import firebase from 'firebase/app'
//import 'firebase/auth'
import firebase from "firebase/compat/app";
//import "firebase/auth";
import "firebase/compat/auth";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
//import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgucIdK-eJqN5aYHoIxdDbo4QXZOiJ6w8",
  authDomain: "react-firebase-registration.firebaseapp.com",
  projectId: "react-firebase-registration",
  storageBucket: "react-firebase-registration.appspot.com",
  messagingSenderId: "559380704956",
  appId: "1:559380704956:web:2f553e4994ffa505c4eab9",
};

firebase.initializeApp(firebaseConfig);

const app = firebase.auth();
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
//const googleAuthProvider = new app.auth.googleAuthProvider();
//const facebookAuthProvider = new app.auth.FacebookAuthProvider();

export { app, googleAuthProvider, facebookAuthProvider };
