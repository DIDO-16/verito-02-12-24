import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { VehicleDetails } from '../components/VehicleHistory/VehicleDetails';
import { MileageChart } from '../components/VehicleHistory/MileageChart';
import { TechnicalHistory } from '../components/VehicleHistory/TechnicalHistory';
import { mockVehicles } from '../data/mockData';
import { useAuthStore } from '../store/authStore';

export const VehicleHistoryPage: React.FC = () => {
  const { vin } = useParams<{ vin: string }>();
  const { isAuthenticated } = useAuthStore();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const vehicle = mockVehicles.find(v => v.vin === vin);
  
  if (!vehicle) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Vehicle Not Found</h2>
          <p className="mt-2 text-gray-600">No vehicle found with VIN: {vin}</p>
          <a 
            href="/"
            className="mt-4 inline-block text-primary-600 hover:text-primary-700"
          >
            Return to Search
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Vehicle History</h1>
          <a 
            href="/"
            className="text-primary-600 hover:text-primary-700"
          >
            New Search
          </a>
        </div>
        <VehicleDetails vehicle={vehicle} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MileageChart mileage={vehicle.mileage} dates={vehicle.mileageDates} />
          <TechnicalHistory history={vehicle.technicalHistory} />
        </div>
      </div>
    </div>
  );
};