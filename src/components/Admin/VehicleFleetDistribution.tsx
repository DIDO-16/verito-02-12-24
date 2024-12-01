import React from 'react';
import { Card, Title, DonutChart, Flex, Text } from '@tremor/react';

const fleetData = [
  { category: 'Véhicules Personnels', value: 3245 },
  { category: 'Véhicules Commerciaux', value: 1876 },
  { category: 'Transport en Commun', value: 892 },
  { category: 'Poids Lourds', value: 567 },
  { category: 'Véhicules Spéciaux', value: 234 },
];

const valueFormatter = (number: number) => 
  `${new Intl.NumberFormat('fr').format(number)} véhicules`;

const customColors = [
  '#3B82F6', // Bright Blue
  '#F59E0B', // Warm Amber
  '#10B981', // Emerald Green
  '#8B5CF6', // Vibrant Purple
  '#EC4899', // Pink
];

export const VehicleFleetDistribution: React.FC = () => {
  return (
    <Card className="mt-6">
      <Title>Répartition du Parc Automobile</Title>
      <Flex className="mt-4">
        <Text>Total: {fleetData.reduce((acc, curr) => acc + curr.value, 0)} véhicules</Text>
      </Flex>
      <DonutChart
        className="mt-6 h-80"
        data={fleetData}
        category="value"
        index="category"
        valueFormatter={valueFormatter}
        colors={customColors}
        showAnimation={true}
      />
    </Card>
  );
};