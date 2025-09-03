import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gray-900 flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/669577/pexels-photo-669577.jpeg" 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl opacity-0 animate-fadeInLeft -mt-12">
            <h1 className="text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90">
              We're here to help! Reach out to us for any questions about our products or services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <MapPin className="h-6 w-6" />,
                title: "Visit Us",
                info: "Asherestate, Varun, 3, 7 Upnagar, Nashik - Pune Rd, Nashik, Maharashtra 422101"
              },
              {
                icon: <Mail className="h-6 w-6" />,
                title: "Email Us",
                info: "contact@robustregime.com"
              },
              {
                icon: <Phone className="h-6 w-6" />,
                title: "Call Us",
                info: "+91 8446689098"
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "Business Hours",
                info: "Mon - Sat: 9:00 AM - 6:00 PM"
              }
            ].map((contact, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-red-100 rounded-full text-red-600">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                <p className="text-gray-600">{contact.info}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 opacity-0 animate-fadeInLeft">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="product">Product Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="warranty">Warranty Claim</option>
                      <option value="business">Business Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="bg-red-600 hover:bg-red-700"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="opacity-0 animate-fadeInRight">
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div className="rounded-lg overflow-hidden shadow-lg h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9028701952392!2d73.77559661491943!3d19.97923728657728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb0f0000000f%3A0x8018d1789d7d0b0e!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1629789456789!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 opacity-0 animate-fadeInUp">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "What is your delivery timeline?",
                  answer: "We typically deliver within 5-7 business days across major cities in India. Remote locations might take 7-10 business days."
                },
                {
                  question: "Do you offer installation services?",
                  answer: "Yes, we provide professional installation services for all our equipment. Our team will ensure proper setup and demonstrate proper usage."
                },
                {
                  question: "What warranty do you offer?",
                  answer: "Our products come with warranties ranging from 1-5 years, depending on the equipment type. All warranties cover manufacturing defects and normal wear and tear."
                },
                {
                  question: "Can I return products if I'm not satisfied?",
                  answer: "Yes, we offer a 30-day return policy for unused equipment in original packaging. Custom orders are non-returnable."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 opacity-0 animate-fadeInUp"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;