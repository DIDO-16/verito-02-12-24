import { generateRandomDate } from './dateGenerator';
import { VehicleHistory } from '../../types';

const accidentDescriptions = {
  minor: [
    'Collision légère à basse vitesse',
    'Dommages superficiels sur le pare-chocs',
    'Rayures importantes sur la carrosserie',
    'Impact latéral mineur'
  ],
  major: [
    'Collision frontale avec dommages structurels',
    'Accident majeur avec déploiement des airbags',
    'Tonneau avec dommages importants',
    'Impact latéral sévère nécessitant remplacement de pièces majeures'
  ]
};

export const generateAccidents = (
  startDate: string,
  endDate: string,
  hasFraud: boolean
): VehicleHistory['accidents'] => {
  const accidents = [];
  const accidentCount = Math.floor(Math.random() * 2);
  
  if (hasFraud) {
    accidents.push({
      date: generateRandomDate(new Date(startDate), new Date(endDate)),
      description: 'Accident majeur avec dommages importants, possible modification du compteur kilométrique suite aux réparations',
      severity: 'major'
    });
  }

  for (let i = 0; i < accidentCount; i++) {
    const severity = Math.random() > 0.7 ? 'major' : 'minor';
    const descriptions = accidentDescriptions[severity];
    
    accidents.push({
      date: generateRandomDate(new Date(startDate), new Date(endDate)),
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      severity
    });
  }

  return accidents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};