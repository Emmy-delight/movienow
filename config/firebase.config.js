// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import  {getStorage}  from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "movienow-560ba.firebaseapp.com",
  projectId: "movienow-560ba",
  storageBucket: "movienow-560ba.firebasestorage.app",
  messagingSenderId: "890778636293",
  appId: "1:890778636293:web:07b6fc615ee1fe40d40c6c"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig):getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage};






