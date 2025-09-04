<?php
/**
 * iCarry API Test Script
 * This script tests the iCarry API integration to verify credentials and functionality
 */

// iCarry API Configuration
$config = [
    'base_url' => 'https://www.icarry.in',
    'username' => 'your_icarry_username', // Replace with your actual username
    'api_key' => 'aC64fCGK5tOsb0oY3fBneDjTXdb5ku5y60vghnIQZIGRpN5IJx0gkxIOZi0XvbbV1rAHFxjPR1QaP5Lf1LleZ4mjmfr4q3AUMSsbhGUiHnfxDKyncOhcYWLOVvCG4WmDhi4wlK1ZAMukokbzZvq07d5oFuD57Nht5AgiQEYJWouytKXFmbSybL0fBr5yM4jwnkb1J3b6Tdi5y0LbgGAEenfCGgdoZESUdGjKxYiI6IpkTHMDZuxqu3Ugx5jX7UuI',
    'origin_pincode' => '422101'
];

class ICarryTester {
    private $baseUrl;
    private $username;
    private $apiKey;
    private $originPincode;
    private $apiToken;
    
    public function __construct($config) {
        $this->baseUrl = $config['base_url'];
        $this->username = $config['username'];
        $this->apiKey = $config['api_key'];
        $this->originPincode = $config['origin_pincode'];
    }
    
    /**
     * Test API authentication
     */
    public function testAuthentication() {
        echo "🔑 Testing iCarry Authentication...\n";
        
        $url = $this->baseUrl . '/api_login';
        $data = [
            'username' => $this->username,
            'Key' => $this->apiKey
        ];
        
        $response = $this->makeRequest('POST', $url, $data);
        
        if ($response['success']) {
            $result = json_decode($response['body'], true);
            if (isset($result['api_token'])) {
                $this->apiToken = $result['api_token'];
                echo "✅ Authentication successful!\n";
                echo "Token: " . substr($this->apiToken, 0, 20) . "...\n";
                return true;
            } else {
                echo "❌ Authentication failed - No API token in response\n";
                echo "Response: " . $response['body'] . "\n";
                return false;
            }
        } else {
            echo "❌ Authentication failed - HTTP Error: " . $response['http_code'] . "\n";
            echo "Response: " . $response['body'] . "\n";
            return false;
        }
    }
    
    /**
     * Test quote estimation
     */
    public function testQuote($destinationPincode = '400001') {
        if (!$this->apiToken) {
            echo "❌ Cannot test quote - No API token available\n";
            return false;
        }
        
        echo "📦 Testing Quote Estimation...\n";
        echo "From: {$this->originPincode} (Nashik)\n";
        echo "To: {$destinationPincode}\n";
        
        $url = $this->baseUrl . '/api_estimate';
        $data = [
            'origin_pincode' => $this->originPincode,
            'destination_pincode' => $destinationPincode,
            'weight' => '5', // 5kg
            'length' => '30',
            'breadth' => '20',
            'height' => '15',
            'api_token' => $this->apiToken
        ];
        
        $response = $this->makeRequest('POST', $url, $data);
        
        if ($response['success']) {
            $result = json_decode($response['body'], true);
            echo "✅ Quote request successful!\n";
            echo "Response: " . json_encode($result, JSON_PRETTY_PRINT) . "\n";
            return true;
        } else {
            echo "❌ Quote request failed - HTTP Error: " . $response['http_code'] . "\n";
            echo "Response: " . $response['body'] . "\n";
            return false;
        }
    }
    
    /**
     * Test serviceability check
     */
    public function testServiceability($destinationPincode = '400001') {
        if (!$this->apiToken) {
            echo "❌ Cannot test serviceability - No API token available\n";
            return false;
        }
        
        echo "🚚 Testing Serviceability...\n";
        echo "From: {$this->originPincode} (Nashik)\n";
        echo "To: {$destinationPincode}\n";
        
        $url = $this->baseUrl . '/api_serviceability';
        $data = [
            'origin_pincode' => $this->originPincode,
            'destination_pincode' => $destinationPincode,
            'api_token' => $this->apiToken
        ];
        
        $response = $this->makeRequest('POST', $url, $data);
        
        if ($response['success']) {
            $result = json_decode($response['body'], true);
            echo "✅ Serviceability check successful!\n";
            echo "Response: " . json_encode($result, JSON_PRETTY_PRINT) . "\n";
            return true;
        } else {
            echo "❌ Serviceability check failed - HTTP Error: " . $response['http_code'] . "\n";
            echo "Response: " . $response['body'] . "\n";
            return false;
        }
    }
    
    /**
     * Make HTTP request
     */
    private function makeRequest($method, $url, $data) {
        $ch = curl_init();
        
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        
        if ($method === 'POST') {
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/x-www-form-urlencoded'
            ]);
        }
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        
        curl_close($ch);
        
        if ($error) {
            return [
                'success' => false,
                'http_code' => 0,
                'body' => $error
            ];
        }
        
        return [
            'success' => $httpCode >= 200 && $httpCode < 300,
            'http_code' => $httpCode,
            'body' => $response
        ];
    }
    
    /**
     * Run all tests
     */
    public function runAllTests() {
        echo "🚀 Starting iCarry API Tests\n";
        echo "================================\n\n";
        
        // Test 1: Authentication
        $authSuccess = $this->testAuthentication();
        echo "\n";
        
        if (!$authSuccess) {
            echo "❌ Authentication failed. Cannot proceed with other tests.\n";
            return false;
        }
        
        // Test 2: Serviceability
        $this->testServiceability();
        echo "\n";
        
        // Test 3: Quote for different cities
        $testPincodes = [
            '400001' => 'Mumbai',
            '110001' => 'Delhi',
            '560001' => 'Bangalore',
            '600001' => 'Chennai',
            '700001' => 'Kolkata'
        ];
        
        foreach ($testPincodes as $pincode => $city) {
            echo "Testing quote for {$city} ({$pincode}):\n";
            $this->testQuote($pincode);
            echo "\n";
        }
        
        echo "✅ All tests completed!\n";
        return true;
    }
}

// Main execution
echo "iCarry API Test Script\n";
echo "======================\n\n";

// Check if username is set
if ($config['username'] === 'your_icarry_username') {
    echo "⚠️  WARNING: Please update the username in the config array!\n";
    echo "Current username: " . $config['username'] . "\n";
    echo "Please replace 'your_icarry_username' with your actual iCarry username.\n\n";
}

$tester = new ICarryTester($config);
$tester->runAllTests();

echo "\n";
echo "📋 Test Summary:\n";
echo "- Authentication: Tests if your API credentials work\n";
echo "- Serviceability: Tests if iCarry can deliver to specific pincodes\n";
echo "- Quote Estimation: Tests if you can get shipping quotes\n";
echo "\n";
echo "💡 If any test fails, check:\n";
echo "1. Your iCarry username and API key are correct\n";
echo "2. Your iCarry account is active\n";
echo "3. You have sufficient API credits\n";
echo "4. The destination pincodes are valid\n";
?>
