// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAfPqVLAJe-LCjUKpFHxoSzr9kIpTm7hQ",
  authDomain: "realestate-clone-5c006.firebaseapp.com",
  projectId: "realestate-clone-5c006",
  storageBucket: "realestate-clone-5c006.firebasestorage.app",
  messagingSenderId: "533041827343",
  appId: "1:533041827343:web:64ede998f935494ab4dd7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
 const db = getFirestore(app);
 export {db};