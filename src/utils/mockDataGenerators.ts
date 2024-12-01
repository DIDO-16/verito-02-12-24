import { VehicleHistory } from '../types';
import { generateVIN } from './generators/vinGenerator';
import { generateMileageHistory } from './mileageGenerator';
import { generateQuarterlyDates } from './generators/dateGenerator';
import { generateOwnershipHistory } from './generators/ownershipGenerator';
import { generateAccidents } from './generators/accidentGenerator';
import { algerianCities } from './constants/locations';
import { minorFindings, majorFindings, recommendations } from './vehicleFindings';

const generateTechnicalHistory = (
  startYear: number,
  hasFraud: boolean,
  mileageDates: string[]
) => {
  const inspections = [];
  const endYear = 2024;
  const years = endYear - startYear + 1;
  
  for (let i = 0; i < years * 4; i++) {
    const date = mileageDates[i];
    const severityRandom = Math.random();
    const severity = severityRandom > 0.7 ? 'major' : 'minor';
    
    const inspection = {
      date,
      type: 'Contrôle Technique Périodique',
      findings: [],
      severity,
      recommendations: []
    };
    
    if (hasFraud && i === Math.floor(years * 4 / 2)) {
      inspection.findings.push(
        'Suspicion de fraude au kilométrage',
        'Incohérence dans les relevés kilométriques',
        'Traces de manipulation du compteur'
      );
      inspection.severity = 'major';
      inspection.recommendations.push(
        'Signalement aux autorités compétentes',
        'Expertise approfondie requise',
        'Historique complet à vérifier'
      );
    }
    
    const findingsCount = Math.floor(Math.random() * 3) + 1;
    const findingsList = severity === 'major' ? majorFindings : minorFindings;
    const recommendationsList = recommendations[severity];
    
    for (let j = 0; j < findingsCount; j++) {
      inspection.findings.push(
        findingsList[Math.floor(Math.random() * findingsList.length)]
      );
      inspection.recommendations.push(
        recommendationsList[Math.floor(Math.random() * recommendationsList.length)]
      );
    }
    
    inspections.push(inspection);
  }
  
  return inspections;
};

export const generateVehicleHistory = ({
  make,
  model,
  startYear,
  hasFraud
}: {
  make: string;
  model: string;
  startYear: number;
  hasFraud: boolean;
}): VehicleHistory => {
  const endYear = 2024;
  const dates = generateQuarterlyDates(startYear, endYear);
  const { mileages } = generateMileageHistory(startYear, hasFraud);
  const { owners, usage } = generateOwnershipHistory(dates[0], dates[dates.length - 1]);
  
  const randomCity = algerianCities[Math.floor(Math.random() * algerianCities.length)];
  
  return {
    vin: generateVIN(make),
    make,
    model,
    year: startYear,
    mileage: mileages,
    mileageDates: dates,
    technicalHistory: generateTechnicalHistory(startYear, hasFraud, dates),
    locations: [
      {
        date: dates[0],
        country: 'Algeria',
        city: randomCity.name
      }
    ],
    owners,
    usage,
    accidents: generateAccidents(dates[0], dates[dates.length - 1], hasFraud),
    administrativeStatus: {
      isLiened: Math.random() > 0.9,
      registrationDate: dates[0],
      lastUpdateDate: dates[dates.length - 1]
    }
  };
};