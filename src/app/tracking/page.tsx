"use client"
import Footer from '../components/footer';
import React, { useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';


const Home: React.FC = () => {

  const [trackingCode, setTrackingCode] = useState<string>('');
  const [trackingData, setTrackingData] = useState<any>(null);

  const handleTrackButtonClick = () => {
    const db = getDatabase();
    const trackingCodeRef = ref(db, `trackingData/${trackingCode}`);

    onValue(trackingCodeRef, (snapshot) => {
      const data = snapshot.val();
      setTrackingData(data);
    });
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
        <div><p className="text-xl mb-8">In this section is intended that when the button is
          activated the information corresponding to the article sent will be displayed.
          For example the origin, destination, description</p></div>
      </div>

      <div>
        {trackingData && (
          <>
            <p>Origin: {trackingData.origin}</p>
            <p>Destination: {trackingData.destination}</p>
            <p>Description: {trackingData.description}</p>
            {/* Agrega aquí otros datos relacionados al seguimiento */}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;

