import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ChevronLeft, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import QuantitySelector from '../components/ui/QuantitySelector';
import { formatCurrency } from '../utils/formatters';
import { calculateTax, getStateFromPincode } from '../utils/taxCalculator';

const CartPage: React.FC = () => {
  const { getCartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const cartItems = getCartItems();
  const [pincode, setPincode] = useState('');
  const detectedState = pincode.length === 6 ? getStateFromPincode(pincode) : 'Maharashtra';
  
  const subtotal = getCartTotal();
  const taxCalculation = calculateTax(subtotal, detectedState);
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 mt-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
        <Link to="/">
          <Button variant="primary" leftIcon={<ChevronLeft />}>
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.productId} className="py-6 flex">
                    <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <Link 
                              to={`/product/${item.productId}`}
                              className="hover:text-[#fe6302] transition-colors"
                            >
                              {item.product.name}
                            </Link>
                          </h3>
                          <p className="ml-4">
                            {formatCurrency((item.product.salePrice || item.product.price) * item.quantity)}
                          </p>
                        </div>
                        {item.product.salePrice && (
                          <p className="mt-1 text-sm text-gray-500 line-through">
                            {formatCurrency(item.product.price * item.quantity)}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <div className="flex items-center">
                          <span className="text-gray-500 mr-3">Qty</span>
                          <QuantitySelector
                            value={item.quantity}
                            onChange={(value) => updateQuantity(item.productId, value)}
                            size="sm"
                          />
                        </div>
                        
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.productId)}
                          className="font-medium text-[#fe6302] hover:text-[#fe6302] flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 flex justify-between">
                <Link to="/">
                  <Button
                    variant="outline"
                    leftIcon={<ChevronLeft />}
                  >
                    Continue Shopping
                  </Button>
                </Link>
                
                <Button
                  variant="ghost"
                  onClick={() => clearCart()}
                  className="text-[#fe6302] hover:text-[#fe6302]"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              
              <div className="border-t border-gray-200 py-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {subtotal > 5000 ? 'Pan India' : formatCurrency(500)}
                  </span>
                </div>
                
                {/* Pincode for Tax Calculation */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Pincode for Tax Calculation
                  </label>
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.slice(0, 6))}
                    placeholder="Enter 6-digit pincode"
                    maxLength={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe6302] focus:border-transparent"
                  />
                  {pincode.length === 6 && (
                    <p className="text-xs text-gray-600 mt-1">
                      Detected State: <span className="font-medium text-[#fe6302]">{detectedState}</span>
                    </p>
                  )}
                </div>
                
                {/* Tax Display */}
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Tax ({taxCalculation.taxBreakdown})</span>
                  <span className="font-medium">
                    {formatCurrency(taxCalculation.totalTax)}
                  </span>
                </div>
                
                {/* Tax Breakdown */}
                {detectedState.toLowerCase() === 'maharashtra' ? (
                  <div className="text-xs text-gray-500 ml-4">
                    <div>CGST (9%): {formatCurrency(taxCalculation.cgst)}</div>
                    <div>SGST (9%): {formatCurrency(taxCalculation.sgst)}</div>
                  </div>
                ) : (
                  <div className="text-xs text-gray-500 ml-4">
                    <div>IGST (18%): {formatCurrency(taxCalculation.igst)}</div>
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between mb-6">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold">
                    {formatCurrency(
                      subtotal +
                      (subtotal > 5000 ? 0 : 500) +
                      taxCalculation.totalTax
                    )}
                  </span>
                </div>
                

                
                <Link to="/checkout">
                  <Button variant="primary" fullWidth size="lg">
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;