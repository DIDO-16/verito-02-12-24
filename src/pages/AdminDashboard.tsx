import React from 'react';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { DashboardStats } from '../components/Admin/DashboardStats';
import { InspectionsByRegion } from '../components/Admin/InspectionsByRegion';
import { AnomaliesDistribution } from '../components/Admin/AnomaliesDistribution';
import { ActiveCenters } from '../components/Admin/ActiveCenters';
import { VehicleFleetDistribution } from '../components/Admin/VehicleFleetDistribution';
import { InspectionTrends } from '../components/Admin/InspectionTrends';
import { VehicleAgeDistribution } from '../components/Admin/VehicleAgeDistribution';

export const AdminDashboard: React.FC = () => {
  const { user } = useAuthStore();

  if (!user || user.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord Administrateur</h1>
          <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
            {new Date().toLocaleDateString()}
          </span>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <InspectionTrends />
          <VehicleFleetDistribution />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <InspectionsByRegion />
          <AnomaliesDistribution />
        </div>

        <div className="mt-8">
          <VehicleAgeDistribution />
        </div>

        <div className="mt-8">
          <ActiveCenters />
        </div>
      </motion.div>
    </div>
  );
};