"use client"
import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import { generateTrackingCode } from '../components/generatecode';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';

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
  postalcode: string;
  address: string;
  description: string;
  firstNamed: string;
  lastName2: string;
  phone2: string;
  email2: string;
  address2: string;
  code: string;
  status: string;
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
    address: '',
    postalcode: '',
    description:'',
    firstNamed: '',
    lastName2: '',
    phone2: '',
    email2: '',
    address2: '',
    code: '',
    status: ''
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

    const volume = parseFloat(quoteData.length) * parseFloat(quoteData.width) * parseFloat(quoteData.height);
    let totalPrice = 0;
    if (volume <= 1000) {
      totalPrice = 2750; // Precio base de 2500 colones para volúmenes menores o iguales a 1000
    } else if (volume <= 2000) {
      totalPrice = volume * 0.80;
    } else if (volume <= 3000) {
      totalPrice = volume * 1.2;
    } else {
      totalPrice = volume * 1.5;
    }
    setQuoteData((prevData) => ({
      ...prevData,
      totalPrice: totalPrice.toFixed(),
      status: '' 
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
      //r
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      postalcode: '',
      description:'',
      //d
      firstNamed: '',
      lastName2: '',
      phone2: '',
      email2: '',
      address2: '',
      code: '',
      status: '' 
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
  const handleShipping = async () => {
    const trackingCode = generateTrackingCode();
    setQuoteData((prevData) => ({
      ...prevData,
      code: trackingCode,
      status: 'Sent'
    }));
  };

  useEffect(() => {
    const addData = async () => {
      try {
        await addDoc(collection(db, 'destinatario'), quoteData);
        console.log('Datos agregados a la colección "destinatario"');
      } catch (error) {
        console.error('Error al agregar los datos:', error);
      }
    };

    if (quoteData.code !== '') {
      addData();
    }
  }, [quoteData.code]);

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
                <p>Recipient Information</p>
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
                  placeholder="Postal Code"
                  value={quoteData.postalcode}
                  onChange={(e) => setQuoteData((prevData) => ({ ...prevData, postalcode: e.target.value }))}
                />
                <br />
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 rounded-md mb-4"
                  placeholder="Description Article"
                  value={quoteData.description}
                  onChange={(e) => setQuoteData((prevData) => ({ ...prevData, description: e.target.value }))}
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
              </div>
            )}
            {showTable && quoteData.wantsShipping && (
              <div className="mt-4">
                <p>Addressee Information</p>
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 rounded-md mb-4"
                  placeholder="First Name"
                  value={quoteData.firstNamed}
                  onChange={(e) => setQuoteData((prevData) => ({ ...prevData, firstNamed: e.target.value }))}
                />
                <br />
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 rounded-md mb-4"
                  placeholder="Last Name"
                  value={quoteData.lastName2}
                  onChange={(e) => setQuoteData((prevData) => ({ ...prevData, lastName2: e.target.value }))}
                />
                <br />
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 rounded-md mb-4"
                  placeholder="Phone"
                  value={quoteData.phone2}
                  onChange={(e) => setQuoteData((prevData) => ({ ...prevData, phone2: e.target.value }))}
                />
                <br />
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 rounded-md mb-4"
                  placeholder="Email"
                  value={quoteData.email2}
                  onChange={(e) => setQuoteData((prevData) => ({ ...prevData, email2: e.target.value }))}
                />
                <br />
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 rounded-md mb-4"
                  placeholder="Address"
                  value={quoteData.address2}
                  onChange={(e) => setQuoteData((prevData) => ({ ...prevData, address2: e.target.value }))}
                />
                <br />
                <button
                  className="bg-custom-color hover:bg-custom-color-dark text-white font-bold py-2 px-4 rounded mt-4"
                  style={{ backgroundColor: '#3c6e71' }}
                  onClick={handleShipping}>Shipping
                </button>
                <br />
                <br />
                <p>Tracking code:</p>
                <input
                  type="text"
                  className="border border-gray-500 px-4 py-2 rounded-md mb-4 flex-justify-center"
                  placeholder="Code"
                  value={quoteData.code}
                  onChange={(e) => setQuoteData((prevData) => ({ ...prevData, code: e.target.value }))}
                />
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