/**
 * Validate and apply coupon codes
 */

export interface CouponValidationResult {
  isValid: boolean;
  discountPercent: number;
  discountAmount: number;
  message: string;
}

/**
 * Validate a coupon code and return discount information
 */
export const validateCoupon = (couponCode: string, subtotal: number): CouponValidationResult => {
  // Convert to uppercase for case-insensitive matching
  const code = couponCode.toUpperCase().trim();
  
  // Define valid coupon codes and their discounts
  const validCoupons: Record<string, number> = {
    // Popular promotional codes with specific percentages
    'WELCOME10': 10,    // 10% off for new customers
    'FIRST15': 15,      // 15% off for first purchase
    'SAVE20': 20,       // 20% off general savings
    'BULK25': 25,       // 25% off for bulk orders
    'PREMIUM30': 30,    // 30% off premium products
    
    // Product category codes
    'ROBUST10': 10,     // 10% off Robust products
    'ROBUST15': 15,     // 15% off Robust products
    'ROBUST20': 20,     // 20% off Robust products
    'ROBUST25': 25,     // 25% off Robust products
    'ROBUST30': 30,     // 30% off Robust products
    
    // Equipment type codes
    'RACK10': 10,       // 10% off Power Racks
    'RACK15': 15,       // 15% off Power Racks
    'RACK20': 20,       // 20% off Power Racks
    'DUMBBELL10': 10,   // 10% off Dumbbells
    'DUMBBELL15': 15,   // 15% off Dumbbells
    'DUMBBELL20': 20,   // 20% off Dumbbells
    'BARBELL10': 10,    // 10% off Barbells
    'BARBELL15': 15,    // 15% off Barbells
    'BARBELL20': 20,    // 20% off Barbells
    
    // Special occasion codes
    'FITNESS10': 10,    // 10% off fitness equipment
    'GYM15': 15,        // 15% off gym equipment
    'HOME20': 20,       // 20% off home gym setup
    'STUDIO25': 25,     // 25% off studio equipment
    
    // Legacy codes (keeping for backward compatibility)
    'ROB10': 10, 'ROB15': 15, 'ROB20': 20, 'ROB25': 25, 'ROB30': 30,
    'POW10': 10, 'POW15': 15, 'POW20': 20, 'POW25': 25, 'POW30': 30,
    'DUM10': 10, 'DUM15': 15, 'DUM20': 20, 'DUM25': 25, 'DUM30': 30,
    'BAR10': 10, 'BAR15': 15, 'BAR20': 20, 'BAR25': 25, 'BAR30': 30,
    'BEN10': 10, 'BEN15': 15, 'BEN20': 20, 'BEN25': 25, 'BEN30': 30,
    'ACC10': 10, 'ACC15': 15, 'ACC20': 20, 'ACC25': 25, 'ACC30': 30,
    'OTH10': 10, 'OTH15': 15, 'OTH20': 20, 'OTH25': 25, 'OTH30': 30,
  };

  // Check if coupon exists
  if (!validCoupons[code]) {
    return {
      isValid: false,
      discountPercent: 0,
      discountAmount: 0,
      message: 'Invalid coupon code. Please check and try again.'
    };
  }

  const discountPercent = validCoupons[code];
  const discountAmount = (subtotal * discountPercent) / 100;

  // Minimum order amount check (optional)
  const minimumOrder = 1000;
  if (subtotal < minimumOrder) {
    return {
      isValid: false,
      discountPercent: 0,
      discountAmount: 0,
      message: `Minimum order amount of ₹${minimumOrder} required for this coupon.`
    };
  }

  return {
    isValid: true,
    discountPercent,
    discountAmount,
    message: `🎉 ${discountPercent}% OFF applied! You saved ₹${Math.round(discountAmount)}.`
  };
};

/**
 * Get all available coupon codes for display
 */
export const getAvailableCoupons = (): string[] => {
  return [
    'ROB10', 'ROB15', 'ROB20', 'ROB25', 'ROB30',
    'POW10', 'POW15', 'POW20', 'POW25', 'POW30',
    'DUM10', 'DUM15', 'DUM20', 'DUM25', 'DUM30',
    'BAR10', 'BAR15', 'BAR20', 'BAR25', 'BAR30',
    'BEN10', 'BEN15', 'BEN20', 'BEN25', 'BEN30',
    'ACC10', 'ACC15', 'ACC20', 'ACC25', 'ACC30',
    'OTH10', 'OTH15', 'OTH20', 'OTH25', 'OTH30',
    'WELCOME10', 'FIRST15', 'SAVE20', 'BULK25', 'PREMIUM30'
  ];
};
