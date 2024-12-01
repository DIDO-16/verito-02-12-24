interface MileageHistory {
  mileages: number[];
  dates: string[];
}

export const generateMileageHistory = (
  startYear: number,
  hasFraud: boolean,
  fraudType: 'rollback' | 'inconsistent' = 'rollback'
): MileageHistory => {
  const endYear = 2024;
  const years = endYear - startYear + 1;
  const mileages: number[] = [];
  const dates: string[] = [];
  
  let previousMileage = 0;
  const baseYearlyMileage = 15000 + Math.floor(Math.random() * 5000);

  for (let i = 0; i < years; i++) {
    let yearlyMileage = baseYearlyMileage + Math.floor(Math.random() * 3000);
    
    // Simulate mileage fraud in the middle of the history
    if (hasFraud && i === Math.floor(years / 2)) {
      if (fraudType === 'rollback') {
        yearlyMileage = -30000; // Significant rollback
      } else {
        yearlyMileage = 1000; // Suspiciously low increase
      }
    }
    
    previousMileage += yearlyMileage;
    mileages.push(previousMileage);
    
    // Generate realistic dates with quarterly checks
    for (let quarter = 0; quarter < 4; quarter++) {
      const month = quarter * 3 + 1 + Math.floor(Math.random() * 2);
      const day = 1 + Math.floor(Math.random() * 28);
      dates.push(`${startYear + i}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
    }
  }
  
  return { mileages, dates };
};