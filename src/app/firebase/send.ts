import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXTJS_FIREBASE_APIKEY,
  authDomain: process.env.NEXTJS_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXTJS_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXTJS_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXTJS_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXTJS_FIREBASE_APPID,
};

export const sendDataToFirebase = async (
    firstname: string, 
    lastname: string, 
    mail: string, 
    phone: string) => {
        
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const dataToAdd = {
    apellido: lastname,
    email: mail,
    nombre: firstname,
    telefono: phone,
  };

  try {
    const docRef = await addDoc(collection(db, "destinatario"), dataToAdd);
    console.log("Destinatario agregado con ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error al agregar el destinatario a Firebase:", error);
  }
};
