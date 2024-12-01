import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  trend: number;
  trendColor?: 'green' | 'red';
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  trendColor = trend >= 0 ? 'green' : 'red',
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className="bg-primary-100 p-3 rounded-full">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
      </div>
      <div className="mt-4">
        <span
          className={`inline-flex items-center text-sm ${
            trendColor === 'green' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {trend > 0 ? '+' : ''}
          {trend}%
          <span className="ml-1.5">vs last month</span>
        </span>
      </div>
    </div>
  );
};