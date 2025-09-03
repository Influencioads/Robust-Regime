import React from 'react';
import { useOrders } from '../context/OrderContext';
import { formatCurrency } from '../utils/formatters';

const OrdersPage: React.FC = () => {
  const { orders } = useOrders();

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 mt-16 text-center">
        <h1 className="text-3xl font-bold mb-4">No Orders Yet</h1>
        <p className="text-gray-600">You haven't placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
      
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-lg font-semibold">Order #{order.id}</h2>
                <p className="text-sm text-gray-500">
                  Placed on {new Date(order.orderDate).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium
                  ${order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                    order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'}`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  {order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Paid Online'}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-200">
                  {order.items.map((item) => (
                    <li key={`${item.productId}-${item.variant}`} className="py-4 flex">
                      <div className="flex-shrink-0 w-16 h-16">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-center object-cover rounded-md"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <h3 className="text-sm font-medium text-gray-900">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {formatCurrency(item.priceAtPurchase)}
                          </p>
                        </div>
                        {item.variant && (
                          <p className="mt-1 text-sm text-gray-500">
                            {item.variantType === 'weight' ? 'Weight: ' : 'Size: '}
                            {item.variant}
                          </p>
                        )}
                        <p className="mt-1 text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-6 pt-4">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total</p>
                <p>{formatCurrency(order.totalAmount)}</p>
              </div>
              
              <div className="mt-4 text-sm text-gray-500">
                <h4 className="font-medium text-gray-900">Shipping Address</h4>
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

              {order.trackingId && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-900">
                    Tracking ID: {order.trackingId}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage; 