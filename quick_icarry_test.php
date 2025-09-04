<?php
/**
 * Quick iCarry API Test
 * Simple script to quickly test if iCarry API is working
 */

// Configuration
$baseUrl = 'https://www.icarry.in';
$username = 'your_icarry_username'; // Replace with your actual username
$apiKey = 'aC64fCGK5tOsb0oY3fBneDjTXdb5ku5y60vghnIQZIGRpN5IJx0gkxIOZi0XvbbV1rAHFxjPR1QaP5Lf1LleZ4mjmfr4q3AUMSsbhGUiHnfxDKyncOhcYWLOVvCG4WmDhi4wlK1ZAMukokbzZvq07d5oFuD57Nht5AgiQEYJWouytKXFmbSybL0fBr5yM4jwnkb1J3b6Tdi5y0LbgGAEenfCGgdoZESUdGjKxYiI6IpkTHMDZuxqu3Ugx5jX7UuI';
$originPincode = '422101';

echo "🔍 Quick iCarry API Test\n";
echo "========================\n\n";

// Step 1: Test Authentication
echo "1. Testing Authentication...\n";
$authUrl = $baseUrl . '/api_login';
$authData = [
    'username' => $username,
    'Key' => $apiKey
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $authUrl);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($authData));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$authResponse = curl_exec($ch);
$authHttpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$authError = curl_error($ch);
curl_close($ch);

if ($authError) {
    echo "❌ cURL Error: " . $authError . "\n";
    exit;
}

if ($authHttpCode !== 200) {
    echo "❌ Authentication failed. HTTP Code: " . $authHttpCode . "\n";
    echo "Response: " . $authResponse . "\n";
    exit;
}

$authResult = json_decode($authResponse, true);
if (!isset($authResult['api_token'])) {
    echo "❌ Authentication failed. No API token in response.\n";
    echo "Response: " . $authResponse . "\n";
    exit;
}

$apiToken = $authResult['api_token'];
echo "✅ Authentication successful!\n";
echo "Token: " . substr($apiToken, 0, 20) . "...\n\n";

// Step 2: Test Quote
echo "2. Testing Quote Estimation...\n";
$quoteUrl = $baseUrl . '/api_estimate';
$quoteData = [
    'origin_pincode' => $originPincode,
    'destination_pincode' => '400001', // Mumbai
    'weight' => '5',
    'length' => '30',
    'breadth' => '20',
    'height' => '15',
    'api_token' => $apiToken
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $quoteUrl);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($quoteData));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$quoteResponse = curl_exec($ch);
$quoteHttpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$quoteError = curl_error($ch);
curl_close($ch);

if ($quoteError) {
    echo "❌ cURL Error: " . $quoteError . "\n";
    exit;
}

if ($quoteHttpCode !== 200) {
    echo "❌ Quote request failed. HTTP Code: " . $quoteHttpCode . "\n";
    echo "Response: " . $quoteResponse . "\n";
    exit;
}

$quoteResult = json_decode($quoteResponse, true);
echo "✅ Quote request successful!\n";
echo "Response: " . json_encode($quoteResult, JSON_PRETTY_PRINT) . "\n\n";

// Step 3: Test Serviceability
echo "3. Testing Serviceability...\n";
$serviceUrl = $baseUrl . '/api_serviceability';
$serviceData = [
    'origin_pincode' => $originPincode,
    'destination_pincode' => '400001', // Mumbai
    'api_token' => $apiToken
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $serviceUrl);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($serviceData));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$serviceResponse = curl_exec($ch);
$serviceHttpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$serviceError = curl_error($ch);
curl_close($ch);

if ($serviceError) {
    echo "❌ cURL Error: " . $serviceError . "\n";
    exit;
}

if ($serviceHttpCode !== 200) {
    echo "❌ Serviceability check failed. HTTP Code: " . $serviceHttpCode . "\n";
    echo "Response: " . $serviceResponse . "\n";
    exit;
}

$serviceResult = json_decode($serviceResponse, true);
echo "✅ Serviceability check successful!\n";
echo "Response: " . json_encode($serviceResult, JSON_PRETTY_PRINT) . "\n\n";

echo "🎉 All tests passed! iCarry API is working correctly.\n";
echo "\n";
echo "📋 Next Steps:\n";
echo "1. Update your .env file with the correct username\n";
echo "2. Restart your development server\n";
echo "3. Test the checkout page with different pincodes\n";
?>
