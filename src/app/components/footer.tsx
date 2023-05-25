import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300 text-gray-600 py-4 text-center">
      <p>Contact information: soportlt@gmail.com</p>
      <p>Our social media</p>
      <div className="flex items-center justify-center">
        <img src="./ima/facebook.jpeg" alt="Facebook" className="w-5 h-5" /> 
        <img src="./ima/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
        <img src="./ima/instagram.jpeg" alt="Instagram" className="w-5 h-5" />
      </div>
    </footer>
  );
};

export default Footer;
