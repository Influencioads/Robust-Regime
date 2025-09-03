export interface TaxCalculation {
  cgst: number;
  sgst: number;
  igst: number;
  totalTax: number;
  taxBreakdown: string;
}

export const calculateTax = (amount: number, state: string): TaxCalculation => {
  const isMaharashtra = state.toLowerCase() === 'maharashtra';
  
  if (isMaharashtra) {
    // Maharashtra: CGST (9%) + SGST (9%) = 18% total
    const cgst = amount * 0.09;
    const sgst = amount * 0.09;
    const totalTax = cgst + sgst;
    
    return {
      cgst,
      sgst,
      igst: 0,
      totalTax,
      taxBreakdown: `CGST (9%) + SGST (9%) = 18%`
    };
  } else {
    // Other states: IGST (18%)
    const igst = amount * 0.18;
    
    return {
      cgst: 0,
      sgst: 0,
      igst,
      totalTax: igst,
      taxBreakdown: `IGST (18%)`
    };
  }
};

// Derive Indian state from a 6-digit pincode (best-effort ranges)
// Note: These ranges are heuristic and cover major commonly-used bands
export const getStateFromPincode = (pincode: string): string => {
  const pin = parseInt(pincode, 10);

  if (Number.isNaN(pin) || pincode.length !== 6) {
    return 'Maharashtra';
  }

  // Maharashtra
  if ((pin >= 400000 && pin <= 449999) || (pin >= 410000 && pin <= 449999) || (pin >= 450000 && pin <= 450999)) {
    return 'Maharashtra';
  }

  // Goa
  if (pin >= 403000 && pin <= 403999) {
    return 'Goa';
  }

  // Delhi
  if (pin >= 110000 && pin <= 110099) {
    return 'Delhi';
  }

  // Karnataka
  if (pin >= 560000 && pin <= 599999) {
    return 'Karnataka';
  }

  // Tamil Nadu
  if (pin >= 600000 && pin <= 639999) {
    return 'Tamil Nadu';
  }

  // Gujarat
  if (pin >= 360000 && pin <= 399999) {
    return 'Gujarat';
  }

  // Rajasthan
  if (pin >= 300000 && pin <= 349999) {
    return 'Rajasthan';
  }

  // Uttar Pradesh
  if ((pin >= 201000 && pin <= 285999) || (pin >= 209000 && pin <= 209999) || (pin >= 226000 && pin <= 226999)) {
    return 'Uttar Pradesh';
  }

  // Punjab
  if (pin >= 140000 && pin <= 160999) {
    return 'Punjab';
  }

  // Haryana
  if (pin >= 121000 && pin <= 136999) {
    return 'Haryana';
  }

  // Kerala
  if (pin >= 670000 && pin <= 699999) {
    return 'Kerala';
  }

  // Andhra Pradesh
  if (pin >= 500000 && pin <= 534999) {
    return 'Andhra Pradesh';
  }

  // Telangana
  if (pin >= 500001 && pin <= 509999) {
    return 'Telangana';
  }

  // Madhya Pradesh
  if (pin >= 450000 && pin <= 489999) {
    return 'Madhya Pradesh';
  }

  // Bihar
  if (pin >= 800000 && pin <= 849999) {
    return 'Bihar';
  }

  // Odisha
  if (pin >= 750000 && pin <= 769999) {
    return 'Odisha';
  }

  // West Bengal
  if (pin >= 700000 && pin <= 749999) {
    return 'West Bengal';
  }

  // Assam
  if (pin >= 781000 && pin <= 788999) {
    return 'Assam';
  }

  // Jharkhand
  if (pin >= 829000 && pin <= 835999) {
    return 'Jharkhand';
  }

  // Chhattisgarh
  if (pin >= 490000 && pin <= 499999) {
    return 'Chhattisgarh';
  }

  // Uttarakhand
  if (pin >= 244000 && pin <= 263999) {
    return 'Uttarakhand';
  }

  // Himachal Pradesh
  if (pin >= 171000 && pin <= 177999) {
    return 'Himachal Pradesh';
  }

  // Jammu and Kashmir
  if (pin >= 180000 && pin <= 194999) {
    return 'Jammu and Kashmir';
  }

  // Ladakh
  if (pin >= 194000 && pin <= 194999) {
    return 'Ladakh';
  }

  return 'Maharashtra';
};

export const getIndianStates = (): string[] => {
  return [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Jammu and Kashmir',
    'Ladakh',
    'Lakshadweep',
    'Puducherry'
  ];
};
