import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { VehicleHistory } from '../../types';

interface TechnicalHistoryProps {
  history: VehicleHistory['technicalHistory'];
}

export const TechnicalHistory: React.FC<TechnicalHistoryProps> = ({ history }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Technical History</h3>
      <div className="space-y-6">
        {history.map((record, index) => (
          <div
            key={index}
            className="border-l-4 border-primary-500 pl-4 space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {record.severity === 'major' ? (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                <h4 className="font-medium">{record.type}</h4>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(record.date).toLocaleDateString()}
              </span>
            </div>
            
            <div className="ml-7">
              <div className="text-sm">
                <p className="font-medium text-gray-700">Findings:</p>
                <ul className="list-disc list-inside text-gray-600">
                  {record.findings.map((finding, i) => (
                    <li key={i}>{finding}</li>
                  ))}
                </ul>
              </div>
              
              <div className="text-sm mt-2">
                <p className="font-medium text-gray-700">Recommendations:</p>
                <ul className="list-disc list-inside text-gray-600">
                  {record.recommendations.map((rec, i) => (
                    <li key={i}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};