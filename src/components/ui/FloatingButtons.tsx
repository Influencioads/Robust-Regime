import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import Button from './Button';

const FloatingButtons: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918446689098', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quick form submitted:', formData);
    setIsFormOpen(false);
    setFormData({ name: '', phone: '', message: '' });
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
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="quick-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="quick-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="quick-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="quick-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    required
                  />
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    required
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;