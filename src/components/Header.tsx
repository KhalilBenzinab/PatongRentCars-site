import React, { useState } from 'react';
import { Car, Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onPageChange('home')}>
             <img
                src="/src/data/images/logo_patong_blanc.png" 
                alt="Logo"
                className="h-12 w-12 object-contain"
              />
        <span className="ml-2 text-2xl font-bold text-gray-900">Patong Rent Cars</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => onPageChange('home')}
              className={`transition-colors duration-200 ${
                currentPage === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Accueil
            </button>
            <button 
              onClick={() => onPageChange('cars')}
              className={`transition-colors duration-200 ${
                currentPage === 'cars' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Nos Voitures
            </button>
            <button 
              onClick={() => onPageChange('contact')}
              className={`transition-colors duration-200 ${
                currentPage === 'contact' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" />
              <span>(+212)06.61.61.19.62 / (+212)06.61.44.14.62</span>
            </div>
            
            {/* Menu mobile */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  onPageChange('home');
                  setIsMenuOpen(false);
                }}
                className={`text-left transition-colors duration-200 ${
                  currentPage === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-700'
                }`}
              >
                Accueil
              </button>
              <button 
                onClick={() => {
                  onPageChange('cars');
                  setIsMenuOpen(false);
                }}
                className={`text-left transition-colors duration-200 ${
                  currentPage === 'cars' ? 'text-blue-600 font-semibold' : 'text-gray-700'
                }`}
              >
                Nos Voitures
              </button>
              <button 
                onClick={() => {
                  onPageChange('contact');
                  setIsMenuOpen(false);
                }}
                className={`text-left transition-colors duration-200 ${
                  currentPage === 'contact' ? 'text-blue-600 font-semibold' : 'text-gray-700'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;