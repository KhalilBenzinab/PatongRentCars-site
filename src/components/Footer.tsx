import React from 'react';
import { Car, MapPin, Phone, Mail, MessageCircle, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "212661611962";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/src/data/images/logo_footer.png" 
                alt="Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="ml-2 text-2xl font-bold">Patong Rent Cars</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Service de location de voitures premium offrant des véhicules de luxe et une expérience client exceptionnelle. 
              Votre voyage compte, et nous sommes là pour le rendre extraordinaire.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/patong.cars" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/patong_rent_cars_/" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">À Propos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Notre Flotte</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Emplacements</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">Rabat - Tanger -Marrakesh - Agadir - Casablanca</span>
              </div>
              <div className="flex items-center flex-nowrap overflow-x-auto">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                  <span className="text-gray-300 whitespace-nowrap text-sm sm:text-base">
                    (+212) 06.61.61.19.62 / 06.61.44.14.62
                  </span>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">contact@patong-rent-cars.com</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 text-green-400 mr-3" />
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  WhatsApp 24h/7j
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 PatongRentCars. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;