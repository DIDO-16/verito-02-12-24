import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface MileageChartProps {
  mileage: number[];
  dates: string[];
}

export const MileageChart: React.FC<MileageChartProps> = ({ mileage, dates }) => {
  const data = mileage.map((value, index) => ({
    date: new Date(dates[index]).toLocaleDateString(),
    mileage: value,
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Mileage History</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="mileage"
              stroke="#f97316"
              strokeWidth={2}
              dot={{ fill: '#f97316' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};