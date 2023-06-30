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
  apiKey: "AIzaSyAkoINKylXn-T0Q7Pjjk1Vsuo5W3tDVFfE2",
  authDomain: "expreog-edf05.firebaseapp.com",
  projectId: "expreog-edf05",
  storageBucket: "expreog-edf05.appspot.com",
  messagingSenderId: "662649012566",
  appId: "1:662649012566:web:56fddd55495356374f16f7"
};

const Home: React.FC = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [trackingCode, setTrackingCode] = useState<string>('');
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
        setErrorMessage(null);
      } else {
        setTrackingData(null);
        setErrorMessage('No se encontraron resultados.');
      }
    } catch (error) {
      setErrorMessage('Error al obtener los datos: ' + error);
    }
  };

  const handleResetClick = () => {
    setTrackingCode('');
    setTrackingData(null);
    setErrorMessage(null);
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
        <br />
        <button
          className="bg-custom-color hover:bg-custom-color-dark text-white font-bold py-2 px-4 rounded mt-4"
          style={{ backgroundColor: "#3c6e71", marginRight: '10px' }}
          onClick={handleTrackButtonClick}>Track
        </button>
        <br />
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleResetClick}>Reset
        </button>
        <br />
      </div>
      <div>
        {trackingData && (
          <div className="tracking-info">
            <div className="tracking-label">
              <p className="tracking-label">Origen: {trackingData.origin}</p>
              <p className="tracking-label">Destino: {trackingData.destine}</p>
              <p className="tracking-label">DescripciÃ³n: {trackingData.description}</p>
            </div>
          </div>
        )}
        {errorMessage && (
          <div className="error-message">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
