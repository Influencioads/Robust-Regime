/**
 * Calculate discount percentage between original price and sale price
 */
export const calculateDiscountPercent = (originalPrice: number, salePrice: number): number => {
  if (originalPrice <= 0 || salePrice >= originalPrice) {
    return 0;
  }
  
  const discount = ((originalPrice - salePrice) / originalPrice) * 100;
  return Math.round(discount);
};

/**
 * Generate a coupon code based on product name and discount
 */
export const generateCouponCode = (productName: string, discountPercent: number): string => {
  // Extract first letters of words and add discount
  const initials = productName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, 3);
  
  return `${initials}${discountPercent}`;
};

/**
 * Get random discount percentage for products without sale price
 */
export const getRandomDiscount = (): number => {
  const discounts = [10, 15, 20, 25, 30];
  return discounts[Math.floor(Math.random() * discounts.length)];
};
