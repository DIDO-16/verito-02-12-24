import { generateRandomDate } from './dateGenerator';
import { VehicleHistory } from '../../types';

type OwnershipHistory = {
  owners: VehicleHistory['owners'];
  usage: VehicleHistory['usage'];
};

export const generateOwnershipHistory = (
  startDate: string,
  endDate: string
): OwnershipHistory => {
  const ownerCount = Math.floor(Math.random() * 2) + 1; // 1-2 owners
  const owners = [];
  const usage = [];
  
  for (let i = 0; i < ownerCount; i++) {
    const isCompany = Math.random() > 0.7;
    const ownerStartDate = i === 0 ? startDate : 
      generateRandomDate(new Date(startDate), new Date(endDate));
    
    owners.push({
      type: isCompany ? 'company' : 'individual',
      startDate: ownerStartDate,
      endDate: i === ownerCount - 1 ? null : ownerStartDate
    });

    usage.push({
      type: isCompany ? 'commercial' : 'personal',
      startDate: ownerStartDate,
      endDate: i === ownerCount - 1 ? null : ownerStartDate
    });
  }

  return { owners, usage };
};