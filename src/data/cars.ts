export interface Car {
  id: string;
  name: string;
  category: string;
  images: string[];  // plural 'images'
  pricePerDay: number;
  passengers: number;
  luggage: number;
  transmission: string;
  fuelType: string;
  rating: number;
  features: string[];
  available: boolean;
}

export const cars: Car[] = [
  {
    id: '1',
    name: 'Mercedes-Benz Classe A',
    category: 'Luxe',
    images: [
      'src/data/images/ClassAnoire/ClassAnoire1.jpg',
      'src/data/images/ClassAnoire/ClassAnoire2.jpg',
      'src/data/images/ClassAnoire/ClassAnoire3.jpg'
    ],
    pricePerDay: 89,
    passengers: 5,
    luggage: 4,
    transmission: 'Automatique',
    fuelType: 'Diesel',
    rating: 4.9,
    features: ['GPS', 'Bluetooth', 'Sièges Chauffants', 'Audio Premium'],
    available: true
  },
  {
    id: '2',
    name: 'Mercedes-Benz Classe A',
    category: 'Luxe',
    images: [
      'src/data/images/ClassAblanc/ClassAblanc1.jpg',
      'src/data/images/ClassAblanc/ClassAblanc2.jpg',
      'src/data/images/ClassAblanc/ClassAblanc3.jpg',
    ],
    pricePerDay: 129,
    passengers: 5,
    luggage: 4,
    transmission: 'Automatique',
    fuelType: 'Essence',
    rating: 4.9,
    features: ['Sièges Massage', 'Audio Premium', 'GPS', 'Toit Ouvrant'],
    available: true
  },
  {
    id: '3',
    name: 'Fiat 500 sport',
    category: 'Premium',
    images: [
      'src/data/images/Fiat500/Fiat500_1.jpg',
      'src/data/images/Fiat500/Fiat500_2.jpg',
      'src/data/images/Fiat500/Fiat500_3.jpg',
    ],
    pricePerDay: 49,
    passengers: 4,
    luggage: 3,
    transmission: 'Automatique',
    fuelType: 'Hybride',
    rating: 4.6,
    features: ['Économique', 'Bluetooth', 'Caméra Recul', 'Ports USB'],
    available: true
  },
  {
    id: '4',
    name: 'Golf 8',
    category: 'Premium',
    images: [
      'src/data/images/Golf8Gris/Golf8_1.jpg',
      'src/data/images/Golf8Gris/Golf8_2.jpg',
      'src/data/images/Golf8Gris/Golf8_3.jpg',
    ],
    pricePerDay: 159,
    passengers: 5,
    luggage: 4,
    transmission: 'Automatique',
    fuelType: 'Essence',
    rating: 4.7,
    features: ['4x4', 'Intérieur Premium', 'GPS', 'Attelage'],
    available: true
  },
  {
    id: '5',
    name: 'Cupra',
    category: 'Compacte',
    images: [
      'src/data/images/Cupra/Cupra1.jpg',
      'src/data/images/Cupra/Cupra2.jpg',
      'src/data/images/Cupra/Cupra3.jpg',
    ],
    pricePerDay: 35,
    passengers: 5,
    luggage: 4,
    transmission: 'Automatique',
    fuelType: 'Essence',
    rating: 4.4,
    features: ['Économique', 'Bluetooth', 'Ports USB', 'Climatisation'],
    available: true
  },
  {
    id: '6',
    name: 'Audi A3',
    category: 'Économique',
    images: [
      'src/data/images/A3noire/A3noire1.jpg',
      'src/data/images/A3noire/A3noire2.jpg',
      'src/data/images/A3noire/A3noire3.jpg',
    ],
    pricePerDay: 29,
    passengers: 5,
    luggage: 4,
    transmission: 'Automatique',
    fuelType: 'Essence',
    rating: 4.2,
    features: ['Économique', 'Bluetooth', 'Climatisation'],
    available: true
  },
  {
    id: '7',
    name: 'Audi A3 2025',
    category: 'Économique',
    images: [
      'src/data/images/A3_gris_2025/A3_2025_1.jpg',
      'src/data/images/A3_gris_2025/A3_2025_2.jpg',
      'src/data/images/A3_gris_2025/A3_2025_3.jpg',
    ],
    pricePerDay: 29,
    passengers: 5,
    luggage: 4,
    transmission: 'Automatique',
    fuelType: 'Essence',
    rating: 4.2,
    features: ['Économique', 'Bluetooth', 'Climatisation'],
    available: true
  }
];
