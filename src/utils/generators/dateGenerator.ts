export const generateQuarterlyDates = (
  startYear: number,
  endYear: number
): string[] => {
  const dates: string[] = [];
  
  for (let year = startYear; year <= endYear; year++) {
    for (let quarter = 0; quarter < 4; quarter++) {
      const month = quarter * 3 + 1 + Math.floor(Math.random() * 2);
      const day = 1 + Math.floor(Math.random() * 28);
      dates.push(
        `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      );
    }
  }
  
  return dates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
};

export const generateRandomDate = (start: Date, end: Date): string => {
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return randomDate.toISOString().split('T')[0];
};