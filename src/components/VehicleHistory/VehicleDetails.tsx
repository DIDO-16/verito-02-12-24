import React from 'react';
import { Car, Calendar, Hash, MapPin, Users, AlertTriangle, Briefcase } from 'lucide-react';
import { VehicleHistory } from '../../types';

interface VehicleDetailsProps {
  vehicle: VehicleHistory;
}

export const VehicleDetails: React.FC<VehicleDetailsProps> = ({ vehicle }) => {
  const currentOwner = vehicle.owners[vehicle.owners.length - 1];
  const currentUsage = vehicle.usage[vehicle.usage.length - 1];
  const currentLocation = vehicle.locations[vehicle.locations.length - 1];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Vehicle Information</h2>
          <span className="px-4 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
            {vehicle.year}
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <Car className="h-5 w-5 text-primary-600" />
            <div>
              <p className="text-sm text-gray-500">Make & Model</p>
              <p className="font-medium">{vehicle.make} {vehicle.model}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Hash className="h-5 w-5 text-primary-600" />
            <div>
              <p className="text-sm text-gray-500">VIN</p>
              <p className="font-medium">{vehicle.vin}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-primary-600" />
            <div>
              <p className="text-sm text-gray-500">Registration Date</p>
              <p className="font-medium">
                {new Date(vehicle.administrativeStatus.registrationDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Users className="h-5 w-5 text-primary-600 mr-2" />
            Current Ownership & Usage
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Current Owner Type</p>
              <p className="font-medium capitalize">{currentOwner.type}</p>
              <p className="text-sm text-gray-500 mt-1">
                Since {new Date(currentOwner.startDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Current Usage</p>
              <p className="font-medium capitalize">{currentUsage.type}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Previous Owners</p>
              <p className="font-medium">{vehicle.owners.length - 1}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <MapPin className="h-5 w-5 text-primary-600 mr-2" />
            Location & Status
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Current Location</p>
              <p className="font-medium">
                {currentLocation.city}, {currentLocation.country}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Administrative Status</p>
              <div className="flex items-center mt-1">
                {vehicle.administrativeStatus.isLiened ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    Vehicle Liened
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Clear Status
                  </span>
                )}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Update</p>
              <p className="font-medium">
                {new Date(vehicle.administrativeStatus.lastUpdateDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {vehicle.accidents.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <AlertTriangle className="h-5 w-5 text-primary-600 mr-2" />
            Accident History
          </h3>
          <div className="space-y-4">
            {vehicle.accidents.map((accident, index) => (
              <div key={index} className="border-l-4 border-primary-500 pl-4">
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    accident.severity === 'major' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {accident.severity} incident
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(accident.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-2 text-gray-700">{accident.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};