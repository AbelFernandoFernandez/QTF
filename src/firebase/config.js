import { initializeApp } from "firebase/app";
import{getFirestore}from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyApTO72sOKpgoh1zHsvJRHughRng9OlC1o",
  authDomain: "baseaff-8d2a8.firebaseapp.com",
  projectId: "baseaff-8d2a8",
  storageBucket: "baseaff-8d2a8.appspot.com",
  messagingSenderId: "424743939988",
  appId: "1:424743939988:web:7182ae187d69698e93e981"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)