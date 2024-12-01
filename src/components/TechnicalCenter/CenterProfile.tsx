import React from 'react';
import { MapPin, Phone, Mail, Clock, Award, Tool } from 'lucide-react';
import { InspectionCenter } from '../../types';

interface CenterProfileProps {
  center: InspectionCenter;
}

export const CenterProfile: React.FC<CenterProfileProps> = ({ center }) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{center.name}</h2>
            <div className="mt-2 flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{center.location.commune}, {center.location.wilaya}</span>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            center.status === 'active' 
              ? 'bg-green-100 text-green-800'
              : center.status === 'maintenance'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {center.status.charAt(0).toUpperCase() + center.status.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <Phone className="h-5 w-5 mr-2" />
              <span>{center.contactInfo.phone}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="h-5 w-5 mr-2" />
              <span>{center.contactInfo.email}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              <span>{center.openingHours}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Total Inspections</p>
              <p className="text-2xl font-bold text-gray-900">{center.inspectionsCount}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Active Inspectors</p>
              <p className="text-2xl font-bold text-gray-900">{center.inspectorsCount}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 border-t">
        <h3 className="text-lg font-semibold mb-4">Equipment Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {center.equipment.map((item, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Tool className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="font-medium">{item.name}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.status === 'operational'
                    ? 'bg-green-100 text-green-800'
                    : item.status === 'maintenance'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {item.status}
                </span>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                <p>Last maintenance: {new Date(item.lastMaintenance).toLocaleDateString()}</p>
                <p>Next maintenance: {new Date(item.nextMaintenance).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 border-t">
        <h3 className="text-lg font-semibold mb-4">Certifications</h3>
        <div className="space-y-4">
          {center.certifications.map((cert, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-gray-500 mr-2" />
                <div>
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-sm text-gray-600">
                    Valid until: {new Date(cert.expiryDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                cert.status === 'valid'
                  ? 'bg-green-100 text-green-800'
                  : cert.status === 'pending'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {cert.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};