import { InspectionCenter } from '../types';

export const mockCenters: InspectionCenter[] = [
  {
    id: 'CTC001',
    name: 'CTC Alger Centre',
    location: { wilaya: 'Alger', commune: 'Alger Centre' },
    coordinates: { latitude: 36.7538, longitude: 3.0588 },
    status: 'active',
    lastActive: '2024-02-28',
    inspectionsCount: 12567,
    inspectorsCount: 8,
    openingHours: '8:00-17:00',
    contactInfo: {
      phone: '+213 21 234567',
      email: 'contact@ctc-alger.dz'
    }
  },
  {
    id: 'CTC002',
    name: 'CTC Oran Est',
    location: { wilaya: 'Oran', commune: 'Bir El Djir' },
    coordinates: { latitude: 35.7066, longitude: -0.6405 },
    status: 'active',
    lastActive: '2024-02-27',
    inspectionsCount: 9876,
    inspectorsCount: 6,
    openingHours: '8:00-17:00',
    contactInfo: {
      phone: '+213 41 234567',
      email: 'contact@ctc-oran.dz'
    }
  },
  // ... 18 more centers with similar detailed information
];