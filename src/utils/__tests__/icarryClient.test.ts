import { getMockICarryClient } from '../icarryClient';

describe('iCarry Mock Client - Shipping Pincode and Charges', () => {
  const mockClient = getMockICarryClient();

  describe('Dynamic Shipping Pricing Based on Pincode', () => {
    test('Maharashtra pincodes should return ₹300', async () => {
      const testPincodes = ['400001', '422101', '411001', '431001', '440001'];
      
      for (const pincode of testPincodes) {
        const quote = await mockClient.getQuote({
          originPincode: '422101',
          destinationPincode: pincode,
          weightKg: 5,
        });
        
        expect(quote.amount).toBe(300);
        expect(quote.currency).toBe('INR');
        expect(quote.carrier).toBe('Mock Carrier');
        expect(quote.service).toBe('STANDARD');
      }
    });

    test('Delhi pincodes should return ₹400', async () => {
      const testPincodes = ['110001', '110002', '110003', '110010', '110099'];
      
      for (const pincode of testPincodes) {
        const quote = await mockClient.getQuote({
          originPincode: '422101',
          destinationPincode: pincode,
          weightKg: 5,
        });
        
        expect(quote.amount).toBe(400);
        expect(quote.currency).toBe('INR');
      }
    });

    test('Bangalore pincodes should return ₹450', async () => {
      const testPincodes = ['560001', '560002', '560003', '560010', '560099'];
      
      for (const pincode of testPincodes) {
        const quote = await mockClient.getQuote({
          originPincode: '422101',
          destinationPincode: pincode,
          weightKg: 5,
        });
        
        expect(quote.amount).toBe(450);
        expect(quote.currency).toBe('INR');
      }
    });

    test('Chennai pincodes should return ₹550', async () => {
      const testPincodes = ['600001', '600002', '600003', '600010', '600099'];
      
      for (const pincode of testPincodes) {
        const quote = await mockClient.getQuote({
          originPincode: '422101',
          destinationPincode: pincode,
          weightKg: 5,
        });
        
        expect(quote.amount).toBe(550);
        expect(quote.currency).toBe('INR');
      }
    });

    test('Kolkata pincodes should return ₹600', async () => {
      const testPincodes = ['700001', '700002', '700003', '700010', '700099'];
      
      for (const pincode of testPincodes) {
        const quote = await mockClient.getQuote({
          originPincode: '422101',
          destinationPincode: pincode,
          weightKg: 5,
        });
        
        expect(quote.amount).toBe(600);
        expect(quote.currency).toBe('INR');
      }
    });

    test('Other pincodes should return ₹500 (default)', async () => {
      const testPincodes = ['800001', '500001', '300001', '200001', '100001'];
      
      for (const pincode of testPincodes) {
        const quote = await mockClient.getQuote({
          originPincode: '422101',
          destinationPincode: pincode,
          weightKg: 5,
        });
        
        expect(quote.amount).toBe(500);
        expect(quote.currency).toBe('INR');
      }
    });
  });

  describe('Edge Cases and Validation', () => {
    test('Should handle invalid pincode gracefully', async () => {
      const quote = await mockClient.getQuote({
        originPincode: '422101',
        destinationPincode: '000000',
        weightKg: 5,
      });
      
      expect(quote.amount).toBe(500); // Should default to standard rate
      expect(quote.currency).toBe('INR');
    });

    test('Should handle very large pincode numbers', async () => {
      const quote = await mockClient.getQuote({
        originPincode: '422101',
        destinationPincode: '999999',
        weightKg: 5,
      });
      
      expect(quote.amount).toBe(500); // Should default to standard rate
      expect(quote.currency).toBe('INR');
    });

    test('Should handle different weight values', async () => {
      const weights = [1, 5, 10, 20, 50];
      
      for (const weight of weights) {
        const quote = await mockClient.getQuote({
          originPincode: '422101',
          destinationPincode: '400001', // Maharashtra
          weightKg: weight,
        });
        
        // Weight doesn't affect mock pricing, but should return consistent result
        expect(quote.amount).toBe(300);
        expect(quote.currency).toBe('INR');
      }
    });

    test('Should handle different origin pincodes', async () => {
      const origins = ['400001', '110001', '560001', '600001', '700001'];
      
      for (const origin of origins) {
        const quote = await mockClient.getQuote({
          originPincode: origin,
          destinationPincode: '400001', // Maharashtra destination
          weightKg: 5,
        });
        
        // Origin doesn't affect mock pricing, but should return consistent result
        expect(quote.amount).toBe(300);
        expect(quote.currency).toBe('INR');
      }
    });
  });

  describe('Response Structure Validation', () => {
    test('Should return proper quote structure', async () => {
      const quote = await mockClient.getQuote({
        originPincode: '422101',
        destinationPincode: '400001',
        weightKg: 5,
      });
      
      expect(quote).toHaveProperty('carrier');
      expect(quote).toHaveProperty('service');
      expect(quote).toHaveProperty('amount');
      expect(quote).toHaveProperty('currency');
      
      expect(typeof quote.carrier).toBe('string');
      expect(typeof quote.service).toBe('string');
      expect(typeof quote.amount).toBe('number');
      expect(typeof quote.currency).toBe('string');
      
      expect(quote.carrier).toBe('Mock Carrier');
      expect(quote.service).toBe('STANDARD');
      expect(quote.currency).toBe('INR');
      expect(quote.amount).toBeGreaterThan(0);
    });
  });

  describe('Pricing Logic Validation', () => {
    test('Should return correct pricing for all major cities', async () => {
      const testCases = [
        { pincode: '400001', expected: 300, city: 'Mumbai' },
        { pincode: '422101', expected: 300, city: 'Nashik' },
        { pincode: '110001', expected: 400, city: 'Delhi' },
        { pincode: '560001', expected: 450, city: 'Bangalore' },
        { pincode: '600001', expected: 550, city: 'Chennai' },
        { pincode: '700001', expected: 600, city: 'Kolkata' },
        { pincode: '800001', expected: 500, city: 'Patna' },
        { pincode: '500001', expected: 500, city: 'Hyderabad' },
      ];
      
      for (const testCase of testCases) {
        const quote = await mockClient.getQuote({
          originPincode: '422101',
          destinationPincode: testCase.pincode,
          weightKg: 5,
        });
        
        expect(quote.amount).toBe(testCase.expected);
        console.log(`${testCase.city} (${testCase.pincode}): ₹${quote.amount}`);
      }
    });
  });
});
