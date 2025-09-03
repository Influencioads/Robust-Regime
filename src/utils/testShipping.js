// Manual Test Script for Shipping Charges
// Run this in browser console to test shipping pricing

import { getMockICarryClient } from './icarryClient.js';

const mockClient = getMockICarryClient();

// Test cases for different pincodes
const testCases = [
  { pincode: '400001', city: 'Mumbai, Maharashtra', expected: 300 },
  { pincode: '422101', city: 'Nashik, Maharashtra', expected: 300 },
  { pincode: '411001', city: 'Pune, Maharashtra', expected: 300 },
  { pincode: '110001', city: 'Delhi', expected: 400 },
  { pincode: '560001', city: 'Bangalore, Karnataka', expected: 450 },
  { pincode: '600001', city: 'Chennai, Tamil Nadu', expected: 550 },
  { pincode: '700001', city: 'Kolkata, West Bengal', expected: 600 },
  { pincode: '800001', city: 'Patna, Bihar', expected: 500 },
  { pincode: '500001', city: 'Hyderabad, Telangana', expected: 500 },
  { pincode: '300001', city: 'Ahmedabad, Gujarat', expected: 500 },
];

console.log('🚚 Testing Shipping Charges by Pincode');
console.log('=====================================');

async function testShippingCharges() {
  for (const testCase of testCases) {
    try {
      const quote = await mockClient.getQuote({
        originPincode: '422101',
        destinationPincode: testCase.pincode,
        weightKg: 5,
      });
      
      const status = quote.amount === testCase.expected ? '✅' : '❌';
      console.log(`${status} ${testCase.pincode} - ${testCase.city}: ₹${quote.amount} (Expected: ₹${testCase.expected})`);
    } catch (error) {
      console.log(`❌ ${testCase.pincode} - ${testCase.city}: Error - ${error.message}`);
    }
  }
  
  console.log('\n📊 Summary:');
  console.log('- Maharashtra (400000-499999): ₹300 (Same state - Lower cost)');
  console.log('- Delhi (110000-110099): ₹400 (Medium cost)');
  console.log('- Bangalore (560000-560099): ₹450 (Medium cost)');
  console.log('- Chennai (600000-600099): ₹550 (Higher cost)');
  console.log('- Kolkata (700000-700099): ₹600 (Higher cost)');
  console.log('- Other locations: ₹500 (Standard cost)');
}

// Run the test
testShippingCharges();
