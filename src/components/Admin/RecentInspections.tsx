import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { mockVehicles } from '../../data/mockData';

export const RecentInspections: React.FC = () => {
  const allInspections = mockVehicles
    .flatMap((vehicle) =>
      vehicle.technicalHistory.map((record) => ({
        ...record,
        vehicle: `${vehicle.make} ${vehicle.model}`,
        vin: vehicle.vin,
      }))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-6">Recent Inspections</h3>
      <div className="space-y-4">
        {allInspections.map((inspection, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50"
          >
            {inspection.severity === 'major' ? (
              <AlertCircle className="h-5 w-5 text-red-500 mt-1" />
            ) : (
              <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                {inspection.vehicle}
              </p>
              <p className="text-sm text-gray-500 truncate">
                VIN: {inspection.vin}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(inspection.date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex-shrink-0">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  inspection.severity === 'major'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {inspection.severity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};