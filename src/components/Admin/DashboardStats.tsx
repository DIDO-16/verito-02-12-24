import React from 'react';
import { motion } from 'framer-motion';
import { Car, Wrench, AlertTriangle, Building2 } from 'lucide-react';
import { StatsCard } from './StatsCard';

export const DashboardStats: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      <StatsCard
        title="Centres Actifs"
        value={42}
        icon={Building2}
        trend={+8}
        trendLabel="vs dernier mois"
      />
      <StatsCard
        title="Véhicules Inspectés"
        value={1234}
        icon={Car}
        trend={+15}
        trendLabel="vs dernier mois"
      />
      <StatsCard
        title="Inspections"
        value={2567}
        icon={Wrench}
        trend={+12}
        trendLabel="vs dernier mois"
      />
      <StatsCard
        title="Anomalies Majeures"
        value={89}
        icon={AlertTriangle}
        trend={-5}
        trendColor="green"
        trendLabel="vs dernier mois"
      />
    </motion.div>
  );
};