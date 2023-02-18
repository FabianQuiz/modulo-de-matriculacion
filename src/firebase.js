import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzFUu3x3WirDhJkhY3N2iH0-6-WUQwNHc",
  authDomain: "matriculacion-3e613.firebaseapp.com",
  projectId: "matriculacion-3e613",
  storageBucket: "matriculacion-3e613.appspot.com",
  messagingSenderId: "191080771858",
  appId: "1:191080771858:web:917e7d786f3cacdb4243cb",
  measurementId: "G-VNPSX8YFLE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const db = getFirestore();
