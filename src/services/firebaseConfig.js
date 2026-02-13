import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA61dUFWDKRr3spzaHPtqoR0b5lHvs0_Ng",
  authDomain: "jironay.firebaseapp.com",
  projectId: "jironay",
  storageBucket: "jironay.firebasestorage.app",
  messagingSenderId: "1040284280830",
  appId: "1:1040284280830:web:3b79158d257781392f02af"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
