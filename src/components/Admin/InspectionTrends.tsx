import React from 'react';
import { Card, Title, AreaChart } from '@tremor/react';

const inspectionTrends = [
  {
    month: 'Jan 24',
    'Contrôles Initiaux': 345,
    'Contre-Visites': 123,
  },
  {
    month: 'Fév 24',
    'Contrôles Initiaux': 389,
    'Contre-Visites': 145,
  },
  {
    month: 'Mar 24',
    'Contrôles Initiaux': 432,
    'Contre-Visites': 156,
  },
  {
    month: 'Avr 24',
    'Contrôles Initiaux': 478,
    'Contre-Visites': 167,
  },
  {
    month: 'Mai 24',
    'Contrôles Initiaux': 512,
    'Contre-Visites': 189,
  },
  {
    month: 'Juin 24',
    'Contrôles Initiaux': 546,
    'Contre-Visites': 201,
  },
];

export const InspectionTrends: React.FC = () => {
  return (
    <Card className="mt-6">
      <Title>Évolution des Contrôles Techniques</Title>
      <AreaChart
        className="mt-6 h-72"
        data={inspectionTrends}
        index="month"
        categories={['Contrôles Initiaux', 'Contre-Visites']}
        colors={['#3B82F6', '#F59E0B']} // Bright Blue and Warm Amber
        valueFormatter={(number: number) => 
          `${new Intl.NumberFormat('fr').format(number)} contrôles`
        }
        showAnimation={true}
        showLegend={true}
        showGridLines={false}
      />
    </Card>
  );
};