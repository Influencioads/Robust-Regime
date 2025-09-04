# iCarry API Testing Scripts

This directory contains PHP scripts to test the iCarry API integration and verify that your credentials are working correctly.

## Files

1. **`test_icarry.php`** - Comprehensive test script with detailed output
2. **`quick_icarry_test.php`** - Simple test script for quick verification
3. **`ICARRY_TEST_README.md`** - This instruction file

## Prerequisites

- PHP 7.0 or higher
- cURL extension enabled
- Valid iCarry API credentials

## Setup

### 1. Update Configuration

Before running the tests, you need to update the configuration in both PHP files:

**In `test_icarry.php` and `quick_icarry_test.php`:**
```php
$config = [
    'base_url' => 'https://www.icarry.in',
    'username' => 'your_icarry_username', // ← Replace with your actual username
    'api_key' => 'aC64fCGK5tOsb0oY3fBneDjTXdb5ku5y60vghnIQZIGRpN5IJx0gkxIOZi0XvbbV1rAHFxjPR1QaP5Lf1LleZ4mjmfr4q3AUMSsbhGUiHnfxDKyncOhcYWLOVvCG4WmDhi4wlK1ZAMukokbzZvq07d5oFuD57Nht5AgiQEYJWouytKXFmbSybL0fBr5yM4jwnkb1J3b6Tdi5y0LbgGAEenfCGgdoZESUdGjKxYiI6IpkTHMDZuxqu3Ugx5jX7UuI',
    'origin_pincode' => '422101'
];
```

**Important:** Replace `'your_icarry_username'` with your actual iCarry username.

## Running the Tests

### Quick Test (Recommended)

For a quick verification, run:
```bash
php quick_icarry_test.php
```

This will:
- Test authentication
- Test quote estimation for Mumbai (400001)
- Test serviceability for Mumbai (400001)

### Comprehensive Test

For detailed testing across multiple cities, run:
```bash
php test_icarry.php
```

This will:
- Test authentication
- Test serviceability
- Test quote estimation for multiple cities:
  - Mumbai (400001)
  - Delhi (110001)
  - Bangalore (560001)
  - Chennai (600001)
  - Kolkata (700001)

## Expected Output

### Successful Test
```
🔍 Quick iCarry API Test
========================

1. Testing Authentication...
✅ Authentication successful!
Token: abc123def456...

2. Testing Quote Estimation...
✅ Quote request successful!
Response: {
    "carrier": "iCarry",
    "service": "STANDARD",
    "amount": "450",
    "currency": "INR"
}

3. Testing Serviceability...
✅ Serviceability check successful!
Response: {
    "serviceable": true
}

🎉 All tests passed! iCarry API is working correctly.
```

### Failed Test
```
❌ Authentication failed. HTTP Code: 401
Response: {"error": "Invalid credentials"}
```

## Troubleshooting

### Common Issues

1. **Authentication Failed (401)**
   - Check your username and API key
   - Ensure your iCarry account is active
   - Verify you have sufficient API credits

2. **cURL Error**
   - Ensure cURL extension is enabled
   - Check your internet connection
   - Verify the iCarry API URL is accessible

3. **Quote/Serviceability Failed**
   - Check if the destination pincode is valid
   - Ensure the origin pincode (422101) is correct
   - Verify your account has permission for these operations

### Debug Information

The scripts provide detailed error information:
- HTTP status codes
- Full API responses
- cURL error messages
- JSON response parsing

## Integration with React App

Once the PHP tests pass, you can:

1. **Create .env file** in your React project root:
```env
VITE_ICARRY_BASE_URL=https://www.icarry.in
VITE_ICARRY_USERNAME=your_actual_username
VITE_ICARRY_KEY=aC64fCGK5tOsb0oY3fBneDjTXdb5ku5y60vghnIQZIGRpN5IJx0gkxIOZi0XvbbV1rAHFxjPR1QaP5Lf1LleZ4mjmfr4q3AUMSsbhGUiHnfxDKyncOhcYWLOVvCG4WmDhi4wlK1ZAMukokbzZvq07d5oFuD57Nht5AgiQEYJWouytKXFmbSybL0fBr5yM4jwnkb1J3b6Tdi5y0LbgGAEenfCGgdoZESUdGjKxYiI6IpkTHMDZuxqu3Ugx5jX7UuI
VITE_ORIGIN_PINCODE=422101
```

2. **Restart your development server**:
```bash
npm run dev
```

3. **Test in the checkout page** by entering different pincodes

## API Endpoints Tested

- **Authentication**: `POST /api_login`
- **Quote Estimation**: `POST /api_estimate`
- **Serviceability**: `POST /api_serviceability`

## Support

If you encounter issues:
1. Check the iCarry API documentation
2. Verify your account status with iCarry support
3. Check the console logs in your React app
4. Review the PHP test output for specific error messages
