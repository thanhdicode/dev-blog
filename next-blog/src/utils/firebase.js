// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-bfd97.firebaseapp.com",
  projectId: "blog-bfd97",
  storageBucket: "blog-bfd97.appspot.com",
  messagingSenderId: "90653121357",
  appId: "1:90653121357:web:ba62dde5bff03facbdb504",
  measurementId: "G-P7V9VK2LZ4"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);