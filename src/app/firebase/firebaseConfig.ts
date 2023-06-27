import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXTJS_FIREBASE_APIKEY,
  authDomain: process.env.NEXTJS_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXTJS_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXTJS_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXTJS_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXTJS_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;