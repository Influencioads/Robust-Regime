import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useParams, useLocation } from 'react-router-dom';
import Button from './Button';

const FloatingButtons: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [productId, setProductId] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: '',
    productId: ''
  });

  // Capture product ID from URL
  useEffect(() => {
    if (id) {
      setProductId(id);
      setFormData(prev => ({ ...prev, productId: id }));
    } else {
      setProductId(null);
      setFormData(prev => ({ ...prev, productId: '' }));
    }
  }, [id, location.pathname]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918446689098', '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare data to send to backend
    const backendData = {
      ...formData,
      productId: productId || null,
      pageType: productId ? 'product' : 'home'
    };
    
    // Console log the backend data
    console.log('🚀 Sending data to backend:', backendData);
    console.log('📊 Form Data Details:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      product: formData.product,
      message: formData.message,
      productId: productId,
      pageType: productId ? 'product' : 'home',
      currentUrl: window.location.href,
      timestamp: new Date().toISOString()
    });
    
    // Show data in alert for easy viewing
    alert(`Data being sent to backend:\n\n${JSON.stringify(backendData, null, 2)}`);
    
    try {
      // Send data to backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(backendData),
      });

      if (response.ok) {
        console.log('✅ Form submitted successfully!');
        console.log('📧 Product ID sent:', productId);
        console.log('🌐 Page type:', productId ? 'product' : 'home');
        // Show thank you message
        setShowThankYou(true);
        // Reset form data but keep modal open
        setFormData({ name: '', email: '', phone: '', product: '', message: '', productId: productId || '' });
      } else {
        console.error('❌ Failed to submit form - Response status:', response.status);
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('💥 Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-24 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Quick Contact Form Button */}
      <button
        onClick={() => setIsFormOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#fe6302] text-white p-4 rounded-full shadow-lg hover:bg-[#fe6302] transition-all transform hover:scale-110"
        aria-label="Open quick contact form"
      >
        <Send className="h-6 w-6" />
      </button>

      {/* Quick Contact Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative animate-scaleIn">
            <button
              onClick={() => {
                setIsFormOpen(false);
                setShowThankYou(false);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
              
              {showThankYou ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600 mb-4">
                    Your message has been sent successfully. We'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="quick-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="quick-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fe6302] focus:border-[#fe6302]"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="quick-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="quick-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fe6302] focus:border-[#fe6302]"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="quick-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="quick-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fe6302] focus:border-[#fe6302]"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="quick-product" className="block text-sm font-medium text-gray-700 mb-1">
                    Product Interest *
                  </label>
                  <select
                    id="quick-product"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fe6302] focus:border-[#fe6302]"
                    required
                  >
                    <option value="">Select a product category</option>
                    <option value="power-racks">Racks</option>
                    <option value="dumbbells">Dumbbells</option>
                    <option value="barbells">Barbells</option>
                    <option value="benches">Benches</option>
                    <option value="accessories">Accessories</option>
                    <option value="combo-offers">Combo Offers</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quick-message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="quick-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#fe6302] focus:border-[#fe6302]"
                    placeholder="Tell us about your fitness goals or specific requirements..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  className="bg-[#fe6302] hover:bg-[#fe6302]"
                >
                  Send Message
                </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;