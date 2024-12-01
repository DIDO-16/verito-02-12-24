import React from 'react';
import { Card, Title, BarChart } from '@tremor/react';

const ageData = [
  { age: '0-3 ans', nombre: 1234 },
  { age: '4-7 ans', nombre: 2567 },
  { age: '8-11 ans', nombre: 3456 },
  { age: '12-15 ans', nombre: 2345 },
  { age: '16+ ans', nombre: 1567 },
];

const customColors = ['#10B981']; // Emerald Green

export const VehicleAgeDistribution: React.FC = () => {
  return (
    <Card className="mt-6">
      <Title>Distribution par Âge des Véhicules</Title>
      <BarChart
        className="mt-6 h-72"
        data={ageData}
        index="age"
        categories={['nombre']}
        colors={customColors}
        showAnimation={true}
        showLegend={false}
        showGridLines={false}
        valueFormatter={(number: number) => 
          `${new Intl.NumberFormat('fr').format(number)} véhicules`
        }
      />
    </Card>
  );
};