import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-300 text-black min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="entrega">
          <img src="./ima/entrega.png" alt="logo" width="200" style={{ margin: '0 auto' }} />
        </div>
        <br />
        <h1 className="text-5xl font-bold mb-4">Tracking</h1>
        <p className="text-xl mb-8">In this section you can view the tracking of the package</p>
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md"
          placeholder="Enter the code number"
        />
        <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-4">
          Track
        </button>
      </div>
    </div>
  );
};

export default Home;

