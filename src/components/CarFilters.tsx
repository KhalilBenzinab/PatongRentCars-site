import React from 'react';
import { Filter, DollarSign, Users, Car } from 'lucide-react';

interface CarFiltersProps {
  filters: {
    category: string;
    priceRange: string;
    passengers: string;
  };
  onFilterChange: (filterType: string, value: string) => void;
}

const CarFilters: React.FC<CarFiltersProps> = ({ filters, onFilterChange }) => {
  const categories = ['All', 'Économique', 'Compacte', 'Berline', 'Luxe', 'SUV', 'Premium'];
  const priceRanges = ['All', '0-50€', '51-100€', '101-200€', '200€+'];
  const passengerCounts = ['All', '2-4', '5-7', '8+'];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center mb-6">
        <Filter className="h-5 w-5 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Filtrer les Voitures</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
            <Car className="h-4 w-4 mr-2 text-blue-600" />
            Catégorie
          </label>
          <select
            value={filters.category}
            onChange={(e) => onFilterChange('category', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'All' ? 'Toutes' : category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
            <DollarSign className="h-4 w-4 mr-2 text-blue-600" />
            Prix (par jour)
          </label>
          <select
            value={filters.priceRange}
            onChange={(e) => onFilterChange('priceRange', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            {priceRanges.map(range => (
              <option key={range} value={range}>
                {range === 'All' ? 'Tous les prix' : range}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
            <Users className="h-4 w-4 mr-2 text-blue-600" />
            Passagers
          </label>
          <select
            value={filters.passengers}
            onChange={(e) => onFilterChange('passengers', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            {passengerCounts.map(count => (
              <option key={count} value={count}>
                {count === 'All' ? 'Tous' : count}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CarFilters;