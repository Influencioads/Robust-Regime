## iCarry Integration (Shipping)

### Environment Setup
Create a `.env` file in the project root with the following variables:

```env
# iCarry API Configuration
VITE_ICARRY_BASE_URL=https://www.icarry.in
VITE_ICARRY_USERNAME=your_icarry_username
VITE_ICARRY_KEY=your_icarry_api_key
VITE_ORIGIN_PINCODE=422101
```

### Features Implemented
- **Live Shipping Quotes**: Dynamic pricing based on destination pincode and weight
- **Shipment Tracking**: Real-time status updates and delivery tracking
- **AWB Generation**: Automatic airway bill creation after order placement
- **Label Printing**: Download shipping labels on-demand
- **Cost Breakdown**: Detailed shipping charges (COD, fuel surcharge, GST)

### API Methods Available
- `getQuote()` - Fetch live shipping quotes
- `checkServiceability()` - Verify pincode serviceability
- `createShipment()` - Generate AWB and label
- `trackShipment()` - Get complete tracking history
- `syncShipmentStatus()` - Quick status updates
- `getShipmentCharges()` - Detailed cost breakdown
- `cancelShipment()` - Cancel before pickup
- `printLabel()` - Download shipping label

### Integration Points
- **Checkout Page**: Live shipping quotes based on destination pincode
- **Order Success**: Automatic AWB generation after order placement
- **Admin Panel**: Shipment tracking and management (ready for implementation)

### Troubleshooting
If you see "Unable to fetch live shipping" error:
1. Check that all environment variables are set correctly
2. Verify iCarry API credentials are valid
3. Ensure destination pincode is serviceable
4. Check browser console for detailed error messages


