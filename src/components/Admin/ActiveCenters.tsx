import React from 'react';
import { Card, Title, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Badge } from '@tremor/react';
import { MapPin, Calendar } from 'lucide-react';

const centers = [
  {
    id: 1,
    name: 'CTC Alger Centre',
    location: 'Alger',
    lastActive: '2024-02-28',
    status: 'active'
  },
  {
    id: 2,
    name: 'CTC Oran Est',
    location: 'Oran',
    lastActive: '2024-02-27',
    status: 'active'
  },
  {
    id: 3,
    name: 'CTC Constantine',
    location: 'Constantine',
    lastActive: '2024-02-26',
    status: 'active'
  },
];

export const ActiveCenters: React.FC = () => {
  return (
    <Card className="mt-6">
      <Title>Centres de Contrôle Actifs</Title>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Centre</TableHeaderCell>
            <TableHeaderCell>Localisation</TableHeaderCell>
            <TableHeaderCell>Dernière Activité</TableHeaderCell>
            <TableHeaderCell>Statut</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {centers.map((center) => (
            <TableRow key={center.id}>
              <TableCell>{center.name}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>{center.location}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>{new Date(center.lastActive).toLocaleDateString()}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge color="emerald">Actif</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};