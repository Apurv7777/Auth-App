// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-3ad5a.firebaseapp.com",
  projectId: "mern-auth-3ad5a",
  storageBucket: "mern-auth-3ad5a.appspot.com",
  messagingSenderId: "865921768283",
  appId: "1:865921768283:web:1c91507bd597029c17187e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);