import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle, X, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { Address } from '../types';
import Button from '../components/ui/Button';
import { formatCurrency } from '../utils/formatters';
import { calculateTax, getStateFromPincode } from '../utils/taxCalculator';
import { getICarryClientFromEnv, isICarryConfigured, getMockICarryClient } from '../utils/icarryClient';
import { validateEmail, validatePhone, validateName, validateAddress, validatePincode } from '../utils/validators';
import { validateCoupon, CouponValidationResult } from '../utils/couponValidator';

type PaymentMethod = 'cod' | 'online';

interface FormErrors {
  fullName?: string;
  email?: string;
  mobile?: string;
  address?: string;
  pincode?: string;
  city?: string;
  state?: string;
}

const CheckoutPage: React.FC = () => {
  const { getCartItems, getCartTotal, clearCart } = useCart();
  const { createOrder } = useOrders();
  const cartItems = getCartItems();
  const navigate = useNavigate();
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  
  // Coupon state
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<CouponValidationResult | null>(null);
  const [couponError, setCouponError] = useState('');
  
  const [shippingAddress, setShippingAddress] = useState<Address>({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pinCode: '',
    phone: '',
    email: ''
  });

  const [useShippingForBilling, setUseShippingForBilling] = useState(true);
  const [billingAddress, setBillingAddress] = useState<Address>({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pinCode: '',
    phone: '',
    email: ''
  });
  
  const subtotal = getCartTotal();
  // iCarry shipping quote state
  const [icarryAmount, setIcarryAmount] = useState<number | null>(null);
  const [icarryService, setIcarryService] = useState<string | null>(null);
  const [icarryLoading, setIcarryLoading] = useState(false);
  const [icarryError, setIcarryError] = useState<string | null>(null);
  const defaultShipping = subtotal > 5000 ? 0 : 500;
  // Prefer pincode-derived state if 6 digits are provided
  const buyerState =
    shippingAddress.pinCode && shippingAddress.pinCode.length === 6
      ? getStateFromPincode(shippingAddress.pinCode)
      : shippingAddress.state;
  const taxCalculation = calculateTax(subtotal, buyerState);
  const shipping = icarryAmount != null ? icarryAmount : defaultShipping;
  const couponDiscount = appliedCoupon?.discountAmount || 0;
  const total = subtotal + shipping + taxCalculation.totalTax - couponDiscount;

  // Coupon functions
  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponError('Please enter a coupon code');
      return;
    }

    const result = validateCoupon(couponCode, subtotal);
    if (result.isValid) {
      setAppliedCoupon(result);
      setCouponError('');
    } else {
      setCouponError(result.message);
      setAppliedCoupon(null);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
  };

  // Fetch iCarry quote when pincode is valid
  useEffect(() => {
    const destPin = shippingAddress.pinCode?.trim();
    if (!destPin || destPin.length !== 6) {
      setIcarryAmount(null);
      setIcarryService(null);
      return;
    }
    
    let aborted = false;
    
    const fetchQuote = async () => {
      try {
        setIcarryLoading(true);
        setIcarryError(null);
        
        // Use mock shipping for clean experience
        const mockClient = getMockICarryClient();
        const quote = await mockClient.getQuote({
          originPincode: '422101',
          destinationPincode: destPin,
          weightKg: 5,
        });
        
        if (aborted) return;
        setIcarryAmount(Number(quote.amount || 0));
        setIcarryService(quote.service || 'STANDARD');
        setIcarryError(null); // No error messages
      } finally {
        if (!aborted) setIcarryLoading(false);
      }
    };
    fetchQuote();
    return () => {
      aborted = true;
    };
  }, [shippingAddress.pinCode, getCartItems]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!validateName(shippingAddress.fullName)) {
      newErrors.fullName = 'Please enter a valid name (minimum 3 characters)';
    }
    
    if (!validateEmail(shippingAddress.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!validatePhone(shippingAddress.phone)) {
      newErrors.mobile = 'Please enter a valid 10 digit mobile number starting with 6-9';
    }
    
    if (!validateAddress(shippingAddress.addressLine1)) {
      newErrors.address = 'Please enter a complete address (minimum 10 characters)';
    }
    
    if (!validatePincode(shippingAddress.pinCode)) {
      newErrors.pincode = 'Please enter a valid 6 digit pincode';
    }
    
    if (!shippingAddress.city.trim()) {
      newErrors.city = 'City is required';
    }
    
    if (!shippingAddress.state.trim()) {
      newErrors.state = 'State is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleShippingAddressChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setShippingAddress(prev => ({
      ...prev,
      [name]: value
    }));

    if (useShippingForBilling) {
      setBillingAddress(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleBillingAddressChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBillingAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    const order = await createOrder(
      cartItems,
      shippingAddress,
      useShippingForBilling ? shippingAddress : billingAddress,
      paymentMethod
    );
    console.log(order);

    // OPTIONAL: Auto-create iCarry shipment after order placement (non-blocking)
    (async () => {
      try {
        const client = getICarryClientFromEnv();
        const originPincode = (import.meta as any).env?.VITE_ORIGIN_PINCODE || '422101';
        const weightKg = Math.max(cartItems.reduce((acc, it) => acc + (it.quantity || 1), 0), 5);
        await client.createShipment({
          orderId: String(order?.id || Date.now()),
          originPincode,
          destinationPincode: shippingAddress.pinCode,
          weightKg,
          receiver: {
            name: shippingAddress.fullName,
            phone: shippingAddress.phone,
            address1: shippingAddress.addressLine1,
            address2: shippingAddress.addressLine2,
            city: shippingAddress.city,
            state: buyerState,
            pincode: shippingAddress.pinCode,
          },
          sender: {
            name: 'Robust Regime',
            phone: '0000000000',
            address1: 'Warehouse',
            city: 'Nashik',
            state: 'Maharashtra',
            pincode: originPincode,
          },
        });
      } catch (err) {
        console.warn('iCarry create shipment skipped/failed:', err);
      }
    })();

    // Redirect to order success page with order details
    navigate('/order-success', { state: { order } });
  };
  
  if (cartItems.length === 0 && !orderComplete) {
    navigate('/cart');
    return null;
  }
  
  if (orderComplete) {
    return (
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Order Successfully Placed!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase! Your order has been received and is being processed.
            </p>
            <p className="text-gray-800 mb-8">
              Your order number is: <span className="font-bold">RR-{Math.floor(100000 + Math.random() * 900000)}</span>
            </p>
            <p className="text-gray-600 mb-6">
              A confirmation email has been sent to {shippingAddress.email}
            </p>
            <Link to="/">
              <Button variant="primary">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/cart" className="inline-flex items-center text-red-600 hover:text-red-800">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Cart
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={shippingAddress.fullName}
                      onChange={handleShippingAddressChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={shippingAddress.email}
                        onChange={handleShippingAddressChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="phone"
                        value={shippingAddress.phone}
                        onChange={handleShippingAddressChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 ${
                          errors.mobile ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.mobile && (
                        <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <textarea
                      id="address"
                      name="addressLine1"
                      rows={3}
                      value={shippingAddress.addressLine1}
                      onChange={handleShippingAddressChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 ${
                        errors.address ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pinCode"
                      value={shippingAddress.pinCode}
                      onChange={handleShippingAddressChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 ${
                        errors.pincode ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.pincode && (
                      <p className="mt-1 text-sm text-red-600">{errors.pincode}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={shippingAddress.city}
                        onChange={handleShippingAddressChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 ${
                          errors.city ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={shippingAddress.state}
                        onChange={handleShippingAddressChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 ${
                          errors.state ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.state && (
                        <p className="mt-1 text-sm text-red-600">{errors.state}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                  
                  <div className="space-y-4">
                    <div 
                      className={`border rounded-md p-4 cursor-pointer ${
                        paymentMethod === 'cod' ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      onClick={() => setPaymentMethod('cod')}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="cod"
                          name="paymentMethod"
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                          className="h-4 w-4 text-red-600 focus:ring-red-500"
                        />
                        <label htmlFor="cod" className="ml-3 block text-gray-900 font-medium">
                          Cash on Delivery
                        </label>
                      </div>
                      {paymentMethod === 'cod' && (
                        <p className="mt-2 text-sm text-gray-600">
                          Pay with cash when your order is delivered.
                        </p>
                      )}
                    </div>
                    
                    <div 
                      className={`border rounded-md p-4 cursor-pointer ${
                        paymentMethod === 'online' ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      onClick={() => setPaymentMethod('online')}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="online"
                          name="paymentMethod"
                          checked={paymentMethod === 'online'}
                          onChange={() => setPaymentMethod('online')}
                          className="h-4 w-4 text-red-600 focus:ring-red-500"
                        />
                        <label htmlFor="online" className="ml-3 block text-gray-900 font-medium">
                          Online Payment (Card/UPI/Netbanking)
                        </label>
                      </div>
                      {paymentMethod === 'online' && (
                        <p className="mt-2 text-sm text-gray-600">
                          Secure payment with credit/debit card, UPI, or net banking.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Place Order'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="max-h-72 overflow-y-auto mb-6">
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.productId} className="py-4 flex">
                      <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <h3 className="text-sm font-medium text-gray-900">
                            {item.product.name}
                          </h3>
                          <p className="text-sm font-medium text-gray-900">
                            {formatCurrency((item.product.salePrice || item.product.price) * item.quantity)}
                          </p>
                        </div>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t border-gray-200 py-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatCurrency(subtotal)}</span>
                </div>
                
                {/* Coupon Code Section */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Apply coupon</h3>
                  {!appliedCoupon ? (
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Please enter a valid coupon code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe6302] focus:border-transparent bg-gray-50"
                        />
                      </div>
                      <button
                        onClick={handleApplyCoupon}
                        className="px-6 py-3 bg-[#fe6302] text-white rounded-lg hover:bg-[#fe6302]/90 transition-colors font-medium"
                      >
                        Apply
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#fe6302]" />
                        <div>
                          <p className="text-sm font-medium text-orange-800">
                            Coupon "{couponCode}" applied
                          </p>
                          <p className="text-xs text-orange-600">
                            {appliedCoupon.message}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={handleRemoveCoupon}
                        className="text-[#fe6302] hover:text-[#fe6302]/80 transition-colors p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  {couponError && (
                    <p className="text-sm text-red-600 mt-2">{couponError}</p>
                  )}
                </div>

                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Shipping {icarryService ? `(iCarry ${icarryService})` : ''}</span>
                  <span className="font-medium">
                    {icarryLoading ? 'Fetching…' : shipping === 0 ? 'Pan India' : formatCurrency(shipping)}
                  </span>
                </div>
                {icarryError && (
                  <div className="text-xs text-red-600 mb-2">{icarryError}</div>
                )}
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Tax ({taxCalculation.taxBreakdown})</span>
                  <span className="font-medium">{formatCurrency(taxCalculation.totalTax)}</span>
                </div>
                
                {/* Coupon Discount */}
                {appliedCoupon && (
                  <div className="flex justify-between mb-2">
                    <span className="text-[#fe6302]">Coupon Discount ({appliedCoupon.discountPercent}% OFF)</span>
                    <span className="font-medium text-[#fe6302]">-{formatCurrency(appliedCoupon.discountAmount)}</span>
                  </div>
                )}
                
                {/* Tax Breakdown */}
                {shippingAddress.state.toLowerCase() === 'maharashtra' ? (
                  <div className="text-xs text-gray-500 ml-4 mb-2">
                    <div>CGST (9%): {formatCurrency(taxCalculation.cgst)}</div>
                    <div>SGST (9%): {formatCurrency(taxCalculation.sgst)}</div>
                  </div>
                ) : (
                  <div className="text-xs text-gray-500 ml-4 mb-2">
                    <div>IGST (18%): {formatCurrency(taxCalculation.igst)}</div>
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold">{formatCurrency(total)}</span>
                </div>
                {/* Example hook: live iCarry quote (optional) */}
                {/*
                <div className="mt-3 text-sm text-gray-500">
                  Shipping via iCarry is enabled. Live quote can be fetched using
                  origin pincode, destination pincode, and weight to replace the
                  flat shipping logic above.
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;