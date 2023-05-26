"use client"
import React, { useState } from 'react';
import Footer from '../components/footer';

const Home: React.FC = () => {
  const [showTable, setShowTable] = useState(false);
  const [origin, setOrigin] = useState('');
  const [destine, setDestine] = useState('');
  const [route, setRoute] = useState('');
  const [weight, setWeight] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');

  const handleCalculate = () => {
    setShowTable(true);
  };
  return (
    <div className="bg-gray-300 text-black min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <br />
        <h1 className="text-5xl font-bold mb-4">Quote</h1>
        <p className="text-xl mb-8">In this section you can quote the shipping of the item </p>
        <div className="cotizar">
          <img src="./ima/cotizacion.png" alt="logo" width="200" style={{ margin:'0 auto'}} />
        </div>
        <br />
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Destine"
          value={destine}
          onChange={(e) => setDestine(e.target.value)}
        />
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Route"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
        />
        <br/>
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br/>
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Length"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <br/>
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <br/>
        <br/>
        <button
          className="bg-custom-color hover:bg-custom-color-dark text-white font-bold py-2 px-4 rounded mt-4"
          style={{ backgroundColor: "#3c6e71" }}
          onClick={handleCalculate}
        >
          Calculate
        </button>
        {showTable && (
          <table className="border border-gray-500 mx-auto mt-4">
            <thead>
              <tr>
                <th className="border border-gray-500 px-4 py-2">Origin</th>
                <th className="border border-gray-500 px-4 py-2">Destine</th>
                <th className="border border-gray-500 px-4 py-2">Route</th>
                <th className="border border-gray-500 px-4 py-2">Weight</th>
                <th className="border border-gray-500 px-4 py-2">Length</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
            </table>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Home;