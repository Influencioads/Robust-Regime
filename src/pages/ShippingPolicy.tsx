import React from 'react';

const ShippingPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Shipping Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Order Processing</h2>
            <p className="mb-6">
              All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in the shipment of your order, we will contact you via email or phone.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Shipping Time</h2>
            <p className="mb-6">
              At Robust Regime, we strive to process and ship all orders as quickly as possible. Our standard shipping time is 6-14 days from the date of purchase. Please note that shipping times may vary based on the destination and external factors beyond our control.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Wrong Product Ordered by Buyer</h2>
            <p className="mb-6">
              If you have ordered the wrong product, please contact our customer service team immediately. After verifying the condition of the product, if it meets our return standards, you may return it to our warehouse. Please note that in such cases, the buyer will bear the shipping cost to our warehouse.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Wrong Product Received</h2>
            <p className="mb-6">
              In the unlikely event that you receive the wrong product, Robust Regime will take full responsibility for the error. We will cover the cost of both picking up the incorrect product and delivering the correct one to you. Please contact our customer service team to arrange the return and replacement process.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Shipping Rates & Delivery Estimates</h2>
            <p className="mb-6">
              Shipping charges for your order will be calculated and displayed at checkout. Delivery delays can occasionally occur.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Customs, Duties, and Taxes</h2>
            <p className="mb-6">
              Robust Regime is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Address Changes</h2>
            <p className="mb-6">
              If you need to change the shipping address, please contact us as soon as possible. We can only make changes to the shipping address if the order has not yet been shipped.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Failed Delivery Attempts</h2>
            <p className="mb-6">
              Our carriers will make several attempts to deliver your package. If they are unable to deliver the package after multiple attempts, the package will be returned to our warehouse, and we will issue a refund for the purchase price minus the shipping charges.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Customer Service</h2>
            <p className="mb-6">
              If you have any questions regarding our shipping policy, please contact us at{' '}
              <a href="mailto:salesteam@robustregime.com" className="text-[#fe6302] hover:underline">
                salesteam@robustregime.com
              </a>
              . Our customer service team is available to assist you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
