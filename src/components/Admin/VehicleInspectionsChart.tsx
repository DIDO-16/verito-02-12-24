import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { mockVehicles } from '../../data/mockData';

export const VehicleInspectionsChart: React.FC = () => {
  const monthlyData = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    const month = date.toLocaleString('default', { month: 'short' });
    
    const inspections = mockVehicles.reduce((acc, vehicle) => {
      return (
        acc +
        vehicle.technicalHistory.filter((record) => {
          const recordDate = new Date(record.date);
          return (
            recordDate.getMonth() === date.getMonth() &&
            recordDate.getFullYear() === date.getFullYear()
          );
        }).length
      );
    }, 0);

    return {
      month,
      inspections,
    };
  }).reverse();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-6">Monthly Inspections</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="inspections" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};