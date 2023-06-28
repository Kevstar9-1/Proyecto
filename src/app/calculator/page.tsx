"use client"
import { useState } from 'react';
import Footer from '../components/footer';

interface QuoteData {
  origin: string;
  destine: string;
  weight: string;
  length: string;
  width: string;
  height: string;
  totalPrice: string;
  wantsShipping: boolean;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
}

const Home: React.FC = () => {
  const [showTable, setShowTable] = useState(false);
  const [quoteData, setQuoteData] = useState<QuoteData>({
    origin: '',
    destine: '',
    weight: '',
    length: '',
    width: '',
    height: '',
    totalPrice: '',
    wantsShipping: false,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleCalculate = () => {
    if (
      !quoteData.origin ||
      !quoteData.destine ||
      !quoteData.weight ||
      !quoteData.length ||
      !quoteData.width ||
      !quoteData.height
    ) {
      return;
    }

    // Realizar cálculos
    const volume = parseFloat(quoteData.length) * parseFloat(quoteData.width) * parseFloat(quoteData.height);
    let totalPrice = 0;

    if (volume <= 100) {
      totalPrice = volume * 0.2;
    } else if (volume <= 200) {
      totalPrice = volume * 0.8;
    } else if (volume <= 300) {
      totalPrice = volume * 1.2;
    } else {
      totalPrice = volume * 1.5;
    }
    
    setQuoteData((prevData) => ({
      ...prevData,
      totalPrice: totalPrice.toFixed(2),
    }));
    setShowTable(true);
  };

  const handleReset = () => {
    setQuoteData({
      origin: '',
      destine: '',
      weight: '',
      length: '',
      width: '',
      height: '',
      totalPrice: '',
      wantsShipping: false,
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: ''
    });
    setShowTable(false);
  };

  const handleYes = () => {
    setQuoteData((prevData) => ({
      ...prevData,
      wantsShipping: true,
    }));
  };

  const handleNo = () => {
    setQuoteData((prevData) => ({
      ...prevData,
      wantsShipping: false,
      firstName: '',
      lastName: '',
    }));
  };

  return (
    <div className="bg-gray-300 text-black min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <br />
        <h1 className="text-5xl font-bold mb-4">Quote</h1>
        <p className="text-xl mb-8">In this section you can quote the shipping of the item</p>
        <div className="cotizar">
          <img src="./ima/cotizacion.png" alt="logo" width="200" style={{ margin: '0 auto' }} />
        </div>
        <br />
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Origin"
          value={quoteData.origin}
          onChange={(e) => setQuoteData((prevData) => ({ ...prevData, origin: e.target.value }))}
        />
        <br />
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Destine"
          value={quoteData.destine}
          onChange={(e) => setQuoteData((prevData) => ({ ...prevData, destine: e.target.value }))}
        />
        <br />
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Weight"
          value={quoteData.weight}
          onChange={(e) => setQuoteData((prevData) => ({ ...prevData, weight: e.target.value }))}
        />
        <br />
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Length"
          value={quoteData.length}
          onChange={(e) => setQuoteData((prevData) => ({ ...prevData, length: e.target.value }))}
        />
        <br />
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Width"
          value={quoteData.width}
          onChange={(e) => setQuoteData((prevData) => ({ ...prevData, width: e.target.value }))}
        />
        <br />
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Height"
          value={quoteData.height}
          onChange={(e) => setQuoteData((prevData) => ({ ...prevData, height: e.target.value }))}
        />
        <br />
        <br />
        <button
          className="bg-custom-color hover:bg-custom-color-dark text-white font-bold py-2 px-4 rounded mt-4"
          style={{ backgroundColor: '#3c6e71' }}
          onClick={handleCalculate}>Calculate
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
          onClick={handleReset}
        >
          Reset
        </button>
        {showTable && (
          <div className="mt-4">
            <table className="border border-gray-500 mx-auto">
              <thead>
                <tr>
                  <th className="border border-gray-500 px-4 py-2">Origin</th>
                  <th className="border border-gray-500 px-4 py-2">Destine</th>
                  <th className="border border-gray-500 px-4 py-2">Volume</th>
                  <th className="border border-gray-500 px-4 py-2">Total Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-500 px-4 py-2">{quoteData.origin}</td>
                  <td className="border border-gray-500 px-4 py-2">{quoteData.destine}</td>
                  <td className="border border-gray-500 px-4 py-2">
                    {(parseFloat(quoteData.length) * parseFloat(quoteData.width) * parseFloat(quoteData.height)).toFixed(2)}
                  </td>
                  <td className="border border-gray-500 px-4 py-2">{quoteData.totalPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <br />
        {showTable && (
          <div>
            {showTable && (
              <div>
                <div>
                  <p>Do you want to send? If your answer is yes, fill in the following information:</p>
                </div>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={handleYes}
                >
                  Yes
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
                  onClick={handleNo}
                >
                  No
                </button>
              </div>
            )}

            {showTable && quoteData.wantsShipping && (
              <div className="mt-4">
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 rounded-md mb-4"
                  placeholder="First Name"
                  value={quoteData.firstName}
                  onChange={(e) => setQuoteData((prevData) => ({ ...prevData, firstName: e.target.value }))}
                />
                <br />
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 rounded-md mb-4"
                  placeholder="Last Name"
                  value={quoteData.lastName}
                  onChange={(e) => setQuoteData((prevData) => ({ ...prevData, lastName: e.target.value }))}
                />
                <br />
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 rounded-md mb-4"
                  placeholder="Phone"
                  value={quoteData.phone}
                  onChange={(e) => setQuoteData((prevData) => ({ ...prevData, phone: e.target.value }))}
                />
                <br />
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 rounded-md mb-4"
                  placeholder="Email"
                  value={quoteData.email}
                  onChange={(e) => setQuoteData((prevData) => ({ ...prevData, email: e.target.value }))}
                />
                <br />
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 rounded-md mb-4"
                  placeholder="Address"
                  value={quoteData.address}
                  onChange={(e) => setQuoteData((prevData) => ({ ...prevData, address: e.target.value }))}
                />
                <br />
                <button
                  className="bg-custom-color hover:bg-custom-color-dark text-white font-bold py-2 px-4 rounded mt-4"
                  style={{ backgroundColor: '#3c6e71' }}>Send article
                </button>
              </div>
            )}

          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
