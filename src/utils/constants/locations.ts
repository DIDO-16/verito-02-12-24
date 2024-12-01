export const algerianCities = [
  {
    name: 'Alger',
    wilaya: 'Alger',
    population: 3500000,
    vehicleDensity: 'high'
  },
  {
    name: 'Oran',
    wilaya: 'Oran',
    population: 1500000,
    vehicleDensity: 'high'
  },
  {
    name: 'Constantine',
    wilaya: 'Constantine',
    population: 1000000,
    vehicleDensity: 'medium'
  },
  {
    name: 'Annaba',
    wilaya: 'Annaba',
    population: 800000,
    vehicleDensity: 'medium'
  },
  {
    name: 'Sétif',
    wilaya: 'Sétif',
    population: 700000,
    vehicleDensity: 'medium'
  },
  {
    name: 'Batna',
    wilaya: 'Batna',
    population: 600000,
    vehicleDensity: 'medium'
  }
] as const;

export type AlgerianCity = typeof algerianCities[number]['name'];
export type Wilaya = typeof algerianCities[number]['wilaya'];