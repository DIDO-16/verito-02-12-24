import React from 'react';
import { useParams } from 'react-router-dom';
import { CenterProfile } from '../components/TechnicalCenter/CenterProfile';
import { InspectionForm } from '../components/TechnicalCenter/InspectionForm';
import { mockCenters } from '../data/mockCenters';
import { useAuthStore } from '../store/authStore';

export const TechnicalCenterPage: React.FC = () => {
  const { centerId } = useParams<{ centerId: string }>();
  const { user } = useAuthStore();
  
  const center = mockCenters.find(c => c.id === centerId);
  
  if (!center) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Centre Not Found</h2>
          <p className="mt-2 text-gray-600">No technical center found with ID: {centerId}</p>
        </div>
      </div>
    );
  }

  const handleInspectionSubmit = (inspection: any) => {
    console.log('Inspection submitted:', inspection);
    // Here you would typically save the inspection to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <CenterProfile center={center} />
          
          {user?.role === 'inspector' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">New Inspection</h2>
              <InspectionForm
                centerId={center.id}
                inspectorId={user.id}
                onSubmit={handleInspectionSubmit}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};