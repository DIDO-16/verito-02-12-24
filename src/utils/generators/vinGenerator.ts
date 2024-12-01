const VALID_CHARS = '0123456789ABCDEFGHJKLMNPRSTUVWXYZ';
const WMI_CODES = {
  'Renault': 'VF1',
  'Peugeot': 'VF3',
  'Volkswagen': 'WVW',
  'Toyota': 'JT1',
  'Hyundai': 'KMH',
  'Dacia': 'UU1'
};

export const generateVIN = (make: string): string => {
  const wmi = WMI_CODES[make as keyof typeof WMI_CODES] || 'XXX';
  const serialNumber = Array.from(
    { length: 14 }, 
    () => VALID_CHARS[Math.floor(Math.random() * VALID_CHARS.length)]
  ).join('');
  
  return `${wmi}${serialNumber}`;
};