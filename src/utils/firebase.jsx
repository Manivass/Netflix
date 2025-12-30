import {getAuth} from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD53qYgPP_YmgI0Kcc8GL3ZvJ82GhW-ySE",
  authDomain: "netflix-clone-507f2.firebaseapp.com",
  projectId: "netflix-clone-507f2",
  storageBucket: "netflix-clone-507f2.firebasestorage.app",
  messagingSenderId: "56165709300",
  appId: "1:56165709300:web:1f47d9a8cb652def6cb5a1",
  measurementId: "G-YL4E323SB2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth() ;