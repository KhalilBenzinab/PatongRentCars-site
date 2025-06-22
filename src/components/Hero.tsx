import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/src/data/images/background_Hero.jpg')"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Location de Voitures
            <span className="block text-yellow-400">Premium</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre flotte de véhicules premium. 
            Réservez facilement via WhatsApp en quelques clics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;