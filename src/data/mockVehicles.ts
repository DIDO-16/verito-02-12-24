import { VehicleHistory } from '../types';

export const mockVehicles: VehicleHistory[] = [
  {
    // Vehicle 1: Renault Symbol with mileage fraud
    vin: 'VF1LBN40544372198',
    make: 'Renault',
    model: 'Symbol',
    year: 2020,
    mileage: [
      15000, 32000, 45000, 62000, 78000, 92000, 45000, 58000, 72000, 88000,
      102000, 118000, 132000, 145000, 160000, 175000
    ],
    mileageDates: [
      '2020-03-15', '2020-06-20', '2020-09-10', '2020-12-05',
      '2021-03-18', '2021-06-25', '2021-09-15', '2021-12-10', // Fraud occurs here
      '2022-03-20', '2022-06-22', '2022-09-12', '2022-12-08',
      '2023-03-15', '2023-06-20', '2023-09-10', '2023-12-05'
    ],
    technicalHistory: [
      {
        date: '2020-03-15',
        type: 'Contrôle Technique Initial',
        findings: ['État général satisfaisant', 'Plaquettes de frein à surveiller'],
        severity: 'minor',
        recommendations: ['Surveillance des plaquettes lors du prochain entretien'],
        center: {
          id: 'CTC001',
          name: 'CTC Alger Centre',
          location: {
            wilaya: 'Alger',
            commune: 'Alger Centre'
          },
          inspector: {
            id: 'CTC001-INS1',
            name: 'Karim Benali',
            certification: 'Expert Technique Automobile Niveau 2'
          }
        }
      },
      {
        date: '2021-03-18',
        type: 'Contrôle Technique Périodique',
        findings: ['Usure des pneus avant', 'Jeu dans la direction'],
        severity: 'minor',
        recommendations: ['Remplacement des pneus conseillé', 'Révision direction recommandée'],
        center: {
          id: 'CTC002',
          name: 'CTC Oran Est',
          location: {
            wilaya: 'Oran',
            commune: 'Bir El Djir'
          },
          inspector: {
            id: 'CTC002-INS1',
            name: 'Ahmed Mansouri',
            certification: 'Expert Technique Automobile Niveau 2'
          }
        }
      },
      {
        date: '2021-09-15',
        type: 'Contrôle Technique Exceptionnel',
        findings: [
          'Suspicion de fraude au kilométrage',
          'Incohérence dans les relevés kilométriques',
          'Traces de manipulation du compteur'
        ],
        severity: 'major',
        recommendations: [
          'Signalement aux autorités compétentes',
          'Expertise approfondie requise',
          'Vérification complète de l\'historique'
        ],
        center: {
          id: 'CTC002',
          name: 'CTC Oran Est',
          location: {
            wilaya: 'Oran',
            commune: 'Bir El Djir'
          },
          inspector: {
            id: 'CTC002-INS2',
            name: 'Mohamed Larbi',
            certification: 'Expert Technique Automobile Niveau 3'
          }
        }
      },
      {
        date: '2022-06-22',
        type: 'Contrôle Technique Périodique',
        findings: [
          'Système de freinage défectueux',
          'Corrosion importante du châssis',
          'Fuites d\'huile moteur'
        ],
        severity: 'major',
        recommendations: [
          'Réparation urgente du système de freinage',
          'Traitement anti-corrosion nécessaire',
          'Révision complète du moteur'
        ],
        center: {
          id: 'CTC003',
          name: 'CTC Constantine',
          location: {
            wilaya: 'Constantine',
            commune: 'Constantine'
          },
          inspector: {
            id: 'CTC003-INS1',
            name: 'Ali Boudiaf',
            certification: 'Expert Technique Automobile Niveau 2'
          }
        }
      },
      {
        date: '2023-06-20',
        type: 'Contrôle Technique Périodique',
        findings: [
          'Amortisseurs arrière défectueux',
          'Système d\'échappement endommagé'
        ],
        severity: 'major',
        recommendations: [
          'Remplacement des amortisseurs',
          'Réparation du système d\'échappement'
        ],
        center: {
          id: 'CTC001',
          name: 'CTC Alger Centre',
          location: {
            wilaya: 'Alger',
            commune: 'Alger Centre'
          },
          inspector: {
            id: 'CTC001-INS2',
            name: 'Sofiane Merah',
            certification: 'Expert Technique Automobile Niveau 2'
          }
        }
      }
    ],
    locations: [
      {
        date: '2020-03-15',
        country: 'Algeria',
        city: 'Alger'
      },
      {
        date: '2021-06-25',
        country: 'Algeria',
        city: 'Oran'
      },
      {
        date: '2022-03-20',
        country: 'Algeria',
        city: 'Constantine'
      },
      {
        date: '2023-06-20',
        country: 'Algeria',
        city: 'Alger'
      }
    ],
    owners: [
      {
        type: 'individual',
        startDate: '2020-03-15',
        endDate: '2021-06-25',
        details: {
          name: 'Hamid Benchaabane',
          type: 'private',
          usage: 'Usage personnel quotidien'
        }
      },
      {
        type: 'company',
        startDate: '2021-06-25',
        endDate: '2022-03-20',
        details: {
          name: 'TransAlgérie SARL',
          type: 'fleet',
          usage: 'Véhicule de service commercial'
        }
      },
      {
        type: 'individual',
        startDate: '2022-03-20',
        endDate: null,
        details: {
          name: 'Kamel Benmansour',
          type: 'private',
          usage: 'Usage familial'
        }
      }
    ],
    usage: [
      {
        type: 'personal',
        startDate: '2020-03-15',
        endDate: '2021-06-25',
        details: {
          description: 'Utilisation urbaine quotidienne',
          mileageType: 'city',
          purpose: 'Déplacements personnels'
        }
      },
      {
        type: 'commercial',
        startDate: '2021-06-25',
        endDate: '2022-03-20',
        details: {
          description: 'Service commercial régional',
          mileageType: 'highway',
          purpose: 'Visites clients et livraisons'
        }
      },
      {
        type: 'personal',
        startDate: '2022-03-20',
        endDate: null,
        details: {
          description: 'Usage familial mixte',
          mileageType: 'mixed',
          purpose: 'Déplacements familiaux et loisirs'
        }
      }
    ],
    accidents: [
      {
        date: '2021-08-30',
        description: 'Collision frontale avec dommages importants, possible modification du compteur kilométrique suite aux réparations',
        severity: 'major',
        location: {
          city: 'Oran',
          wilaya: 'Oran'
        }
      }
    ],
    administrativeStatus: {
      isLiened: true,
      registrationDate: '2020-03-15',
      lastUpdateDate: '2023-12-05',
      registrationLocation: {
        wilaya: 'Alger',
        commune: 'Alger Centre'
      }
    }
  },
  {
    // Vehicle 2: Toyota Corolla with normal history
    vin: 'JTDDH3FE2F3394527',
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    mileage: [
      12000, 25000, 38000, 52000, 65000, 78000, 92000, 105000,
      118000, 132000, 145000, 158000, 172000, 185000, 198000, 212000
    ],
    mileageDates: [
      '2020-03-10', '2020-06-15', '2020-09-20', '2020-12-15',
      '2021-03-12', '2021-06-18', '2021-09-22', '2021-12-15',
      '2022-03-18', '2022-06-20', '2022-09-25', '2022-12-15',
      '2023-03-20', '2023-06-25', '2023-09-18', '2023-12-15'
    ],
    technicalHistory: [
      {
        date: '2020-03-10',
        type: 'Contrôle Technique Initial',
        findings: ['Véhicule neuf en excellent état'],
        severity: 'minor',
        recommendations: ['Suivre le planning d\'entretien constructeur'],
        center: {
          id: 'CTC004',
          name: 'CTC Annaba',
          location: {
            wilaya: 'Annaba',
            commune: 'Annaba'
          },
          inspector: {
            id: 'CTC004-INS1',
            name: 'Reda Meziane',
            certification: 'Expert Technique Automobile Niveau 2'
          }
        }
      },
      {
        date: '2021-03-12',
        type: 'Contrôle Technique Périodique',
        findings: [
          'Usure normale des plaquettes de frein',
          'Pneumatiques en bon état'
        ],
        severity: 'minor',
        recommendations: [
          'Remplacement préventif des plaquettes recommandé',
          'Maintenir la pression des pneus'
        ],
        center: {
          id: 'CTC005',
          name: 'CTC Sétif',
          location: {
            wilaya: 'Sétif',
            commune: 'Sétif'
          },
          inspector: {
            id: 'CTC005-INS1',
            name: 'Nadir Bouaziz',
            certification: 'Expert Technique Automobile Niveau 2'
          }
        }
      },
      {
        date: '2022-03-18',
        type: 'Contrôle Technique Périodique',
        findings: [
          'Légère usure des amortisseurs avant',
          'Batterie à remplacer prochainement'
        ],
        severity: 'minor',
        recommendations: [
          'Prévoir le remplacement des amortisseurs',
          'Surveillance de la batterie conseillée'
        ],
        center: {
          id: 'CTC006',
          name: 'CTC Batna',
          location: {
            wilaya: 'Batna',
            commune: 'Batna'
          },
          inspector: {
            id: 'CTC006-INS1',
            name: 'Salim Hadj',
            certification: 'Expert Technique Automobile Niveau 2'
          }
        }
      },
      {
        date: '2023-03-20',
        type: 'Contrôle Technique Périodique',
        findings: [
          'Système de freinage en bon état',
          'Légère usure des pneus arrière'
        ],
        severity: 'minor',
        recommendations: [
          'Rotation des pneumatiques conseillée',
          'Maintenir le suivi régulier'
        ],
        center: {
          id: 'CTC004',
          name: 'CTC Annaba',
          location: {
            wilaya: 'Annaba',
            commune: 'Annaba'
          },
          inspector: {
            id: 'CTC004-INS2',
            name: 'Farid Benmalek',
            certification: 'Expert Technique Automobile Niveau 2'
          }
        }
      }
    ],
    locations: [
      {
        date: '2020-03-10',
        country: 'Algeria',
        city: 'Annaba'
      },
      {
        date: '2021-03-12',
        country: 'Algeria',
        city: 'Sétif'
      },
      {
        date: '2022-03-18',
        country: 'Algeria',
        city: 'Batna'
      },
      {
        date: '2023-03-20',
        country: 'Algeria',
        city: 'Annaba'
      }
    ],
    owners: [
      {
        type: 'individual',
        startDate: '2020-03-10',
        endDate: '2021-09-22',
        details: {
          name: 'Sarah Mansouri',
          type: 'private',
          usage: 'Usage personnel et familial'
        }
      },
      {
        type: 'individual',
        startDate: '2021-09-22',
        endDate: null,
        details: {
          name: 'Yacine Belhadj',
          type: 'private',
          usage: 'Usage professionnel et familial'
        }
      }
    ],
    usage: [
      {
        type: 'personal',
        startDate: '2020-03-10',
        endDate: '2021-09-22',
        details: {
          description: 'Usage familial principalement urbain',
          mileageType: 'city',
          purpose: 'Déplacements quotidiens et familiaux'
        }
      },
      {
        type: 'personal',
        startDate: '2021-09-22',
        endDate: null,
        details: {
          description: 'Usage mixte professionnel et familial',
          mileageType: 'mixed',
          purpose: 'Déplacements professionnels et familiaux'
        }
      }
    ],
    accidents: [
      {
        date: '2021-07-15',
        description: 'Léger accrochage sur parking, dommages superficiels',
        severity: 'minor',
        location: {
          city: 'Sétif',
          wilaya: 'Sétif'
        }
      }
    ],
    administrativeStatus: {
      isLiened: false,
      registrationDate: '2020-03-10',
      lastUpdateDate: '2023-12-15',
      registrationLocation: {
        wilaya: 'Annaba',
        commune: 'Annaba'
      }
    }
  }
];