import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXTJS_FIREBASE_APIKEY,
  authDomain: process.env.NEXTJS_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXTJS_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXTJS_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXTJS_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXTJS_FIREBASE_APPID,
};

export const fetchFirebaseData = async () => {

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  try {
    const querySnapshot = await getDocs(collection(db, "destinatario"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,...doc.data(),
    }));
    console.log("Datos recibidos de Firebase:", data);
    return data;
    
  } catch (error) {
    console.error("Error al recibir datos de Firebase:", error);
  }
};