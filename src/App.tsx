import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CarFilters from './components/CarFilters';
import CarCard from './components/CarCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { cars } from './data/cars';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: 'All',
    passengers: 'All'
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      // Category filter
      if (filters.category !== 'All' && car.category !== filters.category) {
        return false;
      }

      // Price range filter
      if (filters.priceRange !== 'All') {
        const price = car.pricePerDay;
        switch (filters.priceRange) {
          case '0-50€':
            if (price > 50) return false;
            break;
          case '51-100€':
            if (price <= 50 || price > 100) return false;
            break;
          case '101-200€':
            if (price <= 100 || price > 200) return false;
            break;
          case '200€+':
            if (price <= 200) return false;
            break;
        }
      }

      // Passengers filter
      if (filters.passengers !== 'All') {
        const passengers = car.passengers;
        switch (filters.passengers) {
          case '2-4':
            if (passengers < 2 || passengers > 4) return false;
            break;
          case '5-7':
            if (passengers < 5 || passengers > 7) return false;
            break;
          case '8+':
            if (passengers < 8) return false;
            break;
        }
      }

      return true;
    });
  }, [filters]);

  const renderHomePage = () => (
    <>
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choisissez Votre Véhicule Parfait
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            De l'économique au luxe, trouvez le véhicule parfait pour votre voyage. 
            Toutes les voitures sont entièrement assurées avec assistance 24h/24.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.slice(0, 6).map(car => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentPage('cars')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Voir Toutes les Voitures
          </button>
        </div>
      </main>
    </>
  );

  const renderCarsPage = () => (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Notre Flotte Complète
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez tous nos véhicules disponibles avec leurs prix et disponibilités en temps réel.
        </p>
      </div>

      <CarFilters filters={filters} onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map(car => (
          <CarCard
            key={car.id}
            car={car}
          />
        ))}
      </div>

      {filteredCars.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">
            Aucune voiture ne correspond à vos critères actuels. Essayez d'ajuster vos filtres.
          </p>
        </div>
      )}
    </main>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      
      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'cars' && renderCarsPage()}
      {currentPage === 'contact' && <Contact />}

      <Footer />
    </div>
  );
}

export default App;