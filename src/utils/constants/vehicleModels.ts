export const vehicleModels = [
  { 
    make: 'Renault',
    models: ['Symbol', 'Clio', 'Megane', 'Duster'],
    categories: ['compact', 'sedan', 'suv']
  },
  { 
    make: 'Peugeot',
    models: ['208', '308', '3008', '2008'],
    categories: ['compact', 'sedan', 'suv']
  },
  { 
    make: 'Volkswagen',
    models: ['Golf', 'Polo', 'Tiguan', 'Passat'],
    categories: ['compact', 'sedan', 'suv']
  },
  { 
    make: 'Toyota',
    models: ['Corolla', 'Yaris', 'Hilux', 'Land Cruiser'],
    categories: ['compact', 'sedan', 'pickup', 'suv']
  },
  { 
    make: 'Hyundai',
    models: ['i10', 'i20', 'Tucson', 'Santa Fe'],
    categories: ['compact', 'sedan', 'suv']
  },
  { 
    make: 'Dacia',
    models: ['Logan', 'Sandero', 'Duster'],
    categories: ['sedan', 'compact', 'suv']
  }
] as const;

export type VehicleMake = typeof vehicleModels[number]['make'];
export type VehicleModel = typeof vehicleModels[number]['models'][number];
export type VehicleCategory = typeof vehicleModels[number]['categories'][number];