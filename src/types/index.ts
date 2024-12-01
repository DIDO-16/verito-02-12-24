// ... [previous type definitions remain the same]

export interface TechnicalInspection {
  date: string;
  type: string;
  findings: string[];
  severity: 'minor' | 'major';
  recommendations: string[];
  center: {
    id: string;
    name: string;
    location: {
      wilaya: string;
      commune: string;
    };
    inspector: {
      id: string;
      name: string;
      certification: string;
    };
  };
}

export interface VehicleHistory {
  vin: string;
  make: string;
  model: string;
  year: number;
  mileage: number[];
  mileageDates: string[];
  technicalHistory: TechnicalInspection[];
  locations: {
    date: string;
    country: string;
    city: string;
  }[];
  owners: {
    type: 'individual' | 'company';
    startDate: string;
    endDate: string | null;
    details?: {
      name?: string;
      type?: 'private' | 'fleet' | 'rental' | 'government';
      usage?: string;
    };
  }[];
  usage: {
    type: 'personal' | 'commercial' | 'rental' | 'public';
    startDate: string;
    endDate: string | null;
    details?: {
      description?: string;
      mileageType?: 'city' | 'highway' | 'mixed';
      purpose?: string;
    };
  }[];
  accidents: {
    date: string;
    description: string;
    severity: 'minor' | 'major';
    location?: {
      city: string;
      wilaya: string;
    };
  }[];
  administrativeStatus: {
    isLiened: boolean;
    registrationDate: string;
    lastUpdateDate: string;
    registrationLocation?: {
      wilaya: string;
      commune: string;
    };
  };
}