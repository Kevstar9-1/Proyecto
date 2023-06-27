import React from 'react';
import Footer from './components/footer';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-300 text-black min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
      <div className="imagepaquete">
        </div>
        <br />
        <div>
        <h3 className="text-5xl font-bold mb-4">Welcome!</h3>
        <p className="text-xl mb-8">On behalf of the entire team, 
                      we wish you the best experience in the company and that it exceeds your expectations. 
                      We are very happy to have you.</p>
        </div>
        <div className="imagepaquete">
          <img src="./ima/paquetecolor.png" alt="logo" width="200" style={{ margin: '0 auto' }} />
        </div>
        <br />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
     
  )
};

export default Home;