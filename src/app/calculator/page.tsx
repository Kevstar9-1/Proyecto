import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-300 text-black min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Calculator</h1>
        <p className="text-xl mb-8">In this section you can view the tracking of the package</p>

        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Route"
        />
        <br/>
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Weight"
        />
        <br/>
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Length"
        />
        <br/>
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Width"
        />
        <br/>
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 rounded-md mb-4"
          placeholder="Height"
        />
        <br/>
        <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Home;
