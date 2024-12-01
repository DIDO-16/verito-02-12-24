import React from 'react';
import { Card, Title, BarChart } from '@tremor/react';

const chartdata = [
  { region: 'Alger', 'Inspections': 456 },
  { region: 'Oran', 'Inspections': 351 },
  { region: 'Constantine', 'Inspections': 271 },
  { region: 'Annaba', 'Inspections': 191 },
  { region: 'Sétif', 'Inspections': 179 },
];

export const InspectionsByRegion: React.FC = () => {
  return (
    <Card className="mt-6">
      <Title>Inspections par Wilaya</Title>
      <BarChart
        className="mt-6"
        data={chartdata}
        index="region"
        categories={['Inspections']}
        colors={['#3B82F6']} // Bright Blue
        showAnimation={true}
        showLegend={false}
        showGridLines={false}
        valueFormatter={(value) => `${value} inspections`}
        yAxisWidth={48}
      />
    </Card>
  );
};