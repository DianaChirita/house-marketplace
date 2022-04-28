// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpLl6H5_U68yzZ3STrmkQWKZKhtDYKDGw",
  authDomain: "house-marketplace-app-c5136.firebaseapp.com",
  projectId: "house-marketplace-app-c5136",
  storageBucket: "house-marketplace-app-c5136.appspot.com",
  messagingSenderId: "84722922224",
  appId: "1:84722922224:web:4f5d1ba8f5d66e3a5e4835"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()