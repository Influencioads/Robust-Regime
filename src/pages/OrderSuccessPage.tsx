import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import { Order } from '../types';

const OrderSuccessPage: React.FC = () => {
  const location = useLocation();
  const order = location.state?.order as Order;

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-lg w-full text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase! Your order has been received.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#fe6302] text-white px-6 py-3 rounded-md hover:bg-[#fe6302]/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
            <p className="text-gray-600">
              Thank you for your purchase! Your order has been received and is being processed.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-600">Order Number:</p>
                <p className="font-medium">{order.id}</p>
              </div>
              <div>
                <p className="text-gray-600">Order Date:</p>
                <p className="font-medium">
                  {new Date(order.orderDate).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Total Amount:</p>
                <p className="font-medium">{formatCurrency(order.totalAmount)}</p>
              </div>
              <div>
                <p className="text-gray-600">Payment Method:</p>
                <p className="font-medium capitalize">{order.paymentMethod}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Shipping Address</h3>
              <div className="text-gray-600">
                <p>{order.shippingAddress.fullName}</p>
                <p>{order.shippingAddress.addressLine1}</p>
                {order.shippingAddress.addressLine2 && (
                  <p>{order.shippingAddress.addressLine2}</p>
                )}
                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.pinCode}
                </p>
                <p>Phone: {order.shippingAddress.phone}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-semibold mb-4">Order Items</h3>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.productId} className="flex items-center">
                    <div className="flex-shrink-0 w-20 h-20">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-medium">{item.product.name}</h4>
                      <p className="text-gray-600">
                        Quantity: {item.quantity}
                        {item.variant && ` | ${item.variantType}: ${item.variant}`}
                      </p>
                      <p className="font-medium">
                        {formatCurrency(item.priceAtPurchase * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-block bg-[#fe6302] text-white px-6 py-3 rounded-md hover:bg-[#fe6302]/90 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage; 