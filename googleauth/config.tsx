// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcUzRwAItMTdbXrmKVSWNZBHwJtXxlzW0",
  authDomain: "clone-c08f0.firebaseapp.com",
  projectId: "clone-c08f0",
  storageBucket: "clone-c08f0.appspot.com",
  messagingSenderId: "33416440649",
  appId: "1:33416440649:web:994cb31f8e4186c1494898",
  measurementId: "G-B645FVQDNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const Provider = new GoogleAuthProvider();
export {auth ,Provider};