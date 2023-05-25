import React from 'react';
import Footer from '../components/footer';

const Home: React.FC = () => {
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
          className="border border-gray-500 px-4 py-2 rounded-md"
          placeholder="Enter your code number"
        />
        <button
          className="bg-custom-color hover:bg-custom-color-dark text-white font-bold py-2 px-4 rounded mt-4"
          style={{ backgroundColor: "#3c6e71" }}
        >
          Track
        </button>
        <br />
        <br />
        <div><p className="text-xl mb-8">In this section is intended that when the button is 
          activated the information corresponding to the article sent will be displayed.
          For example the origin, destination, description</p></div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;

