import { VehicleHistory, User } from '../types';
import { mockVehicles } from './mockVehicles';

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@verito.dz',
    name: 'Admin User',
    role: 'admin'
  },
  {
    id: 'CTC001-INS1',
    email: 'inspector.alger@ctc.dz',
    name: 'Karim Benali',
    role: 'inspector'
  },
  {
    id: 'CTC002-INS1',
    email: 'inspector.oran@ctc.dz',
    name: 'Ahmed Mansouri',
    role: 'inspector'
  },
  {
    id: '3',
    email: 'pro@garage.dz',
    name: 'Professional User',
    role: 'professional'
  },
  {
    id: '4',
    email: 'user@example.dz',
    name: 'Individual User',
    role: 'individual'
  }
];

export { mockVehicles };