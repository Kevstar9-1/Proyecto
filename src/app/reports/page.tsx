import Footer from "../components/footer";
import React, { useState } from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-300 text-black min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="report">
          <img src="./ima/informe.png" alt="logo" width="200" style={{ margin: '0 auto' }} />
        </div>
        <br />
        <h1 className="text-5xl font-bold mb-4">Reports</h1>
        <p className="text-xl mb-8">In this section you can enter essential information to identify your report</p>
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md"
          placeholder="Enter your code number"
        />
        <button
          className="bg-custom-color hover:bg-custom-color-dark text-white font-bold py-2 px-4 rounded mt-4"
          style={{ backgroundColor: "#3c6e71" }}
        >
          Report
        </button>
        <br />
        <br />
        <table className="mx-auto text-left border-collapse border border-black">
          <tbody>
            <tr>
              <td colSpan={2} className="border border-black">
                <h2 className="text-3xl font-bold mb-4">Shipping Details:</h2>
                <p className="text-xl">Product: Package sent</p>
                <p className="text-xl">Quantity: X</p>
                <p className="text-xl">Weight: XX kg</p>
                <p className="text-xl">Dimensions: XX" x XX" x XX"</p>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-black">
                <h2 className="text-3xl font-bold mb-4">Invoice Details:</h2>
                <p className="text-xl">Date: XX/XX/XXXX</p>
                <p className="text-xl">Invoice Number: XXXXXXX</p>
                <p className="text-xl">Shipping Details: There you can appreciate your shipping details...</p>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-black">
                <h2 className="text-3xl font-bold mb-4">Recipient Information:</h2>
                <p className="text-xl">Name: Jose Castro</p>
                <p className="text-xl">Address: Salas Vindas, Ciudad Neily</p>
                <p className="text-xl">Phone: 8558-1077</p>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-black">
                <h2 className="text-3xl font-bold mb-4">Sender Information:</h2>
                <p className="text-xl">Name: Kevin Hernandez</p>
                <p className="text-xl">Address: San Jorge, Paso Canoas</p>
                <p className="text-xl">Phone: 8634-2782</p>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-black">
                <h2 className="text-3xl font-bold mb-4">QR Code:</h2>
                <img src="./ima/codigo-qr.png" alt="qr-code" width="200" style={{ margin: '0 auto' }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
