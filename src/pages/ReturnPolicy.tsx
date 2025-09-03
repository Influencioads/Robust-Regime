import React from 'react';

const ReturnPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Return and Replacement Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Defective Products</h2>
            <p className="mb-6">
              If a product you receive fails to serve its purpose due to a defect, Robust Regime will cover all shipping charges for returning the defective product and sending a replacement. This includes customer pick-up and delivery of the replacement product.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Warranty Coverage</h2>
            <p className="mb-6">
              Our product warranty covers structural damage only. If the product suffers from asthmatic damage (i.e., damage from misuse or neglect), the return policy is void.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Steps to Follow for Returns</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Damaged Packaging</h3>
            <p className="mb-4">
              If you receive a product in damaged packaging, please make a video and submit it to the salesperson who assisted you with the purchase.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Minor or No Damage</h3>
            <p className="mb-4">
              If the product has only minor damage or no damage, the return shipping and replacement policy is void.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Significant Damage</h3>
            <p className="mb-6">
              If the product is significantly damaged and does not serve its purpose, an immediate replacement process will be initiated after our sales team and engineering department approve the replacement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Special Considerations</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Defective Products on Sunday</h3>
            <p className="mb-4">
              If you receive a defective product on a Sunday (our office is closed) and it is the last day of your warranty claim, do not worry. We will consider the day and process the claim after confirming the product is eligible for replacement.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Warranty Form</h3>
            <p className="mb-6">
              Always fill out the warranty form upon receiving the product.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Policy Applicability</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Invoice Holder</h3>
            <p className="mb-4">
              The return and shipping policy is only applicable to the person named on the invoice. If the product is gifted or resold to another person, Robust Regime reserves the right to void the return and shipping policy.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Counterfeiting</h3>
            <p className="mb-4">
              Any tampering or unauthorized modifications to the product not supported by our workshop or staff will void the return and shipping policy.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Customer Error</h3>
            <p className="mb-6">
              If you wish to replace a product due to personal error or a change of mind after receiving it, you are responsible for returning the product to the Robust Regime office or warehouse facility.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">No Refund Policy</h2>
            <p className="mb-4">
              At Robust Regime, we are committed to providing high-quality products and excellent customer service. However, please be aware of our strict No Refund Policy:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">No Refunds</h3>
            <p className="mb-6">
              All sales are final. We do not offer refunds for any purchases made through our website, robustregime.com. By making a purchase, you agree to this policy and acknowledge that you will not be entitled to a refund under any circumstances.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              For any questions or concerns about our shipping policy, please contact our customer service team at:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-semibold text-gray-800 mr-2">Email:</span>
                  <a href="mailto:salesteam@robustregime.com" className="text-[#fe6302] hover:underline">
                    salesteam@robustregime.com
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-800 mr-2">Phone:</span>
                  <a href="tel:+918446689098" className="text-[#fe6302] hover:underline">
                    +91 8446689098
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-gray-800 mr-2">Address:</span>
                  <span className="text-gray-700">
                    Robust Regime warehouse, Ambad Link Road, Near Mauli Lawns, DGP Nagar 2, Kamathwada, Nashik, MIDC, 422010.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-center text-lg text-gray-700 font-medium">
              Thank you for choosing Robust Regime. We look forward to serving your fitness needs with our premium gym equipment!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
