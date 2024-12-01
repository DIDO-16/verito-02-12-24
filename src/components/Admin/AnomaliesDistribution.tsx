import React from 'react';
import { Card, Title, DonutChart } from '@tremor/react';

const anomalies = [
  { name: 'Freins', value: 234 },
  { name: 'Moteur', value: 189 },
  { name: 'Suspension', value: 156 },
  { name: 'Éclairage', value: 123 },
  { name: 'Carrosserie', value: 87 },
];

const customColors = [
  '#EF4444', // Red
  '#F59E0B', // Amber
  '#10B981', // Emerald
  '#3B82F6', // Blue
  '#8B5CF6', // Purple
];

export const AnomaliesDistribution: React.FC = () => {
  return (
    <Card className="mt-6">
      <Title>Distribution des Anomalies</Title>
      <DonutChart
        className="mt-6"
        data={anomalies}
        category="value"
        index="name"
        colors={customColors}
        showAnimation={true}
        valueFormatter={(value) => `${value} cas`}
      />
    </Card>
  );
};