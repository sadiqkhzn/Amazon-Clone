import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQRNwuuZdj6GfesiBULu_PWW_i9Yhx8sI",
  authDomain: "clone-c6b20.firebaseapp.com",
  databaseURL: "https://clone-c6b20-default-rtdb.firebaseio.com",
  projectId: "clone-c6b20",
  storageBucket: "clone-c6b20.appspot.com",
  messagingSenderId: "945183442520",
  appId: "1:945183442520:web:39c0a135066ebe3261ac2d",
  measurementId: "G-RM97X8FJEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const db = getFirestore(app);


export { auth, db }
