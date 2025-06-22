import React, { useState } from 'react';
import { Users, Briefcase, Zap, Star, Shield, MessageCircle } from 'lucide-react';

interface CarCardProps {
  car: {
    id: string;
    name: string;
    category: string;
    images: string[];
    pricePerDay: number;
    passengers: number;
    luggage: number;
    transmission: string;
    fuelType: string;
    rating: number;
    features: string[];
    available: boolean;
  };
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [mainImage, setMainImage] = useState(car.images[0]);

  const handleWhatsAppBooking = () => {
    const message = `Bonjour! Je souhaite réserver la ${car.name} au prix de ${car.pricePerDay}€/jour. Pouvez-vous me donner plus d'informations sur la disponibilité?`;
    const phoneNumber = "212661611962"; // Remplace par ton numéro WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const renderStars = () => {
    const fullStars = Math.floor(car.rating);
    const halfStar = car.rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="h-4 w-4 text-yellow-400" />
        ))}
        {halfStar && <Star key="half" className="h-4 w-4 text-yellow-200" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group max-w-sm flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={mainImage}
          alt={`${car.name} principale`}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {car.category}
          </span>
        </div>
      </div>

      {/* Miniatures images */}
      {car.images.length > 1 && (
        <div className="flex gap-2 px-4 py-2 overflow-x-auto">
          {car.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${car.name} miniature ${idx + 1}`}
              onClick={() => setMainImage(img)}
              className={`w-16 h-12 object-cover rounded cursor-pointer border-2 ${
                mainImage === img ? 'border-blue-600' : 'border-transparent'
              } hover:border-blue-400`}
            />
          ))}
        </div>
      )}

      {/* Contenu infos + bouton avec flex column + espace entre */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{car.name}</h3>

          

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3 text-xs text-gray-600">
              <div className="flex items-center">
                <Users className="h-3 w-3 mr-1" />
                <span>{car.passengers}</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="h-3 w-3 mr-1" />
                <span>{car.luggage}</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-3 w-3 mr-1" />
                <span>{car.transmission}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-3 w-3 mr-1" />
                <span>{car.fuelType}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center text-green-600 text-xs">
              <Shield className="h-3 w-3 mr-1" />
              <span className="font-medium">Assurance Incluse</span>
            </div>
            <div className="text-right">
              <span className="text-xl font-bold text-gray-900">{car.pricePerDay}€</span>
              <span className="text-gray-600 text-xs">/jour</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleWhatsAppBooking}
          disabled={!car.available}
          className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center text-sm ${
            car.available
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          {car.available ? 'Réserver sur WhatsApp' : 'Non Disponible'}
        </button>
      </div>
    </div>
  );
};

export default CarCard;
