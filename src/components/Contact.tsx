import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, MapPin, Clock, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    'service_fooli2q',     // Remplace par ton Service ID
    'template_ow6jz8m',    // Remplace par ton Template ID',
    formData,
    'kFpP2oyckSe6voRo0'         // Remplace par ton User ID (ou Public Key)
  ).then(() => {
    alert("Message envoyé avec succès !");
    setFormData({ name: '', email: '', phone: '', message: '' });
  }).catch((error) => {
    console.error('Erreur:', error);
    alert("Une erreur est survenue. Essayez plus tard.");
  });
};

  const handleWhatsAppContact = () => {
  const message = `Bonjour ! Je suis ${formData.name}.\nTéléphone : ${formData.phone}\n\n${formData.message}`;
  const phoneNumber = "212661611962"; // Remplace par ton numéro WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};


  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous sommes là pour vous aider. Contactez-nous par email ou WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos Coordonnées</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Adresse</h3>
                  <p className="text-gray-600">Rabat - Tanger -Marrakesh - Agadir - Casablanca</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Téléphone</h3>
                  <p className="text-gray-600"> (+212) 06.61.61.19.62 / (+212) 06.61.44.14.62</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@patong-rent-cars.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Horaires</h3>
                  <p className="text-gray-600">
                    24h/7j
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MessageCircle className="h-6 w-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600">Disponible 24h/7j pour vos urgences</p>
                  <button
                    onClick={() => {
                      const phoneNumber = "212661611962";
                      const whatsappUrl = `https://wa.me/${phoneNumber}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Ouvrir WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un Message</h2>
            
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom Complet *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="+33 1 23 45 67 89"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Décrivez votre demande..."
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer par Email
                </button>
                
                <button
                  type="button"
                  onClick={handleWhatsAppContact}
                  className="flex-1 bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Envoyer sur WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Section FAQ */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Questions Fréquentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Comment réserver une voiture?</h3>
              <p className="text-gray-600">Cliquez sur "Réserver sur WhatsApp" sur la voiture de votre choix. Nous vous répondrons rapidement avec toutes les informations.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Quels documents sont nécessaires?</h3>
              <p className="text-gray-600">Permis de conduire valide, carte d'identité.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">L'assurance est-elle incluse?</h3>
              <p className="text-gray-600">Oui, toutes nos voitures incluent une assurance complète et une assistance 24h/24.</p>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;