"use client"
import Footer from '../components/footer';
import React, { useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

interface TrackingData {
  origin: string;
  destine: string;
  description: string;
}

const firebaseConfig = {
  apiKey: "AIzaSyCo22Wqa2Yu4fxlWndeTCofJf9XKJFjXgg",
  authDomain: "encomiendas-prueba.firebaseapp.com",
  projectId: "encomiendas-prueba",
  storageBucket: "encomiendas-prueba.appspot.com",
  messagingSenderId: "694343250813",
  appId: "1:694343250813:web:98a9667c5390c437625214",
  measurementId: "G-9BGNDHRRBL"
};

const Home: React.FC = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [trackingCode, setTrackingCode] = useState<string>('');
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);

  const handleTrackButtonClick = async () => {
    const destinatarioRef = collection(db, 'destinatario');
    const q = query(destinatarioRef, where('code', '==', trackingCode));
    
    try {
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const data = doc.data() as TrackingData;
          setTrackingData(data);
        });
      } else {
        setTrackingData(null);
        console.log('No se encontraron resultados.');
      }
    } catch (error) {
      console.log('Error al obtener los datos:', error);
    }
  };

  return (
    <div className="bg-gray-300 text-black min-h-screen flex items-center justify-center">
    <div className="max-w-4xl mx-auto text-center">
      <div className="entrega">
        <img src="./ima/seguimiento.png" alt="logo" width="200" style={{ margin: '0 auto' }} />
      </div>
      <br />
      <h1 className="text-5xl font-bold mb-4">Tracking</h1>
      <p className="text-xl mb-8">In this section you can view the tracking of the package</p>
      <input
        type="text"
        id="trackingCodeInput"
        className="border border-gray-500 px-4 py-2 rounded-md"
        placeholder="Enter your code number"
        value={trackingCode}
        onChange={(e) => setTrackingCode(e.target.value)}
      />
      <button
        className="bg-custom-color hover:bg-custom-color-dark text-white font-bold py-2 px-4 rounded mt-4"
        style={{ backgroundColor: "#3c6e71" }}
        onClick={handleTrackButtonClick}
      >
        Track
      </button>
      <br />
      <br />
      <div>
        <p className="text-xl mb-8">
          In this section, when the button is activated, the corresponding information of the
          sent article will be displayed. For example, the origin, destination, and description.
        </p>
      </div>
    </div>
    <div>
      {trackingData && (
        <>
          <p>Origin: {trackingData.origin}</p>
          <p>Destination: {trackingData.destine}</p>
          <p>Description: {trackingData.description}</p>
        </>
      )}
    </div>
    <Footer />
  </div>
  );
};

export default Home;
